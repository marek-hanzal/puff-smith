import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {IMixture} from "@/puff-smith/service/mixture/interface";
import {MixturePreview} from "@/puff-smith/site/shared/mixture/@module/view/MixturePreview";
import {useCheckPrice} from "@/puff-smith/site/shared/price/@module/hook/useCheckPrice";
import {useCreateMutation} from "@/sdk/api/liquid/create";
import {useCheckPriceQueryInvalidate} from "@/sdk/api/transaction/check-price";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {ModalButton, useNavigate} from "@leight-core/client";
import {Divider, message} from "antd";
import {ComponentProps, FC} from "react";
import {Trans, useTranslation} from "react-i18next";

export interface ILiquidCreateButtonProps extends Partial<ComponentProps<typeof ModalButton>> {
	mixture: IMixture;
}

export const LiquidCreateButton: FC<ILiquidCreateButtonProps> = ({mixture, ...props}) => {
	const createMutation = useCreateMutation();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const checkPrice = useCheckPrice("lab.liquid.create");
	const checkPriceQueryInvalidate = useCheckPriceQueryInvalidate();
	const {t} = useTranslation();
	const navigate = useNavigate();
	return <ModalButton
		title={"lab.mixture.liquid.create.title"}
		width={780}
		button={{
			type: "link",
			ghost: true,
			icon: <LiquidIcon/>,
			disabled: checkPrice.notPass,
			children: "lab.mixture.liquid.create.button",
		}}
		cancelButtonProps={{
			type: "text",
			ghost: true,
		}}
		okButtonProps={{
			icon: <LiquidIcon/>,
			loading: createMutation.isLoading,
			size: "large",
		}}
		okText={t("lab.mixture.liquid.create.ok.button")}
		onOk={setShow => {
			createMutation.mutate({
				mixtureId: mixture.id,
			}, {
				onSuccess: async () => {
					await puffiesQueryInvalidate();
					await checkPriceQueryInvalidate();
					message.success(t("lab.mixture.liquid.create.success"));
					navigate("/lab/liquid");
				},
				onError: async () => {
					message.error(t("lab.mixture.liquid.create.failure"));
				},
				onSettled: () => {
					setShow(false);
				},
			});
		}}
		{...props}
	>
		<Trans i18nKey={"lab.mixture.liquid.create.content"}/>
		<Divider/>
		<MixturePreview mixture={mixture}/>
	</ModalButton>;
};
