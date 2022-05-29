import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {AtomizerSelect} from "@/puff-smith/site/inventory/atomizer/@module/form/AtomizerSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/lab/build/create";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBuildCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const BuildCreateForm: FC<IBuildCreateFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.build.create.success", response));
			navigate("/lab/build");
		}}
		translation={"lab.build.create"}
		toForm={() => ({
			archive: true,
		})}
		{...props}
	>
		<FormItem field={"atomizerId"} required>
			<AtomizerSelect/>
		</FormItem>
		<FormItem field={"coilId"} required>
		</FormItem>
		<SwitchItem field={"archive"} hasTooltip/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
