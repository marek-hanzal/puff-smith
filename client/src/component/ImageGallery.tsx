import {Divider, Image, Pagination, Result, Space} from "antd";
import {FC, useEffect, useState} from "react";
import {useDiscoveryContext, useLinkContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {FileImageOutlined} from "@ant-design/icons";
import {ImagesSource, useImagesSource} from "@/sdk/edde/api/shared/image/endpoint";
import {Centered} from "@leight-core/leight/dist";

interface IImageGalleryInternalProps {
	show?: boolean;
}

const ImageGalleryInternal: FC<IImageGalleryInternalProps> = ({show = false}) => {
	const {t} = useTranslation();
	const [visible, setVisible] = useState(show);
	const discoveryContext = useDiscoveryContext();
	const linkContext = useLinkContext();
	const imagesSource = useImagesSource();

	useEffect(() => {
		imagesSource.setSize(4);
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
	show?: boolean
	gallery: string;
}

export const ImageGallery: FC<IImageGalleryProps> = ({show = false, gallery}) => {
	return <ImagesSource
		filter={{
			gallery,
		}}
		orderBy={{
			stamp: false,
		}}
	>
		<ImageGalleryInternal show={show}/>
	</ImagesSource>
}
