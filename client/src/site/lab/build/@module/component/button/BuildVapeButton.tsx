import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CreateVapeForm} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";

export interface IBuildVapeButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildVapeButton: FC<IBuildVapeButtonProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<VapeIcon/>}
		title={'lab.vape.create.title'}
		label={t('lab.build.button.vape.create')}
		{...props}
	>
		<CreateVapeForm
			vape={{buildId: build.id}}
			exclude={['buildId']}
		/>
	</DrawerButton>
}
