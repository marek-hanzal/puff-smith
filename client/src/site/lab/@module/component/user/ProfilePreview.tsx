import {UserDto} from "@/sdk/edde/bridge/user";
import {Descriptions, Tabs, Tag} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IProfilePreviewProps {
	user: UserDto;
}

export const ProfilePreview: FC<IProfilePreviewProps> = ({user}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane
			key={"common"}
			tab={t("marsh.user.profile.preview.info")}
		>
			<Descriptions
				bordered
				size={"small"}
				column={1}
				labelStyle={{width: "220px"}}
			>
				<Descriptions.Item label={t("marsh.user.preview.name")}>
					{user.name}
				</Descriptions.Item>
				<Descriptions.Item label={t("marsh.user.preview.emea")}>
					{user.emea}
				</Descriptions.Item>
				<Descriptions.Item label={t("marsh.user.preview.email")}>
					{user.email}
				</Descriptions.Item>
				<Descriptions.Item label={t("marsh.user.preview.mobile")}>
					{user.mobile}
				</Descriptions.Item>
				<Descriptions.Item label={t("marsh.user.preview.roles")}>
					{user.roles.map(role => <Tag key={role.id}>{role.name}</Tag>)}
				</Descriptions.Item>
			</Descriptions>
		</Tabs.TabPane>
	</Tabs>;
};
