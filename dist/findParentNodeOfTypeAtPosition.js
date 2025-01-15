"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findParentNodeOfTypeAtPosition = findParentNodeOfTypeAtPosition;
const getEditorState_1 = require("./getEditorState");
function findParentNodeOfTypeAtPosition(editor, position, parentNodeTypeName) {
    const state = (0, getEditorState_1.getEditorState)(editor);
    const { doc } = state;
    const resolvedPos = doc.resolve(position);
    if (!resolvedPos) {
        console.error('Invalid position');
        return null;
    }
    // Traverse up from the current position's depth
    for (let depth = resolvedPos.depth; depth > 0; depth--) {
        const currentNode = resolvedPos.node(depth);
        // Check if the current node matches the desired parent type
        if (currentNode.type.name === parentNodeTypeName) {
            return {
                node: currentNode,
                depth,
                start: resolvedPos.start(depth),
                end: resolvedPos.end(depth),
            };
        }
    }
    // Special handling for position 0 (check the first child of the doc node)
    if (position === 0) {
        const firstChild = state.doc.firstChild;
        if (firstChild && firstChild.type.name === parentNodeTypeName) {
            return firstChild;
        }
    }
    return null;
}
