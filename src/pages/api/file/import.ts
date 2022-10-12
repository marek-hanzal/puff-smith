import {IImportJobParams}   from "@/puff-smith/jobs/import/interface";
import {ImportJob}          from "@/puff-smith/jobs/import/job";
import {
	asyncContainer,
	ContainerClass
}                           from "@/puff-smith/service/Container";
import {IImportQueryParams} from "@/sdk/api/file/import";
import {MutationEndpoint}   from "@leight-core/server";

export default MutationEndpoint<ContainerClass, IImportJobParams, IImportQueryParams>({
	name:      "Import",
	container: asyncContainer,
	handler:   ImportJob.request,
});
