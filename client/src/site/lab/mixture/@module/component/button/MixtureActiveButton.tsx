import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import {Button, ButtonProps, message} from "antd";
import {PauseCircleOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {useActiveMutation, useMixturesQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/endpoint";

export interface IMixtureActiveButtonProps extends Partial<ButtonProps> {
	mixture: MixtureDto;
}

export const MixtureActiveButton: FC<IMixtureActiveButtonProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	const activeMutation = useActiveMutation();
	const mixturesQueryInvalidate = useMixturesQueryInvalidate();
	return mixture.active ? <Button
		size={'large'}
		type={'link'}
		icon={<PauseCircleOutlined/>}
		onClick={() => {
			activeMutation.mutate({
				id: mixture.id,
				active: false,
			}, {
				onSuccess: mixture => {
					message.success(t('lab.mixture.deactivated.success', {data: mixture}));
					mixturesQueryInvalidate();
				}
			})
		}}
		{...props}
	>
		{t('lab.mixture.button.deactivate')}
	</Button> : <Button
		size={'large'}
		type={'link'}
		icon={<PlayCircleOutlined/>}
		onClick={() => {
			activeMutation.mutate({
				id: mixture.id,
				active: true,
			}, {
				onSuccess: mixture => {
					message.success(t('lab.mixture.activated.success', {data: mixture}));
					mixturesQueryInvalidate();
				}
			})
		}}
		{...props}
	>
		{t('lab.mixture.button.activate')}
	</Button>
}
