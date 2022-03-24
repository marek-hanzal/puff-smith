import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";
import {Divider, Space} from "antd";
import {IVouchersListSourceProps, VouchersListSource} from "@/sdk/api/voucher/query";
import {VoucherTransactionCreateButton} from "@/puff-smith/site/market/voucher";

export interface IVouchersListProps extends Partial<IVouchersListSourceProps> {
}

export const VouchersList: FC<IVouchersListProps> = props => {
	return <VouchersListSource
		itemLayout={'vertical'}
		{...props}
	>
		{voucher => <ListItem key={voucher.id}>
			<ListItemMeta
				title={<Space size={0} split={<Divider type={'vertical'}/>}>
					{voucher.name}
					<VoucherTransactionCreateButton type={'link'} voucher={voucher}/>
				</Space>}
			/>
		</ListItem>}
	</VouchersListSource>;
}
