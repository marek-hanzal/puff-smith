import {IComment} from "@/puff-smith/service/comment/interface";
import {PatchDefaultForm} from "@/sdk/api/comment/patch";
import {CommentOutlined} from "@ant-design/icons";
import {Centered, DrawerButton, EditIcon, FormItem, IDrawerButtonProps, Submit, TextArea} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICommentEditButtonProps extends Partial<IDrawerButtonProps> {
	comment: IComment;
	onSuccess?: () => Promise<any>;
}

export const CommentEditButton: FC<ICommentEditButtonProps> = ({comment, onSuccess, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<EditIcon/>}
		label={"shared.comment.edit.button"}
		title={"shared.comment.edit.title"}
		type={"link"}
		size={"large"}
		{...props}
	>
		<PatchDefaultForm
			translation={"shared.aroma.comment"}
			toForm={() => comment}
			toMutation={values => ({
				id: comment.id,
				...values,
			})}
			onSuccess={() => {
				message.success(t("shared.comment.edit.success"));
				onSuccess?.();
			}}
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
		</PatchDefaultForm>
	</DrawerButton>;
};
