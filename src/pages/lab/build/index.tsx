import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildList} from "@/puff-smith/site/lab/build/@module/list/BuildList";
import {BuildListToolbar} from "@/puff-smith/site/lab/build/@module/list/BuildListToolbar";
import {BuildProviderControl} from "@/sdk/api/lab/build/query";
import {ButtonBar, ButtonLink, SelectionProvider} from "@leight-core/client";

export default withLabLayout(function Index() {
	return <SelectionProvider type={"multi"}>
		<LabPage
			title={"lab.build.index"}
			menuSelection={["/lab/build"]}
			icon={<BuildIcon/>}
			extra={<ButtonBar size={8}>
				<BuildListToolbar/>
				<ButtonLink
					type={"primary"}
					href={"/lab/build/create"}
					icon={<BuildIcon/>}
					label={"lab.build.create.button"}
				/>
			</ButtonBar>}
			withHelp={{
				translation: "lab.build.index",
			}}
		>
			<BuildProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
				defaultOrderBy={{
					created: "desc",
				}}
			>
				<BuildList/>
			</BuildProviderControl>
		</LabPage>
	</SelectionProvider>;
});
