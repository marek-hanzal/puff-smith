import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {IUserCertificateListSourceProps, UserCertificateListSource} from "@/sdk/api/user/certificate/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IUserCertificateListProps extends Partial<IUserCertificateListSourceProps> {
}

export const UserCertificateList: FC<IUserCertificateListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	return <UserCertificateListSource
		{...props}
	>
		{({certificate, ...userCertificate}) => <ListItem
			key={userCertificate.id}
			extra={renderItemExtra?.({certificate, ...userCertificate})}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={userCertificate}/>
					{t(`certificate.${certificate.name}`, certificate.name)}
					<CodeInline code={certificate}/>
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
	</UserCertificateListSource>;
};
