import {IWire} from "@/puff-smith/service/wire/interface";
import {Tag, TagProps} from "antd";
import {FC} from "react";

export interface IWireFiberInlineProps {
	wire: IWire;
	color?: TagProps["color"];
}

export const WireFiberInline: FC<IWireFiberInlineProps> = ({wire, color = "lime"}) => {
	return <>
		{wire.fibers.map(fiber => <Tag
			key={`fiber-${fiber.id}`}
			color={color}
		>
			{`${fiber.code}`}
		</Tag>)}
	</>;
};
