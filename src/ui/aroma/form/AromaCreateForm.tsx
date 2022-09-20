import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {AromaCreateDefaultMobileForm, IAromaCreateDefaultMobileFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {useVendorSource, VendorProvider, VendorProviderControl} from "@/sdk/api/vendor/query";
import {ITag} from "@leight-core/api";
import {ButtonBar, ButtonLink, Drawer, IMobileFormItemProps, MobileFormItem, MobileFormItemContext, SelectionProvider, useSelectionContext, VisibleContext, VisibleProvider} from "@leight-core/client";
import {Divider, message} from "antd";
import {CheckList, Input} from "antd-mobile";
import {ComponentProps, FC, useState} from "react";

// export interface ICheckListItemProps {
// }
//
// export const CheckListItem: FC<ICheckListItemProps> = () => {
// }

export interface IVendorCheckListProps extends Partial<ComponentProps<typeof CheckList>> {
}

export const VendorCheckList: FC<IVendorCheckListProps> = () => {
	const sourceContext = useVendorSource();
	const selectionContext = useSelectionContext();
	return <CheckList>
		{sourceContext.data().map(vendor => <CheckList.Item
			key={`vendor-${vendor.id}`}
			value={vendor.id}
		>
			{vendor.name}
		</CheckList.Item>)}
	</CheckList>;
};

export interface IMobileSelectProps extends IMobileFormItemProps {
}

export const MobileSelect: FC<IMobileSelectProps> = props => {
	console.log("Selection", useSelectionContext().selection());

	return <VisibleProvider>
		<VisibleContext.Consumer>
			{visibleContext => <MobileFormItem
				onClick={() => visibleContext.show()}
				extra={<MobileFormItemContext.Consumer>
					{formItemContext => <>
						<Drawer
							open={visibleContext.visible}
							onClose={() => visibleContext.hide()}
							destroyOnClose
							closable={false}
							bodyStyle={{padding: 0}}
							title={"Blabla"}
						>
							<VendorProviderControl
								defaultSize={DEFAULT_LIST_SIZE}
							>
								<VendorProvider
									withCount
								>
									<VendorCheckList/>
								</VendorProvider>
							</VendorProviderControl>
						</Drawer>
					</>}
				</MobileFormItemContext.Consumer>}
				{...props}
			>
				<Input readOnly/>
			</MobileFormItem>}
		</VisibleContext.Consumer>
	</VisibleProvider>;
};

export interface IAromaCreateFormProps extends Partial<IAromaCreateDefaultMobileFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = ({onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	const [vendors, setVendors] = useState<Record<string, IVendor>>();
	const [tags, setTags] = useState<Record<string, ITag>>();
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
		<SelectionProvider type={"single"}>
			<MobileSelect
				field={"vendorId"}
				required
			/>
		</SelectionProvider>
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
