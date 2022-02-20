import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useIsMobile} from "@leight-core/leight";

export interface ICottonInlineProps {
	cotton: CottonDto;
}

export const CottonInline: FC<ICottonInlineProps> = ({cotton}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		<Typography.Text>{cotton.name}</Typography.Text>
		<Typography.Text type={'secondary'}>{cotton.vendor.name}</Typography.Text>
	</Space>;
}
