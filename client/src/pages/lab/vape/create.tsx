import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {CreateVapeForm, VapeListButton} from "@/puff-smith/site/lab/vape";
import {ButtonLink, CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.create"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
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
					href={'/lab/vape'}
					title={'lab.vape.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/vape/list'}
					title={'lab.vape.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.vape.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={<QuickMenu>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<VapeIcon/>}
			label={'lab.vape'}
		>
			<CreateVapeForm/>
		</CreateTemplate>
	</LabPage>;
});
