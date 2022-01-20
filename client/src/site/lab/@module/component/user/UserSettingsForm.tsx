import {DateFormatSelect, DateTimeFormatSelect, LanguageSelect} from "@/puff-smith/site/lab";
import {IUpdateSettingsQueryParams, useUpdateSettingsMutation} from "@/sdk/edde/api/shared/user/endpoint";
import {UserDto} from "@/sdk/edde/bridge/user";
import {UpdateSettingsDto, UserSettingsDto} from "@/sdk/edde/user/dto/settings";
import {SettingOutlined} from "@ant-design/icons";
import {BackIcon, ButtonLink, Centered, Form, FormItem, IFormProps, ItemGroup, Submit, useLayoutBlockContext} from "@leight-core/leight";
import {Divider, message, Space} from "antd";
import i18next from "i18next";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUSerSettingsFormProps extends Partial<IFormProps<IUpdateSettingsQueryParams, UpdateSettingsDto, UserSettingsDto>> {
	user: UserDto;
	backButton?: boolean;
}

export const UserSettingsForm: FC<IUSerSettingsFormProps> = ({user, backButton = true, ...props}) => {
	const layoutBlockContext = useLayoutBlockContext();
	const {t} = useTranslation();
	const userSettings = user.settings || null;
	return <Form<IUpdateSettingsQueryParams, UpdateSettingsDto, UserSettingsDto>
		useMutation={useUpdateSettingsMutation}
		initialValues={{
			settings: {
				language: userSettings?.language || "cs",
				date: userSettings?.date || "LL",
				datetime: userSettings?.datetime || "LLLL"
			}
		}}
		onSuccess={({response}) => {
			layoutBlockContext.block();
			response.language && i18next.changeLanguage(response.language);
			message.success(t("marsh.user.settings.saved"));
			setTimeout(() => window.location.reload(), 2500);
		}}
		{...props}
	>
		<ItemGroup prefix={"settings"}>
			<FormItem field={"language"}>
				<LanguageSelect useFirst/>
			</FormItem>
			<FormItem field={"date"} tooltip={t("motor.user.settings.date.tooltip")}>
				<DateFormatSelect/>
			</FormItem>
			<FormItem field={"datetime"} tooltip={t("motor.user.settings.datetime.tooltip")}>
				<DateTimeFormatSelect/>
			</FormItem>
		</ItemGroup>
		<Centered>
			<Space align={"baseline"} size={"large"} split={<Divider type={"vertical"}/>}>
				{backButton && <ButtonLink size={"middle"} type={"link"} icon={<BackIcon/>} title={"marsh.user.settings.back"} href={"/motor/user/profile"}/>}
				<Submit size={"large"} icon={<SettingOutlined/>} label={"marsh.user.settings.save"}/>
			</Space>
		</Centered>
	</Form>;
};
