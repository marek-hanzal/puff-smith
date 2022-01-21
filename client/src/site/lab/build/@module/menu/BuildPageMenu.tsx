import {BuildIcon, IPageMenuProps, PageMenu} from "@/puff-smith";
import {FC} from "react";
import {CreateIcon, CreateMenuItem} from "@leight-core/leight/dist";

export interface IBuildPageMenuProps extends Partial<IPageMenuProps> {
}

export const BuildPageMenu: FC<IBuildPageMenuProps> = props => {
	return <PageMenu {...props}>
		{CreateMenuItem("lab.build.index.menu", "/lab/build", <BuildIcon/>)}
		{CreateMenuItem("lab.build.create.menu", "/lab/build/create", <CreateIcon/>)}
		{CreateMenuItem("lab.build.list.menu", "/lab/build/list", <CreateIcon/>)}
	</PageMenu>
}