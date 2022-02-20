import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/comment/endpoint";
import {CommentDto} from "@/sdk/puff-smith/comment/dto";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {CommentOutlined} from "@ant-design/icons";

export interface IPatchCommentFormProps extends Partial<IPatchDefaultFormProps> {
	comment: CommentDto;
}

export const PatchCommentForm: FC<IPatchCommentFormProps> = ({comment, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.comment'}
		onSuccess={response => {
			message.success(t('lab.comment.update.success'));
			commentsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			...comment,
		})}
		toMutation={values => ({
			id: comment.id,
			...values,
		})}
		{...props}>
		<FormItem
			field={'comment'}
		>
			<TextArea
				autoSize={{minRows: 6}}
				style={{width: '100%'}}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit
				icon={<CommentOutlined/>}
				label={'update.submit'}
			/>
		</Centered>
	</PatchDefaultForm>
}
