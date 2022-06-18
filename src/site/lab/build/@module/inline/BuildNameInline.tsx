import {IBuild} from "@/puff-smith/service/build/interface";
import {Space} from "antd";
import {FC} from "react";

export interface IBuildNameInlineProps {
	build: IBuild;
}

export const BuildNameInline: FC<IBuildNameInlineProps> = ({build}) => {
	return <Space>
		{build.atomizer.name}
		{build.atomizer.vendor.name}
	</Space>;
};
