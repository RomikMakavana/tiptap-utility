import { Editor } from "@tiptap/core";
export declare function findParentNodeOfTypeAtPosition(editor: Editor, position: number, parentNodeTypeName: string): {
    node: import("prosemirror-model").Node;
    depth: number;
    pos: number;
    start: number;
    end: number;
} | null;
