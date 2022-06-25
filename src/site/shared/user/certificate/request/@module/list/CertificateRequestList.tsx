import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {UserNameInline} from "@/puff-smith/site/shared/user/@module/inline/UserNameInline";
import {IUserCertificateRequestListSourceProps, UserCertificateRequestListSource} from "@/sdk/api/user/certificate/request/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateRequestListProps extends Partial<IUserCertificateRequestListSourceProps> {
}

export const CertificateRequestList: FC<ICertificateRequestListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	return <UserCertificateRequestListSource
		{...props}
	>
		{({certificate, user, ...userCertificateRequest}) => <ListItem
			key={userCertificateRequest.id}
			extra={renderItemExtra?.({certificate, user, ...userCertificateRequest})}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={userCertificateRequest}/>
					{t(`certificate.${certificate.name}`, certificate.name)}
					<CodeInline code={certificate}/>
					<UserNameInline user={user}/>
					{certificate.cost && <Price withColor withIcon price={certificate.cost}/>}
				</Space>}
				description={<Tags
					color={"red"}
					translation={"common.token"}
					tags={certificate.tokens.map(token => ({
						id: token.id,
						group: "token",
						code: token.name,
					}))}
				/>}
			/>
		</ListItem>}
	</UserCertificateRequestListSource>;
};
