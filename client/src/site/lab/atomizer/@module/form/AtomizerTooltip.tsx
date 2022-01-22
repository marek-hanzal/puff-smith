import {FC} from "react";
import {CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerIcon, FormTooltip, IFormTooltipProps} from "@/puff-smith";
import {DrawerContext, useFormContext} from "@leight-core/leight";
import {message} from "antd";
import {useTranslation} from "react-i18next";
import {useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";

export interface IAtomizerTooltipProps extends Partial<IFormTooltipProps> {
}

export const AtomizerTooltip: FC<IAtomizerTooltipProps> = props => {
	const {t} = useTranslation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	const formContext = useFormContext();
	return <FormTooltip
		icon={<AtomizerIcon/>}
		label={'lab.atomizer'}
		{...props}
	>
		<DrawerContext.Consumer>
			{drawerContext => <CreateAtomizerForm
				onSuccess={({response}) => {
					message.success(t("lab.atomizer.create.success", {data: response}));
					atomizersQueryInvalidate();
					drawerContext.setVisible(false);
					formContext.setValues({
						atomizerId: response.id,
					});
				}}
			/>}
		</DrawerContext.Consumer>
	</FormTooltip>
}
