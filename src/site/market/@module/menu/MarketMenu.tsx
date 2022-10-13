import {AromaIcon}       from "@/puff-smith/component/icon/AromaIcon";
import {AtomizerIcon}    from "@/puff-smith/component/icon/AtomizerIcon";
import {CellIcon}        from "@/puff-smith/component/icon/CellIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {CottonIcon}      from "@/puff-smith/component/icon/CottonIcon";
import {LicenseIcon}     from "@/puff-smith/component/icon/LicenseIcon";
import {ModIcon}         from "@/puff-smith/component/icon/ModIcon";
import {VendorIcon}      from "@/puff-smith/component/icon/VendorIcon";
import {VoucherIcon}     from "@/puff-smith/component/icon/VoucherIcon";
import {WireIcon}        from "@/puff-smith/component/icon/WireIcon";
import {MobileMenu}      from "@leight-core/viv";
import {FC}              from "react";

export interface IMarketMenuProps {
}

export const MarketMenu: FC<IMarketMenuProps> = () => {
	return <>
		<MobileMenu
			title={"market.liquid.menu"}
			items={[
				{
					label: "market.aroma.menu",
					icon:  <AromaIcon/>,
					href:  "/market/aroma",
				},
			]}
		/>
		<MobileMenu
			title={"market.build.menu"}
			items={[
				{
					label: "market.cotton.menu",
					icon:  <CottonIcon/>,
					href:  "/market/cotton",
				},
				{
					label: "market.wire.menu",
					icon:  <WireIcon/>,
					href:  "/market/wire",
				},
			]}
		/>
		<MobileMenu
			title={"market.hardware.menu"}
			items={[
				{
					label: "market.atomizer.menu",
					href:  "/market/atomizer",
					icon:  <AtomizerIcon/>,
				},
				{
					label: "market.mod.menu",
					href:  "/market/mod",
					icon:  <ModIcon/>,
				},
				{
					label: "market.cell.menu",
					href:  "/market/cell",
					icon:  <CellIcon/>,
				},
			]}
		/>
		<MobileMenu
			title={"market.other.menu"}
			items={[
				{
					label: "market.voucher.menu",
					href:  "/market/voucher",
					icon:  <VoucherIcon/>,
				},
				{
					label: "market.vendor.menu",
					href:  "/market/vendor",
					icon:  <VendorIcon/>,
				},
				{
					label: "market.certificate.menu",
					href:  "/market/certificate",
					icon:  <CertificateIcon/>,
				},
				{
					label: "market.license.menu",
					href:  "/market/license",
					icon:  <LicenseIcon/>,
				},
			]}
		/>
	</>;
};
