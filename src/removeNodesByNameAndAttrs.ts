import { EditorState, Transaction } from "@tiptap/pm/state";

export const removeNodesByNameAndAttrs = (
  type: string,
  attrs: Record<string, any>,
  state: EditorState,
  dispatch: ((args?: any) => any) | undefined,
  tr: Transaction
) => {
  const positions: { from: number; to: number }[] = [];
  const totalAttrs = Object.keys(attrs);
  state.doc.descendants((node, pos) => {
    if (node.type.name === type) {
      if (totalAttrs.length > 0) {
        if (
          totalAttrs.filter(
            (key) => key in node.attrs && node.attrs[key] === attrs[key]
          ).length === totalAttrs.length
        ) {
          positions.push({ from: pos, to: pos + node.nodeSize });
        }
      } else {
        positions.push({ from: pos, to: pos + node.nodeSize });
      }
    }
  });

  // remove in reverse order so positions don't shift
  positions.reverse().forEach(({ from, to }) => {
    tr.delete(from, to);
  });
  if (tr.steps.length > 0 && dispatch) {
    dispatch(tr);
  }
};
