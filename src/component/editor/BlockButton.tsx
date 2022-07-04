import {TEXT_ALIGN_TYPES} from "@/puff-smith/component/editor/interface";
import {isBlockActive, toggleBlock} from "@/puff-smith/component/editor/utils";
import {isString} from "@leight-core/utils";
import {Button, ButtonProps} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useSlate} from "slate-react";

export interface IBlockButtonProps extends Partial<ButtonProps> {
	format: string;
}

export const BlockButton: FC<IBlockButtonProps> = ({format, children, ...props}) => {
	const {t} = useTranslation();
	const slate = useSlate();
	return <Button
		type={isBlockActive(slate, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type") ? "primary" : "link"}
		onClick={() => {
			toggleBlock(slate, format);
		}}
		{...props}
	>
		{isString(children) ? t(children as string) : children}
	</Button>;
};
