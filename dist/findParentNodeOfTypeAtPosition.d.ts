import { Editor } from "@tiptap/core";
export declare function findParentNodeOfTypeAtPosition(editor: Editor, position: number, parentNodeTypeName: string): import("prosemirror-model").Node | {
    node: import("prosemirror-model").Node;
    depth: number;
    start: number;
    end: number;
} | null;
