import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {ILicenseListSourceProps, LicenseListSource} from "@/sdk/api/license/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILicenseListProps extends Partial<ILicenseListSourceProps> {
}

export const LicenseList: FC<ILicenseListProps> = props => {
	const {t} = useTranslation();
	return <LicenseListSource
		{...props}
	>
		{license => <ListItem
			key={license.id}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={license}/>
					{t(`license.${license.name}`, license.name)}
					<CodeInline code={license}/>
					<Price withColor withIcon price={license.cost}/>
				</Space>}
				description={<Tags
					color={"red"}
					translation={"common.token"}
					tags={license.tokens.map(token => ({
						id: token.id,
						group: "token",
						code: token.name,
					}))}
				/>}
			/>
		</ListItem>}
	</LicenseListSource>;
};
