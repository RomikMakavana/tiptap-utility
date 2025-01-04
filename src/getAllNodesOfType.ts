import { Editor } from '@tiptap/core';

export const getAllNodesOfType = (editor: Editor, type: string) => {
  const nodes: { node: any; pos: number }[] = [];

  editor.state.doc.descendants((node, pos) => {
    if (node.type.name === type) {
      nodes.push({ node, pos });
    }
  });

  return nodes;
};

export default getAllNodesOfType;
