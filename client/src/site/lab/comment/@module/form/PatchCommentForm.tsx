import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/comment/endpoint";
import {CommentDto} from "@/sdk/puff-smith/comment/dto";
import {Centered, FormItem, Submit, TextArea, useOptionalDrawerContext} from "@leight-core/leight";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {CommentOutlined} from "@ant-design/icons";

export interface IPatchCommentFormProps extends Partial<IPatchDefaultFormProps> {
	comment: CommentDto;
}

export const PatchCommentForm: FC<IPatchCommentFormProps> = ({comment, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	return <PatchDefaultForm
		layout={'vertical'}
		onSuccess={success => {
			message.success(t('lab.comment.update.success'));
			drawerContext && drawerContext.setVisible(false);
			onSuccess && onSuccess(success);
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
				label={'lab.comment.update.submit'}
			/>
		</Centered>
	</PatchDefaultForm>
}
