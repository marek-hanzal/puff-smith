import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {BuildListToolbar} from "@/puff-smith/site/lab/build/@module/list/BuildListToolbar";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {ButtonLink, SelectionProvider} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.build.index"}
		menuSelection={["/lab/build"]}
		icon={<BuildIcon/>}
		extra={<ButtonLink
			type={"primary"}
			href={"/lab/build/create"}
			icon={<BuildIcon/>}
			label={"lab.build.create.button"}
		/>}
	>
		<BuildProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				created: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<BuildList
					header={() => <RowInline>
						<BuildListToolbar/>
					</RowInline>}
				/>
			</SelectionProvider>
		</BuildProviderControl>
	</LabPage>;
});
