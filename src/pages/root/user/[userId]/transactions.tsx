import {IUserFetchProps} from "@/puff-smith/service/user/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {TransactionList} from "@/puff-smith/site/root/transaction/@module/list/TransactionList";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {TransactionSourceControlProvider} from "@/sdk/api/transaction/query";
import {Avatar} from "antd";

export default withRootLayout(function Transaction({user}: IUserFetchProps) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/transactions"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		headerPostfix={<UserIndexMenu user={user}/>}
	>
		<TransactionSourceControlProvider
			applyFilter={{userId: user.id}}
			defaultOrderBy={{created: "desc"}}
		>
			<TransactionList user={user}/>
		</TransactionSourceControlProvider>
	</RootPage>;
});

export const getServerSideProps = UserService().pageFetch("user", "userId");
