import {AtomizersSourceTable, IAtomizersSourceTableProps, useAtomizersOptionalFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {AtomizerListItem} from "@/puff-smith/site/lab/atomizer/@module/table/AtomizerListItem";
import {AtomizerLinkButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerLinkButton";
import {AtomizerQuickMenu} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerQuickMenu";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {IFormOnSuccess} from "@leight-core/leight/dist";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {Tags} from "@/puff-smith/component/Tags";

export interface IAtomizerTableProps extends Partial<IAtomizersSourceTableProps> {
	onPurchase?: IFormOnSuccess<any, UserAtomizerDto>;
}

export const AtomizerTable: FC<IAtomizerTableProps> = ({onPurchase, ...props}) => {
	const {t} = useTranslation();
	const filterContext = useAtomizersOptionalFilterContext();
	return <AtomizersSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.atomizer.table.footer.label', {data: sourceContext.data()})}
		listItemRender={atomizer => <AtomizerListItem atomizer={atomizer}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, atomizer) => <ButtonBar>
					<AtomizerLinkButton title={null} atomizer={atomizer}/>
					<AtomizerQuickMenu onPurchase={onPurchase} atomizer={atomizer}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.atomizer.table.name',
				render: (_, atomizer) => <AtomizerPreviewButton title={atomizer.name} atomizer={atomizer}/>,
				sorter: true,
			}),
			column({
				key: "type",
				title: 'lab.atomizer.table.type',
				render: (_, atomizer) => <Tags tags={atomizer.type ? [atomizer.type] : []}/>,
				width: 160,
			}),
			column({
				key: "draw",
				title: 'lab.atomizer.table.draw',
				render: (_, atomizer) => <Tags tags={atomizer.draws}/>,
				width: 300,
			}),
			column({
				key: "vendor",
				title: 'lab.atomizer.table.vendor',
				render: (_, atomizer) => atomizer.vendor.name,
				sorter: true,
				width: 220,
			}),
		]}
	</AtomizersSourceTable>
}
