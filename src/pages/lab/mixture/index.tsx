import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {QuickFilter} from "@/puff-smith/site/shared/mixture/@module/filter/QuickFilter";
import {MixturesSourceControlProvider} from "@/sdk/api/mixture/query";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixturesSourceControlProvider
			applyFilter={{
				ownedByCurrentUser: true,
				error: null,
			}}
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
				header={() => <QuickFilter/>}
			/>
		</MixturesSourceControlProvider>
	</LabPage>;
});
