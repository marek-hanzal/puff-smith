import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {BuildPreviewButton, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {List} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";

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
		<BuildPreviewButton
			title={build.atomizer.name}
			drawerProps={{title: <AtomizerInline inline atomizer={build.atomizer}/>}}
			build={build}
		/>
	</List.Item>;
}
