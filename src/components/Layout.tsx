import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UIMatch, useMatches } from "react-router-dom";
import { RouteHandle } from "../router";

type P = {
    children?: ReactNode;
}

export const Layout: FC<P> = ({ children }) => {
    const matches = useMatches() as UIMatch<unknown, RouteHandle>[];

    const hideFooter = matches.some(m => m.handle?.hideFooter === true) as boolean;

    return (
        <>
            <Header />
            {children}
            {!hideFooter && (
                <Footer />
            )}
        </>
    );
}