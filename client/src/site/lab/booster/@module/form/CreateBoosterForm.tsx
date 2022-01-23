import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/booster/endpoint";
import {FC} from "react";
import {Divider, InputNumber, Slider} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface ICreateBoosterFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBoosterForm: FC<ICreateBoosterFormProps> = props => {
	return <CreateDefaultForm
		toForm={() => ({
			nicotine: 6,
			volume: 10,
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.booster.name.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.booster.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'pg'}
			labels={['lab.booster.pg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			labels={['lab.booster.vg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'nicotine'}
			labels={['lab.booster.nicotine.label']}
			required
		>
			<Slider
				marks={{
					0: 0,
					3: 3,
					6: 6,
					9: 9,
					12: 12,
					16: 16,
					18: 18,
					20: 20,
				}}
				min={0}
				max={20}
				step={1}
			/>
		</FormItem>
		<FormItem
			field={'volume'}
			labels={['lab.booster.volume.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.booster.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
