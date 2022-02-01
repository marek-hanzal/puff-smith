import {Image, Result} from "antd";
import {useFilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {FC, useState} from "react";
import {useDiscoveryContext, useLinkContext} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";

export interface IImageGalleryProps {
	onlyPreview?: boolean
	show?: boolean
	setShow?: (show: boolean) => void
}

export const ImageGallery: FC<IImageGalleryProps> = ({onlyPreview = false, show = false, setShow}) => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(show);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const fileSource = useFilesSource();
	return fileSource.result.isSuccess && fileSource.result.data.count > 0 ? <>
		<Image
			style={onlyPreview ? {display: 'none'} : undefined}
			preview={{
				src: linkContext.link('Edde.Shared.File.Download', {fileId: fileSource.result.data.items[0].id}, discoveryContext),
				visible: show,
				onVisibleChange: setShow
			}}
			width={onlyPreview ? undefined : '100%'}
			src={linkContext.link('Edde.Shared.File.Download', {fileId: fileSource.result.data.items[0].id}, discoveryContext)}
			onClick={() => {
				setVisible(true);
				setShow && setShow(true);
			}}
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
	</> : (onlyPreview ? null : <Result
		icon={<FileImageOutlined/>}
		title={t('common.gallery.no-images')}
	/>)
}
