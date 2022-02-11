import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ImageGallery, PlotIcon} from "@/puff-smith";
import {BuildComments, CreateBuildForm, ICreateBuildFormProps} from "@/puff-smith/site/lab/build";
import {Breadcrumbs, CreateIcon, HomeIcon} from "@leight-core/leight";
import {Col, List, Row, Tabs} from "antd";
import {useTranslation} from "react-i18next";
import {useVapesOptionalFilterContext, VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeComments, VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC, useEffect, useState} from "react";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {isBrowser} from "react-device-detect";
import {BreadcrumbButton, BreadcrumbIcon, DrawerButton} from "@leight-core/leight/dist";
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

interface IComposeFormProps {
}

const ComposeForm: FC<IComposeFormProps> = () => {
	const [buildFilter, setBuildFilter] = useState<VapeFilterDto>();
	const {t} = useTranslation();
	return isBrowser ? <Row gutter={32}>
		<Col span={10}>
			<Form setBuildFilter={setBuildFilter}/>
		</Col>
		<Col span={14}>
			<Tabs destroyInactiveTabPane>
				<Tabs.TabPane key={'plot'} tab={t('lab.build.create.plot.tab')}>
					<Plot buildFilter={buildFilter}/>
				</Tabs.TabPane>
				<Tabs.TabPane disabled={!buildFilter?.atomizerIds?.length} key={'build.comment'} tab={t('lab.build.create.build.comments.tab')}>
					<BuildCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
						<BuildComments/>
					</BuildCommentsFilterContext>
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
				<Tabs.TabPane disabled={!buildFilter?.atomizerIds?.length} key={'build.images'} tab={t('lab.build.create.vape.images.tab')}>
					<BuildsSource filter={{atomizerIds: buildFilter?.atomizerIds}}>
						<BuildsSourceConsumer>
							{sourceContext => sourceContext.result.isSuccess && <>
								<List itemLayout={'vertical'} pagination={sourceContext.pagination()}>
									{sourceContext.result.data.items.map(build => <List.Item key={build.id}>
										<List.Item.Meta
											description={<CoilInline inline coil={build.coil}/>}
										/>
										<ImageGallery hideEmpty size={2} gallery={'/build/image/' + build.id}/>
									</List.Item>)}
								</List>
							</>}
						</BuildsSourceConsumer>
					</BuildsSource>
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
			<ComposeForm/>
		</VapesFilterContext>
	</LabPage>;
});
