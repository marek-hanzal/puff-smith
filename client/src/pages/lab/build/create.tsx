import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, PlotIcon} from "@/puff-smith";
import {BuildListButton, CreateBuildForm, ICreateBuildFormProps} from "@/puff-smith/site/lab/build";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Col, Row, Space, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {useVapesOptionalFilterContext, VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC, useEffect, useState} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {isBrowser} from "react-device-detect";
import {DrawerButton} from "@leight-core/leight/dist";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer";
import {CommentsFilterContext as AtomizerCommentsFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";

const Form: FC<Partial<ICreateBuildFormProps> & { setBuildFilter: (filter: VapeFilterDto) => void }> = ({setBuildFilter, ...props}) => {
	const filterContext = useVapesOptionalFilterContext();
	useEffect(() => {
		filterContext?.setFilter({
			coilSize: 0.3,
		});
	}, []);
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
		<VapeFilter
			onClear={() => filterContext?.setFilter(buildFilter)}
			disabled={['rate']}
		/>
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
	const {t} = useTranslation();
	return isBrowser ? <Row gutter={32}>
		<Col span={12}>
			<Form setBuildFilter={setBuildFilter}/>
		</Col>
		<Col span={12}>
			<Tabs destroyInactiveTabPane>
				<Tabs.TabPane key={'plot'} tab={t('lab.build.create.plot.tab')}>
					<Plot buildFilter={buildFilter}/>
				</Tabs.TabPane>
				<Tabs.TabPane disabled={!buildFilter?.atomizerIds?.length} key={'atomizer.comment'} tab={t('lab.build.create.atomizer.comments.tab')}>
					{buildFilter?.atomizerIds?.[0] ? <AtomizerCommentsFilterContext defaultFilter={{atomizerId: buildFilter.atomizerIds[0]}}>
						<AtomizerComments/>
					</AtomizerCommentsFilterContext> : null}
				</Tabs.TabPane>
				<Tabs.TabPane disabled={!buildFilter?.atomizerIds?.length} key={'vape.comment'} tab={t('lab.build.create.vape.comments.tab')}>
					<VapeCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
						<VapeComments/>
					</VapeCommentsFilterContext>
				</Tabs.TabPane>
			</Tabs>
		</Col>
	</Row> : <>
		<Form
			setBuildFilter={setBuildFilter}
			buttons={<DrawerButton icon={<PlotIcon/>} type={'link'} title={'lab.build.create.preview.button'}>
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
