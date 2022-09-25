import {MobileLabPage} from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureInfiniteListSource, MixtureProviderControl} from "@/sdk/api/mixture/query";

export default withLabLayout(function Index() {
	return <>
		<MobileLabPage>
			{/*<LabMenu/>*/}
			<MixtureProviderControl
				defaultFilter={{
					aroma: {
						content: 12,
						volume: 120,
						vg: 0,
						pg: 100,
					},
					vg: 50,
					pg: 50,
					nicotine: 6,
				}}
			>
				<MixtureInfiniteListSource>
					{mixture => null}
				</MixtureInfiniteListSource>
			</MixtureProviderControl>
		</MobileLabPage>
	</>;
});
