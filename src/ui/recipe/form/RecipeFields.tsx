import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {
	ItemGroup,
	MobileFormItem,
	Translate,
	useMobileFormContext
}                   from "@leight-core/client";
import {numbersOf}  from "@leight-core/utils";
import {Typography} from "antd";
import {
	Form,
	Picker,
	Space,
	Stepper
}                   from "antd-mobile";
import {PickerRef}  from "antd-mobile/es/components/picker";
import {
	FC,
	RefObject
}                   from "react";

export interface IRecipeFieldsProps {
	hidden?: ("draw")[];
}

export const RecipeFields: FC<IRecipeFieldsProps> = ({hidden}) => {
	const formContext = useMobileFormContext();
	let nicotine      = Form.useWatch(["nicotine"], formContext.form);
	nicotine          = nicotine === undefined ? 6 : nicotine;
	return <>
		{!hidden?.includes("draw") && <MobileFormItem
			field={"draw"}
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
		>
			<Picker
				title={<Translate text={"shared.draw.picker"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				onConfirm={([value]) => {
					value && setTimeout(() => formContext.setValue([
						{
							name:  ["vgpg"],
							value: [value],
						},
						{
							name:  ["nicotine"],
							value: {
									   "50": 6,
									   "70": 3,
								   }[value],
						},
						{
							name:  ["nicotineTolerance"],
							value: {
									   "50": 1.5,
									   "70": 0.5,
								   }[value],
						},
						{
							name:  [
								"booster",
								"vgpg"
							],
							value: [
								{
									"50": "70",
									"70": "100",
								}[value]
							],
						},
						{
							name:  [
								"base",
								"vgpg"
							],
							value: [
								{
									"50": "70",
									"70": "100",
								}[value]
							],
						},
					]), 150);
				}}
				columns={[
					[
						{type: "mtl", value: "50"},
						{type: "dl", value: "70"},
					].map(({type, value}) => ({
						value,
						label: <Space>
								   <Translate namespace={"common.draw"} text={type}/>
								   <Typography.Text type={"secondary"}><Translate namespace={"common.draw"} text={`${type}.hint`}/></Typography.Text>
							   </Space>,
					}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.draw.placeholder"}/>}
			</Picker>
		</MobileFormItem>}
		<MobileFormItem
			field={"nicotine"}
			toClear={() => 0}
			extra={"mg/ml"}
		>
			<Stepper min={0} max={50} digits={1}/>
		</MobileFormItem>
		<MobileFormItem
			field={"vgpg"}
			required
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
			toClear={() => []}
		>
			<Picker
				title={<Translate text={"shared.vgpg.picker.title"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				columns={[
					numbersOf(101).map(number => ({
						value: `${100 - number}`,
						label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
					}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
		</MobileFormItem>
		<ItemGroup prefix={"base"}>
			<MobileFormItem
				field={"vgpg"}
				trigger={"onConfirm"}
				onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
				toClear={() => []}
			>
				<Picker
					title={<Translate text={"shared.base.vgpg.picker.title"}/>}
					confirmText={<Translate namespace={"common"} text={"confirm"}/>}
					cancelText={<Translate namespace={"common"} text={"cancel"}/>}
					mouseWheel={true}
					columns={[
						numbersOf(101).map(number => ({
							value: `${100 - number}`,
							label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
						}))
					]}
				>
					{([value]) => value?.label || <Translate text={"shared.base.vgpg.placeholder"}/>}
				</Picker>
			</MobileFormItem>
		</ItemGroup>
		{nicotine > 0 && <ItemGroup prefix={"booster"}>
			<MobileFormItem
				field={"vgpg"}
				trigger={"onConfirm"}
				onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
				toClear={() => []}
			>
				<Picker
					title={<Translate text={"shared.booster.vgpg.picker.title"}/>}
					confirmText={<Translate namespace={"common"} text={"confirm"}/>}
					cancelText={<Translate namespace={"common"} text={"cancel"}/>}
					mouseWheel={true}
					columns={[
						numbersOf(101).map(number => ({
							value: `${100 - number}`,
							label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>,
						}))
					]}
				>
					{([value]) => value?.label || <Translate text={"shared.booster.vgpg.placeholder"}/>}
				</Picker>
			</MobileFormItem>
			<MobileFormItem
				field={"nicotine"}
				required
				extra={"mg/ml"}
			>
				<Stepper min={1} max={250} digits={1}/>
			</MobileFormItem>
			<MobileFormItem
				field={"volume"}
				hasTooltip
				toClear={() => null}
				extra={"ml"}
			>
				<Stepper min={0} max={1000} allowEmpty/>
			</MobileFormItem>
		</ItemGroup>}
		{nicotine > 0 && <MobileFormItem
			field={"nicotineTolerance"}
			hasTooltip
			toClear={() => 0}
			extra={"mg/ml"}
		>
			<Stepper min={0} max={6} step={0.5} digits={1}/>
		</MobileFormItem>}
	</>;
};
