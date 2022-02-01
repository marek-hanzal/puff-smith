import {Button, ButtonProps} from "antd";
import {FC, useState} from "react";
import {ImageGallery} from "@/puff-smith/component/ImageGallery";
import {FileImageOutlined} from "@ant-design/icons";
import {useFilesSource} from "@/sdk/edde/api/shared/file/endpoint";

export interface IGalleryButtonProps extends Partial<ButtonProps> {
}

export const GalleryButton: FC<IGalleryButtonProps> = props => {
	const [show, setShow] = useState(false);
	const filesSource = useFilesSource();
	return <>
		<ImageGallery
			onlyPreview
			show={show}
			setShow={setShow}
		/>
		<Button
			icon={<FileImageOutlined/>}
			disabled={!filesSource.result.isSuccess || filesSource.result.data.count <= 0}
			type={'link'}
			size={'large'}
			onClick={() => setShow(true)}
			{...props}
		/>
	</>
}
