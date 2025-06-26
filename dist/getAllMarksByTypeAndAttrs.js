"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMarksByTypeAndAttrs = getAllMarksByTypeAndAttrs;
function getAllMarksByTypeAndAttrs(editor, markTypeName, attrs, match = 'and') {
    const results = [];
    const { doc } = editor.state;
    doc.descendants((node, pos) => {
        if (!node.isText)
            return true;
        for (const mark of node.marks) {
            if (mark.type.name !== markTypeName)
                continue;
            const matchedKeys = Object.keys(attrs).filter(key => mark.attrs?.[key] === attrs[key]);
            const isMatch = match === 'and'
                ? matchedKeys.length === Object.keys(attrs).length
                : matchedKeys.length > 0;
            if (isMatch) {
                results.push({
                    from: pos,
                    to: pos + node.nodeSize,
                    attrs: mark.attrs,
                });
            }
        }
        return true;
    });
    return results;
}
