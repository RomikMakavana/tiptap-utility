import { Editor } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
interface NodeWithPosition {
    node: ProseMirrorNode;
    pos: number;
}

export function getNodesInRange(
    editor: Editor,
    from: number,
    to: number,
    nodeType: string[] | null = null
): NodeWithPosition[] {
    const nodes: NodeWithPosition[] = [];
    const { doc } = editor.state;

    // Traverse the document between the range
    doc.nodesBetween(from, to, (node, pos) => {
        if(nodeType == null || nodeType.includes(node.type.name)){
            nodes.push({ node, pos });
        }
    });

    return nodes;
}