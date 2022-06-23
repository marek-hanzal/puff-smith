import {IUser} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<"Whoami", IUser>({
	handler: async ({user}) => UserSource().withUser(user).whoami(),
});
