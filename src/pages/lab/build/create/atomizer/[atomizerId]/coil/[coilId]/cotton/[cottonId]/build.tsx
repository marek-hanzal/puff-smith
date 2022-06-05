import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {CottonIcon} from "@/puff-smith/component/icon/CottonIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch, IAtomizerFetchParams} from "@/puff-smith/service/atomizer/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {ICoilFetch, ICoilFetchParams} from "@/puff-smith/service/coil/interface";
import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonFetch, ICottonFetchParams} from "@/puff-smith/service/cotton/interface";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonLink, ListIcon} from "@leight-core/client";
import {merge} from "@leight-core/utils";
import {GetServerSidePropsContext} from "next";

export default withLabLayout(function Build({atomizer, coil, cotton}: IAtomizerFetch & ICoilFetch & ICottonFetch) {
	return <LabPage
		title={"lab.build.create.cotton.build"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build/create/atomizer/[atomizerId]/coil/[coilId]", {
			atomizerId: atomizer.id,
			coilId: coil.id,
		})}
		icon={<BuildIcon/>}
		extra={<ButtonLink
			href={"/lab/build"}
			icon={<ListIcon/>}
			label={"lab.build.index.button"}
		/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/create"}
				label={"lab.build.create.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/create/atomizer/[atomizerId]"}
				query={{
					atomizerId: atomizer.id,
				}}
				label={atomizer.name + " " + atomizer.vendor.name}
			/>
			<BreadcrumbButton
				href={"/lab/build/create/atomizer/[atomizerId]/coil/[coilId]"}
				query={{
					atomizerId: atomizer.id,
					coilId: coil.id,
				}}
				label={coil.name}
			/>
			<BreadcrumbIcon
				icon={<CottonIcon/>}
				label={cotton.name + " " + cotton.vendor.name}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.cotton",
		}}
	>
		build!
	</LabPage>;
});

export const getServerSideProps = async (context: GetServerSidePropsContext<IAtomizerFetchParams & ICoilFetchParams & ICottonFetchParams>) => merge<any, any>(
	merge<any, any>(
		await AtomizerSource().withFetch("atomizer", "atomizerId")(context),
		await CoilSource().withFetch("coil", "coilId")(context),
	),
	await CottonSource().withFetch("cotton", "cottonId")(context),
);
