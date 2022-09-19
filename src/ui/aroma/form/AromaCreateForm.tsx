import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {IVendor} from "@/puff-smith/service/vendor/interface";
import {AromaCreateDefaultMobileForm, IAromaCreateDefaultMobileFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {VendorProviderControl} from "@/sdk/api/vendor/query";
import {ITag} from "@leight-core/api";
import {ButtonBar, ButtonLink, IMobileFormItemProps, MobileFormItem, MobileFormItemContext} from "@leight-core/client";
import {Divider, message} from "antd";
import {CheckList, Popup} from "antd-mobile";
import {FC, useState} from "react";

export interface IMobileSelectProps extends IMobileFormItemProps {
}

export const MobileSelect: FC<IMobileSelectProps> = props => {
	const [visible, setVisible] = useState(false);

	/**
	 * MAKE THE THING AS A DRAWER POPUP
	 */

	return <MobileFormItem
		onClick={() => setVisible(true)}
		{...props}
	>
		<MobileFormItemContext.Consumer>
			{formItemContext => <>
				{formItemContext.getValue()}
				<Popup
					visible={visible}
					onMaskClick={() => {
						setVisible(false);
					}}
					destroyOnClose
				>
					<CheckList
						onChange={value => {
							setVisible(false);
							setTimeout(() => {
								formItemContext.setValue(value);
								formItemContext.setErrors([]);
							}, 0);
						}}
					>
						<CheckList.Item value="A">A</CheckList.Item>
						<CheckList.Item value="B">B</CheckList.Item>
					</CheckList>
				</Popup>
			</>}
		</MobileFormItemContext.Consumer>
	</MobileFormItem>;
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
		<VendorProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<MobileSelect
				field={"vendorId"}
				required
			/>
		</VendorProviderControl>
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
