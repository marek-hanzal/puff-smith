import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space} from "antd";
import {IVouchersListSourceProps, VouchersListSource} from "@/sdk/api/voucher/query";
import {VoucherInventoryCreateButton} from "@/puff-smith/site/market/voucher";
import {useTranslation} from "react-i18next";

export interface IVouchersListProps extends Partial<IVouchersListSourceProps> {
}

export const VouchersList: FC<IVouchersListProps> = props => {
	const {t} = useTranslation();
	return <VouchersListSource
		itemLayout={'vertical'}
		{...props}
	>
		{voucher => <ListItem key={voucher.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{t('voucher.' + voucher.name, voucher.name)}
					<VoucherInventoryCreateButton type={'link'} voucher={voucher}/>
				</Space>}
			/>
		</ListItem>}
	</VouchersListSource>;
}
