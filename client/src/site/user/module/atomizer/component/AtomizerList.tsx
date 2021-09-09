import {AtomizerIcon} from "@/ps";
import {AtomizerDto, AtomizerOrderByDto, PageData, usePageData} from "@/ps/sdk/atomizer";
import {DashboardOutlined, ExpandAltOutlined, Loading3QuartersOutlined, MacCommandOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem, OrderButtonBar} from "@leight-core/leight";
import {Col, Divider, Input, Row, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IAtomizerListProps extends Partial<IListProps<AtomizerDto>> {
}

export const AtomizerListInternal: FC = ({...props}) => {
	const pageData = usePageData();
	const {t} = useTranslation();
	return <>
		<Row gutter={32}>
			<Col span={24}>
				<Input.Search
					placeholder={t("user.atomizer.list.search.placeholder")}
					allowClear
					onSearch={fulltext => pageData.setFilter({fulltext})}
				/>
			</Col>
			<Col span={24}>
				<OrderButtonBar<AtomizerOrderByDto>
					prefix={"atomizer"}
					buttons={["name", "base", "coils", "maxCoilSize", "maxWraps", "capacity"]}
				/>
			</Col>
		</Row>
		<Divider/>
		<List<AtomizerDto>
			{...props}
		>
			{atomizer => <ListItem
				key={atomizer.id}
				actions={[
					atomizer.base && <IconText
						key={"base"}
						tooltip={"user.atomizer.base.tooltip"}
						icon={<AtomizerIcon/>}
						text={atomizer.base}
					/>,
					atomizer.coils && <IconText
						key={"coils"}
						tooltip={"user.atomizer.coils.tooltip"}
						icon={<MacCommandOutlined/>}
						text={atomizer.coils}
					/>,
					atomizer.capacity && <IconText
						key={"capacity"}
						tooltip={"user.atomizer.capacity.tooltip"}
						icon={<DashboardOutlined/>}
						text={atomizer.capacity + " ml"}
					/>,
					atomizer.maxCoilSize && <IconText
						key={"maxCoilSize"}
						tooltip={"user.atomizer.max-coil-size.tooltip"}
						icon={<ExpandAltOutlined/>}
						text={atomizer.maxCoilSize}
					/>,
					atomizer.maxWraps && <IconText
						key={"maxWraps"}
						tooltip={"user.atomizer.max-wraps.tooltip"}
						icon={<Loading3QuartersOutlined/>}
						text={atomizer.maxWraps}
					/>,
				].filter(item => !!item)}
			>
				<ListItem.Meta
					title={<>{atomizer.name} <Typography.Text type={"secondary"}>{atomizer.vendor.name}</Typography.Text></>}
					description={atomizer.code}
				/>
			</ListItem>}
		</List>
	</>;
};

export const AtomizerList: FC<IAtomizerListProps> = props => {
	return <PageData>
		<AtomizerListInternal {...props}/>
	</PageData>;
};
