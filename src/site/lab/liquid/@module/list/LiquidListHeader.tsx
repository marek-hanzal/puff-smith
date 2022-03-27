import {FC} from "react";
import {ButtonBar} from "@leight-core/client";
import {LiquidCreateButton} from "@/puff-smith/site/lab/liquid";
import {IUser} from "@/puff-smith/service/user";
import {Divider} from "antd";

export interface ILiquidListHeaderProps {
	user?: IUser;
}

export const LiquidListHeader: FC<ILiquidListHeaderProps> = ({user}) => {
	return <ButtonBar split={<Divider type={'vertical'}/>}>
		<LiquidCreateButton user={user}/>
	</ButtonBar>
}
