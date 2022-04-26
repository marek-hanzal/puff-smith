import {NicotineInline} from "@/puff-smith/component/inline/NicotineInline";
import {NumberRange} from "@leight-core/client";
import {Select} from "antd";
import {FC} from "react";

export interface INicotineSelectProps {
	onChange?: (value: number) => void;
}

export const NicotineSelect: FC<INicotineSelectProps> = props => {
	return <Select
		{...props}
	>
		{NumberRange(19).map(value => <Select.Option key={value} value={value}><NicotineInline nicotine={value}/></Select.Option>)}
	</Select>;
};
