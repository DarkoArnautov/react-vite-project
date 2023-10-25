import { useQuery } from "@tanstack/react-query";
import { KendraClient, GetQuerySuggestionsCommand, QueryCommand, AttributeFilter } from "@aws-sdk/client-kendra";
import { Paging } from "types/Paging";

const indexId = import.meta.env.VITE_AWS_KENDRA_INDEX_ID;

const client = new KendraClient({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
});

export const useKendraSuggestions = (text: string) => {
    return useQuery({
        queryKey: ["suggestions", text],
        queryFn: () => client.send(new GetQuerySuggestionsCommand({
            IndexId: indexId,
            QueryText: text,            
        })),
        enabled: text.length > 0,
        refetchOnWindowFocus: false,
    });
}

function createAttributeFilter(filters?: UseKendraSearchQueryFilter[]) {
    if (!filters) return undefined;

    const attributeFilter: AttributeFilter = {
        AndAllFilters: filters.map(filter => ({
            EqualsTo: {
                Key: filter.key,
                Value: {                    
                    StringValue: filter.value,
                },
            },
        })),
    };

    return attributeFilter;
}

export type UseKendraSearchQueryFilter = {
    key: string;
    value: string;
}

export type UseKendraSearchQuery = Partial<Paging> & {
    query?: string;
    filters?: UseKendraSearchQueryFilter[]
}

export const useKendraSearch = (query: UseKendraSearchQuery) => {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => client.send(new QueryCommand({
            IndexId: indexId,
            QueryText: query.query,
            PageNumber: query.pageNumber,
            PageSize: query.pageSize,
            AttributeFilter: createAttributeFilter(query.filters),
        })),
        enabled: !!query.query?.length,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}
