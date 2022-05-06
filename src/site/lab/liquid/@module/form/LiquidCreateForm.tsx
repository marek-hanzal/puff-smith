import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {useCheckPrice} from "@/puff-smith/site/shared/price/@module/hook/useCheckPrice";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useCheckPriceQueryInvalidate} from "@/sdk/api/transaction/check-price";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateFormProps extends Partial<ICreateDefaultFormProps> {
	mixture: IMixture;
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const checkPriceQueryInvalidate = useCheckPriceQueryInvalidate();
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <CreateDefaultForm
		translation={"lab.liquid.create"}
		toMutation={values => ({
			...values,
			mixtureId: mixture.id,
		})}
		onSuccess={async ({navigate}) => {
			await puffiesQueryInvalidate();
			await checkPriceQueryInvalidate();
			message.success(t("lab.mixture.liquid.create.success"));
			navigate("/lab/liquid");
		}}
		{...props}
	>
		<FormItem field={"mixed"}>
			<DatePicker/>
		</FormItem>
		<Centered>
			<Submit
				icon={<LiquidIcon/>}
				disabled={checkPrice.notPass}
				label={"create"}
			/>
		</Centered>
	</CreateDefaultForm>;
};
