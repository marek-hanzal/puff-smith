import {DEFAULT_LIST_SIZE}   from "@/puff-smith/component/misc";
import {BrowserRootPage}     from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout}      from "@/puff-smith/site/root/@module/layout/layout";
import {FileList}            from "@/puff-smith/site/shared/file/@module/list/FileList";
import {DeleteButton}        from "@/puff-smith/ui/file/button/DeleteButton";
import {FileProviderControl} from "@/sdk/api/file/query";
import {
	ButtonBar,
	FileIcon,
	SelectionProvider
}                            from "@leight-core/viv";

export default withRootLayout(function Index() {
	return <BrowserRootPage
		title={"root.file"}
		menuSelection={["/root/file"]}
		icon={<FileIcon/>}
	>
		<FileProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
		>
			<SelectionProvider type={"multi"}>
				<ButtonBar>
					<DeleteButton/>
				</ButtonBar>
				<FileList/>
			</SelectionProvider>
		</FileProviderControl>
	</BrowserRootPage>;
});
