import {UserDto} from "@/sdk/edde/bridge/user";
import {Tabs, Tag} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Preview} from "@leight-core/common";

export interface IProfilePreviewProps {
	user: UserDto;
}

export const ProfilePreview: FC<IProfilePreviewProps> = ({user}) => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane
			key={"common"}
			tab={t("lab.user.profile.preview.info")}
		>
			<Preview translation={'lab.user.preview'}>
				{{
					"name": user.name,
					"email": user.email,
					"site": user.site,
					"roles": () => user.roles.map(role => <Tag key={role.id}>{role.name}</Tag>),
				}}
			</Preview>
		</Tabs.TabPane>
	</Tabs>;
};
