import {WireIcon} from "@/puff-smith";
import {WirePage} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, HomeIcon} from "@leight-core/common";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {withLabLayout} from "@/puff-smith/../../../../_site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/../../../../_site/lab/@module/component";
import {WireCreateButton} from "@/puff-smith/../../../../_site/lab/wire/@module/component/button/WireCreateButton";
import {WirePreview} from "@/puff-smith/../../../../_site/lab/wire/@module/component/WirePreview";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <WirePage
		title={"lab.wire.index"}
		menuSelection={['/lab/wire']}
		onBack={navigate => navigate('/lab/wire')}
		breadcrumbProps={({entity}) => entity && <Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/wire'}
				title={'lab.wire.label'}
			/>
			<BreadcrumbIcon
				icon={<WireIcon/>}
				label={t('lab.wire.index.label', {data: entity})}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<WireCreateButton/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<WireCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{wire => <WirePreview wire={wire}/>}
	</WirePage>;
});
