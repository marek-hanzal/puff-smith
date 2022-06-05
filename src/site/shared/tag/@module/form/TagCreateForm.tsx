import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/tag/create";
import {useTagQueryInvalidate} from "@/sdk/api/tag/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const TagCreateForm: FC<ITagCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const tagQueryInvalidate = useTagQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.tag.create"}
		onSuccess={async response => {
			message.success(t("shared.tag.create.success", {tag: response.response}));
			await tagQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"code"} required/>
		<FormItem field={"label"}/>
		<FormItem field={"group"}/>
		<FormItem field={"sort"}>
			<InputNumber min={0} style={{width: "100%"}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
