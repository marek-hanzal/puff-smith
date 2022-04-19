import {LiquidIcon, NicotineSelect} from "@/puff-smith";
import {ILiquidQuickMixInfoRequest} from "@/puff-smith/service/liquid";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {InventoryBoosterSelect} from "@/puff-smith/site/shared/booster/inventory";
import {QuickMixInfo} from "@/puff-smith/site/shared/liquid";
import {useLiquidsQueryInvalidate} from "@/sdk/api/liquid/query";
import {CreateQuickMixDefaultForm, ICreateQuickMixDefaultFormProps} from "@/sdk/api/liquid/quick-mix/create";
import {useQuickMixInfoQuery} from "@/sdk/api/liquid/quick-mix/info";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {ButtonBar, Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {Col, Divider, message, Row} from "antd";
import moment from "moment";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateFormProps extends Partial<ICreateQuickMixDefaultFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const [nicotine, setNicotine] = useState<number>(0);
	const [request, setRequest] = useState<ILiquidQuickMixInfoRequest>({});

	const quickMixInfoQuery = useQuickMixInfoQuery(request, undefined, {
		keepPreviousData: true,
	});
	const {data: quickMixInfo} = quickMixInfoQuery;

	return <>
		<MixtureHint result={quickMixInfo?.result}/>
		<Row gutter={32}>
			<Col span={15}>
				<CreateQuickMixDefaultForm
					onSuccess={async response => {
						message.success(t("lab.liquid.quick-mix.success", {
							data: {
								name: response.response.name,
								amount: -1 * response.response.transaction.amount,
							}
						}));
						await Promise.all([
							liquidsQueryInvalidate(),
							puffiesQueryInvalidate(),
						]);
						onSuccess?.(response);
					}}
					translation={"lab.liquid"}
					toForm={() => ({
						mixed: moment(),
						nicotine,
					})}
					onChange={({values}) => {
						setNicotine(values.nicotine);
						setRequest(values.aromaId && (values.baseId || (values.nicotine > 0 && values.boosterId)) ? values : {});
					}}
					{...props}
				>
					<FormItem hasTooltip field={"aromaId"} required>
						<InventoryAromaSelect/>
					</FormItem>
					<Divider/>
					<FormItem hasTooltip field={"nicotine"}>
						<NicotineSelect/>
					</FormItem>
					{nicotine > 0 && <FormItem hasTooltip field={"boosterId"} required>
						<InventoryBoosterSelect/>
					</FormItem>}
					<FormItem hasTooltip field={"baseId"} required={!nicotine}>
						<InventoryBaseSelect/>
					</FormItem>
					<Divider/>
					<FormItem field={"mixed"}>
						<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
					</FormItem>
					<Divider/>
					<Centered>
						<ButtonBar align={"baseline"}>
							<Submit
								icon={<LiquidIcon/>}
								canSubmit={!quickMixInfo?.result?.error}
								label={"create"}
							/>
						</ButtonBar>
					</Centered>
				</CreateQuickMixDefaultForm>
			</Col>
			<Col span={9}>
				<QuickMixInfo quickMixInfo={quickMixInfo}/>
			</Col>
		</Row>
	</>;
};
