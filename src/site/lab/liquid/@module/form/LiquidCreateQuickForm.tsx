import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {FC} from "react";
import {Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {Divider} from "antd";
import {LiquidIcon} from "@/puff-smith";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {InventoryBoosterSelect} from "@/puff-smith/site/shared/booster/inventory";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	return <CreateDefaultForm
		translation={'lab.liquid'}
		{...props}
	>
		<FormItem field={'aromaId'} required>
			<InventoryAromaSelect/>
		</FormItem>
		<FormItem field={'baseId'} required>
			<InventoryBaseSelect/>
		</FormItem>
		<FormItem field={'boosterId'}>
			<InventoryBoosterSelect/>
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
