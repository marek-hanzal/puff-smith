import {IUserCertificateRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {CloseCircleTwoTone} from "@ant-design/icons";
import {Button, ButtonProps} from "antd";
import {FC} from "react";

export interface ICertificateDeclineButtonProps extends Partial<ButtonProps> {
	userCertificateRequest: IUserCertificateRequest;
}

export const CertificateDeclineButton: FC<ICertificateDeclineButtonProps> = ({userCertificateRequest, ...props}) => {
	return <Button
		type={"link"}
		size={"large"}
		icon={<CloseCircleTwoTone twoToneColor={"red"}/>}
		{...props}
	/>;
};
