import {Image, Result} from "antd";
import {useFilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {FC, useState} from "react";
import {useDiscoveryContext, useLinkContext} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";

export interface IImageGalleryProps {
}

export const ImageGallery: FC<IImageGalleryProps> = () => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(false);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const fileSource = useFilesSource();
	return fileSource.result.isSuccess && fileSource.result.data.count > 0 ? <>
		<Image
			preview={{visible: false}}
			width={'100%'}
			src={linkContext.link('Edde.Shared.File.Download', {fileId: fileSource.result.data.items[0].id}, discoveryContext)}
			onClick={() => setVisible(true)}
		/>
		<div style={{display: 'none'}}>
			<Image.PreviewGroup preview={{visible, onVisibleChange: setVisible}}>
				{fileSource.result.data.items.map(file => <Image
					placeholder
					height={200}
					key={file.id}
					src={linkContext.link('Edde.Shared.File.Download', {fileId: file.id}, discoveryContext)}
				/>)}
			</Image.PreviewGroup>
		</div>
	</> : <Result
		icon={<FileImageOutlined/>}
		title={t('common.gallery.no-images')}
	/>;
}
