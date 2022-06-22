import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {IUserLicenseListSourceProps, UserLicenseListSource} from "@/sdk/api/user/license/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserLicenseListProps extends Partial<IUserLicenseListSourceProps> {
}

export const UserLicenseList: FC<IUserLicenseListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	return <UserLicenseListSource
		{...props}
	>
		{({license, ...userLicense}) => <ListItem
			key={userLicense.id}
			extra={renderItemExtra?.({license, ...userLicense})}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={userLicense}/>
					{t(`license.${license.name}`, license.name)}
					<CodeInline code={license}/>
					{license.cost && <Price withColor withIcon price={license.cost}/>}
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
	</UserLicenseListSource>;
};
