import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TagCreateInline} from "@/puff-smith/ui/tag/form/TagCreateInline";
import {TagSelect} from "@/puff-smith/ui/tag/form/TagSelect";
import {TagList} from "@/puff-smith/ui/tag/list/TagList";
import {VendorCreateInline} from "@/puff-smith/ui/vendor/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/ui/vendor/form/VendorSelect";
import {VendorList} from "@/puff-smith/ui/vendor/list/VendorList";
import {AromaCreateDefaultForm, IAromaCreateDefaultFormProps} from "@/sdk/api/aroma/create";
import {useAromaQueryInvalidate} from "@/sdk/api/aroma/query";
import {TagProviderControl} from "@/sdk/api/tag/query";
import {VendorProviderControl} from "@/sdk/api/vendor/query";
import {ButtonBar, ButtonLink, Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";

export interface IAromaCreateFormProps extends Partial<IAromaCreateDefaultFormProps> {
}

export const AromaCreateForm: FC<IAromaCreateFormProps> = ({onSuccess, ...props}) => {
	const aromaQueryInvalidate = useAromaQueryInvalidate();
	return <AromaCreateDefaultForm
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
		{...props}
	>
		<FormItem field={"name"} required hasTooltip/>
		<FormItem field={"code"} hasTooltip/>
		<VendorProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
				<VendorSelect
					selectionList={() => <VendorList/>}
				/>
			</FormItem>
		</VendorProviderControl>
		<TagProviderControl
			applyFilter={{
				group: "taste",
			}}
			defaultOrderBy={{
				sort: "asc",
			}}
		>
			<FormItem
				field={"tasteIds"}
				hasTooltip
				extra={<TagCreateInline
					group={"taste"}
					title={"shared.tag.taste.create.title"}
					label={"shared.tag.taste.create.button"}
				/>}
			>
				<TagSelect
					translation={"common"}
					mode={"multiple"}
					selectionList={() => <TagList/>}
					selectionProps={{
						type: "multi",
					}}
					selectionProvider={{
						applyFilter: {
							group: "taste",
						},
					}}
					selectionDrawer={{
						title: "shared.taste.selection.title",
					}}
				/>
			</FormItem>
		</TagProviderControl>
		<Divider/>
		<Centered>
			<Submit icon={<AromaIcon/>} label={"create"}/>
		</Centered>
	</AromaCreateDefaultForm>;
};
