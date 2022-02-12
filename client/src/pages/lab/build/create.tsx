import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon, ImageGallery, PlotIcon} from "@/puff-smith";
import {BuildComments, BuildPreviewButton, CreateBuildForm, ICreateBuildFormProps} from "@/puff-smith/site/lab/build";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, CreateIcon, DrawerButton, HomeIcon, Template, useIsMobile, useParams} from "@leight-core/leight";
import {Col, List, Row, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {useVapesOptionalFilterContext, VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC, useEffect, useState} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer";
import {CommentsFilterContext as AtomizerCommentsFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {CommentsFilterContext as BuildCommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildsSource, BuildsSourceConsumer} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {CoilInline} from "@/puff-smith/site/lab/coil";

const Form: FC<Partial<ICreateBuildFormProps> & { setBuildFilter: (filter: VapeFilterDto) => void }> = ({setBuildFilter, ...props}) => {
	const filterContext = useVapesOptionalFilterContext();
	useEffect(() => {
		filterContext?.setFilter({
			coilSize: 0.3,
		});
	}, []);
	return <CreateBuildForm
		onSuccess={({navigate, response}) => {
			navigate('/lab/build/[buildId]', {buildId: response.id});
		}}
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

interface IComposeFormProps extends Partial<ICreateBuildFormProps> {
	defaultBuildFilter?: VapeFilterDto;
}

const ComposeForm: FC<IComposeFormProps> = ({defaultBuildFilter, ...props}) => {
	const isMobile = useIsMobile();
	const [buildFilter, setBuildFilter] = useState<VapeFilterDto | undefined>(defaultBuildFilter);
	const filterContext = useVapesOptionalFilterContext();
	const {t} = useTranslation();

	useEffect(() => {
		filterContext?.setFilter(defaultBuildFilter);
	}, []);

	return !isMobile ? <Row gutter={32}>
		<Col span={10}>
			<Form setBuildFilter={setBuildFilter} {...props}/>
		</Col>
		<Col span={14}>
			<Tabs
				destroyInactiveTabPane
			>
				<Tabs.TabPane key={'plot'} tab={t('lab.build.create.plot.tab')}>
					<Plot buildFilter={buildFilter}/>
				</Tabs.TabPane>
				{buildFilter?.atomizerIds?.length && <Tabs.TabPane key={'build.comment'} tab={t('lab.build.create.build.comments.tab')}>
					<BuildCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
						<BuildComments/>
					</BuildCommentsFilterContext>
				</Tabs.TabPane>}
				{buildFilter?.atomizerIds?.length && <Tabs.TabPane key={'atomizer.comment'} tab={t('lab.build.create.atomizer.comments.tab')}>
					{buildFilter?.atomizerIds?.[0] ? <AtomizerCommentsFilterContext defaultFilter={{atomizerId: buildFilter.atomizerIds[0]}}>
						<AtomizerComments/>
					</AtomizerCommentsFilterContext> : null}
				</Tabs.TabPane>}
				{buildFilter?.atomizerIds?.length && <Tabs.TabPane key={'vape.comment'} tab={t('lab.build.create.vape.comments.tab')}>
					<VapeCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
						<VapeComments/>
					</VapeCommentsFilterContext>
				</Tabs.TabPane>}
				{buildFilter?.atomizerIds?.length && <Tabs.TabPane key={'build.other'} tab={t('lab.build.create.other.tab')}>
					<BuildsSource filter={{atomizerIds: buildFilter?.atomizerIds}}>
						<BuildsSourceConsumer>
							{sourceContext => sourceContext.hasData() ? <>
								<List itemLayout={'vertical'} pagination={sourceContext.pagination()}>
									{sourceContext.map(build => <List.Item key={build.id}>
										<List.Item.Meta
											title={<BuildPreviewButton build={build}/>}
											description={<CoilInline inline coil={build.coil}/>}
										/>
										<ImageGallery hideEmpty size={2} gallery={'/build/image/' + build.id}/>
									</List.Item>)}
								</List>
							</> : <Template
								icon={<BuildIcon/>}
								label={'lab.build.other.no-builds'}
							/>}
						</BuildsSourceConsumer>
					</BuildsSource>
				</Tabs.TabPane>}
			</Tabs>
		</Col>
	</Row> : <>
		<Form
			setBuildFilter={setBuildFilter}
			buttons={<DrawerButton icon={<PlotIcon/>} type={'link'} title={'lab.build.create.preview.button'}>
				<Plot/>
			</DrawerButton>}
			{...props}
		/>
	</>
}

export default withLabLayout(function Create() {
	const {atomizerId} = useParams();
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
			<BreadcrumbIcon
				icon={<CreateIcon/>}
				label={'lab.build.create.label'}
			/>
		</Breadcrumbs>}
	>
		<VapesFilterContext>
			<ComposeForm
				toForm={() => ({atomizerId})}
				defaultBuildFilter={{atomizerIds: atomizerId ? [atomizerId] : undefined}}
			/>
		</VapesFilterContext>
	</LabPage>;
});
