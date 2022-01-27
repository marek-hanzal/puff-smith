import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {QuickMenu} from "@leight-core/leight/dist";
import {Menu} from "antd";

export default withLabLayout(function List() {
	return <LabPage
		title={"lab.mixture.list"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureCreateButton type={'link'} size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<MixtureTable/>
	</LabPage>;
});
