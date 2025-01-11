import { Editor } from "@tiptap/core";
import { getEditorState } from "./getEditorState";

export function findParentNodeOfTypeAtPosition(editor: Editor, position: number, parentNodeTypeName: string) {
    const state = getEditorState(editor);
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

    return null;
}