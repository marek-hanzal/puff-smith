import {
	CloseOutlined,
	PlusOutlined
}                 from "@ant-design/icons";
import {IconText} from "@leight-core/viv";
import {Tabs}     from "antd";
import {
	ComponentProps,
	FC,
	ReactNode
}                 from "react";

export interface ITabAndOrProps extends Partial<ComponentProps<typeof Tabs>> {
	name: string;
	and: ReactNode;
	or: ReactNode;
	defaultTab?: "filter.and" | "filter.or";
	orCondition?: () => boolean;
}

export const TabAndOr: FC<ITabAndOrProps> = ({name, and, or, defaultTab, orCondition = () => false, ...props}) => {
	return <Tabs
		size={"small"}
		tabPosition={"right"}
		defaultActiveKey={defaultTab || (orCondition() ? `${name}.filter.or` : `${name}.filter.and`)}
		{...props}
	>
		<Tabs.TabPane key={`${name}.filter.and`} tab={<IconText icon={<PlusOutlined/>} text={"common.filter.and.tab"}/>}>
			{and}
		</Tabs.TabPane>
		<Tabs.TabPane key={`${name}.filter.or`} tab={<IconText icon={<CloseOutlined/>} text={"common.filter.or.tab"}/>}>
			{or}
		</Tabs.TabPane>
	</Tabs>;
};
