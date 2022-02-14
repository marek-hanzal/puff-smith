import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CommentOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {CreateCommentForm} from "@/puff-smith/site/lab/atomizer/@module/form/CreateCommentForm";

export interface IAtomizerCommentButtonProps extends Partial<IDrawerButtonProps> {
	atomizer: AtomizerDto;
}

export const AtomizerCommentButton: FC<IAtomizerCommentButtonProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<CommentOutlined/>}
		type={'link'}
		size={'large'}
		title={'lab.comment.create.title'}
		label={t('lab.atomizer.comment.create')}
		{...props}
	>
		<CreateCommentForm atomizer={atomizer}/>
	</DrawerButton>;
}
