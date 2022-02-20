import {ToolOutlined} from "@ant-design/icons";
import {Centered, FormItem, ItemGroup, Submit} from "@leight-core/leight";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/edde/api/root/config/endpoint";

export interface IConfigCreateFormProps extends ICreateDefaultFormProps {
}

export const ConfigCreateForm: FC<IConfigCreateFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("root.settings.config.created", {data: response}));
			navigate("/root/settings/config/[configId]", {configId: response.id});
		}}
		toError={({error}) => ({
			"Duplicate entry [z_config_key_unique] of [z_config].": {id: ["config", "key"], error},
		})}
		{...props}
	>
		<ItemGroup prefix={"config"}>
			<FormItem field={"key"} required/>
			<FormItem field={"value"}/>
		</ItemGroup>
		<Divider type={"horizontal"}/>
		<Centered>
			<Submit label={"label.config.create"} size={"large"} icon={<ToolOutlined/>}/>
		</Centered>
	</CreateDefaultForm>;
};
