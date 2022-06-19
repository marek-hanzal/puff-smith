import {RowInline} from "@/puff-smith/component/RowInline";
import {IBuild} from "@/puff-smith/service/build/interface";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {BuildLiquidTasteGenerateButton} from "@/puff-smith/site/lab/build/liquid/@module/button/BuildLiquidTasteGenerateButton";
import {BuildTasteRatingButton} from "@/puff-smith/site/lab/build/liquid/@module/button/BuildTasteRatingButton";
import {BuildLiquidTasteRatingListSource, IBuildLiquidTasteRatingListSourceProps} from "@/sdk/api/lab/build/liquid/taste/query";
import Icon from "@ant-design/icons";
import {ListItem, ListItemMeta, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IoFileTrayOutline, IoFlowerOutline} from "react-icons/io5";

export interface IBuildLiquidTasteRatingListProps extends Partial<IBuildLiquidTasteRatingListSourceProps> {
	build: IBuild;
	liquid: ILiquid;
}

export const BuildLiquidTasteRatingList: FC<IBuildLiquidTasteRatingListProps> = ({build, liquid, ...props}) => {
	const {t} = useTranslation();
	return <BuildLiquidTasteRatingListSource
		size={"small"}
		header={() => <RowInline
			extra={<BuildLiquidTasteGenerateButton
				type={"link"}
				size={"small"}
				build={build}
				liquid={liquid}
			>
				{t("lab.build.liquid.taste.generate.refresh.button")}
			</BuildLiquidTasteGenerateButton>}
		/>}
		locale={{
			emptyText: build.active ? <Template
				icon={<Icon component={IoFileTrayOutline}/>}
				label={"lab.build.liquid.taste.list.rating.empty"}
				extra={<Divider/>}
			/> : <Template
				icon={<Icon component={IoFlowerOutline}/>}
				status={"warning"}
				label={"lab.build.liquid.taste.rating.disabled"}
			/>,
		}}
		{...props}
	>
		{buildLiquidTasteRating => <ListItem
			key={buildLiquidTasteRating.id}
			extra={<BuildTasteRatingButton disabled={!build.active} taste={buildLiquidTasteRating}/>}
		>
			<ListItemMeta
				title={t(`common.taste.${buildLiquidTasteRating.taste.code}`)}
			/>
		</ListItem>}
	</BuildLiquidTasteRatingListSource>;
};
