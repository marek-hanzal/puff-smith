import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/inventory/mixture/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixtureSourceControlProvider
			defaultOrderBy={[
				{
					aroma: {
						name: "asc",
					}
				},
				{
					vg: "desc",
				},
				{
					nicotine: "asc",
				}
			] as any}
		>
			<MixtureList
				header={() => <MixtureFilter/>}
			/>
		</MixtureSourceControlProvider>
	</LabPage>;
});
