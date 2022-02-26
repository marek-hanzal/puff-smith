import {ImportIcon} from "@/puff-smith";
import {JobDto} from "@/sdk/edde/job/dto";
import {useExcelMutation} from "@/sdk/edde/api/shared/import/endpoint";
import {CheckOutlined, UploadOutlined} from "@ant-design/icons";
import {Centered, Form, FormItem, IFormProps, Submit} from "@leight-core/common";
import {Space, Typography, Upload} from "antd";
import {RcFile} from "antd/lib/upload";
import {FC, useState} from "react";
import {useTranslation} from "react-i18next";

export interface IImportFormProps extends Partial<IFormProps<void, void, JobDto>> {
	accept?: string;
	group: string;
}

export const ImportForm: FC<IImportFormProps> = ({group, accept = ".xls,.xlsx,.zip", ...props}) => {
	const {t} = useTranslation();
	const [file, setFile] = useState<RcFile>();
	return <Form<void, void, JobDto>
		useMutation={useExcelMutation}
		toMutation={() => {
			const formData = new FormData();
			formData.append("file", file!!);
			return formData;
		}}
		{...props}
	>
		<FormItem field={"file"} required>
			<Upload.Dragger
				accept={accept}
				showUploadList={false}
				beforeUpload={file => {
					setFile(file);
					return false;
				}}
				style={{padding: "1.5em 1em"}}
			>
				{file ?
					<Typography.Title style={{margin: 0}} level={4}><Space><CheckOutlined/><span>{file.name}</span></Space></Typography.Title> :
					<Typography.Title style={{margin: 0}} level={4} type={"secondary"}><Space><UploadOutlined/><span>{t("shared.import.upload")}</span></Space></Typography.Title>
				}
			</Upload.Dragger>
		</FormItem>
		<Centered>
			<Submit icon={<ImportIcon/>} label={"shared.import.submit"}/>
		</Centered>
	</Form>;
};
