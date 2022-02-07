import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Breadcrumb, Divider, Space} from "antd";
import {BuildCreateButton, BuildListButton, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {BarChartOutlined} from "@ant-design/icons";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {buildId} = useParams();
	return <BuildPage
		title={"lab.build.plot"}
		menuSelection={['/lab/build']}
		onBack={navigate => navigate('/lab/build/[buildId]', {buildId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
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
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem("lab.build.button.create", "/lab/build/create", <CreateIcon/>)}
			{CreateMenuItem("lab.build.button.list", "/lab/build/list", <ListIcon/>)}
		</LabMenuDrawerButton> : <Space>
			<BuildListButton/>
			<BuildCreateButton type={'primary'}/>
		</Space>}
	>
		{build => <>
			<VapesFilterContext defaultFilter={{buildIds: [build.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
					emptyResultProps={{
						extra: <BuildVapeButton type={'primary'} build={build}/>
					}}
				/>
				<Divider/>
				<VapeTable defaultFilter={{buildIds: [build.id]}} hidden={['atomizer']}/>
			</VapesFilterContext>
			<Divider/>
		</>}
	</BuildPage>;
});
