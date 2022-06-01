import Icon from "@ant-design/icons";
import {IWithIdentity} from "@leight-core/api";
import {numbersOf} from "@leight-core/utils";
import {Radio, Tooltip} from "antd";
import {ComponentProps, FC} from "react";
import {useTranslation} from "react-i18next";
import {MdDeleteOutline, MdOutlineThumbsUpDown, MdThumbDownOffAlt, MdThumbUpOffAlt, MdVerified} from "react-icons/md";
import {UseMutationResult} from "react-query";

export interface ILikeDislikeInlineProps extends Partial<ComponentProps<typeof Radio["Group"]>> {
	id: string;
	tooltip?: string;
	rating?: number | null;
	mutator: UseMutationResult<any, any, IWithIdentity & { rating?: number | null; }>;
	onSuccess?: () => Promise<any>;
}

export const LikeDislikeInline: FC<ILikeDislikeInlineProps> = ({id, tooltip, rating, mutator, onSuccess, ...props}) => {
	const {t} = useTranslation();

	const map: any = {
		"-2": MdDeleteOutline,
		"-1": MdThumbDownOffAlt,
		"0": MdOutlineThumbsUpDown,
		"1": MdThumbUpOffAlt,
		"2": MdVerified,
	};

	return <Tooltip title={tooltip ? t(tooltip) : undefined}>
		<Radio.Group
			value={rating}
			disabled={mutator.isLoading}
			size={"large"}
			{...props}
		>
			{numbersOf(5).map(i => {
				const $value = i - 2;
				return <Radio.Button
					key={$value}
					value={$value}
					onClick={() => {
						mutator.mutate({rating: rating === $value ? null : $value, id}, {
							onSuccess,
						});
					}}
				>
					<Icon component={map[$value]}/>
				</Radio.Button>;
			})}
		</Radio.Group>
	</Tooltip>;
};
