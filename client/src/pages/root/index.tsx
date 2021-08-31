import {LogoFullIcon} from "@/ps";
import {RootPage, withRootLayout} from "@/ps/site/root";
import {Result} from "antd";

export default withRootLayout(function Index() {
	return <RootPage name={"root.index"}>
		<Result
			icon={<LogoFullIcon/>}
		/>
	</RootPage>;
});
