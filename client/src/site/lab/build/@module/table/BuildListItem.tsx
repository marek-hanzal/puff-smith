import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {BuildAge, BuildPreviewButton, BuildQuickMenu} from "@/puff-smith/site/lab/build";
import {List} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";

export interface IBuildListItemProps extends Partial<ListItemProps> {
	build: BuildDto;
}

export const BuildListItem: FC<IBuildListItemProps> = ({build, ...props}) => {
	return <List.Item
		className={build.active ? 'active' : 'inactive'}
		actions={[<BuildQuickMenu key={'quick-menu'} build={build}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<BuildPreviewButton
				icon={null}
				style={{padding: 0}}
				title={build.atomizer.name}
				drawerProps={{title: <AtomizerInline inline atomizer={build.atomizer}/>}}
				build={build}
				buildPreviewProps={{
					hidden: ['upload', 'images']
				}}
			/>}
			description={build.coil.wire.name}
		/>
		<BuildAge build={build}/>
	</List.Item>;
}
