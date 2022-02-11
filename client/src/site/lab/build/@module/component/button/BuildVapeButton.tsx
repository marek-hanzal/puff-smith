import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {CreateVapeForm} from "@/puff-smith/site/lab/vape";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {IFormOnSuccess} from "@leight-core/leight/dist";

export interface IBuildVapeButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
	onSuccess?: IFormOnSuccess<any, VapeDto>;
}

export const BuildVapeButton: FC<IBuildVapeButtonProps> = ({build, onSuccess, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<VapeIcon/>}
		title={'lab.vape.create.title'}
		label={t('lab.build.button.vape.create')}
		width={650}
		{...props}
	>
		<CreateVapeForm
			vape={{buildId: build.id}}
			onSuccess={onSuccess}
			exclude={['buildId']}
		/>
	</DrawerButton>
}
