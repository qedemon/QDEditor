/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const EditorBodyCSS = css`
    width: 100%;
    flex-grow: 1;
    
    text-align: left;
    padding: 16px;
`;

export function EditorBodyContainer({children, ...props}){
    return (
        <div css={EditorBodyCSS} {...props}>
            {children}
        </div>
    )
}