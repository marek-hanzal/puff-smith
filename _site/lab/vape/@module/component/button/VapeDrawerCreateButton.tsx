import {FC} from "react";
import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {CreateVapeForm} from "../../form/CreateVapeForm";

export interface IVapeDrawerCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const VapeDrawerCreateButton: FC<IVapeDrawerCreateButtonProps> = props => {
	const {t} = useTranslation();
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<VapeIcon/>}
		title={'lab.vape.create.title'}
		label={t('lab.build.button.vape.create')}
		{...props}
	>
		<CreateVapeForm/>
	</DrawerButton>
}