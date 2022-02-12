import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateVapeForm, ICreateVapeFormProps} from "@/puff-smith/site/lab/vape/@module/form/CreateVapeForm";

export interface IVapeCreateButtonProps extends Partial<IDrawerButtonProps> {
	formProps?: Partial<ICreateVapeFormProps>;
}

export const VapeCreateButton: FC<IVapeCreateButtonProps> = ({formProps, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.vape.button.create'}
		{...props}
	>
		<CreateVapeForm {...formProps}/>
	</DrawerButton>
}
