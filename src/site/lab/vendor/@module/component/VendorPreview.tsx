import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {IPreviewProps, Preview} from "@leight-core/common";
import {FC} from "react";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizersFilterContext, useAtomizersQuery} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {ModsFilterContext, useModsQuery} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {LiquidsFilterContext, useLiquidsQuery} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {AtomizerTable} from "@/puff-smith/site/lab/atomizer/@module/table/AtomizerTable";
import {VendorInline} from "@/puff-smith/site/lab/vendor/@module/component/VendorInline";
import {LiquidTable} from "@/puff-smith/site/lab/liquid/@module/table/LiquidTable";
import {ModTable} from "@/puff-smith/site/lab/mod/@module/table/ModTable";

export interface IVendorPreviewProps extends Partial<IPreviewProps> {
	vendor: VendorDto;
}

export const VendorPreview: FC<IVendorPreviewProps> = ({vendor, ...props}) => {
	const {t} = useTranslation();
	const atomizersQuery = useAtomizersQuery({filter: {vendorIds: [vendor.id]}});
	const modsQuery = useModsQuery({filter: {vendorIds: [vendor.id]}});
	const liquidsQuery = useLiquidsQuery({filter: {vendorIds: [vendor.id]}});
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.vendor.common.tab')}>
			<Preview translation={'lab.vendor.preview'} {...props}>
				{{
					"name": <VendorInline vendor={vendor}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		{atomizersQuery?.data?.count && <Tabs.TabPane key={'atomizers'} tab={t('lab.vendor.atomizers.tab')}>
			<AtomizersFilterContext defaultFilter={{vendorIds: [vendor.id]}}>
				<AtomizerTable forceList/>
			</AtomizersFilterContext>
		</Tabs.TabPane>}
		{modsQuery?.data?.count && <Tabs.TabPane key={'mods'} tab={t('lab.vendor.mods.tab')}>
			<ModsFilterContext defaultFilter={{vendorIds: [vendor.id]}}>
				<ModTable forceList/>
			</ModsFilterContext>
		</Tabs.TabPane>}
		{liquidsQuery?.data?.count && <Tabs.TabPane key={'liquid'} tab={t('lab.vendor.liquid.tab')}>
			<LiquidsFilterContext defaultFilter={{vendorIds: [vendor.id]}}>
				<LiquidTable forceList/>
			</LiquidsFilterContext>
		</Tabs.TabPane>}
	</Tabs>
}
