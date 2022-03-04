import {FC} from "react";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps, IFormOnSuccess} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CreateVapeForm} from "../../../../vape/@module/form/CreateVapeForm";

export interface IBuildVapeButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
	onSuccess?: IFormOnSuccess<any, VapeDto>;
}

export const BuildVapeButton: FC<IBuildVapeButtonProps> = ({build, onSuccess, ...props}) => {
	const {t} = useTranslation();
	console.error('Replace this with VapeCreateButton!');
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
			vape={{
				buildId: build.id,
				modId: build.modId as any,
				driptipId: build.driptipId,
			}}
			onSuccess={onSuccess}
			exclude={['buildId']}
		/>
	</DrawerButton>
}