import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {FC, useState} from "react";
import {Centered, DatePicker, FormItem, Preview, Submit} from "@leight-core/client";
import {Col, Divider, Row} from "antd";
import {ContentInline, LiquidIcon, PgVgInline} from "@/puff-smith";
import {InventoryAromaSelect} from "@/puff-smith/site/shared/aroma/inventory";
import {InventoryBaseSelect} from "@/puff-smith/site/shared/base/inventory";
import {IAroma} from "@/puff-smith/service/aroma";
import {IBase} from "@/puff-smith/service/base";

export interface ILiquidCreateQuickFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateQuickForm: FC<ILiquidCreateQuickFormProps> = props => {
	const [aroma, setAroma] = useState<IAroma>();
	const [base, setBase] = useState<IBase>();
	return <Row gutter={16}>
		<Col span={14}>
			<CreateDefaultForm
				translation={'lab.liquid'}
				{...props}
			>
				<FormItem hasTooltip field={'aromaId'} required>
					<InventoryAromaSelect onSelect={({entity}) => setAroma(entity)}/>
				</FormItem>
				<FormItem hasTooltip field={'baseId'} required>
					<InventoryBaseSelect onSelect={({entity}) => setBase(entity)}/>
				</FormItem>
				<FormItem field={'mixed'}>
					<DatePicker style={{width: '100%'}}/>
				</FormItem>
				<Divider/>
				<Centered>
					<Submit icon={<LiquidIcon/>} label={'create'}/>
				</Centered>
			</CreateDefaultForm>
		</Col>
		<Col span={10}>
			<Preview>
				{{
					"lab.liquid.preview.content": <ContentInline content={aroma?.content}/>,
					"lab.liquid.preview.volume": <ContentInline content={aroma?.volume}/>,
					"lab.liquid.preview.aroma.pgvg": <PgVgInline pgvg={aroma}/>,
					"lab.liquid.preview.base.pgvg": <PgVgInline pgvg={base}/>,
				}}
			</Preview>
		</Col>
	</Row>
}
