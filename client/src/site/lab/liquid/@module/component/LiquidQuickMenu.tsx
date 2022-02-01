import {IQuickMenuProps, QuickMenu} from "@leight-core/leight";
import {FC} from "react";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {Menu, message} from "antd";
import {LiquidDeleteButton, LiquidEditButton, LiquidLinkButton, LiquidPreviewButton} from "@/puff-smith/site/lab/liquid";
import {useDeleteMutation, useLiquidsQueryInvalidate} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {useTranslation} from "react-i18next";

export interface ILiquidQuickMenuProps extends Partial<IQuickMenuProps> {
	liquid: LiquidDto;
}

export const LiquidQuickMenu: FC<ILiquidQuickMenuProps> = ({liquid, ...props}) => {
	const {t} = useTranslation();
	const deleteMutation = useDeleteMutation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	return <QuickMenu {...props}>
		<Menu.Item>
			<LiquidPreviewButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidLinkButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Item>
			<LiquidEditButton liquid={liquid}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<LiquidDeleteButton
				liquid={liquid}
				onOk={setShow => {
					deleteMutation.mutate({
						id: liquid.id,
					}, {
						onSuccess: response => {
							message.success(t('lab.liquid.deleted.success', {data: response}))
							liquidsQueryInvalidate();
						},
					})
					setShow(false);
				}}
			/>
		</Menu.Item>
	</QuickMenu>
}
