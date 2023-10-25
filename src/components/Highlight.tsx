import { TextWithHighlights } from "@aws-sdk/client-kendra";
import { FC, useEffect, useState } from "react";
import Mark from "mark.js";

type P = {
    textWithHighlights?: TextWithHighlights;
}

export const Highlight: FC<P> = ({ textWithHighlights }) => {
    const [textMarked, setTextMarked] = useState(textWithHighlights?.Text ?? "");

    useEffect(() => {
        if (!textWithHighlights?.Highlights || !textWithHighlights?.Text) {
            return;
        }

        const text = textWithHighlights.Text;
        const highlights = textWithHighlights.Highlights;

        const ranges = highlights
            .filter(highlight => highlight.BeginOffset !== undefined && highlight.EndOffset !== undefined)
            .map(highlight => ({
                start: highlight.BeginOffset!,
                length: highlight.EndOffset! - highlight.BeginOffset!,
            }) as Mark.Range);

        const el = document.createElement("div");
        el.innerHTML = text;

        const mark = new Mark(el);
        mark.markRanges(ranges);

        setTextMarked(el.innerHTML);
    }, [textWithHighlights?.Text, textWithHighlights?.Highlights]);

    return <span dangerouslySetInnerHTML={{ __html: textMarked }} />
}
