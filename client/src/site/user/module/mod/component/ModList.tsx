import {ModDto, ModOrderByDto, PageData, usePageData} from "@/ps/sdk/mod";
import {EyeInvisibleOutlined, EyeOutlined, ThunderboltOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem, OrderButtonBar} from "@leight-core/leight";
import {Col, Divider, Input, Row, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IModListProps extends Partial<IListProps<ModDto>> {
}

export const ModListInternal: FC = ({...props}) => {
	const pageData = usePageData();
	const {t} = useTranslation();
	return <>
		<Row gutter={32}>
			<Col span={24}>
				<Input.Search
					placeholder={t("user.mod.list.search.placeholder")}
					allowClear
					onSearch={fulltext => pageData.setFilter({fulltext})}
				/>
			</Col>
			<Col span={24}>
				<OrderButtonBar<ModOrderByDto>
					prefix={"mod"}
					buttons={["name", "power", "code"]}
				/>
			</Col>
		</Row>
		<Divider/>
		<List<ModDto>
			{...props}
		>
			{mod => <ListItem
				key={mod.id}
				actions={[
					<IconText
						key={"power"}
						tooltip={"user.mod.power.tooltip"}
						icon={<ThunderboltOutlined/>}
						text={mod.power.toFixed(1) + "W"}
					/>,
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
				].filter(item => !!item)}
			>
				<ListItem.Meta
					title={<>{mod.name} <Typography.Text type={"secondary"}>{mod.vendor.name}</Typography.Text></>}
					description={mod.code}
				/>
			</ListItem>}
		</List>
	</>;
};

export const ModList: FC<IModListProps> = props => {
	return <PageData>
		<ModListInternal {...props}/>
	</PageData>;
};
