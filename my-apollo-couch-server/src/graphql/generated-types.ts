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
  _REPLACE_WITH_YOUR_FIELDS?: Maybe<Scalars['String']['output']>;
};

export type ArtistContentInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistContentPatchInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
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
  _REPLACE_WITH_YOUR_FILTERS?: InputMaybe<Scalars['String']['input']>;
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

export type Event = {
  __typename?: 'Event';
  content: EventContent;
  id: Scalars['ID']['output'];
};

export type EventContent = {
  __typename?: 'EventContent';
  _REPLACE_WITH_YOUR_FIELDS?: Maybe<Scalars['String']['output']>;
};

export type EventContentInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type EventContentPatchInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type EventPatchInput = {
  content: EventContentPatchInput;
  id: Scalars['ID']['input'];
};

export type EventReplaceInput = {
  content: EventContentInput;
  id: Scalars['ID']['input'];
};

export type EventsDeleteResponse = {
  __typename?: 'EventsDeleteResponse';
  deletedIds: Array<Maybe<Scalars['ID']['output']>>;
  errors: Array<Maybe<ErrorResponse>>;
};

export type EventsListFiltersInput = {
  _REPLACE_WITH_YOUR_FILTERS?: InputMaybe<Scalars['String']['input']>;
};

export type EventsListInput = {
  filters?: InputMaybe<EventsListFiltersInput>;
};

export type EventsListResponse = {
  __typename?: 'EventsListResponse';
  code?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  records?: Maybe<Array<Maybe<Event>>>;
};

