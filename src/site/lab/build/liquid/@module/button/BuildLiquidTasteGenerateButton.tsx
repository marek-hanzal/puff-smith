import {IBuild} from "@/puff-smith/service/build/interface";
import {ILiquid} from "@/puff-smith/service/liquid/interface";
import {useBuildTasteGenerateMutation} from "@/sdk/api/lab/build/liquid/taste/generate";
import {useBuildLiquidTasteRatingCountQueryInvalidate, useBuildLiquidTasteRatingQueryInvalidate} from "@/sdk/api/lab/build/liquid/taste/query";
import Icon from "@ant-design/icons";
import {Button, ButtonProps} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {IoFileTrayFullOutline} from "react-icons/io5";

export interface IBuildLiquidTasteGenerateButtonProps extends Partial<ButtonProps> {
	build: IBuild;
	liquid: ILiquid;
}

export const BuildLiquidTasteGenerateButton: FC<IBuildLiquidTasteGenerateButtonProps> = ({build, liquid, ...props}) => {
	const {t} = useTranslation();
	const buildTasteGenerateMutation = useBuildTasteGenerateMutation();
	const buildLiquidTasteRatingQueryInvalidate = useBuildLiquidTasteRatingQueryInvalidate();
	const buildLiquidTasteRatingCountQueryInvalidate = useBuildLiquidTasteRatingCountQueryInvalidate();
	props.children = props.children || t("lab.build.liquid.taste.generate.button");
	return <Button
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
		{...props}
	/>;
};
