import {UserIcon} from "@/puff-smith";
import {withRootLayout} from "@/puff-smith/../../../../_site/root";
import {UserHomeMenu, UserPatchForm} from "@/puff-smith/../../../../_site/root/user";
import {EditTemplate} from "@leight-core/common";
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
