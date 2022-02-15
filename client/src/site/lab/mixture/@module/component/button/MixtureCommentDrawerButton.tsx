import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight/dist";
import {FC} from "react";
import {CommentOutlined} from "@ant-design/icons";
import {MixtureComments} from "@/puff-smith/site/lab/mixture/@module/component/MixtureComments";
import {useMixturesOptionalFilterContext} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {useTranslation} from "react-i18next";

export interface IMixtureCommentDrawerButtonProps extends Partial<IDrawerButtonProps> {
}

export const MixtureCommentDrawerButton: FC<IMixtureCommentDrawerButtonProps> = props => {
	const {t} = useTranslation();
	const filterContext = useMixturesOptionalFilterContext();
	return <DrawerButton
		type={'link'}
		label={t('lab.mixture.comments.drawer.button')}
		title={t('lab.mixture.comments.drawer.title')}
		icon={<CommentOutlined/>}
		{...props}
	>
		<MixtureComments filter={filterContext?.filter}/>
	</DrawerButton>;
}
