import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {FC} from "react";
import {Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {Divider} from "antd";
import {LiquidIcon} from "@/puff-smith";
import {AromaSelect} from "@/puff-smith/site/shared/aroma";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	return <CreateDefaultForm
		translation={'lab.liquid'}
		{...props}
	>
		<FormItem field={'aromaId'} required>
			<AromaSelect/>
		</FormItem>
		<FormItem field={'mixed'}>
			<DatePicker style={{width: '100%'}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={'create'}/>
		</Centered>
	</CreateDefaultForm>
}
