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

const TiptapUtility = {
    isTextSelected,
    getFocusedNodeContainer,
    getAllNodesOfType,
    getWordCount,
    getAllNodesByTypeAndAttrs,
    findParentNodeOfTypeAtPosition,
    getEditorState,
    getNodesInRange,
    getLastChildNode,
    getNextSiblingNode
}

export {
    isTextSelected,
    getFocusedNodeContainer,
    getAllNodesOfType,
    getWordCount,
    getAllNodesByTypeAndAttrs,
    findParentNodeOfTypeAtPosition,
    getEditorState,
    getNodesInRange,
    getLastChildNode,
    getNextSiblingNode
};
export default TiptapUtility;