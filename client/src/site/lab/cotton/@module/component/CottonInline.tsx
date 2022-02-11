import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {Space, Typography} from "antd";
import {FC} from "react";
import {useIsMobile} from "@leight-core/leight/dist";

export interface ICottonInlineProps {
	cotton: CottonDto;
}

export const CottonInline: FC<ICottonInlineProps> = ({cotton}) => {
	const isMobile = useIsMobile();
	return <Space direction={isMobile ? 'vertical' : 'horizontal'}>
		{cotton.name}<Typography.Text type={'secondary'}>{cotton.vendor.name}</Typography.Text>
	</Space>;
}
