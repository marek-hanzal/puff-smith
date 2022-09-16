import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaContentInline} from "@/puff-smith/ui/aroma/inline/AromaContentInline";
import {AromaNameInline} from "@/puff-smith/ui/aroma/inline/AromaNameInline";
import {ITemplateProps, Preview, Tags, Template} from "@leight-core/client";
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
						vgpg: <VgPgInline vgpg={aroma}/>,
						content: <AromaContentInline aroma={aroma}/>,
					},
				},
				{
					name: "more",
					items: {
						steep: aroma.steep ? dayjs.duration(aroma.steep, "days").humanize() : undefined,
						tastes: aroma.tastes ? <Tags tags={aroma.tastes} translation={"common"}/> : undefined,
					},
				},
			]}
		</Preview>
	</Template>;
};
