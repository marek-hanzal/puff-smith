import {UserIcon} from "@/puff-smith";
import {withRootLayout} from "@/puff-smith/site/root";
import {UserHomeMenu, UserPreview} from "@/puff-smith/site/root/user";
import {UserPage} from "@/sdk/puff-smith/api/root/user/endpoint";
import {PreviewTemplate} from "@leight-core/leight";

export default withRootLayout(function Index() {
	return <UserPage
		name={"root.user.home"}
	>
		{user => <>
			<UserHomeMenu/>
			<PreviewTemplate
				title={user.name}
				icon={<UserIcon/>}
			>
				<UserPreview user={user}/>
			</PreviewTemplate>
		</>}
	</UserPage>;
});
