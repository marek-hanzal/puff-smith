import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {ButtonBar, ButtonLink, HomeIcon, Template} from "@leight-core/leight";
import {CoilCreateButton, CoilListButton} from "@/puff-smith/site/lab/coil";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.coil"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab')}
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
				<Space size={'small'}>
					<CoilIcon/>{t('lab.coil.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
		<LabMenu/>
		<Template
			icon={<CoilIcon/>}
			label={'lab.coil'}
			span={24}
		>
			<ButtonBar>
				<CoilCreateButton type={'primary'}/>
				<CoilListButton size={'middle'}/>
			</ButtonBar>
		</Template>
		<Divider/>
	</LabPage>;
});
