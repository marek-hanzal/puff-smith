import {IUserFetch} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {TransactionList} from "@/puff-smith/site/root/transaction/@module/list/TransactionList";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {TransactionProviderControl} from "@/sdk/api/transaction/query";
import {Avatar} from "antd";

export default withRootLayout(function Transaction({user}: IUserFetch) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/transactions"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		headerPostfix={<UserIndexMenu user={user}/>}
	>
		<TransactionProviderControl
			applyFilter={{userId: user.id}}
			defaultOrderBy={{created: "desc"}}
		>
			<TransactionList user={user}/>
		</TransactionProviderControl>
	</RootPage>;
});

export const getServerSideProps = UserSource().withFetch("user", "userId");
