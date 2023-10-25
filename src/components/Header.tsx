import { Link, UIMatch, useMatches } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import titleImg from "assets/title.png";
import { RouteHandle } from "router";
import clsx from "clsx";

export const Header = () => {
    const matches = useMatches() as UIMatch<unknown, RouteHandle>[];

    const hideSearch = matches.some(m => m.handle?.hideSearch === true) as boolean;

    return (
        <div className="absolute top-0 text-white w-full h-[115px] pr-[224px] text-xl">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="sr-only">Better Evidence Project</h1>
                    <Link to="/"><img src={titleImg} /></Link>
                </div>
                <div className="flex space-x-11">
                    <Link to="/">Home</Link>
                    <Link to="/our-story">Our Story</Link>
                    <Link to="/">Resource Center</Link>
                    <Link to="/search" className={clsx("flex h-8 w-8 items-center justify-center", { "collapse": hideSearch })}>
                        <MagnifyingGlassIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}
