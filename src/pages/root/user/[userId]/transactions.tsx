import {IUserFetchProps, UserService} from "@/puff-smith/service/user";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {TransactionList} from "@/puff-smith/site/root/transaction";
import {UserContextMenu} from "@/puff-smith/site/root/user";
import {TransactionsSourceControlProvider} from "@/sdk/api/transaction/query";
import {Avatar} from "antd";

export default withRootLayout(function Transactions({user}: IUserFetchProps) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/transactions"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		headerPostfix={<UserContextMenu user={user}/>}
	>
		<TransactionsSourceControlProvider
			applyFilter={{userId: user.id}}
			defaultOrderBy={{created: "desc"}}
		>
			<TransactionList user={user}/>
		</TransactionsSourceControlProvider>
	</RootPage>;
});

export const getServerSideProps = UserService().pageFetch("user", "userId");
