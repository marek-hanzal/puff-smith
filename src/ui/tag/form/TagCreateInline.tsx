import {TagCreateForm} from "@/puff-smith/ui/tag/form/TagCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {ITag} from "@leight-core/api";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ITagCreateInlineProps extends Partial<IDrawerButtonProps> {
	group?: string;

	onSuccess?(tag: ITag): void;
}

export const TagCreateInline: FC<ITagCreateInlineProps> = ({group, onSuccess, ...props}) => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.tag.create.title"}
		label={"lab.tag.create.button"}
		{...props}
	>
		<TagCreateForm
			toForm={() => ({
				group,
			})}
			onSuccess={({response}) => {
				onSuccess?.(response);
				const values = formItem?.getValue() || [];
				values.push(response.id);
				formItem?.setValue(values);
			}}
		/>
	</DrawerButton>;
};
