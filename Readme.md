# Tiptap Utility Package
[![NPM](https://img.shields.io/npm/v/tiptap-utility.svg)](https://www.npmjs.com/package/tiptap-utility)

A collection of utility functions to enhance your workflow with the Tiptap editor.

## Installation

```bash
npm install tiptap-utility
```

## Utilities

### Quick Access
- [isTextSelected](#istextselected)
- [getWordCount](#getwordcount)
- [getFocusedNodeContainer](#getfocusednodecontainer)
- [getAllNodesOfType](#getallnodesoftype)

## `isTextSelected`

Checks if text is selected in the Tiptap editor.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.

#### Returns:
- **`boolean`**: `true` if text is selected and editor is editable, otherwise `false`.

#### Example:
```typescript
import { isTextSelected } from 'tiptap-utility';

const isSelected = isTextSelected({ editor });
console.log(isSelected ? "Text is selected" : "No text selected");
```

---

## `getWordCount`

Counts the number of words in the Tiptap editor content.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.

#### Returns:
- **`number`**: Total word count.

#### Example:
```typescript
import { getWordCount } from 'tiptap-utility';

const wordCount = getWordCount(editor);
console.log(`Word count: ${wordCount}`);
```

---

## `getFocusedNodeContainer`

Finds the focused node container in the Tiptap editor DOM based on the specified `nodeType`.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.
- **`nodeType`**: The target node type to locate.
- **`attribute`** *(optional)*: Attribute used to identify the node. Default is `'data-type'`.
- **`focusClass`** *(optional)*: CSS class used to identify focused nodes. Default is `'has-focus'`.

#### Returns:
- **`HTMLElement | null`**: The focused node container or `null` if not found.

#### Example:
```typescript
import { getFocusedNodeContainer } from 'tiptap-utility';

const container = getFocusedNodeContainer(editor, 'paragraph');
if (container) {
  console.log('Focused node container:', container);
} else {
  console.log('No focused container found.');
}
```
---

## `getAllNodesOfType`

Retrieves all nodes of a specified type from the Tiptap editor document, including those nested within lists, tables, or other container nodes.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.
- **`type`**: The target node type to locate (e.g., `'heading'`, `'paragraph'`).

#### Returns:
- **`Array<{ node: Node, pos: number }>`**:
  - An array of objects where each object contains:
    - **`node`**: The node instance of the specified type.
    - **`pos`**: The position of the node in the document.

#### Example:
```typescript
import { getAllNodesOfType } from 'tiptap-utility';

const headings = getAllNodesOfType(editor, 'heading');
headings.forEach(({ node, pos }) => {
  console.log('Found heading:', node, 'at position:', pos);
});
```



## License

This package is open-source and available under the [MIT License](LICENSE).

