import {IAroma} from "@/puff-smith/service/aroma/interface";
import {FC} from "react";

export interface IAromaViewProps {
	aroma: IAroma;
}

export const AromaView: FC<IAromaViewProps> = ({aroma}) => {
	return <h1>hello {aroma.name}! </h1>;
};
