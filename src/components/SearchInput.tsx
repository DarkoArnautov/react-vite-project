import { FC, useState, FormEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { useKendraSuggestions } from "hooks/useKendra";
import { useDebounce } from "hooks/useDebounce";
import searchSuggestionImg from "assets/search-suggestion.png";
import { useNavigate } from "react-router";
import { Suggestion } from "@aws-sdk/client-kendra";

export const SearchInput: FC = () => {
    const [text, setText] = useState("");
    const textDebounced = useDebounce(text, 300);
    const navigate = useNavigate();
    const { data: suggestionsData } = useKendraSuggestions(textDebounced);
    const suggestions = suggestionsData?.Suggestions ?? [];

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        navigate(`/search/results?query=${encodeURIComponent(text)}`);
    }

    function handleSuggestionClick(suggestion: Suggestion) {
        navigate(`/search/results?query=${encodeURIComponent(suggestion.Value?.Text?.Text ?? "")}`);
    }

    return (
        <form onSubmit={handleSubmit} className="w-3/4">
            <div className={clsx("flex space-x-[4px] h-[80px] bg-white w-full relative")}>
                <input type="text" className="h-full w-full pl-[90px] text-[#201D1D] text-2xl w-full border-none outline-none" placeholder="Search" value={text}
                    onChange={e => setText(e.target.value)} autoFocus />
                <MagnifyingGlassIcon className="h-[30px] w-[30px] left-[30px] top-[26px] text-[#C2C2C2] absolute" />
                {suggestions && (
                    <div className="absolute top-[80px] left-[-4px] right-0 bg-white text-black px-[30px] max-h-[360px] overflow-y-auto">
                        {suggestions.map(s => (
                            <div key={s.Id} className="flex space-x-[35px] mb-[18px] cursor-pointer" onClick={() => handleSuggestionClick(s)}>
                                <img src={searchSuggestionImg} />
                                <div className="text-lg">{s.Value?.Text?.Text}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </form>
    )
}