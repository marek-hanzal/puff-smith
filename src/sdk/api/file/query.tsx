/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IFileSource} from "@/puff-smith/service/file/interface";
import {SelectOutlined} from "@ant-design/icons";
import {IQueryFilter, IQueryOrderBy, ISourceContext, ISourceItem, ISourceQuery, IToOptionMapper} from "@leight-core/api";
import {
	createPromise,
	createPromiseHook,
	createQueryHook,
	DrawerButton,
	Filter,
	FilterProvider,
	IFilterProviderProps,
	IFilterWithoutTranslationProps,
	IInfiniteListProps,
	IListProps,
	InfiniteList,
	IOrderByProviderProps,
	IQuerySourceSelectProps,
	ISelectionProviderProps,
	ISourceControlProviderProps,
	ISourceProviderProps,
	List,
	OrderByProvider,
	QuerySourceSelect,
	SelectionProvider,
	SourceContext,
	SourceControlProvider,
	SourceProvider,
	toLink,
	useFilterContext,
	useOptionalFilterContext,
	useOptionalOrderByContext,
	useOptionalSelectionContext,
	useOrderByContext,
	useSelectionContext,
	useSourceContext
} from "@leight-core/client";
import {Col, Input, Row} from "antd";
import {ConsumerProps, FC, ReactNode} from "react";
import {useQueryClient} from "react-query";

export const FileApiLink = "/api/file/query";
export const FileCountApiLink = "/api/file/query/count";

export type IFileQueryParams = any;

export const useFileQuery = createQueryHook<ISourceQuery<IFileSource>, ISourceItem<IFileSource>[], IFileQueryParams>(FileApiLink, "post");
export const useFileCountQuery = createQueryHook<ISourceQuery<IFileSource>, number, IFileQueryParams>(FileCountApiLink, "post");

export const useFileSource = () => useSourceContext<ISourceItem<IFileSource>>();

export interface IFileSourceContext extends ISourceContext<ISourceItem<IFileSource>> {
}

export interface IFileSourceConsumerProps extends ConsumerProps<ISourceContext<ISourceItem<IFileSource>>> {
}

export const FileSourceConsumer: FC<IFileSourceConsumerProps> = props => <SourceContext.Consumer {...props}/>;

export interface IFileProviderProps extends Partial<ISourceProviderProps<ISourceItem<IFileSource>>> {
}

export const FileProvider: FC<IFileProviderProps> = props => {
	return <SourceProvider<ISourceItem<IFileSource>>
		name={"File"}
		useQuery={useFileQuery}
		useCountQuery={useFileCountQuery}
		{...props}
	/>;
};

export const toFileLink = (queryParams?: IFileQueryParams) => toLink(FileApiLink, queryParams);
export const useFileLink = () => toFileLink;

export const useFilePromise = createPromiseHook<ISourceQuery<IFileSource>, ISourceItem<IFileSource>, IFileQueryParams>(FileApiLink, "post");
export const FilePromise = createPromise<ISourceQuery<IFileSource>, ISourceItem<IFileSource>, IFileQueryParams>(FileApiLink, "post");

export interface IFileFilterProviderProps extends Partial<IFilterProviderProps<IQueryFilter<ISourceQuery<IFileSource>>>> {
}

export const FileFilterProvider: FC<IFileFilterProviderProps> = props => <FilterProvider<IQueryFilter<ISourceQuery<IFileSource>>> name={"File"} {...props}/>;

export const useFileOptionalFilterContext = () => useOptionalFilterContext<IQueryFilter<ISourceQuery<IFileSource>>>();
export const useFileFilterContext = () => useFilterContext<IQueryFilter<ISourceQuery<IFileSource>>>();

export interface IFileProviderFilterProps extends IFilterWithoutTranslationProps<IQueryFilter<ISourceQuery<IFileSource>>> {
}

export const FileProviderFilter: FC<IFileProviderFilterProps> = props => <Filter
	{...props}
	translation={"common.filter.File"}
/>;

export interface IFileOrderByProviderProps extends Partial<IOrderByProviderProps<IQueryOrderBy<ISourceQuery<IFileSource>>>> {
}

