import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {ItemGroup, MobileFormItem, toLocalDate, Translate, useMobileFormContext} from "@leight-core/client";
import {numbersOf} from "@leight-core/utils";
import {DatePicker, Form, Picker, Selector, Stepper} from "antd-mobile";
import {DatePickerRef} from "antd-mobile/es/components/date-picker";
import {PickerRef} from "antd-mobile/es/components/picker";
import {FC, RefObject} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	const formContext = useMobileFormContext();
	const nicotine = Form.useWatch(["nicotine", "amount"], formContext.form);
	return <>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AromaDrawerItem
				field={"aromaId"}
				required
				render={aroma => <AromaNameInline aroma={aroma}/>}
				toPreview={selection => selection?.single ? <AromaNameInline aroma={selection.single}/> : undefined}
				createWith={({formContext, visibleContext}) => <AromaCreateForm
					onSuccess={({response}) => {
						formContext.setValue([
							{name: "aromaId", value: response.id},
						]);
						visibleContext.hide();
					}}
				/>}
				createWithDrawer={{
					translation: {
						namespace: "shared.aroma.create",
						text: "title",
					},
				}}
				icon={<AromaIcon/>}
			/>
		</AromaProviderControl>
		<MobileFormItem
			field={"draw"}
			hasTooltip
		>
			<Selector
				options={[
					{value: "50", label: <Translate namespace={"common.draw"} text={"mtl"}/>},
					{value: "70", label: <Translate namespace={"common.draw"} text={"dl"}/>},
					{value: "90", label: <Translate namespace={"common.draw"} text={"cloud-chasing"}/>},
				]}
				onChange={([value]) => {
					formContext.setValue([
						{
							name: ["vgpg"],
							value: [value],
						},
						{
							name: ["nicotine", "amount"],
							value: {"50": 6, "70": 3, "90": 1.5}[value],
						},
					]);
				}}
			/>
		</MobileFormItem>
		<ItemGroup prefix={"nicotine"}>
			<MobileFormItem
				field={"amount"}
				hasTooltip
			>
				<Stepper min={0} max={50} digits={1}/>
			</MobileFormItem>
			<MobileFormItem
				field={"volume"}
				hasTooltip
				disabled={!nicotine}
			>
				<Stepper min={0} max={1000}/>
			</MobileFormItem>
		</ItemGroup>
		<MobileFormItem
			field={"vgpg"}
			required
			hasTooltip
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
		>
			<Picker
				forceRender
				title={<Translate text={"shared.vgpg.picker.title"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				onConfirm={value => formContext.setValue([
					{name: ["vgpg", "draw"], value: value},
				])}
				columns={[
					numbersOf(101).map(number => ({value: `${100 - number}`, label: <VgPgInline disableTooltip vgpg={{vg: 100 - number, pg: number}}/>}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
		</MobileFormItem>
		<MobileFormItem
			field={"mixed"}
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
			hasTooltip
		>
			<DatePicker
				title={<Translate text={"shared.liquid.mixed.title"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
			>
				{value => toLocalDate(value)}
			</DatePicker>
		</MobileFormItem>
	</>;
};
