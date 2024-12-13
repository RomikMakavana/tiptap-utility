import { Editor } from "@tiptap/core"

export const getFocusedNodeContainer = (editor: Editor, nodeType: string, attribute: string = 'data-type', focusClass: string = 'has-focus') => {
  const {
    view,
    state: {
      selection: { from },
    },
  } = editor

  const elements = document.getElementsByClassName(focusClass)
  const elementCount = elements.length
  const innermostNode = elements[elementCount - 1]
  const element = innermostNode

  if (
    (element && element.getAttribute(attribute) && element.getAttribute(attribute) === nodeType) ||
    (element && element.classList && element.classList.contains(nodeType))
  ) {
    return element
  }

  const node = view.domAtPos(from).node as HTMLElement
  let container: HTMLElement | null = node

  if (!container.tagName) {
    container = node.parentElement
  }

  while (
    container &&
    !(container.getAttribute(attribute) && container.getAttribute(attribute) === nodeType) &&
    !container.classList.contains(nodeType)
  ) {
    container = container.parentElement
  }

  return container
}

export default getFocusedNodeContainer
