import {Price, PurchaseIcon} from "@/puff-smith";
import {usePuffiesQuery} from "@/sdk/api/user/puffies";
import {Space} from "antd";
import {FC} from "react";

export interface IUserPuffiesProps {
}

export const UserPuffies: FC<IUserPuffiesProps> = () => {
	const puffiesQuery = usePuffiesQuery(undefined, undefined, {
		refetchInterval: 1000 * 60 * 5,
		refetchOnWindowFocus: "always",
		staleTime: 1000 * 60 * 5,
	});
	return <Space>
		<PurchaseIcon/>
		<Price price={puffiesQuery.data}/>
	</Space>;
};
