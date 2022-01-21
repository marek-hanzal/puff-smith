import {Page} from "@leight-core/leight";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {usePuffSmithSessionContext, UserSettingsForm} from "@/puff-smith/site/shared";

export interface IUserSettingsCheckProps {
}

export const UserSettingsCheck: FC<IUserSettingsCheckProps> = ({children}) => {
	const {user} = usePuffSmithSessionContext().session;
	const {t} = useTranslation();
	return t("translation.check") === "translation.check" ?
		<Page fullwidth name={"lab.check.user.settings"}>
			<UserSettingsForm backButton={false} user={user}/>
		</Page> :
		<>{children}</>;
};
