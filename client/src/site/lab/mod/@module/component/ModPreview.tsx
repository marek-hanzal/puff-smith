import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {IPreviewProps, Preview, PreviewTemplate} from "@leight-core/leight";
import {FC} from "react";
import {ModInline} from "@/puff-smith/site/lab/mod/@module/component/ModInline";
import {Watt} from "@/puff-smith";
import {Tags} from "@/puff-smith/component/Tags";
import {Alert, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {CellTable} from "@/puff-smith/site/lab/cell/@module/table/CellTable";
import {CellsFilterContext} from "@/sdk/puff-smith/api/lab/cell/endpoint";

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
					"cellTypes": <Tags tags={mod.cellTypes}/>,
					"power": <Watt watt={mod.power}/>,
				}}
			</Preview>
		</Tabs.TabPane>
		<Tabs.TabPane key={'cells'} tab={t('lab.mod.preview.cells.tab')}>
			<Alert
				message={t('lab.mod.preview.cells.hint')}
				closable
			/>
			<CellsFilterContext defaultFilter={{typeIds: mod.cellTypeIds}}>
				<CellTable forceList={forceList}/>
			</CellsFilterContext>
		</Tabs.TabPane>
	</Tabs>
}
