import {TagCreateForm} from "@/puff-smith/ui/tag/form/TagCreateForm";
import {PlusOutlined}  from "@ant-design/icons";
import {
    DrawerButton,
    IDrawerButtonProps,
    ITag,
    useOptionalFormItemContext
}                      from "@leight-core/viv";
import {FC}            from "react";

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
		translation={{
			namespace: "lab.tag.create",
			text:      "title",
		}}
		label={"button"}
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
