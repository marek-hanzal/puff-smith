import {isMarkActive, toggleMark} from "@/puff-smith/component/editor/utils";
import {isString} from "@leight-core/utils";
import {Button, ButtonProps} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {useSlate} from "slate-react";

export interface IMarkButtonProps extends Partial<ButtonProps> {
	format: string;
}

export const MarkButton: FC<IMarkButtonProps> = ({format, children, ...props}) => {
	const {t} = useTranslation();
	const slate = useSlate();
	return <Button
		type={isMarkActive(slate, format) ? "primary" : "link"}
		onClick={e => {
			e.preventDefault();
			toggleMark(slate, format);
		}}
		{...props}
	>
		{isString(children) ? t(children as string) : children}
	</Button>;
};
