import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {ICell} from "@/puff-smith/service/cell";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/cell/transaction/create";

export interface ICellTransactionCreateButtonProps extends Partial<ButtonProps> {
	cell: ICell;
}

export const CellTransactionCreateButton: FC<ICellTransactionCreateButtonProps> = ({cell, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.cell.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (cell.cost || 0) > puffiesQuery.data),
				children: <span><Price price={cell.cost} defaultText={'market.cell.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.cell.buy.confirm.button')}
			title={t('market.cell.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					cellId: cell.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.cell.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.cell.buy.error.' + error?.response?.data, t('market.cell.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.cell.buy.confirm.content'} values={{cost: toHumanNumber(cell.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
