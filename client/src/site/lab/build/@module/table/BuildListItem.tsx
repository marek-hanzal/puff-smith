import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {BuildPreviewButton, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {List} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";

export interface IBuildListItemProps extends Partial<ListItemProps> {
	build: BuildDto;
}

export const BuildListItem: FC<IBuildListItemProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <List.Item
		className={build.active ? 'active' : 'inactive'}
		actions={[<BuildQuickMenu key={'quick-menu'} build={build}/>]}
		{...props}
	>
		<BuildPreviewButton title={build.atomizer.name} build={build}/>
		{/*<Space direction={'vertical'}>*/}
		{/*	<AtomizerInline atomizer={build.atomizer}/>*/}
		{/*	<CoilInline coil={build.coil}/>*/}
		{/*	<CottonInline cotton={build.cotton}/>*/}
		{/*	<Space>*/}
		{/*		<Typography.Text type={'secondary'}>{t('lab.build.age.label')}</Typography.Text>{durationOf(build.created).humanize()}*/}
		{/*	</Space>*/}
		{/*	<Space>*/}
		{/*		<BuildVapeButton size={'small'} build={build}/>*/}
		{/*		<BuildCommentButton size={'small'} build={build}/>*/}
		{/*	</Space>*/}
		{/*</Space>*/}
	</List.Item>;
}
