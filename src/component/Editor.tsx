import KothingEditor from "kothing-editor/lib/lib/core";
import {FC, MutableRefObject, useEffect, useRef} from "react";

export interface IEditorProps {
	value?: string;
	element?: MutableRefObject<Element>;
}

export const Editor: FC<IEditorProps> = ({element, value}) => {
	const editor = useRef<KothingEditor>();
	useEffect(() => {
		import("kothing-editor").then(({default: kothingEditor}) => {
			import("kothing-editor/lib/plugins").then(({default: plugins}) => {
				// https://kothing.github.io/editor/html/getting-started.html
				element?.current && !editor.current && (editor.current = kothingEditor.create(element.current, {
					value,
					minHeight: "300",
					height: "300",
					maxHeight: "500",
					plugins,
					imageUrlInput: false,
					mode: "classic",
					// templates: [],
					charCounter: true,
					shortcutsHint: true,
					resizingBar: false,
					toolbarItem: [
						["undo", "redo",
							"font", "fontSize", "formatBlock",
							"bold", "underline", "italic", "strike", "subscript", "superscript",
							"removeFormat",
							"fontColor", "hiliteColor",
							"outdent", "indent",
							"align", "horizontalRule", "list", "table",
							"link", "image", "video",
							"fullScreen", "showBlocks",
							"preview", "save"]
					],
				}));
			});
		});
		return () => {
			editor.current?.destroy();
			editor.current = undefined;
		};
	}, []);
	return null;
};
