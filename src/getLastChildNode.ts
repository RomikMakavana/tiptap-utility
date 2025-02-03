import { Node } from "@tiptap/pm/model";

export function getLastChildNode(node: Node) {
    if (node.childCount === 0) {
      return null; // No child nodes
    }
  
    let lastChildNode: Node | null = null;
    let lastChildPos : number = 0; // Start position of first child
  
    node.forEach((child, pos) => {
      lastChildNode = child;
      lastChildPos = pos;
    });
  
    return lastChildNode ? { node: lastChildNode as Node, pos: lastChildPos } : null;
  }
  