export type EventsResponse = {
  __typename?: 'EventsResponse';
  errors: Array<Maybe<ErrorResponse>>;
  records: Array<Maybe<Event>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  artistsCreate?: Maybe<ArtistsResponse>;
  artistsDelete?: Maybe<ArtistsDeleteResponse>;
  artistsPatch?: Maybe<ArtistsResponse>;
  artistsReplace?: Maybe<ArtistsResponse>;
  eventsCreate?: Maybe<EventsResponse>;
  eventsDelete?: Maybe<EventsDeleteResponse>;
  eventsPatch?: Maybe<EventsResponse>;
  eventsReplace?: Maybe<EventsResponse>;
  transactionsCreate?: Maybe<TransactionsResponse>;
  transactionsDelete?: Maybe<TransactionsDeleteResponse>;
  transactionsPatch?: Maybe<TransactionsResponse>;
  transactionsReplace?: Maybe<TransactionsResponse>;
  venuesCreate?: Maybe<VenuesResponse>;
  venuesDelete?: Maybe<VenuesDeleteResponse>;
  venuesPatch?: Maybe<VenuesResponse>;
  venuesReplace?: Maybe<VenuesResponse>;
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


export type MutationEventsCreateArgs = {
  contents: Array<InputMaybe<EventContentInput>>;
};


export type MutationEventsDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationEventsPatchArgs = {
  records: Array<InputMaybe<EventPatchInput>>;
};


export type MutationEventsReplaceArgs = {
  records: Array<InputMaybe<EventReplaceInput>>;
};


export type MutationTransactionsCreateArgs = {
  contents: Array<InputMaybe<TransactionContentInput>>;
};


export type MutationTransactionsDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationTransactionsPatchArgs = {
  records: Array<InputMaybe<TransactionPatchInput>>;
};


export type MutationTransactionsReplaceArgs = {
  records: Array<InputMaybe<TransactionReplaceInput>>;
};


export type MutationVenuesCreateArgs = {
  contents: Array<InputMaybe<VenueContentInput>>;
};


export type MutationVenuesDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationVenuesPatchArgs = {
  records: Array<InputMaybe<VenuePatchInput>>;
};


export type MutationVenuesReplaceArgs = {
  records: Array<InputMaybe<VenueReplaceInput>>;
};

export type Query = {
  __typename?: 'Query';
  artistsGetByIds?: Maybe<ArtistsResponse>;
  artistsList?: Maybe<ArtistsListResponse>;
  eventsGetByIds?: Maybe<EventsResponse>;
  eventsList?: Maybe<EventsListResponse>;
  transactionsGetByIds?: Maybe<TransactionsResponse>;
  transactionsList?: Maybe<TransactionsListResponse>;
  venuesGetByIds?: Maybe<VenuesResponse>;
  venuesList?: Maybe<VenuesListResponse>;
};


export type QueryArtistsGetByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryArtistsListArgs = {
  query?: InputMaybe<ArtistsListInput>;
};


export type QueryEventsGetByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryEventsListArgs = {
  query?: InputMaybe<EventsListInput>;
};


export type QueryTransactionsGetByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryTransactionsListArgs = {
  query?: InputMaybe<TransactionsListInput>;
};


export type QueryVenuesGetByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryVenuesListArgs = {
  query?: InputMaybe<VenuesListInput>;
};

export type Transaction = {
  __typename?: 'Transaction';
  content: TransactionContent;
  id: Scalars['ID']['output'];
};

export type TransactionContent = {
  __typename?: 'TransactionContent';
  _REPLACE_WITH_YOUR_FIELDS?: Maybe<Scalars['String']['output']>;
};

export type TransactionContentInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionContentPatchInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionPatchInput = {
  content: TransactionContentPatchInput;
  id: Scalars['ID']['input'];
};

export type TransactionReplaceInput = {
  content: TransactionContentInput;
  id: Scalars['ID']['input'];
};

export type TransactionsDeleteResponse = {
  __typename?: 'TransactionsDeleteResponse';
  deletedIds: Array<Maybe<Scalars['ID']['output']>>;
  errors: Array<Maybe<ErrorResponse>>;
};

export type TransactionsListFiltersInput = {
  _REPLACE_WITH_YOUR_FILTERS?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionsListInput = {
  filters?: InputMaybe<TransactionsListFiltersInput>;
};

export type TransactionsListResponse = {
  __typename?: 'TransactionsListResponse';
  code?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  records?: Maybe<Array<Maybe<Transaction>>>;
};

export type TransactionsResponse = {
  __typename?: 'TransactionsResponse';
  errors: Array<Maybe<ErrorResponse>>;
  records: Array<Maybe<Transaction>>;
};

export type Venue = {
  __typename?: 'Venue';
  content: VenueContent;
  id: Scalars['ID']['output'];
};

export type VenueContent = {
  __typename?: 'VenueContent';
  _REPLACE_WITH_YOUR_FIELDS?: Maybe<Scalars['String']['output']>;
};

export type VenueContentInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type VenueContentPatchInput = {
  _REPLACE_WITH_YOUR_FIELDS?: InputMaybe<Scalars['String']['input']>;
};

export type VenuePatchInput = {
  content: VenueContentPatchInput;
  id: Scalars['ID']['input'];
};

export type VenueReplaceInput = {
  content: VenueContentInput;
  id: Scalars['ID']['input'];
};

export type VenuesDeleteResponse = {
  __typename?: 'VenuesDeleteResponse';
  deletedIds: Array<Maybe<Scalars['ID']['output']>>;
  errors: Array<Maybe<ErrorResponse>>;
};

export type VenuesListFiltersInput = {
  _REPLACE_WITH_YOUR_FILTERS?: InputMaybe<Scalars['String']['input']>;
};

export type VenuesListInput = {
  filters?: InputMaybe<VenuesListFiltersInput>;
};

export type VenuesListResponse = {
  __typename?: 'VenuesListResponse';
  code?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  records?: Maybe<Array<Maybe<Venue>>>;
};

export type VenuesResponse = {
  __typename?: 'VenuesResponse';
  errors: Array<Maybe<ErrorResponse>>;
  records: Array<Maybe<Venue>>;
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
  Event: ResolverTypeWrapper<Event>;
  EventContent: ResolverTypeWrapper<EventContent>;
  EventContentInput: EventContentInput;
  EventContentPatchInput: EventContentPatchInput;
  EventPatchInput: EventPatchInput;
  EventReplaceInput: EventReplaceInput;
  EventsDeleteResponse: ResolverTypeWrapper<EventsDeleteResponse>;
  EventsListFiltersInput: EventsListFiltersInput;
  EventsListInput: EventsListInput;
  EventsListResponse: ResolverTypeWrapper<EventsListResponse>;
  EventsResponse: ResolverTypeWrapper<EventsResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionContent: ResolverTypeWrapper<TransactionContent>;
  TransactionContentInput: TransactionContentInput;
  TransactionContentPatchInput: TransactionContentPatchInput;
  TransactionPatchInput: TransactionPatchInput;
  TransactionReplaceInput: TransactionReplaceInput;
  TransactionsDeleteResponse: ResolverTypeWrapper<TransactionsDeleteResponse>;
  TransactionsListFiltersInput: TransactionsListFiltersInput;
  TransactionsListInput: TransactionsListInput;
  TransactionsListResponse: ResolverTypeWrapper<TransactionsListResponse>;
  TransactionsResponse: ResolverTypeWrapper<TransactionsResponse>;
  Venue: ResolverTypeWrapper<Venue>;
  VenueContent: ResolverTypeWrapper<VenueContent>;
  VenueContentInput: VenueContentInput;
  VenueContentPatchInput: VenueContentPatchInput;
  VenuePatchInput: VenuePatchInput;
  VenueReplaceInput: VenueReplaceInput;
  VenuesDeleteResponse: ResolverTypeWrapper<VenuesDeleteResponse>;
  VenuesListFiltersInput: VenuesListFiltersInput;
  VenuesListInput: VenuesListInput;
  VenuesListResponse: ResolverTypeWrapper<VenuesListResponse>;
  VenuesResponse: ResolverTypeWrapper<VenuesResponse>;
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
  Event: Event;
  EventContent: EventContent;
  EventContentInput: EventContentInput;
  EventContentPatchInput: EventContentPatchInput;
  EventPatchInput: EventPatchInput;
  EventReplaceInput: EventReplaceInput;
  EventsDeleteResponse: EventsDeleteResponse;
  EventsListFiltersInput: EventsListFiltersInput;
  EventsListInput: EventsListInput;
  EventsListResponse: EventsListResponse;
  EventsResponse: EventsResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Transaction: Transaction;
  TransactionContent: TransactionContent;
  TransactionContentInput: TransactionContentInput;
  TransactionContentPatchInput: TransactionContentPatchInput;
  TransactionPatchInput: TransactionPatchInput;
  TransactionReplaceInput: TransactionReplaceInput;
  TransactionsDeleteResponse: TransactionsDeleteResponse;
  TransactionsListFiltersInput: TransactionsListFiltersInput;
  TransactionsListInput: TransactionsListInput;
  TransactionsListResponse: TransactionsListResponse;
  TransactionsResponse: TransactionsResponse;
  Venue: Venue;
  VenueContent: VenueContent;
  VenueContentInput: VenueContentInput;
  VenueContentPatchInput: VenueContentPatchInput;
  VenuePatchInput: VenuePatchInput;
  VenueReplaceInput: VenueReplaceInput;
  VenuesDeleteResponse: VenuesDeleteResponse;
  VenuesListFiltersInput: VenuesListFiltersInput;
  VenuesListInput: VenuesListInput;
  VenuesListResponse: VenuesListResponse;
  VenuesResponse: VenuesResponse;
}>;

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = ResolversObject<{
  content?: Resolver<ResolversTypes['ArtistContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArtistContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistContent'] = ResolversParentTypes['ArtistContent']> = ResolversObject<{
  _REPLACE_WITH_YOUR_FIELDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  content?: Resolver<ResolversTypes['EventContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventContent'] = ResolversParentTypes['EventContent']> = ResolversObject<{
  _REPLACE_WITH_YOUR_FIELDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventsDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsDeleteResponse'] = ResolversParentTypes['EventsDeleteResponse']> = ResolversObject<{
  deletedIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventsListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsListResponse'] = ResolversParentTypes['EventsListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsResponse'] = ResolversParentTypes['EventsResponse']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  records?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  artistsCreate?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsCreateArgs, 'contents'>>;
  artistsDelete?: Resolver<Maybe<ResolversTypes['ArtistsDeleteResponse']>, ParentType, ContextType, RequireFields<MutationArtistsDeleteArgs, 'ids'>>;
  artistsPatch?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsPatchArgs, 'records'>>;
  artistsReplace?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<MutationArtistsReplaceArgs, 'records'>>;
  eventsCreate?: Resolver<Maybe<ResolversTypes['EventsResponse']>, ParentType, ContextType, RequireFields<MutationEventsCreateArgs, 'contents'>>;
  eventsDelete?: Resolver<Maybe<ResolversTypes['EventsDeleteResponse']>, ParentType, ContextType, RequireFields<MutationEventsDeleteArgs, 'ids'>>;
  eventsPatch?: Resolver<Maybe<ResolversTypes['EventsResponse']>, ParentType, ContextType, RequireFields<MutationEventsPatchArgs, 'records'>>;
  eventsReplace?: Resolver<Maybe<ResolversTypes['EventsResponse']>, ParentType, ContextType, RequireFields<MutationEventsReplaceArgs, 'records'>>;
  transactionsCreate?: Resolver<Maybe<ResolversTypes['TransactionsResponse']>, ParentType, ContextType, RequireFields<MutationTransactionsCreateArgs, 'contents'>>;
  transactionsDelete?: Resolver<Maybe<ResolversTypes['TransactionsDeleteResponse']>, ParentType, ContextType, RequireFields<MutationTransactionsDeleteArgs, 'ids'>>;
  transactionsPatch?: Resolver<Maybe<ResolversTypes['TransactionsResponse']>, ParentType, ContextType, RequireFields<MutationTransactionsPatchArgs, 'records'>>;
  transactionsReplace?: Resolver<Maybe<ResolversTypes['TransactionsResponse']>, ParentType, ContextType, RequireFields<MutationTransactionsReplaceArgs, 'records'>>;
  venuesCreate?: Resolver<Maybe<ResolversTypes['VenuesResponse']>, ParentType, ContextType, RequireFields<MutationVenuesCreateArgs, 'contents'>>;
  venuesDelete?: Resolver<Maybe<ResolversTypes['VenuesDeleteResponse']>, ParentType, ContextType, RequireFields<MutationVenuesDeleteArgs, 'ids'>>;
  venuesPatch?: Resolver<Maybe<ResolversTypes['VenuesResponse']>, ParentType, ContextType, RequireFields<MutationVenuesPatchArgs, 'records'>>;
  venuesReplace?: Resolver<Maybe<ResolversTypes['VenuesResponse']>, ParentType, ContextType, RequireFields<MutationVenuesReplaceArgs, 'records'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  artistsGetByIds?: Resolver<Maybe<ResolversTypes['ArtistsResponse']>, ParentType, ContextType, RequireFields<QueryArtistsGetByIdsArgs, 'ids'>>;
  artistsList?: Resolver<Maybe<ResolversTypes['ArtistsListResponse']>, ParentType, ContextType, Partial<QueryArtistsListArgs>>;
  eventsGetByIds?: Resolver<Maybe<ResolversTypes['EventsResponse']>, ParentType, ContextType, RequireFields<QueryEventsGetByIdsArgs, 'ids'>>;
  eventsList?: Resolver<Maybe<ResolversTypes['EventsListResponse']>, ParentType, ContextType, Partial<QueryEventsListArgs>>;
  transactionsGetByIds?: Resolver<Maybe<ResolversTypes['TransactionsResponse']>, ParentType, ContextType, RequireFields<QueryTransactionsGetByIdsArgs, 'ids'>>;
  transactionsList?: Resolver<Maybe<ResolversTypes['TransactionsListResponse']>, ParentType, ContextType, Partial<QueryTransactionsListArgs>>;
  venuesGetByIds?: Resolver<Maybe<ResolversTypes['VenuesResponse']>, ParentType, ContextType, RequireFields<QueryVenuesGetByIdsArgs, 'ids'>>;
  venuesList?: Resolver<Maybe<ResolversTypes['VenuesListResponse']>, ParentType, ContextType, Partial<QueryVenuesListArgs>>;
}>;

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  content?: Resolver<ResolversTypes['TransactionContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionContent'] = ResolversParentTypes['TransactionContent']> = ResolversObject<{
  _REPLACE_WITH_YOUR_FIELDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionsDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionsDeleteResponse'] = ResolversParentTypes['TransactionsDeleteResponse']> = ResolversObject<{
  deletedIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionsListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionsListResponse'] = ResolversParentTypes['TransactionsListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Transaction']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionsResponse'] = ResolversParentTypes['TransactionsResponse']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  records?: Resolver<Array<Maybe<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VenueResolvers<ContextType = any, ParentType extends ResolversParentTypes['Venue'] = ResolversParentTypes['Venue']> = ResolversObject<{
  content?: Resolver<ResolversTypes['VenueContent'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VenueContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['VenueContent'] = ResolversParentTypes['VenueContent']> = ResolversObject<{
  _REPLACE_WITH_YOUR_FIELDS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VenuesDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VenuesDeleteResponse'] = ResolversParentTypes['VenuesDeleteResponse']> = ResolversObject<{
  deletedIds?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VenuesListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VenuesListResponse'] = ResolversParentTypes['VenuesListResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Venue']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VenuesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['VenuesResponse'] = ResolversParentTypes['VenuesResponse']> = ResolversObject<{
  errors?: Resolver<Array<Maybe<ResolversTypes['ErrorResponse']>>, ParentType, ContextType>;
  records?: Resolver<Array<Maybe<ResolversTypes['Venue']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Artist?: ArtistResolvers<ContextType>;
  ArtistContent?: ArtistContentResolvers<ContextType>;
  ArtistsDeleteResponse?: ArtistsDeleteResponseResolvers<ContextType>;
  ArtistsListResponse?: ArtistsListResponseResolvers<ContextType>;
  ArtistsResponse?: ArtistsResponseResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventContent?: EventContentResolvers<ContextType>;
  EventsDeleteResponse?: EventsDeleteResponseResolvers<ContextType>;
  EventsListResponse?: EventsListResponseResolvers<ContextType>;
  EventsResponse?: EventsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionContent?: TransactionContentResolvers<ContextType>;
  TransactionsDeleteResponse?: TransactionsDeleteResponseResolvers<ContextType>;
  TransactionsListResponse?: TransactionsListResponseResolvers<ContextType>;
  TransactionsResponse?: TransactionsResponseResolvers<ContextType>;
  Venue?: VenueResolvers<ContextType>;
  VenueContent?: VenueContentResolvers<ContextType>;
  VenuesDeleteResponse?: VenuesDeleteResponseResolvers<ContextType>;
  VenuesListResponse?: VenuesListResponseResolvers<ContextType>;
  VenuesResponse?: VenuesResponseResolvers<ContextType>;
}>;

