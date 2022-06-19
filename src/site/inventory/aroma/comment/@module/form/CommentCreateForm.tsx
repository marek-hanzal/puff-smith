import {IAromaInventory} from "@/puff-smith/service/aroma/inventory/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/inventory/aroma/comment/create";
import {useAromaInventoryCommentQueryInvalidate} from "@/sdk/api/inventory/aroma/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICommentCreateFormProps extends Partial<ICreateDefaultFormProps> {
	aromaInventory: IAromaInventory;
}

export const CommentCreateForm: FC<ICommentCreateFormProps> = ({aromaInventory, onSuccess, ...props}) => {
	const aromaInventoryCommentQueryInvalidate = useAromaInventoryCommentQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.aroma.comment"}
		toMutation={values => ({
			...values,
			aromaInventoryId: aromaInventory.id,
		})}
		onSuccess={async ({formContext, ...rest}) => {
			formContext.reset();
			await aromaInventoryCommentQueryInvalidate();
			onSuccess?.({formContext, ...rest});
		}}
		{...props}
	>
		<FormItem field={"comment"} noStyle>
			<TextArea
				usePlaceholder
				autoFocus
				allowClear
				autoSize={{minRows: 6, maxRows: 6}}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CommentOutlined/>} label={"comment"}/>
		</Centered>
	</CreateDefaultForm>;
};
