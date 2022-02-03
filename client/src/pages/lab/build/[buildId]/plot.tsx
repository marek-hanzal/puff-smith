import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {BuildCreateButton, BuildListButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FilterContextProvider, QuickMenu} from "@leight-core/leight";
import {ButtonLink, HomeIcon, useParams} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilterDto} from "@/sdk/puff-smith/vape/dto";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.plot"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build/[buildId]'}
					query={{buildId}}
					title={'lab.build.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BarChartOutlined/>{t('lab.build.plot.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<FilterContextProvider<VapeFilterDto> defaultFilter={{buildIds: [build.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
					emptyResultProps={{
						extra: <BuildVapeButton type={'primary'} build={build}/>
					}}
				/>
				<Divider/>
				<VapeTable defaultFilter={{buildIds: [build.id]}}/>
			</FilterContextProvider>
			<Divider/>
		</>}
	</BuildPage>;
});
