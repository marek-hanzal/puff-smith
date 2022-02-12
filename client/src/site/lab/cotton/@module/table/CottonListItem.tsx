import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {List} from "antd";
import {CottonQuickMenu} from "@/puff-smith/site/lab/cotton/@module/component/CottonQuickMenu";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonPreviewButton";

export interface ICottonListItemProps extends Partial<ListItemProps> {
	cotton: CottonDto;
}

export const CottonListItem: FC<ICottonListItemProps> = ({cotton, ...props}) => {
	return <List.Item
		actions={[<CottonQuickMenu key={'quick-menu'} cotton={cotton}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<CottonPreviewButton
				icon={null}
				style={{padding: 0}}
				title={cotton.name}
				cotton={cotton}/>
			}
			description={cotton.vendor.name}
		/>
	</List.Item>;
}
