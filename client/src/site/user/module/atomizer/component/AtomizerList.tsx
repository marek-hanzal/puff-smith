import {ps} from "@/ps";
import {ExpandAltOutlined, RedoOutlined} from "@ant-design/icons";
import {DataSourceContextProvider, IconText, IListProps, List, ListItem, useDataSourceContext} from "@leight-core/leight";
import {FC} from "react";

export interface IAtomizerListProps extends Partial<IListProps<ps.atomizer.AtomizerDto>> {
}

export const AtomizerListInternal: FC = () => {
	const dataSourceContext = useDataSourceContext<ps.atomizer.AtomizerDto, ps.storage.atomizer.repository.AtomizerOrderBy>();
	return <>
		<List<ps.atomizer.AtomizerDto>
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
				]}
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
	return <DataSourceContextProvider<ps.atomizer.AtomizerDto, ps.storage.atomizer.repository.AtomizerOrderBy>
		fetch={ps.user.atomizer.doPage}
	>
		<AtomizerListInternal/>
	</DataSourceContextProvider>;
};
