"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodesInRange = exports.getEditorState = exports.findParentNodeOfTypeAtPosition = exports.getAllNodesByTypeAndAttrs = exports.getWordCount = exports.getAllNodesOfType = exports.getFocusedNodeContainer = exports.isTextSelected = void 0;
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
const TiptapUtility = {
    isTextSelected: isTextSelected_1.default,
    getFocusedNodeContainer: getFocusedNodeContainer_1.default,
    getAllNodesOfType: getAllNodesOfType_1.default,
    getWordCount: getWordCount_1.default,
    getAllNodesByTypeAndAttrs: getAllNodesByTypeAndAttrs_1.default,
    findParentNodeOfTypeAtPosition: findParentNodeOfTypeAtPosition_1.findParentNodeOfTypeAtPosition,
    getEditorState: getEditorState_1.getEditorState,
    getNodesInRange: getNodesInRange_1.getNodesInRange
};
exports.default = TiptapUtility;
