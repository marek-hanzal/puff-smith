import {UserIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UserCreateForm, UserPageMenu} from "@/puff-smith/site/root/user";
import {CreateTemplate} from "@leight-core/leight";

export default withRootLayout(function Create() {
	return <RootPage
		name={"root.user.create"}
	>
		<RootMenu/>
		<UserPageMenu/>
		<CreateTemplate
			icon={<UserIcon/>}
			label={"root.user"}
		>
			<UserCreateForm/>
		</CreateTemplate>
	</RootPage>;
});
