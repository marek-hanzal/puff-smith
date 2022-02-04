import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Divider, message} from "antd";
import {Card, Centered, FormItem, Submit, useOptionalDrawerContext} from "@leight-core/leight";
import {MixtureSelect, MixtureTooltip} from "@/puff-smith/site/lab/mixture";
import {DriptipSelect, DriptipTooltip} from "@/puff-smith/site/lab/driptip";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {BuildSelect, BuildTooltip} from "@/puff-smith/site/lab/build";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";
import {VapeIcon} from "@/puff-smith";

export interface ICreateVapeFormProps extends Partial<ICreateDefaultFormProps> {
	vape?: Partial<VapeDto>;
	exclude?: string[];
}

export const CreateVapeForm: FC<ICreateVapeFormProps> = ({vape, exclude = [], ...props}) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.vape.created.message", {data: response}));
			drawerContext ? drawerContext.setVisible(false) : navigate("/lab/vape/list");
			vapesQueryInvalidate();
		}}
		toForm={() => vape}
		toMutation={values => ({
			...values,
			rating: 0,
			taste: 0,
			airflow: 2,
			juice: 2,
			mtl: 0,
			dl: 0,
			clouds: 0,
			leaks: 0,
			dryhit: 0,
		})}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			{exclude?.includes('buildId') ?
				<FormItem field={'buildId'} hidden/> :
				<FormItem
					field={'buildId'}
					labels={['lab.vape.buildId.label']}
					required
					help={<BuildTooltip/>}
				>
					<BuildSelect/>
				</FormItem>
			}
			<FormItem
				field={'mixtureId'}
				labels={['lab.vape.mixtureId.label']}
				required
				help={<MixtureTooltip/>}
			>
				<MixtureSelect/>
			</FormItem>
			<FormItem
				field={'modId'}
				labels={['lab.vape.modId.label']}
				required
				help={<ModTooltip/>}
			>
				<ModSelect/>
			</FormItem>
			<FormItem
				field={'driptipId'}
				labels={['lab.vape.driptipId.label']}
				help={<DriptipTooltip/>}
			>
				<DriptipSelect allowClear/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'lab.vape.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
