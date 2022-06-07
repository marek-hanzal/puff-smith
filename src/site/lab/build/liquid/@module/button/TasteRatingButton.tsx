import {IBuild} from "@/puff-smith/service/build/interface";
import {IBuildLiquid} from "@/puff-smith/service/build/liquid/interface";
import {BuildLiquidTasteRatingList} from "@/puff-smith/site/lab/build/liquid/@module/list/BuildLiquidTasteRatingList";
import {AromaNameInline} from "@/puff-smith/site/shared/aroma/@module/inline/AromaNameInline";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {BuildLiquidTasteRatingProviderControl} from "@/sdk/api/lab/build/liquid/taste/query";
import Icon from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, Template} from "@leight-core/client";
import {Divider, Tooltip} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IoFlowerOutline} from "react-icons/io5";

export interface ITasteRatingButtonProps extends Partial<IDrawerButtonProps> {
	build: IBuild;
	liquid: IBuildLiquid;
}

export const TasteRatingButton: FC<ITasteRatingButtonProps> = ({build, liquid, ...props}) => {
	const {t} = useTranslation();
	return <Tooltip title={t("lab.build.liquid.taste.rating.tooltip")}>
		<DrawerButton
			size={"large"}
			type={"link"}
			icon={<Icon component={IoFlowerOutline}/>}
			title={"lab.build.liquid.taste.rating.title"}
			{...props}
		>
			<Template
				title={<AtomizerNameInline atomizer={build.atomizer}/>}
				subTitle={<>
					<AromaNameInline aroma={liquid.mixture.aroma}/>
					<Divider/>
				</>}
				span={24}
			>
				{liquid.mixture.aroma.tastes.length > 0 &&
					<BuildLiquidTasteRatingProviderControl
						applyFilter={{
							liquidId: liquid.id,
							buildId: build.id,
						}}
					>
						<BuildLiquidTasteRatingList build={build} liquid={liquid}/>
					</BuildLiquidTasteRatingProviderControl>}
				{!liquid.mixture.aroma.tastes.length &&
					<Template
						icon={<Icon component={IoFlowerOutline}/>}
						label={"lab.build.liquid.taste.rating.no-tastes"}
					/>}
			</Template>
		</DrawerButton>
	</Tooltip>;
};
