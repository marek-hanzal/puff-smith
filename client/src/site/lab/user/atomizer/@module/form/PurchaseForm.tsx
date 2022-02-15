import {CreateDefaultForm, ICreateDefaultFormProps, useUserAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";
import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {PurchaseIcon} from "@/puff-smith";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";

export interface IPurchaseFormProps extends Partial<ICreateDefaultFormProps> {
	atomizer: AtomizerDto;
}

export const PurchaseForm: FC<IPurchaseFormProps> = ({atomizer, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const userAtomizersQueryInvalidate = useUserAtomizersQueryInvalidate();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.atomizer.purchase'}
		toMutation={values => ({
			atomizerId: atomizer.id,
			...values,
		})}
		onSuccess={response => {
			message.success(t('lab.atomizer.purchase.success', {data: response.response}));
			userAtomizersQueryInvalidate();
			atomizersQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'driptipId'}
			hasTooltip
			help={<DriptipTooltip/>}
		>
			<DriptipSelect allowClear/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<PurchaseIcon/>} label={'submit'}/>
		</Centered>
	</CreateDefaultForm>
}
