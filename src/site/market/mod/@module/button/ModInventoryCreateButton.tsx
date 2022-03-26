import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IMod} from "@/puff-smith/service/mod";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/mod/inventory/create";

export interface IModInventoryCreateButtonProps extends Partial<ButtonProps> {
	mod: IMod;
}

export const ModInventoryCreateButton: FC<IModInventoryCreateButtonProps> = ({mod, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.mod.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (mod.cost || 0) > puffiesQuery.data),
				children: <span><Price price={mod.cost} defaultText={'market.mod.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.mod.buy.confirm.button')}
			title={t('market.mod.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					modId: mod.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.mod.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.mod.buy.error.' + error?.response?.data, t('market.mod.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.mod.buy.confirm.content'} values={{cost: toHumanNumber(mod.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
