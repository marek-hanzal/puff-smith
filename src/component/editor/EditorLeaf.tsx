import {MarkButton} from "@/puff-smith/component/editor/MarkButton";
import {BoldOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import React, {FC, PropsWithChildren} from "react";

export type IEditorLeafProps = PropsWithChildren<{
	attributes: any;
	leaf: {
		bold: boolean;
		code: boolean;
		italic: boolean;
		underline: boolean;
	};
}>;

export const EditorLeaf: FC<IEditorLeafProps> = ({attributes, leaf, children}) => {
	if (leaf.bold) {
		children = <Tooltip placement={"bottom"} title={<MarkButton
			type={"link"}
			icon={<BoldOutlined/>}
			format={"bold"}
		/>}>
			<strong>{children}</strong>
		</Tooltip>;
	}
	if (leaf.code) {
		children = <code>{children}</code>;
	}
	if (leaf.italic) {
		children = <em>{children}</em>;
	}
	if (leaf.underline) {
		children = <u>{children}</u>;
	}
	return <span
		{...attributes}
	>
		{children}
	</span>;
};
