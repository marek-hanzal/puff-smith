import {CheckCircleOutlined, CloseCircleOutlined, MinusCircleOutlined} from "@ant-design/icons";
import {IJob} from "@leight-core/api";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IJobStatsInlineProps {
	job: IJob;
}

export const JobStatsInline: FC<IJobStatsInlineProps> = ({job}) => {
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		<Typography.Text type={"success"}>
			<Space>
				<CheckCircleOutlined/>
				<span>{job.success}</span>
			</Space>
		</Typography.Text>
		<Typography.Text type={"warning"}>
			<Space>
				<MinusCircleOutlined/>
				<span>{job.skip || 0}</span>
			</Space>
		</Typography.Text>
		<Typography.Text type={"danger"}>
			<Space>
				<CloseCircleOutlined/>
				<span>{job.failure || 0}</span>
			</Space>
		</Typography.Text>
	</Space>;
};
