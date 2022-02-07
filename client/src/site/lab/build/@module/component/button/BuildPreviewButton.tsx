import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {BuildPreview} from "@/puff-smith/site/lab/build";
import {IModalButtonProps, ModalButton} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

export interface IBuildPreviewButtonProps extends Partial<IModalButtonProps> {
	build: BuildDto;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, children, ...props}) => {
	const {t} = useTranslation();
	return <ModalButton
		button={{
			type: 'link',
			size: 'large',
			icon: <BuildIcon/>,
			children: children || t('lab.build.preview'),
		}}
		centered
		{...props}
	>
		<BuildPreview build={build}/>
	</ModalButton>
}
