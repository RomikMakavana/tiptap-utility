"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextSelected = void 0;
const core_1 = require("@tiptap/core");
const isTextSelected = ({ editor }) => {
    const { state: { doc, selection, selection: { empty, from, to }, }, } = editor;
    // Sometime check for `empty` is not enough.
    // Doubleclick an empty paragraph returns a node size of 2.
    // So we check also for an empty text size.
    const isEmptyTextBlock = !doc.textBetween(from, to).length && (0, core_1.isTextSelection)(selection);
    if (empty || isEmptyTextBlock || !editor.isEditable) {
        return false;
    }
    return true;
};
exports.isTextSelected = isTextSelected;
exports.default = exports.isTextSelected;
