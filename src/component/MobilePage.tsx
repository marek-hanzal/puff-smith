import {MobileMenu} from "@/puff-smith/site/shared/@mobile/menu/MobileMenu";
import {MobileContent} from "@leight-core/client";
import {isString} from "@leight-core/utils";
import {Space} from "antd";
import {NavBar} from "antd-mobile";
import {FC, PropsWithChildren, ReactNode} from "react";
import {useTranslation} from "react-i18next";

export type IMobilePageProps = PropsWithChildren<{
	icon?: ReactNode;
	title?: ReactNode;
}>

export const MobilePage: FC<IMobilePageProps> = ({icon, title, children}) => {
	const {t} = useTranslation();
	return <MobileContent>
		<div style={{height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#FFF"}}>
			<div style={{
				flex: 0,
				borderBottom: "solid 1px var(--adm-color-border)",
			}}>
				<NavBar backArrow={false}>
					<Space size={4}>
						{icon}
						{isString(title) ? t(`${title}.title`) : title}
					</Space>
				</NavBar>
			</div>
			<div
				style={{
					flex: 1,
					display: "flex",
					justifyContent: "start",
					alignItems: "start",
				}}
			>
				<div style={{width: "100vw"}}>
					{children}
				</div>
			</div>
			<div
				style={{
					flex: 0,
					borderTop: "solid 1px var(--adm-color-border)",
				}}
			>
				<MobileMenu active={"/market"}/>
			</div>
		</div>
	</MobileContent>;
};
