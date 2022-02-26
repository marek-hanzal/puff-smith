import {RolesSelect, SiteSelect} from "@/puff-smith/site/root/user";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/root/user/endpoint";
import {UserIcon} from "@/puff-smith";
import {LanguageSelect} from "@/puff-smith/site/shared";

export interface IUserCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const UserCreateForm: FC<IUserCreateFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("root.user.created", {data: response}));
			navigate("/root/user/[userId]", {userId: response.id});
		}}
		validateMessages={{
			types: {
				email: t("common.messages.invalid-email"),
			}
		}}
		{...props}
	>
		<FormItem field={"name"} required labels={["root.user.name.label"]}/>
		<FormItem field={"email"} required rules={[{type: "email"}]} labels={["root.user.email.label"]}/>
		<FormItem field={"language"} required labels={["root.user.language.label"]}>
			<LanguageSelect/>
		</FormItem>
		<FormItem field={"site"} labels={["root.user.site.label"]}>
			<SiteSelect/>
		</FormItem>
		<FormItem field={"roles"} required labels={["root.user.roles.label"]}>
			<RolesSelect/>
		</FormItem>
		<Divider type={"horizontal"}/>
		<Centered>
			<Submit label={"label.user.create"} size={"large"} icon={<UserIcon/>}/>
		</Centered>
	</CreateDefaultForm>;
};
