import {useTranslation} from "react-i18next";
import {Button, Divider, Space} from "antd";
import {CloseCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {FC} from "react";
import {Centered, DrawerButton, DrawerContext, Form, Submit, useDrawerContext, useFormContext} from "@leight-core/leight";

interface IFilterInternalProps {
	onClear: () => void;
}

const FilterInternal: FC<IFilterInternalProps> = ({onClear, children}) => {
	const {t} = useTranslation();
	const formContext = useFormContext();
	const drawerContext = useDrawerContext();
	return <>
		{children}
		<Divider/>
		<Centered>
			<Space align={'baseline'} split={<Divider type={'vertical'}/>}>
				<Button
					size={'middle'}
					onClick={() => {
						formContext.reset();
						onClear();
						drawerContext && drawerContext.setVisible(false);
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
	</>
}

export interface IFilterProps {
	filter: any;
	translation: string;
	onFilter: (filter: any) => void;
	onClear: () => void;
}

export type IFilterWithoutTranslationProps = Omit<IFilterProps, "translation">;

export const Filter: FC<IFilterProps> = ({filter, translation, onFilter, ...props}) => {
	return <DrawerButton
		icon={<SearchOutlined/>}
		type={'link'}
		size={'small'}
		title={translation + '.filter.title'}
		label={translation + '.filter.title'}
		width={600}
	>
		<DrawerContext.Consumer>
			{drawerContext => <Form
				toForm={() => filter}
				onSuccess={({response}) => {
					onFilter(response);
					drawerContext.setVisible(false);
				}}
			>
				<FilterInternal {...props}/>
			</Form>}
		</DrawerContext.Consumer>
	</DrawerButton>
}
