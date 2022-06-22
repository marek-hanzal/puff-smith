import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/token/create";
import {useTokenQueryInvalidate} from "@/sdk/api/token/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITokenCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const TokenCreateForm: FC<ITokenCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const tokenQueryInvalidate = useTokenQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.token.create"}
		onSuccess={async response => {
			message.success(t("shared.token.create.success", response.response));
			await tokenQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
