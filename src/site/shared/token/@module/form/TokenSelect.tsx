import {ITokenSourceSelectProps, TokenProviderControl, TokenSourceSelect} from "@/sdk/api/token/query";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITokenSelectProps extends Partial<ITokenSourceSelectProps> {
}

export const TokenSelect: FC<ITokenSelectProps> = props => {
	const {t} = useTranslation();
	return <TokenProviderControl>
		<TokenSourceSelect
			showSearch
			allowClear
			toOption={token => ({
				value: token.id,
				label: t(`common.token.${token.name}`, token.name),
			})}
			{...props}
		/>
	</TokenProviderControl>;
};
