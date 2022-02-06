import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {CreateMixtureForm, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {ButtonLink, CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.mixture.create"}
		menuSelection={['/lab/mixture']}
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
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
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
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<MixtureListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<MixtureListButton/>
		</Space>}
	>
		<CreateTemplate
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
		>
			<CreateMixtureForm/>
		</CreateTemplate>
	</LabPage>;
});
