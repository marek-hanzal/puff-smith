import {BuildsSourceTable, IBuildsSourceTableProps, useBuildsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {BoolInline, ButtonBar} from "@leight-core/leight";
import {Ohm} from "@/puff-smith";
import {BuildListItem} from "@/puff-smith/site/lab/build/@module/table/BuildListItem";
import {BuildLinkButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildLinkButton";
import {BuildQuickMenu} from "@/puff-smith/site/lab/build/@module/component/BuildQuickMenu";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {BuildAge} from "@/puff-smith/site/lab/build/@module/component/BuildAge";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilPreviewButton";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton/@module/component/button/CottonPreviewButton";
import {Tags} from "@/puff-smith/component/Tags";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";

export type IBuildTableColumns = 'coil';

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
	hidden?: IBuildTableColumns[];
}

export const BuildTable: FC<IBuildTableProps> = ({hidden, ...props}) => {
	const {t} = useTranslation();
	const filterContext = useBuildsOptionalFilterContext();
	return <BuildsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.build.table.footer.label', {data: sourceContext.data()})}
		listItemRender={build => <BuildListItem build={build}/>}
		rowClassName={build => build.active ? 'active' : 'inactive'}
		scroll={{x: 2500}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, build) => <ButtonBar>
					<BuildLinkButton title={null} build={build}/>
					<BuildQuickMenu
						onCreateVape={({navigate, response}) => {
							navigate('/lab/vape/[vapeId]', {vapeId: response.id});
						}}
						build={build}
					/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "atomizer",
				title: "lab.build.table.atomizer",
				render: (_, build) => <AtomizerPreviewButton title={build.atomizer.name} atomizer={build.atomizer}/>,
				width: 360,
				sorter: true,
			}),
			column({
				key: "mod",
				title: "lab.build.table.mod",
				render: (_, build) => build.mod ? <ModPreviewButton title={build.mod.name} mod={build.mod}/> : '-',
				width: 360,
				sorter: true,
			}),
			!hidden?.includes('coil') && column({
				key: "coil",
				title: "lab.build.table.coil",
				render: (_, build) => <CoilPreviewButton title={build.coil.wire.name} coil={build.coil}/>,
				width: 420,
				sorter: true,
			}),
			!hidden?.includes('coil') && column({
				key: "dual",
				title: "lab.build.table.dual",
				render: (_, build) => <BoolInline bool={build.dual}/>,
				width: 140,
				sorter: true,
			}),
			!hidden?.includes('coil') && column({
				key: "dualMode",
				title: "lab.build.table.dualMode",
				render: (_, build) => t('lab.dual-coil.' + build.dualMode, '-'),
				width: 180,
				sorter: true,
			}),
			column({
				key: "cotton",
				title: "lab.build.table.cotton",
				render: (_, build) => <CottonPreviewButton title={build.cotton.name} cotton={build.cotton}/>,
				width: 320,
				sorter: true,
			}),
			column({
				key: "ohm",
				dataIndex: "ohm",
				title: "lab.build.table.ohm",
				render: (_, build) => <Ohm ohm={build?.ohm}/>,
				width: 160,
				sorter: true,
			}),
			column({
				key: "draw",
				title: "lab.build.table.draw",
				render: (_, build) => <Tags tags={build.draws}/>,
				width: 300,
			}),
			column({
				key: "age",
				title: "lab.build.table.age",
				render: (_, build) => <BuildAge build={build}/>,
			}),
		]}
	</BuildsSourceTable>
}
