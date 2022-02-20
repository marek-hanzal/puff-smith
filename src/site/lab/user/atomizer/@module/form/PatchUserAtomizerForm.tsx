import {IPatchDefaultFormProps, PatchDefaultForm, useUserAtomizerQueryInvalidate, useUserAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";
import {FC} from "react";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {useTranslation} from "react-i18next";
import {Divider, message} from "antd";
import {Centered, EditIcon, FormItem, Submit} from "@leight-core/leight";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";

export interface IPatchUserAtomizerFormProps extends Partial<IPatchDefaultFormProps> {
	userAtomizer: UserAtomizerDto;
}

export const PatchUserAtomizerForm: FC<IPatchUserAtomizerFormProps> = ({userAtomizer, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const userAtomizersQueryInvalidate = useUserAtomizersQueryInvalidate();
	const userAtomizerQueryInvalidate = useUserAtomizerQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.atomizer.user'}
		toForm={() => ({
			...userAtomizer,
		})}
		toMutation={values => ({
			...values,
			...{id: userAtomizer.id}
		})}
		onSuccess={response => {
			message.success(t("lab.atomizer.user.update.success", {data: response.response}));
			userAtomizerQueryInvalidate();
			userAtomizersQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'driptipId'}
			hasTooltip
			help={<DriptipTooltip/>}
		>
			<DriptipSelect allowClear/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<EditIcon/>} label={'update'}/>
		</Centered>
	</PatchDefaultForm>
}
