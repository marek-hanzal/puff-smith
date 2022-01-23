import {DownloadIcon} from "@/puff-smith";
import {useGetPromise} from "@leight-core/leight";
import {Button, ButtonProps, message, Progress, Tooltip} from "antd";
import fileDownload from "js-file-download";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";
import {FileDto} from "@/sdk/edde/file/dto";
import {IDownloadQueryParams} from "@/sdk/edde/api/shared/file/endpoint";

export interface IDownloadFileProps extends Partial<ButtonProps> {
	file: FileDto;
	name?: string;
}

export const DownloadFile: FC<IDownloadFileProps> = ({file, name, ...props}) => {
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const {t} = useTranslation();

	const promise = useGetPromise<IDownloadQueryParams, any>("Edde.Shared.File.Download", {fileId: file.id}, {
		responseType: "blob",
		timeout: 0,
		onDownloadProgress: event => setProgress(Math.round((event.loaded * 100) / event.total))
	});

	return <Tooltip title={t("shared.file.download")}>
		<Button
			size={"large"}
			type={"primary"}
			icon={<DownloadIcon/>}
			loading={loading}
			onClick={() => {
				setLoading(true);
				setProgress(0);
				promise()
					.then(data => {
						message.success(t("puff-smith.file.download-success"));
						fileDownload(data, name || file.name);
						setLoading(false);
						setProgress(0);
					})
					.catch(e => {
						console.error(e);
						message.error(t("puff-smith.file.download-error"));
						setLoading(false);
						setProgress(0);
					});
			}}
			{...props}
		>
			{props.children ? props.children : t("puff-smith.file.download.title")}
		</Button>
		{loading && <Progress showInfo={false} percent={progress}/>}
	</Tooltip>;
};
