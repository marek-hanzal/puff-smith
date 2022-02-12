import {BuildsSourceTable, IBuildsSourceTableProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer";
import {CottonPreviewButton} from "@/puff-smith/site/lab/cotton";
import {BuildAge, BuildLinkButton, BuildListItem, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {BuildFilterDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";
import {ButtonBar, useOptionalFilterContext} from "@leight-core/leight";
import {Ohm} from "@/puff-smith";

export interface IBuildTableProps extends Partial<IBuildsSourceTableProps> {
}

export const BuildTable: FC<IBuildTableProps> = props => {
	const filterContext = useOptionalFilterContext<BuildFilterDto>();
	const {t} = useTranslation();
	return <BuildsSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.build.table.footer.label', {data: sourceContext?.result?.data || {total: 0}})}
		listItemRender={build => <BuildListItem build={build}/>}
		rowClassName={build => build.active ? 'active' : 'inactive'}
		scroll={{x: 1600}}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, build) => <ButtonBar>
					<BuildLinkButton title={null} build={build}/>
					<BuildQuickMenu build={build}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "atomizer",
				title: "lab.build.table.atomizer",
				render: (_, build) => <AtomizerPreviewButton title={build.atomizer.name} atomizer={build.atomizer}/>,
				width: 320,
				sorter: true,
			}),
			column({
				key: "coil",
				title: "lab.build.table.coil",
				render: (_, build) => <CoilPreviewButton title={build.coil.wire.name} coil={build.coil}/>,
				width: 420,
				sorter: true,
			}),
			column({
				key: "cotton",
				title: "lab.build.table.cotton",
				render: (_, build) => <CottonPreviewButton title={build.cotton.name} cotton={build.cotton}/>,
				width: 220,
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
				key: "age",
				title: "lab.build.table.age",
				render: (_, build) => <BuildAge build={build}/>,
			}),
		]}
	</BuildsSourceTable>
}
