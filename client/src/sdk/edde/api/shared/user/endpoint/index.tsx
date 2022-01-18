import {
	EntityContext,
	EntityProvider,
	Form,
	IEntityContext,
	IEntityProviderProps,
	IFormProps,
	IPageProps,
	IQueryProps,
	Page,
	Query,
	createDeleteMutation,
	createDeleteQuery,
	createGetMutation,
	createGetQuery,
	createPostMutation,
	createPostQuery,
	isCallable,
	useContext,
	useOptionalContext,
	useParams
} from "@leight-core/leight";
import {useQueryClient} from "react-query";
import {
	FC,
	ReactNode,
	createContext
} from "react";

export type ITicketQueryParams = void;


export const useTicketQuery = createGetQuery<ITicketQueryParams, import("@/sdk/edde/session/dto/index").SessionDto>("Edde.Shared.User.Ticket");
export const useTicketQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Shared.User.Ticket"])
}

export type ILoginQueryParams = void;


export const useLoginMutation = createPostMutation<ILoginQueryParams, import("@/sdk/edde/dto/common/index").LoginRequest, import("@/sdk/edde/session/dto/index").SessionDto>("Edde.Shared.User.Login");

export type ILogoutQueryParams = void;


export const useLogoutMutation = createDeleteMutation<ILogoutQueryParams, void | undefined>("Edde.Shared.User.Logout");

export type IUpdateSettingsQueryParams = void;


export const useUpdateSettingsMutation = createPostMutation<IUpdateSettingsQueryParams, import("@/sdk/edde/user/dto/settings/index").UpdateSettingsDto, import("@/sdk/edde/user/dto/settings/index").UserSettingsDto>("Edde.Shared.User.UpdateSettings");

export interface ILoginFormProps extends Partial<IFormProps<ILoginQueryParams, import("@/sdk/edde/dto/common/index").LoginRequest, import("@/sdk/edde/session/dto/index").SessionDto>> {
}

export const LoginForm: FC<ILoginFormProps> = props => {
	return <Form<ILoginQueryParams, import("@/sdk/edde/dto/common/index").LoginRequest, import("@/sdk/edde/session/dto/index").SessionDto>
		useMutation={useLoginMutation}
		{...props}
	/>
}

export interface IUpdateSettingsFormProps extends Partial<IFormProps<IUpdateSettingsQueryParams, import("@/sdk/edde/user/dto/settings/index").UpdateSettingsDto, import("@/sdk/edde/user/dto/settings/index").UserSettingsDto>> {
}

export const UpdateSettingsForm: FC<IUpdateSettingsFormProps> = props => {
	return <Form<IUpdateSettingsQueryParams, import("@/sdk/edde/user/dto/settings/index").UpdateSettingsDto, import("@/sdk/edde/user/dto/settings/index").UserSettingsDto>
		useMutation={useUpdateSettingsMutation}
		{...props}
	/>
}