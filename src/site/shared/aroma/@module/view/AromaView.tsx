import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {Price} from "@/puff-smith/component/Price";
import {Tags} from "@/puff-smith/component/Tags";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaContentInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {ITemplateProps, Preview, Template} from "@leight-core/client";
import {Divider} from "antd";
import dayjs from "dayjs";
import {FC} from "react";

export interface IAromaViewProps extends Partial<ITemplateProps> {
	aroma: IAroma;
}

export const AromaView: FC<IAromaViewProps> = ({aroma, ...props}) => {
	return <Template
		title={aroma.name}
		subTitle={aroma.vendor.name}
		extra={<Divider/>}
		{...props}
	>
		<Preview
			name={"aroma"}
			translation={"market.aroma.view"}
		>
			{[
				{
					name: "info",
					items: {
						name: <AromaNameInline aroma={aroma}/>,
						pgvg: <VgPgInline vgpg={aroma}/>,
						content: <AromaContentInline aroma={aroma}/>,
					},
				},
				{
					name: "more",
					items: {
						steep: aroma.steep ? dayjs.duration(aroma.steep, "days").humanize() : undefined,
						cost: <Price withIcon withColor price={aroma.cost}/>,
						tastes: aroma.tastes ? <Tags tags={aroma.tastes} translation={"common.taste"}/> : undefined,
					},
				},
			]}
		</Preview>
	</Template>;
};
