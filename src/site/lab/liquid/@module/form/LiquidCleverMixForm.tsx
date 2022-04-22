import {LiquidIcon, NicotineSelect} from "@/puff-smith";
import {ILiquidCleverMixInfoRequest} from "@/puff-smith/service/liquid";
import {MixtureHint} from "@/puff-smith/site/lab/liquid";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {CleverMixInfo} from "@/puff-smith/site/shared/liquid";
import {CreateCleverMixDefaultForm, ICreateCleverMixDefaultFormProps} from "@/sdk/api/liquid/clever-mix/create";
import {useCleverMixInfoQuery} from "@/sdk/api/liquid/clever-mix/info";
import {useLiquidsQueryInvalidate} from "@/sdk/api/liquid/query";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {ButtonBar, Centered, DatePicker, FormItem, Submit, toHumanNumber} from "@leight-core/client";
import {Col, Divider, message, Row} from "antd";
import moment from "moment";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCleverMixFormProps extends Partial<ICreateCleverMixDefaultFormProps> {
}

export const LiquidCleverMixForm: FC<ILiquidCleverMixFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const [nicotine, setNicotine] = useState<number>(0);
	const [request, setRequest] = useState<ILiquidCleverMixInfoRequest>({});

	const cleverMixInfoQuery = useCleverMixInfoQuery(request, undefined, {
		keepPreviousData: true,
	});
	const {data: cleverMixInfo} = cleverMixInfoQuery;

	return <>
		<MixtureHint result={cleverMixInfo?.result}/>
		<Row gutter={32}>
			<Col span={15}>
				<CreateCleverMixDefaultForm
					onSuccess={async response => {
						message.success(t("lab.liquid.clever-mix.success", {
							data: {
								name: response.response.name,
								amount: toHumanNumber(-1 * response.response.transaction.amount),
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
						setRequest(values.aromaId ? values : {});
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
					<Divider/>
					<FormItem field={"mixed"}>
						<DatePicker disabledDate={date => date && date > moment().endOf("day")} style={{width: "100%"}}/>
					</FormItem>
					<Divider/>
					<Centered>
						<ButtonBar align={"baseline"}>
							<Submit
								icon={<LiquidIcon/>}
								canSubmit={!cleverMixInfo?.result?.error}
								label={"create"}
							/>
						</ButtonBar>
					</Centered>
				</CreateCleverMixDefaultForm>
			</Col>
			<Col span={9}>
				<CleverMixInfo cleverMixInfo={cleverMixInfo}/>
			</Col>
		</Row>
	</>;
};
