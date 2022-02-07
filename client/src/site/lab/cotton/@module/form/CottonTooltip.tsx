import {FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useCottonsQueryInvalidate} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {CreateCottonForm} from "@/puff-smith/site/lab/cotton";
import {message} from "antd";

export interface ICottonTooltipProps extends Partial<IFormTooltipProps> {
}

export const CottonTooltip: FC<ICottonTooltipProps> = props => {
	const {t} = useTranslation();
	const cottonsQueryInvalidate = useCottonsQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		label={'lab.cotton'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateCottonForm
				onSuccess={({response}) => {
					message.success(t("lab.cotton.create.success", {data: response}));
					cottonsQueryInvalidate().then(() => {
						drawerContext.setVisible(false);
						formContext.setValues({
							cottonId: response.id,
						});
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
