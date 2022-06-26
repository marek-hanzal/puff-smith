import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/atomizer/comment/create";
import {useAtomizerCommentQueryInvalidate} from "@/sdk/api/atomizer/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICommentCreateFormProps extends Partial<ICreateDefaultFormProps> {
	atomizer: IAtomizer;
}

export const CommentCreateForm: FC<ICommentCreateFormProps> = ({atomizer, onSuccess, ...props}) => {
	const atomizerCommentQueryInvalidate = useAtomizerCommentQueryInvalidate();
	return <CreateDefaultForm
		translation={"market.atomizer.comment"}
		toMutation={values => ({
			...values,
			atomizerId: atomizer.id,
		})}
		onSuccess={async ({formContext, ...rest}) => {
			formContext.reset();
			await atomizerCommentQueryInvalidate();
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
