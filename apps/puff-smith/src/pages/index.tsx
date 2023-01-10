import logo               from "@/puff-smith/assets/logo/logo.svg";
import {withTranslation}  from "@leight/i18n";
import {withPublicLayout} from "@puff-smith/public";

export default withPublicLayout(function Index() {
    return (
        <h1>whoop</h1>
    );
}, {logo});

export const getServerSideProps = withTranslation([
    "common",
    "public"
]);
