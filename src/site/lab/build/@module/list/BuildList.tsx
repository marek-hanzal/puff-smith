import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {AgeOfInline} from "@/puff-smith/component/inline/AgeOfInline";
import {Amps} from "@/puff-smith/component/inline/Amps";
import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {LocalDate} from "@/puff-smith/component/inline/LocalDate";
import {Ohm} from "@/puff-smith/component/inline/Ohm";
import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {SizeMm} from "@/puff-smith/component/inline/SizeMm";
import {Watt} from "@/puff-smith/component/inline/Watt";
import {Tags} from "@/puff-smith/component/Tags";
import {IBuild} from "@/puff-smith/service/build/interface";
import {BuildRatingButton} from "@/puff-smith/site/lab/build/@module/button/BuildRatingButton";
import {BuildListEmpty} from "@/puff-smith/site/lab/build/@module/list/BuildListEmpty";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {CottonNameInline} from "@/puff-smith/site/shared/cotton/@module/inline/CottonNameInline";
import {WireFiberInline} from "@/puff-smith/site/shared/wire/@module/inline/WireFiberInline";
import {WireNameInline} from "@/puff-smith/site/shared/wire/@module/inline/WireNameInline";
import {BuildListSource, IBuildListSourceProps} from "@/sdk/api/lab/build/query";
import {BrowserContent, ButtonLink, LinkTo, ListItem, ListItemMeta, MobileContent, useOptionalSelectionContext} from "@leight-core/client";
import {Divider, Space, Typography} from "antd";
import {FC, ReactNode} from "react";

export interface IBuildListProps extends Partial<IBuildListSourceProps> {
	itemExtra?(build: IBuild): ReactNode;
}

export const BuildList: FC<IBuildListProps> = ({itemExtra, ...props}) => {
	const selectionContext = useOptionalSelectionContext();
	return <BuildListSource
		emptyText={<BuildListEmpty/>}
		{...props}
	>
		{build => <>
			<BrowserContent>
				<ListItem
					extra={itemExtra?.(build) || <Space size={4}>
						<ButtonLink
							icon={<LiquidIcon/>}
							label={"lab.build.liquid.button"}
							href={"/lab/build/[buildId]/liquid"}
							query={{buildId: build.id}}
						/>
						<BuildRatingButton build={build}/>
					</Space>}
				>
					<ListItemMeta
						title={<Space split={<Divider type={"vertical"}/>}>
							{selectionContext && <SelectionBool selection={build}/>}
							<ButtonLink
								size={"small"}
								href={"/lab/build/[buildId]"}
								query={{buildId: build.id}}
								label={<AtomizerNameInline atomizer={build.atomizer}/>}
							/>
							<CodeInline code={build}/>
							<Ohm ohm={build.ohm}/>
							<Watt watt={build.watts} tooltip={"lab.build.watt.tooltip"}/>
							<Amps amps={build.drain} tooltip={"lab.build.amps.tooltip"}/>
							<LocalDate date={build.created}/>
							<AgeOfInline date={build.created}/>
						</Space>}
						description={<Space direction={"vertical"}>
							<Space split={<Divider type={"vertical"}/>} size={0}>
								<CottonNameInline cotton={build.cotton}/>
								<WireNameInline wire={build.coil.wire}/>
								<WireFiberInline wire={build.coil.wire}/>
								{build.atomizer.draws.length > 0 && <Tags tags={build.atomizer.draws} translation={"common.draw"}/>}
							</Space>
							<Space split={<Divider type={"vertical"}/>} size={0}>
								<CoilWraps wraps={build.coil.wraps}/>
								<CoilSize size={build.coil.size}/>
								<SizeMm size={build.coil.wire.mm}/>
							</Space>
						</Space>}
					/>
				</ListItem>
			</BrowserContent>
			<MobileContent>
				<ListItem>
					<ListItemMeta
						title={<Space split={<Divider type={"vertical"}/>}>
							{selectionContext && <SelectionBool selection={build}/>}
							<LinkTo href={"/lab/build/[buildId]"} query={{buildId: build.id}}>
								<AtomizerNameInline atomizer={build.atomizer}/>
							</LinkTo>
						</Space>}
						description={itemExtra?.(build) || <Space size={4} direction={"vertical"}>
							<Space split={<Divider type={"vertical"}/>} size={0}>
								<Typography.Text>{build.coil.wire.name}</Typography.Text>
								<CoilWraps wraps={build.coil.wraps}/>
								<CoilSize size={build.coil.size}/>
								<SizeMm size={build.coil.wire.mm}/>
							</Space>
							<Space size={4}>
								<ButtonLink
									icon={<LiquidIcon/>}
									label={"lab.build.liquid.button"}
									href={"/lab/build/[buildId]/liquid"}
									query={{buildId: build.id}}
								/>
								<BuildRatingButton build={build}/>
							</Space>
						</Space>
						}
					/>
				</ListItem>
			</MobileContent>
		</>}
	</BuildListSource>;
};
