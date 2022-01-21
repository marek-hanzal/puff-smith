import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {Divider} from "antd";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		{...props}
	>
		<FormItem field={'name'} labels={['lab.build.name.label']} tooltip={t('lab.build.name.label.tooltip')} required/>
		<FormItem
			field={'atomizerId'}
			labels={['lab.build.atomizerId.label']}
			required
			help={<AtomizerTooltip/>}
		>
			<AtomizerSelect/>
		</FormItem>
		<FormItem
			field={'coilId'}
			labels={['lab.build.coilId.label']}
			required
			help={<CoilTooltip/>}
		>
			<CoilSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.build.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
