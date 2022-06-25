import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {AtomizerCreateForm} from "@/puff-smith/site/shared/atomizer/@module/form/AtomizerCreateForm";
import {ICreateDefaultFormProps} from "@/sdk/api/atomizer/create";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerCreateButtonProps extends Partial<IDrawerButtonProps> {
	onSuccess?: ICreateDefaultFormProps["onSuccess"];
}

export const AtomizerCreateButton: FC<IAtomizerCreateButtonProps> = ({onSuccess, ...props}) => {
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
			onSuccess={({response, ...rest}) => {
				formItem?.setValue(response.id);
				onSuccess?.({response, ...rest});
			}}
		/>
	</DrawerButton>;
};
