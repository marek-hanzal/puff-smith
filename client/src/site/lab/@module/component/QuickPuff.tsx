import {FC} from "react";
import {useTranslation} from "react-i18next";
import {List} from "antd";
import {ButtonLink} from "@leight-core/leight/dist";
import {BuildIcon, VapeIcon} from "@/puff-smith";
import {BuildCreateButton, BuildListItem} from "@/puff-smith/site/lab/build";
import {BuildsSource, BuildsSourceConsumer} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {VapeCreateButton, VapeListItem} from "@/puff-smith/site/lab/vape";
import {VapesSource, VapesSourceConsumer} from "@/sdk/puff-smith/api/lab/vape/endpoint";

export interface IQuickPuffProps {
}

export const QuickPuff: FC<IQuickPuffProps> = () => {
	const {t} = useTranslation();
	return <List itemLayout={'vertical'}>
		<List.Item
			extra={<>
				<ButtonLink type={'link'} href={'/lab/build'} icon={<BuildIcon/>}/>
				<BuildCreateButton/>
			</>}
		>
			<List.Item.Meta
				title={t('lab.quick-puff.builds.title')}
				description={t('lab.quick-puff.builds.subtitle')}
			/>
			<BuildsSource defaultSize={3} filter={{active: true}}>
				<BuildsSourceConsumer>
					{sourceContext => sourceContext.hasData() && <List>
						{sourceContext.map(build => <BuildListItem key={build.id} build={build}/>)}
					</List>}
				</BuildsSourceConsumer>
			</BuildsSource>
		</List.Item>
		<List.Item
			extra={<>
				<ButtonLink type={'link'} href={'/lab/vape'} icon={<VapeIcon/>}/>
				<VapeCreateButton/>
			</>}
		>
			<List.Item.Meta
				title={t('lab.quick-puff.vapes.title')}
				description={t('lab.quick-puff.vapes.subtitle')}
			/>
			<VapesSource defaultSize={3}>
				<VapesSourceConsumer>
					{sourceContext => sourceContext.hasData() && <List>
						{sourceContext.map(vape => <VapeListItem key={vape.id} vape={vape}/>)}
					</List>}
				</VapesSourceConsumer>
			</VapesSource>
		</List.Item>
	</List>;
}
