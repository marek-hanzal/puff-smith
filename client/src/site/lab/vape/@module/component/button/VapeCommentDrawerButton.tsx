import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {FC} from "react";
import {CommentOutlined} from "@ant-design/icons";
import {VapeComments} from "@/puff-smith/site/lab/vape/@module/component/VapeComments";
import {useVapesOptionalFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {useTranslation} from "react-i18next";

export interface IVapeCommentDrawerButtonProps extends Partial<IDrawerButtonProps> {
}

export const VapeCommentDrawerButton: FC<IVapeCommentDrawerButtonProps> = props => {
	const {t} = useTranslation();
	const filterContext = useVapesOptionalFilterContext();
	return <DrawerButton
		type={'link'}
		label={t('lab.vape.comments.drawer.button')}
		title={t('lab.vape.comments.drawer.title')}
		icon={<CommentOutlined/>}
		{...props}
	>
		<VapeComments filter={filterContext?.filter}/>
	</DrawerButton>;
}
