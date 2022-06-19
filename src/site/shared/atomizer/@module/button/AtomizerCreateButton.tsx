import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {AtomizerCreateForm} from "@/puff-smith/site/shared/atomizer/@module/form/AtomizerCreateForm";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const AtomizerCreateButton: FC<IAtomizerCreateButtonProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.atomizer.create.title"}
		label={"market.atomizer.create.button"}
		icon={<AtomizerIcon/>}
		width={960}
		{...props}
	>
		<AtomizerCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
