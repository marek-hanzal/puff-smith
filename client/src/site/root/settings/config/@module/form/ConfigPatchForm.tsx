import {ToolOutlined} from "@ant-design/icons";
import {Centered, FormItem, ItemGroup, Submit} from "@leight-core/leight";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/edde/api/root/config/endpoint";
import {ConfigDto} from "@/sdk/edde/config/dto";

export interface IConfigPatchFormProps extends IPatchDefaultFormProps {
	config: ConfigDto;
}

export const ConfigPatchForm: FC<IConfigPatchFormProps> = ({config, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		toMutation={values => ({id: config.id, ...values})}
		toForm={() => ({
			config: {
				key: config.key,
				value: config.value,
			}
		})}
		toError={({error}) => ({
			"Duplicate entry [z_config_key_unique] of [z_config].": {id: ["config", "key"], error},
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("root.config.updated", {data: response}));
			navigate("/root/settings/config/[configId]", {configId: response.id});
		}}
		{...props}
	>
		<ItemGroup prefix={"config"}>
			<FormItem field={"key"} required/>
			<FormItem field={"value"}/>
		</ItemGroup>
		<Divider type={"horizontal"}/>
		<Centered>
			<Submit label={"label.config.update"} size={"large"} icon={<ToolOutlined/>}/>
		</Centered>
	</PatchDefaultForm>;
};
