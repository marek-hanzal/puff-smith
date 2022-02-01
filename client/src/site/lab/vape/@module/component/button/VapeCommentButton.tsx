import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CommentOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CreateCommentForm} from "@/puff-smith/site/lab/vape";

export interface IVapeCommentButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapeCommentButton: FC<IVapeCommentButtonProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<CommentOutlined/>}
		type={'link'}
		size={'large'}
		title={'lab.comment.create.title'}
		label={t('lab.vape.comment.create')}
		{...props}
	>
		<CreateCommentForm vape={vape}/>
	</DrawerButton>;
}
