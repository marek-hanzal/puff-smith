import {BaseEditor} from "slate";
import {ReactEditor} from "slate-react";

export type CustomElement = {
	type: "paragraph";
	children: CustomText[];
} & {
	align?: string;
};

export type CustomText = { text: string };

export type IFormat = string;

export const LIST_TYPES = ["numbered-list", "bulleted-list"];
export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];


declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: any;
		Text: { text: string };
	}
}
