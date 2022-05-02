import {isString} from "@leight-core/client";
import {Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICodeInlineProps {
	code: string | { code: string };
}

export const CodeInline: FC<ICodeInlineProps> = ({code}) => {
	const {t} = useTranslation();
	code = (isString(code) ? code : (code as { code: string }).code) as string;
	return <Tooltip title={t("common.inventory.code.tooltip")}>
		<Typography.Text type={"warning"}>{code}</Typography.Text>
	</Tooltip>;
};
