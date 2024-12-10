"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordCount = void 0;
const getWordCount = (editor) => {
    const text = editor.getText();
    return text.trim().split(/\s+/).length;
};
exports.getWordCount = getWordCount;
exports.default = exports.getWordCount;
