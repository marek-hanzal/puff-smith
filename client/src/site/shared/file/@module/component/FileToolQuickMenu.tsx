import {IFilesSourceContext, useGcMutation} from "@/sdk/edde/api/shared/file/endpoint";
import {BarsOutlined} from "@ant-design/icons";
import {DeleteItemIcon, IQuickMenuProps, QuickMenu} from "@leight-core/leight";
import {Button, Menu, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IFileToolQuickMenuProps extends Partial<IQuickMenuProps> {
	sourceContext: IFilesSourceContext;
}

export const FileToolQuickMenu: FC<IFileToolQuickMenuProps> = ({sourceContext, children, ...props}) => {
	const {t} = useTranslation();
	const gcMutation = useGcMutation();
	return <QuickMenu icon={<BarsOutlined/>} {...props}>
		{children}
		{children && <Menu.Divider/>}
		<Menu.Item>
			<Button
				icon={<DeleteItemIcon/>}
				type={"link"}
				danger
				disabled={gcMutation.isLoading}
				onClick={() => {
					gcMutation.mutate(undefined, {
						onSuccess: _ => {
							message.success(t("shared.file.gc.started"));
							sourceContext.result.refetch();
						}
					});
				}}
			>
				{t("shared.file.force-gc.title")}
			</Button>
		</Menu.Item>
	</QuickMenu>;
};
