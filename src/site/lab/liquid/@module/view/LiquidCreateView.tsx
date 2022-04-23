import {LiquidIcon} from "@/puff-smith";
import {ILiquid} from "@/puff-smith/service/liquid";
import {LiquidCleverMixForm, LiquidQuickMixForm} from "@/puff-smith/site/lab/liquid";
import {useCheckPrice} from "@/puff-smith/site/shared/price";
import {DollarCircleOutlined} from "@ant-design/icons";
import {IFormProps, Loader, Template} from "@leight-core/client";
import {Tabs} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateViewProps {
	onSuccess?: IFormProps<any, ILiquid>["onSuccess"];
}

export const LiquidCreateView: FC<ILiquidCreateViewProps> = ({onSuccess}) => {
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
						span={22}
					>
						<LiquidQuickMixForm onSuccess={onSuccess}/>
					</Template>
				</Tabs.TabPane>
				<Tabs.TabPane key={"clever-mix"} tab={t("lab.liquid.create.clever-mix.tab")}>
					<Template
						span={22}
					>
						<LiquidCleverMixForm onSuccess={onSuccess}/>
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
