import {IUploaderProps, Uploader} from "@/puff-smith/site/shared/file";
import {CopyOutlined, EditOutlined, SaveOutlined} from "@ant-design/icons";
import {BoolInline, Centered, Form, FormItem, Preview, Submit, SwitchItem} from "@leight-core/leight";
import {Col, Divider, Input, Row} from "antd";
import {FC, useState} from "react";

export interface IFileUploadProps extends Partial<IUploaderProps> {
	translation: string;
}

export const FileUpload: FC<IFileUploadProps> = props => {
	const [path, setPath] = useState<string>();
	const [name, setName] = useState<string>();
	const [replace, setReplace] = useState<boolean>(false);
	return <Row gutter={32}>
		<Col span={10}>
			<Form
				onSuccess={({values}) => {
					setPath(values.path);
					setName(values.name);
					setReplace(values.replace);
				}}
			>
				<FormItem field={"path"} labels={["shared.file.upload.path.label"]} required>
					<Input size={"large"} addonAfter={<CopyOutlined/>}/>
				</FormItem>
				<FormItem field={"name"} labels={["shared.file.upload.name.label"]}>
					<Input size={"large"} addonAfter={<EditOutlined/>}/>
				</FormItem>
				<SwitchItem field={"replace"} labels={["shared.file.upload.replace.label"]}/>
				<Centered>
					<Submit icon={<SaveOutlined/>} label={"shared.file.upload.submit.label"}/>
				</Centered>
			</Form>
			<Divider/>
			<Preview translation={props.translation}>
				{{
					path,
					name,
					replace: <BoolInline bool={replace}/>,
				}}
			</Preview>
		</Col>
		<Col span={14}>
			<Uploader
				limit={2048}
				chunkSize={4}
				replace={replace}
				path={path!}
				filename={name}
				disabled={!path}
				{...props}
			/>
		</Col>
	</Row>;
};
