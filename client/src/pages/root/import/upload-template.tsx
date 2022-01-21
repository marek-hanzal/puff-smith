import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ImportPageMenu} from "@/puff-smith/site/root/import";
import {UploadTemplateForm} from "@/puff-smith/site/root/import/template";

export default withRootLayout(function UploadTemplate() {
	return <RootPage
		name={"root.import.upload-template"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<UploadTemplateForm translation={"root.import.template"}/>
	</RootPage>;
});
