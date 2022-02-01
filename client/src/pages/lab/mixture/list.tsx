import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";
import {LiquidIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.list"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureCreateButton type={'link'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<MixtureTable/>
	</LabPage>;
});
