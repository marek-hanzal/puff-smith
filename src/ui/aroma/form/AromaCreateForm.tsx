import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {AromaCreateDefaultMobileForm, IAromaCreateDefaultMobileFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {TagDrawerItem, TagProviderControl} from "@/sdk/api/tag/query";
import {VendorDrawerItem, VendorProviderControl} from "@/sdk/api/vendor/query";
import {ButtonBar, ButtonLink, MobileFormItem, Tags, Translate} from "@leight-core/client";
import {Divider, message, Space} from "antd";
import {Form, Slider, Stepper} from "antd-mobile";
import {FC} from "react";

export interface IAromaCreateFormProps extends Partial<IAromaCreateDefaultMobileFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = ({onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	return <AromaCreateDefaultMobileForm
		onSuccess={async response => {
			message.success(response.t("success", response.response));
			await aromaQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			content: 12,
			volume: 60,
			steep: 14,
			nicotine: 0,
			pg: 100,
		})}
		toMutation={({pg, ...values}) => ({
			...values,
			pg,
			vg: 100 - pg,
		})}
		withTokenProps={{
			tokens: [
				"*",
				"feature.aroma.create",
			],
			template: {
				extra: <>
					<Divider/>
					<ButtonBar split={<Divider type={"vertical"}/>}>
						<ButtonLink icon={<CertificateIcon/>} href={"/to/market/certificate"} label={"shared.certificate.link.button"}/>
						<ButtonLink icon={<LicenseIcon/>} href={"/to/market/license"} label={"shared.license.link.button"}/>
					</ButtonBar>
				</>
			}
		}}
		icon={<AromaIcon/>}
		{...props}
	>
		<Form.Header>
			<Translate text={"shared.aroma.form.common.header"}/>
		</Form.Header>
		<MobileFormItem field={"name"} required hasTooltip/>
		<MobileFormItem field={"code"} hasTooltip/>
		<VendorProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<VendorDrawerItem
				field={"vendorId"}
				required
				render={vendor => vendor.name}
				toPreview={values => values?.single?.name}
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
			/>
		</TagProviderControl>
	</AromaCreateDefaultMobileForm>;
};
