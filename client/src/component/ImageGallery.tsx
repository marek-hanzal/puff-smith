import {Divider, Image, Pagination, Result, Space} from "antd";
import {FC, useEffect, useState} from "react";
import {useDiscoveryContext, useLinkContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";
import {ImagesSource, useImagesSource} from "@/sdk/edde/api/shared/image/endpoint";
import {Centered} from "@leight-core/leight/dist";

interface IImageGalleryInternalProps {
	size?: number;
}

const ImageGalleryInternal: FC<IImageGalleryInternalProps> = ({size = 4}) => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(false);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const imagesSource = useImagesSource();

	useEffect(() => {
		imagesSource.setSize(size);
	}, []);

	return imagesSource.result.isSuccess && imagesSource.result?.data?.count > 0 ? <>
		<Image.PreviewGroup preview={{visible, onVisibleChange: setVisible}}>
			<Centered>
				<Space size={'large'}>
					{imagesSource.result.data.items.map(({preview, original}) => <Image
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
	</> : <Result
		icon={<FileImageOutlined/>}
		title={t('common.gallery.no-images')}
	/>;
}

export interface IImageGalleryProps {
	gallery: string;
	size?: number;
}

export const ImageGallery: FC<IImageGalleryProps> = ({size = 4, gallery}) => {
	return <ImagesSource
		filter={{
			gallery,
		}}
		orderBy={{
			stamp: false,
		}}
	>
		<ImageGalleryInternal size={size}/>
	</ImagesSource>
}
