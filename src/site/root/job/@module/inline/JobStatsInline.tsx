import {CheckCircleOutlined, CloseCircleOutlined, MinusCircleOutlined, RiseOutlined} from "@ant-design/icons";
import {IJob} from "@leight-core/api";
import {Divider, Space, Typography} from "antd";
import {FC} from "react";

export interface IJobStatsInlineProps {
	job: IJob;
}

export const JobStatsInline: FC<IJobStatsInlineProps> = ({job}) => {
	return <Space size={0} split={<Divider type={"vertical"}/>}>
		{job.success && <Typography.Text type={"success"}>
			<Space>
				<CheckCircleOutlined/>
				<span>{job.success}</span>
			</Space>
		</Typography.Text>}
		{job.skip && <Typography.Text type={"warning"}>
			<Space>
				<MinusCircleOutlined/>
				<span>{job.skip}</span>
			</Space>
		</Typography.Text>}
		{job.failure && <Typography.Text type={"danger"}>
			<Space>
				<CloseCircleOutlined/>
				<span>{job.failure}</span>
			</Space>
		</Typography.Text>}
		{job.total > 0 && <Typography.Text type={"secondary"}>
			<Space>
				<RiseOutlined/>
				<span>{job.total}</span>
			</Space>
		</Typography.Text>}
	</Space>;
};
