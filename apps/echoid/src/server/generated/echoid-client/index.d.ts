
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model UserQuest
 * 
 */
export type UserQuest = $Result.DefaultSelection<Prisma.$UserQuestPayload>
/**
 * Model GameScore
 * 
 */
export type GameScore = $Result.DefaultSelection<Prisma.$GameScorePayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuest`: Exposes CRUD operations for the **UserQuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuests
    * const userQuests = await prisma.userQuest.findMany()
    * ```
    */
  get userQuest(): Prisma.UserQuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameScore`: Exposes CRUD operations for the **GameScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameScores
    * const gameScores = await prisma.gameScore.findMany()
    * ```
    */
  get gameScore(): Prisma.GameScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Achievement: 'Achievement',
    Quest: 'Quest',
    UserQuest: 'UserQuest',
    GameScore: 'GameScore',
    InventoryItem: 'InventoryItem',
    Friend: 'Friend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "achievement" | "quest" | "userQuest" | "gameScore" | "inventoryItem" | "friend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      UserQuest: {
        payload: Prisma.$UserQuestPayload<ExtArgs>
        fields: Prisma.UserQuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          findFirst: {
            args: Prisma.UserQuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          findMany: {
            args: Prisma.UserQuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>[]
          }
          create: {
            args: Prisma.UserQuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          createMany: {
            args: Prisma.UserQuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>[]
          }
          delete: {
            args: Prisma.UserQuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          update: {
            args: Prisma.UserQuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>[]
          }
          upsert: {
            args: Prisma.UserQuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          aggregate: {
            args: Prisma.UserQuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuest>
          }
          groupBy: {
            args: Prisma.UserQuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestCountAggregateOutputType> | number
          }
        }
      }
      GameScore: {
        payload: Prisma.$GameScorePayload<ExtArgs>
        fields: Prisma.GameScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findFirst: {
            args: Prisma.GameScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findMany: {
            args: Prisma.GameScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          create: {
            args: Prisma.GameScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          createMany: {
            args: Prisma.GameScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          delete: {
            args: Prisma.GameScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          update: {
            args: Prisma.GameScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          deleteMany: {
            args: Prisma.GameScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          upsert: {
            args: Prisma.GameScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          aggregate: {
            args: Prisma.GameScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameScore>
          }
          groupBy: {
            args: Prisma.GameScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameScoreCountArgs<ExtArgs>
            result: $Utils.Optional<GameScoreCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    achievement?: AchievementOmit
    quest?: QuestOmit
    userQuest?: UserQuestOmit
    gameScore?: GameScoreOmit
    inventoryItem?: InventoryItemOmit
    friend?: FriendOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    achievements: number
    questProgress: number
    gameScores: number
    inventory: number
    friendsFrom: number
    friendsTo: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | ProfileCountOutputTypeCountAchievementsArgs
    questProgress?: boolean | ProfileCountOutputTypeCountQuestProgressArgs
    gameScores?: boolean | ProfileCountOutputTypeCountGameScoresArgs
    inventory?: boolean | ProfileCountOutputTypeCountInventoryArgs
    friendsFrom?: boolean | ProfileCountOutputTypeCountFriendsFromArgs
    friendsTo?: boolean | ProfileCountOutputTypeCountFriendsToArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountQuestProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountGameScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoreWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFriendsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFriendsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }


  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    userProgress: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | QuestCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    score: number | null
    version: number | null
    lastAnchorBlk: number | null
    xp: number | null
    level: number | null
    coins: number | null
    streak: number | null
    petLevel: number | null
  }

  export type ProfileSumAggregateOutputType = {
    score: number | null
    version: number | null
    lastAnchorBlk: number | null
    xp: number | null
    level: number | null
    coins: number | null
    streak: number | null
    petLevel: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    address: string | null
    handle: string | null
    bio: string | null
    score: number | null
    version: number | null
    lastAnchorTx: string | null
    lastAnchorBlk: number | null
    hashHex: string | null
    updatedAt: Date | null
    createdAt: Date | null
    xp: number | null
    level: number | null
    coins: number | null
    streak: number | null
    lastLoginDate: Date | null
    theme: string | null
    petType: string | null
    petLevel: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    address: string | null
    handle: string | null
    bio: string | null
    score: number | null
    version: number | null
    lastAnchorTx: string | null
    lastAnchorBlk: number | null
    hashHex: string | null
    updatedAt: Date | null
    createdAt: Date | null
    xp: number | null
    level: number | null
    coins: number | null
    streak: number | null
    lastLoginDate: Date | null
    theme: string | null
    petType: string | null
    petLevel: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    address: number
    handle: number
    bio: number
    links: number
    skills: number
    score: number
    version: number
    lastAnchorTx: number
    lastAnchorBlk: number
    hashHex: number
    updatedAt: number
    createdAt: number
    xp: number
    level: number
    coins: number
    streak: number
    lastLoginDate: number
    theme: number
    petType: number
    petLevel: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    score?: true
    version?: true
    lastAnchorBlk?: true
    xp?: true
    level?: true
    coins?: true
    streak?: true
    petLevel?: true
  }

  export type ProfileSumAggregateInputType = {
    score?: true
    version?: true
    lastAnchorBlk?: true
    xp?: true
    level?: true
    coins?: true
    streak?: true
    petLevel?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    address?: true
    handle?: true
    bio?: true
    score?: true
    version?: true
    lastAnchorTx?: true
    lastAnchorBlk?: true
    hashHex?: true
    updatedAt?: true
    createdAt?: true
    xp?: true
    level?: true
    coins?: true
    streak?: true
    lastLoginDate?: true
    theme?: true
    petType?: true
    petLevel?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    address?: true
    handle?: true
    bio?: true
    score?: true
    version?: true
    lastAnchorTx?: true
    lastAnchorBlk?: true
    hashHex?: true
    updatedAt?: true
    createdAt?: true
    xp?: true
    level?: true
    coins?: true
    streak?: true
    lastLoginDate?: true
    theme?: true
    petType?: true
    petLevel?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    address?: true
    handle?: true
    bio?: true
    links?: true
    skills?: true
    score?: true
    version?: true
    lastAnchorTx?: true
    lastAnchorBlk?: true
    hashHex?: true
    updatedAt?: true
    createdAt?: true
    xp?: true
    level?: true
    coins?: true
    streak?: true
    lastLoginDate?: true
    theme?: true
    petType?: true
    petLevel?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    address: string
    handle: string
    bio: string | null
    links: JsonValue | null
    skills: string[]
    score: number
    version: number
    lastAnchorTx: string | null
    lastAnchorBlk: number | null
    hashHex: string | null
    updatedAt: Date
    createdAt: Date
    xp: number
    level: number
    coins: number
    streak: number
    lastLoginDate: Date | null
    theme: string | null
    petType: string | null
    petLevel: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    handle?: boolean
    bio?: boolean
    links?: boolean
    skills?: boolean
    score?: boolean
    version?: boolean
    lastAnchorTx?: boolean
    lastAnchorBlk?: boolean
    hashHex?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    xp?: boolean
    level?: boolean
    coins?: boolean
    streak?: boolean
    lastLoginDate?: boolean
    theme?: boolean
    petType?: boolean
    petLevel?: boolean
    achievements?: boolean | Profile$achievementsArgs<ExtArgs>
    questProgress?: boolean | Profile$questProgressArgs<ExtArgs>
    gameScores?: boolean | Profile$gameScoresArgs<ExtArgs>
    inventory?: boolean | Profile$inventoryArgs<ExtArgs>
    friendsFrom?: boolean | Profile$friendsFromArgs<ExtArgs>
    friendsTo?: boolean | Profile$friendsToArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    handle?: boolean
    bio?: boolean
    links?: boolean
    skills?: boolean
    score?: boolean
    version?: boolean
    lastAnchorTx?: boolean
    lastAnchorBlk?: boolean
    hashHex?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    xp?: boolean
    level?: boolean
    coins?: boolean
    streak?: boolean
    lastLoginDate?: boolean
    theme?: boolean
    petType?: boolean
    petLevel?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    handle?: boolean
    bio?: boolean
    links?: boolean
    skills?: boolean
    score?: boolean
    version?: boolean
    lastAnchorTx?: boolean
    lastAnchorBlk?: boolean
    hashHex?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    xp?: boolean
    level?: boolean
    coins?: boolean
    streak?: boolean
    lastLoginDate?: boolean
    theme?: boolean
    petType?: boolean
    petLevel?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    address?: boolean
    handle?: boolean
    bio?: boolean
    links?: boolean
    skills?: boolean
    score?: boolean
    version?: boolean
    lastAnchorTx?: boolean
    lastAnchorBlk?: boolean
    hashHex?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    xp?: boolean
    level?: boolean
    coins?: boolean
    streak?: boolean
    lastLoginDate?: boolean
    theme?: boolean
    petType?: boolean
    petLevel?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "handle" | "bio" | "links" | "skills" | "score" | "version" | "lastAnchorTx" | "lastAnchorBlk" | "hashHex" | "updatedAt" | "createdAt" | "xp" | "level" | "coins" | "streak" | "lastLoginDate" | "theme" | "petType" | "petLevel", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | Profile$achievementsArgs<ExtArgs>
    questProgress?: boolean | Profile$questProgressArgs<ExtArgs>
    gameScores?: boolean | Profile$gameScoresArgs<ExtArgs>
    inventory?: boolean | Profile$inventoryArgs<ExtArgs>
    friendsFrom?: boolean | Profile$friendsFromArgs<ExtArgs>
    friendsTo?: boolean | Profile$friendsToArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      questProgress: Prisma.$UserQuestPayload<ExtArgs>[]
      gameScores: Prisma.$GameScorePayload<ExtArgs>[]
      inventory: Prisma.$InventoryItemPayload<ExtArgs>[]
      friendsFrom: Prisma.$FriendPayload<ExtArgs>[]
      friendsTo: Prisma.$FriendPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      handle: string
      bio: string | null
      links: Prisma.JsonValue | null
      skills: string[]
      score: number
      version: number
      lastAnchorTx: string | null
      lastAnchorBlk: number | null
      hashHex: string | null
      updatedAt: Date
      createdAt: Date
      xp: number
      level: number
      coins: number
      streak: number
      lastLoginDate: Date | null
      theme: string | null
      petType: string | null
      petLevel: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievements<T extends Profile$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questProgress<T extends Profile$questProgressArgs<ExtArgs> = {}>(args?: Subset<T, Profile$questProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameScores<T extends Profile$gameScoresArgs<ExtArgs> = {}>(args?: Subset<T, Profile$gameScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Profile$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Profile$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendsFrom<T extends Profile$friendsFromArgs<ExtArgs> = {}>(args?: Subset<T, Profile$friendsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendsTo<T extends Profile$friendsToArgs<ExtArgs> = {}>(args?: Subset<T, Profile$friendsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly handle: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly links: FieldRef<"Profile", 'Json'>
    readonly skills: FieldRef<"Profile", 'String[]'>
    readonly score: FieldRef<"Profile", 'Int'>
    readonly version: FieldRef<"Profile", 'Int'>
    readonly lastAnchorTx: FieldRef<"Profile", 'String'>
    readonly lastAnchorBlk: FieldRef<"Profile", 'Int'>
    readonly hashHex: FieldRef<"Profile", 'String'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly xp: FieldRef<"Profile", 'Int'>
    readonly level: FieldRef<"Profile", 'Int'>
    readonly coins: FieldRef<"Profile", 'Int'>
    readonly streak: FieldRef<"Profile", 'Int'>
    readonly lastLoginDate: FieldRef<"Profile", 'DateTime'>
    readonly theme: FieldRef<"Profile", 'String'>
    readonly petType: FieldRef<"Profile", 'String'>
    readonly petLevel: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.achievements
   */
  export type Profile$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Profile.questProgress
   */
  export type Profile$questProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    cursor?: UserQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * Profile.gameScores
   */
  export type Profile$gameScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    where?: GameScoreWhereInput
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    cursor?: GameScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * Profile.inventory
   */
  export type Profile$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Profile.friendsFrom
   */
  export type Profile$friendsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Profile.friendsTo
   */
  export type Profile$friendsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    badgeType: string | null
    rarity: string | null
    earnedAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    badgeType: string | null
    rarity: string | null
    earnedAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    profileId: number
    badgeType: number
    rarity: number
    earnedAt: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    profileId?: true
    badgeType?: true
    rarity?: true
    earnedAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    profileId?: true
    badgeType?: true
    rarity?: true
    earnedAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    profileId?: true
    badgeType?: true
    rarity?: true
    earnedAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    profileId: string
    badgeType: string
    rarity: string
    earnedAt: Date
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    badgeType?: boolean
    rarity?: boolean
    earnedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    badgeType?: boolean
    rarity?: boolean
    earnedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    badgeType?: boolean
    rarity?: boolean
    earnedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    profileId?: boolean
    badgeType?: boolean
    rarity?: boolean
    earnedAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "badgeType" | "rarity" | "earnedAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      badgeType: string
      rarity: string
      earnedAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly profileId: FieldRef<"Achievement", 'String'>
    readonly badgeType: FieldRef<"Achievement", 'String'>
    readonly rarity: FieldRef<"Achievement", 'String'>
    readonly earnedAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    icon: string | null
    active: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type QuestMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    icon: string | null
    active: boolean | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    requirement: number
    reward: number
    icon: number
    active: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type QuestMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    icon?: true
    active?: true
    expiresAt?: true
    createdAt?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    icon?: true
    active?: true
    expiresAt?: true
    createdAt?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    requirement?: true
    reward?: true
    icon?: true
    active?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: string
    type: string
    title: string
    description: string
    requirement: JsonValue
    reward: JsonValue
    icon: string
    active: boolean
    expiresAt: Date | null
    createdAt: Date
    _count: QuestCountAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    requirement?: boolean
    reward?: boolean
    icon?: boolean
    active?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    userProgress?: boolean | Quest$userProgressArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    requirement?: boolean
    reward?: boolean
    icon?: boolean
    active?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    requirement?: boolean
    reward?: boolean
    icon?: boolean
    active?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    requirement?: boolean
    reward?: boolean
    icon?: boolean
    active?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type QuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "requirement" | "reward" | "icon" | "active" | "expiresAt" | "createdAt", ExtArgs["result"]["quest"]>
  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | Quest$userProgressArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      userProgress: Prisma.$UserQuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      description: string
      requirement: Prisma.JsonValue
      reward: Prisma.JsonValue
      icon: string
      active: boolean
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }

  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestFindUniqueArgs>(args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestFindFirstArgs>(args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestFindManyArgs>(args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
     */
    create<T extends QuestCreateArgs>(args: SelectSubset<T, QuestCreateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestCreateManyArgs>(args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {QuestCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quest = await prisma.quest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
     */
    delete<T extends QuestDeleteArgs>(args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestUpdateArgs>(args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestDeleteManyArgs>(args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestUpdateManyArgs>(args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests and returns the data updated in the database.
     * @param {QuestUpdateManyAndReturnArgs} args - Arguments to update many Quests.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quests and only return the `id`
     * const questWithIdOnly = await prisma.quest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
     */
    upsert<T extends QuestUpsertArgs>(args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProgress<T extends Quest$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Quest$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quest model
   */
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'String'>
    readonly type: FieldRef<"Quest", 'String'>
    readonly title: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly requirement: FieldRef<"Quest", 'Json'>
    readonly reward: FieldRef<"Quest", 'Json'>
    readonly icon: FieldRef<"Quest", 'String'>
    readonly active: FieldRef<"Quest", 'Boolean'>
    readonly expiresAt: FieldRef<"Quest", 'DateTime'>
    readonly createdAt: FieldRef<"Quest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest createManyAndReturn
   */
  export type QuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest updateManyAndReturn
   */
  export type QuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to update.
     */
    limit?: number
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
    /**
     * Limit how many Quests to delete.
     */
    limit?: number
  }

  /**
   * Quest.userProgress
   */
  export type Quest$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    cursor?: UserQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quest
     */
    omit?: QuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model UserQuest
   */

  export type AggregateUserQuest = {
    _count: UserQuestCountAggregateOutputType | null
    _avg: UserQuestAvgAggregateOutputType | null
    _sum: UserQuestSumAggregateOutputType | null
    _min: UserQuestMinAggregateOutputType | null
    _max: UserQuestMaxAggregateOutputType | null
  }

  export type UserQuestAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserQuestSumAggregateOutputType = {
    progress: number | null
  }

  export type UserQuestMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    questId: string | null
    progress: number | null
    completed: boolean | null
    claimed: boolean | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type UserQuestMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    questId: string | null
    progress: number | null
    completed: boolean | null
    claimed: boolean | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type UserQuestCountAggregateOutputType = {
    id: number
    profileId: number
    questId: number
    progress: number
    completed: number
    claimed: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type UserQuestAvgAggregateInputType = {
    progress?: true
  }

  export type UserQuestSumAggregateInputType = {
    progress?: true
  }

  export type UserQuestMinAggregateInputType = {
    id?: true
    profileId?: true
    questId?: true
    progress?: true
    completed?: true
    claimed?: true
    completedAt?: true
    createdAt?: true
  }

  export type UserQuestMaxAggregateInputType = {
    id?: true
    profileId?: true
    questId?: true
    progress?: true
    completed?: true
    claimed?: true
    completedAt?: true
    createdAt?: true
  }

  export type UserQuestCountAggregateInputType = {
    id?: true
    profileId?: true
    questId?: true
    progress?: true
    completed?: true
    claimed?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserQuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuest to aggregate.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuests
    **/
    _count?: true | UserQuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestMaxAggregateInputType
  }

  export type GetUserQuestAggregateType<T extends UserQuestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuest[P]>
      : GetScalarType<T[P], AggregateUserQuest[P]>
  }




  export type UserQuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithAggregationInput | UserQuestOrderByWithAggregationInput[]
    by: UserQuestScalarFieldEnum[] | UserQuestScalarFieldEnum
    having?: UserQuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestCountAggregateInputType | true
    _avg?: UserQuestAvgAggregateInputType
    _sum?: UserQuestSumAggregateInputType
    _min?: UserQuestMinAggregateInputType
    _max?: UserQuestMaxAggregateInputType
  }

  export type UserQuestGroupByOutputType = {
    id: string
    profileId: string
    questId: string
    progress: number
    completed: boolean
    claimed: boolean
    completedAt: Date | null
    createdAt: Date
    _count: UserQuestCountAggregateOutputType | null
    _avg: UserQuestAvgAggregateOutputType | null
    _sum: UserQuestSumAggregateOutputType | null
    _min: UserQuestMinAggregateOutputType | null
    _max: UserQuestMaxAggregateOutputType | null
  }

  type GetUserQuestGroupByPayload<T extends UserQuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    questId?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuest"]>

  export type UserQuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    questId?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuest"]>

  export type UserQuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    questId?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    completedAt?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuest"]>

  export type UserQuestSelectScalar = {
    id?: boolean
    profileId?: boolean
    questId?: boolean
    progress?: boolean
    completed?: boolean
    claimed?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type UserQuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "questId" | "progress" | "completed" | "claimed" | "completedAt" | "createdAt", ExtArgs["result"]["userQuest"]>
  export type UserQuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }
  export type UserQuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }
  export type UserQuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }

  export type $UserQuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuest"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      questId: string
      progress: number
      completed: boolean
      claimed: boolean
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userQuest"]>
    composites: {}
  }

  type UserQuestGetPayload<S extends boolean | null | undefined | UserQuestDefaultArgs> = $Result.GetResult<Prisma.$UserQuestPayload, S>

  type UserQuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestCountAggregateInputType | true
    }

  export interface UserQuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuest'], meta: { name: 'UserQuest' } }
    /**
     * Find zero or one UserQuest that matches the filter.
     * @param {UserQuestFindUniqueArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestFindUniqueArgs>(args: SelectSubset<T, UserQuestFindUniqueArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestFindUniqueOrThrowArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindFirstArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestFindFirstArgs>(args?: SelectSubset<T, UserQuestFindFirstArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindFirstOrThrowArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuests
     * const userQuests = await prisma.userQuest.findMany()
     * 
     * // Get first 10 UserQuests
     * const userQuests = await prisma.userQuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestWithIdOnly = await prisma.userQuest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuestFindManyArgs>(args?: SelectSubset<T, UserQuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuest.
     * @param {UserQuestCreateArgs} args - Arguments to create a UserQuest.
     * @example
     * // Create one UserQuest
     * const UserQuest = await prisma.userQuest.create({
     *   data: {
     *     // ... data to create a UserQuest
     *   }
     * })
     * 
     */
    create<T extends UserQuestCreateArgs>(args: SelectSubset<T, UserQuestCreateArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuests.
     * @param {UserQuestCreateManyArgs} args - Arguments to create many UserQuests.
     * @example
     * // Create many UserQuests
     * const userQuest = await prisma.userQuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestCreateManyArgs>(args?: SelectSubset<T, UserQuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuests and returns the data saved in the database.
     * @param {UserQuestCreateManyAndReturnArgs} args - Arguments to create many UserQuests.
     * @example
     * // Create many UserQuests
     * const userQuest = await prisma.userQuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuests and only return the `id`
     * const userQuestWithIdOnly = await prisma.userQuest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuestCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuest.
     * @param {UserQuestDeleteArgs} args - Arguments to delete one UserQuest.
     * @example
     * // Delete one UserQuest
     * const UserQuest = await prisma.userQuest.delete({
     *   where: {
     *     // ... filter to delete one UserQuest
     *   }
     * })
     * 
     */
    delete<T extends UserQuestDeleteArgs>(args: SelectSubset<T, UserQuestDeleteArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuest.
     * @param {UserQuestUpdateArgs} args - Arguments to update one UserQuest.
     * @example
     * // Update one UserQuest
     * const userQuest = await prisma.userQuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestUpdateArgs>(args: SelectSubset<T, UserQuestUpdateArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuests.
     * @param {UserQuestDeleteManyArgs} args - Arguments to filter UserQuests to delete.
     * @example
     * // Delete a few UserQuests
     * const { count } = await prisma.userQuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestDeleteManyArgs>(args?: SelectSubset<T, UserQuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuests
     * const userQuest = await prisma.userQuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestUpdateManyArgs>(args: SelectSubset<T, UserQuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuests and returns the data updated in the database.
     * @param {UserQuestUpdateManyAndReturnArgs} args - Arguments to update many UserQuests.
     * @example
     * // Update many UserQuests
     * const userQuest = await prisma.userQuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuests and only return the `id`
     * const userQuestWithIdOnly = await prisma.userQuest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserQuestUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuest.
     * @param {UserQuestUpsertArgs} args - Arguments to update or create a UserQuest.
     * @example
     * // Update or create a UserQuest
     * const userQuest = await prisma.userQuest.upsert({
     *   create: {
     *     // ... data to create a UserQuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuest we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestUpsertArgs>(args: SelectSubset<T, UserQuestUpsertArgs<ExtArgs>>): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCountArgs} args - Arguments to filter UserQuests to count.
     * @example
     * // Count the number of UserQuests
     * const count = await prisma.userQuest.count({
     *   where: {
     *     // ... the filter for the UserQuests we want to count
     *   }
     * })
    **/
    count<T extends UserQuestCountArgs>(
      args?: Subset<T, UserQuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuestAggregateArgs>(args: Subset<T, UserQuestAggregateArgs>): Prisma.PrismaPromise<GetUserQuestAggregateType<T>>

    /**
     * Group by UserQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuest model
   */
  readonly fields: UserQuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuest model
   */
  interface UserQuestFieldRefs {
    readonly id: FieldRef<"UserQuest", 'String'>
    readonly profileId: FieldRef<"UserQuest", 'String'>
    readonly questId: FieldRef<"UserQuest", 'String'>
    readonly progress: FieldRef<"UserQuest", 'Int'>
    readonly completed: FieldRef<"UserQuest", 'Boolean'>
    readonly claimed: FieldRef<"UserQuest", 'Boolean'>
    readonly completedAt: FieldRef<"UserQuest", 'DateTime'>
    readonly createdAt: FieldRef<"UserQuest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuest findUnique
   */
  export type UserQuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where: UserQuestWhereUniqueInput
  }

  /**
   * UserQuest findUniqueOrThrow
   */
  export type UserQuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where: UserQuestWhereUniqueInput
  }

  /**
   * UserQuest findFirst
   */
  export type UserQuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuests.
     */
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * UserQuest findFirstOrThrow
   */
  export type UserQuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuests.
     */
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * UserQuest findMany
   */
  export type UserQuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuests to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * UserQuest create
   */
  export type UserQuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuest.
     */
    data: XOR<UserQuestCreateInput, UserQuestUncheckedCreateInput>
  }

  /**
   * UserQuest createMany
   */
  export type UserQuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuests.
     */
    data: UserQuestCreateManyInput | UserQuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuest createManyAndReturn
   */
  export type UserQuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuests.
     */
    data: UserQuestCreateManyInput | UserQuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuest update
   */
  export type UserQuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuest.
     */
    data: XOR<UserQuestUpdateInput, UserQuestUncheckedUpdateInput>
    /**
     * Choose, which UserQuest to update.
     */
    where: UserQuestWhereUniqueInput
  }

  /**
   * UserQuest updateMany
   */
  export type UserQuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuests.
     */
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyInput>
    /**
     * Filter which UserQuests to update
     */
    where?: UserQuestWhereInput
    /**
     * Limit how many UserQuests to update.
     */
    limit?: number
  }

  /**
   * UserQuest updateManyAndReturn
   */
  export type UserQuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * The data used to update UserQuests.
     */
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyInput>
    /**
     * Filter which UserQuests to update
     */
    where?: UserQuestWhereInput
    /**
     * Limit how many UserQuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuest upsert
   */
  export type UserQuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuest to update in case it exists.
     */
    where: UserQuestWhereUniqueInput
    /**
     * In case the UserQuest found by the `where` argument doesn't exist, create a new UserQuest with this data.
     */
    create: XOR<UserQuestCreateInput, UserQuestUncheckedCreateInput>
    /**
     * In case the UserQuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestUpdateInput, UserQuestUncheckedUpdateInput>
  }

  /**
   * UserQuest delete
   */
  export type UserQuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter which UserQuest to delete.
     */
    where: UserQuestWhereUniqueInput
  }

  /**
   * UserQuest deleteMany
   */
  export type UserQuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuests to delete
     */
    where?: UserQuestWhereInput
    /**
     * Limit how many UserQuests to delete.
     */
    limit?: number
  }

  /**
   * UserQuest without action
   */
  export type UserQuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuest
     */
    omit?: UserQuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
  }


  /**
   * Model GameScore
   */

  export type AggregateGameScore = {
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  export type GameScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type GameScoreSumAggregateOutputType = {
    score: number | null
  }

  export type GameScoreMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    game: string | null
    score: number | null
    playedAt: Date | null
  }

  export type GameScoreMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    game: string | null
    score: number | null
    playedAt: Date | null
  }

  export type GameScoreCountAggregateOutputType = {
    id: number
    profileId: number
    game: number
    score: number
    metadata: number
    playedAt: number
    _all: number
  }


  export type GameScoreAvgAggregateInputType = {
    score?: true
  }

  export type GameScoreSumAggregateInputType = {
    score?: true
  }

  export type GameScoreMinAggregateInputType = {
    id?: true
    profileId?: true
    game?: true
    score?: true
    playedAt?: true
  }

  export type GameScoreMaxAggregateInputType = {
    id?: true
    profileId?: true
    game?: true
    score?: true
    playedAt?: true
  }

  export type GameScoreCountAggregateInputType = {
    id?: true
    profileId?: true
    game?: true
    score?: true
    metadata?: true
    playedAt?: true
    _all?: true
  }

  export type GameScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScore to aggregate.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameScores
    **/
    _count?: true | GameScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameScoreMaxAggregateInputType
  }

  export type GetGameScoreAggregateType<T extends GameScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateGameScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameScore[P]>
      : GetScalarType<T[P], AggregateGameScore[P]>
  }




  export type GameScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoreWhereInput
    orderBy?: GameScoreOrderByWithAggregationInput | GameScoreOrderByWithAggregationInput[]
    by: GameScoreScalarFieldEnum[] | GameScoreScalarFieldEnum
    having?: GameScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameScoreCountAggregateInputType | true
    _avg?: GameScoreAvgAggregateInputType
    _sum?: GameScoreSumAggregateInputType
    _min?: GameScoreMinAggregateInputType
    _max?: GameScoreMaxAggregateInputType
  }

  export type GameScoreGroupByOutputType = {
    id: string
    profileId: string
    game: string
    score: number
    metadata: JsonValue | null
    playedAt: Date
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  type GetGameScoreGroupByPayload<T extends GameScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
            : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
        }
      >
    >


  export type GameScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    game?: boolean
    score?: boolean
    metadata?: boolean
    playedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    game?: boolean
    score?: boolean
    metadata?: boolean
    playedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    game?: boolean
    score?: boolean
    metadata?: boolean
    playedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectScalar = {
    id?: boolean
    profileId?: boolean
    game?: boolean
    score?: boolean
    metadata?: boolean
    playedAt?: boolean
  }

  export type GameScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "game" | "score" | "metadata" | "playedAt", ExtArgs["result"]["gameScore"]>
  export type GameScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type GameScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type GameScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $GameScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameScore"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      game: string
      score: number
      metadata: Prisma.JsonValue | null
      playedAt: Date
    }, ExtArgs["result"]["gameScore"]>
    composites: {}
  }

  type GameScoreGetPayload<S extends boolean | null | undefined | GameScoreDefaultArgs> = $Result.GetResult<Prisma.$GameScorePayload, S>

  type GameScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameScoreCountAggregateInputType | true
    }

  export interface GameScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameScore'], meta: { name: 'GameScore' } }
    /**
     * Find zero or one GameScore that matches the filter.
     * @param {GameScoreFindUniqueArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameScoreFindUniqueArgs>(args: SelectSubset<T, GameScoreFindUniqueArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameScoreFindUniqueOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, GameScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameScoreFindFirstArgs>(args?: SelectSubset<T, GameScoreFindFirstArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, GameScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameScores
     * const gameScores = await prisma.gameScore.findMany()
     * 
     * // Get first 10 GameScores
     * const gameScores = await prisma.gameScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameScoreFindManyArgs>(args?: SelectSubset<T, GameScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameScore.
     * @param {GameScoreCreateArgs} args - Arguments to create a GameScore.
     * @example
     * // Create one GameScore
     * const GameScore = await prisma.gameScore.create({
     *   data: {
     *     // ... data to create a GameScore
     *   }
     * })
     * 
     */
    create<T extends GameScoreCreateArgs>(args: SelectSubset<T, GameScoreCreateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameScores.
     * @param {GameScoreCreateManyArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameScoreCreateManyArgs>(args?: SelectSubset<T, GameScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameScores and returns the data saved in the database.
     * @param {GameScoreCreateManyAndReturnArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, GameScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameScore.
     * @param {GameScoreDeleteArgs} args - Arguments to delete one GameScore.
     * @example
     * // Delete one GameScore
     * const GameScore = await prisma.gameScore.delete({
     *   where: {
     *     // ... filter to delete one GameScore
     *   }
     * })
     * 
     */
    delete<T extends GameScoreDeleteArgs>(args: SelectSubset<T, GameScoreDeleteArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameScore.
     * @param {GameScoreUpdateArgs} args - Arguments to update one GameScore.
     * @example
     * // Update one GameScore
     * const gameScore = await prisma.gameScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameScoreUpdateArgs>(args: SelectSubset<T, GameScoreUpdateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameScores.
     * @param {GameScoreDeleteManyArgs} args - Arguments to filter GameScores to delete.
     * @example
     * // Delete a few GameScores
     * const { count } = await prisma.gameScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameScoreDeleteManyArgs>(args?: SelectSubset<T, GameScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameScoreUpdateManyArgs>(args: SelectSubset<T, GameScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores and returns the data updated in the database.
     * @param {GameScoreUpdateManyAndReturnArgs} args - Arguments to update many GameScores.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, GameScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameScore.
     * @param {GameScoreUpsertArgs} args - Arguments to update or create a GameScore.
     * @example
     * // Update or create a GameScore
     * const gameScore = await prisma.gameScore.upsert({
     *   create: {
     *     // ... data to create a GameScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameScore we want to update
     *   }
     * })
     */
    upsert<T extends GameScoreUpsertArgs>(args: SelectSubset<T, GameScoreUpsertArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreCountArgs} args - Arguments to filter GameScores to count.
     * @example
     * // Count the number of GameScores
     * const count = await prisma.gameScore.count({
     *   where: {
     *     // ... the filter for the GameScores we want to count
     *   }
     * })
    **/
    count<T extends GameScoreCountArgs>(
      args?: Subset<T, GameScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameScoreAggregateArgs>(args: Subset<T, GameScoreAggregateArgs>): Prisma.PrismaPromise<GetGameScoreAggregateType<T>>

    /**
     * Group by GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameScoreGroupByArgs['orderBy'] }
        : { orderBy?: GameScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameScore model
   */
  readonly fields: GameScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameScore model
   */
  interface GameScoreFieldRefs {
    readonly id: FieldRef<"GameScore", 'String'>
    readonly profileId: FieldRef<"GameScore", 'String'>
    readonly game: FieldRef<"GameScore", 'String'>
    readonly score: FieldRef<"GameScore", 'Int'>
    readonly metadata: FieldRef<"GameScore", 'Json'>
    readonly playedAt: FieldRef<"GameScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameScore findUnique
   */
  export type GameScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findUniqueOrThrow
   */
  export type GameScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findFirst
   */
  export type GameScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findFirstOrThrow
   */
  export type GameScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findMany
   */
  export type GameScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore create
   */
  export type GameScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a GameScore.
     */
    data: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
  }

  /**
   * GameScore createMany
   */
  export type GameScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScore createManyAndReturn
   */
  export type GameScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameScore update
   */
  export type GameScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a GameScore.
     */
    data: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
    /**
     * Choose, which GameScore to update.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore updateMany
   */
  export type GameScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScore updateManyAndReturn
   */
  export type GameScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameScore upsert
   */
  export type GameScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the GameScore to update in case it exists.
     */
    where: GameScoreWhereUniqueInput
    /**
     * In case the GameScore found by the `where` argument doesn't exist, create a new GameScore with this data.
     */
    create: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
    /**
     * In case the GameScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
  }

  /**
   * GameScore delete
   */
  export type GameScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
    /**
     * Filter which GameScore to delete.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore deleteMany
   */
  export type GameScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScores to delete
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to delete.
     */
    limit?: number
  }

  /**
   * GameScore without action
   */
  export type GameScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameScoreInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    itemType: string | null
    itemId: string | null
    equipped: boolean | null
    purchasedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    itemType: string | null
    itemId: string | null
    equipped: boolean | null
    purchasedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    profileId: number
    itemType: number
    itemId: number
    equipped: number
    purchasedAt: number
    _all: number
  }


  export type InventoryItemMinAggregateInputType = {
    id?: true
    profileId?: true
    itemType?: true
    itemId?: true
    equipped?: true
    purchasedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    profileId?: true
    itemType?: true
    itemId?: true
    equipped?: true
    purchasedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    profileId?: true
    itemType?: true
    itemId?: true
    equipped?: true
    purchasedAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    profileId: string
    itemType: string
    itemId: string
    equipped: boolean
    purchasedAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    itemType?: boolean
    itemId?: boolean
    equipped?: boolean
    purchasedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    itemType?: boolean
    itemId?: boolean
    equipped?: boolean
    purchasedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    itemType?: boolean
    itemId?: boolean
    equipped?: boolean
    purchasedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    profileId?: boolean
    itemType?: boolean
    itemId?: boolean
    equipped?: boolean
    purchasedAt?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "itemType" | "itemId" | "equipped" | "purchasedAt", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      itemType: string
      itemId: string
      equipped: boolean
      purchasedAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly profileId: FieldRef<"InventoryItem", 'String'>
    readonly itemType: FieldRef<"InventoryItem", 'String'>
    readonly itemId: FieldRef<"InventoryItem", 'String'>
    readonly equipped: FieldRef<"InventoryItem", 'Boolean'>
    readonly purchasedAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    status: number
    createdAt: number
    _all: number
  }


  export type FriendMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
  }

  export type FriendMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
  }

  export type FriendCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    status: string
    createdAt: Date
    _count: FriendCountAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>

  export type FriendSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "status" | "createdAt", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FriendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FriendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    friend?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      friend: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendWithIdOnly = await prisma.friend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friends and returns the data saved in the database.
     * @param {FriendCreateManyAndReturnArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends and returns the data updated in the database.
     * @param {FriendUpdateManyAndReturnArgs} args - Arguments to update many Friends.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friends and only return the `id`
     * const friendWithIdOnly = await prisma.friend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly id: FieldRef<"Friend", 'String'>
    readonly userId: FieldRef<"Friend", 'String'>
    readonly friendId: FieldRef<"Friend", 'String'>
    readonly status: FieldRef<"Friend", 'String'>
    readonly createdAt: FieldRef<"Friend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend createManyAndReturn
   */
  export type FriendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend updateManyAndReturn
   */
  export type FriendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    address: 'address',
    handle: 'handle',
    bio: 'bio',
    links: 'links',
    skills: 'skills',
    score: 'score',
    version: 'version',
    lastAnchorTx: 'lastAnchorTx',
    lastAnchorBlk: 'lastAnchorBlk',
    hashHex: 'hashHex',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    xp: 'xp',
    level: 'level',
    coins: 'coins',
    streak: 'streak',
    lastLoginDate: 'lastLoginDate',
    theme: 'theme',
    petType: 'petType',
    petLevel: 'petLevel'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    badgeType: 'badgeType',
    rarity: 'rarity',
    earnedAt: 'earnedAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    requirement: 'requirement',
    reward: 'reward',
    icon: 'icon',
    active: 'active',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const UserQuestScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    questId: 'questId',
    progress: 'progress',
    completed: 'completed',
    claimed: 'claimed',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type UserQuestScalarFieldEnum = (typeof UserQuestScalarFieldEnum)[keyof typeof UserQuestScalarFieldEnum]


  export const GameScoreScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    game: 'game',
    score: 'score',
    metadata: 'metadata',
    playedAt: 'playedAt'
  };

  export type GameScoreScalarFieldEnum = (typeof GameScoreScalarFieldEnum)[keyof typeof GameScoreScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    itemType: 'itemType',
    itemId: 'itemId',
    equipped: 'equipped',
    purchasedAt: 'purchasedAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    address?: StringFilter<"Profile"> | string
    handle?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    links?: JsonNullableFilter<"Profile">
    skills?: StringNullableListFilter<"Profile">
    score?: IntFilter<"Profile"> | number
    version?: IntFilter<"Profile"> | number
    lastAnchorTx?: StringNullableFilter<"Profile"> | string | null
    lastAnchorBlk?: IntNullableFilter<"Profile"> | number | null
    hashHex?: StringNullableFilter<"Profile"> | string | null
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    xp?: IntFilter<"Profile"> | number
    level?: IntFilter<"Profile"> | number
    coins?: IntFilter<"Profile"> | number
    streak?: IntFilter<"Profile"> | number
    lastLoginDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    theme?: StringNullableFilter<"Profile"> | string | null
    petType?: StringNullableFilter<"Profile"> | string | null
    petLevel?: IntFilter<"Profile"> | number
    achievements?: AchievementListRelationFilter
    questProgress?: UserQuestListRelationFilter
    gameScores?: GameScoreListRelationFilter
    inventory?: InventoryItemListRelationFilter
    friendsFrom?: FriendListRelationFilter
    friendsTo?: FriendListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    handle?: SortOrder
    bio?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    skills?: SortOrder
    score?: SortOrder
    version?: SortOrder
    lastAnchorTx?: SortOrderInput | SortOrder
    lastAnchorBlk?: SortOrderInput | SortOrder
    hashHex?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    lastLoginDate?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    petType?: SortOrderInput | SortOrder
    petLevel?: SortOrder
    achievements?: AchievementOrderByRelationAggregateInput
    questProgress?: UserQuestOrderByRelationAggregateInput
    gameScores?: GameScoreOrderByRelationAggregateInput
    inventory?: InventoryItemOrderByRelationAggregateInput
    friendsFrom?: FriendOrderByRelationAggregateInput
    friendsTo?: FriendOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    handle?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    links?: JsonNullableFilter<"Profile">
    skills?: StringNullableListFilter<"Profile">
    score?: IntFilter<"Profile"> | number
    version?: IntFilter<"Profile"> | number
    lastAnchorTx?: StringNullableFilter<"Profile"> | string | null
    lastAnchorBlk?: IntNullableFilter<"Profile"> | number | null
    hashHex?: StringNullableFilter<"Profile"> | string | null
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    xp?: IntFilter<"Profile"> | number
    level?: IntFilter<"Profile"> | number
    coins?: IntFilter<"Profile"> | number
    streak?: IntFilter<"Profile"> | number
    lastLoginDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    theme?: StringNullableFilter<"Profile"> | string | null
    petType?: StringNullableFilter<"Profile"> | string | null
    petLevel?: IntFilter<"Profile"> | number
    achievements?: AchievementListRelationFilter
    questProgress?: UserQuestListRelationFilter
    gameScores?: GameScoreListRelationFilter
    inventory?: InventoryItemListRelationFilter
    friendsFrom?: FriendListRelationFilter
    friendsTo?: FriendListRelationFilter
  }, "id" | "address">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    handle?: SortOrder
    bio?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    skills?: SortOrder
    score?: SortOrder
    version?: SortOrder
    lastAnchorTx?: SortOrderInput | SortOrder
    lastAnchorBlk?: SortOrderInput | SortOrder
    hashHex?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    lastLoginDate?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    petType?: SortOrderInput | SortOrder
    petLevel?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    address?: StringWithAggregatesFilter<"Profile"> | string
    handle?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    links?: JsonNullableWithAggregatesFilter<"Profile">
    skills?: StringNullableListFilter<"Profile">
    score?: IntWithAggregatesFilter<"Profile"> | number
    version?: IntWithAggregatesFilter<"Profile"> | number
    lastAnchorTx?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    lastAnchorBlk?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    hashHex?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    xp?: IntWithAggregatesFilter<"Profile"> | number
    level?: IntWithAggregatesFilter<"Profile"> | number
    coins?: IntWithAggregatesFilter<"Profile"> | number
    streak?: IntWithAggregatesFilter<"Profile"> | number
    lastLoginDate?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    theme?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    petType?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    petLevel?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    profileId?: StringFilter<"Achievement"> | string
    badgeType?: StringFilter<"Achievement"> | string
    rarity?: StringFilter<"Achievement"> | string
    earnedAt?: DateTimeFilter<"Achievement"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeType?: SortOrder
    rarity?: SortOrder
    earnedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    profileId?: StringFilter<"Achievement"> | string
    badgeType?: StringFilter<"Achievement"> | string
    rarity?: StringFilter<"Achievement"> | string
    earnedAt?: DateTimeFilter<"Achievement"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeType?: SortOrder
    rarity?: SortOrder
    earnedAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    profileId?: StringWithAggregatesFilter<"Achievement"> | string
    badgeType?: StringWithAggregatesFilter<"Achievement"> | string
    rarity?: StringWithAggregatesFilter<"Achievement"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: StringFilter<"Quest"> | string
    type?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    requirement?: JsonFilter<"Quest">
    reward?: JsonFilter<"Quest">
    icon?: StringFilter<"Quest"> | string
    active?: BoolFilter<"Quest"> | boolean
    expiresAt?: DateTimeNullableFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    userProgress?: UserQuestListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirement?: SortOrder
    reward?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userProgress?: UserQuestOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    type?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    requirement?: JsonFilter<"Quest">
    reward?: JsonFilter<"Quest">
    icon?: StringFilter<"Quest"> | string
    active?: BoolFilter<"Quest"> | boolean
    expiresAt?: DateTimeNullableFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeFilter<"Quest"> | Date | string
    userProgress?: UserQuestListRelationFilter
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirement?: SortOrder
    reward?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quest"> | string
    type?: StringWithAggregatesFilter<"Quest"> | string
    title?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringWithAggregatesFilter<"Quest"> | string
    requirement?: JsonWithAggregatesFilter<"Quest">
    reward?: JsonWithAggregatesFilter<"Quest">
    icon?: StringWithAggregatesFilter<"Quest"> | string
    active?: BoolWithAggregatesFilter<"Quest"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Quest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quest"> | Date | string
  }

  export type UserQuestWhereInput = {
    AND?: UserQuestWhereInput | UserQuestWhereInput[]
    OR?: UserQuestWhereInput[]
    NOT?: UserQuestWhereInput | UserQuestWhereInput[]
    id?: StringFilter<"UserQuest"> | string
    profileId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    progress?: IntFilter<"UserQuest"> | number
    completed?: BoolFilter<"UserQuest"> | boolean
    claimed?: BoolFilter<"UserQuest"> | boolean
    completedAt?: DateTimeNullableFilter<"UserQuest"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuest"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }

  export type UserQuestOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    questId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
  }

  export type UserQuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_questId?: UserQuestProfileIdQuestIdCompoundUniqueInput
    AND?: UserQuestWhereInput | UserQuestWhereInput[]
    OR?: UserQuestWhereInput[]
    NOT?: UserQuestWhereInput | UserQuestWhereInput[]
    profileId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    progress?: IntFilter<"UserQuest"> | number
    completed?: BoolFilter<"UserQuest"> | boolean
    claimed?: BoolFilter<"UserQuest"> | boolean
    completedAt?: DateTimeNullableFilter<"UserQuest"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuest"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    quest?: XOR<QuestScalarRelationFilter, QuestWhereInput>
  }, "id" | "profileId_questId">

  export type UserQuestOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    questId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserQuestCountOrderByAggregateInput
    _avg?: UserQuestAvgOrderByAggregateInput
    _max?: UserQuestMaxOrderByAggregateInput
    _min?: UserQuestMinOrderByAggregateInput
    _sum?: UserQuestSumOrderByAggregateInput
  }

  export type UserQuestScalarWhereWithAggregatesInput = {
    AND?: UserQuestScalarWhereWithAggregatesInput | UserQuestScalarWhereWithAggregatesInput[]
    OR?: UserQuestScalarWhereWithAggregatesInput[]
    NOT?: UserQuestScalarWhereWithAggregatesInput | UserQuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuest"> | string
    profileId?: StringWithAggregatesFilter<"UserQuest"> | string
    questId?: StringWithAggregatesFilter<"UserQuest"> | string
    progress?: IntWithAggregatesFilter<"UserQuest"> | number
    completed?: BoolWithAggregatesFilter<"UserQuest"> | boolean
    claimed?: BoolWithAggregatesFilter<"UserQuest"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserQuest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserQuest"> | Date | string
  }

  export type GameScoreWhereInput = {
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    id?: StringFilter<"GameScore"> | string
    profileId?: StringFilter<"GameScore"> | string
    game?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    metadata?: JsonNullableFilter<"GameScore">
    playedAt?: DateTimeFilter<"GameScore"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type GameScoreOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    game?: SortOrder
    score?: SortOrder
    metadata?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type GameScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    profileId?: StringFilter<"GameScore"> | string
    game?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    metadata?: JsonNullableFilter<"GameScore">
    playedAt?: DateTimeFilter<"GameScore"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type GameScoreOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    game?: SortOrder
    score?: SortOrder
    metadata?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    _count?: GameScoreCountOrderByAggregateInput
    _avg?: GameScoreAvgOrderByAggregateInput
    _max?: GameScoreMaxOrderByAggregateInput
    _min?: GameScoreMinOrderByAggregateInput
    _sum?: GameScoreSumOrderByAggregateInput
  }

  export type GameScoreScalarWhereWithAggregatesInput = {
    AND?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    OR?: GameScoreScalarWhereWithAggregatesInput[]
    NOT?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameScore"> | string
    profileId?: StringWithAggregatesFilter<"GameScore"> | string
    game?: StringWithAggregatesFilter<"GameScore"> | string
    score?: IntWithAggregatesFilter<"GameScore"> | number
    metadata?: JsonNullableWithAggregatesFilter<"GameScore">
    playedAt?: DateTimeWithAggregatesFilter<"GameScore"> | Date | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    profileId?: StringFilter<"InventoryItem"> | string
    itemType?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    equipped?: BoolFilter<"InventoryItem"> | boolean
    purchasedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    purchasedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    profileId?: StringFilter<"InventoryItem"> | string
    itemType?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    equipped?: BoolFilter<"InventoryItem"> | boolean
    purchasedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    purchasedAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    profileId?: StringWithAggregatesFilter<"InventoryItem"> | string
    itemType?: StringWithAggregatesFilter<"InventoryItem"> | string
    itemId?: StringWithAggregatesFilter<"InventoryItem"> | string
    equipped?: BoolWithAggregatesFilter<"InventoryItem"> | boolean
    purchasedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    id?: StringFilter<"Friend"> | string
    userId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
    status?: StringFilter<"Friend"> | string
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    friend?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    friend?: ProfileOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: FriendUserIdFriendIdCompoundUniqueInput
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
    status?: StringFilter<"Friend"> | string
    createdAt?: DateTimeFilter<"Friend"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    friend?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "userId_friendId">

  export type FriendOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Friend"> | string
    userId?: StringWithAggregatesFilter<"Friend"> | string
    friendId?: StringWithAggregatesFilter<"Friend"> | string
    status?: StringWithAggregatesFilter<"Friend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Friend"> | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementCreateInput = {
    id?: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    profileId: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateManyInput = {
    id?: string
    profileId: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    requirement: JsonNullValueInput | InputJsonValue
    reward: JsonNullValueInput | InputJsonValue
    icon: string
    active?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    userProgress?: UserQuestCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    requirement: JsonNullValueInput | InputJsonValue
    reward: JsonNullValueInput | InputJsonValue
    icon: string
    active?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
    userProgress?: UserQuestUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserQuestUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserQuestUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: string
    type: string
    title: string
    description: string
    requirement: JsonNullValueInput | InputJsonValue
    reward: JsonNullValueInput | InputJsonValue
    icon: string
    active?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCreateInput = {
    id?: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutQuestProgressInput
    quest: QuestCreateNestedOneWithoutUserProgressInput
  }

  export type UserQuestUncheckedCreateInput = {
    id?: string
    profileId: string
    questId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserQuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutQuestProgressNestedInput
    quest?: QuestUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserQuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCreateManyInput = {
    id?: string
    profileId: string
    questId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserQuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreCreateInput = {
    id?: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutGameScoresInput
  }

  export type GameScoreUncheckedCreateInput = {
    id?: string
    profileId: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
  }

  export type GameScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutGameScoresNestedInput
  }

  export type GameScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreCreateManyInput = {
    id?: string
    profileId: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
  }

  export type GameScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateInput = {
    id?: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutInventoryInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    profileId: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    profileId: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutFriendsFromInput
    friend: ProfileCreateNestedOneWithoutFriendsToInput
  }

  export type FriendUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutFriendsFromNestedInput
    friend?: ProfileUpdateOneRequiredWithoutFriendsToNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type UserQuestListRelationFilter = {
    every?: UserQuestWhereInput
    some?: UserQuestWhereInput
    none?: UserQuestWhereInput
  }

  export type GameScoreListRelationFilter = {
    every?: GameScoreWhereInput
    some?: GameScoreWhereInput
    none?: GameScoreWhereInput
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    links?: SortOrder
    skills?: SortOrder
    score?: SortOrder
    version?: SortOrder
    lastAnchorTx?: SortOrder
    lastAnchorBlk?: SortOrder
    hashHex?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    lastLoginDate?: SortOrder
    theme?: SortOrder
    petType?: SortOrder
    petLevel?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    score?: SortOrder
    version?: SortOrder
    lastAnchorBlk?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    petLevel?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    score?: SortOrder
    version?: SortOrder
    lastAnchorTx?: SortOrder
    lastAnchorBlk?: SortOrder
    hashHex?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    lastLoginDate?: SortOrder
    theme?: SortOrder
    petType?: SortOrder
    petLevel?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    handle?: SortOrder
    bio?: SortOrder
    score?: SortOrder
    version?: SortOrder
    lastAnchorTx?: SortOrder
    lastAnchorBlk?: SortOrder
    hashHex?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    lastLoginDate?: SortOrder
    theme?: SortOrder
    petType?: SortOrder
    petLevel?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    score?: SortOrder
    version?: SortOrder
    lastAnchorBlk?: SortOrder
    xp?: SortOrder
    level?: SortOrder
    coins?: SortOrder
    streak?: SortOrder
    petLevel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeType?: SortOrder
    rarity?: SortOrder
    earnedAt?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeType?: SortOrder
    rarity?: SortOrder
    earnedAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    badgeType?: SortOrder
    rarity?: SortOrder
    earnedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    requirement?: SortOrder
    reward?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    active?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestScalarRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type UserQuestProfileIdQuestIdCompoundUniqueInput = {
    profileId: string
    questId: string
  }

  export type UserQuestCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    questId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserQuestMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    questId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    questId?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    claimed?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserQuestSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type GameScoreCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    game?: SortOrder
    score?: SortOrder
    metadata?: SortOrder
    playedAt?: SortOrder
  }

  export type GameScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GameScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    game?: SortOrder
    score?: SortOrder
    playedAt?: SortOrder
  }

  export type GameScoreMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    game?: SortOrder
    score?: SortOrder
    playedAt?: SortOrder
  }

  export type GameScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    purchasedAt?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    purchasedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    purchasedAt?: SortOrder
  }

  export type FriendUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type FriendCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileCreateskillsInput = {
    set: string[]
  }

  export type AchievementCreateNestedManyWithoutProfileInput = {
    create?: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput> | AchievementCreateWithoutProfileInput[] | AchievementUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutProfileInput | AchievementCreateOrConnectWithoutProfileInput[]
    createMany?: AchievementCreateManyProfileInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type UserQuestCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput> | UserQuestCreateWithoutProfileInput[] | UserQuestUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutProfileInput | UserQuestCreateOrConnectWithoutProfileInput[]
    createMany?: UserQuestCreateManyProfileInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type GameScoreCreateNestedManyWithoutProfileInput = {
    create?: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput> | GameScoreCreateWithoutProfileInput[] | GameScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: GameScoreCreateOrConnectWithoutProfileInput | GameScoreCreateOrConnectWithoutProfileInput[]
    createMany?: GameScoreCreateManyProfileInputEnvelope
    connect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
  }

  export type InventoryItemCreateNestedManyWithoutProfileInput = {
    create?: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput> | InventoryItemCreateWithoutProfileInput[] | InventoryItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProfileInput | InventoryItemCreateOrConnectWithoutProfileInput[]
    createMany?: InventoryItemCreateManyProfileInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput> | AchievementCreateWithoutProfileInput[] | AchievementUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutProfileInput | AchievementCreateOrConnectWithoutProfileInput[]
    createMany?: AchievementCreateManyProfileInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type UserQuestUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput> | UserQuestCreateWithoutProfileInput[] | UserQuestUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutProfileInput | UserQuestCreateOrConnectWithoutProfileInput[]
    createMany?: UserQuestCreateManyProfileInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type GameScoreUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput> | GameScoreCreateWithoutProfileInput[] | GameScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: GameScoreCreateOrConnectWithoutProfileInput | GameScoreCreateOrConnectWithoutProfileInput[]
    createMany?: GameScoreCreateManyProfileInputEnvelope
    connect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput> | InventoryItemCreateWithoutProfileInput[] | InventoryItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProfileInput | InventoryItemCreateOrConnectWithoutProfileInput[]
    createMany?: InventoryItemCreateManyProfileInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AchievementUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput> | AchievementCreateWithoutProfileInput[] | AchievementUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutProfileInput | AchievementCreateOrConnectWithoutProfileInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutProfileInput | AchievementUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AchievementCreateManyProfileInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutProfileInput | AchievementUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutProfileInput | AchievementUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type UserQuestUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput> | UserQuestCreateWithoutProfileInput[] | UserQuestUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutProfileInput | UserQuestCreateOrConnectWithoutProfileInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutProfileInput | UserQuestUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserQuestCreateManyProfileInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutProfileInput | UserQuestUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutProfileInput | UserQuestUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type GameScoreUpdateManyWithoutProfileNestedInput = {
    create?: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput> | GameScoreCreateWithoutProfileInput[] | GameScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: GameScoreCreateOrConnectWithoutProfileInput | GameScoreCreateOrConnectWithoutProfileInput[]
    upsert?: GameScoreUpsertWithWhereUniqueWithoutProfileInput | GameScoreUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: GameScoreCreateManyProfileInputEnvelope
    set?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    disconnect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    delete?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    connect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    update?: GameScoreUpdateWithWhereUniqueWithoutProfileInput | GameScoreUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: GameScoreUpdateManyWithWhereWithoutProfileInput | GameScoreUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: GameScoreScalarWhereInput | GameScoreScalarWhereInput[]
  }

  export type InventoryItemUpdateManyWithoutProfileNestedInput = {
    create?: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput> | InventoryItemCreateWithoutProfileInput[] | InventoryItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProfileInput | InventoryItemCreateOrConnectWithoutProfileInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutProfileInput | InventoryItemUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: InventoryItemCreateManyProfileInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutProfileInput | InventoryItemUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutProfileInput | InventoryItemUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput> | AchievementCreateWithoutProfileInput[] | AchievementUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutProfileInput | AchievementCreateOrConnectWithoutProfileInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutProfileInput | AchievementUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AchievementCreateManyProfileInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutProfileInput | AchievementUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutProfileInput | AchievementUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type UserQuestUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput> | UserQuestCreateWithoutProfileInput[] | UserQuestUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutProfileInput | UserQuestCreateOrConnectWithoutProfileInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutProfileInput | UserQuestUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserQuestCreateManyProfileInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutProfileInput | UserQuestUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutProfileInput | UserQuestUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type GameScoreUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput> | GameScoreCreateWithoutProfileInput[] | GameScoreUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: GameScoreCreateOrConnectWithoutProfileInput | GameScoreCreateOrConnectWithoutProfileInput[]
    upsert?: GameScoreUpsertWithWhereUniqueWithoutProfileInput | GameScoreUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: GameScoreCreateManyProfileInputEnvelope
    set?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    disconnect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    delete?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    connect?: GameScoreWhereUniqueInput | GameScoreWhereUniqueInput[]
    update?: GameScoreUpdateWithWhereUniqueWithoutProfileInput | GameScoreUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: GameScoreUpdateManyWithWhereWithoutProfileInput | GameScoreUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: GameScoreScalarWhereInput | GameScoreScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput> | InventoryItemCreateWithoutProfileInput[] | InventoryItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutProfileInput | InventoryItemCreateOrConnectWithoutProfileInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutProfileInput | InventoryItemUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: InventoryItemCreateManyProfileInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutProfileInput | InventoryItemUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutProfileInput | InventoryItemUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<ProfileCreateWithoutAchievementsInput, ProfileUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAchievementsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<ProfileCreateWithoutAchievementsInput, ProfileUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAchievementsInput
    upsert?: ProfileUpsertWithoutAchievementsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAchievementsInput, ProfileUpdateWithoutAchievementsInput>, ProfileUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserQuestCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type UserQuestUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserQuestUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutQuestInput | UserQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutQuestInput | UserQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutQuestInput | UserQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type UserQuestUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutQuestInput | UserQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutQuestInput | UserQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutQuestInput | UserQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutQuestProgressInput = {
    create?: XOR<ProfileCreateWithoutQuestProgressInput, ProfileUncheckedCreateWithoutQuestProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutQuestProgressInput
    connect?: ProfileWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<QuestCreateWithoutUserProgressInput, QuestUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: QuestCreateOrConnectWithoutUserProgressInput
    connect?: QuestWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutQuestProgressNestedInput = {
    create?: XOR<ProfileCreateWithoutQuestProgressInput, ProfileUncheckedCreateWithoutQuestProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutQuestProgressInput
    upsert?: ProfileUpsertWithoutQuestProgressInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutQuestProgressInput, ProfileUpdateWithoutQuestProgressInput>, ProfileUncheckedUpdateWithoutQuestProgressInput>
  }

  export type QuestUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<QuestCreateWithoutUserProgressInput, QuestUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: QuestCreateOrConnectWithoutUserProgressInput
    upsert?: QuestUpsertWithoutUserProgressInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutUserProgressInput, QuestUpdateWithoutUserProgressInput>, QuestUncheckedUpdateWithoutUserProgressInput>
  }

  export type ProfileCreateNestedOneWithoutGameScoresInput = {
    create?: XOR<ProfileCreateWithoutGameScoresInput, ProfileUncheckedCreateWithoutGameScoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutGameScoresInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutGameScoresNestedInput = {
    create?: XOR<ProfileCreateWithoutGameScoresInput, ProfileUncheckedCreateWithoutGameScoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutGameScoresInput
    upsert?: ProfileUpsertWithoutGameScoresInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutGameScoresInput, ProfileUpdateWithoutGameScoresInput>, ProfileUncheckedUpdateWithoutGameScoresInput>
  }

  export type ProfileCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProfileCreateWithoutInventoryInput, ProfileUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutInventoryInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProfileCreateWithoutInventoryInput, ProfileUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutInventoryInput
    upsert?: ProfileUpsertWithoutInventoryInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutInventoryInput, ProfileUpdateWithoutInventoryInput>, ProfileUncheckedUpdateWithoutInventoryInput>
  }

  export type ProfileCreateNestedOneWithoutFriendsFromInput = {
    create?: XOR<ProfileCreateWithoutFriendsFromInput, ProfileUncheckedCreateWithoutFriendsFromInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendsFromInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFriendsToInput = {
    create?: XOR<ProfileCreateWithoutFriendsToInput, ProfileUncheckedCreateWithoutFriendsToInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendsToInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutFriendsFromNestedInput = {
    create?: XOR<ProfileCreateWithoutFriendsFromInput, ProfileUncheckedCreateWithoutFriendsFromInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendsFromInput
    upsert?: ProfileUpsertWithoutFriendsFromInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFriendsFromInput, ProfileUpdateWithoutFriendsFromInput>, ProfileUncheckedUpdateWithoutFriendsFromInput>
  }

  export type ProfileUpdateOneRequiredWithoutFriendsToNestedInput = {
    create?: XOR<ProfileCreateWithoutFriendsToInput, ProfileUncheckedCreateWithoutFriendsToInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFriendsToInput
    upsert?: ProfileUpsertWithoutFriendsToInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFriendsToInput, ProfileUpdateWithoutFriendsToInput>, ProfileUncheckedUpdateWithoutFriendsToInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AchievementCreateWithoutProfileInput = {
    id?: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutProfileInput = {
    id?: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutProfileInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput>
  }

  export type AchievementCreateManyProfileInputEnvelope = {
    data: AchievementCreateManyProfileInput | AchievementCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestCreateWithoutProfileInput = {
    id?: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    quest: QuestCreateNestedOneWithoutUserProgressInput
  }

  export type UserQuestUncheckedCreateWithoutProfileInput = {
    id?: string
    questId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserQuestCreateOrConnectWithoutProfileInput = {
    where: UserQuestWhereUniqueInput
    create: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput>
  }

  export type UserQuestCreateManyProfileInputEnvelope = {
    data: UserQuestCreateManyProfileInput | UserQuestCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type GameScoreCreateWithoutProfileInput = {
    id?: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
  }

  export type GameScoreUncheckedCreateWithoutProfileInput = {
    id?: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
  }

  export type GameScoreCreateOrConnectWithoutProfileInput = {
    where: GameScoreWhereUniqueInput
    create: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput>
  }

  export type GameScoreCreateManyProfileInputEnvelope = {
    data: GameScoreCreateManyProfileInput | GameScoreCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemCreateWithoutProfileInput = {
    id?: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
  }

  export type InventoryItemUncheckedCreateWithoutProfileInput = {
    id?: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutProfileInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput>
  }

  export type InventoryItemCreateManyProfileInputEnvelope = {
    data: InventoryItemCreateManyProfileInput | InventoryItemCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutUserInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    friend: ProfileCreateNestedOneWithoutFriendsToInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutFriendsFromInput
  }

  export type FriendUncheckedCreateWithoutFriendInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendCreateOrConnectWithoutFriendInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendCreateManyFriendInputEnvelope = {
    data: FriendCreateManyFriendInput | FriendCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type AchievementUpsertWithWhereUniqueWithoutProfileInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutProfileInput, AchievementUncheckedUpdateWithoutProfileInput>
    create: XOR<AchievementCreateWithoutProfileInput, AchievementUncheckedCreateWithoutProfileInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutProfileInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutProfileInput, AchievementUncheckedUpdateWithoutProfileInput>
  }

  export type AchievementUpdateManyWithWhereWithoutProfileInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutProfileInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: StringFilter<"Achievement"> | string
    profileId?: StringFilter<"Achievement"> | string
    badgeType?: StringFilter<"Achievement"> | string
    rarity?: StringFilter<"Achievement"> | string
    earnedAt?: DateTimeFilter<"Achievement"> | Date | string
  }

  export type UserQuestUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserQuestWhereUniqueInput
    update: XOR<UserQuestUpdateWithoutProfileInput, UserQuestUncheckedUpdateWithoutProfileInput>
    create: XOR<UserQuestCreateWithoutProfileInput, UserQuestUncheckedCreateWithoutProfileInput>
  }

  export type UserQuestUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserQuestWhereUniqueInput
    data: XOR<UserQuestUpdateWithoutProfileInput, UserQuestUncheckedUpdateWithoutProfileInput>
  }

  export type UserQuestUpdateManyWithWhereWithoutProfileInput = {
    where: UserQuestScalarWhereInput
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserQuestScalarWhereInput = {
    AND?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
    OR?: UserQuestScalarWhereInput[]
    NOT?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
    id?: StringFilter<"UserQuest"> | string
    profileId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    progress?: IntFilter<"UserQuest"> | number
    completed?: BoolFilter<"UserQuest"> | boolean
    claimed?: BoolFilter<"UserQuest"> | boolean
    completedAt?: DateTimeNullableFilter<"UserQuest"> | Date | string | null
    createdAt?: DateTimeFilter<"UserQuest"> | Date | string
  }

  export type GameScoreUpsertWithWhereUniqueWithoutProfileInput = {
    where: GameScoreWhereUniqueInput
    update: XOR<GameScoreUpdateWithoutProfileInput, GameScoreUncheckedUpdateWithoutProfileInput>
    create: XOR<GameScoreCreateWithoutProfileInput, GameScoreUncheckedCreateWithoutProfileInput>
  }

  export type GameScoreUpdateWithWhereUniqueWithoutProfileInput = {
    where: GameScoreWhereUniqueInput
    data: XOR<GameScoreUpdateWithoutProfileInput, GameScoreUncheckedUpdateWithoutProfileInput>
  }

  export type GameScoreUpdateManyWithWhereWithoutProfileInput = {
    where: GameScoreScalarWhereInput
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyWithoutProfileInput>
  }

  export type GameScoreScalarWhereInput = {
    AND?: GameScoreScalarWhereInput | GameScoreScalarWhereInput[]
    OR?: GameScoreScalarWhereInput[]
    NOT?: GameScoreScalarWhereInput | GameScoreScalarWhereInput[]
    id?: StringFilter<"GameScore"> | string
    profileId?: StringFilter<"GameScore"> | string
    game?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    metadata?: JsonNullableFilter<"GameScore">
    playedAt?: DateTimeFilter<"GameScore"> | Date | string
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutProfileInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutProfileInput, InventoryItemUncheckedUpdateWithoutProfileInput>
    create: XOR<InventoryItemCreateWithoutProfileInput, InventoryItemUncheckedCreateWithoutProfileInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutProfileInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutProfileInput, InventoryItemUncheckedUpdateWithoutProfileInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutProfileInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutProfileInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    profileId?: StringFilter<"InventoryItem"> | string
    itemType?: StringFilter<"InventoryItem"> | string
    itemId?: StringFilter<"InventoryItem"> | string
    equipped?: BoolFilter<"InventoryItem"> | boolean
    purchasedAt?: DateTimeFilter<"InventoryItem"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    id?: StringFilter<"Friend"> | string
    userId?: StringFilter<"Friend"> | string
    friendId?: StringFilter<"Friend"> | string
    status?: StringFilter<"Friend"> | string
    createdAt?: DateTimeFilter<"Friend"> | Date | string
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendInput>
  }

  export type ProfileCreateWithoutAchievementsInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateWithoutAchievementsInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileCreateOrConnectWithoutAchievementsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAchievementsInput, ProfileUncheckedCreateWithoutAchievementsInput>
  }

  export type ProfileUpsertWithoutAchievementsInput = {
    update: XOR<ProfileUpdateWithoutAchievementsInput, ProfileUncheckedUpdateWithoutAchievementsInput>
    create: XOR<ProfileCreateWithoutAchievementsInput, ProfileUncheckedCreateWithoutAchievementsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAchievementsInput, ProfileUncheckedUpdateWithoutAchievementsInput>
  }

  export type ProfileUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserQuestCreateWithoutQuestInput = {
    id?: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutQuestProgressInput
  }

  export type UserQuestUncheckedCreateWithoutQuestInput = {
    id?: string
    profileId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserQuestCreateOrConnectWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    create: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestCreateManyQuestInputEnvelope = {
    data: UserQuestCreateManyQuestInput | UserQuestCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestUpsertWithWhereUniqueWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    update: XOR<UserQuestUpdateWithoutQuestInput, UserQuestUncheckedUpdateWithoutQuestInput>
    create: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestUpdateWithWhereUniqueWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    data: XOR<UserQuestUpdateWithoutQuestInput, UserQuestUncheckedUpdateWithoutQuestInput>
  }

  export type UserQuestUpdateManyWithWhereWithoutQuestInput = {
    where: UserQuestScalarWhereInput
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyWithoutQuestInput>
  }

  export type ProfileCreateWithoutQuestProgressInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateWithoutQuestProgressInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileCreateOrConnectWithoutQuestProgressInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutQuestProgressInput, ProfileUncheckedCreateWithoutQuestProgressInput>
  }

  export type QuestCreateWithoutUserProgressInput = {
    id?: string
    type: string
    title: string
    description: string
    requirement: JsonNullValueInput | InputJsonValue
    reward: JsonNullValueInput | InputJsonValue
    icon: string
    active?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestUncheckedCreateWithoutUserProgressInput = {
    id?: string
    type: string
    title: string
    description: string
    requirement: JsonNullValueInput | InputJsonValue
    reward: JsonNullValueInput | InputJsonValue
    icon: string
    active?: boolean
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type QuestCreateOrConnectWithoutUserProgressInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutUserProgressInput, QuestUncheckedCreateWithoutUserProgressInput>
  }

  export type ProfileUpsertWithoutQuestProgressInput = {
    update: XOR<ProfileUpdateWithoutQuestProgressInput, ProfileUncheckedUpdateWithoutQuestProgressInput>
    create: XOR<ProfileCreateWithoutQuestProgressInput, ProfileUncheckedCreateWithoutQuestProgressInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutQuestProgressInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutQuestProgressInput, ProfileUncheckedUpdateWithoutQuestProgressInput>
  }

  export type ProfileUpdateWithoutQuestProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateWithoutQuestProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type QuestUpsertWithoutUserProgressInput = {
    update: XOR<QuestUpdateWithoutUserProgressInput, QuestUncheckedUpdateWithoutUserProgressInput>
    create: XOR<QuestCreateWithoutUserProgressInput, QuestUncheckedCreateWithoutUserProgressInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutUserProgressInput, QuestUncheckedUpdateWithoutUserProgressInput>
  }

  export type QuestUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement?: JsonNullValueInput | InputJsonValue
    reward?: JsonNullValueInput | InputJsonValue
    icon?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutGameScoresInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateWithoutGameScoresInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileCreateOrConnectWithoutGameScoresInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutGameScoresInput, ProfileUncheckedCreateWithoutGameScoresInput>
  }

  export type ProfileUpsertWithoutGameScoresInput = {
    update: XOR<ProfileUpdateWithoutGameScoresInput, ProfileUncheckedUpdateWithoutGameScoresInput>
    create: XOR<ProfileCreateWithoutGameScoresInput, ProfileUncheckedCreateWithoutGameScoresInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutGameScoresInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutGameScoresInput, ProfileUncheckedUpdateWithoutGameScoresInput>
  }

  export type ProfileUpdateWithoutGameScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateWithoutGameScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ProfileCreateWithoutInventoryInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateWithoutInventoryInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileCreateOrConnectWithoutInventoryInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutInventoryInput, ProfileUncheckedCreateWithoutInventoryInput>
  }

  export type ProfileUpsertWithoutInventoryInput = {
    update: XOR<ProfileUpdateWithoutInventoryInput, ProfileUncheckedUpdateWithoutInventoryInput>
    create: XOR<ProfileCreateWithoutInventoryInput, ProfileUncheckedCreateWithoutInventoryInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutInventoryInput, ProfileUncheckedUpdateWithoutInventoryInput>
  }

  export type ProfileUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ProfileCreateWithoutFriendsFromInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsTo?: FriendCreateNestedManyWithoutFriendInput
  }

  export type ProfileUncheckedCreateWithoutFriendsFromInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsTo?: FriendUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ProfileCreateOrConnectWithoutFriendsFromInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFriendsFromInput, ProfileUncheckedCreateWithoutFriendsFromInput>
  }

  export type ProfileCreateWithoutFriendsToInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutFriendsToInput = {
    id?: string
    address: string
    handle: string
    bio?: string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileCreateskillsInput | string[]
    score?: number
    version?: number
    lastAnchorTx?: string | null
    lastAnchorBlk?: number | null
    hashHex?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    xp?: number
    level?: number
    coins?: number
    streak?: number
    lastLoginDate?: Date | string | null
    theme?: string | null
    petType?: string | null
    petLevel?: number
    achievements?: AchievementUncheckedCreateNestedManyWithoutProfileInput
    questProgress?: UserQuestUncheckedCreateNestedManyWithoutProfileInput
    gameScores?: GameScoreUncheckedCreateNestedManyWithoutProfileInput
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutProfileInput
    friendsFrom?: FriendUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutFriendsToInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFriendsToInput, ProfileUncheckedCreateWithoutFriendsToInput>
  }

  export type ProfileUpsertWithoutFriendsFromInput = {
    update: XOR<ProfileUpdateWithoutFriendsFromInput, ProfileUncheckedUpdateWithoutFriendsFromInput>
    create: XOR<ProfileCreateWithoutFriendsFromInput, ProfileUncheckedCreateWithoutFriendsFromInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFriendsFromInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFriendsFromInput, ProfileUncheckedUpdateWithoutFriendsFromInput>
  }

  export type ProfileUpdateWithoutFriendsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsTo?: FriendUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFriendsFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsTo?: FriendUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ProfileUpsertWithoutFriendsToInput = {
    update: XOR<ProfileUpdateWithoutFriendsToInput, ProfileUncheckedUpdateWithoutFriendsToInput>
    create: XOR<ProfileCreateWithoutFriendsToInput, ProfileUncheckedCreateWithoutFriendsToInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFriendsToInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFriendsToInput, ProfileUncheckedUpdateWithoutFriendsToInput>
  }

  export type ProfileUpdateWithoutFriendsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFriendsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    links?: NullableJsonNullValueInput | InputJsonValue
    skills?: ProfileUpdateskillsInput | string[]
    score?: IntFieldUpdateOperationsInput | number
    version?: IntFieldUpdateOperationsInput | number
    lastAnchorTx?: NullableStringFieldUpdateOperationsInput | string | null
    lastAnchorBlk?: NullableIntFieldUpdateOperationsInput | number | null
    hashHex?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    xp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    coins?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    petType?: NullableStringFieldUpdateOperationsInput | string | null
    petLevel?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementUncheckedUpdateManyWithoutProfileNestedInput
    questProgress?: UserQuestUncheckedUpdateManyWithoutProfileNestedInput
    gameScores?: GameScoreUncheckedUpdateManyWithoutProfileNestedInput
    inventory?: InventoryItemUncheckedUpdateManyWithoutProfileNestedInput
    friendsFrom?: FriendUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AchievementCreateManyProfileInput = {
    id?: string
    badgeType: string
    rarity?: string
    earnedAt?: Date | string
  }

  export type UserQuestCreateManyProfileInput = {
    id?: string
    questId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type GameScoreCreateManyProfileInput = {
    id?: string
    game: string
    score: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: Date | string
  }

  export type InventoryItemCreateManyProfileInput = {
    id?: string
    itemType: string
    itemId: string
    equipped?: boolean
    purchasedAt?: Date | string
  }

  export type FriendCreateManyUserInput = {
    id?: string
    friendId: string
    status?: string
    createdAt?: Date | string
  }

  export type FriendCreateManyFriendInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
  }

  export type AchievementUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeType?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quest?: QuestUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserQuestUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    game?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: ProfileUpdateOneRequiredWithoutFriendsToNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutFriendsFromNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCreateManyQuestInput = {
    id?: string
    profileId: string
    progress?: number
    completed?: boolean
    claimed?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserQuestUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutQuestProgressNestedInput
  }

  export type UserQuestUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    claimed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}