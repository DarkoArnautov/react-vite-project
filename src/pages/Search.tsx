import { FC } from "react";
import { SearchInput } from "components/SearchInput";
import headerImg from "assets/search/header.png";

export const Search: FC = () => {
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('${headerImg}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="flex flex-col items-center pt-[155px]">
                <div className="text-[65px] mb-[70px]">Search</div>
                <SearchInput />
                <div className="mt-[24px]"><span className="text-[#C2C2C2]">For example:</span> <a>Resource Library Data</a></div>
            </div>
        </div>
    );
}
