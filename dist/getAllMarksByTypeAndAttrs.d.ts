import { Editor } from '@tiptap/core';
type MatchType = 'and' | 'or';
export declare function getAllMarksByTypeAndAttrs(editor: Editor, markTypeName: string, attrs: Record<string, any>, match?: MatchType): {
    from: number;
    to: number;
    attrs: any;
}[];
export {};
