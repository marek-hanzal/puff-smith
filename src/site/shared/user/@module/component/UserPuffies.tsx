import {FC} from "react";
import {Price, PurchaseIcon} from "@/puff-smith";
import {usePuffiesQuery} from "@/sdk/api/user/puffies";
import {Space} from "antd";

export interface IUserPuffiesProps {
}

export const UserPuffies: FC<IUserPuffiesProps> = () => {
	const puffiesQuery = usePuffiesQuery(undefined, undefined, {
		refetchInterval: 5000,
	});
	return <Space>
		<PurchaseIcon/>
		<Price price={puffiesQuery.data}/>
	</Space>
}
