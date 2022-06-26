import {IAtomizerInventory} from "@/puff-smith/service/atomizer/inventory/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/inventory/atomizer/comment/create";
import {useAtomizerInventoryCommentQueryInvalidate} from "@/sdk/api/inventory/atomizer/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICommentCreateFormProps extends Partial<ICreateDefaultFormProps> {
	atomizerInventory: IAtomizerInventory;
}

export const CommentCreateForm: FC<ICommentCreateFormProps> = ({atomizerInventory, onSuccess, ...props}) => {
	const atomizerInventoryCommentQueryInvalidate = useAtomizerInventoryCommentQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.atomizer.comment"}
		toMutation={values => ({
			...values,
			atomizerInventoryId: atomizerInventory.id,
		})}
		onSuccess={async ({formContext, ...rest}) => {
			formContext.reset();
			await atomizerInventoryCommentQueryInvalidate();
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
