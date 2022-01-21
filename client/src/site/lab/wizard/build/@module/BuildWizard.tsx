import {FC} from "react";
import {Tabs, TabsProps} from "antd";
import {AtomizerStep, BuildStep, CoilStep, CottonStep, FirstStep} from "@/puff-smith/site/lab/wizard/build/@module/step";
import {TabTitle} from "@leight-core/leight";

export interface IBuildWizard extends Partial<TabsProps> {
}

export const BuildWizard: FC<IBuildWizard> = props => {
	return <Tabs
		destroyInactiveTabPane
		{...props}
	>
		<Tabs.TabPane key={"first"} tab={<TabTitle label={"lab.wizard.build.first"}/>}>
			<FirstStep/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"atomizer"} tab={<TabTitle label={"lab.wizard.build.atomizer"}/>}>
			<AtomizerStep/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"coil"} tab={<TabTitle label={"lab.wizard.build.coil"}/>}>
			<CoilStep/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"cotton"} tab={<TabTitle label={"lab.wizard.build.cotton"}/>}>
			<CottonStep/>
		</Tabs.TabPane>
		<Tabs.TabPane key={"build"} tab={<TabTitle label={"lab.wizard.build.build"}/>}>
			<BuildStep/>
		</Tabs.TabPane>
	</Tabs>;
}
