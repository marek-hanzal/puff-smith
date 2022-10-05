import {LiquidIcon}    from "@/puff-smith/component/icon/LiquidIcon";
import {CloseOutlined} from "@ant-design/icons";
import {
	ButtonLink,
	Translate,
	useCursorContext,
	useFilterContext,
	useSourceContext
}                      from "@leight-core/client";
import {
	Button,
	Divider
}                      from "antd";
import {FC}            from "react";

export interface ILiquidListNothingProps {
}

export const LiquidListNothing: FC<ILiquidListNothingProps> = () => {
	const sourceContext = useSourceContext();
	const cursorContext = useCursorContext();
	const filterContext = useFilterContext();
	return <Divider>
		{!cursorContext?.total ? <ButtonLink
			type={"primary"}
			href={"/lab/liquid/create"}
			icon={<LiquidIcon/>}
			label={"shared.liquid.create.button"}
		/> : null}
		{cursorContext?.total ? <Button
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
