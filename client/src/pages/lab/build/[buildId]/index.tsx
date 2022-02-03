import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildCreateButton, BuildEditButton, BuildListButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {BuildPage} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Rate, Space} from "antd";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <BuildPage
		title={"lab.build.index"}
		selected={['/lab/build']}
		onBack={navigate => navigate('/lab/build/list')}
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
					href={'/lab/build'}
					title={'lab.build.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/build/list'}
					title={'lab.build.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BuildIcon/>{t('lab.build.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={<QuickMenu>
			<Menu.Item>
				<BuildCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<BuildListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{build => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<BuildIcon/>}
				title={<AtomizerInline atomizer={build.atomizer}/>}
				subTitle={<Rate count={10} disabled value={build.rating || undefined}/>}
				extra={<>
					<Space>
						<BuildEditButton build={build}/>
						<BuildCloneButton build={build}/>
						<BuildVapeButton build={build}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<BuildPreview build={build}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</BuildPage>;
});
