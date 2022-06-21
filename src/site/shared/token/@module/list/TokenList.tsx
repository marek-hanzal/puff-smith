import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {ITokenListSourceProps, TokenListSource} from "@/sdk/api/token/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ITokenListProps extends Partial<ITokenListSourceProps> {
}

export const TokenList: FC<ITokenListProps> = props => {
	return <TokenListSource
		{...props}
	>
		{token => <ListItem
			key={token.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={token}/>
					{token.name}
				</Space>}
			/>
		</ListItem>}
	</TokenListSource>;
};
