import {asyncJob} from "@/puff-smith/agenda/agenda";
import {IImportParams, ImportJobName} from "@/puff-smith/agenda/job/import";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IJob} from "@leight-core/api";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Import", void, IJob<IImportParams>, IImportParams>(async ({query}) => asyncJob(ImportJobName, query));
