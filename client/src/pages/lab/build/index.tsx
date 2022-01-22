import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ButtonLink, CreateIcon, ListIcon, Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {Card, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.build"}
	>
		<LabMenu/>
		<Template
			icon={<BuildIcon/>}
			label={'lab.build'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<ButtonLink
							size={'large'}
							href={'/lab/build/create'}
							icon={<CreateIcon/>}
							title={'lab.build.button.create'}
						/>
						<ButtonLink
							type={'link'}
							size={'large'}
							href={'/lab/build/list'}
							icon={<ListIcon/>}
							title={'lab.build.button.list'}
						/>
					</Space>
					<Divider/>
				</>
			}
		>
			<Card title={t('lab.build.latest.title')}>

			</Card>
		</Template>
	</LabPage>;
});
