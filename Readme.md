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
- [getAllNodesByTypeAndAttrs](#getallnodesbytypeandattrs)
- [findParentNodeOfTypeAtPosition](#getallnodesoftype)
- [getEditorState](#geteditorstate)

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

---

### `getAllNodesByTypeAndAttrs`

Finds all nodes of a given type and with specific attributes in the Tiptap editor's document.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.
- **`type`**: A string representing the type of node to search for.
- **`attrs`**: An object containing the attributes to match against the nodes.

#### Returns:
- **`Array<{ node: any; pos: number }>`**: An array of nodes and their positions that match the given type and attributes.

#### Example:
```typescript
import { getAllNodesByTypeAndAttrs } from 'tiptap-utility';

const nodes = getAllNodesByTypeAndAttrs({ editor }, 'image', { src: 'https://example.com/image.jpg' });
console.log(nodes);
```

--- 
### `findParentNodeOfTypeAtPosition`

Finds the parent node of a given type at a specific position in the Tiptap editor.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.
- **`position`**: The position in the document where the search for the parent node begins.
- **`parentNodeTypeName`**: The name of the parent node type to search for.

#### Returns:
- **`{ node: any; depth: number; start: number; end: number } | null`**: An object containing the parent node, its depth, and its start and end positions if found, otherwise `null`.

#### Example:
```typescript
import { findParentNodeOfTypeAtPosition } from 'tiptap-utility';

const parentNode = findParentNodeOfTypeAtPosition({ editor }, 10, 'paragraph');
if (parentNode) {
    console.log('Parent node found:', parentNode);
} else {
    console.log('No parent node found at the specified position');
}
```

---
### `getEditorState`

Retrieves the current state of the Tiptap editor.

#### Parameters:
- **`editor`**: Tiptap `Editor` instance.

#### Returns:
- **`object`**: The current state of the editor, either from `editor.state` or `editor.view.state`.

#### Example:
```typescript
import { getEditorState } from 'tiptap-utility';

const editorState = getEditorState({ editor });
console.log(editorState);
```

## License

This package is open-source and available under the [MIT License](LICENSE).

