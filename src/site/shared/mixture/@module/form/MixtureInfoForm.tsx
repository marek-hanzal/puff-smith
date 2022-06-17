import {VgPgSlider} from "@/puff-smith/component/input/VgPgSliter";
import {IMixtureInfoDefaultFormProps, MixtureInfoDefaultForm} from "@/sdk/api/mixture/info";
import {CalculatorOutlined} from "@ant-design/icons";
import {Card, Centered, FormContext, FormItem, ItemGroup, Submit, SwitchItem} from "@leight-core/client";
import {Col, Divider, InputNumber, Row, Spin} from "antd";
import {FC, useState} from "react";

export interface IMixtureInfoFormProps extends Partial<IMixtureInfoDefaultFormProps> {
}

export const MixtureInfoForm: FC<IMixtureInfoFormProps> = props => {
	const [withBase, setWithBase] = useState<boolean>(true);
	const [withBooster, setWithBooster] = useState<boolean>(false);
	const [nicotine, setNicotine] = useState<number>(0);
	return <MixtureInfoDefaultForm
		translation={"shared.mixture.info"}
		toForm={() => ({
			withBase,
			withBooster,
			aroma: {
				content: 12,
				volume: 60,
				vgpg: 0,
			},
			booster: {
				volume: 10,
				vgpg: 70,
				nicotine: 18,
			},
			base: {
				vgpg: 70,
			},
			nicotine,
		})}
		toMutation={({withBase, withBooster, aroma, base, booster, ...values}) => ({
			...values,
			aroma: {
				...aroma,
				vg: aroma.vgpg,
				pg: 100 - aroma.vgpg,
			},
			base: withBase ? {
				...base,
				vg: base.vgpg,
				pg: 100 - base.vgpg,
			} : undefined,
			booster: withBooster ? {
				...booster,
				vg: booster.vgpg,
				pg: 100 - booster.vgpg,
			} : undefined,
		})}
		{...props}
	>
		<FormContext.Consumer>
			{formContext => <>
				<Row gutter={32}>
					<Col span={12}>
						<ItemGroup prefix={"aroma"}>
							<FormItem field={"content"} required>
								<InputNumber min={0} max={3000} step={1} style={{width: "100%"}} autoFocus/>
							</FormItem>
							<FormItem field={"volume"} required>
								<InputNumber min={0} max={3000} step={1} style={{width: "100%"}}/>
							</FormItem>
							<FormItem field={"vgpg"} required>
								<VgPgSlider/>
							</FormItem>
						</ItemGroup>
						<FormItem field={"nicotine"} required>
							<InputNumber
								min={0}
								max={100}
								step={1}
								style={{width: "100%"}}
								onChange={value => {
									setWithBooster(value > 0);
									setNicotine(value);
									formContext.setValues({withBooster: value > 0});
								}}
							/>
						</FormItem>
					</Col>
					<Col span={12}>
						<Card
							title={"shared.mixture.info.withBase.title"}
							extra={<SwitchItem
								field={"withBase"}
								noStyle
								switchProps={{
									onChange: checked => setWithBase(checked),
								}}
							/>}
						>
							<Spin indicator={<></>} spinning={!withBase}>
								<ItemGroup prefix={"base"}>
									<FormItem field={"vgpg"}>
										<VgPgSlider/>
									</FormItem>
								</ItemGroup>
							</Spin>
						</Card>
						<Card
							title={"shared.mixture.info.withBooster.title"}
							extra={<SwitchItem
								field={"withBooster"}
								noStyle
								switchProps={{
									disabled: !nicotine,
									onChange: checked => {
										setWithBooster(checked);
										!checked && formContext.setValues({
											withBooster: false,
											nicotine: 0,
										});
										!checked && setNicotine(0);
									},
								}}
							/>}
						>
							<Spin indicator={<></>} spinning={!withBooster}>
								<ItemGroup prefix={"booster"}>
									<FormItem field={"nicotine"} required={withBooster}>
										<InputNumber min={0} max={100} step={1} style={{width: "100%"}}/>
									</FormItem>
									<FormItem field={"vgpg"}>
										<VgPgSlider/>
									</FormItem>
									<FormItem field={"volume"} required={withBooster}>
										<InputNumber min={0} max={3000} step={1} style={{width: "100%"}}/>
									</FormItem>
								</ItemGroup>
							</Spin>
						</Card>
					</Col>
				</Row>

				<Divider/>
				<Centered>
					<Submit icon={<CalculatorOutlined/>} label={"calculate"}/>
				</Centered>
			</>}
		</FormContext.Consumer>
	</MixtureInfoDefaultForm>;
};
