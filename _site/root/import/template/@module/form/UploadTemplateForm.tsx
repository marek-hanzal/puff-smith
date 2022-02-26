import {IUploaderProps, Uploader} from "../../../../../shared/file";
import {EditOutlined, FileAddOutlined, SaveOutlined} from "@ant-design/icons";
import {Centered, Form, FormItem, Preview, Submit} from "@leight-core/common";
import {Col, Divider, Input, Row} from "antd";
import {FC, useState} from "react";

export interface IUploadTemplateFormProps extends Partial<IUploaderProps> {
	translation: string;
}

export const UploadTemplateForm: FC<IUploadTemplateFormProps> = props => {
	const [name, setName] = useState<string>();
	return <Row gutter={32}>
		<Col span={10}>
			<Form
				onSuccess={({values}) => {
					setName(values.name);
				}}
			>
				<FormItem field={"name"} labels={[props.translation + ".upload.name.label"]} required>
					<Input size={"large"} addonAfter={<EditOutlined/>}/>
				</FormItem>
				<Centered>
					<Submit icon={<SaveOutlined/>} label={props.translation + ".upload.submit.label"}/>
				</Centered>
			</Form>
			<Divider/>
			<Preview translation={props.translation}>
				{{
					name,
				}}
			</Preview>
		</Col>
		<Col span={14}>
			<Uploader
				replace
				icon={<FileAddOutlined/>}
				limit={64000}
				chunkSize={10}
				path={"/import-template"}
				filename={name}
				disabled={!name}
				{...props}
			/>
		</Col>
	</Row>;
};
