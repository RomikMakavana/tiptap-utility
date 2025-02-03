"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastChildNode = getLastChildNode;
function getLastChildNode(node) {
    if (node.childCount === 0) {
        return null; // No child nodes
    }
    let lastChildNode = null;
    let lastChildPos = 0; // Start position of first child
    node.forEach((child, pos) => {
        lastChildNode = child;
        lastChildPos = pos;
    });
    return lastChildNode ? { node: lastChildNode, pos: lastChildPos } : null;
}
