import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CommentOutlined} from "@ant-design/icons";
import {LiquidComments} from "@/puff-smith/site/lab/liquid/@module/component/LiquidComments";
import {useLiquidsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {useTranslation} from "react-i18next";

export interface ILiquidCommentDrawerButtonProps extends Partial<IDrawerButtonProps> {
}

export const LiquidCommentDrawerButton: FC<ILiquidCommentDrawerButtonProps> = props => {
	const {t} = useTranslation();
	const filterContext = useLiquidsOptionalFilterContext();
	return <DrawerButton
		type={'link'}
		label={t('lab.liquid.comments.drawer.button')}
		title={t('lab.liquid.comments.drawer.title')}
		icon={<CommentOutlined/>}
		{...props}
	>
		<LiquidComments filter={filterContext?.filter}/>
	</DrawerButton>;
}
