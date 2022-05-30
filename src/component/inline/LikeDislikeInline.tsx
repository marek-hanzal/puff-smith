import {DislikeOutlined, LikeOutlined} from "@ant-design/icons";
import {IWithIdentity} from "@leight-core/api";
import {ButtonBar} from "@leight-core/client";
import {Button, Spin} from "antd";
import {FC} from "react";
import {UseMutationResult} from "react-query";

export interface ILikeDislikeInlineProps {
	id: string;
	rating?: number | null;
	mutator: UseMutationResult<any, any, { rating?: number | null; } & IWithIdentity>;
	onSuccess?: () => Promise<any>;
}

export const LikeDislikeInline: FC<ILikeDislikeInlineProps> = ({id, rating, mutator, onSuccess}) => {
	return <ButtonBar>
		<Spin delay={100} spinning={mutator.isLoading} indicator={<></>}>
			{(!rating || rating < 0) && <Button
				size={"large"}
				type={"link"}
				danger
				icon={<DislikeOutlined/>}
				onClick={() => {
					mutator.mutate({rating: rating ? null : -1, id}, {
						onSuccess,
					});
				}}
			/>}
			{(!rating || rating > 0) && <Button
				size={"large"}
				type={"link"}
				icon={<LikeOutlined/>}
				onClick={() => {
					mutator.mutate({rating: rating ? null : 1, id}, {
						onSuccess,
					});
				}}
			/>}
		</Spin>
	</ButtonBar>;
};
