import isTextSelected from './isTextSelected';
import getWordCount from './getWordCount';
import getFocusedNodeContainer from './getFocusedNodeContainer';
declare const TiptapUtility: {
    isTextSelected: ({ editor }: {
        editor: import("@tiptap/core").Editor;
    }) => boolean;
    getFocusedNodeContainer: (editor: import("@tiptap/core").Editor, nodeType: string, attribute?: string, focusClass?: string) => Element | null;
    getWordCount: (editor: import("@tiptap/core").Editor) => number;
};
export { isTextSelected, getFocusedNodeContainer, getWordCount };
export default TiptapUtility;
