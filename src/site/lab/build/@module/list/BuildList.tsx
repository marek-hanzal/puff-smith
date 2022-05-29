import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {BuildListEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListEmpty";
import {BuildListSource, IBuildListSourceProps} from "@/sdk/api/lab/build/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IBuildListProps extends Partial<IBuildListSourceProps> {
}

export const BuildList: FC<IBuildListProps> = props => {
	return <BuildListSource
		locale={{
			emptyText: <BuildListEmpty/>,
		}}
		{...props}
	>
		{build => <ListItem
			key={build.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={build}/>
					<CodeInline code={build}/>
				</Space>}
			/>
		</ListItem>}
	</BuildListSource>;
};
