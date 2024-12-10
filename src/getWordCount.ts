import { Editor } from '@tiptap/core';

export const getWordCount = (editor: Editor): number => {
  const text = editor.getText();
  return text.trim().split(/\s+/).length;
};

export default getWordCount;
