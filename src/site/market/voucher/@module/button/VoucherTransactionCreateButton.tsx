import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IVoucher} from "@/puff-smith/service/voucher";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/voucher/transaction/create";

export interface IVoucherTransactionCreateButtonProps extends Partial<ButtonProps> {
	voucher: IVoucher;
}

export const VoucherTransactionCreateButton: FC<IVoucherTransactionCreateButtonProps> = ({voucher, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.voucher.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && voucher.maxFortune && puffiesQuery.data >= voucher.maxFortune) || false,
				children: <span><Price price={voucher.cost} defaultText={'market.voucher.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.voucher.buy.confirm.button')}
			title={t('market.voucher.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					voucherId: voucher.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.voucher.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.voucher.buy.error.' + error?.response?.data, t('market.voucher.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.voucher.buy.confirm.content'} values={{cost: toHumanNumber(voucher.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
