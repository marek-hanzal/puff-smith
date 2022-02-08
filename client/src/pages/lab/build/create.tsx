import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {BuildListButton, CreateBuildForm} from "@/puff-smith/site/lab/build";
import {CreateIcon, CreateMenuItem, HomeIcon, ListIcon} from "@leight-core/leight";
import {Col, Row, Space} from "antd";
import {useTranslation} from "react-i18next";
import {Breadcrumbs, ButtonBar} from "@leight-core/leight/dist";
import {useVapesOptionalFilterContext, VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeFilter, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC} from "react";
import {isBrowser} from "react-device-detect";

interface IComposeFormProps {
}

const ComposeForm: FC<IComposeFormProps> = () => {
	const filterContext = useVapesOptionalFilterContext();
	return <Row gutter={32}>
		<Col span={14}>
			<CreateBuildForm
				onValuesChange={(_, values) => {
					filterContext?.setFilter({
						...filterContext.filter,
						atomizerIds: [values?.atomizerId].filter(i => i),
						wireIds: [values?.coil?.wireId].filter(i => i),
						coilSize: values?.coil?.size,
						buildOhm: values?.ohm ? [values?.ohm - 0.075, values?.ohm + 0.075].filter(i => i) : undefined,
					});
				}}
			/>
		</Col>
		<Col span={10}>
			<VapeFilter/>
			<VapePlot
				selected={['median']}
			/>
			<VapeTable
				forceList
			/>
		</Col>
	</Row>;
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
		{isBrowser ? <VapesFilterContext>
			<ComposeForm/>
		</VapesFilterContext> : <CreateBuildForm/>}
	</LabPage>;
});
