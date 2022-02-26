import {ConfigPreview, ConfigPreviewButton} from "../../index";
import {ButtonLink, EditIcon, IQuickMenuProps, QuickMenu} from "@leight-core/common";
import {Card, Menu} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ConfigDto} from "@/sdk/edde/config/dto";
import {ConfigsSourceTable, IConfigsSourceTableProps} from "@/sdk/edde/api/root/config/endpoint";

interface IQuickMenuInternalProps extends Partial<IQuickMenuProps> {
	config: ConfigDto;
}

const QuickMenuInternal: FC<IQuickMenuInternalProps> = ({config, ...props}) => {
	const {t} = useTranslation();
	return <QuickMenu {...props}>
		<Menu.Item>
			<ConfigPreviewButton
				size={"small"}
				config={config}
			>
				{t("common.quick-detail.submenu")}
			</ConfigPreviewButton>
		</Menu.Item>
		<Menu.Item>
			<ButtonLink
				type={"link"}
				size={"small"}
				href={"/root/settings/config/[configId]/edit"}
				query={{configId: config.id}}
				icon={<EditIcon/>}
				title={"common.edit"}
			/>
		</Menu.Item>
	</QuickMenu>;
};

export interface IConfigTableProps extends Partial<IConfigsSourceTableProps> {
}

export const ConfigTable: FC<IConfigTableProps> = props => {
	return <ConfigsSourceTable
		expandable={{
			expandedRowRender: config => <Card><ConfigPreview config={config}/></Card>,
		}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				width: 1,
				render: (_, config) => <QuickMenuInternal config={config}/>
			}),
			column({
				key: "key",
				title: "root.config.key.label",
				width: 220,
				render: (_, config) => <ButtonLink
					type={"link"}
					href={"/root/settings/config/[configId]"}
					query={{configId: config.id}}
					title={config.key}
				/>
			}),
			column({
				key: "value",
				dataIndex: "value",
				title: "root.config.value.label",
			}),
		]}
	</ConfigsSourceTable>;
};
