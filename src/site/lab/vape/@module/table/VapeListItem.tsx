import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Divider, List, Space, Tooltip} from "antd";
import {durationOf} from "@leight-core/common";
import {Ohm} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VapeQuickMenu} from "@/puff-smith/site/lab/vape/@module/component/VapeQuickMenu";
import {VapePreviewButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapePreviewButton";

export interface IVapeListItemProps extends Partial<ListItemProps> {
	vape: VapeDto;
}

export const VapeListItem: FC<IVapeListItemProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	return <List.Item
		actions={[<VapeQuickMenu key={'quick-menu'} vape={vape}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<VapePreviewButton
				icon={null}
				style={{padding: 0}}
				title={vape.build.atomizer.name}
				vape={vape}
			/>}
			description={<Space size={0} split={<Divider type={'vertical'}/>}>
				{vape.mixture.liquid.name}
				{vape.build.coil.wire.name}
				<Ohm ohm={vape.build.ohm}/>
				{vape.build.coil.size || '-'}
			</Space>}
		/>
		<Tooltip title={t('lab.vape.age.tooltip')}>
			{durationOf(vape.stamp).humanize()}
		</Tooltip>
	</List.Item>;
}
