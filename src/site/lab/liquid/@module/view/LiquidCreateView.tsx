import {LiquidCreateForm, LiquidCreateQuickForm} from "@/puff-smith/site/lab/liquid";
import {Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateViewProps {
}

export const LiquidCreateView: FC<ILiquidCreateViewProps> = () => {
	const {t} = useTranslation();
	return <Tabs>
		<Tabs.TabPane key={"simple"} tab={t("lab.liquid.create.simple.tab")}>
			<Template label={"lab.liquid.create.quick-mix"} span={24} extra={<Divider/>}>
				<LiquidCreateQuickForm/>
			</Template>
		</Tabs.TabPane>
		<Tabs.TabPane key={"wizard"} tab={t("lab.liquid.create.wizard.tab")}>
			<p>
				# wizard here - target volume, target PG/VG, target nic; results based on booster/base inventory
			</p>

			<p>
				# wizard usage should take more puffies than common create as it is advanced function
			</p>

			<p>
				# move puff check from create button to here; hide wizard/create when there are not enough puffies (conditional component)
			</p>
		</Tabs.TabPane>
		<Tabs.TabPane key={"common"} tab={t("lab.liquid.create.common.tab")}>
			<LiquidCreateForm/>
		</Tabs.TabPane>
	</Tabs>;
};
