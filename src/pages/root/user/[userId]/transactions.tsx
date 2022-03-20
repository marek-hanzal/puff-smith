import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UserContextMenu} from "@/puff-smith/site/root/user";
import {handleUserFetch, IUserFetchProps} from "@/puff-smith/service/user";
import {Avatar} from "antd";
import {TransactionsSourceControlProvider} from "@/sdk/api/transaction/query";
import {TransactionList} from "@/puff-smith/site/root/transaction";

export default withRootLayout(function Transactions({user}: IUserFetchProps) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={['/root/user', '/root/user/[userId]/transactions']}
		icon={<Avatar src={user.image} size={'large'}/>}
		headerPostfix={<UserContextMenu user={user}/>}
	>
		<TransactionsSourceControlProvider>
			<TransactionList user={user}/>
		</TransactionsSourceControlProvider>
	</RootPage>;
});

export const getServerSideProps = handleUserFetch;
