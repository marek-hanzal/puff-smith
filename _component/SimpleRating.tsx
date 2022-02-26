import {FC} from "react";
import {Typography} from "antd";

export interface ISimpleRatingProps {
	value?: number | null
	of?: number
}

export const SimpleRating: FC<ISimpleRatingProps> = ({value, of = 9}) => {
	return value ? <>{value}<Typography.Text>/{of}</Typography.Text></> : <>-</>;
}
