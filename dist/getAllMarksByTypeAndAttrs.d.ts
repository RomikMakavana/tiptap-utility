import { EditorState } from '@tiptap/pm/state';
import { Mark, MarkType } from '@tiptap/pm/model';
type MatchType = 'and' | 'or';
export declare function getAllMarksByTypeAndAttrs(state: EditorState, type: MarkType | string, attrs?: Record<string, any>, match?: MatchType): {
    from: number;
    to: number;
    mark: Mark;
    attrs: any;
}[];
export {};
