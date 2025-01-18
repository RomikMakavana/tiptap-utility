"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodesInRange = getNodesInRange;
function getNodesInRange(editor, from, to, nodeType = null) {
    const nodes = [];
    const { doc } = editor.state;
    // Traverse the document between the range
    doc.nodesBetween(from, to, (node, pos) => {
        if (nodeType == null || nodeType.includes(node.type.name)) {
            nodes.push({ node, pos });
        }
    });
    return nodes;
}
