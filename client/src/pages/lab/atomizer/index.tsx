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
import {UserAtomizerTable} from "@/puff-smith/site/lab/user/atomizer/@module/table/UserAtomizerTable";
import {UserAtomizersFilterContext} from "@/sdk/puff-smith/api/lab/user/atomizer/endpoint";
import {useState} from "react";

export default withLabLayout(function Index() {
	const [tab, setTab] = useState('user');
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
		<Tabs size={'large'} onChange={setTab} activeKey={tab}>
			<Tabs.TabPane key={'user'} tab={t('lab.atomizer.user.tab')}>
				<UserAtomizersFilterContext defaultFilter={{userId: user.id}}>
					<UserAtomizerTable/>
				</UserAtomizersFilterContext>
			</Tabs.TabPane>
			<Tabs.TabPane key={'shop'} tab={t('lab.atomizer.shop.tab')}>
				<AtomizersFilterContext>
					<AtomizerFilter/>
					<AtomizerTable
						onPurchase={() => setTab('user')}
					/>
				</AtomizersFilterContext>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
