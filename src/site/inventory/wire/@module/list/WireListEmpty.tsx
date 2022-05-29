import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {useWireFilterContext} from "@/sdk/api/wire/query";
import {ButtonLink, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IWireListEmptyProps {
}

export const WireListEmpty: FC<IWireListEmptyProps> = () => {
	const filterContext = useWireFilterContext();
	if (!filterContext.isEmpty()) {
		return <Template
			icon={<WireIcon/>}
			label={"lab.wire.list.filter.empty"}
		/>;
	}
	return <Template
		icon={<WireIcon/>}
		label={"lab.wire.list.empty"}
		extra={<>
			<Divider/>
			<ButtonLink
				icon={<WireIcon/>}
				href={"/to/market/wire"}
				label={"lab.market.wire.label"}
			/>
		</>}
	/>;
};
