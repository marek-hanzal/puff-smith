import {FC} from "react";
import {DriptipDto} from "@/sdk/puff-smith/driptip/dto";
import {Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IDriptipInlineProps {
	driptip: DriptipDto;
}

export const DriptipInline: FC<IDriptipInlineProps> = ({driptip}) => {
	const {t} = useTranslation();
	return <>
		{driptip.code}&nbsp;<Typography.Text type={'secondary'}>{driptip.vendor.name}</Typography.Text><br/>
		{driptip.materials.map(material => <Typography.Text key={material.id} type={'secondary'}>{t('tag.' + material.group + '.' + material.label)}</Typography.Text>)}
	</>
}
