import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {ICotton} from "@/puff-smith/service/cotton";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/cotton/inventory/create";

export interface ICottonInventoryCreateButtonProps extends Partial<ButtonProps> {
	cotton: ICotton;
}

export const CottonInventoryCreateButton: FC<ICottonInventoryCreateButtonProps> = ({cotton, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.cotton.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (cotton.cost || 0) > puffiesQuery.data),
				children: <span><Price price={cotton.cost} defaultText={'market.cotton.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.cotton.buy.confirm.button')}
			title={t('market.cotton.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					cottonId: cotton.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.cotton.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.cotton.buy.error.' + error?.response?.data, t('market.cotton.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.cotton.buy.confirm.content'} values={{cost: toHumanNumber(cotton.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
