"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarksBetween = exports.getMarksAtPos = exports.getNodeUsageCount = exports.removeNodesByNameAndAttrs = exports.replaceNodesWithTextByNameAndAttrs = exports.getAllMarksByTypeAndAttrs = exports.getNextSiblingNode = exports.getLastChildNode = exports.getNodesInRange = exports.getEditorState = exports.findParentNodeOfTypeAtPosition = exports.getAllNodesByTypeAndAttrs = exports.getWordCount = exports.getAllNodesOfType = exports.getFocusedNodeContainer = exports.isTextSelected = void 0;
const isTextSelected_1 = require("./isTextSelected");
exports.isTextSelected = isTextSelected_1.default;
const getWordCount_1 = require("./getWordCount");
exports.getWordCount = getWordCount_1.default;
const getFocusedNodeContainer_1 = require("./getFocusedNodeContainer");
exports.getFocusedNodeContainer = getFocusedNodeContainer_1.default;
const getAllNodesOfType_1 = require("./getAllNodesOfType");
exports.getAllNodesOfType = getAllNodesOfType_1.default;
const getAllNodesByTypeAndAttrs_1 = require("./getAllNodesByTypeAndAttrs");
exports.getAllNodesByTypeAndAttrs = getAllNodesByTypeAndAttrs_1.default;
const findParentNodeOfTypeAtPosition_1 = require("./findParentNodeOfTypeAtPosition");
Object.defineProperty(exports, "findParentNodeOfTypeAtPosition", { enumerable: true, get: function () { return findParentNodeOfTypeAtPosition_1.findParentNodeOfTypeAtPosition; } });
const getEditorState_1 = require("./getEditorState");
Object.defineProperty(exports, "getEditorState", { enumerable: true, get: function () { return getEditorState_1.getEditorState; } });
const getNodesInRange_1 = require("./getNodesInRange");
Object.defineProperty(exports, "getNodesInRange", { enumerable: true, get: function () { return getNodesInRange_1.getNodesInRange; } });
const getLastChildNode_1 = require("./getLastChildNode");
Object.defineProperty(exports, "getLastChildNode", { enumerable: true, get: function () { return getLastChildNode_1.getLastChildNode; } });
const getNextSiblingNode_1 = require("./getNextSiblingNode");
Object.defineProperty(exports, "getNextSiblingNode", { enumerable: true, get: function () { return getNextSiblingNode_1.getNextSiblingNode; } });
const getAllMarksByTypeAndAttrs_1 = require("./getAllMarksByTypeAndAttrs");
Object.defineProperty(exports, "getAllMarksByTypeAndAttrs", { enumerable: true, get: function () { return getAllMarksByTypeAndAttrs_1.getAllMarksByTypeAndAttrs; } });
const replaceNodesWithTextByNameAndAttrs_1 = require("./replaceNodesWithTextByNameAndAttrs");
Object.defineProperty(exports, "replaceNodesWithTextByNameAndAttrs", { enumerable: true, get: function () { return replaceNodesWithTextByNameAndAttrs_1.replaceNodesWithTextByNameAndAttrs; } });
const removeNodesByNameAndAttrs_1 = require("./removeNodesByNameAndAttrs");
Object.defineProperty(exports, "removeNodesByNameAndAttrs", { enumerable: true, get: function () { return removeNodesByNameAndAttrs_1.removeNodesByNameAndAttrs; } });
const getNodeUsageCount_1 = require("./getNodeUsageCount");
Object.defineProperty(exports, "getNodeUsageCount", { enumerable: true, get: function () { return getNodeUsageCount_1.getNodeUsageCount; } });
const getMarksAtPos_1 = require("./getMarksAtPos");
Object.defineProperty(exports, "getMarksAtPos", { enumerable: true, get: function () { return getMarksAtPos_1.getMarksAtPos; } });
const getMarksBetween_1 = require("./getMarksBetween");
Object.defineProperty(exports, "getMarksBetween", { enumerable: true, get: function () { return getMarksBetween_1.getMarksBetween; } });
const TiptapUtility = {
    isTextSelected: isTextSelected_1.default,
    getFocusedNodeContainer: getFocusedNodeContainer_1.default,
    getAllNodesOfType: getAllNodesOfType_1.default,
    getWordCount: getWordCount_1.default,
    getAllNodesByTypeAndAttrs: getAllNodesByTypeAndAttrs_1.default,
    findParentNodeOfTypeAtPosition: findParentNodeOfTypeAtPosition_1.findParentNodeOfTypeAtPosition,
    getEditorState: getEditorState_1.getEditorState,
    getNodesInRange: getNodesInRange_1.getNodesInRange,
    getLastChildNode: getLastChildNode_1.getLastChildNode,
    getNextSiblingNode: getNextSiblingNode_1.getNextSiblingNode,
    getAllMarksByTypeAndAttrs: getAllMarksByTypeAndAttrs_1.getAllMarksByTypeAndAttrs,
    replaceNodesWithTextByNameAndAttrs: replaceNodesWithTextByNameAndAttrs_1.replaceNodesWithTextByNameAndAttrs,
    removeNodesByNameAndAttrs: removeNodesByNameAndAttrs_1.removeNodesByNameAndAttrs,
    getNodeUsageCount: getNodeUsageCount_1.getNodeUsageCount,
    getMarksAtPos: getMarksAtPos_1.getMarksAtPos,
    getMarksBetween: getMarksBetween_1.getMarksBetween
};
exports.default = TiptapUtility;
