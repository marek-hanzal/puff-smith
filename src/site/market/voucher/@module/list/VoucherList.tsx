import {VoucherInventoryCreateButton} from "@/puff-smith/site/market/voucher/@module/button/VoucherInventoryCreateButton";
import {IVoucherListSourceProps, VoucherInfiniteListSource, VoucherListSource} from "@/sdk/api/voucher/query";
import {BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IVoucherListProps extends Partial<IVoucherListSourceProps> {
}

export const VoucherList: FC<IVoucherListProps> = props => {
	const {t} = useTranslation();
	return <>
		<BrowserContent>
			<VoucherListSource
				{...props}
			>
				{voucher => <ListItem
					key={voucher.id}
					extra={<VoucherInventoryCreateButton type={"link"} voucher={voucher}/>}
				>
					<ListItemMeta
						title={<Space size={0} split={<Divider type={"vertical"}/>}>
							{t("voucher." + voucher.name, voucher.name)}
						</Space>}
					/>
				</ListItem>}
			</VoucherListSource>
		</BrowserContent>
		<MobileContent>
			<VoucherInfiniteListSource
				withFulltext
			>
				{voucher => <InfiniteListItem
					key={voucher.id}
				>
					{voucher.name}
				</InfiniteListItem>}
			</VoucherInfiniteListSource>
		</MobileContent>
	</>;
};
