/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const EditorContainerCSS = css`
    width: 640px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & *{
        box-sizing: border-box;
    }
    border-width: 1px;
    border-style: solid;
    border-color: currentColor;
`;

export function EditorContainer({children, css, ...props}){
    return (
        <div css={[EditorContainerCSS, ...(Array.isArray(css)?css:[css])]} {...props}>
            {children}
        </div>
    )
}

const EditorHeaderCSS = css`
    width: 100%;
`;