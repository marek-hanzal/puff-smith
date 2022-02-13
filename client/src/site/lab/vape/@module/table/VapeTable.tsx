import {FC} from "react";
import {IVapesSourceTableProps, VapesSourceTable} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {ButtonBar, durationOf} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {SimpleRating} from "@/puff-smith";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {BuildAge} from "@/puff-smith/site/lab/build/@module/component/BuildAge";
import {VapeListItem} from "@/puff-smith/site/lab/vape/@module/table/VapeListItem";
import {VapeLinkButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeLinkButton";
import {VapeQuickMenu} from "@/puff-smith/site/lab/vape/@module/component/VapeQuickMenu";
import {MixturePreviewButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixturePreviewButton";
import {CoilPreviewButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilPreviewButton";
import {ModPreviewButton} from "@/puff-smith/site/lab/mod/@module/component/button/ModPreviewButton";
import {VapeAge} from "@/puff-smith/site/lab/vape/@module/component/VapeAge";
import {useBuildsOptionalFilterContext} from "@/sdk/puff-smith/api/lab/build/endpoint";

export type VapeTableColumns = 'atomizer' | 'mixture' | string;

export interface IVapeTableProps extends Partial<IVapesSourceTableProps> {
	hidden?: VapeTableColumns[];
}

export const VapeTable: FC<IVapeTableProps> = ({hidden = [], ...props}) => {
	const {t} = useTranslation();
	const filterContext = useBuildsOptionalFilterContext();
	return <VapesSourceTable
		filter={filterContext?.filter}
		scroll={{x: 2550}}
		footer={sourceContext => t('lab.vape.table.footer.label', {data: sourceContext.data()})}
		listItemRender={vape => <VapeListItem vape={vape}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, vape) => <ButtonBar>
					<VapeLinkButton title={null} vape={vape}/>
					<VapeQuickMenu vape={vape}/>
				</ButtonBar>,
				width: 0,
			}),
			!hidden?.includes('atomizer') && column({
				key: "atomizer",
				title: "lab.vape.table.atomizer",
				render: (_, vape) => <AtomizerPreviewButton title={vape.build.atomizer.name} atomizer={vape.build.atomizer}/>,
				width: 320,
				sorter: true,
			}),
			!hidden?.includes('mixture') && column({
				key: "mixture",
				title: "lab.vape.table.mixture",
				render: (_, vape) => <MixturePreviewButton title={vape.mixture.liquid.name} mixture={vape.mixture}/>,
				width: 340,
				sorter: true,
			}),
			column({
				key: "mod",
				title: "lab.vape.table.mod",
				render: (_, vape) => <ModPreviewButton title={vape.mod.name} mod={vape.mod}/>,
				width: 320,
				sorter: true,
			}),
			column({
				key: "coil",
				title: "lab.vape.table.coil",
				render: (_, vape) => <CoilPreviewButton title={vape.build.coil.wire.name} coil={vape.build.coil}/>,
				width: 420,
				sorter: true,
			}),
			column({
				key: "mixture.age",
				title: "lab.vape.table.mixture.age",
				render: (_, vape) => durationOf(vape.mixture.mixed, vape.stamp).humanize(),
				width: 150,
			}),
			column({
				key: "rating",
				title: "lab.vape.table.rating",
				render: (_, vape) => <SimpleRating value={vape.rating}/>,
				width: 120,
				sorter: true,
			}),
			column({
				key: "taste",
				title: "lab.vape.table.taste",
				render: (_, vape) => <SimpleRating value={vape.taste}/>,
				width: 120,
				sorter: true,
			}),
			column({
				key: "power",
				title: "lab.vape.table.power",
				render: (_, vape) => vape.power ? vape.power + ' W' : '-',
				width: 120,
			}),
			column({
				key: "tc",
				title: "lab.vape.table.tc",
				render: (_, vape) => vape.tc ? vape.tc + ' °C' : '-',
				width: 120,
			}),
			column({
				key: "age",
				title: "lab.vape.table.age",
				render: (_, vape) => <BuildAge build={vape.build}/>,
				width: 150,
			}),
			column({
				key: "stamp",
				title: "lab.vape.table.stamp",
				render: (_, vape) => <VapeAge vape={vape}/>,
			}),
		]}
	</VapesSourceTable>
}
