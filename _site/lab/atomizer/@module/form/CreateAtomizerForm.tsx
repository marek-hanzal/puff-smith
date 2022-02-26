import {CreateDefaultForm, ICreateDefaultFormProps, useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/common";
import {Divider, InputNumber, message} from "antd";
import {AtomizerIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {AtomizerTypeSelect} from "@/puff-smith/component/input/AtomizerTypeSelect";

export interface ICreateAtomizerFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateAtomizerForm: FC<ICreateAtomizerFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.atomizer'}
		onSuccess={response => {
			message.success(t("lab.atomizer.create.success", {data: response.response}));
			atomizersQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			dual: false,
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<SwitchItem
			field={'dual'}
		/>
		<FormItem
			field={'drawIds'}
		>
			<DrawSelect/>
		</FormItem>
		<FormItem
			field={'typeId'}
		>
			<AtomizerTypeSelect/>
		</FormItem>
		<FormItem
			field={'coilMin'}
			hasTooltip
		>
			<InputNumber style={{width: '100%'}} min={0.1} max={0.6}/>
		</FormItem>
		<FormItem
			field={'coilMax'}
			hasTooltip
		>
			<InputNumber style={{width: '100%'}} min={0.2} max={0.6}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
