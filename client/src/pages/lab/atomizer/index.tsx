import {AtomizerIcon} from "@/puff-smith";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/leight";
import {AtomizersFilterContext} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {Menu, Tabs} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton, LabPage} from "@/puff-smith/site/lab/@module/component";
import {AtomizerCreateButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCreateButton";
import {AtomizerFilter} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerFilter";
import {AtomizerTable} from "@/puff-smith/site/lab/atomizer/@module/table/AtomizerTable";
import {useTranslation} from "react-i18next";
import {usePuffSmithSessionContext} from "@/puff-smith/site/shared";

export default withLabLayout(function Index() {
	const {user} = usePuffSmithSessionContext().session;
	const {t} = useTranslation();
	return <LabPage
		title={"lab.atomizer"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbIcon
				icon={<AtomizerIcon/>}
				label={'lab.atomizer.label'}
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
		<Tabs>
			<Tabs.TabPane key={'user'} tab={t('lab.atomizer.user.tab')}>
				<AtomizersFilterContext defaultFilter={{userId: user.id}}>
					<AtomizerFilter/>
					<AtomizerTable/>
				</AtomizersFilterContext>
			</Tabs.TabPane>
			<Tabs.TabPane key={'shop'} tab={t('lab.atomizer.shop.tab')}>
				<AtomizersFilterContext>
					<AtomizerFilter/>
					<AtomizerTable/>
				</AtomizersFilterContext>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
