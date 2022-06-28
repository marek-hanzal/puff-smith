import {withTokenAuth} from "@/puff-smith/service/token/utils";
import {withAuth} from "next-auth/middleware";

export default withAuth(withTokenAuth());
