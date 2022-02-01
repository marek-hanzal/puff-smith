import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CommentOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {CreateCommentForm} from "@/puff-smith/site/lab/build";

export interface IBuildCommentButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildCommentButton: FC<IBuildCommentButtonProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		icon={<CommentOutlined/>}
		type={'link'}
		size={'small'}
		title={'lab.comment.create.title'}
		label={t('lab.build.comment.create')}
		{...props}
	>
		<CreateCommentForm build={build}/>
	</DrawerButton>;
}
