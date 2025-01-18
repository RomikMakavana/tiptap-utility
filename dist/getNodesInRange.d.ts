import { Editor } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
interface NodeWithPosition {
    node: ProseMirrorNode;
    pos: number;
}
export declare function getNodesInRange(editor: Editor, from: number, to: number, nodeType?: string[] | null): NodeWithPosition[];
export {};
