"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMarksByTypeAndAttrs = getAllMarksByTypeAndAttrs;
function getAllMarksByTypeAndAttrs(state, type, attrs = {}, match = 'and') {
    const results = [];
    state.doc.descendants((node, pos) => {
        node.marks.forEach(mark => {
            if (typeof type == 'string' ? mark.type.name !== type : mark.type !== type)
                return;
            const keys = Object.keys(attrs);
            if (keys.length > 0) {
                const checks = keys.map(key => mark.attrs[key] === attrs[key]);
                const isMatch = match === 'and'
                    ? checks.every(Boolean)
                    : checks.some(Boolean);
                if (!isMatch)
                    return;
            }
            results.push({
                from: pos,
                to: pos + node.nodeSize,
                mark,
                attrs: mark.attrs
            });
        });
    });
    return results;
}
