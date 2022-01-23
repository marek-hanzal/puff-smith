import {BuildIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateBuildForm} from "@/puff-smith/site/lab/build";
import {message} from "antd";

export interface IBuildTooltipProps extends Partial<IFormTooltipProps> {
}

export const BuildTooltip: FC<IBuildTooltipProps> = props => {
	const {t} = useTranslation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<BuildIcon/>}
		label={'lab.build'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateBuildForm
				onSuccess={({response}) => {
					message.success(t("lab.build.create.success", {data: response}));
					buildsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							buildId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
