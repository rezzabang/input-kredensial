
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
 * Model Dataribadi
 * 
 */
export type Dataribadi = $Result.DefaultSelection<Prisma.$DataribadiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dataribadis
 * const dataribadis = await prisma.dataribadi.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Dataribadis
   * const dataribadis = await prisma.dataribadi.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.dataribadi`: Exposes CRUD operations for the **Dataribadi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dataribadis
    * const dataribadis = await prisma.dataribadi.findMany()
    * ```
    */
  get dataribadi(): Prisma.DataribadiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Dataribadi: 'Dataribadi'
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
      modelProps: "dataribadi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dataribadi: {
        payload: Prisma.$DataribadiPayload<ExtArgs>
        fields: Prisma.DataribadiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataribadiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataribadiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          findFirst: {
            args: Prisma.DataribadiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataribadiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          findMany: {
            args: Prisma.DataribadiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>[]
          }
          create: {
            args: Prisma.DataribadiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          createMany: {
            args: Prisma.DataribadiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataribadiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          update: {
            args: Prisma.DataribadiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          deleteMany: {
            args: Prisma.DataribadiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataribadiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataribadiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataribadiPayload>
          }
          aggregate: {
            args: Prisma.DataribadiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataribadi>
          }
          groupBy: {
            args: Prisma.DataribadiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataribadiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataribadiCountArgs<ExtArgs>
            result: $Utils.Optional<DataribadiCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    dataribadi?: DataribadiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Dataribadi
   */

  export type AggregateDataribadi = {
    _count: DataribadiCountAggregateOutputType | null
    _min: DataribadiMinAggregateOutputType | null
    _max: DataribadiMaxAggregateOutputType | null
  }

  export type DataribadiMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    phone: string | null
    email: string | null
    alamat: string | null
  }

  export type DataribadiMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    phone: string | null
    email: string | null
    alamat: string | null
  }

  export type DataribadiCountAggregateOutputType = {
    nip: number
    nama: number
    tempatLahir: number
    tanggalLahir: number
    jenisKelamin: number
    phone: number
    email: number
    alamat: number
    _all: number
  }


  export type DataribadiMinAggregateInputType = {
    nip?: true
    nama?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    phone?: true
    email?: true
    alamat?: true
  }

  export type DataribadiMaxAggregateInputType = {
    nip?: true
    nama?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    phone?: true
    email?: true
    alamat?: true
  }

  export type DataribadiCountAggregateInputType = {
    nip?: true
    nama?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    phone?: true
    email?: true
    alamat?: true
    _all?: true
  }

  export type DataribadiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataribadi to aggregate.
     */
    where?: DataribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dataribadis to fetch.
     */
    orderBy?: DataribadiOrderByWithRelationInput | DataribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dataribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dataribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dataribadis
    **/
    _count?: true | DataribadiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataribadiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataribadiMaxAggregateInputType
  }

  export type GetDataribadiAggregateType<T extends DataribadiAggregateArgs> = {
        [P in keyof T & keyof AggregateDataribadi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataribadi[P]>
      : GetScalarType<T[P], AggregateDataribadi[P]>
  }




  export type DataribadiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataribadiWhereInput
    orderBy?: DataribadiOrderByWithAggregationInput | DataribadiOrderByWithAggregationInput[]
    by: DataribadiScalarFieldEnum[] | DataribadiScalarFieldEnum
    having?: DataribadiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataribadiCountAggregateInputType | true
    _min?: DataribadiMinAggregateInputType
    _max?: DataribadiMaxAggregateInputType
  }

  export type DataribadiGroupByOutputType = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    _count: DataribadiCountAggregateOutputType | null
    _min: DataribadiMinAggregateOutputType | null
    _max: DataribadiMaxAggregateOutputType | null
  }

  type GetDataribadiGroupByPayload<T extends DataribadiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataribadiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataribadiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataribadiGroupByOutputType[P]>
            : GetScalarType<T[P], DataribadiGroupByOutputType[P]>
        }
      >
    >


  export type DataribadiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    phone?: boolean
    email?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["dataribadi"]>



  export type DataribadiSelectScalar = {
    nip?: boolean
    nama?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    phone?: boolean
    email?: boolean
    alamat?: boolean
  }

  export type DataribadiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "tempatLahir" | "tanggalLahir" | "jenisKelamin" | "phone" | "email" | "alamat", ExtArgs["result"]["dataribadi"]>

  export type $DataribadiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataribadi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      tempatLahir: string
      tanggalLahir: Date
      jenisKelamin: string
      phone: string
      email: string
      alamat: string
    }, ExtArgs["result"]["dataribadi"]>
    composites: {}
  }

  type DataribadiGetPayload<S extends boolean | null | undefined | DataribadiDefaultArgs> = $Result.GetResult<Prisma.$DataribadiPayload, S>

  type DataribadiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataribadiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataribadiCountAggregateInputType | true
    }

  export interface DataribadiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataribadi'], meta: { name: 'Dataribadi' } }
    /**
     * Find zero or one Dataribadi that matches the filter.
     * @param {DataribadiFindUniqueArgs} args - Arguments to find a Dataribadi
     * @example
     * // Get one Dataribadi
     * const dataribadi = await prisma.dataribadi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataribadiFindUniqueArgs>(args: SelectSubset<T, DataribadiFindUniqueArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataribadi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataribadiFindUniqueOrThrowArgs} args - Arguments to find a Dataribadi
     * @example
     * // Get one Dataribadi
     * const dataribadi = await prisma.dataribadi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataribadiFindUniqueOrThrowArgs>(args: SelectSubset<T, DataribadiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataribadi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiFindFirstArgs} args - Arguments to find a Dataribadi
     * @example
     * // Get one Dataribadi
     * const dataribadi = await prisma.dataribadi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataribadiFindFirstArgs>(args?: SelectSubset<T, DataribadiFindFirstArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataribadi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiFindFirstOrThrowArgs} args - Arguments to find a Dataribadi
     * @example
     * // Get one Dataribadi
     * const dataribadi = await prisma.dataribadi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataribadiFindFirstOrThrowArgs>(args?: SelectSubset<T, DataribadiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dataribadis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dataribadis
     * const dataribadis = await prisma.dataribadi.findMany()
     * 
     * // Get first 10 Dataribadis
     * const dataribadis = await prisma.dataribadi.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dataribadiWithNipOnly = await prisma.dataribadi.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends DataribadiFindManyArgs>(args?: SelectSubset<T, DataribadiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataribadi.
     * @param {DataribadiCreateArgs} args - Arguments to create a Dataribadi.
     * @example
     * // Create one Dataribadi
     * const Dataribadi = await prisma.dataribadi.create({
     *   data: {
     *     // ... data to create a Dataribadi
     *   }
     * })
     * 
     */
    create<T extends DataribadiCreateArgs>(args: SelectSubset<T, DataribadiCreateArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dataribadis.
     * @param {DataribadiCreateManyArgs} args - Arguments to create many Dataribadis.
     * @example
     * // Create many Dataribadis
     * const dataribadi = await prisma.dataribadi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataribadiCreateManyArgs>(args?: SelectSubset<T, DataribadiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dataribadi.
     * @param {DataribadiDeleteArgs} args - Arguments to delete one Dataribadi.
     * @example
     * // Delete one Dataribadi
     * const Dataribadi = await prisma.dataribadi.delete({
     *   where: {
     *     // ... filter to delete one Dataribadi
     *   }
     * })
     * 
     */
    delete<T extends DataribadiDeleteArgs>(args: SelectSubset<T, DataribadiDeleteArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataribadi.
     * @param {DataribadiUpdateArgs} args - Arguments to update one Dataribadi.
     * @example
     * // Update one Dataribadi
     * const dataribadi = await prisma.dataribadi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataribadiUpdateArgs>(args: SelectSubset<T, DataribadiUpdateArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dataribadis.
     * @param {DataribadiDeleteManyArgs} args - Arguments to filter Dataribadis to delete.
     * @example
     * // Delete a few Dataribadis
     * const { count } = await prisma.dataribadi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataribadiDeleteManyArgs>(args?: SelectSubset<T, DataribadiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dataribadis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dataribadis
     * const dataribadi = await prisma.dataribadi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataribadiUpdateManyArgs>(args: SelectSubset<T, DataribadiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dataribadi.
     * @param {DataribadiUpsertArgs} args - Arguments to update or create a Dataribadi.
     * @example
     * // Update or create a Dataribadi
     * const dataribadi = await prisma.dataribadi.upsert({
     *   create: {
     *     // ... data to create a Dataribadi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataribadi we want to update
     *   }
     * })
     */
    upsert<T extends DataribadiUpsertArgs>(args: SelectSubset<T, DataribadiUpsertArgs<ExtArgs>>): Prisma__DataribadiClient<$Result.GetResult<Prisma.$DataribadiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dataribadis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiCountArgs} args - Arguments to filter Dataribadis to count.
     * @example
     * // Count the number of Dataribadis
     * const count = await prisma.dataribadi.count({
     *   where: {
     *     // ... the filter for the Dataribadis we want to count
     *   }
     * })
    **/
    count<T extends DataribadiCountArgs>(
      args?: Subset<T, DataribadiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataribadiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataribadi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataribadiAggregateArgs>(args: Subset<T, DataribadiAggregateArgs>): Prisma.PrismaPromise<GetDataribadiAggregateType<T>>

    /**
     * Group by Dataribadi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataribadiGroupByArgs} args - Group by arguments.
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
      T extends DataribadiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataribadiGroupByArgs['orderBy'] }
        : { orderBy?: DataribadiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataribadiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataribadiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataribadi model
   */
  readonly fields: DataribadiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataribadi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataribadiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Dataribadi model
   */
  interface DataribadiFieldRefs {
    readonly nip: FieldRef<"Dataribadi", 'String'>
    readonly nama: FieldRef<"Dataribadi", 'String'>
    readonly tempatLahir: FieldRef<"Dataribadi", 'String'>
    readonly tanggalLahir: FieldRef<"Dataribadi", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Dataribadi", 'String'>
    readonly phone: FieldRef<"Dataribadi", 'String'>
    readonly email: FieldRef<"Dataribadi", 'String'>
    readonly alamat: FieldRef<"Dataribadi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dataribadi findUnique
   */
  export type DataribadiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter, which Dataribadi to fetch.
     */
    where: DataribadiWhereUniqueInput
  }

  /**
   * Dataribadi findUniqueOrThrow
   */
  export type DataribadiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter, which Dataribadi to fetch.
     */
    where: DataribadiWhereUniqueInput
  }

  /**
   * Dataribadi findFirst
   */
  export type DataribadiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter, which Dataribadi to fetch.
     */
    where?: DataribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dataribadis to fetch.
     */
    orderBy?: DataribadiOrderByWithRelationInput | DataribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dataribadis.
     */
    cursor?: DataribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dataribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dataribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dataribadis.
     */
    distinct?: DataribadiScalarFieldEnum | DataribadiScalarFieldEnum[]
  }

  /**
   * Dataribadi findFirstOrThrow
   */
  export type DataribadiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter, which Dataribadi to fetch.
     */
    where?: DataribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dataribadis to fetch.
     */
    orderBy?: DataribadiOrderByWithRelationInput | DataribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dataribadis.
     */
    cursor?: DataribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dataribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dataribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dataribadis.
     */
    distinct?: DataribadiScalarFieldEnum | DataribadiScalarFieldEnum[]
  }

  /**
   * Dataribadi findMany
   */
  export type DataribadiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter, which Dataribadis to fetch.
     */
    where?: DataribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dataribadis to fetch.
     */
    orderBy?: DataribadiOrderByWithRelationInput | DataribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dataribadis.
     */
    cursor?: DataribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dataribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dataribadis.
     */
    skip?: number
    distinct?: DataribadiScalarFieldEnum | DataribadiScalarFieldEnum[]
  }

  /**
   * Dataribadi create
   */
  export type DataribadiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * The data needed to create a Dataribadi.
     */
    data: XOR<DataribadiCreateInput, DataribadiUncheckedCreateInput>
  }

  /**
   * Dataribadi createMany
   */
  export type DataribadiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dataribadis.
     */
    data: DataribadiCreateManyInput | DataribadiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataribadi update
   */
  export type DataribadiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * The data needed to update a Dataribadi.
     */
    data: XOR<DataribadiUpdateInput, DataribadiUncheckedUpdateInput>
    /**
     * Choose, which Dataribadi to update.
     */
    where: DataribadiWhereUniqueInput
  }

  /**
   * Dataribadi updateMany
   */
  export type DataribadiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dataribadis.
     */
    data: XOR<DataribadiUpdateManyMutationInput, DataribadiUncheckedUpdateManyInput>
    /**
     * Filter which Dataribadis to update
     */
    where?: DataribadiWhereInput
    /**
     * Limit how many Dataribadis to update.
     */
    limit?: number
  }

  /**
   * Dataribadi upsert
   */
  export type DataribadiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * The filter to search for the Dataribadi to update in case it exists.
     */
    where: DataribadiWhereUniqueInput
    /**
     * In case the Dataribadi found by the `where` argument doesn't exist, create a new Dataribadi with this data.
     */
    create: XOR<DataribadiCreateInput, DataribadiUncheckedCreateInput>
    /**
     * In case the Dataribadi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataribadiUpdateInput, DataribadiUncheckedUpdateInput>
  }

  /**
   * Dataribadi delete
   */
  export type DataribadiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
    /**
     * Filter which Dataribadi to delete.
     */
    where: DataribadiWhereUniqueInput
  }

  /**
   * Dataribadi deleteMany
   */
  export type DataribadiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataribadis to delete
     */
    where?: DataribadiWhereInput
    /**
     * Limit how many Dataribadis to delete.
     */
    limit?: number
  }

  /**
   * Dataribadi without action
   */
  export type DataribadiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataribadi
     */
    select?: DataribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataribadi
     */
    omit?: DataribadiOmit<ExtArgs> | null
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


  export const DataribadiScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tempatLahir: 'tempatLahir',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    phone: 'phone',
    email: 'email',
    alamat: 'alamat'
  };

  export type DataribadiScalarFieldEnum = (typeof DataribadiScalarFieldEnum)[keyof typeof DataribadiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DataribadiOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tempatLahir: 'tempatLahir',
    jenisKelamin: 'jenisKelamin',
    phone: 'phone',
    email: 'email',
    alamat: 'alamat'
  };

  export type DataribadiOrderByRelevanceFieldEnum = (typeof DataribadiOrderByRelevanceFieldEnum)[keyof typeof DataribadiOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type DataribadiWhereInput = {
    AND?: DataribadiWhereInput | DataribadiWhereInput[]
    OR?: DataribadiWhereInput[]
    NOT?: DataribadiWhereInput | DataribadiWhereInput[]
    nip?: StringFilter<"Dataribadi"> | string
    nama?: StringFilter<"Dataribadi"> | string
    tempatLahir?: StringFilter<"Dataribadi"> | string
    tanggalLahir?: DateTimeFilter<"Dataribadi"> | Date | string
    jenisKelamin?: StringFilter<"Dataribadi"> | string
    phone?: StringFilter<"Dataribadi"> | string
    email?: StringFilter<"Dataribadi"> | string
    alamat?: StringFilter<"Dataribadi"> | string
  }

  export type DataribadiOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    _relevance?: DataribadiOrderByRelevanceInput
  }

  export type DataribadiWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: DataribadiWhereInput | DataribadiWhereInput[]
    OR?: DataribadiWhereInput[]
    NOT?: DataribadiWhereInput | DataribadiWhereInput[]
    nama?: StringFilter<"Dataribadi"> | string
    tempatLahir?: StringFilter<"Dataribadi"> | string
    tanggalLahir?: DateTimeFilter<"Dataribadi"> | Date | string
    jenisKelamin?: StringFilter<"Dataribadi"> | string
    phone?: StringFilter<"Dataribadi"> | string
    email?: StringFilter<"Dataribadi"> | string
    alamat?: StringFilter<"Dataribadi"> | string
  }, "nip">

  export type DataribadiOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    _count?: DataribadiCountOrderByAggregateInput
    _max?: DataribadiMaxOrderByAggregateInput
    _min?: DataribadiMinOrderByAggregateInput
  }

  export type DataribadiScalarWhereWithAggregatesInput = {
    AND?: DataribadiScalarWhereWithAggregatesInput | DataribadiScalarWhereWithAggregatesInput[]
    OR?: DataribadiScalarWhereWithAggregatesInput[]
    NOT?: DataribadiScalarWhereWithAggregatesInput | DataribadiScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"Dataribadi"> | string
    nama?: StringWithAggregatesFilter<"Dataribadi"> | string
    tempatLahir?: StringWithAggregatesFilter<"Dataribadi"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"Dataribadi"> | Date | string
    jenisKelamin?: StringWithAggregatesFilter<"Dataribadi"> | string
    phone?: StringWithAggregatesFilter<"Dataribadi"> | string
    email?: StringWithAggregatesFilter<"Dataribadi"> | string
    alamat?: StringWithAggregatesFilter<"Dataribadi"> | string
  }

  export type DataribadiCreateInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
  }

  export type DataribadiUncheckedCreateInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
  }

  export type DataribadiUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DataribadiUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DataribadiCreateManyInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
  }

  export type DataribadiUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DataribadiUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DataribadiOrderByRelevanceInput = {
    fields: DataribadiOrderByRelevanceFieldEnum | DataribadiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataribadiCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type DataribadiMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type DataribadiMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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