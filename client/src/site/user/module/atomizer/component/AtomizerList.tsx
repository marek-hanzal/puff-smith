import {ps} from "@/ps";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";
import {IconText, IListProps, List, ListItem} from "@leight-core/leight";
import {Button} from "antd";
import {FC} from "react";

type AtomizerDto = ps.atomizer.AtomizerDto;
const DataSourceContextProvider = ps.user.atomizer.datasource.DataSourceContextProvider;
const useDataSourceContext = ps.user.atomizer.datasource.useDataSourceContext;

export interface IAtomizerListProps extends Partial<IListProps<AtomizerDto>> {
}

export const AtomizerListInternal: FC = () => {
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
		<List<AtomizerDto>
			itemLayout={"vertical"}
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

export const AtomizerList: FC<IAtomizerListProps> = () => {
	return <DataSourceContextProvider>
		<AtomizerListInternal/>
	</DataSourceContextProvider>;
};
