import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {IPreviewProps, Preview, PreviewTemplate} from "@leight-core/common";
import {FC} from "react";
import {ModInline} from "./ModInline";
import {Volt, Watt} from "@/puff-smith";
import {Tags} from "@/puff-smith/component/Tags";
import {Alert, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CellTable} from "../../../voucher/@module/table/CellTable";
import {CellsFilterContext} from "@/sdk/puff-smith/api/lab/voucher/endpoint";

export interface IModPreviewProps extends Partial<IPreviewProps> {
	mod: ModDto
	forceList?: boolean;
}

export const ModPreview: FC<IModPreviewProps> = ({mod, forceList, ...props}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={'common'} tab={t('lab.mod.preview.common.tab')}>
			<PreviewTemplate
				label={'lab.mod.preview'}
				title={mod.name}
				subTitle={mod.vendor.name}
				span={24}
			/>
			<Preview translation={'lab.mod.preview'} {...props}>
				{{
					"name": <ModInline mod={mod}/>,
					"voucherTypes": mod.voucherTypes.length && <Tags tags={mod.voucherTypes}/>,
					"power": mod.power && <Watt watt={mod.power}/>,
					"voltage": mod.voltage && <Volt volt={mod.voltage}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'vouchers'} tab={t('lab.mod.preview.vouchers.tab')}>
			<Alert
				message={t('lab.mod.preview.vouchers.hint')}
				closable
			/>
			<CellsFilterContext defaultFilter={{typeIds: mod.voucherTypeIds}}>
				<CellTable forceList={forceList}/>
			</CellsFilterContext>
		</Tabs.TabPane>
	</Tabs>
}
