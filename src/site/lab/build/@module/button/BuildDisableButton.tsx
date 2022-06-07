import {IBuild} from "@/puff-smith/service/build/interface";
import {useBuildQueryInvalidate} from "@/sdk/api/lab/build/[id]/fetch";
import {usePatchMutation} from "@/sdk/api/lab/build/patch";
import Icon from "@ant-design/icons";
import {IModalButtonProps, ModalButton} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {Trans, useTranslation} from "react-i18next";
import {BsArchive} from "react-icons/bs";

export interface IBuildDisableButtonProps extends Partial<IModalButtonProps> {
	build: IBuild;
}

export const BuildDisableButton: FC<IBuildDisableButtonProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	const patchMutation = usePatchMutation();
	return <ModalButton
		button={{
			size: "large",
			type: "link",
			icon: <Icon component={BsArchive}/>,
			children: "lab.build.disable.button",
			loading: patchMutation.isLoading,
		}}
		okButtonProps={{
			size: "large",
			icon: <Icon component={BsArchive}/>,
			loading: patchMutation.isLoading,
		}}
		cancelButtonProps={{
			type: "link",
		}}
		onOk={(setShow) => {
			patchMutation.mutate({
				id: build.id,
				active: false,
			}, {
				onSuccess: async () => {
					message.success(t("lab.build.disable.success"));
					await buildQueryInvalidate();
				},
				onSettled: () => {
					setShow(false);
				}
			});
		}}
		title={"lab.build.disable.title"}
		{...props}
	>
		<Trans i18nKey={"lab.build.disable.content"}/>
	</ModalButton>;
};
