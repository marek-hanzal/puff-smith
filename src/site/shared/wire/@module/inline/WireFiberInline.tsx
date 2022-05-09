import {IWire} from "@/puff-smith/service/wire/interface";
import {Tag, TagProps} from "antd";
import {FC} from "react";

export interface IWireFiberInlineProps {
	wire: IWire;
	color?: TagProps["color"];
}

export const WireFiberInline: FC<IWireFiberInlineProps> = ({wire, color = "lime"}) => {
	return <>
		{wire.fibers.map(wireFiber => <Tag
			key={`fiber-${wireFiber.id}`}
			color={color}
		>
			{`${wireFiber.count}x ${wireFiber.fiber.code}`}
		</Tag>)}
	</>;
};
