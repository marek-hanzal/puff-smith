import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {CoilCreateButton, CoilFilter, CoilListButton, CoilTable} from "@/puff-smith/site/lab/coil";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {CoilsFilterContext} from "@/sdk/puff-smith/api/lab/coil/endpoint";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CoilIcon/>{t('lab.coil.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
		<Template
			icon={<CoilIcon/>}
			label={'lab.coil'}
			span={24}
		>
			<ButtonBar>
				<CoilCreateButton type={'primary'}/>
				<CoilListButton size={'middle'}/>
			</ButtonBar>
			<Divider/>
			<CoilsFilterContext>
				<CoilFilter/>
				<CoilTable/>
			</CoilsFilterContext>
		</Template>
		<Divider/>
	</LabPage>;
});
