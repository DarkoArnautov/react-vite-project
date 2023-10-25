import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { Search } from "./pages/Search";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { OurStory } from "./pages/OurStory";
import { Faq } from "./pages/Faq";

export type RouteHandle = {
    hideFooter?: boolean;
    hideSearch?: boolean;
}

export const router = createHashRouter([{
    path: "/",
    element: <App />,
    children: [{
        path: "",
        element: <Home />,
    }, {
        path: "faq",
        element: <Faq />,
    }, {
        path: "our-story",
        element: <OurStory />,
    }, {
        path: "search/results",
        element: <SearchResults />,
    }, {
        path: "search",
        element: <Search />,
        handle: { hideFooter: true, hideSearch: true },
    }],
}]);
