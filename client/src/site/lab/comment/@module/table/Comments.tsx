import {Comment, CommentProps, List, ListProps, message, Space} from "antd";
import {PropsWithChildren, ReactElement, ReactNode, useEffect} from "react";
import {CommentDto} from "@/sdk/puff-smith/comment/dto";
import {ListItemProps} from "antd/lib/list";
import {EditIcon, IFormOnSuccess, OrderButtonBar, Template, TextArea, toLocalDateTime, useSourceContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {useDeleteMutation} from "@/sdk/puff-smith/api/lab/comment/endpoint";
import {useCommentsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {CommentOutlined} from "@ant-design/icons";
import {CommentDeleteButton, DrawerCommentEditButton} from "@/puff-smith/site/lab/comment";

export interface IComments<TComment> extends Partial<ListProps<any>> {
	form?: ReactNode;
	toComment: (dto: TComment) => CommentDto;
	toListItemProps?: (dto: TComment) => Partial<ListItemProps> | undefined;
	toListItemMeta?: (dto: TComment) => ReactElement<typeof List.Item.Meta> | undefined;
	toCommentProps?: (dto: TComment) => Partial<CommentProps> | undefined;
	onEdit?: IFormOnSuccess<CommentDto, CommentDto>;
	onDelete?: () => void;
}

export function Comments<TComment>({form, toComment, toListItemProps = () => undefined, toCommentProps = () => undefined, toListItemMeta = () => undefined, onEdit, onDelete, ...props}: PropsWithChildren<IComments<TComment>>) {
	const {t} = useTranslation();
	const sourceContext = useSourceContext<any, TComment, any, any>();
	const deleteMutation = useDeleteMutation();
	const commentsQueryInvalidate = useCommentsQueryInvalidate();

	useEffect(() => {
		sourceContext.setSize(5);
	}, []);

	return <List
		itemLayout={'vertical'}
		loading={sourceContext.result.isLoading}
		header={<Space>
			<Space>
				<CommentOutlined/>
				{t('lab.comment.list.title')}
			</Space>
			<OrderButtonBar
				buttons={[
					'stamp',
				]}
				prefix={'lab.comment'}
			/>
		</Space>}
		pagination={sourceContext.pagination()}
		{...props}
	>
		{!sourceContext.result.isLoading && !sourceContext?.result?.data?.count && <Template
			icon={<CommentOutlined/>}
			label={'lab.comment.no-comments'}
		/>}
		{form && <List.Item>
			{form}
		</List.Item>}
		{sourceContext?.result?.data?.items.map(dto => {
			const comment = toComment(dto);
			return <List.Item key={comment.id} {...toListItemProps(dto)}>
				{toListItemMeta(dto)}
				<Comment
					content={<TextArea style={{padding: 0}} autoSize bordered={false} readOnly value={comment.comment}/>}
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
					{...toCommentProps(dto)}
				/>
			</List.Item>
		})}
	</List>
}
