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
import {BrowserContent, CreateMenuGroup, CreateMenuItem, HomeIcon, IMenuProps, Menu, MobileContent, useNavigate, useUserContext} from "@leight-core/client";
import {List} from "antd-mobile";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IMarketMenuProps extends Partial<IMenuProps> {
}

export const MarketMenu: FC<IMarketMenuProps> = props => {
	const userContext = useUserContext();
	const navigate = useNavigate();
	const {t} = useTranslation();
	return <>
		<BrowserContent>
			<Menu
				style={{backgroundColor: "transparent", minWidth: "50vw"}} mode={"horizontal"}
				items={[
					CreateMenuItem({
						title: "market.home.menu",
						href: "/market",
						icon: <HomeIcon/>,
					}),
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
		<MobileContent>
			<List header={t("market.liquid.menu")}>
				<List.Item
					key={"/market/aroma"}
					prefix={<AromaIcon/>}
					onClick={() => navigate("/market/aroma")}
				>
					{t("market.aroma.menu")}
				</List.Item>
				<List.Item
					key={"/market/base"}
					prefix={<BaseIcon/>}
					onClick={() => navigate("/market/base")}
				>
					{t("market.base.menu")}
				</List.Item>
			</List>
			<List header={t("market.hardware.menu")}>
				<List.Item
					key={"/market/atomizer"}
					prefix={<AtomizerIcon/>}
					onClick={() => navigate("/market/atomizer")}
				>
					{t("market.atomizer.menu")}
				</List.Item>
			</List>
		</MobileContent>
	</>;
};
