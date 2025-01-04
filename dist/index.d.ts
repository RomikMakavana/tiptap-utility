import isTextSelected from './isTextSelected';
import getWordCount from './getWordCount';
import getFocusedNodeContainer from './getFocusedNodeContainer';
import getAllNodesOfType from './getAllNodesOfType';
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
};
export { isTextSelected, getFocusedNodeContainer, getAllNodesOfType, getWordCount };
export default TiptapUtility;
