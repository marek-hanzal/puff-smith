export interface IInterfaceReflection {
	name: string;
	source: string;
}

export interface IEndpointReflection {
	name: string;
	type: string;
	generics: string[];
}

export interface ISdk {
	file: string;
	interfaces: IInterfaceReflection[];
	endpoint?: IEndpointReflection;
}
