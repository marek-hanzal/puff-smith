import {Comment, List, ListProps, message, Space} from "antd";
import {CommentDto, CommentOrderByDto} from "@/sdk/puff-smith/comment/dto";
import {FC, ReactNode} from "react";
import {EditIcon, IFormOnSuccess, OrderButtonBar, TextArea, toLocalDateTime} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {CommentOutlined} from "@ant-design/icons";
import {CommentDeleteButton, DrawerCommentEditButton} from "@/puff-smith/site/lab/comment";
import {useCommentsQueryInvalidate, useCommentsSource, useDeleteMutation} from "@/sdk/puff-smith/api/lab/comment/endpoint";

export interface ICommentListProps extends Partial<ListProps<CommentDto>> {
	form: ReactNode;
	onEdit?: IFormOnSuccess<CommentDto, CommentDto>;
	onDelete?: () => void;
}

export const CommentList: FC<ICommentListProps> = ({form, onEdit, onDelete, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();
	const sourceContext = useCommentsSource();
	return <List
		itemLayout={'vertical'}
		loading={sourceContext.result.isLoading}
		header={<Space>
			<Space>
				<CommentOutlined/>
				{t('lab.comment.list.title')}
			</Space>
			<OrderButtonBar<CommentOrderByDto>
				buttons={[
					'stamp',
				]}
				prefix={'lab.comment'}
			/>
		</Space>}
		{...props}
	>
		{sourceContext.result.isSuccess && sourceContext.result.data.items.map(comment => <List.Item key={comment.id}>
			<Comment
				content={<TextArea autoSize bordered={false} readOnly value={comment.comment}/>}
				datetime={toLocalDateTime(comment.stamp)}
				actions={[
					<DrawerCommentEditButton
						key={'edit'}
						type={'link'}
						size={'small'}
						icon={<EditIcon/>}
						onSuccess={onEdit}
						comment={comment}
						title={'lab.comment.edit.button'}
					/>,
					<CommentDeleteButton
						key={'delete'}
						size={'small'}
						label={'lab.comment.delete.button'}
						onOk={setShow => {
							setShow(false);
							deleteMutation.mutate({id: comment.id}, {
								onSuccess: () => {
									message.success(t('lab.comment.delete.success'))
									commentsQueryInvalidate();
									onDelete && onDelete();
								}
							});
						}}
						comment={comment}
					/>,
				]}
			/>
		</List.Item>)}
		<List.Item>
			{form}
		</List.Item>
	</List>
}
