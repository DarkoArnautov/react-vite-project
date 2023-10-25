import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FC } from "react";
import { Paging } from "types/Paging";

type P = Partial<Omit<Paging, "pageSize" | "sort">> & {
    pagesToShow?: number;
    onClick?: (pageNumber: number) => void;
}

export const Pagination: FC<P> = ({ pageNumber = 1, pageTotal = 1, pagesToShow = 5, onClick }) => {

    function handleClick(pageNumber: number) {
        pageNumber = Math.max(1, Math.min(pageNumber, pageTotal));

        onClick?.(pageNumber);
    }

    const pages = [pageNumber];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (pages.length >= pagesToShow! || pages.length >= pageTotal) {
            break;
        }

        const prevPage = pages[0] - 1;
        const nextPage = pages[pages.length - 1] + 1;

        if (prevPage >= 1) {
            pages.unshift(prevPage);
        }

        if (nextPage <= pageTotal) {
            pages.push(nextPage);
        }
    }

    if (pageTotal <= 1) {
        return <></>;
    }

    return (
        <nav className="isolate inline-flex space-x-2 select-none text-[#201D1D] text-[20px]">
            <a className={clsx("inline-flex leading-[70px] h-[70px] w-[70px] border place-content-center border-[#E6E6E6]", {
                "cursor-pointer": pageNumber > 1
            })} onClick={() => handleClick(pageNumber - 1)}>
                <ArrowLeftIcon className="h-[26px] w-[26px] self-center" />
            </a>

            {!pages.includes(1) && (
                <a className="block leading-[70px] h-[70px] w-[70px] text-center cursor-pointer border border-[#E6E6E6]" onClick={() => handleClick(1)}>1</a>
            )}
            {!pages.includes(2) && (
                <a className="block leading-[70px] h-[70px] w-[70px] text-center">&hellip;</a>
            )}

            {pages.map(p => (
                <a key={p} className={clsx("block leading-[70px] h-[70px] w-[70px] text-center border", {
                    "border-[#E6E6E6] cursor-pointer": p !== pageNumber,
                    "border-[#201D1D]": p === pageNumber
                })} onClick={() => handleClick(p)}>{p}</a>
            ))}

            {!pages.includes(pageTotal - 1) && (
                <a className="block leading-[70px] h-[70px] w-[70px] text-center">&hellip;</a>
            )}
            {!pages.includes(pageTotal) && (
                <a className="block leading-[70px] h-[70px] w-[70px] text-center cursor-pointer border border-[#E6E6E6]" onClick={() => handleClick(pageTotal)}>{pageTotal}</a>
            )}

            <a className={clsx("inline-flex leading-[70px] h-[70px] w-[70px] border place-content-center border-[#E6E6E6]", {
                "cursor-pointer": pageNumber < pageTotal
            })} onClick={() => handleClick(pageNumber + 1)}>
                <ArrowRightIcon className="h-[26px] w-[26px] self-center" />
            </a>
        </nav>
    )
}
