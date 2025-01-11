"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNodesByTypeAndAttrs = void 0;
const getEditorState_1 = require("./getEditorState");
const getAllNodesByTypeAndAttrs = (editor, type, attrs) => {
    const nodes = [];
    const totalAttrs = Object.keys(attrs);
    const state = (0, getEditorState_1.getEditorState)(editor);
    state.doc.descendants((node, pos) => {
        if (node.type.name === type) {
            if (totalAttrs.length > 0) {
                if (totalAttrs.filter((key) => key in node.attrs && node.attrs[key] === attrs[key]).length === totalAttrs.length) {
                    nodes.push({ node, pos });
                }
            }
            else {
                nodes.push({ node, pos });
            }
        }
    });
    return nodes;
};
exports.getAllNodesByTypeAndAttrs = getAllNodesByTypeAndAttrs;
exports.default = exports.getAllNodesByTypeAndAttrs;
