import {useCheckPriceQuery} from "@/sdk/api/transaction/check-price";
import {toHumanNumber} from "@leight-core/client";

export interface ICheckPriceResult {
	readonly loading: boolean;
	readonly pass: boolean;
	readonly notPass: boolean;

	asPrice(): { price: string }
}

export const useCheckPrice = (price: string): ICheckPriceResult => {
	const checkPriceQuery = useCheckPriceQuery({
		price,
	});

	const pass = checkPriceQuery.isSuccess && checkPriceQuery.data.pass;

	return {
		loading: checkPriceQuery.isFetching,
		pass,
		notPass: !pass,
		asPrice: () => ({
			price: checkPriceQuery.isSuccess ? toHumanNumber(checkPriceQuery.data.price) : '-',
		})
	};
}
