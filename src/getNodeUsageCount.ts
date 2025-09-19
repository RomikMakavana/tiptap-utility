import { Editor } from '@tiptap/core'
import { Node as ProseMirrorNode } from '@tiptap/pm/model'

type GroupedCounts = Record<string, number>

export function getNodeUsageCount<T extends string>(
  editor: Editor,
  nodeType: string,
  groupBy: T
): GroupedCounts {
  const groups: GroupedCounts = {}

  editor.state.doc.descendants((node: ProseMirrorNode) => {
    if (node.type.name === nodeType) {
      const value = String(node.attrs[groupBy] ?? 'undefined')
      groups[value] = (groups[value] || 0) + 1
    }
  })

  return groups
}
