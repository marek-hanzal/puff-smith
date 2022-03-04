import {IJobLogTypePreviewProps, JobLogTypePreview} from "../../../job";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {FC} from "react";

export interface IImportJobTypePreviewProps extends Partial<IJobLogTypePreviewProps> {
	jobLog: JobLogDto;
}

export const ImportJobTypePreview: FC<IImportJobTypePreviewProps> = ({jobLog}) => {
	return <JobLogTypePreview jobLog={jobLog}>
		{{}}
	</JobLogTypePreview>;
};