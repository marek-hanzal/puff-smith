import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {UserNameInline} from "@/puff-smith/site/shared/user/@module/inline/UserNameInline";
import {IUserLicenseRequestListSourceProps, UserLicenseRequestListSource} from "@/sdk/api/user/license/request/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILicenseRequestListProps extends Partial<IUserLicenseRequestListSourceProps> {
}

export const LicenseRequestList: FC<ILicenseRequestListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	return <UserLicenseRequestListSource
		{...props}
	>
		{({license, user, ...userLicenseRequest}) => <ListItem
			key={userLicenseRequest.id}
			extra={renderItemExtra?.({license, user, ...userLicenseRequest})}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={userLicenseRequest}/>
					{t(`license.${license.name}`, license.name)}
					<CodeInline code={license}/>
					<UserNameInline user={user}/>
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
	</UserLicenseRequestListSource>;
};
