/** @jsxImportSource @emotion/react */
import {EditorContainer} from "./StyledComponent";
import EditorHeader from "./components/Header";
import EditorBody from "./components/Body";

export default function QDEditor({css}){
    return (
        <EditorContainer css={css}>
            <EditorHeader>

            </EditorHeader>
            <EditorBody>
                
            </EditorBody>
        </EditorContainer>
    )
}