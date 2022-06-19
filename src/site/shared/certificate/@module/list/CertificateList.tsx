import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {Tags} from "@/puff-smith/component/Tags";
import {CertificateListSource, ICertificateListSourceProps} from "@/sdk/api/certificate/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ICertificateListProps extends Partial<ICertificateListSourceProps> {
}

export const CertificateList: FC<ICertificateListProps> = props => {
	return <CertificateListSource
		{...props}
	>
		{certificate => <ListItem>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={certificate}/>
					{certificate.name}
					<CodeInline code={certificate}/>
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
