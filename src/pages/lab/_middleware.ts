import {withAuth} from "next-auth/middleware"
import {withTokenAuth} from "@/puff-smith/service/token/utils";

export default withAuth(withTokenAuth());
