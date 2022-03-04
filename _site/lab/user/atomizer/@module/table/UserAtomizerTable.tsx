import {useAtomizersOptionalFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {AtomizerListItem} from "../../../../atomizer/@module/table/AtomizerListItem";
import {AtomizerLinkButton} from "../../../../atomizer/@module/component/button/AtomizerLinkButton";
import {AtomizerPreviewButton} from "../../../../atomizer/@module/component/button/AtomizerPreviewButton";
import {IUserAtomizersSourceTableProps, UserAtomizersSourceTable} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";
import {UserAtomizerQuickMenu} from "../component/UserAtomizerQuickMenu";
import {Tags} from "@/puff-smith/component/Tags";

export interface IUserAtomizerTableProps extends Partial<IUserAtomizersSourceTableProps> {
}

export const UserAtomizerTable: FC<IUserAtomizerTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useAtomizersOptionalFilterContext();
	return <UserAtomizersSourceTable
		filter={filterContext?.filter}
		footer={sourceContext => t('lab.atomizer.table.footer.label', {data: sourceContext.data()})}
		listItemRender={userAtomizer => <AtomizerListItem atomizer={userAtomizer.atomizer}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, userAtomizer) => <ButtonBar>
					<AtomizerLinkButton title={null} atomizer={userAtomizer.atomizer}/>
					<UserAtomizerQuickMenu userAtomizer={userAtomizer}/>
				</ButtonBar>,
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.atomizer.table.name',
				render: (_, userAtomizer) => <AtomizerPreviewButton title={userAtomizer.atomizer.name} atomizer={userAtomizer.atomizer}/>,
				sorter: true,
			}),
			column({
				key: "type",
				title: 'lab.atomizer.table.type',
				render: (_, userAtomizer) => <Tags tags={userAtomizer.atomizer.type ? [userAtomizer.atomizer.type] : []}/>,
				width: 160,
			}),
			column({
				key: "draw",
				title: 'lab.atomizer.table.draw',
				render: (_, userAtomizer) => <Tags tags={userAtomizer.atomizer.draws}/>,
				width: 300,
			}),
			column({
				key: "vendor",
				title: 'lab.atomizer.table.vendor',
				render: (_, userAtomizer) => userAtomizer.atomizer.vendor.name,
				sorter: true,
				width: 220,
			}),
		]}
	</UserAtomizersSourceTable>
}