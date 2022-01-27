import {UserIcon} from "@/puff-smith";
import {withRootLayout} from "@/puff-smith/site/root";
import {UserHomeMenu, UserPatchForm} from "@/puff-smith/site/root/user";
import {EditTemplate} from "@leight-core/leight";
import {UserPage} from "@/sdk/puff-smith/api/root/user/endpoint";

export default withRootLayout(function Edit() {
	return <UserPage
		title={"root.user.edit"}
	>
		{user => <>
			<UserHomeMenu/>
			<EditTemplate
				title={user.name}
				icon={<UserIcon/>}
			>
				<UserPatchForm user={user}/>
			</EditTemplate>
		</>}
	</UserPage>;
});
