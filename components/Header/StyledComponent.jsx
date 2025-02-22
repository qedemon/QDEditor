/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const EditorHeaderContainerCSS = css`
    width: 100%;
    min-height: 32px;
    border-bottom: 1px solid;
    padding: 8px;
`;

export function EditorHeaderContainer({css, children}){
    return (
        <div css={[EditorHeaderContainerCSS, ...Array.isArray(css)?css:[css]]}>
            {children}
        </div>
    )
}
