import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {CommentOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {CreateCommentForm} from "@/puff-smith/site/lab/mixture/@module/form/CreateCommentForm";

export interface IMixtureCommentButtonProps extends Partial<IDrawerButtonProps> {
	mixture: MixtureDto;
}

export const MixtureCommentButton: FC<IMixtureCommentButtonProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<CommentOutlined/>}
		type={'link'}
		size={'large'}
		title={'lab.comment.create.title'}
		label={t('lab.mixture.comment.create')}
		{...props}
	>
		<CreateCommentForm mixture={mixture}/>
	</DrawerButton>;
}
