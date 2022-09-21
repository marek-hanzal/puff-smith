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
import {Divider, message} from "antd";
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
			vgpg: 100,
			tasteIds: [
				"cl85yh06g5472g8kijif198t1",
				"cl85ygzpo4610g8kicrjfmjp0",
			],
		})}
		toMutation={({vgpg, ...values}) => ({
			...values,
			pg: vgpg,
			vg: 100 - vgpg,
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

		{/*<TagProviderControl*/}

		{/*>*/}
		{/*	<FormItem*/}
		{/*		field={"tasteIds"}*/}
		{/*		hasTooltip*/}
		{/*		extra={<TagCreateInline*/}
		{/*			group={"taste"}*/}
		{/*			title={"shared.tag.taste.create.title"}*/}
		{/*			label={"shared.tag.taste.create.button"}*/}
		{/*			onSuccess={tag => setTags(tags => ({*/}
		{/*				...tags,*/}
		{/*				[tag.id]: tag,*/}
		{/*			}))}*/}
		{/*		/>}*/}
		{/*	>*/}
		{/*		<TagSelect*/}
		{/*			selectionDefault={tags}*/}
		{/*			translation={"common"}*/}
		{/*			mode={"multiple"}*/}
		{/*			selectionList={() => <TagList/>}*/}
		{/*			selectionProps={{*/}
		{/*				type: "multi",*/}
		{/*			}}*/}
		{/*			selectionProvider={{*/}
		{/*				applyFilter: {*/}
		{/*					group: "taste",*/}
		{/*				},*/}
		{/*			}}*/}
		{/*			selectionDrawer={{*/}
		{/*				title: "shared.taste.selection.title",*/}
		{/*			}}*/}
		{/*		/>*/}
		{/*	</FormItem>*/}
		{/*</TagProviderControl>*/}
	</AromaCreateDefaultMobileForm>;
};
