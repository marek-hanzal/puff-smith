import {FC} from "react";
import {createPostMutation, Form, IFormProps} from "@leight-core/common";

export interface IFooBar {
}

export type I
"Upload"
QueryParams = {chunkId: string};

export const use
"Upload"
Mutation = createPostMutation < I
"Upload"
QueryParams, string, void > ("/api/leight/shared/file/upload/[chunkId]");

export interface I

"Upload"
DefaultFormProps
extends
Partial < IFormProps < {chunkId: string}, string, void >> {}

export const "Upload"
FC < I
"Upload"
DefaultFormProps > = props => <Form<{ chunkId: string }, string, void>
	useMutation={use"Upload"Mutation}
	{...props}
/>
