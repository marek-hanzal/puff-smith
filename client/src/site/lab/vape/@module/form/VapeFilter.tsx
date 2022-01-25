import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {Button, Collapse, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, Form, FormContext, FormItem, Submit} from "@leight-core/leight";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer";
import {CloseCircleOutlined, SearchOutlined} from "@ant-design/icons";

export interface IVapeFilterProps {
	onFilter: (filter: VapeFilterDto) => void;
	onClear: () => void;
}

export const VapeFilter: FC<IVapeFilterProps> = ({onFilter, onClear}) => {
	const {t} = useTranslation();
	return <Collapse>
		<Collapse.Panel key={'filter'} header={t('lab.vape.filter.title')}>
			<Form<any, VapeFilterDto, VapeFilterDto>
				onSuccess={({response}) => {
					console.log('response', response);
					onFilter(response);
				}}
			>
				<FormContext.Consumer>
					{formContext => <>
						<FormItem
							field={'atomizerIds'}
							labels={['lab.vape.atomizerId.label']}
						>
							<AtomizerSelect mode={'multiple'} allowClear/>
						</FormItem>
						<Divider/>
						<Centered>
							<Space align={'baseline'} split={<Divider type={'vertical'}/>}>
								<Button
									size={'middle'}
									onClick={() => {
										formContext.reset();
										onClear();
									}}
									icon={<CloseCircleOutlined/>}
								>
									{t('common.filter.clear')}
								</Button>
								<Submit
									icon={<SearchOutlined/>}
									label={'common.filter.submit'}
								/>
							</Space>
						</Centered>
					</>}
				</FormContext.Consumer>
			</Form>
		</Collapse.Panel>
	</Collapse>
}
