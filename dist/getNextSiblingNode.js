"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextSiblingNode = getNextSiblingNode;
function getNextSiblingNode(parent, currentNode) {
    let nextNode = null;
    let found = false;
    parent.forEach((child, offset) => {
        if (found) {
            nextNode = child;
            return false; // Stop iteration
        }
        if (child === currentNode) {
            found = true; // Mark the current node
        }
    });
    return nextNode ? { node: nextNode } : null;
}
