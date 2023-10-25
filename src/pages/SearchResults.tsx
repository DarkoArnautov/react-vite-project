import { useEffect, useState } from "react";
import { useKendraSearch, UseKendraSearchQuery } from "hooks/useKendra";
import { NavigationType, useLocation, useNavigate, useNavigationType } from "react-router";
import queryString from "query-string";
import { Pagination } from "components/Pagination";
import searchResultImg from "assets/search-result.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import headerImg from "assets/search-results/header.png";
import { Facet } from "components/Facet";
import { Highlight } from "components/Highlight";
import { Link } from "react-router-dom";

const pageSize = 10;

export const SearchResults = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigationType = useNavigationType();
    const [query, setQuery] = useState<UseKendraSearchQuery>(() => queryString.parse(location.search, { parseNumbers: true }));
    const { data: results } = useKendraSearch({ ...query, pageSize });

    useEffect(() => {
        if (navigationType === NavigationType.Pop) {
            setQuery(queryString.parse(location.search, { parseNumbers: true }));
        }
    }, [navigationType, setQuery, location.search]);

    function updateQuery(query: UseKendraSearchQuery) {
        setQuery(query);
        navigate(`/search/results?${queryString.stringify(query)}`);
    }

    const pageTotal = results?.TotalNumberOfResults && pageSize
        ? Math.min(Math.ceil(results.TotalNumberOfResults / pageSize), 10)
        : 1;

    return (
        <div className="pb-[30px]">
            <div className="h-[400px] text-white grid place-items-center">
                <img src={headerImg} className="w-full absolute top-0 z-[-1]" />
                <div className="text-[65px]">Search Result "{query.query}"</div>
            </div>

            {results && (
                <div className="flex pl-[40px] pt-[10px] bg-white">
                    <div className="min-w-[460px] text-[28px] text-[#B8B8B8]">
                        {results.TotalNumberOfResults} results found

                        <div className="mt-[50px] ml-[50px] space-y-[40px]">
                            {results?.FacetResults?.map(facet => (
                                <Facet key={facet.DocumentAttributeKey} facet={facet} filters={query.filters} onChange={filters => updateQuery({ ...query, filters, pageNumber: 1 })} />
                            ))}

                            <div className="mt-[50px]">
                                <a className="text-[25px] text-[#201D1D] font-semibold underline cursor-pointer" onClick={() => updateQuery({ query: query.query })}>Reset filters</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[40px]">
                        {results.ResultItems?.map(item => (
                            <div key={item.Id} className="flex space-x-[35px]">
                                <img src={searchResultImg} className="w-[280px] h-[178px]" />
                                <div className="space-y-[15px]">
                                    <h3 className="text-3xl font-bold">
                                        <Highlight textWithHighlights={item.DocumentTitle} />
                                    </h3>
                                    <div className="text-[23px] text-[#5D5E5F]">
                                        <Highlight textWithHighlights={item.DocumentExcerpt} />
                                    </div>
                                    <div>
                                        <a href={item.DocumentURI} target="_blank" className="text-[25px] text-[#4FA4A5]">
                                            Explore
                                            <ArrowLongRightIcon className="inline-block h-[19px] w-[19px] ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {pageTotal > 1 && (
                            <div className="flex flex-col items-center">
                                <Pagination pageNumber={query.pageNumber} pageTotal={pageTotal} onClick={pageNumber => updateQuery({ ...query, pageNumber })} />
                            </div>
                        )}

                        <div className="text-center">
                            <Link to="/faq">Can't find what you are looking for? click here for FAQ!</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
