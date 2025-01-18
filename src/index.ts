import isTextSelected from './isTextSelected';
import getWordCount from './getWordCount';
import getFocusedNodeContainer from './getFocusedNodeContainer';
import getAllNodesOfType from './getAllNodesOfType';
import getAllNodesByTypeAndAttrs from './getAllNodesByTypeAndAttrs';
import { findParentNodeOfTypeAtPosition } from './findParentNodeOfTypeAtPosition';
import { getEditorState } from './getEditorState';
import { getNodesInRange } from './getNodesInRange';

const TiptapUtility = {
    isTextSelected,
    getFocusedNodeContainer,
    getAllNodesOfType,
    getWordCount,
    getAllNodesByTypeAndAttrs,
    findParentNodeOfTypeAtPosition,
    getEditorState,
    getNodesInRange
}

export {
    isTextSelected,
    getFocusedNodeContainer,
    getAllNodesOfType,
    getWordCount,
    getAllNodesByTypeAndAttrs,
    findParentNodeOfTypeAtPosition,
    getEditorState,
    getNodesInRange
};
export default TiptapUtility;