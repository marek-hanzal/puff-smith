import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {CloseOutlined} from "@ant-design/icons";
import {ButtonLink, Translate, useCursorContext, useFilterContext, useSourceContext} from "@leight-core/client";
import {Button, Divider} from "antd";
import {FC} from "react";

export interface IAromaListNothingProps {
}

export const AromaListNothing: FC<IAromaListNothingProps> = () => {
	const cursorContext = useCursorContext();
	const sourceContext = useSourceContext();
	const filterContext = useFilterContext();
	return <Divider>
		{!cursorContext.total ? <ButtonLink
			type={"primary"}
			href={"/market/aroma/create"}
			icon={<AromaIcon/>}
			label={"shared.aroma.create.button"}
		/> : null}
		{cursorContext.total ? <Button
			type={"link"}
			icon={<CloseOutlined/>}
			onClick={() => {
				sourceContext.reset();
				filterContext.setFilter({});
			}}
		>
			<span>
				<Translate namespace={"common.filter"} text={"clear.button"}/>
			</span>
		</Button> : null}
	</Divider>;
};
