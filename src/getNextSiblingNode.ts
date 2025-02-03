import { Node } from "@tiptap/pm/model";

export function getNextSiblingNode(parent: Node, currentNode: Node) {
    let nextNode: Node | null = null;
    
    let found = false;
  
    parent.forEach((child, offset) => {
      if (found) {
        nextNode = child;
        return false; // Stop iteration
      }
      if (child === currentNode) {
        found = true; // Mark the current node
      }
    });
  
    return nextNode ? { node: nextNode as Node } : null;
  }