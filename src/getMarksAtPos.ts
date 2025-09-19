import { EditorState } from "@tiptap/pm/state";
import { Mark } from "@tiptap/pm/model";
export function getMarksAtPos(state: EditorState, pos: number) {
  const $pos = state.doc.resolve(pos)

  let marks: Mark[] = []

  if ($pos.parent.isTextblock) {
    marks = $pos.marks() as Mark[]
  }

  marks = marks.concat(state.storedMarks || [])

  const node = $pos.nodeAfter || $pos.nodeBefore
  if (node?.isText) {
    marks = marks.concat(node.marks)
  }

  return marks
}
