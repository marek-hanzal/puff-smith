import {EditorElement} from "@/puff-smith/component/editor/EditorElement";
import {EditorLeaf} from "@/puff-smith/component/editor/EditorLeaf";
import {MarkButton} from "@/puff-smith/component/editor/MarkButton";
import {BoldOutlined} from "@ant-design/icons";
import {ButtonBar, Card} from "@leight-core/client";
import {Divider} from "antd";
import React, {FC, useCallback, useMemo} from "react";
import {createEditor} from "slate";
import {Editable, Slate, withReact} from "slate-react";

export interface IEditorProps {
}

export const Editor: FC<IEditorProps> = () => {
	const renderElement = useCallback<typeof EditorElement>(props => <EditorElement {...props} />, []);
	const renderLeaf = useCallback<typeof EditorLeaf>(props => <EditorLeaf {...props} />, []);
	const editor = useMemo(() => withReact(createEditor()), []);
	return <Card title={"Editor"}>
		<Slate
			editor={editor}
			value={[
				{
					type: "paragraph",
					children: [{text: ""}],
				},
			] as any}
		>
			<ButtonBar>
				<MarkButton
					icon={<BoldOutlined/>}
					format={"bold"}
				/>
			</ButtonBar>
			<Divider/>
			<Editable
				placeholder={"Type something"}
				renderElement={renderElement as any}
				renderLeaf={renderLeaf as any}
			/>
		</Slate>
	</Card>;
};
