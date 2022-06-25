import {IAroma} from "@/puff-smith/service/aroma/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/aroma/comment/create";
import {useAromaCommentQueryInvalidate} from "@/sdk/api/aroma/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICommentCreateFormProps extends Partial<ICreateDefaultFormProps> {
	aroma: IAroma;
}

export const CommentCreateForm: FC<ICommentCreateFormProps> = ({aroma, onSuccess, ...props}) => {
	const aromaCommentQueryInvalidate = useAromaCommentQueryInvalidate();
	return <CreateDefaultForm
		translation={"market.aroma.comment"}
		toMutation={values => ({
			...values,
			aromaId: aroma.id,
		})}
		onSuccess={async ({formContext, ...rest}) => {
			formContext.reset();
			await aromaCommentQueryInvalidate();
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
