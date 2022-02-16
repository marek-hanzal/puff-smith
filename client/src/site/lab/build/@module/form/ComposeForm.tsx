import {FC, useEffect, useState} from "react";
import {CreateBuildForm, ICreateBuildFormProps} from "@/puff-smith/site/lab/build/@module/form/CreateBuildForm";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {useVapesOptionalFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";
import {useTranslation} from "react-i18next";
import {List, Tabs} from "antd";
import {CommentsFilterContext as BuildCommentsFilterContext} from "@/sdk/puff-smith/api/lab/build/comment/endpoint";
import {BuildComments} from "@/puff-smith/site/lab/build/@module/component/BuildComments";
import {CommentsFilterContext as AtomizerCommentsFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/comment/endpoint";
import {AtomizerComments} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerComments";
import {CommentsFilterContext as VapeCommentsFilterContext} from "@/sdk/puff-smith/api/lab/vape/comment/endpoint";
import {VapeComments} from "@/puff-smith/site/lab/vape/@module/component/VapeComments";
import {BuildsSource, BuildsSourceConsumer} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildPreviewButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildPreviewButton";
import {CoilInline} from "@/puff-smith/site/lab/coil/@module/component/CoilInline";
import {BuildIcon, ImageGallery} from "@/puff-smith";
import {Template} from "@leight-core/leight";

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
		onValuesChange={({values}) => {
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

export interface IComposeFormProps extends Partial<ICreateBuildFormProps> {
	defaultBuildFilter?: VapeFilterDto;
}

export const ComposeForm: FC<IComposeFormProps> = ({defaultBuildFilter, ...props}) => {
	const [buildFilter, setBuildFilter] = useState<VapeFilterDto | undefined>(defaultBuildFilter);
	const filterContext = useVapesOptionalFilterContext();
	const {t} = useTranslation();
	const hasAtomizer = buildFilter?.atomizerIds?.length;

	useEffect(() => {
		filterContext?.setFilter(defaultBuildFilter);
	}, []);

	return <Tabs
		destroyInactiveTabPane
	>
		<Tabs.TabPane key={'form'} tab={t('lab.build.create.form.tab')}>
			<Form setBuildFilter={setBuildFilter} {...props}/>
		</Tabs.TabPane>
		<Tabs.TabPane key={'plot'} tab={t('lab.build.create.plot.tab')}>
			<Plot buildFilter={buildFilter}/>
		</Tabs.TabPane>
		<Tabs.TabPane key={'build.comment'} tab={t('lab.build.create.build.comments.tab')} disabled={!hasAtomizer}>
			<BuildCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
				<BuildComments/>
			</BuildCommentsFilterContext>
		</Tabs.TabPane>
		<Tabs.TabPane key={'atomizer.comment'} tab={t('lab.build.create.atomizer.comments.tab')} disabled={!hasAtomizer}>
			<AtomizerCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
				<AtomizerComments/>
			</AtomizerCommentsFilterContext>
		</Tabs.TabPane>
		<Tabs.TabPane key={'vape.comment'} tab={t('lab.build.create.vape.comments.tab')} disabled={!hasAtomizer}>
			<VapeCommentsFilterContext defaultFilter={{atomizerIds: buildFilter?.atomizerIds}}>
				<VapeComments/>
			</VapeCommentsFilterContext>
		</Tabs.TabPane>
		<Tabs.TabPane key={'build.other'} tab={t('lab.build.create.other.tab')} disabled={!hasAtomizer}>
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
		</Tabs.TabPane>
	</Tabs>
}
