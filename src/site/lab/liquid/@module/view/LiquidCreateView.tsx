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
		<Tabs.TabPane key={"quick-mix"} tab={t("lab.liquid.create.quick-mix.tab")}>
			<Template label={"lab.liquid.create.quick-mix"} span={24} extra={<Divider/>}>
				<LiquidCreateQuickForm/>
			</Template>
		</Tabs.TabPane>
		<Tabs.TabPane key={"advanced"} tab={t("lab.liquid.create.advanced.tab")}>
			<LiquidCreateForm/>
		</Tabs.TabPane>
	</Tabs>;
};
