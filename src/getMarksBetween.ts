import { EditorState } from "@tiptap/pm/state";
import { Mark } from "@tiptap/pm/model";

export function getMarksBetween(
  from: number,
  to: number,
  state: EditorState
): { mark: Mark; from: number; to: number }[] {
  const marks: { mark: Mark; from: number; to: number }[] = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isText) return;

    node.marks.forEach((mark) => {
      const start = Math.max(pos, from);
      const end = Math.min(pos + node.nodeSize, to);

      marks.push({
        mark,
        from: start,
        to: end,
      });
    });
  });
  return marks;
}
