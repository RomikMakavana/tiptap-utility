import { EditorState } from "@tiptap/pm/state";
export function findParentNodeWithChildrenAtPos(
    pos: number,
    state: EditorState,
    nodeType: string
  ) {
    const $pos = state.doc.resolve(pos);
    
    for (let depth = $pos.depth; depth > 0; depth--) {
      const node = $pos.node(depth);
      if (node.type.name === nodeType) {
        const parentPos = $pos.before(depth);
  
        const children: { node: any; pos: number }[] = [];
        let offset = parentPos + 1; // first child position
  
        node.forEach((child: any) => {
          children.push({ node: child, pos: offset });
          offset += child.nodeSize;
        });
  
        return { parent: node, pos: parentPos, children };
      }
    }
  
    return null;
  }
