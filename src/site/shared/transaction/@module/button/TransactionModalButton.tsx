import {PurchaseIcon} from "@/puff-smith/component/icon/PurchaseIcon";
import {Price} from "@/puff-smith/component/Price";
import {usePuffiesQuery, usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {IMutationHook} from "@leight-core/api";
import {ModalButton} from "@leight-core/client";
import {toHumanNumber} from "@leight-core/utils";
import {ButtonProps, message, Tooltip} from "antd";
import {PropsWithChildren} from "react";
import {Trans, useTranslation} from "react-i18next";
import {UseQueryResult} from "react-query";

type IMutationRequest<T> = T extends IMutationHook<infer TRequest, any> ? TRequest : T;

export interface ITransactionModalButtonProps<THook extends IMutationHook<any, any>> extends Partial<ButtonProps> {
	toMutate(): IMutationRequest<THook>;

	isDisabled?(cost: number | null | undefined, puffiesQuery: UseQueryResult<number, unknown>): boolean;

	useCreateMutation: THook;
	cost?: number | null;
	translation: string;

	onOk?(): void;

	onSuccess?(): void;
}

export function TransactionModalButton<THook extends IMutationHook<any, any>>(
	{
		cost,
		translation,
		useCreateMutation,
		toMutate,
		isDisabled = (cost, puffiesQuery) => puffiesQuery.isLoading || (puffiesQuery.isSuccess && (cost || 0) > puffiesQuery.data),
		onOk,
		onSuccess,
		...props
	}: PropsWithChildren<ITransactionModalButtonProps<THook>>) {
	const {t} = useTranslation();
	const puffiesQuery = usePuffiesQuery();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	const createMutation = useCreateMutation();
	return <Tooltip title={t(translation + ".buy.tooltip")}>
		<ModalButton
			button={{
				icon: <PurchaseIcon/>,
				type: "primary",
				size: "large",
				disabled: isDisabled(cost, puffiesQuery),
				loading: createMutation.isLoading,
				children: <Price price={cost && cost >= 0 ? cost : undefined} defaultText={translation + ".buy.free"}/>,
				...props,
			}}
			okText={t(translation + ".buy.confirm.button")}
			title={t(translation + ".buy.confirm.title")}
			onOk={setShow => {
				onOk?.();
				createMutation.mutate(toMutate(), {
					onSuccess: async data => {
						message.success(t(translation + ".buy.success", {data}));
						await puffiesQueryInvalidate();
						onSuccess?.();
					},
					onError: error => {
						message.error(t(translation + ".buy.error." + error?.response?.data, t(translation + ".buy.error")));
					}
				});
				setShow(false);
			}}
		>
			<Trans i18nKey={translation + ".buy.confirm.content"} values={{cost: toHumanNumber(cost, "0", 4)}}/>
		</ModalButton>
	</Tooltip>;
}
