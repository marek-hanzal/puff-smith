import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ImportPageMenu} from "@/puff-smith/site/root/import";
import {UploadTemplateForm} from "@/puff-smith/site/root/import/template";

// noinspection JSUnusedGlobalSymbols
export default withRootLayout(function UploadTemplate() {
	return <RootPage
		title={"root.import.upload-template"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<UploadTemplateForm translation={"root.import.template"}/>
	</RootPage>;
});
