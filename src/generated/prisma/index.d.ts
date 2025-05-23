
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
 * Model Datapribadi
 * 
 */
export type Datapribadi = $Result.DefaultSelection<Prisma.$DatapribadiPayload>
/**
 * Model DataPekerjaan
 * 
 */
export type DataPekerjaan = $Result.DefaultSelection<Prisma.$DataPekerjaanPayload>
/**
 * Model DataPendidikan
 * 
 */
export type DataPendidikan = $Result.DefaultSelection<Prisma.$DataPendidikanPayload>
/**
 * Model Kompetensi
 * 
 */
export type Kompetensi = $Result.DefaultSelection<Prisma.$KompetensiPayload>
/**
 * Model AsesmenMandiri
 * 
 */
export type AsesmenMandiri = $Result.DefaultSelection<Prisma.$AsesmenMandiriPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Datapribadis
 * const datapribadis = await prisma.datapribadi.findMany()
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
   * // Fetch zero or more Datapribadis
   * const datapribadis = await prisma.datapribadi.findMany()
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
   * `prisma.datapribadi`: Exposes CRUD operations for the **Datapribadi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datapribadis
    * const datapribadis = await prisma.datapribadi.findMany()
    * ```
    */
  get datapribadi(): Prisma.DatapribadiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPekerjaan`: Exposes CRUD operations for the **DataPekerjaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPekerjaans
    * const dataPekerjaans = await prisma.dataPekerjaan.findMany()
    * ```
    */
  get dataPekerjaan(): Prisma.DataPekerjaanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPendidikan`: Exposes CRUD operations for the **DataPendidikan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPendidikans
    * const dataPendidikans = await prisma.dataPendidikan.findMany()
    * ```
    */
  get dataPendidikan(): Prisma.DataPendidikanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kompetensi`: Exposes CRUD operations for the **Kompetensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kompetensis
    * const kompetensis = await prisma.kompetensi.findMany()
    * ```
    */
  get kompetensi(): Prisma.KompetensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asesmenMandiri`: Exposes CRUD operations for the **AsesmenMandiri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsesmenMandiris
    * const asesmenMandiris = await prisma.asesmenMandiri.findMany()
    * ```
    */
  get asesmenMandiri(): Prisma.AsesmenMandiriDelegate<ExtArgs, ClientOptions>;
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
    Datapribadi: 'Datapribadi',
    DataPekerjaan: 'DataPekerjaan',
    DataPendidikan: 'DataPendidikan',
    Kompetensi: 'Kompetensi',
    AsesmenMandiri: 'AsesmenMandiri'
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
      modelProps: "datapribadi" | "dataPekerjaan" | "dataPendidikan" | "kompetensi" | "asesmenMandiri"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Datapribadi: {
        payload: Prisma.$DatapribadiPayload<ExtArgs>
        fields: Prisma.DatapribadiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatapribadiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatapribadiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          findFirst: {
            args: Prisma.DatapribadiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatapribadiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          findMany: {
            args: Prisma.DatapribadiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>[]
          }
          create: {
            args: Prisma.DatapribadiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          createMany: {
            args: Prisma.DatapribadiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DatapribadiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          update: {
            args: Prisma.DatapribadiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          deleteMany: {
            args: Prisma.DatapribadiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatapribadiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DatapribadiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatapribadiPayload>
          }
          aggregate: {
            args: Prisma.DatapribadiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatapribadi>
          }
          groupBy: {
            args: Prisma.DatapribadiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatapribadiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatapribadiCountArgs<ExtArgs>
            result: $Utils.Optional<DatapribadiCountAggregateOutputType> | number
          }
        }
      }
      DataPekerjaan: {
        payload: Prisma.$DataPekerjaanPayload<ExtArgs>
        fields: Prisma.DataPekerjaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPekerjaanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPekerjaanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          findFirst: {
            args: Prisma.DataPekerjaanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPekerjaanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          findMany: {
            args: Prisma.DataPekerjaanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>[]
          }
          create: {
            args: Prisma.DataPekerjaanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          createMany: {
            args: Prisma.DataPekerjaanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataPekerjaanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          update: {
            args: Prisma.DataPekerjaanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          deleteMany: {
            args: Prisma.DataPekerjaanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPekerjaanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataPekerjaanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPekerjaanPayload>
          }
          aggregate: {
            args: Prisma.DataPekerjaanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPekerjaan>
          }
          groupBy: {
            args: Prisma.DataPekerjaanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPekerjaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPekerjaanCountArgs<ExtArgs>
            result: $Utils.Optional<DataPekerjaanCountAggregateOutputType> | number
          }
        }
      }
      DataPendidikan: {
        payload: Prisma.$DataPendidikanPayload<ExtArgs>
        fields: Prisma.DataPendidikanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPendidikanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPendidikanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          findFirst: {
            args: Prisma.DataPendidikanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPendidikanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          findMany: {
            args: Prisma.DataPendidikanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>[]
          }
          create: {
            args: Prisma.DataPendidikanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          createMany: {
            args: Prisma.DataPendidikanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataPendidikanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          update: {
            args: Prisma.DataPendidikanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          deleteMany: {
            args: Prisma.DataPendidikanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPendidikanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataPendidikanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPendidikanPayload>
          }
          aggregate: {
            args: Prisma.DataPendidikanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPendidikan>
          }
          groupBy: {
            args: Prisma.DataPendidikanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPendidikanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPendidikanCountArgs<ExtArgs>
            result: $Utils.Optional<DataPendidikanCountAggregateOutputType> | number
          }
        }
      }
      Kompetensi: {
        payload: Prisma.$KompetensiPayload<ExtArgs>
        fields: Prisma.KompetensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KompetensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KompetensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          findFirst: {
            args: Prisma.KompetensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KompetensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          findMany: {
            args: Prisma.KompetensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>[]
          }
          create: {
            args: Prisma.KompetensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          createMany: {
            args: Prisma.KompetensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KompetensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          update: {
            args: Prisma.KompetensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          deleteMany: {
            args: Prisma.KompetensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KompetensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KompetensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPayload>
          }
          aggregate: {
            args: Prisma.KompetensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKompetensi>
          }
          groupBy: {
            args: Prisma.KompetensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KompetensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.KompetensiCountArgs<ExtArgs>
            result: $Utils.Optional<KompetensiCountAggregateOutputType> | number
          }
        }
      }
      AsesmenMandiri: {
        payload: Prisma.$AsesmenMandiriPayload<ExtArgs>
        fields: Prisma.AsesmenMandiriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsesmenMandiriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsesmenMandiriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          findFirst: {
            args: Prisma.AsesmenMandiriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsesmenMandiriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          findMany: {
            args: Prisma.AsesmenMandiriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>[]
          }
          create: {
            args: Prisma.AsesmenMandiriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          createMany: {
            args: Prisma.AsesmenMandiriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AsesmenMandiriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          update: {
            args: Prisma.AsesmenMandiriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          deleteMany: {
            args: Prisma.AsesmenMandiriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsesmenMandiriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsesmenMandiriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesmenMandiriPayload>
          }
          aggregate: {
            args: Prisma.AsesmenMandiriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsesmenMandiri>
          }
          groupBy: {
            args: Prisma.AsesmenMandiriGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsesmenMandiriGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsesmenMandiriCountArgs<ExtArgs>
            result: $Utils.Optional<AsesmenMandiriCountAggregateOutputType> | number
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
    datapribadi?: DatapribadiOmit
    dataPekerjaan?: DataPekerjaanOmit
    dataPendidikan?: DataPendidikanOmit
    kompetensi?: KompetensiOmit
    asesmenMandiri?: AsesmenMandiriOmit
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
   * Count Type DatapribadiCountOutputType
   */

  export type DatapribadiCountOutputType = {
    asesmenMandiri: number
  }

  export type DatapribadiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesmenMandiri?: boolean | DatapribadiCountOutputTypeCountAsesmenMandiriArgs
  }

  // Custom InputTypes
  /**
   * DatapribadiCountOutputType without action
   */
  export type DatapribadiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatapribadiCountOutputType
     */
    select?: DatapribadiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatapribadiCountOutputType without action
   */
  export type DatapribadiCountOutputTypeCountAsesmenMandiriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsesmenMandiriWhereInput
  }


  /**
   * Count Type KompetensiCountOutputType
   */

  export type KompetensiCountOutputType = {
    asesmenMandiri: number
  }

  export type KompetensiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesmenMandiri?: boolean | KompetensiCountOutputTypeCountAsesmenMandiriArgs
  }

  // Custom InputTypes
  /**
   * KompetensiCountOutputType without action
   */
  export type KompetensiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiCountOutputType
     */
    select?: KompetensiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KompetensiCountOutputType without action
   */
  export type KompetensiCountOutputTypeCountAsesmenMandiriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsesmenMandiriWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Datapribadi
   */

  export type AggregateDatapribadi = {
    _count: DatapribadiCountAggregateOutputType | null
    _min: DatapribadiMinAggregateOutputType | null
    _max: DatapribadiMaxAggregateOutputType | null
  }

  export type DatapribadiMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    phone: string | null
    email: string | null
    alamat: string | null
  }

  export type DatapribadiMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    tempatLahir: string | null
    tanggalLahir: Date | null
    jenisKelamin: string | null
    phone: string | null
    email: string | null
    alamat: string | null
  }

  export type DatapribadiCountAggregateOutputType = {
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


  export type DatapribadiMinAggregateInputType = {
    nip?: true
    nama?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    phone?: true
    email?: true
    alamat?: true
  }

  export type DatapribadiMaxAggregateInputType = {
    nip?: true
    nama?: true
    tempatLahir?: true
    tanggalLahir?: true
    jenisKelamin?: true
    phone?: true
    email?: true
    alamat?: true
  }

  export type DatapribadiCountAggregateInputType = {
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

  export type DatapribadiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datapribadi to aggregate.
     */
    where?: DatapribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datapribadis to fetch.
     */
    orderBy?: DatapribadiOrderByWithRelationInput | DatapribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatapribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datapribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datapribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datapribadis
    **/
    _count?: true | DatapribadiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatapribadiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatapribadiMaxAggregateInputType
  }

  export type GetDatapribadiAggregateType<T extends DatapribadiAggregateArgs> = {
        [P in keyof T & keyof AggregateDatapribadi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatapribadi[P]>
      : GetScalarType<T[P], AggregateDatapribadi[P]>
  }




  export type DatapribadiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatapribadiWhereInput
    orderBy?: DatapribadiOrderByWithAggregationInput | DatapribadiOrderByWithAggregationInput[]
    by: DatapribadiScalarFieldEnum[] | DatapribadiScalarFieldEnum
    having?: DatapribadiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatapribadiCountAggregateInputType | true
    _min?: DatapribadiMinAggregateInputType
    _max?: DatapribadiMaxAggregateInputType
  }

  export type DatapribadiGroupByOutputType = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    _count: DatapribadiCountAggregateOutputType | null
    _min: DatapribadiMinAggregateOutputType | null
    _max: DatapribadiMaxAggregateOutputType | null
  }

  type GetDatapribadiGroupByPayload<T extends DatapribadiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatapribadiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatapribadiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatapribadiGroupByOutputType[P]>
            : GetScalarType<T[P], DatapribadiGroupByOutputType[P]>
        }
      >
    >


  export type DatapribadiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    phone?: boolean
    email?: boolean
    alamat?: boolean
    pekerjaan?: boolean | Datapribadi$pekerjaanArgs<ExtArgs>
    pendidikan?: boolean | Datapribadi$pendidikanArgs<ExtArgs>
    asesmenMandiri?: boolean | Datapribadi$asesmenMandiriArgs<ExtArgs>
    _count?: boolean | DatapribadiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datapribadi"]>



  export type DatapribadiSelectScalar = {
    nip?: boolean
    nama?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    jenisKelamin?: boolean
    phone?: boolean
    email?: boolean
    alamat?: boolean
  }

  export type DatapribadiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "tempatLahir" | "tanggalLahir" | "jenisKelamin" | "phone" | "email" | "alamat", ExtArgs["result"]["datapribadi"]>
  export type DatapribadiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pekerjaan?: boolean | Datapribadi$pekerjaanArgs<ExtArgs>
    pendidikan?: boolean | Datapribadi$pendidikanArgs<ExtArgs>
    asesmenMandiri?: boolean | Datapribadi$asesmenMandiriArgs<ExtArgs>
    _count?: boolean | DatapribadiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DatapribadiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Datapribadi"
    objects: {
      pekerjaan: Prisma.$DataPekerjaanPayload<ExtArgs> | null
      pendidikan: Prisma.$DataPendidikanPayload<ExtArgs> | null
      asesmenMandiri: Prisma.$AsesmenMandiriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      tempatLahir: string
      tanggalLahir: Date
      jenisKelamin: string
      phone: string
      email: string
      alamat: string
    }, ExtArgs["result"]["datapribadi"]>
    composites: {}
  }

  type DatapribadiGetPayload<S extends boolean | null | undefined | DatapribadiDefaultArgs> = $Result.GetResult<Prisma.$DatapribadiPayload, S>

  type DatapribadiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatapribadiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatapribadiCountAggregateInputType | true
    }

  export interface DatapribadiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Datapribadi'], meta: { name: 'Datapribadi' } }
    /**
     * Find zero or one Datapribadi that matches the filter.
     * @param {DatapribadiFindUniqueArgs} args - Arguments to find a Datapribadi
     * @example
     * // Get one Datapribadi
     * const datapribadi = await prisma.datapribadi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatapribadiFindUniqueArgs>(args: SelectSubset<T, DatapribadiFindUniqueArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datapribadi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatapribadiFindUniqueOrThrowArgs} args - Arguments to find a Datapribadi
     * @example
     * // Get one Datapribadi
     * const datapribadi = await prisma.datapribadi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatapribadiFindUniqueOrThrowArgs>(args: SelectSubset<T, DatapribadiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datapribadi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiFindFirstArgs} args - Arguments to find a Datapribadi
     * @example
     * // Get one Datapribadi
     * const datapribadi = await prisma.datapribadi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatapribadiFindFirstArgs>(args?: SelectSubset<T, DatapribadiFindFirstArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datapribadi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiFindFirstOrThrowArgs} args - Arguments to find a Datapribadi
     * @example
     * // Get one Datapribadi
     * const datapribadi = await prisma.datapribadi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatapribadiFindFirstOrThrowArgs>(args?: SelectSubset<T, DatapribadiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datapribadis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datapribadis
     * const datapribadis = await prisma.datapribadi.findMany()
     * 
     * // Get first 10 Datapribadis
     * const datapribadis = await prisma.datapribadi.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const datapribadiWithNipOnly = await prisma.datapribadi.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends DatapribadiFindManyArgs>(args?: SelectSubset<T, DatapribadiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datapribadi.
     * @param {DatapribadiCreateArgs} args - Arguments to create a Datapribadi.
     * @example
     * // Create one Datapribadi
     * const Datapribadi = await prisma.datapribadi.create({
     *   data: {
     *     // ... data to create a Datapribadi
     *   }
     * })
     * 
     */
    create<T extends DatapribadiCreateArgs>(args: SelectSubset<T, DatapribadiCreateArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datapribadis.
     * @param {DatapribadiCreateManyArgs} args - Arguments to create many Datapribadis.
     * @example
     * // Create many Datapribadis
     * const datapribadi = await prisma.datapribadi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatapribadiCreateManyArgs>(args?: SelectSubset<T, DatapribadiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Datapribadi.
     * @param {DatapribadiDeleteArgs} args - Arguments to delete one Datapribadi.
     * @example
     * // Delete one Datapribadi
     * const Datapribadi = await prisma.datapribadi.delete({
     *   where: {
     *     // ... filter to delete one Datapribadi
     *   }
     * })
     * 
     */
    delete<T extends DatapribadiDeleteArgs>(args: SelectSubset<T, DatapribadiDeleteArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datapribadi.
     * @param {DatapribadiUpdateArgs} args - Arguments to update one Datapribadi.
     * @example
     * // Update one Datapribadi
     * const datapribadi = await prisma.datapribadi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatapribadiUpdateArgs>(args: SelectSubset<T, DatapribadiUpdateArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datapribadis.
     * @param {DatapribadiDeleteManyArgs} args - Arguments to filter Datapribadis to delete.
     * @example
     * // Delete a few Datapribadis
     * const { count } = await prisma.datapribadi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatapribadiDeleteManyArgs>(args?: SelectSubset<T, DatapribadiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datapribadis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datapribadis
     * const datapribadi = await prisma.datapribadi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatapribadiUpdateManyArgs>(args: SelectSubset<T, DatapribadiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Datapribadi.
     * @param {DatapribadiUpsertArgs} args - Arguments to update or create a Datapribadi.
     * @example
     * // Update or create a Datapribadi
     * const datapribadi = await prisma.datapribadi.upsert({
     *   create: {
     *     // ... data to create a Datapribadi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datapribadi we want to update
     *   }
     * })
     */
    upsert<T extends DatapribadiUpsertArgs>(args: SelectSubset<T, DatapribadiUpsertArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datapribadis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiCountArgs} args - Arguments to filter Datapribadis to count.
     * @example
     * // Count the number of Datapribadis
     * const count = await prisma.datapribadi.count({
     *   where: {
     *     // ... the filter for the Datapribadis we want to count
     *   }
     * })
    **/
    count<T extends DatapribadiCountArgs>(
      args?: Subset<T, DatapribadiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatapribadiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datapribadi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatapribadiAggregateArgs>(args: Subset<T, DatapribadiAggregateArgs>): Prisma.PrismaPromise<GetDatapribadiAggregateType<T>>

    /**
     * Group by Datapribadi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatapribadiGroupByArgs} args - Group by arguments.
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
      T extends DatapribadiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatapribadiGroupByArgs['orderBy'] }
        : { orderBy?: DatapribadiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatapribadiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatapribadiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Datapribadi model
   */
  readonly fields: DatapribadiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Datapribadi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatapribadiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pekerjaan<T extends Datapribadi$pekerjaanArgs<ExtArgs> = {}>(args?: Subset<T, Datapribadi$pekerjaanArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pendidikan<T extends Datapribadi$pendidikanArgs<ExtArgs> = {}>(args?: Subset<T, Datapribadi$pendidikanArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    asesmenMandiri<T extends Datapribadi$asesmenMandiriArgs<ExtArgs> = {}>(args?: Subset<T, Datapribadi$asesmenMandiriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Datapribadi model
   */
  interface DatapribadiFieldRefs {
    readonly nip: FieldRef<"Datapribadi", 'String'>
    readonly nama: FieldRef<"Datapribadi", 'String'>
    readonly tempatLahir: FieldRef<"Datapribadi", 'String'>
    readonly tanggalLahir: FieldRef<"Datapribadi", 'DateTime'>
    readonly jenisKelamin: FieldRef<"Datapribadi", 'String'>
    readonly phone: FieldRef<"Datapribadi", 'String'>
    readonly email: FieldRef<"Datapribadi", 'String'>
    readonly alamat: FieldRef<"Datapribadi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Datapribadi findUnique
   */
  export type DatapribadiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter, which Datapribadi to fetch.
     */
    where: DatapribadiWhereUniqueInput
  }

  /**
   * Datapribadi findUniqueOrThrow
   */
  export type DatapribadiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter, which Datapribadi to fetch.
     */
    where: DatapribadiWhereUniqueInput
  }

  /**
   * Datapribadi findFirst
   */
  export type DatapribadiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter, which Datapribadi to fetch.
     */
    where?: DatapribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datapribadis to fetch.
     */
    orderBy?: DatapribadiOrderByWithRelationInput | DatapribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datapribadis.
     */
    cursor?: DatapribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datapribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datapribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datapribadis.
     */
    distinct?: DatapribadiScalarFieldEnum | DatapribadiScalarFieldEnum[]
  }

  /**
   * Datapribadi findFirstOrThrow
   */
  export type DatapribadiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter, which Datapribadi to fetch.
     */
    where?: DatapribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datapribadis to fetch.
     */
    orderBy?: DatapribadiOrderByWithRelationInput | DatapribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datapribadis.
     */
    cursor?: DatapribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datapribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datapribadis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datapribadis.
     */
    distinct?: DatapribadiScalarFieldEnum | DatapribadiScalarFieldEnum[]
  }

  /**
   * Datapribadi findMany
   */
  export type DatapribadiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter, which Datapribadis to fetch.
     */
    where?: DatapribadiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datapribadis to fetch.
     */
    orderBy?: DatapribadiOrderByWithRelationInput | DatapribadiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datapribadis.
     */
    cursor?: DatapribadiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datapribadis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datapribadis.
     */
    skip?: number
    distinct?: DatapribadiScalarFieldEnum | DatapribadiScalarFieldEnum[]
  }

  /**
   * Datapribadi create
   */
  export type DatapribadiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * The data needed to create a Datapribadi.
     */
    data: XOR<DatapribadiCreateInput, DatapribadiUncheckedCreateInput>
  }

  /**
   * Datapribadi createMany
   */
  export type DatapribadiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datapribadis.
     */
    data: DatapribadiCreateManyInput | DatapribadiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Datapribadi update
   */
  export type DatapribadiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * The data needed to update a Datapribadi.
     */
    data: XOR<DatapribadiUpdateInput, DatapribadiUncheckedUpdateInput>
    /**
     * Choose, which Datapribadi to update.
     */
    where: DatapribadiWhereUniqueInput
  }

  /**
   * Datapribadi updateMany
   */
  export type DatapribadiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datapribadis.
     */
    data: XOR<DatapribadiUpdateManyMutationInput, DatapribadiUncheckedUpdateManyInput>
    /**
     * Filter which Datapribadis to update
     */
    where?: DatapribadiWhereInput
    /**
     * Limit how many Datapribadis to update.
     */
    limit?: number
  }

  /**
   * Datapribadi upsert
   */
  export type DatapribadiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * The filter to search for the Datapribadi to update in case it exists.
     */
    where: DatapribadiWhereUniqueInput
    /**
     * In case the Datapribadi found by the `where` argument doesn't exist, create a new Datapribadi with this data.
     */
    create: XOR<DatapribadiCreateInput, DatapribadiUncheckedCreateInput>
    /**
     * In case the Datapribadi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatapribadiUpdateInput, DatapribadiUncheckedUpdateInput>
  }

  /**
   * Datapribadi delete
   */
  export type DatapribadiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
    /**
     * Filter which Datapribadi to delete.
     */
    where: DatapribadiWhereUniqueInput
  }

  /**
   * Datapribadi deleteMany
   */
  export type DatapribadiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datapribadis to delete
     */
    where?: DatapribadiWhereInput
    /**
     * Limit how many Datapribadis to delete.
     */
    limit?: number
  }

  /**
   * Datapribadi.pekerjaan
   */
  export type Datapribadi$pekerjaanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    where?: DataPekerjaanWhereInput
  }

  /**
   * Datapribadi.pendidikan
   */
  export type Datapribadi$pendidikanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    where?: DataPendidikanWhereInput
  }

  /**
   * Datapribadi.asesmenMandiri
   */
  export type Datapribadi$asesmenMandiriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    where?: AsesmenMandiriWhereInput
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    cursor?: AsesmenMandiriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsesmenMandiriScalarFieldEnum | AsesmenMandiriScalarFieldEnum[]
  }

  /**
   * Datapribadi without action
   */
  export type DatapribadiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datapribadi
     */
    select?: DatapribadiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datapribadi
     */
    omit?: DatapribadiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatapribadiInclude<ExtArgs> | null
  }


  /**
   * Model DataPekerjaan
   */

  export type AggregateDataPekerjaan = {
    _count: DataPekerjaanCountAggregateOutputType | null
    _min: DataPekerjaanMinAggregateOutputType | null
    _max: DataPekerjaanMaxAggregateOutputType | null
  }

  export type DataPekerjaanMinAggregateOutputType = {
    nip: string | null
    namaTempatBekerja: string | null
    alamatPekerjaan: string | null
    noStr: string | null
    tanggalStr: Date | null
    noSip: string | null
    tanggalSip: Date | null
    fileStr: string | null
    fileSik: string | null
  }

  export type DataPekerjaanMaxAggregateOutputType = {
    nip: string | null
    namaTempatBekerja: string | null
    alamatPekerjaan: string | null
    noStr: string | null
    tanggalStr: Date | null
    noSip: string | null
    tanggalSip: Date | null
    fileStr: string | null
    fileSik: string | null
  }

  export type DataPekerjaanCountAggregateOutputType = {
    nip: number
    namaTempatBekerja: number
    alamatPekerjaan: number
    noStr: number
    tanggalStr: number
    noSip: number
    tanggalSip: number
    fileStr: number
    fileSik: number
    _all: number
  }


  export type DataPekerjaanMinAggregateInputType = {
    nip?: true
    namaTempatBekerja?: true
    alamatPekerjaan?: true
    noStr?: true
    tanggalStr?: true
    noSip?: true
    tanggalSip?: true
    fileStr?: true
    fileSik?: true
  }

  export type DataPekerjaanMaxAggregateInputType = {
    nip?: true
    namaTempatBekerja?: true
    alamatPekerjaan?: true
    noStr?: true
    tanggalStr?: true
    noSip?: true
    tanggalSip?: true
    fileStr?: true
    fileSik?: true
  }

  export type DataPekerjaanCountAggregateInputType = {
    nip?: true
    namaTempatBekerja?: true
    alamatPekerjaan?: true
    noStr?: true
    tanggalStr?: true
    noSip?: true
    tanggalSip?: true
    fileStr?: true
    fileSik?: true
    _all?: true
  }

  export type DataPekerjaanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPekerjaan to aggregate.
     */
    where?: DataPekerjaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPekerjaans to fetch.
     */
    orderBy?: DataPekerjaanOrderByWithRelationInput | DataPekerjaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPekerjaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPekerjaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPekerjaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPekerjaans
    **/
    _count?: true | DataPekerjaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPekerjaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPekerjaanMaxAggregateInputType
  }

  export type GetDataPekerjaanAggregateType<T extends DataPekerjaanAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPekerjaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPekerjaan[P]>
      : GetScalarType<T[P], AggregateDataPekerjaan[P]>
  }




  export type DataPekerjaanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPekerjaanWhereInput
    orderBy?: DataPekerjaanOrderByWithAggregationInput | DataPekerjaanOrderByWithAggregationInput[]
    by: DataPekerjaanScalarFieldEnum[] | DataPekerjaanScalarFieldEnum
    having?: DataPekerjaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPekerjaanCountAggregateInputType | true
    _min?: DataPekerjaanMinAggregateInputType
    _max?: DataPekerjaanMaxAggregateInputType
  }

  export type DataPekerjaanGroupByOutputType = {
    nip: string
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date
    noSip: string
    tanggalSip: Date
    fileStr: string | null
    fileSik: string | null
    _count: DataPekerjaanCountAggregateOutputType | null
    _min: DataPekerjaanMinAggregateOutputType | null
    _max: DataPekerjaanMaxAggregateOutputType | null
  }

  type GetDataPekerjaanGroupByPayload<T extends DataPekerjaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPekerjaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPekerjaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPekerjaanGroupByOutputType[P]>
            : GetScalarType<T[P], DataPekerjaanGroupByOutputType[P]>
        }
      >
    >


  export type DataPekerjaanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    namaTempatBekerja?: boolean
    alamatPekerjaan?: boolean
    noStr?: boolean
    tanggalStr?: boolean
    noSip?: boolean
    tanggalSip?: boolean
    fileStr?: boolean
    fileSik?: boolean
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPekerjaan"]>



  export type DataPekerjaanSelectScalar = {
    nip?: boolean
    namaTempatBekerja?: boolean
    alamatPekerjaan?: boolean
    noStr?: boolean
    tanggalStr?: boolean
    noSip?: boolean
    tanggalSip?: boolean
    fileStr?: boolean
    fileSik?: boolean
  }

  export type DataPekerjaanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "namaTempatBekerja" | "alamatPekerjaan" | "noStr" | "tanggalStr" | "noSip" | "tanggalSip" | "fileStr" | "fileSik", ExtArgs["result"]["dataPekerjaan"]>
  export type DataPekerjaanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
  }

  export type $DataPekerjaanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPekerjaan"
    objects: {
      datapribadi: Prisma.$DatapribadiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      namaTempatBekerja: string
      alamatPekerjaan: string
      noStr: string
      tanggalStr: Date
      noSip: string
      tanggalSip: Date
      fileStr: string | null
      fileSik: string | null
    }, ExtArgs["result"]["dataPekerjaan"]>
    composites: {}
  }

  type DataPekerjaanGetPayload<S extends boolean | null | undefined | DataPekerjaanDefaultArgs> = $Result.GetResult<Prisma.$DataPekerjaanPayload, S>

  type DataPekerjaanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPekerjaanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPekerjaanCountAggregateInputType | true
    }

  export interface DataPekerjaanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPekerjaan'], meta: { name: 'DataPekerjaan' } }
    /**
     * Find zero or one DataPekerjaan that matches the filter.
     * @param {DataPekerjaanFindUniqueArgs} args - Arguments to find a DataPekerjaan
     * @example
     * // Get one DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPekerjaanFindUniqueArgs>(args: SelectSubset<T, DataPekerjaanFindUniqueArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPekerjaan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPekerjaanFindUniqueOrThrowArgs} args - Arguments to find a DataPekerjaan
     * @example
     * // Get one DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPekerjaanFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPekerjaanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPekerjaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanFindFirstArgs} args - Arguments to find a DataPekerjaan
     * @example
     * // Get one DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPekerjaanFindFirstArgs>(args?: SelectSubset<T, DataPekerjaanFindFirstArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPekerjaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanFindFirstOrThrowArgs} args - Arguments to find a DataPekerjaan
     * @example
     * // Get one DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPekerjaanFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPekerjaanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPekerjaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPekerjaans
     * const dataPekerjaans = await prisma.dataPekerjaan.findMany()
     * 
     * // Get first 10 DataPekerjaans
     * const dataPekerjaans = await prisma.dataPekerjaan.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dataPekerjaanWithNipOnly = await prisma.dataPekerjaan.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends DataPekerjaanFindManyArgs>(args?: SelectSubset<T, DataPekerjaanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPekerjaan.
     * @param {DataPekerjaanCreateArgs} args - Arguments to create a DataPekerjaan.
     * @example
     * // Create one DataPekerjaan
     * const DataPekerjaan = await prisma.dataPekerjaan.create({
     *   data: {
     *     // ... data to create a DataPekerjaan
     *   }
     * })
     * 
     */
    create<T extends DataPekerjaanCreateArgs>(args: SelectSubset<T, DataPekerjaanCreateArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPekerjaans.
     * @param {DataPekerjaanCreateManyArgs} args - Arguments to create many DataPekerjaans.
     * @example
     * // Create many DataPekerjaans
     * const dataPekerjaan = await prisma.dataPekerjaan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPekerjaanCreateManyArgs>(args?: SelectSubset<T, DataPekerjaanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataPekerjaan.
     * @param {DataPekerjaanDeleteArgs} args - Arguments to delete one DataPekerjaan.
     * @example
     * // Delete one DataPekerjaan
     * const DataPekerjaan = await prisma.dataPekerjaan.delete({
     *   where: {
     *     // ... filter to delete one DataPekerjaan
     *   }
     * })
     * 
     */
    delete<T extends DataPekerjaanDeleteArgs>(args: SelectSubset<T, DataPekerjaanDeleteArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPekerjaan.
     * @param {DataPekerjaanUpdateArgs} args - Arguments to update one DataPekerjaan.
     * @example
     * // Update one DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPekerjaanUpdateArgs>(args: SelectSubset<T, DataPekerjaanUpdateArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPekerjaans.
     * @param {DataPekerjaanDeleteManyArgs} args - Arguments to filter DataPekerjaans to delete.
     * @example
     * // Delete a few DataPekerjaans
     * const { count } = await prisma.dataPekerjaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPekerjaanDeleteManyArgs>(args?: SelectSubset<T, DataPekerjaanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPekerjaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPekerjaans
     * const dataPekerjaan = await prisma.dataPekerjaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPekerjaanUpdateManyArgs>(args: SelectSubset<T, DataPekerjaanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPekerjaan.
     * @param {DataPekerjaanUpsertArgs} args - Arguments to update or create a DataPekerjaan.
     * @example
     * // Update or create a DataPekerjaan
     * const dataPekerjaan = await prisma.dataPekerjaan.upsert({
     *   create: {
     *     // ... data to create a DataPekerjaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPekerjaan we want to update
     *   }
     * })
     */
    upsert<T extends DataPekerjaanUpsertArgs>(args: SelectSubset<T, DataPekerjaanUpsertArgs<ExtArgs>>): Prisma__DataPekerjaanClient<$Result.GetResult<Prisma.$DataPekerjaanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPekerjaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanCountArgs} args - Arguments to filter DataPekerjaans to count.
     * @example
     * // Count the number of DataPekerjaans
     * const count = await prisma.dataPekerjaan.count({
     *   where: {
     *     // ... the filter for the DataPekerjaans we want to count
     *   }
     * })
    **/
    count<T extends DataPekerjaanCountArgs>(
      args?: Subset<T, DataPekerjaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPekerjaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPekerjaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataPekerjaanAggregateArgs>(args: Subset<T, DataPekerjaanAggregateArgs>): Prisma.PrismaPromise<GetDataPekerjaanAggregateType<T>>

    /**
     * Group by DataPekerjaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPekerjaanGroupByArgs} args - Group by arguments.
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
      T extends DataPekerjaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPekerjaanGroupByArgs['orderBy'] }
        : { orderBy?: DataPekerjaanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataPekerjaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPekerjaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPekerjaan model
   */
  readonly fields: DataPekerjaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPekerjaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPekerjaanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datapribadi<T extends DatapribadiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatapribadiDefaultArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DataPekerjaan model
   */
  interface DataPekerjaanFieldRefs {
    readonly nip: FieldRef<"DataPekerjaan", 'String'>
    readonly namaTempatBekerja: FieldRef<"DataPekerjaan", 'String'>
    readonly alamatPekerjaan: FieldRef<"DataPekerjaan", 'String'>
    readonly noStr: FieldRef<"DataPekerjaan", 'String'>
    readonly tanggalStr: FieldRef<"DataPekerjaan", 'DateTime'>
    readonly noSip: FieldRef<"DataPekerjaan", 'String'>
    readonly tanggalSip: FieldRef<"DataPekerjaan", 'DateTime'>
    readonly fileStr: FieldRef<"DataPekerjaan", 'String'>
    readonly fileSik: FieldRef<"DataPekerjaan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataPekerjaan findUnique
   */
  export type DataPekerjaanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter, which DataPekerjaan to fetch.
     */
    where: DataPekerjaanWhereUniqueInput
  }

  /**
   * DataPekerjaan findUniqueOrThrow
   */
  export type DataPekerjaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter, which DataPekerjaan to fetch.
     */
    where: DataPekerjaanWhereUniqueInput
  }

  /**
   * DataPekerjaan findFirst
   */
  export type DataPekerjaanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter, which DataPekerjaan to fetch.
     */
    where?: DataPekerjaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPekerjaans to fetch.
     */
    orderBy?: DataPekerjaanOrderByWithRelationInput | DataPekerjaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPekerjaans.
     */
    cursor?: DataPekerjaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPekerjaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPekerjaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPekerjaans.
     */
    distinct?: DataPekerjaanScalarFieldEnum | DataPekerjaanScalarFieldEnum[]
  }

  /**
   * DataPekerjaan findFirstOrThrow
   */
  export type DataPekerjaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter, which DataPekerjaan to fetch.
     */
    where?: DataPekerjaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPekerjaans to fetch.
     */
    orderBy?: DataPekerjaanOrderByWithRelationInput | DataPekerjaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPekerjaans.
     */
    cursor?: DataPekerjaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPekerjaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPekerjaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPekerjaans.
     */
    distinct?: DataPekerjaanScalarFieldEnum | DataPekerjaanScalarFieldEnum[]
  }

  /**
   * DataPekerjaan findMany
   */
  export type DataPekerjaanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter, which DataPekerjaans to fetch.
     */
    where?: DataPekerjaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPekerjaans to fetch.
     */
    orderBy?: DataPekerjaanOrderByWithRelationInput | DataPekerjaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPekerjaans.
     */
    cursor?: DataPekerjaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPekerjaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPekerjaans.
     */
    skip?: number
    distinct?: DataPekerjaanScalarFieldEnum | DataPekerjaanScalarFieldEnum[]
  }

  /**
   * DataPekerjaan create
   */
  export type DataPekerjaanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * The data needed to create a DataPekerjaan.
     */
    data: XOR<DataPekerjaanCreateInput, DataPekerjaanUncheckedCreateInput>
  }

  /**
   * DataPekerjaan createMany
   */
  export type DataPekerjaanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPekerjaans.
     */
    data: DataPekerjaanCreateManyInput | DataPekerjaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPekerjaan update
   */
  export type DataPekerjaanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * The data needed to update a DataPekerjaan.
     */
    data: XOR<DataPekerjaanUpdateInput, DataPekerjaanUncheckedUpdateInput>
    /**
     * Choose, which DataPekerjaan to update.
     */
    where: DataPekerjaanWhereUniqueInput
  }

  /**
   * DataPekerjaan updateMany
   */
  export type DataPekerjaanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPekerjaans.
     */
    data: XOR<DataPekerjaanUpdateManyMutationInput, DataPekerjaanUncheckedUpdateManyInput>
    /**
     * Filter which DataPekerjaans to update
     */
    where?: DataPekerjaanWhereInput
    /**
     * Limit how many DataPekerjaans to update.
     */
    limit?: number
  }

  /**
   * DataPekerjaan upsert
   */
  export type DataPekerjaanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * The filter to search for the DataPekerjaan to update in case it exists.
     */
    where: DataPekerjaanWhereUniqueInput
    /**
     * In case the DataPekerjaan found by the `where` argument doesn't exist, create a new DataPekerjaan with this data.
     */
    create: XOR<DataPekerjaanCreateInput, DataPekerjaanUncheckedCreateInput>
    /**
     * In case the DataPekerjaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPekerjaanUpdateInput, DataPekerjaanUncheckedUpdateInput>
  }

  /**
   * DataPekerjaan delete
   */
  export type DataPekerjaanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
    /**
     * Filter which DataPekerjaan to delete.
     */
    where: DataPekerjaanWhereUniqueInput
  }

  /**
   * DataPekerjaan deleteMany
   */
  export type DataPekerjaanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPekerjaans to delete
     */
    where?: DataPekerjaanWhereInput
    /**
     * Limit how many DataPekerjaans to delete.
     */
    limit?: number
  }

  /**
   * DataPekerjaan without action
   */
  export type DataPekerjaanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPekerjaan
     */
    select?: DataPekerjaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPekerjaan
     */
    omit?: DataPekerjaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPekerjaanInclude<ExtArgs> | null
  }


  /**
   * Model DataPendidikan
   */

  export type AggregateDataPendidikan = {
    _count: DataPendidikanCountAggregateOutputType | null
    _min: DataPendidikanMinAggregateOutputType | null
    _max: DataPendidikanMaxAggregateOutputType | null
  }

  export type DataPendidikanMinAggregateOutputType = {
    nip: string | null
    universitas: string | null
    jurusan: string | null
    noIjazah: string | null
    tanggalIjazah: Date | null
    fileIjazah: string | null
  }

  export type DataPendidikanMaxAggregateOutputType = {
    nip: string | null
    universitas: string | null
    jurusan: string | null
    noIjazah: string | null
    tanggalIjazah: Date | null
    fileIjazah: string | null
  }

  export type DataPendidikanCountAggregateOutputType = {
    nip: number
    universitas: number
    jurusan: number
    noIjazah: number
    tanggalIjazah: number
    fileIjazah: number
    _all: number
  }


  export type DataPendidikanMinAggregateInputType = {
    nip?: true
    universitas?: true
    jurusan?: true
    noIjazah?: true
    tanggalIjazah?: true
    fileIjazah?: true
  }

  export type DataPendidikanMaxAggregateInputType = {
    nip?: true
    universitas?: true
    jurusan?: true
    noIjazah?: true
    tanggalIjazah?: true
    fileIjazah?: true
  }

  export type DataPendidikanCountAggregateInputType = {
    nip?: true
    universitas?: true
    jurusan?: true
    noIjazah?: true
    tanggalIjazah?: true
    fileIjazah?: true
    _all?: true
  }

  export type DataPendidikanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendidikan to aggregate.
     */
    where?: DataPendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendidikans to fetch.
     */
    orderBy?: DataPendidikanOrderByWithRelationInput | DataPendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPendidikans
    **/
    _count?: true | DataPendidikanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPendidikanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPendidikanMaxAggregateInputType
  }

  export type GetDataPendidikanAggregateType<T extends DataPendidikanAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPendidikan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPendidikan[P]>
      : GetScalarType<T[P], AggregateDataPendidikan[P]>
  }




  export type DataPendidikanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPendidikanWhereInput
    orderBy?: DataPendidikanOrderByWithAggregationInput | DataPendidikanOrderByWithAggregationInput[]
    by: DataPendidikanScalarFieldEnum[] | DataPendidikanScalarFieldEnum
    having?: DataPendidikanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPendidikanCountAggregateInputType | true
    _min?: DataPendidikanMinAggregateInputType
    _max?: DataPendidikanMaxAggregateInputType
  }

  export type DataPendidikanGroupByOutputType = {
    nip: string
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date
    fileIjazah: string | null
    _count: DataPendidikanCountAggregateOutputType | null
    _min: DataPendidikanMinAggregateOutputType | null
    _max: DataPendidikanMaxAggregateOutputType | null
  }

  type GetDataPendidikanGroupByPayload<T extends DataPendidikanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPendidikanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPendidikanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPendidikanGroupByOutputType[P]>
            : GetScalarType<T[P], DataPendidikanGroupByOutputType[P]>
        }
      >
    >


  export type DataPendidikanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    universitas?: boolean
    jurusan?: boolean
    noIjazah?: boolean
    tanggalIjazah?: boolean
    fileIjazah?: boolean
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPendidikan"]>



  export type DataPendidikanSelectScalar = {
    nip?: boolean
    universitas?: boolean
    jurusan?: boolean
    noIjazah?: boolean
    tanggalIjazah?: boolean
    fileIjazah?: boolean
  }

  export type DataPendidikanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "universitas" | "jurusan" | "noIjazah" | "tanggalIjazah" | "fileIjazah", ExtArgs["result"]["dataPendidikan"]>
  export type DataPendidikanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
  }

  export type $DataPendidikanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPendidikan"
    objects: {
      datapribadi: Prisma.$DatapribadiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      universitas: string
      jurusan: string
      noIjazah: string
      tanggalIjazah: Date
      fileIjazah: string | null
    }, ExtArgs["result"]["dataPendidikan"]>
    composites: {}
  }

  type DataPendidikanGetPayload<S extends boolean | null | undefined | DataPendidikanDefaultArgs> = $Result.GetResult<Prisma.$DataPendidikanPayload, S>

  type DataPendidikanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPendidikanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPendidikanCountAggregateInputType | true
    }

  export interface DataPendidikanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPendidikan'], meta: { name: 'DataPendidikan' } }
    /**
     * Find zero or one DataPendidikan that matches the filter.
     * @param {DataPendidikanFindUniqueArgs} args - Arguments to find a DataPendidikan
     * @example
     * // Get one DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPendidikanFindUniqueArgs>(args: SelectSubset<T, DataPendidikanFindUniqueArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPendidikan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPendidikanFindUniqueOrThrowArgs} args - Arguments to find a DataPendidikan
     * @example
     * // Get one DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPendidikanFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPendidikanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendidikan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanFindFirstArgs} args - Arguments to find a DataPendidikan
     * @example
     * // Get one DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPendidikanFindFirstArgs>(args?: SelectSubset<T, DataPendidikanFindFirstArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPendidikan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanFindFirstOrThrowArgs} args - Arguments to find a DataPendidikan
     * @example
     * // Get one DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPendidikanFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPendidikanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPendidikans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPendidikans
     * const dataPendidikans = await prisma.dataPendidikan.findMany()
     * 
     * // Get first 10 DataPendidikans
     * const dataPendidikans = await prisma.dataPendidikan.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dataPendidikanWithNipOnly = await prisma.dataPendidikan.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends DataPendidikanFindManyArgs>(args?: SelectSubset<T, DataPendidikanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPendidikan.
     * @param {DataPendidikanCreateArgs} args - Arguments to create a DataPendidikan.
     * @example
     * // Create one DataPendidikan
     * const DataPendidikan = await prisma.dataPendidikan.create({
     *   data: {
     *     // ... data to create a DataPendidikan
     *   }
     * })
     * 
     */
    create<T extends DataPendidikanCreateArgs>(args: SelectSubset<T, DataPendidikanCreateArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPendidikans.
     * @param {DataPendidikanCreateManyArgs} args - Arguments to create many DataPendidikans.
     * @example
     * // Create many DataPendidikans
     * const dataPendidikan = await prisma.dataPendidikan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPendidikanCreateManyArgs>(args?: SelectSubset<T, DataPendidikanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataPendidikan.
     * @param {DataPendidikanDeleteArgs} args - Arguments to delete one DataPendidikan.
     * @example
     * // Delete one DataPendidikan
     * const DataPendidikan = await prisma.dataPendidikan.delete({
     *   where: {
     *     // ... filter to delete one DataPendidikan
     *   }
     * })
     * 
     */
    delete<T extends DataPendidikanDeleteArgs>(args: SelectSubset<T, DataPendidikanDeleteArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPendidikan.
     * @param {DataPendidikanUpdateArgs} args - Arguments to update one DataPendidikan.
     * @example
     * // Update one DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPendidikanUpdateArgs>(args: SelectSubset<T, DataPendidikanUpdateArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPendidikans.
     * @param {DataPendidikanDeleteManyArgs} args - Arguments to filter DataPendidikans to delete.
     * @example
     * // Delete a few DataPendidikans
     * const { count } = await prisma.dataPendidikan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPendidikanDeleteManyArgs>(args?: SelectSubset<T, DataPendidikanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPendidikans
     * const dataPendidikan = await prisma.dataPendidikan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPendidikanUpdateManyArgs>(args: SelectSubset<T, DataPendidikanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPendidikan.
     * @param {DataPendidikanUpsertArgs} args - Arguments to update or create a DataPendidikan.
     * @example
     * // Update or create a DataPendidikan
     * const dataPendidikan = await prisma.dataPendidikan.upsert({
     *   create: {
     *     // ... data to create a DataPendidikan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPendidikan we want to update
     *   }
     * })
     */
    upsert<T extends DataPendidikanUpsertArgs>(args: SelectSubset<T, DataPendidikanUpsertArgs<ExtArgs>>): Prisma__DataPendidikanClient<$Result.GetResult<Prisma.$DataPendidikanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanCountArgs} args - Arguments to filter DataPendidikans to count.
     * @example
     * // Count the number of DataPendidikans
     * const count = await prisma.dataPendidikan.count({
     *   where: {
     *     // ... the filter for the DataPendidikans we want to count
     *   }
     * })
    **/
    count<T extends DataPendidikanCountArgs>(
      args?: Subset<T, DataPendidikanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPendidikanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataPendidikanAggregateArgs>(args: Subset<T, DataPendidikanAggregateArgs>): Prisma.PrismaPromise<GetDataPendidikanAggregateType<T>>

    /**
     * Group by DataPendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPendidikanGroupByArgs} args - Group by arguments.
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
      T extends DataPendidikanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPendidikanGroupByArgs['orderBy'] }
        : { orderBy?: DataPendidikanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataPendidikanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPendidikanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPendidikan model
   */
  readonly fields: DataPendidikanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPendidikan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPendidikanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datapribadi<T extends DatapribadiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatapribadiDefaultArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DataPendidikan model
   */
  interface DataPendidikanFieldRefs {
    readonly nip: FieldRef<"DataPendidikan", 'String'>
    readonly universitas: FieldRef<"DataPendidikan", 'String'>
    readonly jurusan: FieldRef<"DataPendidikan", 'String'>
    readonly noIjazah: FieldRef<"DataPendidikan", 'String'>
    readonly tanggalIjazah: FieldRef<"DataPendidikan", 'DateTime'>
    readonly fileIjazah: FieldRef<"DataPendidikan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DataPendidikan findUnique
   */
  export type DataPendidikanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter, which DataPendidikan to fetch.
     */
    where: DataPendidikanWhereUniqueInput
  }

  /**
   * DataPendidikan findUniqueOrThrow
   */
  export type DataPendidikanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter, which DataPendidikan to fetch.
     */
    where: DataPendidikanWhereUniqueInput
  }

  /**
   * DataPendidikan findFirst
   */
  export type DataPendidikanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter, which DataPendidikan to fetch.
     */
    where?: DataPendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendidikans to fetch.
     */
    orderBy?: DataPendidikanOrderByWithRelationInput | DataPendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendidikans.
     */
    cursor?: DataPendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendidikans.
     */
    distinct?: DataPendidikanScalarFieldEnum | DataPendidikanScalarFieldEnum[]
  }

  /**
   * DataPendidikan findFirstOrThrow
   */
  export type DataPendidikanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter, which DataPendidikan to fetch.
     */
    where?: DataPendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendidikans to fetch.
     */
    orderBy?: DataPendidikanOrderByWithRelationInput | DataPendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPendidikans.
     */
    cursor?: DataPendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPendidikans.
     */
    distinct?: DataPendidikanScalarFieldEnum | DataPendidikanScalarFieldEnum[]
  }

  /**
   * DataPendidikan findMany
   */
  export type DataPendidikanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter, which DataPendidikans to fetch.
     */
    where?: DataPendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPendidikans to fetch.
     */
    orderBy?: DataPendidikanOrderByWithRelationInput | DataPendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPendidikans.
     */
    cursor?: DataPendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPendidikans.
     */
    skip?: number
    distinct?: DataPendidikanScalarFieldEnum | DataPendidikanScalarFieldEnum[]
  }

  /**
   * DataPendidikan create
   */
  export type DataPendidikanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * The data needed to create a DataPendidikan.
     */
    data: XOR<DataPendidikanCreateInput, DataPendidikanUncheckedCreateInput>
  }

  /**
   * DataPendidikan createMany
   */
  export type DataPendidikanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPendidikans.
     */
    data: DataPendidikanCreateManyInput | DataPendidikanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPendidikan update
   */
  export type DataPendidikanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * The data needed to update a DataPendidikan.
     */
    data: XOR<DataPendidikanUpdateInput, DataPendidikanUncheckedUpdateInput>
    /**
     * Choose, which DataPendidikan to update.
     */
    where: DataPendidikanWhereUniqueInput
  }

  /**
   * DataPendidikan updateMany
   */
  export type DataPendidikanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPendidikans.
     */
    data: XOR<DataPendidikanUpdateManyMutationInput, DataPendidikanUncheckedUpdateManyInput>
    /**
     * Filter which DataPendidikans to update
     */
    where?: DataPendidikanWhereInput
    /**
     * Limit how many DataPendidikans to update.
     */
    limit?: number
  }

  /**
   * DataPendidikan upsert
   */
  export type DataPendidikanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * The filter to search for the DataPendidikan to update in case it exists.
     */
    where: DataPendidikanWhereUniqueInput
    /**
     * In case the DataPendidikan found by the `where` argument doesn't exist, create a new DataPendidikan with this data.
     */
    create: XOR<DataPendidikanCreateInput, DataPendidikanUncheckedCreateInput>
    /**
     * In case the DataPendidikan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPendidikanUpdateInput, DataPendidikanUncheckedUpdateInput>
  }

  /**
   * DataPendidikan delete
   */
  export type DataPendidikanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
    /**
     * Filter which DataPendidikan to delete.
     */
    where: DataPendidikanWhereUniqueInput
  }

  /**
   * DataPendidikan deleteMany
   */
  export type DataPendidikanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPendidikans to delete
     */
    where?: DataPendidikanWhereInput
    /**
     * Limit how many DataPendidikans to delete.
     */
    limit?: number
  }

  /**
   * DataPendidikan without action
   */
  export type DataPendidikanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPendidikan
     */
    select?: DataPendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPendidikan
     */
    omit?: DataPendidikanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPendidikanInclude<ExtArgs> | null
  }


  /**
   * Model Kompetensi
   */

  export type AggregateKompetensi = {
    _count: KompetensiCountAggregateOutputType | null
    _min: KompetensiMinAggregateOutputType | null
    _max: KompetensiMaxAggregateOutputType | null
  }

  export type KompetensiMinAggregateOutputType = {
    kuk: string | null
    detail: string | null
    kompetensi: string | null
    kategori: string | null
  }

  export type KompetensiMaxAggregateOutputType = {
    kuk: string | null
    detail: string | null
    kompetensi: string | null
    kategori: string | null
  }

  export type KompetensiCountAggregateOutputType = {
    kuk: number
    detail: number
    kompetensi: number
    kategori: number
    _all: number
  }


  export type KompetensiMinAggregateInputType = {
    kuk?: true
    detail?: true
    kompetensi?: true
    kategori?: true
  }

  export type KompetensiMaxAggregateInputType = {
    kuk?: true
    detail?: true
    kompetensi?: true
    kategori?: true
  }

  export type KompetensiCountAggregateInputType = {
    kuk?: true
    detail?: true
    kompetensi?: true
    kategori?: true
    _all?: true
  }

  export type KompetensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kompetensi to aggregate.
     */
    where?: KompetensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetensis to fetch.
     */
    orderBy?: KompetensiOrderByWithRelationInput | KompetensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KompetensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kompetensis
    **/
    _count?: true | KompetensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KompetensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KompetensiMaxAggregateInputType
  }

  export type GetKompetensiAggregateType<T extends KompetensiAggregateArgs> = {
        [P in keyof T & keyof AggregateKompetensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKompetensi[P]>
      : GetScalarType<T[P], AggregateKompetensi[P]>
  }




  export type KompetensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KompetensiWhereInput
    orderBy?: KompetensiOrderByWithAggregationInput | KompetensiOrderByWithAggregationInput[]
    by: KompetensiScalarFieldEnum[] | KompetensiScalarFieldEnum
    having?: KompetensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KompetensiCountAggregateInputType | true
    _min?: KompetensiMinAggregateInputType
    _max?: KompetensiMaxAggregateInputType
  }

  export type KompetensiGroupByOutputType = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
    _count: KompetensiCountAggregateOutputType | null
    _min: KompetensiMinAggregateOutputType | null
    _max: KompetensiMaxAggregateOutputType | null
  }

  type GetKompetensiGroupByPayload<T extends KompetensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KompetensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KompetensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KompetensiGroupByOutputType[P]>
            : GetScalarType<T[P], KompetensiGroupByOutputType[P]>
        }
      >
    >


  export type KompetensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kuk?: boolean
    detail?: boolean
    kompetensi?: boolean
    kategori?: boolean
    asesmenMandiri?: boolean | Kompetensi$asesmenMandiriArgs<ExtArgs>
    _count?: boolean | KompetensiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kompetensi"]>



  export type KompetensiSelectScalar = {
    kuk?: boolean
    detail?: boolean
    kompetensi?: boolean
    kategori?: boolean
  }

  export type KompetensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kuk" | "detail" | "kompetensi" | "kategori", ExtArgs["result"]["kompetensi"]>
  export type KompetensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asesmenMandiri?: boolean | Kompetensi$asesmenMandiriArgs<ExtArgs>
    _count?: boolean | KompetensiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KompetensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kompetensi"
    objects: {
      asesmenMandiri: Prisma.$AsesmenMandiriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kuk: string
      detail: string
      kompetensi: string
      kategori: string
    }, ExtArgs["result"]["kompetensi"]>
    composites: {}
  }

  type KompetensiGetPayload<S extends boolean | null | undefined | KompetensiDefaultArgs> = $Result.GetResult<Prisma.$KompetensiPayload, S>

  type KompetensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KompetensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KompetensiCountAggregateInputType | true
    }

  export interface KompetensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kompetensi'], meta: { name: 'Kompetensi' } }
    /**
     * Find zero or one Kompetensi that matches the filter.
     * @param {KompetensiFindUniqueArgs} args - Arguments to find a Kompetensi
     * @example
     * // Get one Kompetensi
     * const kompetensi = await prisma.kompetensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KompetensiFindUniqueArgs>(args: SelectSubset<T, KompetensiFindUniqueArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kompetensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KompetensiFindUniqueOrThrowArgs} args - Arguments to find a Kompetensi
     * @example
     * // Get one Kompetensi
     * const kompetensi = await prisma.kompetensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KompetensiFindUniqueOrThrowArgs>(args: SelectSubset<T, KompetensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kompetensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiFindFirstArgs} args - Arguments to find a Kompetensi
     * @example
     * // Get one Kompetensi
     * const kompetensi = await prisma.kompetensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KompetensiFindFirstArgs>(args?: SelectSubset<T, KompetensiFindFirstArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kompetensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiFindFirstOrThrowArgs} args - Arguments to find a Kompetensi
     * @example
     * // Get one Kompetensi
     * const kompetensi = await prisma.kompetensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KompetensiFindFirstOrThrowArgs>(args?: SelectSubset<T, KompetensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kompetensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kompetensis
     * const kompetensis = await prisma.kompetensi.findMany()
     * 
     * // Get first 10 Kompetensis
     * const kompetensis = await prisma.kompetensi.findMany({ take: 10 })
     * 
     * // Only select the `kuk`
     * const kompetensiWithKukOnly = await prisma.kompetensi.findMany({ select: { kuk: true } })
     * 
     */
    findMany<T extends KompetensiFindManyArgs>(args?: SelectSubset<T, KompetensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kompetensi.
     * @param {KompetensiCreateArgs} args - Arguments to create a Kompetensi.
     * @example
     * // Create one Kompetensi
     * const Kompetensi = await prisma.kompetensi.create({
     *   data: {
     *     // ... data to create a Kompetensi
     *   }
     * })
     * 
     */
    create<T extends KompetensiCreateArgs>(args: SelectSubset<T, KompetensiCreateArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kompetensis.
     * @param {KompetensiCreateManyArgs} args - Arguments to create many Kompetensis.
     * @example
     * // Create many Kompetensis
     * const kompetensi = await prisma.kompetensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KompetensiCreateManyArgs>(args?: SelectSubset<T, KompetensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kompetensi.
     * @param {KompetensiDeleteArgs} args - Arguments to delete one Kompetensi.
     * @example
     * // Delete one Kompetensi
     * const Kompetensi = await prisma.kompetensi.delete({
     *   where: {
     *     // ... filter to delete one Kompetensi
     *   }
     * })
     * 
     */
    delete<T extends KompetensiDeleteArgs>(args: SelectSubset<T, KompetensiDeleteArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kompetensi.
     * @param {KompetensiUpdateArgs} args - Arguments to update one Kompetensi.
     * @example
     * // Update one Kompetensi
     * const kompetensi = await prisma.kompetensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KompetensiUpdateArgs>(args: SelectSubset<T, KompetensiUpdateArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kompetensis.
     * @param {KompetensiDeleteManyArgs} args - Arguments to filter Kompetensis to delete.
     * @example
     * // Delete a few Kompetensis
     * const { count } = await prisma.kompetensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KompetensiDeleteManyArgs>(args?: SelectSubset<T, KompetensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kompetensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kompetensis
     * const kompetensi = await prisma.kompetensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KompetensiUpdateManyArgs>(args: SelectSubset<T, KompetensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kompetensi.
     * @param {KompetensiUpsertArgs} args - Arguments to update or create a Kompetensi.
     * @example
     * // Update or create a Kompetensi
     * const kompetensi = await prisma.kompetensi.upsert({
     *   create: {
     *     // ... data to create a Kompetensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kompetensi we want to update
     *   }
     * })
     */
    upsert<T extends KompetensiUpsertArgs>(args: SelectSubset<T, KompetensiUpsertArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kompetensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiCountArgs} args - Arguments to filter Kompetensis to count.
     * @example
     * // Count the number of Kompetensis
     * const count = await prisma.kompetensi.count({
     *   where: {
     *     // ... the filter for the Kompetensis we want to count
     *   }
     * })
    **/
    count<T extends KompetensiCountArgs>(
      args?: Subset<T, KompetensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KompetensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kompetensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KompetensiAggregateArgs>(args: Subset<T, KompetensiAggregateArgs>): Prisma.PrismaPromise<GetKompetensiAggregateType<T>>

    /**
     * Group by Kompetensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiGroupByArgs} args - Group by arguments.
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
      T extends KompetensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KompetensiGroupByArgs['orderBy'] }
        : { orderBy?: KompetensiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KompetensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKompetensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kompetensi model
   */
  readonly fields: KompetensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kompetensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KompetensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asesmenMandiri<T extends Kompetensi$asesmenMandiriArgs<ExtArgs> = {}>(args?: Subset<T, Kompetensi$asesmenMandiriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kompetensi model
   */
  interface KompetensiFieldRefs {
    readonly kuk: FieldRef<"Kompetensi", 'String'>
    readonly detail: FieldRef<"Kompetensi", 'String'>
    readonly kompetensi: FieldRef<"Kompetensi", 'String'>
    readonly kategori: FieldRef<"Kompetensi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kompetensi findUnique
   */
  export type KompetensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter, which Kompetensi to fetch.
     */
    where: KompetensiWhereUniqueInput
  }

  /**
   * Kompetensi findUniqueOrThrow
   */
  export type KompetensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter, which Kompetensi to fetch.
     */
    where: KompetensiWhereUniqueInput
  }

  /**
   * Kompetensi findFirst
   */
  export type KompetensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter, which Kompetensi to fetch.
     */
    where?: KompetensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetensis to fetch.
     */
    orderBy?: KompetensiOrderByWithRelationInput | KompetensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kompetensis.
     */
    cursor?: KompetensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kompetensis.
     */
    distinct?: KompetensiScalarFieldEnum | KompetensiScalarFieldEnum[]
  }

  /**
   * Kompetensi findFirstOrThrow
   */
  export type KompetensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter, which Kompetensi to fetch.
     */
    where?: KompetensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetensis to fetch.
     */
    orderBy?: KompetensiOrderByWithRelationInput | KompetensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kompetensis.
     */
    cursor?: KompetensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kompetensis.
     */
    distinct?: KompetensiScalarFieldEnum | KompetensiScalarFieldEnum[]
  }

  /**
   * Kompetensi findMany
   */
  export type KompetensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter, which Kompetensis to fetch.
     */
    where?: KompetensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetensis to fetch.
     */
    orderBy?: KompetensiOrderByWithRelationInput | KompetensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kompetensis.
     */
    cursor?: KompetensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetensis.
     */
    skip?: number
    distinct?: KompetensiScalarFieldEnum | KompetensiScalarFieldEnum[]
  }

  /**
   * Kompetensi create
   */
  export type KompetensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Kompetensi.
     */
    data: XOR<KompetensiCreateInput, KompetensiUncheckedCreateInput>
  }

  /**
   * Kompetensi createMany
   */
  export type KompetensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kompetensis.
     */
    data: KompetensiCreateManyInput | KompetensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kompetensi update
   */
  export type KompetensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Kompetensi.
     */
    data: XOR<KompetensiUpdateInput, KompetensiUncheckedUpdateInput>
    /**
     * Choose, which Kompetensi to update.
     */
    where: KompetensiWhereUniqueInput
  }

  /**
   * Kompetensi updateMany
   */
  export type KompetensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kompetensis.
     */
    data: XOR<KompetensiUpdateManyMutationInput, KompetensiUncheckedUpdateManyInput>
    /**
     * Filter which Kompetensis to update
     */
    where?: KompetensiWhereInput
    /**
     * Limit how many Kompetensis to update.
     */
    limit?: number
  }

  /**
   * Kompetensi upsert
   */
  export type KompetensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Kompetensi to update in case it exists.
     */
    where: KompetensiWhereUniqueInput
    /**
     * In case the Kompetensi found by the `where` argument doesn't exist, create a new Kompetensi with this data.
     */
    create: XOR<KompetensiCreateInput, KompetensiUncheckedCreateInput>
    /**
     * In case the Kompetensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KompetensiUpdateInput, KompetensiUncheckedUpdateInput>
  }

  /**
   * Kompetensi delete
   */
  export type KompetensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
    /**
     * Filter which Kompetensi to delete.
     */
    where: KompetensiWhereUniqueInput
  }

  /**
   * Kompetensi deleteMany
   */
  export type KompetensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kompetensis to delete
     */
    where?: KompetensiWhereInput
    /**
     * Limit how many Kompetensis to delete.
     */
    limit?: number
  }

  /**
   * Kompetensi.asesmenMandiri
   */
  export type Kompetensi$asesmenMandiriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    where?: AsesmenMandiriWhereInput
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    cursor?: AsesmenMandiriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsesmenMandiriScalarFieldEnum | AsesmenMandiriScalarFieldEnum[]
  }

  /**
   * Kompetensi without action
   */
  export type KompetensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetensi
     */
    select?: KompetensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetensi
     */
    omit?: KompetensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetensiInclude<ExtArgs> | null
  }


  /**
   * Model AsesmenMandiri
   */

  export type AggregateAsesmenMandiri = {
    _count: AsesmenMandiriCountAggregateOutputType | null
    _min: AsesmenMandiriMinAggregateOutputType | null
    _max: AsesmenMandiriMaxAggregateOutputType | null
  }

  export type AsesmenMandiriMinAggregateOutputType = {
    nip: string | null
    kuk: string | null
    asesmen: string | null
  }

  export type AsesmenMandiriMaxAggregateOutputType = {
    nip: string | null
    kuk: string | null
    asesmen: string | null
  }

  export type AsesmenMandiriCountAggregateOutputType = {
    nip: number
    kuk: number
    asesmen: number
    _all: number
  }


  export type AsesmenMandiriMinAggregateInputType = {
    nip?: true
    kuk?: true
    asesmen?: true
  }

  export type AsesmenMandiriMaxAggregateInputType = {
    nip?: true
    kuk?: true
    asesmen?: true
  }

  export type AsesmenMandiriCountAggregateInputType = {
    nip?: true
    kuk?: true
    asesmen?: true
    _all?: true
  }

  export type AsesmenMandiriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsesmenMandiri to aggregate.
     */
    where?: AsesmenMandiriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsesmenMandiris to fetch.
     */
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsesmenMandiriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsesmenMandiris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsesmenMandiris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsesmenMandiris
    **/
    _count?: true | AsesmenMandiriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsesmenMandiriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsesmenMandiriMaxAggregateInputType
  }

  export type GetAsesmenMandiriAggregateType<T extends AsesmenMandiriAggregateArgs> = {
        [P in keyof T & keyof AggregateAsesmenMandiri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsesmenMandiri[P]>
      : GetScalarType<T[P], AggregateAsesmenMandiri[P]>
  }




  export type AsesmenMandiriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsesmenMandiriWhereInput
    orderBy?: AsesmenMandiriOrderByWithAggregationInput | AsesmenMandiriOrderByWithAggregationInput[]
    by: AsesmenMandiriScalarFieldEnum[] | AsesmenMandiriScalarFieldEnum
    having?: AsesmenMandiriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsesmenMandiriCountAggregateInputType | true
    _min?: AsesmenMandiriMinAggregateInputType
    _max?: AsesmenMandiriMaxAggregateInputType
  }

  export type AsesmenMandiriGroupByOutputType = {
    nip: string
    kuk: string
    asesmen: string
    _count: AsesmenMandiriCountAggregateOutputType | null
    _min: AsesmenMandiriMinAggregateOutputType | null
    _max: AsesmenMandiriMaxAggregateOutputType | null
  }

  type GetAsesmenMandiriGroupByPayload<T extends AsesmenMandiriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsesmenMandiriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsesmenMandiriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsesmenMandiriGroupByOutputType[P]>
            : GetScalarType<T[P], AsesmenMandiriGroupByOutputType[P]>
        }
      >
    >


  export type AsesmenMandiriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    kuk?: boolean
    asesmen?: boolean
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
    kompetensi?: boolean | KompetensiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asesmenMandiri"]>



  export type AsesmenMandiriSelectScalar = {
    nip?: boolean
    kuk?: boolean
    asesmen?: boolean
  }

  export type AsesmenMandiriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "kuk" | "asesmen", ExtArgs["result"]["asesmenMandiri"]>
  export type AsesmenMandiriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datapribadi?: boolean | DatapribadiDefaultArgs<ExtArgs>
    kompetensi?: boolean | KompetensiDefaultArgs<ExtArgs>
  }

  export type $AsesmenMandiriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsesmenMandiri"
    objects: {
      datapribadi: Prisma.$DatapribadiPayload<ExtArgs>
      kompetensi: Prisma.$KompetensiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      kuk: string
      asesmen: string
    }, ExtArgs["result"]["asesmenMandiri"]>
    composites: {}
  }

  type AsesmenMandiriGetPayload<S extends boolean | null | undefined | AsesmenMandiriDefaultArgs> = $Result.GetResult<Prisma.$AsesmenMandiriPayload, S>

  type AsesmenMandiriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsesmenMandiriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsesmenMandiriCountAggregateInputType | true
    }

  export interface AsesmenMandiriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsesmenMandiri'], meta: { name: 'AsesmenMandiri' } }
    /**
     * Find zero or one AsesmenMandiri that matches the filter.
     * @param {AsesmenMandiriFindUniqueArgs} args - Arguments to find a AsesmenMandiri
     * @example
     * // Get one AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsesmenMandiriFindUniqueArgs>(args: SelectSubset<T, AsesmenMandiriFindUniqueArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsesmenMandiri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsesmenMandiriFindUniqueOrThrowArgs} args - Arguments to find a AsesmenMandiri
     * @example
     * // Get one AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsesmenMandiriFindUniqueOrThrowArgs>(args: SelectSubset<T, AsesmenMandiriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsesmenMandiri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriFindFirstArgs} args - Arguments to find a AsesmenMandiri
     * @example
     * // Get one AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsesmenMandiriFindFirstArgs>(args?: SelectSubset<T, AsesmenMandiriFindFirstArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsesmenMandiri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriFindFirstOrThrowArgs} args - Arguments to find a AsesmenMandiri
     * @example
     * // Get one AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsesmenMandiriFindFirstOrThrowArgs>(args?: SelectSubset<T, AsesmenMandiriFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsesmenMandiris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsesmenMandiris
     * const asesmenMandiris = await prisma.asesmenMandiri.findMany()
     * 
     * // Get first 10 AsesmenMandiris
     * const asesmenMandiris = await prisma.asesmenMandiri.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const asesmenMandiriWithNipOnly = await prisma.asesmenMandiri.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends AsesmenMandiriFindManyArgs>(args?: SelectSubset<T, AsesmenMandiriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsesmenMandiri.
     * @param {AsesmenMandiriCreateArgs} args - Arguments to create a AsesmenMandiri.
     * @example
     * // Create one AsesmenMandiri
     * const AsesmenMandiri = await prisma.asesmenMandiri.create({
     *   data: {
     *     // ... data to create a AsesmenMandiri
     *   }
     * })
     * 
     */
    create<T extends AsesmenMandiriCreateArgs>(args: SelectSubset<T, AsesmenMandiriCreateArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsesmenMandiris.
     * @param {AsesmenMandiriCreateManyArgs} args - Arguments to create many AsesmenMandiris.
     * @example
     * // Create many AsesmenMandiris
     * const asesmenMandiri = await prisma.asesmenMandiri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsesmenMandiriCreateManyArgs>(args?: SelectSubset<T, AsesmenMandiriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AsesmenMandiri.
     * @param {AsesmenMandiriDeleteArgs} args - Arguments to delete one AsesmenMandiri.
     * @example
     * // Delete one AsesmenMandiri
     * const AsesmenMandiri = await prisma.asesmenMandiri.delete({
     *   where: {
     *     // ... filter to delete one AsesmenMandiri
     *   }
     * })
     * 
     */
    delete<T extends AsesmenMandiriDeleteArgs>(args: SelectSubset<T, AsesmenMandiriDeleteArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsesmenMandiri.
     * @param {AsesmenMandiriUpdateArgs} args - Arguments to update one AsesmenMandiri.
     * @example
     * // Update one AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsesmenMandiriUpdateArgs>(args: SelectSubset<T, AsesmenMandiriUpdateArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsesmenMandiris.
     * @param {AsesmenMandiriDeleteManyArgs} args - Arguments to filter AsesmenMandiris to delete.
     * @example
     * // Delete a few AsesmenMandiris
     * const { count } = await prisma.asesmenMandiri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsesmenMandiriDeleteManyArgs>(args?: SelectSubset<T, AsesmenMandiriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsesmenMandiris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsesmenMandiris
     * const asesmenMandiri = await prisma.asesmenMandiri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsesmenMandiriUpdateManyArgs>(args: SelectSubset<T, AsesmenMandiriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AsesmenMandiri.
     * @param {AsesmenMandiriUpsertArgs} args - Arguments to update or create a AsesmenMandiri.
     * @example
     * // Update or create a AsesmenMandiri
     * const asesmenMandiri = await prisma.asesmenMandiri.upsert({
     *   create: {
     *     // ... data to create a AsesmenMandiri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsesmenMandiri we want to update
     *   }
     * })
     */
    upsert<T extends AsesmenMandiriUpsertArgs>(args: SelectSubset<T, AsesmenMandiriUpsertArgs<ExtArgs>>): Prisma__AsesmenMandiriClient<$Result.GetResult<Prisma.$AsesmenMandiriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsesmenMandiris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriCountArgs} args - Arguments to filter AsesmenMandiris to count.
     * @example
     * // Count the number of AsesmenMandiris
     * const count = await prisma.asesmenMandiri.count({
     *   where: {
     *     // ... the filter for the AsesmenMandiris we want to count
     *   }
     * })
    **/
    count<T extends AsesmenMandiriCountArgs>(
      args?: Subset<T, AsesmenMandiriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsesmenMandiriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsesmenMandiri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsesmenMandiriAggregateArgs>(args: Subset<T, AsesmenMandiriAggregateArgs>): Prisma.PrismaPromise<GetAsesmenMandiriAggregateType<T>>

    /**
     * Group by AsesmenMandiri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesmenMandiriGroupByArgs} args - Group by arguments.
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
      T extends AsesmenMandiriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsesmenMandiriGroupByArgs['orderBy'] }
        : { orderBy?: AsesmenMandiriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsesmenMandiriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsesmenMandiriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsesmenMandiri model
   */
  readonly fields: AsesmenMandiriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsesmenMandiri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsesmenMandiriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datapribadi<T extends DatapribadiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatapribadiDefaultArgs<ExtArgs>>): Prisma__DatapribadiClient<$Result.GetResult<Prisma.$DatapribadiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kompetensi<T extends KompetensiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KompetensiDefaultArgs<ExtArgs>>): Prisma__KompetensiClient<$Result.GetResult<Prisma.$KompetensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AsesmenMandiri model
   */
  interface AsesmenMandiriFieldRefs {
    readonly nip: FieldRef<"AsesmenMandiri", 'String'>
    readonly kuk: FieldRef<"AsesmenMandiri", 'String'>
    readonly asesmen: FieldRef<"AsesmenMandiri", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AsesmenMandiri findUnique
   */
  export type AsesmenMandiriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter, which AsesmenMandiri to fetch.
     */
    where: AsesmenMandiriWhereUniqueInput
  }

  /**
   * AsesmenMandiri findUniqueOrThrow
   */
  export type AsesmenMandiriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter, which AsesmenMandiri to fetch.
     */
    where: AsesmenMandiriWhereUniqueInput
  }

  /**
   * AsesmenMandiri findFirst
   */
  export type AsesmenMandiriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter, which AsesmenMandiri to fetch.
     */
    where?: AsesmenMandiriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsesmenMandiris to fetch.
     */
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsesmenMandiris.
     */
    cursor?: AsesmenMandiriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsesmenMandiris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsesmenMandiris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsesmenMandiris.
     */
    distinct?: AsesmenMandiriScalarFieldEnum | AsesmenMandiriScalarFieldEnum[]
  }

  /**
   * AsesmenMandiri findFirstOrThrow
   */
  export type AsesmenMandiriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter, which AsesmenMandiri to fetch.
     */
    where?: AsesmenMandiriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsesmenMandiris to fetch.
     */
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsesmenMandiris.
     */
    cursor?: AsesmenMandiriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsesmenMandiris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsesmenMandiris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsesmenMandiris.
     */
    distinct?: AsesmenMandiriScalarFieldEnum | AsesmenMandiriScalarFieldEnum[]
  }

  /**
   * AsesmenMandiri findMany
   */
  export type AsesmenMandiriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter, which AsesmenMandiris to fetch.
     */
    where?: AsesmenMandiriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsesmenMandiris to fetch.
     */
    orderBy?: AsesmenMandiriOrderByWithRelationInput | AsesmenMandiriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsesmenMandiris.
     */
    cursor?: AsesmenMandiriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsesmenMandiris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsesmenMandiris.
     */
    skip?: number
    distinct?: AsesmenMandiriScalarFieldEnum | AsesmenMandiriScalarFieldEnum[]
  }

  /**
   * AsesmenMandiri create
   */
  export type AsesmenMandiriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * The data needed to create a AsesmenMandiri.
     */
    data: XOR<AsesmenMandiriCreateInput, AsesmenMandiriUncheckedCreateInput>
  }

  /**
   * AsesmenMandiri createMany
   */
  export type AsesmenMandiriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsesmenMandiris.
     */
    data: AsesmenMandiriCreateManyInput | AsesmenMandiriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsesmenMandiri update
   */
  export type AsesmenMandiriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * The data needed to update a AsesmenMandiri.
     */
    data: XOR<AsesmenMandiriUpdateInput, AsesmenMandiriUncheckedUpdateInput>
    /**
     * Choose, which AsesmenMandiri to update.
     */
    where: AsesmenMandiriWhereUniqueInput
  }

  /**
   * AsesmenMandiri updateMany
   */
  export type AsesmenMandiriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsesmenMandiris.
     */
    data: XOR<AsesmenMandiriUpdateManyMutationInput, AsesmenMandiriUncheckedUpdateManyInput>
    /**
     * Filter which AsesmenMandiris to update
     */
    where?: AsesmenMandiriWhereInput
    /**
     * Limit how many AsesmenMandiris to update.
     */
    limit?: number
  }

  /**
   * AsesmenMandiri upsert
   */
  export type AsesmenMandiriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * The filter to search for the AsesmenMandiri to update in case it exists.
     */
    where: AsesmenMandiriWhereUniqueInput
    /**
     * In case the AsesmenMandiri found by the `where` argument doesn't exist, create a new AsesmenMandiri with this data.
     */
    create: XOR<AsesmenMandiriCreateInput, AsesmenMandiriUncheckedCreateInput>
    /**
     * In case the AsesmenMandiri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsesmenMandiriUpdateInput, AsesmenMandiriUncheckedUpdateInput>
  }

  /**
   * AsesmenMandiri delete
   */
  export type AsesmenMandiriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
    /**
     * Filter which AsesmenMandiri to delete.
     */
    where: AsesmenMandiriWhereUniqueInput
  }

  /**
   * AsesmenMandiri deleteMany
   */
  export type AsesmenMandiriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsesmenMandiris to delete
     */
    where?: AsesmenMandiriWhereInput
    /**
     * Limit how many AsesmenMandiris to delete.
     */
    limit?: number
  }

  /**
   * AsesmenMandiri without action
   */
  export type AsesmenMandiriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesmenMandiri
     */
    select?: AsesmenMandiriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsesmenMandiri
     */
    omit?: AsesmenMandiriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesmenMandiriInclude<ExtArgs> | null
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


  export const DatapribadiScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tempatLahir: 'tempatLahir',
    tanggalLahir: 'tanggalLahir',
    jenisKelamin: 'jenisKelamin',
    phone: 'phone',
    email: 'email',
    alamat: 'alamat'
  };

  export type DatapribadiScalarFieldEnum = (typeof DatapribadiScalarFieldEnum)[keyof typeof DatapribadiScalarFieldEnum]


  export const DataPekerjaanScalarFieldEnum: {
    nip: 'nip',
    namaTempatBekerja: 'namaTempatBekerja',
    alamatPekerjaan: 'alamatPekerjaan',
    noStr: 'noStr',
    tanggalStr: 'tanggalStr',
    noSip: 'noSip',
    tanggalSip: 'tanggalSip',
    fileStr: 'fileStr',
    fileSik: 'fileSik'
  };

  export type DataPekerjaanScalarFieldEnum = (typeof DataPekerjaanScalarFieldEnum)[keyof typeof DataPekerjaanScalarFieldEnum]


  export const DataPendidikanScalarFieldEnum: {
    nip: 'nip',
    universitas: 'universitas',
    jurusan: 'jurusan',
    noIjazah: 'noIjazah',
    tanggalIjazah: 'tanggalIjazah',
    fileIjazah: 'fileIjazah'
  };

  export type DataPendidikanScalarFieldEnum = (typeof DataPendidikanScalarFieldEnum)[keyof typeof DataPendidikanScalarFieldEnum]


  export const KompetensiScalarFieldEnum: {
    kuk: 'kuk',
    detail: 'detail',
    kompetensi: 'kompetensi',
    kategori: 'kategori'
  };

  export type KompetensiScalarFieldEnum = (typeof KompetensiScalarFieldEnum)[keyof typeof KompetensiScalarFieldEnum]


  export const AsesmenMandiriScalarFieldEnum: {
    nip: 'nip',
    kuk: 'kuk',
    asesmen: 'asesmen'
  };

  export type AsesmenMandiriScalarFieldEnum = (typeof AsesmenMandiriScalarFieldEnum)[keyof typeof AsesmenMandiriScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DatapribadiOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    tempatLahir: 'tempatLahir',
    jenisKelamin: 'jenisKelamin',
    phone: 'phone',
    email: 'email',
    alamat: 'alamat'
  };

  export type DatapribadiOrderByRelevanceFieldEnum = (typeof DatapribadiOrderByRelevanceFieldEnum)[keyof typeof DatapribadiOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DataPekerjaanOrderByRelevanceFieldEnum: {
    nip: 'nip',
    namaTempatBekerja: 'namaTempatBekerja',
    alamatPekerjaan: 'alamatPekerjaan',
    noStr: 'noStr',
    noSip: 'noSip',
    fileStr: 'fileStr',
    fileSik: 'fileSik'
  };

  export type DataPekerjaanOrderByRelevanceFieldEnum = (typeof DataPekerjaanOrderByRelevanceFieldEnum)[keyof typeof DataPekerjaanOrderByRelevanceFieldEnum]


  export const DataPendidikanOrderByRelevanceFieldEnum: {
    nip: 'nip',
    universitas: 'universitas',
    jurusan: 'jurusan',
    noIjazah: 'noIjazah',
    fileIjazah: 'fileIjazah'
  };

  export type DataPendidikanOrderByRelevanceFieldEnum = (typeof DataPendidikanOrderByRelevanceFieldEnum)[keyof typeof DataPendidikanOrderByRelevanceFieldEnum]


  export const KompetensiOrderByRelevanceFieldEnum: {
    kuk: 'kuk',
    detail: 'detail',
    kompetensi: 'kompetensi',
    kategori: 'kategori'
  };

  export type KompetensiOrderByRelevanceFieldEnum = (typeof KompetensiOrderByRelevanceFieldEnum)[keyof typeof KompetensiOrderByRelevanceFieldEnum]


  export const AsesmenMandiriOrderByRelevanceFieldEnum: {
    nip: 'nip',
    kuk: 'kuk',
    asesmen: 'asesmen'
  };

  export type AsesmenMandiriOrderByRelevanceFieldEnum = (typeof AsesmenMandiriOrderByRelevanceFieldEnum)[keyof typeof AsesmenMandiriOrderByRelevanceFieldEnum]


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


  export type DatapribadiWhereInput = {
    AND?: DatapribadiWhereInput | DatapribadiWhereInput[]
    OR?: DatapribadiWhereInput[]
    NOT?: DatapribadiWhereInput | DatapribadiWhereInput[]
    nip?: StringFilter<"Datapribadi"> | string
    nama?: StringFilter<"Datapribadi"> | string
    tempatLahir?: StringFilter<"Datapribadi"> | string
    tanggalLahir?: DateTimeFilter<"Datapribadi"> | Date | string
    jenisKelamin?: StringFilter<"Datapribadi"> | string
    phone?: StringFilter<"Datapribadi"> | string
    email?: StringFilter<"Datapribadi"> | string
    alamat?: StringFilter<"Datapribadi"> | string
    pekerjaan?: XOR<DataPekerjaanNullableScalarRelationFilter, DataPekerjaanWhereInput> | null
    pendidikan?: XOR<DataPendidikanNullableScalarRelationFilter, DataPendidikanWhereInput> | null
    asesmenMandiri?: AsesmenMandiriListRelationFilter
  }

  export type DatapribadiOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    pekerjaan?: DataPekerjaanOrderByWithRelationInput
    pendidikan?: DataPendidikanOrderByWithRelationInput
    asesmenMandiri?: AsesmenMandiriOrderByRelationAggregateInput
    _relevance?: DatapribadiOrderByRelevanceInput
  }

  export type DatapribadiWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: DatapribadiWhereInput | DatapribadiWhereInput[]
    OR?: DatapribadiWhereInput[]
    NOT?: DatapribadiWhereInput | DatapribadiWhereInput[]
    nama?: StringFilter<"Datapribadi"> | string
    tempatLahir?: StringFilter<"Datapribadi"> | string
    tanggalLahir?: DateTimeFilter<"Datapribadi"> | Date | string
    jenisKelamin?: StringFilter<"Datapribadi"> | string
    phone?: StringFilter<"Datapribadi"> | string
    email?: StringFilter<"Datapribadi"> | string
    alamat?: StringFilter<"Datapribadi"> | string
    pekerjaan?: XOR<DataPekerjaanNullableScalarRelationFilter, DataPekerjaanWhereInput> | null
    pendidikan?: XOR<DataPendidikanNullableScalarRelationFilter, DataPendidikanWhereInput> | null
    asesmenMandiri?: AsesmenMandiriListRelationFilter
  }, "nip">

  export type DatapribadiOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    _count?: DatapribadiCountOrderByAggregateInput
    _max?: DatapribadiMaxOrderByAggregateInput
    _min?: DatapribadiMinOrderByAggregateInput
  }

  export type DatapribadiScalarWhereWithAggregatesInput = {
    AND?: DatapribadiScalarWhereWithAggregatesInput | DatapribadiScalarWhereWithAggregatesInput[]
    OR?: DatapribadiScalarWhereWithAggregatesInput[]
    NOT?: DatapribadiScalarWhereWithAggregatesInput | DatapribadiScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"Datapribadi"> | string
    nama?: StringWithAggregatesFilter<"Datapribadi"> | string
    tempatLahir?: StringWithAggregatesFilter<"Datapribadi"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"Datapribadi"> | Date | string
    jenisKelamin?: StringWithAggregatesFilter<"Datapribadi"> | string
    phone?: StringWithAggregatesFilter<"Datapribadi"> | string
    email?: StringWithAggregatesFilter<"Datapribadi"> | string
    alamat?: StringWithAggregatesFilter<"Datapribadi"> | string
  }

  export type DataPekerjaanWhereInput = {
    AND?: DataPekerjaanWhereInput | DataPekerjaanWhereInput[]
    OR?: DataPekerjaanWhereInput[]
    NOT?: DataPekerjaanWhereInput | DataPekerjaanWhereInput[]
    nip?: StringFilter<"DataPekerjaan"> | string
    namaTempatBekerja?: StringFilter<"DataPekerjaan"> | string
    alamatPekerjaan?: StringFilter<"DataPekerjaan"> | string
    noStr?: StringFilter<"DataPekerjaan"> | string
    tanggalStr?: DateTimeFilter<"DataPekerjaan"> | Date | string
    noSip?: StringFilter<"DataPekerjaan"> | string
    tanggalSip?: DateTimeFilter<"DataPekerjaan"> | Date | string
    fileStr?: StringNullableFilter<"DataPekerjaan"> | string | null
    fileSik?: StringNullableFilter<"DataPekerjaan"> | string | null
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
  }

  export type DataPekerjaanOrderByWithRelationInput = {
    nip?: SortOrder
    namaTempatBekerja?: SortOrder
    alamatPekerjaan?: SortOrder
    noStr?: SortOrder
    tanggalStr?: SortOrder
    noSip?: SortOrder
    tanggalSip?: SortOrder
    fileStr?: SortOrderInput | SortOrder
    fileSik?: SortOrderInput | SortOrder
    datapribadi?: DatapribadiOrderByWithRelationInput
    _relevance?: DataPekerjaanOrderByRelevanceInput
  }

  export type DataPekerjaanWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: DataPekerjaanWhereInput | DataPekerjaanWhereInput[]
    OR?: DataPekerjaanWhereInput[]
    NOT?: DataPekerjaanWhereInput | DataPekerjaanWhereInput[]
    namaTempatBekerja?: StringFilter<"DataPekerjaan"> | string
    alamatPekerjaan?: StringFilter<"DataPekerjaan"> | string
    noStr?: StringFilter<"DataPekerjaan"> | string
    tanggalStr?: DateTimeFilter<"DataPekerjaan"> | Date | string
    noSip?: StringFilter<"DataPekerjaan"> | string
    tanggalSip?: DateTimeFilter<"DataPekerjaan"> | Date | string
    fileStr?: StringNullableFilter<"DataPekerjaan"> | string | null
    fileSik?: StringNullableFilter<"DataPekerjaan"> | string | null
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
  }, "nip">

  export type DataPekerjaanOrderByWithAggregationInput = {
    nip?: SortOrder
    namaTempatBekerja?: SortOrder
    alamatPekerjaan?: SortOrder
    noStr?: SortOrder
    tanggalStr?: SortOrder
    noSip?: SortOrder
    tanggalSip?: SortOrder
    fileStr?: SortOrderInput | SortOrder
    fileSik?: SortOrderInput | SortOrder
    _count?: DataPekerjaanCountOrderByAggregateInput
    _max?: DataPekerjaanMaxOrderByAggregateInput
    _min?: DataPekerjaanMinOrderByAggregateInput
  }

  export type DataPekerjaanScalarWhereWithAggregatesInput = {
    AND?: DataPekerjaanScalarWhereWithAggregatesInput | DataPekerjaanScalarWhereWithAggregatesInput[]
    OR?: DataPekerjaanScalarWhereWithAggregatesInput[]
    NOT?: DataPekerjaanScalarWhereWithAggregatesInput | DataPekerjaanScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"DataPekerjaan"> | string
    namaTempatBekerja?: StringWithAggregatesFilter<"DataPekerjaan"> | string
    alamatPekerjaan?: StringWithAggregatesFilter<"DataPekerjaan"> | string
    noStr?: StringWithAggregatesFilter<"DataPekerjaan"> | string
    tanggalStr?: DateTimeWithAggregatesFilter<"DataPekerjaan"> | Date | string
    noSip?: StringWithAggregatesFilter<"DataPekerjaan"> | string
    tanggalSip?: DateTimeWithAggregatesFilter<"DataPekerjaan"> | Date | string
    fileStr?: StringNullableWithAggregatesFilter<"DataPekerjaan"> | string | null
    fileSik?: StringNullableWithAggregatesFilter<"DataPekerjaan"> | string | null
  }

  export type DataPendidikanWhereInput = {
    AND?: DataPendidikanWhereInput | DataPendidikanWhereInput[]
    OR?: DataPendidikanWhereInput[]
    NOT?: DataPendidikanWhereInput | DataPendidikanWhereInput[]
    nip?: StringFilter<"DataPendidikan"> | string
    universitas?: StringFilter<"DataPendidikan"> | string
    jurusan?: StringFilter<"DataPendidikan"> | string
    noIjazah?: StringFilter<"DataPendidikan"> | string
    tanggalIjazah?: DateTimeFilter<"DataPendidikan"> | Date | string
    fileIjazah?: StringNullableFilter<"DataPendidikan"> | string | null
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
  }

  export type DataPendidikanOrderByWithRelationInput = {
    nip?: SortOrder
    universitas?: SortOrder
    jurusan?: SortOrder
    noIjazah?: SortOrder
    tanggalIjazah?: SortOrder
    fileIjazah?: SortOrderInput | SortOrder
    datapribadi?: DatapribadiOrderByWithRelationInput
    _relevance?: DataPendidikanOrderByRelevanceInput
  }

  export type DataPendidikanWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: DataPendidikanWhereInput | DataPendidikanWhereInput[]
    OR?: DataPendidikanWhereInput[]
    NOT?: DataPendidikanWhereInput | DataPendidikanWhereInput[]
    universitas?: StringFilter<"DataPendidikan"> | string
    jurusan?: StringFilter<"DataPendidikan"> | string
    noIjazah?: StringFilter<"DataPendidikan"> | string
    tanggalIjazah?: DateTimeFilter<"DataPendidikan"> | Date | string
    fileIjazah?: StringNullableFilter<"DataPendidikan"> | string | null
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
  }, "nip">

  export type DataPendidikanOrderByWithAggregationInput = {
    nip?: SortOrder
    universitas?: SortOrder
    jurusan?: SortOrder
    noIjazah?: SortOrder
    tanggalIjazah?: SortOrder
    fileIjazah?: SortOrderInput | SortOrder
    _count?: DataPendidikanCountOrderByAggregateInput
    _max?: DataPendidikanMaxOrderByAggregateInput
    _min?: DataPendidikanMinOrderByAggregateInput
  }

  export type DataPendidikanScalarWhereWithAggregatesInput = {
    AND?: DataPendidikanScalarWhereWithAggregatesInput | DataPendidikanScalarWhereWithAggregatesInput[]
    OR?: DataPendidikanScalarWhereWithAggregatesInput[]
    NOT?: DataPendidikanScalarWhereWithAggregatesInput | DataPendidikanScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"DataPendidikan"> | string
    universitas?: StringWithAggregatesFilter<"DataPendidikan"> | string
    jurusan?: StringWithAggregatesFilter<"DataPendidikan"> | string
    noIjazah?: StringWithAggregatesFilter<"DataPendidikan"> | string
    tanggalIjazah?: DateTimeWithAggregatesFilter<"DataPendidikan"> | Date | string
    fileIjazah?: StringNullableWithAggregatesFilter<"DataPendidikan"> | string | null
  }

  export type KompetensiWhereInput = {
    AND?: KompetensiWhereInput | KompetensiWhereInput[]
    OR?: KompetensiWhereInput[]
    NOT?: KompetensiWhereInput | KompetensiWhereInput[]
    kuk?: StringFilter<"Kompetensi"> | string
    detail?: StringFilter<"Kompetensi"> | string
    kompetensi?: StringFilter<"Kompetensi"> | string
    kategori?: StringFilter<"Kompetensi"> | string
    asesmenMandiri?: AsesmenMandiriListRelationFilter
  }

  export type KompetensiOrderByWithRelationInput = {
    kuk?: SortOrder
    detail?: SortOrder
    kompetensi?: SortOrder
    kategori?: SortOrder
    asesmenMandiri?: AsesmenMandiriOrderByRelationAggregateInput
    _relevance?: KompetensiOrderByRelevanceInput
  }

  export type KompetensiWhereUniqueInput = Prisma.AtLeast<{
    kuk?: string
    AND?: KompetensiWhereInput | KompetensiWhereInput[]
    OR?: KompetensiWhereInput[]
    NOT?: KompetensiWhereInput | KompetensiWhereInput[]
    detail?: StringFilter<"Kompetensi"> | string
    kompetensi?: StringFilter<"Kompetensi"> | string
    kategori?: StringFilter<"Kompetensi"> | string
    asesmenMandiri?: AsesmenMandiriListRelationFilter
  }, "kuk">

  export type KompetensiOrderByWithAggregationInput = {
    kuk?: SortOrder
    detail?: SortOrder
    kompetensi?: SortOrder
    kategori?: SortOrder
    _count?: KompetensiCountOrderByAggregateInput
    _max?: KompetensiMaxOrderByAggregateInput
    _min?: KompetensiMinOrderByAggregateInput
  }

  export type KompetensiScalarWhereWithAggregatesInput = {
    AND?: KompetensiScalarWhereWithAggregatesInput | KompetensiScalarWhereWithAggregatesInput[]
    OR?: KompetensiScalarWhereWithAggregatesInput[]
    NOT?: KompetensiScalarWhereWithAggregatesInput | KompetensiScalarWhereWithAggregatesInput[]
    kuk?: StringWithAggregatesFilter<"Kompetensi"> | string
    detail?: StringWithAggregatesFilter<"Kompetensi"> | string
    kompetensi?: StringWithAggregatesFilter<"Kompetensi"> | string
    kategori?: StringWithAggregatesFilter<"Kompetensi"> | string
  }

  export type AsesmenMandiriWhereInput = {
    AND?: AsesmenMandiriWhereInput | AsesmenMandiriWhereInput[]
    OR?: AsesmenMandiriWhereInput[]
    NOT?: AsesmenMandiriWhereInput | AsesmenMandiriWhereInput[]
    nip?: StringFilter<"AsesmenMandiri"> | string
    kuk?: StringFilter<"AsesmenMandiri"> | string
    asesmen?: StringFilter<"AsesmenMandiri"> | string
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
    kompetensi?: XOR<KompetensiScalarRelationFilter, KompetensiWhereInput>
  }

  export type AsesmenMandiriOrderByWithRelationInput = {
    nip?: SortOrder
    kuk?: SortOrder
    asesmen?: SortOrder
    datapribadi?: DatapribadiOrderByWithRelationInput
    kompetensi?: KompetensiOrderByWithRelationInput
    _relevance?: AsesmenMandiriOrderByRelevanceInput
  }

  export type AsesmenMandiriWhereUniqueInput = Prisma.AtLeast<{
    nip_kuk?: AsesmenMandiriNipKukCompoundUniqueInput
    AND?: AsesmenMandiriWhereInput | AsesmenMandiriWhereInput[]
    OR?: AsesmenMandiriWhereInput[]
    NOT?: AsesmenMandiriWhereInput | AsesmenMandiriWhereInput[]
    nip?: StringFilter<"AsesmenMandiri"> | string
    kuk?: StringFilter<"AsesmenMandiri"> | string
    asesmen?: StringFilter<"AsesmenMandiri"> | string
    datapribadi?: XOR<DatapribadiScalarRelationFilter, DatapribadiWhereInput>
    kompetensi?: XOR<KompetensiScalarRelationFilter, KompetensiWhereInput>
  }, "nip_kuk">

  export type AsesmenMandiriOrderByWithAggregationInput = {
    nip?: SortOrder
    kuk?: SortOrder
    asesmen?: SortOrder
    _count?: AsesmenMandiriCountOrderByAggregateInput
    _max?: AsesmenMandiriMaxOrderByAggregateInput
    _min?: AsesmenMandiriMinOrderByAggregateInput
  }

  export type AsesmenMandiriScalarWhereWithAggregatesInput = {
    AND?: AsesmenMandiriScalarWhereWithAggregatesInput | AsesmenMandiriScalarWhereWithAggregatesInput[]
    OR?: AsesmenMandiriScalarWhereWithAggregatesInput[]
    NOT?: AsesmenMandiriScalarWhereWithAggregatesInput | AsesmenMandiriScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"AsesmenMandiri"> | string
    kuk?: StringWithAggregatesFilter<"AsesmenMandiri"> | string
    asesmen?: StringWithAggregatesFilter<"AsesmenMandiri"> | string
  }

  export type DatapribadiCreateInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanCreateNestedOneWithoutDatapribadiInput
    pendidikan?: DataPendidikanCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiUncheckedCreateInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanUncheckedCreateNestedOneWithoutDatapribadiInput
    pendidikan?: DataPendidikanUncheckedCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriUncheckedCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUpdateOneWithoutDatapribadiNestedInput
    pendidikan?: DataPendidikanUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUpdateManyWithoutDatapribadiNestedInput
  }

  export type DatapribadiUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUncheckedUpdateOneWithoutDatapribadiNestedInput
    pendidikan?: DataPendidikanUncheckedUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiNestedInput
  }

  export type DatapribadiCreateManyInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
  }

  export type DatapribadiUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DatapribadiUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type DataPekerjaanCreateInput = {
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date | string
    noSip: string
    tanggalSip: Date | string
    fileStr?: string | null
    fileSik?: string | null
    datapribadi: DatapribadiCreateNestedOneWithoutPekerjaanInput
  }

  export type DataPekerjaanUncheckedCreateInput = {
    nip: string
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date | string
    noSip: string
    tanggalSip: Date | string
    fileStr?: string | null
    fileSik?: string | null
  }

  export type DataPekerjaanUpdateInput = {
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
    datapribadi?: DatapribadiUpdateOneRequiredWithoutPekerjaanNestedInput
  }

  export type DataPekerjaanUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPekerjaanCreateManyInput = {
    nip: string
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date | string
    noSip: string
    tanggalSip: Date | string
    fileStr?: string | null
    fileSik?: string | null
  }

  export type DataPekerjaanUpdateManyMutationInput = {
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPekerjaanUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendidikanCreateInput = {
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date | string
    fileIjazah?: string | null
    datapribadi: DatapribadiCreateNestedOneWithoutPendidikanInput
  }

  export type DataPendidikanUncheckedCreateInput = {
    nip: string
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date | string
    fileIjazah?: string | null
  }

  export type DataPendidikanUpdateInput = {
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
    datapribadi?: DatapribadiUpdateOneRequiredWithoutPendidikanNestedInput
  }

  export type DataPendidikanUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendidikanCreateManyInput = {
    nip: string
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date | string
    fileIjazah?: string | null
  }

  export type DataPendidikanUpdateManyMutationInput = {
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendidikanUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetensiCreateInput = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
    asesmenMandiri?: AsesmenMandiriCreateNestedManyWithoutKompetensiInput
  }

  export type KompetensiUncheckedCreateInput = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
    asesmenMandiri?: AsesmenMandiriUncheckedCreateNestedManyWithoutKompetensiInput
  }

  export type KompetensiUpdateInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    asesmenMandiri?: AsesmenMandiriUpdateManyWithoutKompetensiNestedInput
  }

  export type KompetensiUncheckedUpdateInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    asesmenMandiri?: AsesmenMandiriUncheckedUpdateManyWithoutKompetensiNestedInput
  }

  export type KompetensiCreateManyInput = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
  }

  export type KompetensiUpdateManyMutationInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KompetensiUncheckedUpdateManyInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriCreateInput = {
    asesmen: string
    datapribadi: DatapribadiCreateNestedOneWithoutAsesmenMandiriInput
    kompetensi: KompetensiCreateNestedOneWithoutAsesmenMandiriInput
  }

  export type AsesmenMandiriUncheckedCreateInput = {
    nip: string
    kuk: string
    asesmen: string
  }

  export type AsesmenMandiriUpdateInput = {
    asesmen?: StringFieldUpdateOperationsInput | string
    datapribadi?: DatapribadiUpdateOneRequiredWithoutAsesmenMandiriNestedInput
    kompetensi?: KompetensiUpdateOneRequiredWithoutAsesmenMandiriNestedInput
  }

  export type AsesmenMandiriUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    kuk?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriCreateManyInput = {
    nip: string
    kuk: string
    asesmen: string
  }

  export type AsesmenMandiriUpdateManyMutationInput = {
    asesmen?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    kuk?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
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

  export type DataPekerjaanNullableScalarRelationFilter = {
    is?: DataPekerjaanWhereInput | null
    isNot?: DataPekerjaanWhereInput | null
  }

  export type DataPendidikanNullableScalarRelationFilter = {
    is?: DataPendidikanWhereInput | null
    isNot?: DataPendidikanWhereInput | null
  }

  export type AsesmenMandiriListRelationFilter = {
    every?: AsesmenMandiriWhereInput
    some?: AsesmenMandiriWhereInput
    none?: AsesmenMandiriWhereInput
  }

  export type AsesmenMandiriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatapribadiOrderByRelevanceInput = {
    fields: DatapribadiOrderByRelevanceFieldEnum | DatapribadiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DatapribadiCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type DatapribadiMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    jenisKelamin?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type DatapribadiMinOrderByAggregateInput = {
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DatapribadiScalarRelationFilter = {
    is?: DatapribadiWhereInput
    isNot?: DatapribadiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DataPekerjaanOrderByRelevanceInput = {
    fields: DataPekerjaanOrderByRelevanceFieldEnum | DataPekerjaanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataPekerjaanCountOrderByAggregateInput = {
    nip?: SortOrder
    namaTempatBekerja?: SortOrder
    alamatPekerjaan?: SortOrder
    noStr?: SortOrder
    tanggalStr?: SortOrder
    noSip?: SortOrder
    tanggalSip?: SortOrder
    fileStr?: SortOrder
    fileSik?: SortOrder
  }

  export type DataPekerjaanMaxOrderByAggregateInput = {
    nip?: SortOrder
    namaTempatBekerja?: SortOrder
    alamatPekerjaan?: SortOrder
    noStr?: SortOrder
    tanggalStr?: SortOrder
    noSip?: SortOrder
    tanggalSip?: SortOrder
    fileStr?: SortOrder
    fileSik?: SortOrder
  }

  export type DataPekerjaanMinOrderByAggregateInput = {
    nip?: SortOrder
    namaTempatBekerja?: SortOrder
    alamatPekerjaan?: SortOrder
    noStr?: SortOrder
    tanggalStr?: SortOrder
    noSip?: SortOrder
    tanggalSip?: SortOrder
    fileStr?: SortOrder
    fileSik?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DataPendidikanOrderByRelevanceInput = {
    fields: DataPendidikanOrderByRelevanceFieldEnum | DataPendidikanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DataPendidikanCountOrderByAggregateInput = {
    nip?: SortOrder
    universitas?: SortOrder
    jurusan?: SortOrder
    noIjazah?: SortOrder
    tanggalIjazah?: SortOrder
    fileIjazah?: SortOrder
  }

  export type DataPendidikanMaxOrderByAggregateInput = {
    nip?: SortOrder
    universitas?: SortOrder
    jurusan?: SortOrder
    noIjazah?: SortOrder
    tanggalIjazah?: SortOrder
    fileIjazah?: SortOrder
  }

  export type DataPendidikanMinOrderByAggregateInput = {
    nip?: SortOrder
    universitas?: SortOrder
    jurusan?: SortOrder
    noIjazah?: SortOrder
    tanggalIjazah?: SortOrder
    fileIjazah?: SortOrder
  }

  export type KompetensiOrderByRelevanceInput = {
    fields: KompetensiOrderByRelevanceFieldEnum | KompetensiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KompetensiCountOrderByAggregateInput = {
    kuk?: SortOrder
    detail?: SortOrder
    kompetensi?: SortOrder
    kategori?: SortOrder
  }

  export type KompetensiMaxOrderByAggregateInput = {
    kuk?: SortOrder
    detail?: SortOrder
    kompetensi?: SortOrder
    kategori?: SortOrder
  }

  export type KompetensiMinOrderByAggregateInput = {
    kuk?: SortOrder
    detail?: SortOrder
    kompetensi?: SortOrder
    kategori?: SortOrder
  }

  export type KompetensiScalarRelationFilter = {
    is?: KompetensiWhereInput
    isNot?: KompetensiWhereInput
  }

  export type AsesmenMandiriOrderByRelevanceInput = {
    fields: AsesmenMandiriOrderByRelevanceFieldEnum | AsesmenMandiriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AsesmenMandiriNipKukCompoundUniqueInput = {
    nip: string
    kuk: string
  }

  export type AsesmenMandiriCountOrderByAggregateInput = {
    nip?: SortOrder
    kuk?: SortOrder
    asesmen?: SortOrder
  }

  export type AsesmenMandiriMaxOrderByAggregateInput = {
    nip?: SortOrder
    kuk?: SortOrder
    asesmen?: SortOrder
  }

  export type AsesmenMandiriMinOrderByAggregateInput = {
    nip?: SortOrder
    kuk?: SortOrder
    asesmen?: SortOrder
  }

  export type DataPekerjaanCreateNestedOneWithoutDatapribadiInput = {
    create?: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPekerjaanCreateOrConnectWithoutDatapribadiInput
    connect?: DataPekerjaanWhereUniqueInput
  }

  export type DataPendidikanCreateNestedOneWithoutDatapribadiInput = {
    create?: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPendidikanCreateOrConnectWithoutDatapribadiInput
    connect?: DataPendidikanWhereUniqueInput
  }

  export type AsesmenMandiriCreateNestedManyWithoutDatapribadiInput = {
    create?: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput> | AsesmenMandiriCreateWithoutDatapribadiInput[] | AsesmenMandiriUncheckedCreateWithoutDatapribadiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutDatapribadiInput | AsesmenMandiriCreateOrConnectWithoutDatapribadiInput[]
    createMany?: AsesmenMandiriCreateManyDatapribadiInputEnvelope
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
  }

  export type DataPekerjaanUncheckedCreateNestedOneWithoutDatapribadiInput = {
    create?: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPekerjaanCreateOrConnectWithoutDatapribadiInput
    connect?: DataPekerjaanWhereUniqueInput
  }

  export type DataPendidikanUncheckedCreateNestedOneWithoutDatapribadiInput = {
    create?: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPendidikanCreateOrConnectWithoutDatapribadiInput
    connect?: DataPendidikanWhereUniqueInput
  }

  export type AsesmenMandiriUncheckedCreateNestedManyWithoutDatapribadiInput = {
    create?: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput> | AsesmenMandiriCreateWithoutDatapribadiInput[] | AsesmenMandiriUncheckedCreateWithoutDatapribadiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutDatapribadiInput | AsesmenMandiriCreateOrConnectWithoutDatapribadiInput[]
    createMany?: AsesmenMandiriCreateManyDatapribadiInputEnvelope
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DataPekerjaanUpdateOneWithoutDatapribadiNestedInput = {
    create?: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPekerjaanCreateOrConnectWithoutDatapribadiInput
    upsert?: DataPekerjaanUpsertWithoutDatapribadiInput
    disconnect?: DataPekerjaanWhereInput | boolean
    delete?: DataPekerjaanWhereInput | boolean
    connect?: DataPekerjaanWhereUniqueInput
    update?: XOR<XOR<DataPekerjaanUpdateToOneWithWhereWithoutDatapribadiInput, DataPekerjaanUpdateWithoutDatapribadiInput>, DataPekerjaanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type DataPendidikanUpdateOneWithoutDatapribadiNestedInput = {
    create?: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPendidikanCreateOrConnectWithoutDatapribadiInput
    upsert?: DataPendidikanUpsertWithoutDatapribadiInput
    disconnect?: DataPendidikanWhereInput | boolean
    delete?: DataPendidikanWhereInput | boolean
    connect?: DataPendidikanWhereUniqueInput
    update?: XOR<XOR<DataPendidikanUpdateToOneWithWhereWithoutDatapribadiInput, DataPendidikanUpdateWithoutDatapribadiInput>, DataPendidikanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriUpdateManyWithoutDatapribadiNestedInput = {
    create?: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput> | AsesmenMandiriCreateWithoutDatapribadiInput[] | AsesmenMandiriUncheckedCreateWithoutDatapribadiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutDatapribadiInput | AsesmenMandiriCreateOrConnectWithoutDatapribadiInput[]
    upsert?: AsesmenMandiriUpsertWithWhereUniqueWithoutDatapribadiInput | AsesmenMandiriUpsertWithWhereUniqueWithoutDatapribadiInput[]
    createMany?: AsesmenMandiriCreateManyDatapribadiInputEnvelope
    set?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    disconnect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    delete?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    update?: AsesmenMandiriUpdateWithWhereUniqueWithoutDatapribadiInput | AsesmenMandiriUpdateWithWhereUniqueWithoutDatapribadiInput[]
    updateMany?: AsesmenMandiriUpdateManyWithWhereWithoutDatapribadiInput | AsesmenMandiriUpdateManyWithWhereWithoutDatapribadiInput[]
    deleteMany?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
  }

  export type DataPekerjaanUncheckedUpdateOneWithoutDatapribadiNestedInput = {
    create?: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPekerjaanCreateOrConnectWithoutDatapribadiInput
    upsert?: DataPekerjaanUpsertWithoutDatapribadiInput
    disconnect?: DataPekerjaanWhereInput | boolean
    delete?: DataPekerjaanWhereInput | boolean
    connect?: DataPekerjaanWhereUniqueInput
    update?: XOR<XOR<DataPekerjaanUpdateToOneWithWhereWithoutDatapribadiInput, DataPekerjaanUpdateWithoutDatapribadiInput>, DataPekerjaanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type DataPendidikanUncheckedUpdateOneWithoutDatapribadiNestedInput = {
    create?: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
    connectOrCreate?: DataPendidikanCreateOrConnectWithoutDatapribadiInput
    upsert?: DataPendidikanUpsertWithoutDatapribadiInput
    disconnect?: DataPendidikanWhereInput | boolean
    delete?: DataPendidikanWhereInput | boolean
    connect?: DataPendidikanWhereUniqueInput
    update?: XOR<XOR<DataPendidikanUpdateToOneWithWhereWithoutDatapribadiInput, DataPendidikanUpdateWithoutDatapribadiInput>, DataPendidikanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiNestedInput = {
    create?: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput> | AsesmenMandiriCreateWithoutDatapribadiInput[] | AsesmenMandiriUncheckedCreateWithoutDatapribadiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutDatapribadiInput | AsesmenMandiriCreateOrConnectWithoutDatapribadiInput[]
    upsert?: AsesmenMandiriUpsertWithWhereUniqueWithoutDatapribadiInput | AsesmenMandiriUpsertWithWhereUniqueWithoutDatapribadiInput[]
    createMany?: AsesmenMandiriCreateManyDatapribadiInputEnvelope
    set?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    disconnect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    delete?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    update?: AsesmenMandiriUpdateWithWhereUniqueWithoutDatapribadiInput | AsesmenMandiriUpdateWithWhereUniqueWithoutDatapribadiInput[]
    updateMany?: AsesmenMandiriUpdateManyWithWhereWithoutDatapribadiInput | AsesmenMandiriUpdateManyWithWhereWithoutDatapribadiInput[]
    deleteMany?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
  }

  export type DatapribadiCreateNestedOneWithoutPekerjaanInput = {
    create?: XOR<DatapribadiCreateWithoutPekerjaanInput, DatapribadiUncheckedCreateWithoutPekerjaanInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutPekerjaanInput
    connect?: DatapribadiWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DatapribadiUpdateOneRequiredWithoutPekerjaanNestedInput = {
    create?: XOR<DatapribadiCreateWithoutPekerjaanInput, DatapribadiUncheckedCreateWithoutPekerjaanInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutPekerjaanInput
    upsert?: DatapribadiUpsertWithoutPekerjaanInput
    connect?: DatapribadiWhereUniqueInput
    update?: XOR<XOR<DatapribadiUpdateToOneWithWhereWithoutPekerjaanInput, DatapribadiUpdateWithoutPekerjaanInput>, DatapribadiUncheckedUpdateWithoutPekerjaanInput>
  }

  export type DatapribadiCreateNestedOneWithoutPendidikanInput = {
    create?: XOR<DatapribadiCreateWithoutPendidikanInput, DatapribadiUncheckedCreateWithoutPendidikanInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutPendidikanInput
    connect?: DatapribadiWhereUniqueInput
  }

  export type DatapribadiUpdateOneRequiredWithoutPendidikanNestedInput = {
    create?: XOR<DatapribadiCreateWithoutPendidikanInput, DatapribadiUncheckedCreateWithoutPendidikanInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutPendidikanInput
    upsert?: DatapribadiUpsertWithoutPendidikanInput
    connect?: DatapribadiWhereUniqueInput
    update?: XOR<XOR<DatapribadiUpdateToOneWithWhereWithoutPendidikanInput, DatapribadiUpdateWithoutPendidikanInput>, DatapribadiUncheckedUpdateWithoutPendidikanInput>
  }

  export type AsesmenMandiriCreateNestedManyWithoutKompetensiInput = {
    create?: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput> | AsesmenMandiriCreateWithoutKompetensiInput[] | AsesmenMandiriUncheckedCreateWithoutKompetensiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutKompetensiInput | AsesmenMandiriCreateOrConnectWithoutKompetensiInput[]
    createMany?: AsesmenMandiriCreateManyKompetensiInputEnvelope
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
  }

  export type AsesmenMandiriUncheckedCreateNestedManyWithoutKompetensiInput = {
    create?: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput> | AsesmenMandiriCreateWithoutKompetensiInput[] | AsesmenMandiriUncheckedCreateWithoutKompetensiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutKompetensiInput | AsesmenMandiriCreateOrConnectWithoutKompetensiInput[]
    createMany?: AsesmenMandiriCreateManyKompetensiInputEnvelope
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
  }

  export type AsesmenMandiriUpdateManyWithoutKompetensiNestedInput = {
    create?: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput> | AsesmenMandiriCreateWithoutKompetensiInput[] | AsesmenMandiriUncheckedCreateWithoutKompetensiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutKompetensiInput | AsesmenMandiriCreateOrConnectWithoutKompetensiInput[]
    upsert?: AsesmenMandiriUpsertWithWhereUniqueWithoutKompetensiInput | AsesmenMandiriUpsertWithWhereUniqueWithoutKompetensiInput[]
    createMany?: AsesmenMandiriCreateManyKompetensiInputEnvelope
    set?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    disconnect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    delete?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    update?: AsesmenMandiriUpdateWithWhereUniqueWithoutKompetensiInput | AsesmenMandiriUpdateWithWhereUniqueWithoutKompetensiInput[]
    updateMany?: AsesmenMandiriUpdateManyWithWhereWithoutKompetensiInput | AsesmenMandiriUpdateManyWithWhereWithoutKompetensiInput[]
    deleteMany?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
  }

  export type AsesmenMandiriUncheckedUpdateManyWithoutKompetensiNestedInput = {
    create?: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput> | AsesmenMandiriCreateWithoutKompetensiInput[] | AsesmenMandiriUncheckedCreateWithoutKompetensiInput[]
    connectOrCreate?: AsesmenMandiriCreateOrConnectWithoutKompetensiInput | AsesmenMandiriCreateOrConnectWithoutKompetensiInput[]
    upsert?: AsesmenMandiriUpsertWithWhereUniqueWithoutKompetensiInput | AsesmenMandiriUpsertWithWhereUniqueWithoutKompetensiInput[]
    createMany?: AsesmenMandiriCreateManyKompetensiInputEnvelope
    set?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    disconnect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    delete?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    connect?: AsesmenMandiriWhereUniqueInput | AsesmenMandiriWhereUniqueInput[]
    update?: AsesmenMandiriUpdateWithWhereUniqueWithoutKompetensiInput | AsesmenMandiriUpdateWithWhereUniqueWithoutKompetensiInput[]
    updateMany?: AsesmenMandiriUpdateManyWithWhereWithoutKompetensiInput | AsesmenMandiriUpdateManyWithWhereWithoutKompetensiInput[]
    deleteMany?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
  }

  export type DatapribadiCreateNestedOneWithoutAsesmenMandiriInput = {
    create?: XOR<DatapribadiCreateWithoutAsesmenMandiriInput, DatapribadiUncheckedCreateWithoutAsesmenMandiriInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutAsesmenMandiriInput
    connect?: DatapribadiWhereUniqueInput
  }

  export type KompetensiCreateNestedOneWithoutAsesmenMandiriInput = {
    create?: XOR<KompetensiCreateWithoutAsesmenMandiriInput, KompetensiUncheckedCreateWithoutAsesmenMandiriInput>
    connectOrCreate?: KompetensiCreateOrConnectWithoutAsesmenMandiriInput
    connect?: KompetensiWhereUniqueInput
  }

  export type DatapribadiUpdateOneRequiredWithoutAsesmenMandiriNestedInput = {
    create?: XOR<DatapribadiCreateWithoutAsesmenMandiriInput, DatapribadiUncheckedCreateWithoutAsesmenMandiriInput>
    connectOrCreate?: DatapribadiCreateOrConnectWithoutAsesmenMandiriInput
    upsert?: DatapribadiUpsertWithoutAsesmenMandiriInput
    connect?: DatapribadiWhereUniqueInput
    update?: XOR<XOR<DatapribadiUpdateToOneWithWhereWithoutAsesmenMandiriInput, DatapribadiUpdateWithoutAsesmenMandiriInput>, DatapribadiUncheckedUpdateWithoutAsesmenMandiriInput>
  }

  export type KompetensiUpdateOneRequiredWithoutAsesmenMandiriNestedInput = {
    create?: XOR<KompetensiCreateWithoutAsesmenMandiriInput, KompetensiUncheckedCreateWithoutAsesmenMandiriInput>
    connectOrCreate?: KompetensiCreateOrConnectWithoutAsesmenMandiriInput
    upsert?: KompetensiUpsertWithoutAsesmenMandiriInput
    connect?: KompetensiWhereUniqueInput
    update?: XOR<XOR<KompetensiUpdateToOneWithWhereWithoutAsesmenMandiriInput, KompetensiUpdateWithoutAsesmenMandiriInput>, KompetensiUncheckedUpdateWithoutAsesmenMandiriInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DataPekerjaanCreateWithoutDatapribadiInput = {
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date | string
    noSip: string
    tanggalSip: Date | string
    fileStr?: string | null
    fileSik?: string | null
  }

  export type DataPekerjaanUncheckedCreateWithoutDatapribadiInput = {
    namaTempatBekerja: string
    alamatPekerjaan: string
    noStr: string
    tanggalStr: Date | string
    noSip: string
    tanggalSip: Date | string
    fileStr?: string | null
    fileSik?: string | null
  }

  export type DataPekerjaanCreateOrConnectWithoutDatapribadiInput = {
    where: DataPekerjaanWhereUniqueInput
    create: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
  }

  export type DataPendidikanCreateWithoutDatapribadiInput = {
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date | string
    fileIjazah?: string | null
  }

  export type DataPendidikanUncheckedCreateWithoutDatapribadiInput = {
    universitas: string
    jurusan: string
    noIjazah: string
    tanggalIjazah: Date | string
    fileIjazah?: string | null
  }

  export type DataPendidikanCreateOrConnectWithoutDatapribadiInput = {
    where: DataPendidikanWhereUniqueInput
    create: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriCreateWithoutDatapribadiInput = {
    asesmen: string
    kompetensi: KompetensiCreateNestedOneWithoutAsesmenMandiriInput
  }

  export type AsesmenMandiriUncheckedCreateWithoutDatapribadiInput = {
    kuk: string
    asesmen: string
  }

  export type AsesmenMandiriCreateOrConnectWithoutDatapribadiInput = {
    where: AsesmenMandiriWhereUniqueInput
    create: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriCreateManyDatapribadiInputEnvelope = {
    data: AsesmenMandiriCreateManyDatapribadiInput | AsesmenMandiriCreateManyDatapribadiInput[]
    skipDuplicates?: boolean
  }

  export type DataPekerjaanUpsertWithoutDatapribadiInput = {
    update: XOR<DataPekerjaanUpdateWithoutDatapribadiInput, DataPekerjaanUncheckedUpdateWithoutDatapribadiInput>
    create: XOR<DataPekerjaanCreateWithoutDatapribadiInput, DataPekerjaanUncheckedCreateWithoutDatapribadiInput>
    where?: DataPekerjaanWhereInput
  }

  export type DataPekerjaanUpdateToOneWithWhereWithoutDatapribadiInput = {
    where?: DataPekerjaanWhereInput
    data: XOR<DataPekerjaanUpdateWithoutDatapribadiInput, DataPekerjaanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type DataPekerjaanUpdateWithoutDatapribadiInput = {
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPekerjaanUncheckedUpdateWithoutDatapribadiInput = {
    namaTempatBekerja?: StringFieldUpdateOperationsInput | string
    alamatPekerjaan?: StringFieldUpdateOperationsInput | string
    noStr?: StringFieldUpdateOperationsInput | string
    tanggalStr?: DateTimeFieldUpdateOperationsInput | Date | string
    noSip?: StringFieldUpdateOperationsInput | string
    tanggalSip?: DateTimeFieldUpdateOperationsInput | Date | string
    fileStr?: NullableStringFieldUpdateOperationsInput | string | null
    fileSik?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendidikanUpsertWithoutDatapribadiInput = {
    update: XOR<DataPendidikanUpdateWithoutDatapribadiInput, DataPendidikanUncheckedUpdateWithoutDatapribadiInput>
    create: XOR<DataPendidikanCreateWithoutDatapribadiInput, DataPendidikanUncheckedCreateWithoutDatapribadiInput>
    where?: DataPendidikanWhereInput
  }

  export type DataPendidikanUpdateToOneWithWhereWithoutDatapribadiInput = {
    where?: DataPendidikanWhereInput
    data: XOR<DataPendidikanUpdateWithoutDatapribadiInput, DataPendidikanUncheckedUpdateWithoutDatapribadiInput>
  }

  export type DataPendidikanUpdateWithoutDatapribadiInput = {
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DataPendidikanUncheckedUpdateWithoutDatapribadiInput = {
    universitas?: StringFieldUpdateOperationsInput | string
    jurusan?: StringFieldUpdateOperationsInput | string
    noIjazah?: StringFieldUpdateOperationsInput | string
    tanggalIjazah?: DateTimeFieldUpdateOperationsInput | Date | string
    fileIjazah?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsesmenMandiriUpsertWithWhereUniqueWithoutDatapribadiInput = {
    where: AsesmenMandiriWhereUniqueInput
    update: XOR<AsesmenMandiriUpdateWithoutDatapribadiInput, AsesmenMandiriUncheckedUpdateWithoutDatapribadiInput>
    create: XOR<AsesmenMandiriCreateWithoutDatapribadiInput, AsesmenMandiriUncheckedCreateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriUpdateWithWhereUniqueWithoutDatapribadiInput = {
    where: AsesmenMandiriWhereUniqueInput
    data: XOR<AsesmenMandiriUpdateWithoutDatapribadiInput, AsesmenMandiriUncheckedUpdateWithoutDatapribadiInput>
  }

  export type AsesmenMandiriUpdateManyWithWhereWithoutDatapribadiInput = {
    where: AsesmenMandiriScalarWhereInput
    data: XOR<AsesmenMandiriUpdateManyMutationInput, AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiInput>
  }

  export type AsesmenMandiriScalarWhereInput = {
    AND?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
    OR?: AsesmenMandiriScalarWhereInput[]
    NOT?: AsesmenMandiriScalarWhereInput | AsesmenMandiriScalarWhereInput[]
    nip?: StringFilter<"AsesmenMandiri"> | string
    kuk?: StringFilter<"AsesmenMandiri"> | string
    asesmen?: StringFilter<"AsesmenMandiri"> | string
  }

  export type DatapribadiCreateWithoutPekerjaanInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pendidikan?: DataPendidikanCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiUncheckedCreateWithoutPekerjaanInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pendidikan?: DataPendidikanUncheckedCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriUncheckedCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiCreateOrConnectWithoutPekerjaanInput = {
    where: DatapribadiWhereUniqueInput
    create: XOR<DatapribadiCreateWithoutPekerjaanInput, DatapribadiUncheckedCreateWithoutPekerjaanInput>
  }

  export type DatapribadiUpsertWithoutPekerjaanInput = {
    update: XOR<DatapribadiUpdateWithoutPekerjaanInput, DatapribadiUncheckedUpdateWithoutPekerjaanInput>
    create: XOR<DatapribadiCreateWithoutPekerjaanInput, DatapribadiUncheckedCreateWithoutPekerjaanInput>
    where?: DatapribadiWhereInput
  }

  export type DatapribadiUpdateToOneWithWhereWithoutPekerjaanInput = {
    where?: DatapribadiWhereInput
    data: XOR<DatapribadiUpdateWithoutPekerjaanInput, DatapribadiUncheckedUpdateWithoutPekerjaanInput>
  }

  export type DatapribadiUpdateWithoutPekerjaanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pendidikan?: DataPendidikanUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUpdateManyWithoutDatapribadiNestedInput
  }

  export type DatapribadiUncheckedUpdateWithoutPekerjaanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pendidikan?: DataPendidikanUncheckedUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiNestedInput
  }

  export type DatapribadiCreateWithoutPendidikanInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiUncheckedCreateWithoutPendidikanInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanUncheckedCreateNestedOneWithoutDatapribadiInput
    asesmenMandiri?: AsesmenMandiriUncheckedCreateNestedManyWithoutDatapribadiInput
  }

  export type DatapribadiCreateOrConnectWithoutPendidikanInput = {
    where: DatapribadiWhereUniqueInput
    create: XOR<DatapribadiCreateWithoutPendidikanInput, DatapribadiUncheckedCreateWithoutPendidikanInput>
  }

  export type DatapribadiUpsertWithoutPendidikanInput = {
    update: XOR<DatapribadiUpdateWithoutPendidikanInput, DatapribadiUncheckedUpdateWithoutPendidikanInput>
    create: XOR<DatapribadiCreateWithoutPendidikanInput, DatapribadiUncheckedCreateWithoutPendidikanInput>
    where?: DatapribadiWhereInput
  }

  export type DatapribadiUpdateToOneWithWhereWithoutPendidikanInput = {
    where?: DatapribadiWhereInput
    data: XOR<DatapribadiUpdateWithoutPendidikanInput, DatapribadiUncheckedUpdateWithoutPendidikanInput>
  }

  export type DatapribadiUpdateWithoutPendidikanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUpdateManyWithoutDatapribadiNestedInput
  }

  export type DatapribadiUncheckedUpdateWithoutPendidikanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUncheckedUpdateOneWithoutDatapribadiNestedInput
    asesmenMandiri?: AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiNestedInput
  }

  export type AsesmenMandiriCreateWithoutKompetensiInput = {
    asesmen: string
    datapribadi: DatapribadiCreateNestedOneWithoutAsesmenMandiriInput
  }

  export type AsesmenMandiriUncheckedCreateWithoutKompetensiInput = {
    nip: string
    asesmen: string
  }

  export type AsesmenMandiriCreateOrConnectWithoutKompetensiInput = {
    where: AsesmenMandiriWhereUniqueInput
    create: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput>
  }

  export type AsesmenMandiriCreateManyKompetensiInputEnvelope = {
    data: AsesmenMandiriCreateManyKompetensiInput | AsesmenMandiriCreateManyKompetensiInput[]
    skipDuplicates?: boolean
  }

  export type AsesmenMandiriUpsertWithWhereUniqueWithoutKompetensiInput = {
    where: AsesmenMandiriWhereUniqueInput
    update: XOR<AsesmenMandiriUpdateWithoutKompetensiInput, AsesmenMandiriUncheckedUpdateWithoutKompetensiInput>
    create: XOR<AsesmenMandiriCreateWithoutKompetensiInput, AsesmenMandiriUncheckedCreateWithoutKompetensiInput>
  }

  export type AsesmenMandiriUpdateWithWhereUniqueWithoutKompetensiInput = {
    where: AsesmenMandiriWhereUniqueInput
    data: XOR<AsesmenMandiriUpdateWithoutKompetensiInput, AsesmenMandiriUncheckedUpdateWithoutKompetensiInput>
  }

  export type AsesmenMandiriUpdateManyWithWhereWithoutKompetensiInput = {
    where: AsesmenMandiriScalarWhereInput
    data: XOR<AsesmenMandiriUpdateManyMutationInput, AsesmenMandiriUncheckedUpdateManyWithoutKompetensiInput>
  }

  export type DatapribadiCreateWithoutAsesmenMandiriInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanCreateNestedOneWithoutDatapribadiInput
    pendidikan?: DataPendidikanCreateNestedOneWithoutDatapribadiInput
  }

  export type DatapribadiUncheckedCreateWithoutAsesmenMandiriInput = {
    nip: string
    nama: string
    tempatLahir: string
    tanggalLahir: Date | string
    jenisKelamin: string
    phone: string
    email: string
    alamat: string
    pekerjaan?: DataPekerjaanUncheckedCreateNestedOneWithoutDatapribadiInput
    pendidikan?: DataPendidikanUncheckedCreateNestedOneWithoutDatapribadiInput
  }

  export type DatapribadiCreateOrConnectWithoutAsesmenMandiriInput = {
    where: DatapribadiWhereUniqueInput
    create: XOR<DatapribadiCreateWithoutAsesmenMandiriInput, DatapribadiUncheckedCreateWithoutAsesmenMandiriInput>
  }

  export type KompetensiCreateWithoutAsesmenMandiriInput = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
  }

  export type KompetensiUncheckedCreateWithoutAsesmenMandiriInput = {
    kuk: string
    detail: string
    kompetensi: string
    kategori: string
  }

  export type KompetensiCreateOrConnectWithoutAsesmenMandiriInput = {
    where: KompetensiWhereUniqueInput
    create: XOR<KompetensiCreateWithoutAsesmenMandiriInput, KompetensiUncheckedCreateWithoutAsesmenMandiriInput>
  }

  export type DatapribadiUpsertWithoutAsesmenMandiriInput = {
    update: XOR<DatapribadiUpdateWithoutAsesmenMandiriInput, DatapribadiUncheckedUpdateWithoutAsesmenMandiriInput>
    create: XOR<DatapribadiCreateWithoutAsesmenMandiriInput, DatapribadiUncheckedCreateWithoutAsesmenMandiriInput>
    where?: DatapribadiWhereInput
  }

  export type DatapribadiUpdateToOneWithWhereWithoutAsesmenMandiriInput = {
    where?: DatapribadiWhereInput
    data: XOR<DatapribadiUpdateWithoutAsesmenMandiriInput, DatapribadiUncheckedUpdateWithoutAsesmenMandiriInput>
  }

  export type DatapribadiUpdateWithoutAsesmenMandiriInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUpdateOneWithoutDatapribadiNestedInput
    pendidikan?: DataPendidikanUpdateOneWithoutDatapribadiNestedInput
  }

  export type DatapribadiUncheckedUpdateWithoutAsesmenMandiriInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tempatLahir?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    pekerjaan?: DataPekerjaanUncheckedUpdateOneWithoutDatapribadiNestedInput
    pendidikan?: DataPendidikanUncheckedUpdateOneWithoutDatapribadiNestedInput
  }

  export type KompetensiUpsertWithoutAsesmenMandiriInput = {
    update: XOR<KompetensiUpdateWithoutAsesmenMandiriInput, KompetensiUncheckedUpdateWithoutAsesmenMandiriInput>
    create: XOR<KompetensiCreateWithoutAsesmenMandiriInput, KompetensiUncheckedCreateWithoutAsesmenMandiriInput>
    where?: KompetensiWhereInput
  }

  export type KompetensiUpdateToOneWithWhereWithoutAsesmenMandiriInput = {
    where?: KompetensiWhereInput
    data: XOR<KompetensiUpdateWithoutAsesmenMandiriInput, KompetensiUncheckedUpdateWithoutAsesmenMandiriInput>
  }

  export type KompetensiUpdateWithoutAsesmenMandiriInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KompetensiUncheckedUpdateWithoutAsesmenMandiriInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    kompetensi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriCreateManyDatapribadiInput = {
    kuk: string
    asesmen: string
  }

  export type AsesmenMandiriUpdateWithoutDatapribadiInput = {
    asesmen?: StringFieldUpdateOperationsInput | string
    kompetensi?: KompetensiUpdateOneRequiredWithoutAsesmenMandiriNestedInput
  }

  export type AsesmenMandiriUncheckedUpdateWithoutDatapribadiInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriUncheckedUpdateManyWithoutDatapribadiInput = {
    kuk?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriCreateManyKompetensiInput = {
    nip: string
    asesmen: string
  }

  export type AsesmenMandiriUpdateWithoutKompetensiInput = {
    asesmen?: StringFieldUpdateOperationsInput | string
    datapribadi?: DatapribadiUpdateOneRequiredWithoutAsesmenMandiriNestedInput
  }

  export type AsesmenMandiriUncheckedUpdateWithoutKompetensiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
  }

  export type AsesmenMandiriUncheckedUpdateManyWithoutKompetensiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    asesmen?: StringFieldUpdateOperationsInput | string
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