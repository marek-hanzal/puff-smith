import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CommentOutlined} from "@ant-design/icons";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerComments";
import {useAtomizersOptionalFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {useTranslation} from "react-i18next";

export interface IAtomizerCommentDrawerButtonProps extends Partial<IDrawerButtonProps> {
}

export const AtomizerCommentDrawerButton: FC<IAtomizerCommentDrawerButtonProps> = props => {
	const {t} = useTranslation();
	const filterContext = useAtomizersOptionalFilterContext();
	return <DrawerButton
		type={'link'}
		label={t('lab.atomizer.comments.drawer.button')}
		title={t('lab.atomizer.comments.drawer.title')}
		icon={<CommentOutlined/>}
		{...props}
	>
		<AtomizerComments filter={filterContext?.filter}/>
	</DrawerButton>;
}
