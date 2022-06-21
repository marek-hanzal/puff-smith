import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {CertificateListSource, ICertificateListSourceProps} from "@/sdk/api/certificate/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateListProps extends Partial<ICertificateListSourceProps> {
}

export const CertificateList: FC<ICertificateListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	return <CertificateListSource
		{...props}
	>
		{certificate => <ListItem
			key={certificate.id}
			extra={renderItemExtra?.(certificate)}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={certificate}/>
					{t(`certificate.${certificate.name}`, certificate.name)}
					<CodeInline code={certificate}/>
					<Price withColor withIcon price={certificate.cost}/>
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
	</CertificateListSource>;
};
