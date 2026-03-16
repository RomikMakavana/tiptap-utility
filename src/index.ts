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
import { replaceNodesWithTextByNameAndAttrs } from './replaceNodesWithTextByNameAndAttrs';
import { removeNodesByNameAndAttrs } from './removeNodesByNameAndAttrs';
import { getNodeUsageCount } from './getNodeUsageCount';
import { getMarksAtPos } from './getMarksAtPos';
import { getMarksBetween } from './getMarksBetween';
import { findParentNodeWithChildrenAtPos } from './findParentNodeWithChildrenAtPos';
import { mapEachNode } from './mapEachNode';
import { filterEachNode } from './filterEachNode';

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
    getNextSiblingNode,
    getAllMarksByTypeAndAttrs,
    replaceNodesWithTextByNameAndAttrs,
    removeNodesByNameAndAttrs,
    getNodeUsageCount,
    getMarksAtPos,
    getMarksBetween,
    findParentNodeWithChildrenAtPos,
    mapEachNode,
    filterEachNode
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
    getNextSiblingNode,
    getAllMarksByTypeAndAttrs,
    replaceNodesWithTextByNameAndAttrs,
    removeNodesByNameAndAttrs,
    getNodeUsageCount,
    getMarksAtPos,
    getMarksBetween,
    findParentNodeWithChildrenAtPos,
    mapEachNode,
    filterEachNode
};
export default TiptapUtility;