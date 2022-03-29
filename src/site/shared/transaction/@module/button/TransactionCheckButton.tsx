import {FC} from "react";
import {Button, ButtonProps} from "antd";
import {useTranslation} from "react-i18next";

export interface ITransactionCheckButtonProps extends Partial<ButtonProps> {
	label?: string;
}

export const TransactionCheckButton: FC<ITransactionCheckButtonProps> = ({label, ...props}) => {
	const {t} = useTranslation();
	return <Button
		{...props}
	>
		{label ? t(label) : undefined}
	</Button>
}
