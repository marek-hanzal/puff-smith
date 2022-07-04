import {IFormat, LIST_TYPES, TEXT_ALIGN_TYPES} from "@/puff-smith/component/editor/interface";
import {Editor, Element as SlateElement, Transforms} from "slate";

export const toggleBlock = (editor: Editor, format: IFormat) => {
	const isActive = isBlockActive(
		editor,
		format,
		TEXT_ALIGN_TYPES.includes(format) ? "align" : "type",
	);
	const isList = LIST_TYPES.includes(format);
	Transforms.unwrapNodes<any>(editor, {
		match: (node: any) =>
			!Editor.isEditor(node) &&
			SlateElement.isElement(node) &&
			LIST_TYPES.includes((node as any).type) &&
			!TEXT_ALIGN_TYPES.includes(format),
		split: true,
	});
	Transforms.setNodes<any>(editor, TEXT_ALIGN_TYPES.includes(format) ? {
		align: isActive ? undefined : format,
	} : {
		type: isActive ? "paragraph" : isList ? "list-item" : format,
	});
	!isActive && isList && Transforms.wrapNodes<any>(editor, {
		type: format,
		children: [],
	} as any);
};

export const toggleMark = (editor: Editor, format: IFormat) => isMarkActive(editor, format) ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);

export const isBlockActive = (editor: Editor, format: string, blockType: string = "type") => {
	const {selection} = editor;
	if (!selection) {
		return false;
	}
	const [match] = Array.from(
		Editor.nodes(editor, {
			at: Editor.unhangRange(editor, selection),
			match: node =>
				!Editor.isEditor(node) &&
				SlateElement.isElement(node) &&
				(node as any)[blockType] === format,
		})
	);

	return !!match;
};

export const isMarkActive = (editor: Editor, format: IFormat) => {
	return !!(Editor.marks(editor) as any)?.[format];
};
