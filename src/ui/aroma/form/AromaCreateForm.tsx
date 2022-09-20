import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {AromaCreateDefaultMobileForm, IAromaCreateDefaultMobileFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {VendorProvider, VendorProviderControl} from "@/sdk/api/vendor/query";
import {ButtonBar, ButtonLink, DrawerSelectItem, ItemGroup, MobileFormItem} from "@leight-core/client";
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
		<ItemGroup prefix={"bla"}>
			<VendorProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<VendorProvider
					withCount
				>
					<DrawerSelectItem<IVendor, string>
						field={"vendorId"}
						required
						render={vendor => vendor.name}
						drawerSelectProps={{
							translation: {
								text: "shared.vendor.select.title",
							}
						}}
					/>
				</VendorProvider>
			</VendorProviderControl>
		</ItemGroup>
		{/*<TagProviderControl*/}
		{/*	applyFilter={{*/}
		{/*		group: "taste",*/}
		{/*	}}*/}
		{/*	defaultOrderBy={{*/}
		{/*		sort: "asc",*/}
		{/*	}}*/}
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
