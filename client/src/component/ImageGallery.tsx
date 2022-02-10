import {Image, Result, Space} from "antd";
import {FilesSource, useFilesSource} from "@/sdk/edde/api/shared/file/endpoint";
import {FC, useEffect, useState} from "react";
import {useDiscoveryContext, useLinkContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";
import {Centered} from "@leight-core/leight/dist";
import {FileDto} from "@/sdk/edde/file/dto";

type GalleryImage = { preview: FileDto, original: FileDto };

interface IImageGalleryInternalProps {
	show?: boolean;
}

const ImageGalleryInternal: FC<IImageGalleryInternalProps> = ({show = false}) => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(show);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const fileSource = useFilesSource();
	const [images, setImages] = useState<GalleryImage[]>([]);

	useEffect(() => {
		if (!fileSource.result.isSuccess) {
			return;
		}
		const source: any = {};
		fileSource.result.data.items.forEach(file => {
			(source[file.name] = source[file.name] || []).push(file);
		});
		setImages(Object.values<any>(source).map(item => ({preview: item[0], original: item[1]})));
	}, [fileSource.result?.data?.count || 0]);

	return images.length ? <>
		<Image.PreviewGroup preview={{visible, onVisibleChange: setVisible}}>
			<Centered>
				<Space size={'large'}>
					{images.map(({preview, original}) => <Image
						height={200}
						key={preview.id}
						src={linkContext.link('Edde.Shared.File.Download', {fileId: preview.id}, discoveryContext)}
						preview={{
							src: linkContext.link('Edde.Shared.File.Download', {fileId: original.id}, discoveryContext)
						}}
					/>)}
				</Space>
			</Centered>
		</Image.PreviewGroup>
	</> : <Result
		icon={<FileImageOutlined/>}
		title={t('common.gallery.no-images')}
	/>;
}

export interface IImageGalleryProps {
	show?: boolean
	path: string;
}

export const ImageGallery: FC<IImageGalleryProps> = ({show = false, path}) => {
	return <FilesSource
		filter={{
			paths: [path, path + '/original'],
		}}
		orderBy={{
			path: true,
		}}
	>
		<ImageGalleryInternal show={show}/>
	</FilesSource>
}
