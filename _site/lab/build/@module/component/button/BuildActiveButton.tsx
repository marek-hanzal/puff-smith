import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Button, ButtonProps, message} from "antd";
import {PauseCircleOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {useActiveMutation, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";

export interface IBuildActiveButtonProps extends Partial<ButtonProps> {
	build: BuildDto;
}

export const BuildActiveButton: FC<IBuildActiveButtonProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	const activeMutation = useActiveMutation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return build.active ? <Button
		size={'large'}
		type={'link'}
		icon={<PauseCircleOutlined/>}
		onClick={() => {
			activeMutation.mutate({
				id: build.id,
				active: false,
			}, {
				onSuccess: build => {
					message.success(t('lab.build.deactivated.success', {data: build}));
					buildsQueryInvalidate();
				}
			})
		}}
		{...props}
	>
		{t('lab.build.button.deactivate')}
	</Button> : <Button
		size={'large'}
		type={'link'}
		icon={<PlayCircleOutlined/>}
		onClick={() => {
			activeMutation.mutate({
				id: build.id,
				active: true,
			}, {
				onSuccess: build => {
					message.success(t('lab.build.activated.success', {data: build}));
					buildsQueryInvalidate();
				}
			})
		}}
		{...props}
	>
		{t('lab.build.button.activate')}
	</Button>
}
