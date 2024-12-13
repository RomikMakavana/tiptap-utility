"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFocusedNodeContainer = void 0;
const getFocusedNodeContainer = (editor, nodeType, attribute = 'data-type', focusClass = 'has-focus') => {
    const { view, state: { selection: { from }, }, } = editor;
    const elements = document.getElementsByClassName(focusClass);
    const elementCount = elements.length;
    const innermostNode = elements[elementCount - 1];
    const element = innermostNode;
    if ((element && element.getAttribute(attribute) && element.getAttribute(attribute) === nodeType) ||
        (element && element.classList && element.classList.contains(nodeType))) {
        return element;
    }
    const node = view.domAtPos(from).node;
    let container = node;
    if (!container.tagName) {
        container = node.parentElement;
    }
    while (container &&
        !(container.getAttribute(attribute) && container.getAttribute(attribute) === nodeType) &&
        !container.classList.contains(nodeType)) {
        container = container.parentElement;
    }
    return container;
};
exports.getFocusedNodeContainer = getFocusedNodeContainer;
exports.default = exports.getFocusedNodeContainer;
