"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNodesOfType = void 0;
const getAllNodesOfType = (editor, type) => {
    const nodes = [];
    editor.state.doc.descendants((node, pos) => {
        if (node.type.name === type) {
            nodes.push({ node, pos });
        }
    });
    return nodes;
};
exports.getAllNodesOfType = getAllNodesOfType;
exports.default = exports.getAllNodesOfType;
