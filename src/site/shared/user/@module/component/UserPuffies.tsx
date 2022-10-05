import {PurchaseIcon}    from "@/puff-smith/component/icon/PurchaseIcon";
import {Price}           from "@/puff-smith/component/Price";
import {usePuffiesQuery} from "@/sdk/api/user/puffies";
import {LoaderIcon}      from "@leight-core/client";
import {Space}           from "antd";
import {FC}              from "react";

export interface IUserPuffiesProps {
}

export const UserPuffies: FC<IUserPuffiesProps> = () => {
	const puffiesQuery = usePuffiesQuery(undefined, undefined, {
		refetchInterval:      1000 * 60 * 5,
		refetchOnWindowFocus: "always",
		staleTime:            1000 * 60 * 5,
	});
	return <Space>
		{puffiesQuery.isFetching ? <LoaderIcon/> : <PurchaseIcon/>}
		<Price price={puffiesQuery.data}/>
	</Space>;
};
