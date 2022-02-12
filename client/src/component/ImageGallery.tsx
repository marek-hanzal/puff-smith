import {Divider, Image, Pagination, Result, Space} from "antd";
import {FC, useEffect, useState} from "react";
import {Centered, useDiscoveryContext, useIsMobile, useLinkContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";
import {ImagesSource, useImagesSource} from "@/sdk/edde/api/shared/image/endpoint";

interface IImageGalleryInternalProps {
	size?: number;
	hideEmpty?: boolean;
}

const ImageGalleryInternal: FC<IImageGalleryInternalProps> = ({size = 4, hideEmpty = false}) => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(false);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const imagesSource = useImagesSource();
	const isMobile = useIsMobile();

	useEffect(() => {
		imagesSource.setSize(isMobile ? 1 : size);
	}, []);

	return imagesSource.hasData() ? <>
		<Image.PreviewGroup preview={{visible, onVisibleChange: setVisible}}>
			<Centered>
				<Space size={'large'}>
					{imagesSource.map(({preview, original}) => <Image
						height={200}
						key={preview.id}
						src={linkContext.link('Edde.Shared.File.Download', {fileId: preview.id}, discoveryContext)}
						preview={{
							src: linkContext.link('Edde.Shared.File.Download', {fileId: original.id}, discoveryContext)
						}}
					/>)}
				</Space>
			</Centered>
			<Divider/>
			<Centered>
				<Pagination {...imagesSource.pagination()} size={'default'}/>
			</Centered>
		</Image.PreviewGroup>
	</> : (hideEmpty ? <></> : <Result
		icon={<FileImageOutlined/>}
		title={t('common.gallery.no-images')}
	/>);
}

export interface IImageGalleryProps {
	gallery: string;
	size?: number;
	hideEmpty?: boolean
}

export const ImageGallery: FC<IImageGalleryProps> = ({size = 4, hideEmpty = false, gallery}) => {
	const isMobile = useIsMobile();
	return <ImagesSource
		filter={{
			gallery,
		}}
		orderBy={{
			stamp: false,
		}}
	>
		<ImageGalleryInternal hideEmpty={hideEmpty} size={isMobile ? 1 : size}/>
	</ImagesSource>
}
