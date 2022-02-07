import {LabMenuDrawerButton, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {AtomizerListButton, CreateAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {CreateIcon, CreateTemplate, HomeIcon} from "@leight-core/leight";
import {Breadcrumb, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {ButtonBar, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.atomizer.create"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer'}
					title={'lab.atomizer.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer/list'}
					title={'lab.atomizer.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.atomizer.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<AtomizerListButton/>
		</ButtonBar>}
	>
		<CreateTemplate>
			<CreateAtomizerForm/>
		</CreateTemplate>
	</LabPage>;
});
