import {IJobLogTypePreviewProps, JobLogTypePreview} from "@/puff-smith/site/shared/job";
import {JobLogDto} from "@/sdk/edde/job/dto/log";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IImportJobTypePreviewProps extends Partial<IJobLogTypePreviewProps> {
	jobLog: JobLogDto;
}

export const ImportJobTypePreview: FC<IImportJobTypePreviewProps> = ({jobLog}) => {
	return <JobLogTypePreview jobLog={jobLog}>
		{{}}
	</JobLogTypePreview>;
};
