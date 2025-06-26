import { Editor } from '@tiptap/core'

type MatchType = 'and' | 'or'

export function getAllMarksByTypeAndAttrs(
  editor: Editor,
  markTypeName: string,
  attrs: Record<string, any>,
  match: MatchType = 'and'
) {
  const results: { from: number; to: number; attrs: any }[] = []
  const { doc } = editor.state

  doc.descendants((node, pos) => {
    if (!node.isText) return true

    for (const mark of node.marks) {
      if (mark.type.name !== markTypeName) continue

      const matchedKeys = Object.keys(attrs).filter(
        key => mark.attrs?.[key] === attrs[key]
      )

      const isMatch =
        match === 'and'
          ? matchedKeys.length === Object.keys(attrs).length
          : matchedKeys.length > 0

      if (isMatch) {
        results.push({
          from: pos,
          to: pos + node.nodeSize,
          attrs: mark.attrs,
        })
      }
    }

    return true
  })

  return results
}
