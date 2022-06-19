import {CertificateCreateForm} from "@/puff-smith/site/shared/certificate/@module/form/CertificateCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICertificateCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const CertificateCreateInline: FC<ICertificateCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.certificate.create.title"}
		label={"lab.certificate.create.button"}
		{...props}
	>
		<CertificateCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
