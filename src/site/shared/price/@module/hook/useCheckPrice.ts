import {useCheckPriceQuery} from "@/sdk/api/transaction/check-price";
import {toHumanNumber} from "@leight-core/utils";

export interface ICheckPriceResult {
	readonly loading: boolean;
	readonly pass: boolean;
	readonly notPass: boolean;
	readonly price: number | undefined;

	asPrice(): { price: string };
}

export const useCheckPrice = (price: string): ICheckPriceResult => {
	const checkPriceQuery = useCheckPriceQuery({
		price,
	}, undefined, {
		keepPreviousData: true,
	});

	const pass = checkPriceQuery.isSuccess && checkPriceQuery.data.pass;

	return {
		loading: checkPriceQuery.isLoading,
		pass,
		notPass: !pass,
		price: checkPriceQuery.data?.price,
		asPrice: () => ({
			price: checkPriceQuery.isSuccess ? toHumanNumber(checkPriceQuery.data.price) : "-",
		})
	};
};
