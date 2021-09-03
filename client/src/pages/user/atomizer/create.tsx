import {AtomizerIcon} from "@/ps";
import {UserMenu, UserPage, withUserLayout} from "@/ps/site/user";
import {AtomizerCreateForm} from "@/ps/site/user/module/atomizer";
import {CreateTemplate} from "@leight-core/leight";

export default withUserLayout(function Create() {
	return <UserPage
		name={"user.atomizer.create"}
		menu={() => <UserMenu/>}
	>
		<CreateTemplate
			icon={<AtomizerIcon/>}
			title={"user.atomizer"}
		>
			<AtomizerCreateForm/>
		</CreateTemplate>
	</UserPage>;
});
