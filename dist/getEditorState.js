"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditorState = void 0;
const getEditorState = (editor) => {
    if (editor.state) {
        return editor.state;
    }
    return editor.view.state;
};
exports.getEditorState = getEditorState;
