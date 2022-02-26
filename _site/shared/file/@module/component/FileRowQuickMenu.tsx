import {FileDto} from "@/sdk/edde/file/dto";
import {IFilesSourceContext, useRefreshMutation, useStaleMutation} from "@/sdk/edde/api/shared/file/endpoint";
import {RedoOutlined, StopOutlined} from "@ant-design/icons";
import {IQuickMenuProps, QuickMenu} from "@leight-core/common";
import {Button, Menu, message, Tooltip} from "antd";
import dayjs from "dayjs";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IFileRowQuickMenuProps extends Partial<IQuickMenuProps> {
	file: FileDto;
	sourceContext: IFilesSourceContext;
}

export const FileRowQuickMenu: FC<IFileRowQuickMenuProps> = ({file, sourceContext, children, ...props}) => {
	const {t} = useTranslation();
	const staleMutation = useStaleMutation();
	const refreshMutation = useRefreshMutation();
	return <QuickMenu {...props}>
		{children}
		{(!file.ttl || (file.ttl && file.ttl > dayjs().unix())) && <>
			{children && <Menu.Divider/>}
			<Menu.Item key={"stale." + file.id}>
				<Tooltip title={t("shared.file.stale.tooltip")}>
					<Button
						icon={<StopOutlined/>}
						danger
						type={"link"}
						disabled={staleMutation.isLoading || (!!file.ttl && file.ttl < dayjs().unix())}
						onClick={() => {
							staleMutation.mutate({fileId: file.id}, {
								onSuccess: () => {
									message.success(t("shared.file.stale.success", {data: file}));
									sourceContext.result.refetch();
								},
							});
						}}
					>
						{t("shared.file.stale.button")}
					</Button>
				</Tooltip>
			</Menu.Item>
		</>}
		{file.ttl && file.ttl < dayjs().unix() && <>
			{children && <Menu.Divider/>}
			<Menu.Item key={"refresh." + file.id}>
				<Tooltip title={t("shared.file.refresh.tooltip")}>
					<Button
						icon={<RedoOutlined/>}
						type={"link"}
						disabled={refreshMutation.isLoading || !file.ttl}
						onClick={() => {
							refreshMutation.mutate({fileId: file.id}, {
								onSuccess: () => {
									message.success(t("shared.file.refresh.success", {data: file}));
									sourceContext.result.refetch();
								},
							});
						}}
					>
						{t("shared.file.refresh.button")}
					</Button>
				</Tooltip>
			</Menu.Item>
		</>}
	</QuickMenu>;
};
