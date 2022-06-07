import {IBuild} from "@/puff-smith/service/build/interface";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {BuildTasteRatingButton} from "@/puff-smith/site/lab/build/liquid/@module/button/BuildTasteRatingButton";
import {useBuildTasteGenerateMutation} from "@/sdk/api/lab/build/liquid/taste/generate";
import {BuildLiquidTasteRatingListSource, IBuildLiquidTasteRatingListSourceProps, useBuildLiquidTasteRatingCountQueryInvalidate, useBuildLiquidTasteRatingQueryInvalidate} from "@/sdk/api/lab/build/liquid/taste/query";
import Icon from "@ant-design/icons";
import {ListItem, ListItemMeta, Template} from "@leight-core/client";
import {Button, Divider} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IoFileTrayFullOutline, IoFileTrayOutline, IoFlowerOutline} from "react-icons/io5";

export interface IBuildLiquidTasteRatingListProps extends Partial<IBuildLiquidTasteRatingListSourceProps> {
	build: IBuild;
	liquid: ILiquid;
}

export const BuildLiquidTasteRatingList: FC<IBuildLiquidTasteRatingListProps> = ({build, liquid, ...props}) => {
	const {t} = useTranslation();
	const buildTasteGenerateMutation = useBuildTasteGenerateMutation();
	const buildLiquidTasteRatingQueryInvalidate = useBuildLiquidTasteRatingQueryInvalidate();
	const buildLiquidTasteRatingCountQueryInvalidate = useBuildLiquidTasteRatingCountQueryInvalidate();
	return <BuildLiquidTasteRatingListSource
		size={"small"}
		locale={{
			emptyText: build.active ? <Template
				icon={<Icon component={IoFileTrayOutline}/>}
				label={"lab.build.liquid.taste.list.rating.empty"}
				extra={<Divider/>}
			>
				<Button
					size={"large"}
					type={"primary"}
					icon={<Icon component={IoFileTrayFullOutline}/>}
					loading={buildTasteGenerateMutation.isLoading}
					onClick={() => {
						buildTasteGenerateMutation.mutate({
							buildId: build.id,
							liquidId: liquid.id,
						}, {
							onSuccess: async () => {
								await buildLiquidTasteRatingQueryInvalidate();
								await buildLiquidTasteRatingCountQueryInvalidate();
							},
						});
					}}
				>
					{t("lab.build.liquid.taste.generate.button")}
				</Button>
			</Template> : <Template
				icon={<Icon component={IoFlowerOutline}/>}
				status={"warning"}
				label={"lab.build.liquid.taste.rating.disabled"}
			/>,
		}}
		{...props}
	>
		{buildLiquidTasteRating => <ListItem
			key={buildLiquidTasteRating.id}
			extra={<BuildTasteRatingButton taste={buildLiquidTasteRating}/>}
		>
			<ListItemMeta
				title={t(`common.taste.${buildLiquidTasteRating.taste.code}`)}
			/>
		</ListItem>}
	</BuildLiquidTasteRatingListSource>;
};
