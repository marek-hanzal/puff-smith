import {SizeMm} from "@/puff-smith/component/inline/SizeMm";
import {IWire} from "@/puff-smith/service/wire/interface";
import {Tag, TagProps, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IWireFiberInlineProps {
	wire: IWire;
	color?: TagProps["color"];
}

export const WireFiberInline: FC<IWireFiberInlineProps> = ({wire, color = "lime"}) => {
	const {t} = useTranslation();
	return <>
		{wire.fibers.length > 0 ? wire.fibers.map(fiber => <Tag
			key={`fiber-${fiber.id}`}
			color={color}
		>
			{`${fiber.count}x ${fiber.fiber.code}`} <SizeMm size={fiber.fiber.mm}/>
		</Tag>) : <Typography.Text type={"secondary"}>{t("shared.wire.no-fibers")}</Typography.Text>}
	</>;
};
