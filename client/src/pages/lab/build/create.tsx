import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {BuildListButton, CreateBuildForm, ICreateBuildFormProps} from "@/puff-smith/site/lab/build";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Col, Row, Space} from "antd";
import {useTranslation} from "react-i18next";
import {useVapesOptionalFilterContext, VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC, useState} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {isBrowser} from "react-device-detect";
import {DrawerButton} from "@leight-core/leight/dist";

const Form: FC<Partial<ICreateBuildFormProps> & { setBuildFilter: (filter: VapeFilterDto) => void }> = ({setBuildFilter, ...props}) => {
	const filterContext = useVapesOptionalFilterContext();
	return <CreateBuildForm
		onValuesChange={(_, values) => {
			const filter = {
				atomizerIds: values?.atomizerId ? [values?.atomizerId] : undefined,
				wireIds: values?.coil?.wireId ? [values?.coil?.wireId] : undefined,
				coilSize: values?.coil?.size,
				buildOhm: values?.ohm ? [values?.ohm - 0.075, values?.ohm + 0.075] : undefined,
			};
			setBuildFilter(filter)
			filterContext?.setFilter({
				...filterContext.filter,
				...filter,
			});
		}}
		{...props}
	/>
}

const Plot: FC<{ buildFilter?: VapeFilterDto }> = ({buildFilter}) => {
	const filterContext = useVapesOptionalFilterContext();
	return <>
		<VapeFilter onClear={() => filterContext?.setFilter(buildFilter)}/>
		<VapePlot
			selected={['median']}
		/>
		<VapeTable
			forceList
		/>
	</>
}

interface IComposeFormProps {
}

const ComposeForm: FC<IComposeFormProps> = () => {
	const [buildFilter, setBuildFilter] = useState<VapeFilterDto>();
	return isBrowser ? <Row gutter={32}>
		<Col span={14}>
			<Form setBuildFilter={setBuildFilter}/>
		</Col>
		<Col span={10}>
			<Plot buildFilter={buildFilter}/>
		</Col>
	</Row> : <>
		<Form
			setBuildFilter={setBuildFilter}
			buttons={<DrawerButton type={'link'} title={'lab.build.create.preview.button'}>
				<Plot/>
			</DrawerButton>}
		/>
	</>
}

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/build'}
				title={'lab.build.label'}
			/>
			<BreadcrumbButton
				href={'/lab/build/list'}
				title={'lab.build.list.label'}
			/>
			<Space size={'small'}>
				<CreateIcon/>{t('lab.build.create.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<BuildListButton/>
		</ButtonBar>}
	>
		<VapesFilterContext>
			<ComposeForm/>
		</VapesFilterContext>
	</LabPage>;
});
