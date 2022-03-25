import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IAroma} from "@/puff-smith/service/aroma";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/aroma/transaction/create";

export interface IAromaTransactionCreateButtonProps extends Partial<ButtonProps> {
	aroma: IAroma;
}

export const AromaTransactionCreateButton: FC<IAromaTransactionCreateButtonProps> = ({aroma, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.aroma.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (aroma.cost || 0) > puffiesQuery.data),
				children: <span><Price price={aroma.cost} defaultText={'market.aroma.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.aroma.buy.confirm.button')}
			title={t('market.aroma.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					aromaId: aroma.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.aroma.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.aroma.buy.error.' + error?.response?.data, t('market.aroma.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.aroma.buy.confirm.content'} values={{cost: toHumanNumber(aroma.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
