import {ps} from "@/ps";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem} from "@leight-core/leight";
import {Button} from "antd";
import {FC} from "react";

type ModDto = ps.mod.ModDto;
const DataSourceContextProvider = ps.user.mod.datasource.DataSourceContextProvider;
const useDataSourceContext = ps.user.mod.datasource.useDataSourceContext;

export interface IModListProps extends Partial<IListProps<ModDto>> {
}

export const ModListInternal: FC = () => {
	const dataSourceContext = useDataSourceContext();
	return <>
		<Button onClick={() => {
			dataSourceContext.setOrderBy({
				name: false,
			});
		}}>Klyk me down</Button>
		<Button onClick={() => {
			dataSourceContext.setOrderBy({
				name: true,
			});
		}}>Klyk me up</Button>
		<List<ModDto>
			itemLayout={"vertical"}
		>
			{mod => <ListItem
				key={mod.id}
				actions={[
					mod.approvedBy && <IconText
						key={"approvedBy"}
						tooltip={"user.mod.approved-by.tooltip"}
						data={mod.approvedBy}
						icon={<EyeOutlined/>}
						text={mod.approvedBy.id!!}
					/>,
					!mod.isApproved && <IconText
						key={"isNotApproved"}
						tooltip={"user.mod.is-not-approved.tooltip"}
						icon={<EyeInvisibleOutlined/>}
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

export const ModList: FC<IModListProps> = () => {
	return <DataSourceContextProvider>
		<ModListInternal/>
	</DataSourceContextProvider>;
};
