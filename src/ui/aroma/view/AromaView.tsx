import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {VgPgInline} from "@/puff-smith/component/inline/VgPgInline";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {AromaContentInline} from "@/puff-smith/ui/aroma/inline/AromaContentInline";
import {ITemplateProps, Preview, Tags, Template} from "@leight-core/client";
import dayjs from "dayjs";
import {FC} from "react";

export interface IAromaViewProps extends Partial<ITemplateProps> {
	aroma: IAroma;
}

export const AromaView: FC<IAromaViewProps> = ({aroma, ...props}) => {
	return <Template
		title={aroma.name}
		subTitle={aroma.vendor.name}
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
						tastes: aroma.tastes ? <Tags tags={aroma.tastes} translation={"common"}/> : undefined,
						vgpg: <VgPgInline vgpg={aroma}/>,
						content: <AromaContentInline aroma={aroma}/>,
						steep: aroma.steep ? dayjs.duration(aroma.steep, "days").humanize() : undefined,
					},
				},
				{
					name: "more",
					items: {
						nicotine: <NicotineInline nicotine={aroma.nicotine}/>,
					},
				},
			]}
		</Preview>
	</Template>;
};
