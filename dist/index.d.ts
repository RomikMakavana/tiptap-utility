import isTextSelected from './isTextSelected';
import getWordCount from './getWordCount';
import getFocusedNodeContainer from './getFocusedNodeContainer';
import getAllNodesOfType from './getAllNodesOfType';
import getAllNodesByTypeAndAttrs from './getAllNodesByTypeAndAttrs';
import { findParentNodeOfTypeAtPosition } from './findParentNodeOfTypeAtPosition';
import { getEditorState } from './getEditorState';
import { getNodesInRange } from './getNodesInRange';
import { getLastChildNode } from './getLastChildNode';
import { getNextSiblingNode } from './getNextSiblingNode';
import { getAllMarksByTypeAndAttrs } from './getAllMarksByTypeAndAttrs';
declare const TiptapUtility: {
    isTextSelected: ({ editor }: {
        editor: import("@tiptap/core").Editor;
    }) => boolean;
    getFocusedNodeContainer: (editor: import("@tiptap/core").Editor, nodeType: string, attribute?: string, focusClass?: string) => Element | null;
    getAllNodesOfType: (editor: import("@tiptap/core").Editor, type: string) => {
        node: any;
        pos: number;
    }[];
    getWordCount: (editor: import("@tiptap/core").Editor) => number;
    getAllNodesByTypeAndAttrs: (editor: import("@tiptap/core").Editor, type: string, attrs: Record<string, any>) => {
        node: any;
        pos: number;
    }[];
    findParentNodeOfTypeAtPosition: typeof findParentNodeOfTypeAtPosition;
    getEditorState: (editor: import("@tiptap/core").Editor) => import("prosemirror-state").EditorState;
    getNodesInRange: typeof getNodesInRange;
    getLastChildNode: typeof getLastChildNode;
    getNextSiblingNode: typeof getNextSiblingNode;
    getAllMarksByTypeAndAttrs: typeof getAllMarksByTypeAndAttrs;
};
export { isTextSelected, getFocusedNodeContainer, getAllNodesOfType, getWordCount, getAllNodesByTypeAndAttrs, findParentNodeOfTypeAtPosition, getEditorState, getNodesInRange, getLastChildNode, getNextSiblingNode, getAllMarksByTypeAndAttrs };
export default TiptapUtility;
