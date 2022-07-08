import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {InventoryIcon} from "@/puff-smith/component/icon/InventoryIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {ModIcon} from "@/puff-smith/component/icon/ModIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {VoucherIcon} from "@/puff-smith/component/icon/VoucherIcon";
import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {GroupOutlined, MedicineBoxOutlined, SlidersOutlined} from "@ant-design/icons";
import {BrowserContent, CreateMenuGroup, CreateMenuItem, IMenuProps, Menu, MobileMenu, useUserContext} from "@leight-core/client";
import {FC} from "react";

export interface IMarketMenuProps extends Partial<IMenuProps> {
}

export const MarketMenu: FC<IMarketMenuProps> = props => {
	const userContext = useUserContext();
	return <>
		<BrowserContent>
			<Menu
				style={{backgroundColor: "transparent", minWidth: "50vw"}} mode={"horizontal"}
				items={[
					CreateMenuGroup({
						title: "market.liquid.menu",
						icon: <LiquidIcon/>,
						items: [
							CreateMenuItem({
								title: "market.aroma.menu",
								href: "/market/aroma",
								icon: <AromaIcon/>,
							}),
							CreateMenuItem({
								title: "market.base.menu",
								href: "/market/base",
								icon: <BaseIcon/>,
							}),
							CreateMenuItem({
								title: "market.booster.menu",
								href: "/market/booster",
								icon: <BoosterIcon/>,
							}),
						],
					}),
					CreateMenuGroup({
						title: "market.build.menu",
						icon: <BuildIcon/>,
						items: [
							CreateMenuItem({
								title: "market.cotton.menu",
								href: "/market/cotton",
								icon: <CottonIcon/>,
							}),
							CreateMenuItem({
								title: "market.wire.menu",
								href: "/market/wire",
								icon: <WireIcon/>,
							}),
						],
					}),
					CreateMenuGroup({
						title: "market.hardware.menu",
						icon: <MedicineBoxOutlined/>,
						items: [
							CreateMenuItem({
								title: "market.atomizer.menu",
								href: "/market/atomizer",
								icon: <AtomizerIcon/>,
							}),
							CreateMenuItem({
								title: "market.mod.menu",
								href: "/market/mod",
								icon: <ModIcon/>,
							}),
							CreateMenuItem({
								title: "market.cell.menu",
								href: "/market/cell",
								icon: <CellIcon/>,
							}),
						],
					}),
					CreateMenuGroup({
						title: "market.other.menu",
						icon: <GroupOutlined/>,
						items: [
							CreateMenuItem({
								title: "market.voucher.menu",
								href: "/market/voucher",
								icon: <VoucherIcon/>,
							}),
							CreateMenuItem({
								title: "market.vendor.menu",
								href: "/market/vendor",
								icon: <VendorIcon/>,
							}),
							CreateMenuItem({
								title: "market.certificate.menu",
								href: "/market/certificate",
								icon: <CertificateIcon/>,
							}),
							CreateMenuItem({
								title: "market.license.menu",
								href: "/market/license",
								icon: <LicenseIcon/>,
							}),
						],
					}),
					CreateMenuItem({
						title: "market.lab.menu",
						href: "/to/lab",
						icon: <LabIcon/>,
					}),
					CreateMenuItem({
						title: "market.inventory.menu",
						href: "/to/inventory",
						icon: <InventoryIcon/>,
					}),
					userContext.user.hasAny(["site.root", "*"]) ? CreateMenuItem({
						title: "inventory.root.home.menu",
						href: "/to/root",
						icon: <SlidersOutlined/>,
					}) : null,
				]}
				{...props}
			/>
		</BrowserContent>
		<MobileMenu
			title={"market.liquid.menu"}
			items={[
				{
					label: "market.aroma.menu",
					icon: <AromaIcon/>,
					href: "/market/aroma",
				},
				{
					label: "market.base.menu",
					icon: <BaseIcon/>,
					href: "/market/base",
				},
				{
					label: "market.booster.menu",
					icon: <BoosterIcon/>,
					href: "/market/booster",
				},
			]}
		/>
		<MobileMenu
			title={"market.build.menu"}
			items={[
				{
					label: "market.cotton.menu",
					icon: <CottonIcon/>,
					href: "/market/cotton",
				},
				{
					label: "market.wire.menu",
					icon: <WireIcon/>,
					href: "/market/wire",
				},
			]}
		/>
		<MobileMenu
			title={"market.hardware.menu"}
			items={[
				{
					label: "market.atomizer.menu",
					href: "/market/atomizer",
					icon: <AtomizerIcon/>,
				},
				{
					label: "market.mod.menu",
					href: "/market/mod",
					icon: <ModIcon/>,
				},
				{
					label: "market.cell.menu",
					href: "/market/cell",
					icon: <CellIcon/>,
				},
			]}
		/>
		<MobileMenu
			title={"market.other.menu"}
			items={[
				{
					label: "market.voucher.menu",
					href: "/market/voucher",
					icon: <VoucherIcon/>,
				},
				{
					label: "market.vendor.menu",
					href: "/market/vendor",
					icon: <VendorIcon/>,
				},
				{
					label: "market.certificate.menu",
					href: "/market/certificate",
					icon: <CertificateIcon/>,
				},
				{
					label: "market.license.menu",
					href: "/market/license",
					icon: <LicenseIcon/>,
				},
			]}
		/>
	</>;
};
