import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {CertificateListSource, ICertificateListSourceProps} from "@/sdk/api/certificate/query";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICertificateListProps extends Partial<ICertificateListSourceProps> {
}

export const CertificateList: FC<ICertificateListProps> = ({renderItemExtra, ...props}) => {
	const {t} = useTranslation();
	const selectionContext = useOptionalSelectionContext();
	return <CertificateListSource
		{...props}
	>
		{certificate => <ListItem
			key={certificate.id}
			extra={renderItemExtra?.(certificate)}
		>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					{selectionContext && <SelectionBool selection={certificate}/>}
					{t(`certificate.${certificate.name}`)}
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
	</CertificateListSource>;
};
