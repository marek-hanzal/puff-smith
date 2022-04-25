import {LiquidIcon, NicotineSelect} from "@/puff-smith";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useLiquidsQueryInvalidate} from "@/sdk/api/liquid/query";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {ButtonBar, Centered, DatePicker, FormItem, Submit, toHumanNumber} from "@leight-core/client";
import {Col, Divider, message, Row} from "antd";
import moment from "moment";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCleverMixFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCleverMixForm: FC<ILiquidCleverMixFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const [nicotine, setNicotine] = useState<number>(0);
	const [request, setRequest] = useState<any>({});

	return <Row gutter={64}>
		<Col span={10}>
			<CreateDefaultForm
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
							// canSubmit={!cleverMixInfo?.result?.error}
							label={"create"}
						/>
					</ButtonBar>
				</Centered>
			</CreateDefaultForm>
		</Col>
		<Col span={14}>
			<h1>show IMixtureView</h1>
		</Col>
	</Row>;
};
