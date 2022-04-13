import {register as CoolRegister} from "prom-client";

let register = CoolRegister;

register.setDefaultLabels({
	version: process.env.NEXT_PUBLIC_VERSION,
});

export default register;
