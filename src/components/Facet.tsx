import { DocumentAttributeValueType, FacetResult } from "@aws-sdk/client-kendra";
import { FC } from "react";
import { Checkbox } from "./Checkbox";
import { UseKendraSearchQueryFilter } from "hooks/useKendra";

type P = {
    facet: FacetResult;
    filters?: UseKendraSearchQueryFilter[];
    onChange?: (filters: UseKendraSearchQueryFilter[]) => void;
}

export const Facet: FC<P> = ({ facet, filters = [], onChange }) => {
    const title = facet.DocumentAttributeKey?.replace(/_/g, " ");

    function handleCheckboxChange(checked: boolean, value: string) {
        const newfilters = checked
            ? [...filters, { key: facet.DocumentAttributeKey ?? "", value }]
            : filters.filter(f => !(f.key === facet.DocumentAttributeKey && f.value === value));

        onChange?.(newfilters);
    }

    return (
        <div>
            <div className="text-[25px] text-[#201D1D] font-semibold capitalize">{title}</div>
            <div className="">
                {facet.DocumentAttributeValueType === DocumentAttributeValueType.DATE_VALUE && (
                    <>Date Value</>
                )}

                {facet.DocumentAttributeValueType === DocumentAttributeValueType.LONG_VALUE && (
                    <>Long Value</>
                )}

                {facet.DocumentAttributeValueType === DocumentAttributeValueType.STRING_LIST_VALUE && (
                    <>String List Value</>
                )}

                {facet.DocumentAttributeValueType === DocumentAttributeValueType.STRING_VALUE && facet.DocumentAttributeValueCountPairs?.map((attribute, i) => (
                    <Checkbox key={i} className="mt-[20px]" checked={filters.some(f => f.key === facet.DocumentAttributeKey && f.value === attribute.DocumentAttributeValue?.StringValue)}
                        label={`${attribute.DocumentAttributeValue?.StringValue} (${attribute.Count})`}
                        onChange={checked => handleCheckboxChange(checked, attribute.DocumentAttributeValue?.StringValue ?? "")} />
                ))}
            </div>
        </div>
    )
}
