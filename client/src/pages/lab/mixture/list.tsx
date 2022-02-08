import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureFilter, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {CreateIcon, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {MixturesFilterContext} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {isMobile} from "react-device-detect";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.list"}
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
				<Space size={'small'}>
					<LiquidIcon/>{t('lab.mixture.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
		</LabMenuDrawerButton> : <Space>
			<MixtureCreateButton type={'primary'}/>
		</Space>}
	>
		<MixturesFilterContext>
			<MixtureFilter/>
			<MixtureTable/>
		</MixturesFilterContext>
	</LabPage>;
});
