import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IBase} from "@/puff-smith/service/base";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/base/transaction/create";

export interface IBaseTransactionCreateButtonProps extends Partial<ButtonProps> {
	base: IBase;
}

export const BaseTransactionCreateButton: FC<IBaseTransactionCreateButtonProps> = ({base, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.base.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (base.cost || 0) > puffiesQuery.data),
				children: <span><Price price={base.cost} defaultText={'market.base.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.base.buy.confirm.button')}
			title={t('market.base.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					baseId: base.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.base.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.base.buy.error.' + error?.response?.data, t('market.base.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.base.buy.confirm.content'} values={{cost: toHumanNumber(base.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
