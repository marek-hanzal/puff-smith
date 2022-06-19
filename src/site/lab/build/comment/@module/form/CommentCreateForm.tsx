import {IBuild} from "@/puff-smith/service/build/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/lab/build/comment/create";
import {useBuildCommentQueryInvalidate} from "@/sdk/api/lab/build/comment/query";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ICommentCreateFormProps extends Partial<ICreateDefaultFormProps> {
	build: IBuild;
}

export const CommentCreateForm: FC<ICommentCreateFormProps> = ({build, onSuccess, ...props}) => {
	const buildCommentQueryInvalidate = useBuildCommentQueryInvalidate();
	return <CreateDefaultForm
		translation={"lab.build.comment"}
		toMutation={values => ({
			...values,
			buildId: build.id,
		})}
		onSuccess={async ({formContext, ...rest}) => {
			formContext.reset();
			await buildCommentQueryInvalidate();
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
