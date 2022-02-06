import {FC} from "react";
import {ButtonLink, IButtonLinkProps} from "@leight-core/leight/dist";

export interface IBreadcrumbButtonProps extends IButtonLinkProps {
}

export const BreadcrumbButton: FC<IBreadcrumbButtonProps> = props => {
	return <ButtonLink
		style={{padding: 0}}
		type={'link'}
		size={'small'}
		{...props}
	/>;
}
