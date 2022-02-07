import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton, RecentMixtureTable} from "@/puff-smith/site/lab/mixture";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isBrowser} from "react-device-detect";

const MixtureButtonBar = () => {
	return <ButtonBar>
		<MixtureCreateButton type={'primary'}/>
		<MixtureListButton size={'middle'}/>
	</ButtonBar>;
}

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture"}
		menuSelection={['/lab/mixture']}
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
					<MixtureIcon/>{t('lab.mixture.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isBrowser && <MixtureButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<MixtureButtonBar/>
				<Divider/>
			</>}
		>
			<RecentMixtureTable/>
		</Template>
		<Divider/>
	</LabPage>;
});
