import {UserPage, withUserLayout} from "@/ps/site/user";

export default withUserLayout(function Index() {
	return <UserPage name={"user.index"}>
	</UserPage>;
});
