import {IWire} from "@/puff-smith/service/wire/interface";
import {toHumanNumber} from "@leight-core/utils";
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
			{`${fiber.count}x ${fiber.fiber.code} ${toHumanNumber(fiber.fiber.mm, "-", 1)}mm`}
		</Tag>)}
	</>;
};
