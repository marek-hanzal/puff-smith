import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit, TextArea} from "@leight-core/leight";
import {CommentOutlined} from "@ant-design/icons";

export interface ICreateCommentFormProps extends Partial<ICreateDefaultFormProps> {
	vape: VapeDto;
}

export const CreateCommentForm: FC<ICreateCommentFormProps> = ({vape, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		onSuccess={response => {
			message.success(t('lab.comment.create.success'));
			commentsQueryInvalidate();
			response.formContext.reset();
			onSuccess?.(response);
		}}
		toMutation={values => ({
			vapeId: vape.id,
			...values,
		})}
		{...props}
	>
		<FormItem
			field={'comment'}
			labels={['lab.comment.comment.label']}
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
				label={'lab.comment.create.submit'}
			/>
		</Centered>
	</CreateDefaultForm>
}
