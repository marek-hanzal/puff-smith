import {FileDto} from "@/sdk/edde/file/dto";
import {useCommitMutation} from "@/sdk/edde/api/shared/file/endpoint";
import {CheckCircleOutlined} from "@ant-design/icons";
import {DeleteItemIcon, formatBytes, isString, useDiscoveryContext} from "@leight-core/leight";
import {Button, Divider, message, Progress, Result, Space, Upload, UploadProps} from "antd";
import {RcFile, UploadChangeParam} from "antd/lib/upload";
import axios from "axios";
import {UploadRequestOption} from "rc-upload/lib/interface";
import {FC, ReactNode, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {v4} from "uuid";

export interface IUploaderProps extends Partial<UploadProps> {
	translation: string;
	chunkSize?: number;
	replace?: boolean;
	limit?: number;
	icon?: ReactNode;
	/**
	 * Where the file will be committed.
	 */
	path: string;
	/**
	 * Optional file name.
	 */
	filename?: string | (() => string);
	disabled?: boolean;
	onSuccess?: (file: FileDto) => void;
}

export const Uploader: FC<IUploaderProps> = (
	{
		translation,
		icon,
		path,
		filename,
		replace = false,
		disabled = false,
		chunkSize = 8,
		limit = 64,
		onSuccess = () => null,
		children,
		...props
	}) => {
	const {t} = useTranslation();

	const defaultChunkSize = 1048576 * chunkSize;

	const discoveryContext = useDiscoveryContext();
	const [progress, setProgress] = useState(0);

	const [counter, setCounter] = useState(1);
	const [beginningOfTheChunk, setBeginningOfTheChunk] = useState(0);
	const [endOfTheChunk, setEndOfTheChunk] = useState(defaultChunkSize);
	const [chunkCount, setChunkCount] = useState(0);
	const [fileSize, setFileSize] = useState(0);
	const [uuid, setUuid] = useState<string>(v4());
	const [option, setOption] = useState<UploadRequestOption>(undefined as any);
	const [error, setError] = useState(false);
	const currentName = useRef<string>(filename as string);

	const commitMutation = useCommitMutation();

	function reset() {
		setFileSize(0);
		setOption(undefined as any);
		setError(false);
		setProgress(0);
		setCounter(1);
		setBeginningOfTheChunk(0);
		setEndOfTheChunk(defaultChunkSize);
		setUuid(v4());
	}

	useEffect(() => {
		fileSize > 0 && option && upload();
	}, [option, progress]);

	function upload() {
		counter === 1 && (() => {
			message.success(t(translation + ".upload.started"));
			currentName.current = filename ? (isString(filename) ? filename : (filename as any)()) : null;
		})();
		setCounter(counter => counter + 1);
		counter <= chunkCount && chunk(option.file.slice(beginningOfTheChunk, endOfTheChunk));
	}

	async function chunk(chunk?: Blob | string) {
		try {
			await axios.post(discoveryContext.link(option.action, {uuid}), chunk);
			setBeginningOfTheChunk(endOfTheChunk);
			setEndOfTheChunk(endOfTheChunk + defaultChunkSize);
			if (counter === chunkCount) {
				setProgress(99.99);
				commitMutation.mutate({
					uuid,
					path,
					name: currentName.current,
					replace,
				}, {
					onSuccess: (file) => {
						setProgress(100);
						message.success(t(translation + ".upload.success"));
						setTimeout(() => {
							reset();
							onSuccess(file);
						}, 2500);
					},
					onError: () => {
						setError(true);
						message.error(t(translation + ".upload.failed"));
						console.error(error);
					},
				});
			} else {
				setProgress((counter / chunkCount) * 100);
			}
		} catch (error) {
			setError(true);
			message.error(t(translation + ".upload.failed"));
			console.error(error);
		}
	}

	const Buttons = () => {
		return <Space>
			{!error && option && progress < 100 && <Button
				icon={<DeleteItemIcon/>}
				size={"large"}
				danger
				ghost
				onClick={e => {
					e.stopPropagation();
					reset();
					message.success(t(translation + ".cancel.success"));
				}}
			>
				{t(translation + ".cancel.upload")}
			</Button>}
			{error && <Button
				icon={<CheckCircleOutlined/>}
				size={"large"}
				ghost
				type={"primary"}
				onClick={e => {
					e.stopPropagation();
					reset();
				}}
			>
				{t(translation + ".reset.upload")}
			</Button>}
		</Space>;
	};

	return <>
		<Upload.Dragger
			listType={"text"}
			action={"Marsh.Shared.File.Upload"}
			customRequest={setOption}
			beforeUpload={(file: RcFile): boolean => {
				const hasValidSize = file.size / 1024 / 1024 < limit;
				if (!hasValidSize) {
					message.error(t([translation + ".file-too-large", "common.error.file-too-large"], {size: formatBytes(file.size), limit: formatBytes(limit * 1024 * 1024)}));
				}
				return hasValidSize;
			}}
			onChange={(info: UploadChangeParam) => {
				const size = info.file.size || 0;
				reset();
				setFileSize(size);
				setChunkCount(size % defaultChunkSize == 0 ? size / defaultChunkSize : Math.floor(size / defaultChunkSize) + 1);
			}}
			disabled={!!option || disabled}
			showUploadList={false}
			{...props}
		>
			{!option && !error && <Result
				icon={icon}
				status={disabled ? "warning" : "info"}
				title={t(translation + ".upload")}
				subTitle={t(translation + ".upload.hint")}
				extra={<Progress size={"default"} type={"dashboard"} format={item => item?.toFixed(1) + "%"}/>}
			/>}
			{option && !error && <Result
				icon={icon}
				status={progress < 100 ? "info" : "success"}
				title={t(translation + ".upload")}
				subTitle={t(translation + ".upload.hint")}
				extra={<Progress size={"default"} type={"dashboard"} percent={progress} format={item => item?.toFixed(1) + "%"} status={progress < 100 ? "active" : "success"}/>}
			>
				<Buttons/>
			</Result>}
			{option && error && <Result
				icon={icon}
				status={"error"}
				title={t(translation + ".upload.error")}
				subTitle={t(translation + ".upload.error.hint")}
				extra={<Progress size={"default"} type={"dashboard"} percent={progress} format={item => item?.toFixed(1) + "%"} status={"exception"}/>}
			>
				<Buttons/>
			</Result>}
		</Upload.Dragger>
		{children && <Divider/>}
		{children}
	</>;
};