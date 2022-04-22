import {LiquidIcon} from "@/puff-smith";
import {LiquidCleverMixForm, LiquidQuickMixForm} from "@/puff-smith/site/lab/liquid";
import {useCheckPrice} from "@/puff-smith/site/shared/price";
import {DollarCircleOutlined} from "@ant-design/icons";
import {Loader, Template} from "@leight-core/client";
import {Divider, Tabs} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateViewProps {
}

export const LiquidCreateView: FC<ILiquidCreateViewProps> = () => {
	const {t} = useTranslation();
	const checkPrice = useCheckPrice("lab.liquid.create");
	return <Loader
		icon={<LiquidIcon/>}
		loading={checkPrice.loading}
		error={false}
	>
		{checkPrice.pass ?
			<Tabs>
				<Tabs.TabPane key={"quick-mix"} tab={t("lab.liquid.create.quick-mix.tab")}>
					<Template
						label={"lab.liquid.create.quick-mix"}
						extra={<Divider/>}
						span={22}
					>
						<LiquidQuickMixForm/>
					</Template>
				</Tabs.TabPane>
				<Tabs.TabPane key={"clever-mix"} tab={t("lab.liquid.create.clever-mix.tab")}>
					<Template
						label={"lab.liquid.create.clever-mix"}
						extra={<Divider/>}
						span={22}
					>
						<LiquidCleverMixForm/>
					</Template>
				</Tabs.TabPane>
			</Tabs> :
			<Template
				icon={<DollarCircleOutlined/>}
				status={"error"}
				label={"lab.liquid.create.no-puffies"}
			/>}
	</Loader>;
};
