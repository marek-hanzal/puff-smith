import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IBooster} from "@/puff-smith/service/booster";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/booster/inventory/create";

export interface IBoosterInventoryCreateButtonProps extends Partial<ButtonProps> {
	booster: IBooster;
}

export const BoosterInventoryCreateButton: FC<IBoosterInventoryCreateButtonProps> = ({booster, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.booster.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (booster.cost || 0) > puffiesQuery.data),
				children: <span><Price price={booster.cost} defaultText={'market.booster.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.booster.buy.confirm.button')}
			title={t('market.booster.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					boosterId: booster.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.booster.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.booster.buy.error.' + error?.response?.data, t('market.booster.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.booster.buy.confirm.content'} values={{cost: toHumanNumber(booster.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
