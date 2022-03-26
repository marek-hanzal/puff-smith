import {ButtonProps, message, Tooltip} from "antd";
import {FC} from "react";
import {IAtomizer} from "@/puff-smith/service/atomizer";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {useCreateMutation} from "@/sdk/api/atomizer/inventory/create";

export interface IAtomizerInventoryCreateButtonProps extends Partial<ButtonProps> {
	atomizer: IAtomizer;
}

export const AtomizerInventoryCreateButton: FC<IAtomizerInventoryCreateButtonProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t('market.atomizer.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: puffiesQuery.isLoading || (puffiesQuery.isSuccess && (atomizer.cost || 0) > puffiesQuery.data),
				children: <span><Price price={atomizer.cost} defaultText={'market.atomizer.buy.free'}/></span>,
				...props,
			}}
			okText={t('market.atomizer.buy.confirm.button')}
			title={t('market.atomizer.buy.confirm.title')}
			onOk={setShow => {
				createMutation.mutate({
					atomizerId: atomizer.id,
				}, {
					onSuccess: async data => {
						message.success(t('market.atomizer.buy.success', {data}));
						await puffiesQueryInvalidate();
					},
					onError: error => {
						message.error(t('market.atomizer.buy.error.' + error?.response?.data, t('market.atomizer.buy.error')));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={'market.atomizer.buy.confirm.content'} values={{cost: toHumanNumber(atomizer.cost || 0, 4)}}/>
		</ModalButton>
	</Tooltip>
}
