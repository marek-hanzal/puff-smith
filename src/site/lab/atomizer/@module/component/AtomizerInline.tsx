import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FC} from "react";
import {Space, Typography} from "antd";
import {useIsMobile} from "@leight-core/leight";

export interface IAtomizerInlineProps {
	atomizer: AtomizerDto;
	inline?: boolean;
}

export const AtomizerInline: FC<IAtomizerInlineProps> = ({atomizer, inline = false}) => {
	const isMobile = useIsMobile();
	return <Space direction={(!isMobile || inline) ? 'horizontal' : 'vertical'}>
		<span>{atomizer.name}</span>
		<Typography.Text type={'secondary'}>{atomizer.vendor.name}</Typography.Text>
	</Space>
}
