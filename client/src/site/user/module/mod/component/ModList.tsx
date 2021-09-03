import {ps} from "@/ps";
import {DashboardOutlined, EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem, OrderButtonBar} from "@leight-core/leight";
import {Col, Divider, Input, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import ModOrderByDto = ps.storage.mod.ModOrderByDto;

type ModDto = ps.mod.ModDto;
const DataSourceContextProvider = ps.user.mod.datasource.DataSourceContextProvider;
const useDataSourceContext = ps.user.mod.datasource.useDataSourceContext;

export interface IModListProps extends Partial<IListProps<ModDto>> {
}

export const ModListInternal: FC = ({...props}) => {
	const dataSourceContext = useDataSourceContext();
	const {t} = useTranslation();
	return <>
		<Row gutter={32}>
			<Col flex={"auto"}>
				<OrderButtonBar<ModOrderByDto> buttons={["name", "power", "code"]}/>
			</Col>
			<Col span={8}>
				<Input.Search placeholder={t("user.mod.list.search.placeholder")} onSearch={fulltext => dataSourceContext.setFilter({fulltext})}/>
			</Col>
		</Row>
		<Divider/>
		<List<ModDto>
			{...props}
		>
			{mod => <ListItem
				key={mod.id}
				actions={[
					mod.approvedBy && <IconText
						key={"approvedBy"}
						tooltip={"user.mod.approved-by.tooltip"}
						data={mod.approvedBy}
						icon={<EyeOutlined/>}
					/>,
					!mod.isApproved && <IconText
						key={"isNotApproved"}
						tooltip={"user.mod.is-not-approved.tooltip"}
						icon={<EyeInvisibleOutlined/>}
					/>,
					<IconText
						key={"power"}
						tooltip={"user.mod.power.tooltip"}
						icon={<DashboardOutlined/>}
						text={mod.power.toFixed(1) + "W"}
					/>,
				].filter(item => !!item)}
			>
				<ListItem.Meta
					title={mod.name}
					description={mod.code}
				/>
			</ListItem>}
		</List>
	</>;
};

export const ModList: FC<IModListProps> = props => {
	return <DataSourceContextProvider>
		<ModListInternal {...props}/>
	</DataSourceContextProvider>;
};
