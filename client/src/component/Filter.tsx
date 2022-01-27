import {useTranslation} from "react-i18next";
import {Button, Collapse, Divider, Space} from "antd";
import {CloseCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {FC} from "react";
import {Centered, Form, FormContext, Submit} from "@leight-core/leight";

export interface IFilterProps {
	translation: string;
	onFilter: (filter: any) => void;
	onClear: () => void;
}

export const Filter: FC<IFilterProps> = ({translation, onFilter, onClear, children}) => {
	const {t} = useTranslation();
	return <Collapse>
		<Collapse.Panel key={'filter'} header={t(translation + '.filter.title')}>
			<Form
				onSuccess={({response}) => onFilter(response)}
			>
				<FormContext.Consumer>
					{formContext => <>
						{children}
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
