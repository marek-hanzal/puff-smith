import {RolesSelect, SiteSelect} from "@/puff-smith/site/root/user";
import {UserDto} from "@/sdk/edde/bridge/user";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {UserIcon} from "@/puff-smith";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/root/user/endpoint";
import {LanguageSelect} from "@/puff-smith/site/shared";

export interface IUserPatchFormProps extends IPatchDefaultFormProps {
	user: UserDto;
}

export const UserPatchForm: FC<IUserPatchFormProps> = ({user, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		initialValues={{...user, roles: user?.roles?.map(item => item.id)}}
		toMutation={values => ({id: user.id, ...values})}
		onSuccess={({navigate, response}) => {
			message.success(t("root.user.updated", {data: response}));
			navigate("/root/user/[userId]", {userId: response.id});
		}}
		{...props}
	>
		<FormItem field={"name"} required labels={["root.user.name.label"]}/>
		<FormItem field={"email"} required rules={[{type: "email"}]} labels={["root.user.email.label"]}/>
		<FormItem field={"language"} required labels={["root.user.language.label"]}>
			<LanguageSelect/>
		</FormItem>
		<FormItem field={"site"} required labels={["root.user.site.label"]}>
			<SiteSelect/>
		</FormItem>
		<FormItem field={"roles"} required labels={["root.user.roles.label"]}>
			<RolesSelect/>
		</FormItem>
		<Divider type={"horizontal"}/>
		<Centered>
			<Submit label={"label.user.update"} size={"large"} icon={<UserIcon/>}/>
		</Centered>
	</PatchDefaultForm>;
};

