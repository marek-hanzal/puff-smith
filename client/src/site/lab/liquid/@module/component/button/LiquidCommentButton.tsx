import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CommentOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {CreateCommentForm} from "@/puff-smith/site/lab/liquid";

export interface ILiquidCommentButtonProps extends Partial<IDrawerButtonProps> {
	liquid: LiquidDto;
}

export const LiquidCommentButton: FC<ILiquidCommentButtonProps> = ({liquid, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<CommentOutlined/>}
		type={'link'}
		size={'small'}
		title={'lab.comment.create.title'}
		label={t('lab.liquid.comment.create')}
		{...props}
	>
		<CreateCommentForm liquid={liquid}/>
	</DrawerButton>;
}
