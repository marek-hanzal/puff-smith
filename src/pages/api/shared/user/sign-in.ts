import {MutationEndpoint} from "@leight-core/endpoint";
import {ISession} from "@leight-core/api";

export interface ISignInRequest {
	readonly login: string;
	readonly password: string;
}

export default MutationEndpoint<"SignIn", ISignInRequest, ISession | null>(async ({res}) => {
	res.status(200).json(null);
});
