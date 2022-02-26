import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {CommentOutlined} from "@ant-design/icons";
import {BuildComments} from "../BuildComments";
import {useBuildsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {useTranslation} from "react-i18next";

export interface IBuildCommentDrawerButtonProps extends Partial<IDrawerButtonProps> {
}

export const BuildCommentDrawerButton: FC<IBuildCommentDrawerButtonProps> = props => {
	const {t} = useTranslation();
	const filterContext = useBuildsOptionalFilterContext();
	return <DrawerButton
		type={'link'}
		label={t('lab.build.comments.drawer.button')}
		title={t('lab.build.comments.drawer.title')}
		icon={<CommentOutlined/>}
		{...props}
	>
		<BuildComments filter={filterContext?.filter}/>
	</DrawerButton>;
}
