import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TagCreateForm} from "@/puff-smith/ui/tag/form/TagCreateForm";
import {VendorCreateForm} from "@/puff-smith/ui/vendor/form/VendorCreateForm";
import {TagDrawerItem, TagProviderControl} from "@/sdk/api/tag/query";
import {VendorDrawerItem, VendorProviderControl} from "@/sdk/api/vendor/query";
import {Ellipsis, MobileFormItem, Tags, Translate} from "@leight-core/client";
import {Space} from "antd";
import {Form, Slider, Stepper} from "antd-mobile";
import {FC} from "react";

export interface IAromaFieldsProps {
}

export const AromaFields: FC<IAromaFieldsProps> = () => {
	return <>
		<Form.Header>
			<Translate text={"shared.aroma.form.common.header"}/>
		</Form.Header>
		<MobileFormItem field={"name"} required hasTooltip/>
		<VendorProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<VendorDrawerItem
				field={"vendorId"}
				required
				render={vendor => <Ellipsis content={vendor.name}/>}
				toPreview={values => values?.single?.name ? <Ellipsis content={values.single.name}/> : undefined}
				createWith={({formContext, visibleContext}) => <VendorCreateForm
					onSuccess={({response}) => {
						formContext.setValue([
							{name: "vendorId", value: response.id},
						]);
						visibleContext.hide();
					}}
				/>}
				createWithDrawer={{
					translation: {
						namespace: "shared.vendor.create",
						text: "title",
					}
				}}
				icon={<VendorIcon/>}
			/>
		</VendorProviderControl>
		<Form.Header>
			<Translate text={"shared.aroma.form.content.header"}/>
		</Form.Header>
		<MobileFormItem
			field={"content"}
			hasTooltip
			required
		>
			<Stepper min={0} max={1000}/>
		</MobileFormItem>
		<MobileFormItem
			field={"nicotine"}
			hasTooltip
		>
			<Stepper min={0} max={50}/>
		</MobileFormItem>
		<MobileFormItem
			field={"volume"}
			hasTooltip
			required
		>
			<Stepper min={0} max={1000}/>
		</MobileFormItem>
		<MobileFormItem
			field={"pg"}
			hasTooltip
			required
		>
			<Slider
				ticks
				marks={{
					100: 100,
					90: 90,
					80: 80,
					70: 70,
					60: 60,
					50: 50,
					40: 40,
					20: 20,
					30: 30,
					10: 10,
					0: 0,
				}}
				popover={value => <Space>
					{100 - value}
					/
					{value}
					<span>VG/PG</span>
				</Space>}
			/>
		</MobileFormItem>
		<MobileFormItem
			field={"steep"}
			hasTooltip
			required
		>
			<Stepper min={0} max={365}/>
		</MobileFormItem>
		<Form.Header>
			<Translate text={"shared.aroma.form.properties.header"}/>
		</Form.Header>
		<TagProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				group: "taste",
			}}
			defaultOrderBy={{
				sort: "asc",
			}}
		>
			<TagDrawerItem
				type={"multi"}
				field={"tasteIds"}
				render={tag => <Translate namespace={"common.taste"} text={tag.tag}/>}
				toPreview={values => <Tags translation={"common"} tags={values?.selection}/>}
				icon={<LiquidIcon/>}
				createWith={({formContext, visibleContext}) => <TagCreateForm
					toForm={() => ({
						group: "taste",
					})}
					onSuccess={({response}) => {
						formContext.setValue([
							{name: "tasteIds", value: [...(formContext.values()?.tasteIds || []), response.id]},
						]);
						visibleContext.hide();
					}}
				/>}
				createWithDrawer={{
					translation: {
						namespace: "shared.taste.create",
						text: "title",
					}
				}}
			/>
		</TagProviderControl>
		<MobileFormItem field={"code"} hasTooltip/>
	</>;
};
