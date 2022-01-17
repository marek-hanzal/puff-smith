import {Card, CardProps} from "antd";
import {FC} from "react";

export interface IInfoCardProps extends Partial<CardProps> {
}

export const InfoCard: FC<IInfoCardProps> = props => {
	return <Card
		style={{backgroundColor: "#FCFCFC"}}
		{...props}
	/>;
};
