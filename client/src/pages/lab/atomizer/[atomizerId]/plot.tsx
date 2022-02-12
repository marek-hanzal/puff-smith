import {Divider, Menu} from "antd";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {PlotIcon} from "@/puff-smith";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {AtomizerCreateButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCreateButton";
import {VapeFilter} from "@/puff-smith/site/lab/vape/@module/form/VapeFilter";
import {VapePlot} from "@/puff-smith/site/lab/vape/@module/plot/VapePlot";
import {VapeTable} from "@/puff-smith/site/lab/vape/@module/table/VapeTable";

export default withLabLayout(function Plot() {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.plot"}
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
					selected={['median']}
				/>
				<Divider/>
				<VapeTable defaultFilter={{atomizerIds: [atomizer.id]}} hidden={['atomizer']}/>
			</VapesFilterContext>
		</>}
	</AtomizerPage>;
});
