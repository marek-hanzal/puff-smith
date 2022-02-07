import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateMixtureForm, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {CreateIcon, CreateTemplate, HomeIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.create"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture'}
					title={'lab.mixture.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/mixture/list'}
					title={'lab.mixture.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.mixture.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <Space>
			<MixtureListButton/>
		</Space>}
	>
		<CreateTemplate>
			<CreateMixtureForm/>
		</CreateTemplate>
	</LabPage>;
});
