import {ButtonProps, Tooltip} from "antd";
import {FC} from "react";
import {IAtomizer} from "@/puff-smith/service/atomizer";
import {Price, PurchaseIcon} from "@/puff-smith";
import {Trans, useTranslation} from "react-i18next";
import {ModalButton, toHumanNumber} from "@leight-core/client";
import {usePuffiesQuery} from "@/sdk/api/user/puffies";

export interface IBuyAtomizerButtonProps extends Partial<ButtonProps> {
	atomizer: IAtomizer;
}

export const BuyAtomizerButton: FC<IBuyAtomizerButtonProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	return <Tooltip title={t('market.atomizer.buy.tooltip')}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: 'primary',
				ghost: true,
				size: 'large',
				disabled: !atomizer.cost || puffiesQuery.isLoading || (puffiesQuery.isSuccess && atomizer.cost > puffiesQuery.data),
				children: <span><Price price={atomizer.cost} defaultText={'market.atomizer.buy.disabled'}/></span>,
				...props,
			}}
			okText={t('market.atomizer.buy.confirm.button')}
			title={t('market.atomizer.buy.confirm.title')}
		>
			<Trans i18nKey={'market.atomizer.buy.confirm.content'} values={{cost: toHumanNumber(atomizer.cost, 4)}}/>
		</ModalButton>
	</Tooltip>
}
