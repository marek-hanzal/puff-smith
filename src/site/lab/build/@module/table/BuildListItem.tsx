import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {List} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {BuildQuickMenu, IBuildQuickMenuProps} from "@/puff-smith/site/lab/build/@module/component/BuildQuickMenu";
import {BuildPreviewButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildPreviewButton";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer/@module/component/AtomizerInline";
import {BuildAge} from "@/puff-smith/site/lab/build/@module/component/BuildAge";

export interface IBuildListItemProps extends Partial<ListItemProps> {
	build: BuildDto;
	quickMenuProps?: Partial<IBuildQuickMenuProps>;
}

export const BuildListItem: FC<IBuildListItemProps> = ({build, quickMenuProps, ...props}) => {
	return <List.Item
		className={build.active ? 'active' : 'inactive'}
		actions={[<BuildQuickMenu
			key={'quick-menu'}
			build={build}
			onCreateVape={({navigate, response}) => {
				navigate('/lab/vape/[vapeId]', {vapeId: response.id});
			}}
			{...quickMenuProps}
		/>]}
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
					hidden: ['upload']
				}}
			/>}
			description={build.coil.wire.name}
		/>
		<BuildAge build={build}/>
	</List.Item>;
}
