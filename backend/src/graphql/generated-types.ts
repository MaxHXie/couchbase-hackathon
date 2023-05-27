import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Artist = {
  __typename?: 'Artist';
  content: ArtistContent;
  id: Scalars['ID']['output'];
};

export type ArtistContent = {
  __typename?: 'ArtistContent';
  description?: Maybe<Scalars['String']['output']>;
  eventIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  genre?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Int']['output']>;
};

export type ArtistContentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  genre?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistContentPatchInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  genre?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistPatchInput = {
  content: ArtistContentPatchInput;
  id: Scalars['ID']['input'];
};

export type ArtistReplaceInput = {
  content: ArtistContentInput;
  id: Scalars['ID']['input'];
};

export type ArtistsDeleteResponse = {
  __typename?: 'ArtistsDeleteResponse';
  deletedIds: Array<Maybe<Scalars['ID']['output']>>;
  errors: Array<Maybe<ErrorResponse>>;
};

export type ArtistsListFiltersInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistsListInput = {
  filters?: InputMaybe<ArtistsListFiltersInput>;
};

export type ArtistsListResponse = {
  __typename?: 'ArtistsListResponse';
  code?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  records?: Maybe<Array<Maybe<Artist>>>;
};

export type ArtistsResponse = {
  __typename?: 'ArtistsResponse';
  errors: Array<Maybe<ErrorResponse>>;
  records: Array<Maybe<Artist>>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  code: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  artistsCreate?: Maybe<ArtistsResponse>;
  artistsDelete?: Maybe<ArtistsDeleteResponse>;
  artistsPatch?: Maybe<ArtistsResponse>;
  artistsReplace?: Maybe<ArtistsResponse>;
};


export type MutationArtistsCreateArgs = {
  contents: Array<InputMaybe<ArtistContentInput>>;
};


export type MutationArtistsDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationArtistsPatchArgs = {
  records: Array<InputMaybe<ArtistPatchInput>>;
};


export type MutationArtistsReplaceArgs = {
  records: Array<InputMaybe<ArtistReplaceInput>>;
};

export type Query = {
  __typename?: 'Query';
  artistsGetByIds?: Maybe<ArtistsResponse>;
  artistsList?: Maybe<ArtistsListResponse>;
};


export type QueryArtistsGetByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryArtistsListArgs = {
  query?: InputMaybe<ArtistsListInput>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Artist: ResolverTypeWrapper<Artist>;
  ArtistContent: ResolverTypeWrapper<ArtistContent>;
  ArtistContentInput: ArtistContentInput;
  ArtistContentPatchInput: ArtistContentPatchInput;
  ArtistPatchInput: ArtistPatchInput;
  ArtistReplaceInput: ArtistReplaceInput;
  ArtistsDeleteResponse: ResolverTypeWrapper<ArtistsDeleteResponse>;
  ArtistsListFiltersInput: ArtistsListFiltersInput;
  ArtistsListInput: ArtistsListInput;
  ArtistsListResponse: ResolverTypeWrapper<ArtistsListResponse>;
  ArtistsResponse: ResolverTypeWrapper<ArtistsResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Artist: Artist;
  ArtistContent: ArtistContent;
  ArtistContentInput: ArtistContentInput;
  ArtistContentPatchInput: ArtistContentPatchInput;
  ArtistPatchInput: ArtistPatchInput;
  ArtistReplaceInput: ArtistReplaceInput;
  ArtistsDeleteResponse: ArtistsDeleteResponse;
  ArtistsListFiltersInput: ArtistsListFiltersInput;
  ArtistsListInput: ArtistsListInput;
  ArtistsListResponse: ArtistsListResponse;
  ArtistsResponse: ArtistsResponse;
  Boolean: Scalars['Boolean']['output'];
  ErrorResponse: ErrorResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
}>;

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = ResolversObject<{
  content?: Resolver<ResolversTypes['ArtistContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistContent'] = ResolversParentTypes['ArtistContent']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistsDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistsDeleteResponse'] = ResolversParentTypes['ArtistsDeleteResponse']> = ResolversObject<{
  deletedIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistsListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistsListResponse'] = ResolversParentTypes['ArtistsListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistsResponse'] = ResolversParentTypes['ArtistsResponse']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  records?: Resolver<Array<Maybe<ResolversTypes['Artist']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  artistsCreate?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsCreateArgs, 'contents'>>;
  artistsDelete?: Resolver<Maybe<ResolversTypes['ArtistsDeleteResponse']>, ParentType, ContextType, RequireFields<MutationArtistsDeleteArgs, 'ids'>>;
  artistsPatch?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsPatchArgs, 'records'>>;
  artistsReplace?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsReplaceArgs, 'records'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  artistsGetByIds?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<QueryArtistsGetByIdsArgs, 'ids'>>;
  artistsList?: Resolver<Maybe<ResolversTypes['ArtistsListResponse']>, ParentType, ContextType, Partial<QueryArtistsListArgs>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Artist?: ArtistResolvers<ContextType>;
  ArtistContent?: ArtistContentResolvers<ContextType>;
  ArtistsDeleteResponse?: ArtistsDeleteResponseResolvers<ContextType>;
  ArtistsListResponse?: ArtistsListResponseResolvers<ContextType>;
  ArtistsResponse?: ArtistsResponseResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

