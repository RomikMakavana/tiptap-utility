import { JSONContent } from "@tiptap/core";

export const mapEachNode = (node: JSONContent, callback: (node: JSONContent) => JSONContent) => {
    if (!node || typeof node !== 'object') {
        return node;
    }
    if("type" in node) {
        node = callback(node);
    }
    if("content" in node && Array.isArray(node.content)) {
        for (const i in node.content) {
            const child = node.content[i];
            node.content[i] = mapEachNode(child, callback);
        }
    }
    return node;
}