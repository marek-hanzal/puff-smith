import {FC} from "react";
import {Tabs, TabsProps} from "antd";

export interface IBuildWizard extends Partial<TabsProps> {
}

export const BuildWizard: FC<IBuildWizard> = props => {
	return <Tabs
		destroyInactiveTabPane
		{...props}
	>
	</Tabs>;
}