export const FileOrderByProvider: FC<IFileOrderByProviderProps> = props => <OrderByProvider<IQueryOrderBy<ISourceQuery<IFileSource>>> name={"File"} {...props}/>;

export const useFileOptionalOrderByContext = () => useOptionalOrderByContext<IQueryOrderBy<ISourceQuery<IFileSource>>>();
export const useFileOrderByContext = () => useOrderByContext<IQueryOrderBy<ISourceQuery<IFileSource>>>();

export interface IFileProviderControlProps extends Partial<ISourceControlProviderProps<IQueryFilter<ISourceQuery<IFileSource>>, IQueryOrderBy<ISourceQuery<IFileSource>>, IFileQueryParams>> {
}

export const FileProviderControl: FC<IFileProviderControlProps> = props => <SourceControlProvider<IQueryFilter<ISourceQuery<IFileSource>>, IQueryOrderBy<ISourceQuery<IFileSource>>> name={"File"} {...props}/>;

export interface IFileListSourceProps extends Partial<IListProps<ISourceItem<IFileSource>>> {
	providerProps?: Partial<IFileProviderProps>;
}

export const FileListSource: FC<IFileListSourceProps> = ({providerProps, ...props}) => {
	return <FileProvider
		withCount
		{...providerProps}
	>
		<List<ISourceItem<IFileSource>>
			{...props}
		/>
	</FileProvider>;
}

export interface IFileInfiniteListSourceProps extends Partial<IInfiniteListProps<ISourceItem<IFileSource>>> {
	providerProps?: Partial<IFileProviderProps>;
}

export const FileInfiniteListSource: FC<IFileInfiniteListSourceProps> = ({providerProps, ...props}) => {
	return <FileProvider
		withCount
		{...providerProps}
	>
		<InfiniteList<ISourceItem<IFileSource>>
			{...props}
		/>
	</FileProvider>;
};

export interface IFileSourceSelectProps extends IQuerySourceSelectProps<ISourceItem<IFileSource>> {
	toOption: IToOptionMapper<ISourceItem<IFileSource>>;
	providerProps?: Partial<IFileProviderProps>;
	selectionList?: () => ReactNode;
	selectionProps?: Partial<ISelectionProviderProps>;
}

export const FileSourceSelect: FC<IFileSourceSelectProps> = ({providerProps, selectionList, selectionProps, ...props}) => {
	return <Input.Group>
		<Row>
			<Col flex={"auto"}>
				<FileProvider {...providerProps}>
					<QuerySourceSelect<ISourceItem<IFileSource>> {...props}/>
				</FileProvider>
			</Col>
			<Col push={0}>
				{selectionList && <DrawerButton
					icon={<SelectOutlined/>}
					title={"common.selection.File.title"}
					size={props.size}
					tooltip={"common.selection.File.title.tooltip"}
					width={800}
					type={"text"}
					ghost
				>
					<FileProviderControl>
						<SelectionProvider type={"single"} {...selectionProps}>
							{selectionList()}
						</SelectionProvider>
					</FileProviderControl>
				</DrawerButton>}
			</Col>
		</Row>
	</Input.Group>;
};

export interface IFileSelectionProviderProps extends Partial<ISelectionProviderProps<ISourceItem<IFileSource>>> {
}

export const FileSelectionProvider: FC<IFileSelectionProviderProps> = props => {
	return <SelectionProvider<ISourceItem<IFileSource>> {...props}/>;
}

export const useFileCountQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([FileCountApiLink]);
};

export const useFileQueryInvalidate = (withCount: boolean = true) => {
	const queryClient = useQueryClient();
	return () => Promise.all([
		queryClient.invalidateQueries([FileApiLink]),
		withCount && queryClient.invalidateQueries([FileCountApiLink]),
	]);
};

export const useFileOptionalSelectionContext = () => useOptionalSelectionContext<ISourceItem<IFileSource>>();
export const useFileSelectionContext = () => useSelectionContext<ISourceItem<IFileSource>>();
