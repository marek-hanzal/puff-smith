import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaCreateForm} from "@/puff-smith/ui/aroma/form/AromaCreateForm";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {MixtureInline} from "@/puff-smith/ui/mixture/inline/MixtureInline";
import {AromaDrawerItem, AromaProviderControl} from "@/sdk/api/aroma/query";
import {MixtureDrawerItem, MixtureProviderControl} from "@/sdk/api/mixture/query";
import {ItemGroup, MobileFormItem, toLocalDate, Translate, useMobileFormContext} from "@leight-core/client";
import {merge, numbersOf} from "@leight-core/utils";
import {Typography} from "antd";
import {CheckList, DatePicker, Form, Picker, Space, Stepper} from "antd-mobile";
import {DatePickerRef} from "antd-mobile/es/components/date-picker";
import {PickerRef} from "antd-mobile/es/components/picker";
import {FC, RefObject, useState} from "react";

export interface ILiquidFieldsProps {
}

export const LiquidFields: FC<ILiquidFieldsProps> = () => {
	const formContext = useMobileFormContext();
	const nicotine = Form.useWatch(["nicotine", "amount"], formContext.form);
	const nicotineVolume = Form.useWatch(["nicotine", "volume"], formContext.form);
	const vgpg = Form.useWatch(["vgpg"], formContext.form);
	const [aroma, setAroma] = useState<IAroma>();
	return <>
		<AromaProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<AromaDrawerItem
				field={"aromaId"}
				required
				onSelection={selection => setAroma(selection.single)}
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
			trigger={"onConfirm"}
			onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
		>
			<Picker
				forceRender
				title={<Translate text={"shared.liquid.draw.picker"}/>}
				confirmText={<Translate namespace={"common"} text={"confirm"}/>}
				cancelText={<Translate namespace={"common"} text={"cancel"}/>}
				mouseWheel={true}
				onConfirm={([value]) => {
					value && formContext.setValue([
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
				columns={[
					[
						{type: "mtl", value: "50"},
						{type: "dl", value: "70"},
						{type: "cloud-chasing", value: "90"},
					].map(({type, value}) => ({
						value,
						label: <Space>
							<Translate namespace={"common.draw"} text={type}/>
							<Typography.Text type={"secondary"}><Translate namespace={"common.draw"} text={`${type}.hint`}/></Typography.Text>
						</Space>,
					}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
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
				columns={[
					numbersOf(101).map(number => ({value: `${100 - number}`, label: <VgPgInline vgpg={{vg: 100 - number, pg: number}}/>}))
				]}
			>
				{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
			</Picker>
		</MobileFormItem>
		<MixtureProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<MixtureDrawerItem
				disabled={!aroma || !vgpg}
				withFulltext={false}
				field={"mixture"}
				required
				hasTooltip
				render={mixture => <MixtureInline mixture={mixture}/>}
				renderList={({selectionContext, sourceContext, render, filterContext}) => {
					const filter = aroma && vgpg && {
						mixture: {
							aroma: {
								content: aroma.content,
								volume: aroma.volume,
								vg: aroma.vg,
								pg: aroma.pg,
							},
							vg: 100 - vgpg[0],
							pg: parseInt(vgpg[0]),
							booster: {
								volume: nicotineVolume,
							},
							nicotine,
						},
					};
					return <>
						<Form.Item
							name={"base"}
							trigger={"onConfirm"}
							onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
						>
							<Picker
								title={<Translate text={"shared.base.vgpg.picker.title"}/>}
								confirmText={<Translate namespace={"common"} text={"confirm"}/>}
								cancelText={<Translate namespace={"common"} text={"cancel"}/>}
								mouseWheel={true}
								onConfirm={(vgpg: any) => {
									sourceContext.reset();
									setTimeout(() => {
										filterContext?.setFilter(vgpg ? merge(filter || {}, {
											mixture: {
												base: {
													vgpg: [
														{
															vg: 100 - parseInt(vgpg?.[0] || 0),
															pg: vgpg[0],
														},
													]
												}
											}
										}) : {});
									}, 500);
								}}
								columns={[
									numbersOf(11).map(number => ({value: `${100 - (number * 10)}`, label: <VgPgInline vgpg={{vg: (number * 10), pg: 100 - (number * 10)}}/>}))
								]}
							>
								{([value]) => value?.label || <Translate text={"shared.vgpg.placeholder"}/>}
							</Picker>
						</Form.Item>
						<CheckList
							value={selectionContext.toSelection()}
						>
							{sourceContext.data().map(item => <CheckList.Item
								key={item.id}
								value={item.id}
								onClick={e => {
									e.stopPropagation();
									selectionContext.item(item);
								}}
							>
								{render(item)}
							</CheckList.Item>)}
						</CheckList>
					</>;
				}}
				toPreview={selection => selection?.single ? <MixtureInline mixture={selection?.single}/> : undefined}
			/>
		</MixtureProviderControl>
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
