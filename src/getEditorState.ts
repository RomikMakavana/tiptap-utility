import { Editor } from "@tiptap/core";

export const getEditorState = (editor: Editor) => {
    if (editor.state) {
        return editor.state;
    }
    return editor.view.state;
}