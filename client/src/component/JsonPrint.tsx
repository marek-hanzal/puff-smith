import {prettyPrintJson} from "pretty-print-json";
import {FC} from "react";

export interface IJsonPrintProps {
	json: any;
}

export const JsonPrint: FC<IJsonPrintProps> = ({json}) => {
	return json ? <pre style={{margin: 0}} dangerouslySetInnerHTML={{__html: prettyPrintJson.toHtml(json)}}/> : null;
};
