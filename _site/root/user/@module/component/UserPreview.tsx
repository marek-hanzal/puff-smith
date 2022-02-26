import {UserDto} from "@/sdk/edde/bridge/user";
import {Preview} from "@leight-core/common";
import {Tabs, Tag, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserPreviewProps {
	user: UserDto;
}

export const UserPreview: FC<IUserPreviewProps> = ({user}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane
			key={"common"}
			tab={t("root.user.preview.info")}
		>
			<Preview translation={"root.user.preview"}>
				{{
					name: <Typography.Text
						copyable={{
							text: user.id,
							tooltips: [t("label.id.copy"), t("label.id.copied")]
						}}
					>
						{user.name}
					</Typography.Text>,
					email: user.email,
					site: user.site,
					roles: user.roles.map(role => <Tag key={role.id}>{role.name}</Tag>),
				}}
			</Preview>
		</Tabs.TabPane>
	</Tabs>;
};
