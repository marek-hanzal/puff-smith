import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {CertificateCreateForm} from "@/puff-smith/site/shared/certificate/@module/form/CertificateCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ICertificateCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const CertificateCreateButton: FC<ICertificateCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.certificate.create.title"}
		label={"market.certificate.create.button"}
		icon={<LiquidIcon/>}
		{...props}
	>
		<CertificateCreateForm/>
	</DrawerButton>;
};
