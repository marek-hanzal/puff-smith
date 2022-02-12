import {IPatchDefaultFormProps, PatchDefaultForm, useCottonQueryInvalidate, useCottonsQueryInvalidate} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {CottonIcon} from "@/puff-smith";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";

export interface IPatchCottonFormProps extends Partial<IPatchDefaultFormProps> {
	cotton: CottonDto;
}

export const PatchCottonForm: FC<IPatchCottonFormProps> = ({onSuccess, cotton, ...props}) => {
	const {t} = useTranslation();
	const cottonQueryInvalidate = useCottonQueryInvalidate()
	const cottonsQueryInvalidate = useCottonsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.cotton'}
		onSuccess={response => {
			message.success(t("lab.cotton.updated.message", {data: response.response}));
			cottonQueryInvalidate();
			cottonsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => cotton}
		toMutation={values => ({
			id: cotton.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_cotton_name_unique] of [z_cotton].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'description'}
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CottonIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
