import {UserPreview, UserPreviewButton} from "../../index";
import {UserDto} from "@/sdk/edde/bridge/user";
import {ButtonLink, EditIcon, IQuickMenuProps, QuickMenu, toFilters} from "@leight-core/common";
import {Card, Menu, Tag} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IUsersSourceTableProps, UsersSourceTable, useSitesQuery} from "@/sdk/puff-smith/api/root/user/endpoint";

interface IQuickMenuInternalProps extends Partial<IQuickMenuProps> {
	user: UserDto;
}

const QuickMenuInternal: FC<IQuickMenuInternalProps> = ({user, ...props}) => {
	const {t} = useTranslation();
	return <QuickMenu {...props}>
		<Menu.Item key={"detail"}>
			<UserPreviewButton
				size={"small"}
				user={user}
			>
				{t("common.quick-detail.submenu")}
			</UserPreviewButton>
		</Menu.Item>
		<Menu.Item key={"edit"}>
			<ButtonLink
				type={"link"}
				size={"small"}
				href={"/root/user/[userId]/edit"}
				query={{userId: user.id}}
				icon={<EditIcon/>}
				title={"common.edit"}
			/>
		</Menu.Item>
	</QuickMenu>;
};

export interface IUserTableProps extends Partial<IUsersSourceTableProps> {
}

export const UserTable: FC<IUserTableProps> = props => {
	const {t} = useTranslation();

	const sitesQuery = useSitesQuery(undefined, undefined, {
		staleTime: 1000 * 60 * 3600
	});

	return <UsersSourceTable
		expandable={{
			expandedRowRender: user => <Card><UserPreview user={user}/></Card>,
		}}
		toFilter={({filters}) => ({
			sites: filters.site as string[],
		})}
		{...props}
	>
		{({column, sourceContext}) => [
			column({
				key: "id",
				width: 1,
				render: (_, user) => <QuickMenuInternal user={user}/>
			}),
			column({
				key: "name",
				dataIndex: "name",
				width: 225,
				title: "column.user.name",
				render: (_, user) => <ButtonLink
					type={"link"}
					href={"/root/user/[userId]"}
					query={{userId: user.id}}
					title={user.name}
				/>
			}),
			column({
				key: "site",
				dataIndex: "site",
				width: 180,
				title: "column.site.name",
				filters: toFilters(sitesQuery, data => data.items.map(site => ({value: site.id, text: t("shared.site." + (site.name || "null"))}))),
			}),
			column({
				key: "roles",
				dataIndex: "roles",
				title: "column.roles.name",
				render: (_, user) => <>
					{user.roles?.map(role => <Tag key={role.id}>{role.name}</Tag>)}
				</>
			}),
		]}
	</UsersSourceTable>;
};
