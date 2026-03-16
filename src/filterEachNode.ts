import { JSONContent } from "@tiptap/core";

export const filterEachNode = (node: JSONContent, predicate: (node: JSONContent) => boolean): JSONContent | null => {
    if (!node || typeof node !== 'object') {
        return node;
    }

    let content: JSONContent[] | undefined;
    if ("content" in node && Array.isArray(node.content)) {
        const filtered: JSONContent[] = [];
        for (const child of node.content) {
            const result = filterEachNode(child, predicate);
            if (result != null) filtered.push(result);
        }
        content = filtered;
    }

    if ("type" in node && !predicate(node)) {
        return null;
    }

    return content !== undefined ? { ...node, content } : { ...node };
};
