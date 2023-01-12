import logo              from "@/puff-smith/assets/logo/logo.svg";
import {withTranslation} from "@leight/i18n-server";
import {withLabLayout}   from "@puff-smith/lab";

export default withLabLayout(function Index() {
    return (
        <h1>Lab here!!</h1>
    );
}, {logo});

export const getServerSideProps = withTranslation([
    "common",
    "lab"
]);
