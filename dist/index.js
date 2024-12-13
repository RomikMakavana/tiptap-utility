"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordCount = exports.getFocusedNodeContainer = exports.isTextSelected = void 0;
const isTextSelected_1 = require("./isTextSelected");
exports.isTextSelected = isTextSelected_1.default;
const getWordCount_1 = require("./getWordCount");
exports.getWordCount = getWordCount_1.default;
const getFocusedNodeContainer_1 = require("./getFocusedNodeContainer");
exports.getFocusedNodeContainer = getFocusedNodeContainer_1.default;
const TiptapUtility = {
    isTextSelected: isTextSelected_1.default,
    getFocusedNodeContainer: getFocusedNodeContainer_1.default,
    getWordCount: getWordCount_1.default
};
exports.default = TiptapUtility;
