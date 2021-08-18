import {UserPage, withUserLayout} from "@/vapers-dream/site/user";

export default withUserLayout(function Index() {
	return <UserPage name={"user.index"}>
	</UserPage>;
});
