import {BuildIcon}         from "@/puff-smith/component/icon/BuildIcon";
import {MobileLabPage}     from "@/puff-smith/site/lab/@module/component/MobileLabPage";
import {withLabLayout}     from "@/puff-smith/site/lab/@module/layout/layout";
import {SelectionProvider} from "@leight-core/viv";
import {
    Swiper,
    Tabs as MobileTabs
}                          from "antd-mobile";
import {SwiperRef}         from "antd-mobile/es/components/swiper";
import {
    useRef,
    useState
}                          from "react";

const tabItems = [
	{key: "a", title: "AAA"},
	{key: "b", title: "BBB"},
	{key: "c", title: "CCC"},
];

export default withLabLayout(function Index() {
	const swiperRef                     = useRef<SwiperRef>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	return <SelectionProvider type={"multi"}>
		<MobileLabPage
			title={"lab.build.index"}
			menuSelection={["/lab/build"]}
			icon={<BuildIcon/>}
			onBack={navigate => navigate("/lab")}
		>
			<MobileTabs
				activeKey={tabItems[activeIndex].key}
				onChange={key => {
					const index = tabItems.findIndex(item => item.key === key);
					setActiveIndex(index);
					swiperRef.current?.swipeTo(index);
				}}
			>
				{tabItems.map(item => (
					<MobileTabs.Tab title={item.title} key={item.key}/>
				))}
			</MobileTabs>
			<Swiper
				direction="horizontal"
				loop
				indicator={() => null}
				ref={swiperRef}
				defaultIndex={activeIndex}
				onIndexChange={setActiveIndex}
			>
				<Swiper.Item>
					<div
						style={{
							height:         "120px",
							color:          "#999999",
							display:        "flex",
							justifyContent: "center",
							alignItems:     "center",
							fontSize:       "24px",
							userSelect:     "none",
						}}
					>
						AAA
					</div>
				</Swiper.Item>
				<Swiper.Item>
					<div
						style={{
							height:         "120px",
							color:          "#999999",
							display:        "flex",
							justifyContent: "center",
							alignItems:     "center",
							fontSize:       "24px",
							userSelect:     "none",
						}}
					>
						BBB
					</div>
				</Swiper.Item>
				<Swiper.Item>
					<div
						style={{
							height:         "120px",
							color:          "#999999",
							display:        "flex",
							justifyContent: "center",
							alignItems:     "center",
							fontSize:       "24px",
							userSelect:     "none",
						}}
					>
						CCC
					</div>
				</Swiper.Item>
			</Swiper>
		</MobileLabPage>
	</SelectionProvider>;
});
