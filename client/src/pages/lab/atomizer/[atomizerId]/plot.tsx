import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Divider, Menu} from "antd";
import {AtomizerCreateButton} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";
import {PlotIcon} from "@/puff-smith";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.plot"}
		collapsed
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/[atomizerId]', {atomizerId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer'}
				title={'lab.atomizer.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/[atomizerId]'}
				query={{atomizerId}}
				title={'lab.atomizer.index.label'}
			/>
			<BreadcrumbIcon
				icon={<PlotIcon/>}
				label={'lab.atomizer.plot.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<AtomizerCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <>
			<VapesFilterContext defaultFilter={{atomizerIds: [atomizer.id]}}>
				<VapeFilter disabled={['atomizerIds']}/>
				<VapePlot
					selected={['median', 'count']}
				/>
				<Divider/>
				<VapeTable defaultFilter={{atomizerIds: [atomizer.id]}} hidden={['atomizer']}/>
			</VapesFilterContext>
		</>}
	</AtomizerPage>;
});
