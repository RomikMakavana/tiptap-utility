import { Editor } from '@tiptap/core';
import { getEditorState } from './getEditorState';

export const getAllNodesByTypeAndAttrs = (editor: Editor, type: string, attrs: Record<string, any>) => {
  const nodes: { node: any; pos: number }[] = [];
  const totalAttrs = Object.keys(attrs);
  const state = getEditorState(editor);
  state.doc.descendants((node, pos) => {
    if (node.type.name === type) {
      if (totalAttrs.length > 0) {
        if (totalAttrs.filter((key) => key in node.attrs && node.attrs[key] === attrs[key]).length === totalAttrs.length) {
          nodes.push({ node, pos });
        }
      } else {
        nodes.push({ node, pos });
      }
    }
  });

  return nodes;
};

export default getAllNodesByTypeAndAttrs;
