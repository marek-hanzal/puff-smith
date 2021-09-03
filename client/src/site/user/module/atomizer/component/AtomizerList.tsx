import {ps} from "@/ps";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem, OrderButtonBar} from "@leight-core/leight";
import {Col, Divider, Input, Row} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

type AtomizerDto = ps.atomizer.AtomizerDto;
type AtomizerOrderByDto = ps.storage.atomizer.AtomizerOrderByDto;
const DataSourceContextProvider = ps.user.atomizer.datasource.DataSourceContextProvider;
const useDataSourceContext = ps.user.atomizer.datasource.useDataSourceContext;

export interface IAtomizerListProps extends Partial<IListProps<AtomizerDto>> {
}

export const AtomizerListInternal: FC = ({...props}) => {
	const dataSourceContext = useDataSourceContext();
	const {t} = useTranslation();
	return <>
		<Row gutter={32}>
			<Col flex={"auto"}>
				<OrderButtonBar<AtomizerOrderByDto> buttons={["name", "code"]}/>
			</Col>
			<Col span={8}>
				<Input.Search placeholder={t("user.atomizer.list.search.placeholder")} allowClear onSearch={fulltext => dataSourceContext.setFilter({fulltext})}/>
			</Col>
		</Row>
		<Divider/>
		<List<AtomizerDto>
			{...props}
		>
			{atomizer => <ListItem
				key={atomizer.id}
				actions={[
					atomizer.maxCoilSize && <IconText
						key={"maxCoilSize"}
						tooltip={"user.atomizer.max-coil-size.tooltip"}
						icon={<ExpandAltOutlined/>}
						text={atomizer.maxCoilSize}
					/>,
					atomizer.maxWraps && <IconText
						key={"maxWraps"}
						tooltip={"user.atomizer.max-wraps.tooltip"}
						icon={<RedoOutlined/>}
						text={atomizer.maxWraps}
					/>,
				].filter(item => !!item)}
			>
				<ListItem.Meta
					title={atomizer.name}
					description={atomizer.code}
				/>
			</ListItem>}
		</List>
	</>;
};

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <DataSourceContextProvider>
		<AtomizerListInternal {...props}/>
	</DataSourceContextProvider>;
};
