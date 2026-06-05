
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model PromotionProduct
 * 
 */
export type PromotionProduct = $Result.DefaultSelection<Prisma.$PromotionProductPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model LoyaltyLedger
 * 
 */
export type LoyaltyLedger = $Result.DefaultSelection<Prisma.$LoyaltyLedgerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.promotionProduct`: Exposes CRUD operations for the **PromotionProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromotionProducts
    * const promotionProducts = await prisma.promotionProduct.findMany()
    * ```
    */
  get promotionProduct(): Prisma.PromotionProductDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.loyaltyLedger`: Exposes CRUD operations for the **LoyaltyLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoyaltyLedgers
    * const loyaltyLedgers = await prisma.loyaltyLedger.findMany()
    * ```
    */
  get loyaltyLedger(): Prisma.LoyaltyLedgerDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    Promotion: 'Promotion',
    PromotionProduct: 'PromotionProduct',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    LoyaltyLedger: 'LoyaltyLedger'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "product" | "productVariant" | "promotion" | "promotionProduct" | "cart" | "cartItem" | "order" | "orderItem" | "loyaltyLedger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      PromotionProduct: {
        payload: Prisma.$PromotionProductPayload<ExtArgs>
        fields: Prisma.PromotionProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          findFirst: {
            args: Prisma.PromotionProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          findMany: {
            args: Prisma.PromotionProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>[]
          }
          create: {
            args: Prisma.PromotionProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          createMany: {
            args: Prisma.PromotionProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromotionProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          update: {
            args: Prisma.PromotionProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          deleteMany: {
            args: Prisma.PromotionProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionProductPayload>
          }
          aggregate: {
            args: Prisma.PromotionProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotionProduct>
          }
          groupBy: {
            args: Prisma.PromotionProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionProductCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionProductCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      LoyaltyLedger: {
        payload: Prisma.$LoyaltyLedgerPayload<ExtArgs>
        fields: Prisma.LoyaltyLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoyaltyLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoyaltyLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          findFirst: {
            args: Prisma.LoyaltyLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoyaltyLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          findMany: {
            args: Prisma.LoyaltyLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>[]
          }
          create: {
            args: Prisma.LoyaltyLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          createMany: {
            args: Prisma.LoyaltyLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoyaltyLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          update: {
            args: Prisma.LoyaltyLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          deleteMany: {
            args: Prisma.LoyaltyLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoyaltyLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoyaltyLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLedgerPayload>
          }
          aggregate: {
            args: Prisma.LoyaltyLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoyaltyLedger>
          }
          groupBy: {
            args: Prisma.LoyaltyLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoyaltyLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyLedgerCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    loyaltyLedger: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    loyaltyLedger?: boolean | UserCountOutputTypeCountLoyaltyLedgerArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoyaltyLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyLedgerWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
    promotions: number
    orderItems: number
    cartItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
    promotions?: boolean | ProductCountOutputTypeCountPromotionsArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    cartItems: number
    orderItems: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | ProductVariantCountOutputTypeCountCartItemsArgs
    orderItems?: boolean | ProductVariantCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    products: number
    orders: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PromotionCountOutputTypeCountProductsArgs
    orders?: boolean | PromotionCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionProductWhereInput
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
    loyaltyLedger: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
    loyaltyLedger?: boolean | OrderCountOutputTypeCountLoyaltyLedgerArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountLoyaltyLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyLedgerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    loyaltyPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    loyaltyPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    phone: string | null
    city: string | null
    address: string | null
    loyaltyPoints: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    phone: string | null
    city: string | null
    address: string | null
    loyaltyPoints: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    phone: number
    city: number
    address: number
    loyaltyPoints: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    loyaltyPoints?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    loyaltyPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    city?: true
    address?: true
    loyaltyPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    city?: true
    address?: true
    loyaltyPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    city?: true
    address?: true
    loyaltyPoints?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    phone: string | null
    city: string | null
    address: string | null
    loyaltyPoints: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    loyaltyPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    loyaltyLedger?: boolean | User$loyaltyLedgerArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    loyaltyPoints?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    loyaltyLedger?: boolean | User$loyaltyLedgerArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      loyaltyLedger: Prisma.$LoyaltyLedgerPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      phone: string | null
      city: string | null
      address: string | null
      loyaltyPoints: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    loyaltyLedger<T extends User$loyaltyLedgerArgs<ExtArgs> = {}>(args?: Subset<T, User$loyaltyLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findMany"> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly loyaltyPoints: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.loyaltyLedger
   */
  export type User$loyaltyLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    where?: LoyaltyLedgerWhereInput
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    cursor?: LoyaltyLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoyaltyLedgerScalarFieldEnum | LoyaltyLedgerScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    basePrice: Decimal | null
    totalSold: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    basePrice: Decimal | null
    totalSold: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    basePrice: Decimal | null
    imageUrl: string | null
    images: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    slug: string | null
    totalSold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    basePrice: Decimal | null
    imageUrl: string | null
    images: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    slug: string | null
    totalSold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    basePrice: number
    imageUrl: number
    images: number
    isFeatured: number
    isActive: number
    slug: number
    totalSold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    basePrice?: true
    totalSold?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    basePrice?: true
    totalSold?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    imageUrl?: true
    images?: true
    isFeatured?: true
    isActive?: true
    slug?: true
    totalSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    imageUrl?: true
    images?: true
    isFeatured?: true
    isActive?: true
    slug?: true
    totalSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    basePrice?: true
    imageUrl?: true
    images?: true
    isFeatured?: true
    isActive?: true
    slug?: true
    totalSold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: string
    basePrice: Decimal
    imageUrl: string | null
    images: string | null
    isFeatured: boolean
    isActive: boolean
    slug: string
    totalSold: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    images?: boolean
    isFeatured?: boolean
    isActive?: boolean
    slug?: boolean
    totalSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variants?: boolean | Product$variantsArgs<ExtArgs>
    promotions?: boolean | Product$promotionsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>


  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    basePrice?: boolean
    imageUrl?: boolean
    images?: boolean
    isFeatured?: boolean
    isActive?: boolean
    slug?: boolean
    totalSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Product$variantsArgs<ExtArgs>
    promotions?: boolean | Product$promotionsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
      promotions: Prisma.$PromotionProductPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: string
      basePrice: Prisma.Decimal
      imageUrl: string | null
      images: string | null
      isFeatured: boolean
      isActive: boolean
      slug: string
      totalSold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany"> | Null>
    promotions<T extends Product$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findMany"> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly basePrice: FieldRef<"Product", 'Decimal'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly images: FieldRef<"Product", 'String'>
    readonly isFeatured: FieldRef<"Product", 'Boolean'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly totalSold: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product.promotions
   */
  export type Product$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    where?: PromotionProductWhereInput
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    cursor?: PromotionProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionProductScalarFieldEnum | PromotionProductScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    stock: number | null
    extraPrice: Decimal | null
  }

  export type ProductVariantSumAggregateOutputType = {
    id: number | null
    productId: number | null
    stock: number | null
    extraPrice: Decimal | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: number | null
    productId: number | null
    size: string | null
    stock: number | null
    extraPrice: Decimal | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    size: string | null
    stock: number | null
    extraPrice: Decimal | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    productId: number
    size: number
    stock: number
    extraPrice: number
    sku: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    id?: true
    productId?: true
    stock?: true
    extraPrice?: true
  }

  export type ProductVariantSumAggregateInputType = {
    id?: true
    productId?: true
    stock?: true
    extraPrice?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    productId?: true
    size?: true
    stock?: true
    extraPrice?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    productId?: true
    size?: true
    stock?: true
    extraPrice?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    productId?: true
    size?: true
    stock?: true
    extraPrice?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: number
    productId: number
    size: string
    stock: number
    extraPrice: Decimal
    sku: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    size?: boolean
    stock?: boolean
    extraPrice?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cartItems?: boolean | ProductVariant$cartItemsArgs<ExtArgs>
    orderItems?: boolean | ProductVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>


  export type ProductVariantSelectScalar = {
    id?: boolean
    productId?: boolean
    size?: boolean
    stock?: boolean
    extraPrice?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    cartItems?: boolean | ProductVariant$cartItemsArgs<ExtArgs>
    orderItems?: boolean | ProductVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      size: string
      stock: number
      extraPrice: Prisma.Decimal
      sku: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cartItems<T extends ProductVariant$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany"> | Null>
    orderItems<T extends ProductVariant$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'Int'>
    readonly productId: FieldRef<"ProductVariant", 'Int'>
    readonly size: FieldRef<"ProductVariant", 'String'>
    readonly stock: FieldRef<"ProductVariant", 'Int'>
    readonly extraPrice: FieldRef<"ProductVariant", 'Decimal'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant.cartItems
   */
  export type ProductVariant$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * ProductVariant.orderItems
   */
  export type ProductVariant$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type PromotionSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    usedCount: number | null
    startsAt: Date | null
    endsAt: Date | null
    isActive: boolean | null
    appliesTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    type: string | null
    value: Decimal | null
    minOrderAmount: Decimal | null
    maxUses: number | null
    usedCount: number | null
    startsAt: Date | null
    endsAt: Date | null
    isActive: boolean | null
    appliesTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    name: number
    code: number
    type: number
    value: number
    minOrderAmount: number
    maxUses: number
    usedCount: number
    startsAt: number
    endsAt: number
    isActive: number
    appliesTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    id?: true
    value?: true
    minOrderAmount?: true
    maxUses?: true
    usedCount?: true
  }

  export type PromotionSumAggregateInputType = {
    id?: true
    value?: true
    minOrderAmount?: true
    maxUses?: true
    usedCount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxUses?: true
    usedCount?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    appliesTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxUses?: true
    usedCount?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    appliesTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    value?: true
    minOrderAmount?: true
    maxUses?: true
    usedCount?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    appliesTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: number
    name: string
    code: string | null
    type: string
    value: Decimal
    minOrderAmount: Decimal
    maxUses: number | null
    usedCount: number
    startsAt: Date
    endsAt: Date
    isActive: boolean
    appliesTo: string
    createdAt: Date
    updatedAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    minOrderAmount?: boolean
    maxUses?: boolean
    usedCount?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    appliesTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Promotion$productsArgs<ExtArgs>
    orders?: boolean | Promotion$ordersArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>


  export type PromotionSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    minOrderAmount?: boolean
    maxUses?: boolean
    usedCount?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    appliesTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Promotion$productsArgs<ExtArgs>
    orders?: boolean | Promotion$ordersArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      products: Prisma.$PromotionProductPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
      type: string
      value: Prisma.Decimal
      minOrderAmount: Prisma.Decimal
      maxUses: number | null
      usedCount: number
      startsAt: Date
      endsAt: Date
      isActive: boolean
      appliesTo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Promotion$productsArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Promotion$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'Int'>
    readonly name: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly type: FieldRef<"Promotion", 'String'>
    readonly value: FieldRef<"Promotion", 'Decimal'>
    readonly minOrderAmount: FieldRef<"Promotion", 'Decimal'>
    readonly maxUses: FieldRef<"Promotion", 'Int'>
    readonly usedCount: FieldRef<"Promotion", 'Int'>
    readonly startsAt: FieldRef<"Promotion", 'DateTime'>
    readonly endsAt: FieldRef<"Promotion", 'DateTime'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
    readonly appliesTo: FieldRef<"Promotion", 'String'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion.products
   */
  export type Promotion$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    where?: PromotionProductWhereInput
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    cursor?: PromotionProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionProductScalarFieldEnum | PromotionProductScalarFieldEnum[]
  }

  /**
   * Promotion.orders
   */
  export type Promotion$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model PromotionProduct
   */

  export type AggregatePromotionProduct = {
    _count: PromotionProductCountAggregateOutputType | null
    _avg: PromotionProductAvgAggregateOutputType | null
    _sum: PromotionProductSumAggregateOutputType | null
    _min: PromotionProductMinAggregateOutputType | null
    _max: PromotionProductMaxAggregateOutputType | null
  }

  export type PromotionProductAvgAggregateOutputType = {
    promotionId: number | null
    productId: number | null
  }

  export type PromotionProductSumAggregateOutputType = {
    promotionId: number | null
    productId: number | null
  }

  export type PromotionProductMinAggregateOutputType = {
    promotionId: number | null
    productId: number | null
  }

  export type PromotionProductMaxAggregateOutputType = {
    promotionId: number | null
    productId: number | null
  }

  export type PromotionProductCountAggregateOutputType = {
    promotionId: number
    productId: number
    _all: number
  }


  export type PromotionProductAvgAggregateInputType = {
    promotionId?: true
    productId?: true
  }

  export type PromotionProductSumAggregateInputType = {
    promotionId?: true
    productId?: true
  }

  export type PromotionProductMinAggregateInputType = {
    promotionId?: true
    productId?: true
  }

  export type PromotionProductMaxAggregateInputType = {
    promotionId?: true
    productId?: true
  }

  export type PromotionProductCountAggregateInputType = {
    promotionId?: true
    productId?: true
    _all?: true
  }

  export type PromotionProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionProduct to aggregate.
     */
    where?: PromotionProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionProducts to fetch.
     */
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromotionProducts
    **/
    _count?: true | PromotionProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionProductMaxAggregateInputType
  }

  export type GetPromotionProductAggregateType<T extends PromotionProductAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotionProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotionProduct[P]>
      : GetScalarType<T[P], AggregatePromotionProduct[P]>
  }




  export type PromotionProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionProductWhereInput
    orderBy?: PromotionProductOrderByWithAggregationInput | PromotionProductOrderByWithAggregationInput[]
    by: PromotionProductScalarFieldEnum[] | PromotionProductScalarFieldEnum
    having?: PromotionProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionProductCountAggregateInputType | true
    _avg?: PromotionProductAvgAggregateInputType
    _sum?: PromotionProductSumAggregateInputType
    _min?: PromotionProductMinAggregateInputType
    _max?: PromotionProductMaxAggregateInputType
  }

  export type PromotionProductGroupByOutputType = {
    promotionId: number
    productId: number
    _count: PromotionProductCountAggregateOutputType | null
    _avg: PromotionProductAvgAggregateOutputType | null
    _sum: PromotionProductSumAggregateOutputType | null
    _min: PromotionProductMinAggregateOutputType | null
    _max: PromotionProductMaxAggregateOutputType | null
  }

  type GetPromotionProductGroupByPayload<T extends PromotionProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionProductGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionProductGroupByOutputType[P]>
        }
      >
    >


  export type PromotionProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    promotionId?: boolean
    productId?: boolean
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotionProduct"]>


  export type PromotionProductSelectScalar = {
    promotionId?: boolean
    productId?: boolean
  }

  export type PromotionProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | PromotionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PromotionProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromotionProduct"
    objects: {
      promotion: Prisma.$PromotionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      promotionId: number
      productId: number
    }, ExtArgs["result"]["promotionProduct"]>
    composites: {}
  }

  type PromotionProductGetPayload<S extends boolean | null | undefined | PromotionProductDefaultArgs> = $Result.GetResult<Prisma.$PromotionProductPayload, S>

  type PromotionProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionProductCountAggregateInputType | true
    }

  export interface PromotionProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromotionProduct'], meta: { name: 'PromotionProduct' } }
    /**
     * Find zero or one PromotionProduct that matches the filter.
     * @param {PromotionProductFindUniqueArgs} args - Arguments to find a PromotionProduct
     * @example
     * // Get one PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionProductFindUniqueArgs>(args: SelectSubset<T, PromotionProductFindUniqueArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PromotionProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionProductFindUniqueOrThrowArgs} args - Arguments to find a PromotionProduct
     * @example
     * // Get one PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionProductFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PromotionProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductFindFirstArgs} args - Arguments to find a PromotionProduct
     * @example
     * // Get one PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionProductFindFirstArgs>(args?: SelectSubset<T, PromotionProductFindFirstArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PromotionProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductFindFirstOrThrowArgs} args - Arguments to find a PromotionProduct
     * @example
     * // Get one PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionProductFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PromotionProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromotionProducts
     * const promotionProducts = await prisma.promotionProduct.findMany()
     * 
     * // Get first 10 PromotionProducts
     * const promotionProducts = await prisma.promotionProduct.findMany({ take: 10 })
     * 
     * // Only select the `promotionId`
     * const promotionProductWithPromotionIdOnly = await prisma.promotionProduct.findMany({ select: { promotionId: true } })
     * 
     */
    findMany<T extends PromotionProductFindManyArgs>(args?: SelectSubset<T, PromotionProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PromotionProduct.
     * @param {PromotionProductCreateArgs} args - Arguments to create a PromotionProduct.
     * @example
     * // Create one PromotionProduct
     * const PromotionProduct = await prisma.promotionProduct.create({
     *   data: {
     *     // ... data to create a PromotionProduct
     *   }
     * })
     * 
     */
    create<T extends PromotionProductCreateArgs>(args: SelectSubset<T, PromotionProductCreateArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PromotionProducts.
     * @param {PromotionProductCreateManyArgs} args - Arguments to create many PromotionProducts.
     * @example
     * // Create many PromotionProducts
     * const promotionProduct = await prisma.promotionProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionProductCreateManyArgs>(args?: SelectSubset<T, PromotionProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PromotionProduct.
     * @param {PromotionProductDeleteArgs} args - Arguments to delete one PromotionProduct.
     * @example
     * // Delete one PromotionProduct
     * const PromotionProduct = await prisma.promotionProduct.delete({
     *   where: {
     *     // ... filter to delete one PromotionProduct
     *   }
     * })
     * 
     */
    delete<T extends PromotionProductDeleteArgs>(args: SelectSubset<T, PromotionProductDeleteArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PromotionProduct.
     * @param {PromotionProductUpdateArgs} args - Arguments to update one PromotionProduct.
     * @example
     * // Update one PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionProductUpdateArgs>(args: SelectSubset<T, PromotionProductUpdateArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PromotionProducts.
     * @param {PromotionProductDeleteManyArgs} args - Arguments to filter PromotionProducts to delete.
     * @example
     * // Delete a few PromotionProducts
     * const { count } = await prisma.promotionProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionProductDeleteManyArgs>(args?: SelectSubset<T, PromotionProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromotionProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromotionProducts
     * const promotionProduct = await prisma.promotionProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionProductUpdateManyArgs>(args: SelectSubset<T, PromotionProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromotionProduct.
     * @param {PromotionProductUpsertArgs} args - Arguments to update or create a PromotionProduct.
     * @example
     * // Update or create a PromotionProduct
     * const promotionProduct = await prisma.promotionProduct.upsert({
     *   create: {
     *     // ... data to create a PromotionProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromotionProduct we want to update
     *   }
     * })
     */
    upsert<T extends PromotionProductUpsertArgs>(args: SelectSubset<T, PromotionProductUpsertArgs<ExtArgs>>): Prisma__PromotionProductClient<$Result.GetResult<Prisma.$PromotionProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PromotionProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductCountArgs} args - Arguments to filter PromotionProducts to count.
     * @example
     * // Count the number of PromotionProducts
     * const count = await prisma.promotionProduct.count({
     *   where: {
     *     // ... the filter for the PromotionProducts we want to count
     *   }
     * })
    **/
    count<T extends PromotionProductCountArgs>(
      args?: Subset<T, PromotionProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromotionProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionProductAggregateArgs>(args: Subset<T, PromotionProductAggregateArgs>): Prisma.PrismaPromise<GetPromotionProductAggregateType<T>>

    /**
     * Group by PromotionProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionProductGroupByArgs} args - Group by arguments.
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
      T extends PromotionProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionProductGroupByArgs['orderBy'] }
        : { orderBy?: PromotionProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromotionProduct model
   */
  readonly fields: PromotionProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromotionProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotion<T extends PromotionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromotionDefaultArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PromotionProduct model
   */ 
  interface PromotionProductFieldRefs {
    readonly promotionId: FieldRef<"PromotionProduct", 'Int'>
    readonly productId: FieldRef<"PromotionProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PromotionProduct findUnique
   */
  export type PromotionProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter, which PromotionProduct to fetch.
     */
    where: PromotionProductWhereUniqueInput
  }

  /**
   * PromotionProduct findUniqueOrThrow
   */
  export type PromotionProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter, which PromotionProduct to fetch.
     */
    where: PromotionProductWhereUniqueInput
  }

  /**
   * PromotionProduct findFirst
   */
  export type PromotionProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter, which PromotionProduct to fetch.
     */
    where?: PromotionProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionProducts to fetch.
     */
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionProducts.
     */
    cursor?: PromotionProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionProducts.
     */
    distinct?: PromotionProductScalarFieldEnum | PromotionProductScalarFieldEnum[]
  }

  /**
   * PromotionProduct findFirstOrThrow
   */
  export type PromotionProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter, which PromotionProduct to fetch.
     */
    where?: PromotionProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionProducts to fetch.
     */
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionProducts.
     */
    cursor?: PromotionProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionProducts.
     */
    distinct?: PromotionProductScalarFieldEnum | PromotionProductScalarFieldEnum[]
  }

  /**
   * PromotionProduct findMany
   */
  export type PromotionProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter, which PromotionProducts to fetch.
     */
    where?: PromotionProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionProducts to fetch.
     */
    orderBy?: PromotionProductOrderByWithRelationInput | PromotionProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromotionProducts.
     */
    cursor?: PromotionProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionProducts.
     */
    skip?: number
    distinct?: PromotionProductScalarFieldEnum | PromotionProductScalarFieldEnum[]
  }

  /**
   * PromotionProduct create
   */
  export type PromotionProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * The data needed to create a PromotionProduct.
     */
    data: XOR<PromotionProductCreateInput, PromotionProductUncheckedCreateInput>
  }

  /**
   * PromotionProduct createMany
   */
  export type PromotionProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromotionProducts.
     */
    data: PromotionProductCreateManyInput | PromotionProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromotionProduct update
   */
  export type PromotionProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * The data needed to update a PromotionProduct.
     */
    data: XOR<PromotionProductUpdateInput, PromotionProductUncheckedUpdateInput>
    /**
     * Choose, which PromotionProduct to update.
     */
    where: PromotionProductWhereUniqueInput
  }

  /**
   * PromotionProduct updateMany
   */
  export type PromotionProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromotionProducts.
     */
    data: XOR<PromotionProductUpdateManyMutationInput, PromotionProductUncheckedUpdateManyInput>
    /**
     * Filter which PromotionProducts to update
     */
    where?: PromotionProductWhereInput
  }

  /**
   * PromotionProduct upsert
   */
  export type PromotionProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * The filter to search for the PromotionProduct to update in case it exists.
     */
    where: PromotionProductWhereUniqueInput
    /**
     * In case the PromotionProduct found by the `where` argument doesn't exist, create a new PromotionProduct with this data.
     */
    create: XOR<PromotionProductCreateInput, PromotionProductUncheckedCreateInput>
    /**
     * In case the PromotionProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionProductUpdateInput, PromotionProductUncheckedUpdateInput>
  }

  /**
   * PromotionProduct delete
   */
  export type PromotionProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
    /**
     * Filter which PromotionProduct to delete.
     */
    where: PromotionProductWhereUniqueInput
  }

  /**
   * PromotionProduct deleteMany
   */
  export type PromotionProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionProducts to delete
     */
    where?: PromotionProductWhereInput
  }

  /**
   * PromotionProduct without action
   */
  export type PromotionProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionProduct
     */
    select?: PromotionProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionProductInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>


  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cart model
   */ 
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly userId: FieldRef<"Cart", 'Int'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    variantId: number
    quantity: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cartId: number
    productId: number
    variantId: number
    quantity: number
    unitPrice: Decimal
    createdAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>


  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      productId: number
      variantId: number
      quantity: number
      unitPrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CartItem model
   */ 
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly cartId: FieldRef<"CartItem", 'Int'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly variantId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly unitPrice: FieldRef<"CartItem", 'Decimal'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    total: Decimal | null
    promotionId: number | null
    pointsUsed: number | null
    pointsEarned: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    total: Decimal | null
    promotionId: number | null
    pointsUsed: number | null
    pointsEarned: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    total: Decimal | null
    promotionId: number | null
    pointsUsed: number | null
    pointsEarned: number | null
    shippingName: string | null
    shippingEmail: string | null
    shippingPhone: string | null
    shippingAddress: string | null
    shippingCity: string | null
    shippingNotes: string | null
    confirmToken: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    total: Decimal | null
    promotionId: number | null
    pointsUsed: number | null
    pointsEarned: number | null
    shippingName: string | null
    shippingEmail: string | null
    shippingPhone: string | null
    shippingAddress: string | null
    shippingCity: string | null
    shippingNotes: string | null
    confirmToken: string | null
    confirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    paymentStatus: number
    paymentMethod: number
    subtotal: number
    discountAmount: number
    total: number
    promotionId: number
    pointsUsed: number
    pointsEarned: number
    shippingName: number
    shippingEmail: number
    shippingPhone: number
    shippingAddress: number
    shippingCity: number
    shippingNotes: number
    confirmToken: number
    confirmedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    subtotal?: true
    discountAmount?: true
    total?: true
    promotionId?: true
    pointsUsed?: true
    pointsEarned?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    subtotal?: true
    discountAmount?: true
    total?: true
    promotionId?: true
    pointsUsed?: true
    pointsEarned?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    discountAmount?: true
    total?: true
    promotionId?: true
    pointsUsed?: true
    pointsEarned?: true
    shippingName?: true
    shippingEmail?: true
    shippingPhone?: true
    shippingAddress?: true
    shippingCity?: true
    shippingNotes?: true
    confirmToken?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    discountAmount?: true
    total?: true
    promotionId?: true
    pointsUsed?: true
    pointsEarned?: true
    shippingName?: true
    shippingEmail?: true
    shippingPhone?: true
    shippingAddress?: true
    shippingCity?: true
    shippingNotes?: true
    confirmToken?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    discountAmount?: true
    total?: true
    promotionId?: true
    pointsUsed?: true
    pointsEarned?: true
    shippingName?: true
    shippingEmail?: true
    shippingPhone?: true
    shippingAddress?: true
    shippingCity?: true
    shippingNotes?: true
    confirmToken?: true
    confirmedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number | null
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal
    discountAmount: Decimal
    total: Decimal
    promotionId: number | null
    pointsUsed: number
    pointsEarned: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes: string | null
    confirmToken: string | null
    confirmedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    total?: boolean
    promotionId?: boolean
    pointsUsed?: boolean
    pointsEarned?: boolean
    shippingName?: boolean
    shippingEmail?: boolean
    shippingPhone?: boolean
    shippingAddress?: boolean
    shippingCity?: boolean
    shippingNotes?: boolean
    confirmToken?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
    promotion?: boolean | Order$promotionArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    loyaltyLedger?: boolean | Order$loyaltyLedgerArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>


  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    total?: boolean
    promotionId?: boolean
    pointsUsed?: boolean
    pointsEarned?: boolean
    shippingName?: boolean
    shippingEmail?: boolean
    shippingPhone?: boolean
    shippingAddress?: boolean
    shippingCity?: boolean
    shippingNotes?: boolean
    confirmToken?: boolean
    confirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
    promotion?: boolean | Order$promotionArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    loyaltyLedger?: boolean | Order$loyaltyLedgerArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      promotion: Prisma.$PromotionPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      loyaltyLedger: Prisma.$LoyaltyLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      status: string
      paymentStatus: string
      paymentMethod: string
      subtotal: Prisma.Decimal
      discountAmount: Prisma.Decimal
      total: Prisma.Decimal
      promotionId: number | null
      pointsUsed: number
      pointsEarned: number
      shippingName: string
      shippingEmail: string
      shippingPhone: string
      shippingAddress: string
      shippingCity: string
      shippingNotes: string | null
      confirmToken: string | null
      confirmedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    promotion<T extends Order$promotionArgs<ExtArgs> = {}>(args?: Subset<T, Order$promotionArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    loyaltyLedger<T extends Order$loyaltyLedgerArgs<ExtArgs> = {}>(args?: Subset<T, Order$loyaltyLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Decimal'>
    readonly discountAmount: FieldRef<"Order", 'Decimal'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly promotionId: FieldRef<"Order", 'Int'>
    readonly pointsUsed: FieldRef<"Order", 'Int'>
    readonly pointsEarned: FieldRef<"Order", 'Int'>
    readonly shippingName: FieldRef<"Order", 'String'>
    readonly shippingEmail: FieldRef<"Order", 'String'>
    readonly shippingPhone: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'String'>
    readonly shippingCity: FieldRef<"Order", 'String'>
    readonly shippingNotes: FieldRef<"Order", 'String'>
    readonly confirmToken: FieldRef<"Order", 'String'>
    readonly confirmedAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.promotion
   */
  export type Order$promotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.loyaltyLedger
   */
  export type Order$loyaltyLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    where?: LoyaltyLedgerWhereInput
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    cursor?: LoyaltyLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoyaltyLedgerScalarFieldEnum | LoyaltyLedgerScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    variantId: number | null
    productName: string | null
    size: string | null
    quantity: number | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    variantId: number | null
    productName: string | null
    size: string | null
    quantity: number | null
    unitPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    productName: number
    size: number
    quantity: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    productName?: true
    size?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    productName?: true
    size?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    variantId?: true
    productName?: true
    size?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    productName?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>


  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    variantId?: boolean
    productName?: boolean
    size?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      variant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      variantId: number
      productName: string
      size: string
      quantity: number
      unitPrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly productId: FieldRef<"OrderItem", 'Int'>
    readonly variantId: FieldRef<"OrderItem", 'Int'>
    readonly productName: FieldRef<"OrderItem", 'String'>
    readonly size: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model LoyaltyLedger
   */

  export type AggregateLoyaltyLedger = {
    _count: LoyaltyLedgerCountAggregateOutputType | null
    _avg: LoyaltyLedgerAvgAggregateOutputType | null
    _sum: LoyaltyLedgerSumAggregateOutputType | null
    _min: LoyaltyLedgerMinAggregateOutputType | null
    _max: LoyaltyLedgerMaxAggregateOutputType | null
  }

  export type LoyaltyLedgerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    orderId: number | null
    points: number | null
  }

  export type LoyaltyLedgerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    orderId: number | null
    points: number | null
  }

  export type LoyaltyLedgerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    orderId: number | null
    type: string | null
    points: number | null
    description: string | null
    createdAt: Date | null
  }

  export type LoyaltyLedgerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    orderId: number | null
    type: string | null
    points: number | null
    description: string | null
    createdAt: Date | null
  }

  export type LoyaltyLedgerCountAggregateOutputType = {
    id: number
    userId: number
    orderId: number
    type: number
    points: number
    description: number
    createdAt: number
    _all: number
  }


  export type LoyaltyLedgerAvgAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    points?: true
  }

  export type LoyaltyLedgerSumAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    points?: true
  }

  export type LoyaltyLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    type?: true
    points?: true
    description?: true
    createdAt?: true
  }

  export type LoyaltyLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    type?: true
    points?: true
    description?: true
    createdAt?: true
  }

  export type LoyaltyLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    orderId?: true
    type?: true
    points?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type LoyaltyLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyLedger to aggregate.
     */
    where?: LoyaltyLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLedgers to fetch.
     */
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoyaltyLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoyaltyLedgers
    **/
    _count?: true | LoyaltyLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoyaltyLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoyaltyLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyLedgerMaxAggregateInputType
  }

  export type GetLoyaltyLedgerAggregateType<T extends LoyaltyLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateLoyaltyLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoyaltyLedger[P]>
      : GetScalarType<T[P], AggregateLoyaltyLedger[P]>
  }




  export type LoyaltyLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyLedgerWhereInput
    orderBy?: LoyaltyLedgerOrderByWithAggregationInput | LoyaltyLedgerOrderByWithAggregationInput[]
    by: LoyaltyLedgerScalarFieldEnum[] | LoyaltyLedgerScalarFieldEnum
    having?: LoyaltyLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoyaltyLedgerCountAggregateInputType | true
    _avg?: LoyaltyLedgerAvgAggregateInputType
    _sum?: LoyaltyLedgerSumAggregateInputType
    _min?: LoyaltyLedgerMinAggregateInputType
    _max?: LoyaltyLedgerMaxAggregateInputType
  }

  export type LoyaltyLedgerGroupByOutputType = {
    id: number
    userId: number
    orderId: number | null
    type: string
    points: number
    description: string
    createdAt: Date
    _count: LoyaltyLedgerCountAggregateOutputType | null
    _avg: LoyaltyLedgerAvgAggregateOutputType | null
    _sum: LoyaltyLedgerSumAggregateOutputType | null
    _min: LoyaltyLedgerMinAggregateOutputType | null
    _max: LoyaltyLedgerMaxAggregateOutputType | null
  }

  type GetLoyaltyLedgerGroupByPayload<T extends LoyaltyLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoyaltyLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoyaltyLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoyaltyLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], LoyaltyLedgerGroupByOutputType[P]>
        }
      >
    >


  export type LoyaltyLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    orderId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | LoyaltyLedger$orderArgs<ExtArgs>
  }, ExtArgs["result"]["loyaltyLedger"]>


  export type LoyaltyLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    orderId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type LoyaltyLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | LoyaltyLedger$orderArgs<ExtArgs>
  }

  export type $LoyaltyLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoyaltyLedger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      orderId: number | null
      type: string
      points: number
      description: string
      createdAt: Date
    }, ExtArgs["result"]["loyaltyLedger"]>
    composites: {}
  }

  type LoyaltyLedgerGetPayload<S extends boolean | null | undefined | LoyaltyLedgerDefaultArgs> = $Result.GetResult<Prisma.$LoyaltyLedgerPayload, S>

  type LoyaltyLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoyaltyLedgerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoyaltyLedgerCountAggregateInputType | true
    }

  export interface LoyaltyLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyLedger'], meta: { name: 'LoyaltyLedger' } }
    /**
     * Find zero or one LoyaltyLedger that matches the filter.
     * @param {LoyaltyLedgerFindUniqueArgs} args - Arguments to find a LoyaltyLedger
     * @example
     * // Get one LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyLedgerFindUniqueArgs>(args: SelectSubset<T, LoyaltyLedgerFindUniqueArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoyaltyLedger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoyaltyLedgerFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyLedger
     * @example
     * // Get one LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, LoyaltyLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoyaltyLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerFindFirstArgs} args - Arguments to find a LoyaltyLedger
     * @example
     * // Get one LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyLedgerFindFirstArgs>(args?: SelectSubset<T, LoyaltyLedgerFindFirstArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoyaltyLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerFindFirstOrThrowArgs} args - Arguments to find a LoyaltyLedger
     * @example
     * // Get one LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, LoyaltyLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoyaltyLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyLedgers
     * const loyaltyLedgers = await prisma.loyaltyLedger.findMany()
     * 
     * // Get first 10 LoyaltyLedgers
     * const loyaltyLedgers = await prisma.loyaltyLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loyaltyLedgerWithIdOnly = await prisma.loyaltyLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoyaltyLedgerFindManyArgs>(args?: SelectSubset<T, LoyaltyLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoyaltyLedger.
     * @param {LoyaltyLedgerCreateArgs} args - Arguments to create a LoyaltyLedger.
     * @example
     * // Create one LoyaltyLedger
     * const LoyaltyLedger = await prisma.loyaltyLedger.create({
     *   data: {
     *     // ... data to create a LoyaltyLedger
     *   }
     * })
     * 
     */
    create<T extends LoyaltyLedgerCreateArgs>(args: SelectSubset<T, LoyaltyLedgerCreateArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoyaltyLedgers.
     * @param {LoyaltyLedgerCreateManyArgs} args - Arguments to create many LoyaltyLedgers.
     * @example
     * // Create many LoyaltyLedgers
     * const loyaltyLedger = await prisma.loyaltyLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoyaltyLedgerCreateManyArgs>(args?: SelectSubset<T, LoyaltyLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoyaltyLedger.
     * @param {LoyaltyLedgerDeleteArgs} args - Arguments to delete one LoyaltyLedger.
     * @example
     * // Delete one LoyaltyLedger
     * const LoyaltyLedger = await prisma.loyaltyLedger.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyLedger
     *   }
     * })
     * 
     */
    delete<T extends LoyaltyLedgerDeleteArgs>(args: SelectSubset<T, LoyaltyLedgerDeleteArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoyaltyLedger.
     * @param {LoyaltyLedgerUpdateArgs} args - Arguments to update one LoyaltyLedger.
     * @example
     * // Update one LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoyaltyLedgerUpdateArgs>(args: SelectSubset<T, LoyaltyLedgerUpdateArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoyaltyLedgers.
     * @param {LoyaltyLedgerDeleteManyArgs} args - Arguments to filter LoyaltyLedgers to delete.
     * @example
     * // Delete a few LoyaltyLedgers
     * const { count } = await prisma.loyaltyLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoyaltyLedgerDeleteManyArgs>(args?: SelectSubset<T, LoyaltyLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoyaltyLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyLedgers
     * const loyaltyLedger = await prisma.loyaltyLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoyaltyLedgerUpdateManyArgs>(args: SelectSubset<T, LoyaltyLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoyaltyLedger.
     * @param {LoyaltyLedgerUpsertArgs} args - Arguments to update or create a LoyaltyLedger.
     * @example
     * // Update or create a LoyaltyLedger
     * const loyaltyLedger = await prisma.loyaltyLedger.upsert({
     *   create: {
     *     // ... data to create a LoyaltyLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyLedger we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyLedgerUpsertArgs>(args: SelectSubset<T, LoyaltyLedgerUpsertArgs<ExtArgs>>): Prisma__LoyaltyLedgerClient<$Result.GetResult<Prisma.$LoyaltyLedgerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoyaltyLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerCountArgs} args - Arguments to filter LoyaltyLedgers to count.
     * @example
     * // Count the number of LoyaltyLedgers
     * const count = await prisma.loyaltyLedger.count({
     *   where: {
     *     // ... the filter for the LoyaltyLedgers we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyLedgerCountArgs>(
      args?: Subset<T, LoyaltyLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoyaltyLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoyaltyLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyLedgerAggregateArgs>(args: Subset<T, LoyaltyLedgerAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyLedgerAggregateType<T>>

    /**
     * Group by LoyaltyLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLedgerGroupByArgs} args - Group by arguments.
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
      T extends LoyaltyLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoyaltyLedgerGroupByArgs['orderBy'] }
        : { orderBy?: LoyaltyLedgerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoyaltyLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoyaltyLedger model
   */
  readonly fields: LoyaltyLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoyaltyLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoyaltyLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order<T extends LoyaltyLedger$orderArgs<ExtArgs> = {}>(args?: Subset<T, LoyaltyLedger$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LoyaltyLedger model
   */ 
  interface LoyaltyLedgerFieldRefs {
    readonly id: FieldRef<"LoyaltyLedger", 'Int'>
    readonly userId: FieldRef<"LoyaltyLedger", 'Int'>
    readonly orderId: FieldRef<"LoyaltyLedger", 'Int'>
    readonly type: FieldRef<"LoyaltyLedger", 'String'>
    readonly points: FieldRef<"LoyaltyLedger", 'Int'>
    readonly description: FieldRef<"LoyaltyLedger", 'String'>
    readonly createdAt: FieldRef<"LoyaltyLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoyaltyLedger findUnique
   */
  export type LoyaltyLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLedger to fetch.
     */
    where: LoyaltyLedgerWhereUniqueInput
  }

  /**
   * LoyaltyLedger findUniqueOrThrow
   */
  export type LoyaltyLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLedger to fetch.
     */
    where: LoyaltyLedgerWhereUniqueInput
  }

  /**
   * LoyaltyLedger findFirst
   */
  export type LoyaltyLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLedger to fetch.
     */
    where?: LoyaltyLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLedgers to fetch.
     */
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyLedgers.
     */
    cursor?: LoyaltyLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyLedgers.
     */
    distinct?: LoyaltyLedgerScalarFieldEnum | LoyaltyLedgerScalarFieldEnum[]
  }

  /**
   * LoyaltyLedger findFirstOrThrow
   */
  export type LoyaltyLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLedger to fetch.
     */
    where?: LoyaltyLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLedgers to fetch.
     */
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyLedgers.
     */
    cursor?: LoyaltyLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyLedgers.
     */
    distinct?: LoyaltyLedgerScalarFieldEnum | LoyaltyLedgerScalarFieldEnum[]
  }

  /**
   * LoyaltyLedger findMany
   */
  export type LoyaltyLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLedgers to fetch.
     */
    where?: LoyaltyLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLedgers to fetch.
     */
    orderBy?: LoyaltyLedgerOrderByWithRelationInput | LoyaltyLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoyaltyLedgers.
     */
    cursor?: LoyaltyLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLedgers.
     */
    skip?: number
    distinct?: LoyaltyLedgerScalarFieldEnum | LoyaltyLedgerScalarFieldEnum[]
  }

  /**
   * LoyaltyLedger create
   */
  export type LoyaltyLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a LoyaltyLedger.
     */
    data: XOR<LoyaltyLedgerCreateInput, LoyaltyLedgerUncheckedCreateInput>
  }

  /**
   * LoyaltyLedger createMany
   */
  export type LoyaltyLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyLedgers.
     */
    data: LoyaltyLedgerCreateManyInput | LoyaltyLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoyaltyLedger update
   */
  export type LoyaltyLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a LoyaltyLedger.
     */
    data: XOR<LoyaltyLedgerUpdateInput, LoyaltyLedgerUncheckedUpdateInput>
    /**
     * Choose, which LoyaltyLedger to update.
     */
    where: LoyaltyLedgerWhereUniqueInput
  }

  /**
   * LoyaltyLedger updateMany
   */
  export type LoyaltyLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyLedgers.
     */
    data: XOR<LoyaltyLedgerUpdateManyMutationInput, LoyaltyLedgerUncheckedUpdateManyInput>
    /**
     * Filter which LoyaltyLedgers to update
     */
    where?: LoyaltyLedgerWhereInput
  }

  /**
   * LoyaltyLedger upsert
   */
  export type LoyaltyLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the LoyaltyLedger to update in case it exists.
     */
    where: LoyaltyLedgerWhereUniqueInput
    /**
     * In case the LoyaltyLedger found by the `where` argument doesn't exist, create a new LoyaltyLedger with this data.
     */
    create: XOR<LoyaltyLedgerCreateInput, LoyaltyLedgerUncheckedCreateInput>
    /**
     * In case the LoyaltyLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoyaltyLedgerUpdateInput, LoyaltyLedgerUncheckedUpdateInput>
  }

  /**
   * LoyaltyLedger delete
   */
  export type LoyaltyLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
    /**
     * Filter which LoyaltyLedger to delete.
     */
    where: LoyaltyLedgerWhereUniqueInput
  }

  /**
   * LoyaltyLedger deleteMany
   */
  export type LoyaltyLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyLedgers to delete
     */
    where?: LoyaltyLedgerWhereInput
  }

  /**
   * LoyaltyLedger.order
   */
  export type LoyaltyLedger$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * LoyaltyLedger without action
   */
  export type LoyaltyLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLedger
     */
    select?: LoyaltyLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLedgerInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phone: 'phone',
    city: 'city',
    address: 'address',
    loyaltyPoints: 'loyaltyPoints',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    basePrice: 'basePrice',
    imageUrl: 'imageUrl',
    images: 'images',
    isFeatured: 'isFeatured',
    isActive: 'isActive',
    slug: 'slug',
    totalSold: 'totalSold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    size: 'size',
    stock: 'stock',
    extraPrice: 'extraPrice',
    sku: 'sku',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    type: 'type',
    value: 'value',
    minOrderAmount: 'minOrderAmount',
    maxUses: 'maxUses',
    usedCount: 'usedCount',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    isActive: 'isActive',
    appliesTo: 'appliesTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PromotionProductScalarFieldEnum: {
    promotionId: 'promotionId',
    productId: 'productId'
  };

  export type PromotionProductScalarFieldEnum = (typeof PromotionProductScalarFieldEnum)[keyof typeof PromotionProductScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    variantId: 'variantId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    subtotal: 'subtotal',
    discountAmount: 'discountAmount',
    total: 'total',
    promotionId: 'promotionId',
    pointsUsed: 'pointsUsed',
    pointsEarned: 'pointsEarned',
    shippingName: 'shippingName',
    shippingEmail: 'shippingEmail',
    shippingPhone: 'shippingPhone',
    shippingAddress: 'shippingAddress',
    shippingCity: 'shippingCity',
    shippingNotes: 'shippingNotes',
    confirmToken: 'confirmToken',
    confirmedAt: 'confirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    variantId: 'variantId',
    productName: 'productName',
    size: 'size',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const LoyaltyLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    orderId: 'orderId',
    type: 'type',
    points: 'points',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type LoyaltyLedgerScalarFieldEnum = (typeof LoyaltyLedgerScalarFieldEnum)[keyof typeof LoyaltyLedgerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    loyaltyPoints?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    loyaltyLedger?: LoyaltyLedgerListRelationFilter
    cart?: XOR<CartNullableRelationFilter, CartWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    loyaltyPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    loyaltyLedger?: LoyaltyLedgerOrderByRelationAggregateInput
    cart?: CartOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    loyaltyPoints?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    loyaltyLedger?: LoyaltyLedgerListRelationFilter
    cart?: XOR<CartNullableRelationFilter, CartWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    loyaltyPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    loyaltyPoints?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    basePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"Product"> | string | null
    images?: StringNullableFilter<"Product"> | string | null
    isFeatured?: BoolFilter<"Product"> | boolean
    isActive?: BoolFilter<"Product"> | boolean
    slug?: StringFilter<"Product"> | string
    totalSold?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
    promotions?: PromotionProductListRelationFilter
    orderItems?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    totalSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
    promotions?: PromotionProductOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    basePrice?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"Product"> | string | null
    images?: StringNullableFilter<"Product"> | string | null
    isFeatured?: BoolFilter<"Product"> | boolean
    isActive?: BoolFilter<"Product"> | boolean
    totalSold?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
    promotions?: PromotionProductListRelationFilter
    orderItems?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    totalSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    basePrice?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    images?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Product"> | boolean
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    slug?: StringWithAggregatesFilter<"Product"> | string
    totalSold?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    size?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    extraPrice?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
    sku?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    cartItems?: CartItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    productId_size?: ProductVariantProductIdSizeCompoundUniqueInput
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    productId?: IntFilter<"ProductVariant"> | number
    size?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    extraPrice?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    cartItems?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "sku" | "productId_size">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
    sku?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductVariant"> | number
    productId?: IntWithAggregatesFilter<"ProductVariant"> | number
    size?: StringWithAggregatesFilter<"ProductVariant"> | string
    stock?: IntWithAggregatesFilter<"ProductVariant"> | number
    extraPrice?: DecimalWithAggregatesFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: IntFilter<"Promotion"> | number
    name?: StringFilter<"Promotion"> | string
    code?: StringNullableFilter<"Promotion"> | string | null
    type?: StringFilter<"Promotion"> | string
    value?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableFilter<"Promotion"> | number | null
    usedCount?: IntFilter<"Promotion"> | number
    startsAt?: DateTimeFilter<"Promotion"> | Date | string
    endsAt?: DateTimeFilter<"Promotion"> | Date | string
    isActive?: BoolFilter<"Promotion"> | boolean
    appliesTo?: StringFilter<"Promotion"> | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
    products?: PromotionProductListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    appliesTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: PromotionProductOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    name?: StringFilter<"Promotion"> | string
    type?: StringFilter<"Promotion"> | string
    value?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableFilter<"Promotion"> | number | null
    usedCount?: IntFilter<"Promotion"> | number
    startsAt?: DateTimeFilter<"Promotion"> | Date | string
    endsAt?: DateTimeFilter<"Promotion"> | Date | string
    isActive?: BoolFilter<"Promotion"> | boolean
    appliesTo?: StringFilter<"Promotion"> | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeFilter<"Promotion"> | Date | string
    products?: PromotionProductListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    appliesTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Promotion"> | number
    name?: StringWithAggregatesFilter<"Promotion"> | string
    code?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    type?: StringWithAggregatesFilter<"Promotion"> | string
    value?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUses?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    usedCount?: IntWithAggregatesFilter<"Promotion"> | number
    startsAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
    appliesTo?: StringWithAggregatesFilter<"Promotion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type PromotionProductWhereInput = {
    AND?: PromotionProductWhereInput | PromotionProductWhereInput[]
    OR?: PromotionProductWhereInput[]
    NOT?: PromotionProductWhereInput | PromotionProductWhereInput[]
    promotionId?: IntFilter<"PromotionProduct"> | number
    productId?: IntFilter<"PromotionProduct"> | number
    promotion?: XOR<PromotionRelationFilter, PromotionWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PromotionProductOrderByWithRelationInput = {
    promotionId?: SortOrder
    productId?: SortOrder
    promotion?: PromotionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PromotionProductWhereUniqueInput = Prisma.AtLeast<{
    promotionId_productId?: PromotionProductPromotionIdProductIdCompoundUniqueInput
    AND?: PromotionProductWhereInput | PromotionProductWhereInput[]
    OR?: PromotionProductWhereInput[]
    NOT?: PromotionProductWhereInput | PromotionProductWhereInput[]
    promotionId?: IntFilter<"PromotionProduct"> | number
    productId?: IntFilter<"PromotionProduct"> | number
    promotion?: XOR<PromotionRelationFilter, PromotionWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "promotionId_productId">

  export type PromotionProductOrderByWithAggregationInput = {
    promotionId?: SortOrder
    productId?: SortOrder
    _count?: PromotionProductCountOrderByAggregateInput
    _avg?: PromotionProductAvgOrderByAggregateInput
    _max?: PromotionProductMaxOrderByAggregateInput
    _min?: PromotionProductMinOrderByAggregateInput
    _sum?: PromotionProductSumOrderByAggregateInput
  }

  export type PromotionProductScalarWhereWithAggregatesInput = {
    AND?: PromotionProductScalarWhereWithAggregatesInput | PromotionProductScalarWhereWithAggregatesInput[]
    OR?: PromotionProductScalarWhereWithAggregatesInput[]
    NOT?: PromotionProductScalarWhereWithAggregatesInput | PromotionProductScalarWhereWithAggregatesInput[]
    promotionId?: IntWithAggregatesFilter<"PromotionProduct"> | number
    productId?: IntWithAggregatesFilter<"PromotionProduct"> | number
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    userId?: IntFilter<"Cart"> | number
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: CartItemListRelationFilter
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    userId?: IntWithAggregatesFilter<"Cart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variantId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartRelationFilter, CartWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cartId_variantId?: CartItemCartIdVariantIdCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variantId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartRelationFilter, CartWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }, "id" | "cartId_variantId">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CartItem"> | number
    cartId?: IntWithAggregatesFilter<"CartItem"> | number
    productId?: IntWithAggregatesFilter<"CartItem"> | number
    variantId?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntNullableFilter<"Order"> | number | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    promotionId?: IntNullableFilter<"Order"> | number | null
    pointsUsed?: IntFilter<"Order"> | number
    pointsEarned?: IntFilter<"Order"> | number
    shippingName?: StringFilter<"Order"> | string
    shippingEmail?: StringFilter<"Order"> | string
    shippingPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    shippingCity?: StringFilter<"Order"> | string
    shippingNotes?: StringNullableFilter<"Order"> | string | null
    confirmToken?: StringNullableFilter<"Order"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    promotion?: XOR<PromotionNullableRelationFilter, PromotionWhereInput> | null
    items?: OrderItemListRelationFilter
    loyaltyLedger?: LoyaltyLedgerListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrderInput | SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
    shippingName?: SortOrder
    shippingEmail?: SortOrder
    shippingPhone?: SortOrder
    shippingAddress?: SortOrder
    shippingCity?: SortOrder
    shippingNotes?: SortOrderInput | SortOrder
    confirmToken?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    promotion?: PromotionOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
    loyaltyLedger?: LoyaltyLedgerOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    confirmToken?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntNullableFilter<"Order"> | number | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    promotionId?: IntNullableFilter<"Order"> | number | null
    pointsUsed?: IntFilter<"Order"> | number
    pointsEarned?: IntFilter<"Order"> | number
    shippingName?: StringFilter<"Order"> | string
    shippingEmail?: StringFilter<"Order"> | string
    shippingPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    shippingCity?: StringFilter<"Order"> | string
    shippingNotes?: StringNullableFilter<"Order"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    promotion?: XOR<PromotionNullableRelationFilter, PromotionWhereInput> | null
    items?: OrderItemListRelationFilter
    loyaltyLedger?: LoyaltyLedgerListRelationFilter
  }, "id" | "confirmToken">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrderInput | SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
    shippingName?: SortOrder
    shippingEmail?: SortOrder
    shippingPhone?: SortOrder
    shippingAddress?: SortOrder
    shippingCity?: SortOrder
    shippingNotes?: SortOrderInput | SortOrder
    confirmToken?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    status?: StringWithAggregatesFilter<"Order"> | string
    paymentStatus?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    promotionId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    pointsUsed?: IntWithAggregatesFilter<"Order"> | number
    pointsEarned?: IntWithAggregatesFilter<"Order"> | number
    shippingName?: StringWithAggregatesFilter<"Order"> | string
    shippingEmail?: StringWithAggregatesFilter<"Order"> | string
    shippingPhone?: StringWithAggregatesFilter<"Order"> | string
    shippingAddress?: StringWithAggregatesFilter<"Order"> | string
    shippingCity?: StringWithAggregatesFilter<"Order"> | string
    shippingNotes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    confirmToken?: StringNullableWithAggregatesFilter<"Order"> | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    variantId?: IntFilter<"OrderItem"> | number
    productName?: StringFilter<"OrderItem"> | string
    size?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    productName?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    variant?: ProductVariantOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    variantId?: IntFilter<"OrderItem"> | number
    productName?: StringFilter<"OrderItem"> | string
    size?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    variant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    productName?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    productId?: IntWithAggregatesFilter<"OrderItem"> | number
    variantId?: IntWithAggregatesFilter<"OrderItem"> | number
    productName?: StringWithAggregatesFilter<"OrderItem"> | string
    size?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type LoyaltyLedgerWhereInput = {
    AND?: LoyaltyLedgerWhereInput | LoyaltyLedgerWhereInput[]
    OR?: LoyaltyLedgerWhereInput[]
    NOT?: LoyaltyLedgerWhereInput | LoyaltyLedgerWhereInput[]
    id?: IntFilter<"LoyaltyLedger"> | number
    userId?: IntFilter<"LoyaltyLedger"> | number
    orderId?: IntNullableFilter<"LoyaltyLedger"> | number | null
    type?: StringFilter<"LoyaltyLedger"> | string
    points?: IntFilter<"LoyaltyLedger"> | number
    description?: StringFilter<"LoyaltyLedger"> | string
    createdAt?: DateTimeFilter<"LoyaltyLedger"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }

  export type LoyaltyLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type LoyaltyLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoyaltyLedgerWhereInput | LoyaltyLedgerWhereInput[]
    OR?: LoyaltyLedgerWhereInput[]
    NOT?: LoyaltyLedgerWhereInput | LoyaltyLedgerWhereInput[]
    userId?: IntFilter<"LoyaltyLedger"> | number
    orderId?: IntNullableFilter<"LoyaltyLedger"> | number | null
    type?: StringFilter<"LoyaltyLedger"> | string
    points?: IntFilter<"LoyaltyLedger"> | number
    description?: StringFilter<"LoyaltyLedger"> | string
    createdAt?: DateTimeFilter<"LoyaltyLedger"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableRelationFilter, OrderWhereInput> | null
  }, "id">

  export type LoyaltyLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: LoyaltyLedgerCountOrderByAggregateInput
    _avg?: LoyaltyLedgerAvgOrderByAggregateInput
    _max?: LoyaltyLedgerMaxOrderByAggregateInput
    _min?: LoyaltyLedgerMinOrderByAggregateInput
    _sum?: LoyaltyLedgerSumOrderByAggregateInput
  }

  export type LoyaltyLedgerScalarWhereWithAggregatesInput = {
    AND?: LoyaltyLedgerScalarWhereWithAggregatesInput | LoyaltyLedgerScalarWhereWithAggregatesInput[]
    OR?: LoyaltyLedgerScalarWhereWithAggregatesInput[]
    NOT?: LoyaltyLedgerScalarWhereWithAggregatesInput | LoyaltyLedgerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoyaltyLedger"> | number
    userId?: IntWithAggregatesFilter<"LoyaltyLedger"> | number
    orderId?: IntNullableWithAggregatesFilter<"LoyaltyLedger"> | number | null
    type?: StringWithAggregatesFilter<"LoyaltyLedger"> | string
    points?: IntWithAggregatesFilter<"LoyaltyLedger"> | number
    description?: StringWithAggregatesFilter<"LoyaltyLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoyaltyLedger"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    promotions?: PromotionProductCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    promotions?: PromotionProductUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: number
    productId: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: number
    productId: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: PromotionProductCreateNestedManyWithoutPromotionInput
    orders?: OrderCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: PromotionProductUncheckedCreateNestedManyWithoutPromotionInput
    orders?: OrderUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: PromotionProductUpdateManyWithoutPromotionNestedInput
    orders?: OrderUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: PromotionProductUncheckedUpdateManyWithoutPromotionNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionCreateManyInput = {
    id?: number
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionProductCreateInput = {
    promotion: PromotionCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionProductUncheckedCreateInput = {
    promotionId: number
    productId: number
  }

  export type PromotionProductUpdateInput = {
    promotion?: PromotionUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type PromotionProductUncheckedUpdateInput = {
    promotionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PromotionProductCreateManyInput = {
    promotionId: number
    productId: number
  }

  export type PromotionProductUpdateManyMutationInput = {

  }

  export type PromotionProductUncheckedUpdateManyInput = {
    promotionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CartCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartInput
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
    variant: ProductVariantCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number
    cartId: number
    productId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: number
    cartId: number
    productId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    promotion?: PromotionCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    promotion?: PromotionUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
    variant: ProductVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerCreateInput = {
    type: string
    points: number
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLoyaltyLedgerInput
    order?: OrderCreateNestedOneWithoutLoyaltyLedgerInput
  }

  export type LoyaltyLedgerUncheckedCreateInput = {
    id?: number
    userId: number
    orderId?: number | null
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type LoyaltyLedgerUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoyaltyLedgerNestedInput
    order?: OrderUpdateOneWithoutLoyaltyLedgerNestedInput
  }

  export type LoyaltyLedgerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerCreateManyInput = {
    id?: number
    userId: number
    orderId?: number | null
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type LoyaltyLedgerUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type LoyaltyLedgerListRelationFilter = {
    every?: LoyaltyLedgerWhereInput
    some?: LoyaltyLedgerWhereInput
    none?: LoyaltyLedgerWhereInput
  }

  export type CartNullableRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoyaltyLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    loyaltyPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    loyaltyPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    loyaltyPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    loyaltyPoints?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    loyaltyPoints?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type PromotionProductListRelationFilter = {
    every?: PromotionProductWhereInput
    some?: PromotionProductWhereInput
    none?: PromotionProductWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    images?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    totalSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalSold?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    images?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    totalSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    basePrice?: SortOrder
    imageUrl?: SortOrder
    images?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    slug?: SortOrder
    totalSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    totalSold?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductVariantProductIdSizeCompoundUniqueInput = {
    productId: number
    size: string
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    extraPrice?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    appliesTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    appliesTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    appliesTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    minOrderAmount?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type PromotionRelationFilter = {
    is?: PromotionWhereInput
    isNot?: PromotionWhereInput
  }

  export type PromotionProductPromotionIdProductIdCompoundUniqueInput = {
    promotionId: number
    productId: number
  }

  export type PromotionProductCountOrderByAggregateInput = {
    promotionId?: SortOrder
    productId?: SortOrder
  }

  export type PromotionProductAvgOrderByAggregateInput = {
    promotionId?: SortOrder
    productId?: SortOrder
  }

  export type PromotionProductMaxOrderByAggregateInput = {
    promotionId?: SortOrder
    productId?: SortOrder
  }

  export type PromotionProductMinOrderByAggregateInput = {
    promotionId?: SortOrder
    productId?: SortOrder
  }

  export type PromotionProductSumOrderByAggregateInput = {
    promotionId?: SortOrder
    productId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductVariantRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type CartItemCartIdVariantIdCompoundUniqueInput = {
    cartId: number
    variantId: number
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PromotionNullableRelationFilter = {
    is?: PromotionWhereInput | null
    isNot?: PromotionWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
    shippingName?: SortOrder
    shippingEmail?: SortOrder
    shippingPhone?: SortOrder
    shippingAddress?: SortOrder
    shippingCity?: SortOrder
    shippingNotes?: SortOrder
    confirmToken?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
    shippingName?: SortOrder
    shippingEmail?: SortOrder
    shippingPhone?: SortOrder
    shippingAddress?: SortOrder
    shippingCity?: SortOrder
    shippingNotes?: SortOrder
    confirmToken?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
    shippingName?: SortOrder
    shippingEmail?: SortOrder
    shippingPhone?: SortOrder
    shippingAddress?: SortOrder
    shippingCity?: SortOrder
    shippingNotes?: SortOrder
    confirmToken?: SortOrder
    confirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    total?: SortOrder
    promotionId?: SortOrder
    pointsUsed?: SortOrder
    pointsEarned?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    productName?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    productName?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    productName?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderNullableRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type LoyaltyLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LoyaltyLedgerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    points?: SortOrder
  }

  export type LoyaltyLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LoyaltyLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LoyaltyLedgerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    points?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type LoyaltyLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput> | LoyaltyLedgerCreateWithoutUserInput[] | LoyaltyLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutUserInput | LoyaltyLedgerCreateOrConnectWithoutUserInput[]
    createMany?: LoyaltyLedgerCreateManyUserInputEnvelope
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type LoyaltyLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput> | LoyaltyLedgerCreateWithoutUserInput[] | LoyaltyLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutUserInput | LoyaltyLedgerCreateOrConnectWithoutUserInput[]
    createMany?: LoyaltyLedgerCreateManyUserInputEnvelope
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type LoyaltyLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput> | LoyaltyLedgerCreateWithoutUserInput[] | LoyaltyLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutUserInput | LoyaltyLedgerCreateOrConnectWithoutUserInput[]
    upsert?: LoyaltyLedgerUpsertWithWhereUniqueWithoutUserInput | LoyaltyLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoyaltyLedgerCreateManyUserInputEnvelope
    set?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    disconnect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    delete?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    update?: LoyaltyLedgerUpdateWithWhereUniqueWithoutUserInput | LoyaltyLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoyaltyLedgerUpdateManyWithWhereWithoutUserInput | LoyaltyLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type LoyaltyLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput> | LoyaltyLedgerCreateWithoutUserInput[] | LoyaltyLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutUserInput | LoyaltyLedgerCreateOrConnectWithoutUserInput[]
    upsert?: LoyaltyLedgerUpsertWithWhereUniqueWithoutUserInput | LoyaltyLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoyaltyLedgerCreateManyUserInputEnvelope
    set?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    disconnect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    delete?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    update?: LoyaltyLedgerUpdateWithWhereUniqueWithoutUserInput | LoyaltyLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoyaltyLedgerUpdateManyWithWhereWithoutUserInput | LoyaltyLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type PromotionProductCreateNestedManyWithoutProductInput = {
    create?: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput> | PromotionProductCreateWithoutProductInput[] | PromotionProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutProductInput | PromotionProductCreateOrConnectWithoutProductInput[]
    createMany?: PromotionProductCreateManyProductInputEnvelope
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type PromotionProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput> | PromotionProductCreateWithoutProductInput[] | PromotionProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutProductInput | PromotionProductCreateOrConnectWithoutProductInput[]
    createMany?: PromotionProductCreateManyProductInputEnvelope
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type PromotionProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput> | PromotionProductCreateWithoutProductInput[] | PromotionProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutProductInput | PromotionProductCreateOrConnectWithoutProductInput[]
    upsert?: PromotionProductUpsertWithWhereUniqueWithoutProductInput | PromotionProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PromotionProductCreateManyProductInputEnvelope
    set?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    disconnect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    delete?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    update?: PromotionProductUpdateWithWhereUniqueWithoutProductInput | PromotionProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PromotionProductUpdateManyWithWhereWithoutProductInput | PromotionProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type PromotionProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput> | PromotionProductCreateWithoutProductInput[] | PromotionProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutProductInput | PromotionProductCreateOrConnectWithoutProductInput[]
    upsert?: PromotionProductUpsertWithWhereUniqueWithoutProductInput | PromotionProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PromotionProductCreateManyProductInputEnvelope
    set?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    disconnect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    delete?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    update?: PromotionProductUpdateWithWhereUniqueWithoutProductInput | PromotionProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PromotionProductUpdateManyWithWhereWithoutProductInput | PromotionProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput> | CartItemCreateWithoutVariantInput[] | CartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutVariantInput | CartItemCreateOrConnectWithoutVariantInput[]
    createMany?: CartItemCreateManyVariantInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput> | CartItemCreateWithoutVariantInput[] | CartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutVariantInput | CartItemCreateOrConnectWithoutVariantInput[]
    createMany?: CartItemCreateManyVariantInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type CartItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput> | CartItemCreateWithoutVariantInput[] | CartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutVariantInput | CartItemCreateOrConnectWithoutVariantInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutVariantInput | CartItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: CartItemCreateManyVariantInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutVariantInput | CartItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutVariantInput | CartItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVariantInput | OrderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVariantInput | OrderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVariantInput | OrderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput> | CartItemCreateWithoutVariantInput[] | CartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutVariantInput | CartItemCreateOrConnectWithoutVariantInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutVariantInput | CartItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: CartItemCreateManyVariantInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutVariantInput | CartItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutVariantInput | CartItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput> | OrderItemCreateWithoutVariantInput[] | OrderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariantInput | OrderItemCreateOrConnectWithoutVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutVariantInput | OrderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: OrderItemCreateManyVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutVariantInput | OrderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutVariantInput | OrderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PromotionProductCreateNestedManyWithoutPromotionInput = {
    create?: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput> | PromotionProductCreateWithoutPromotionInput[] | PromotionProductUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutPromotionInput | PromotionProductCreateOrConnectWithoutPromotionInput[]
    createMany?: PromotionProductCreateManyPromotionInputEnvelope
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutPromotionInput = {
    create?: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput> | OrderCreateWithoutPromotionInput[] | OrderUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPromotionInput | OrderCreateOrConnectWithoutPromotionInput[]
    createMany?: OrderCreateManyPromotionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PromotionProductUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput> | PromotionProductCreateWithoutPromotionInput[] | PromotionProductUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutPromotionInput | PromotionProductCreateOrConnectWithoutPromotionInput[]
    createMany?: PromotionProductCreateManyPromotionInputEnvelope
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput> | OrderCreateWithoutPromotionInput[] | OrderUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPromotionInput | OrderCreateOrConnectWithoutPromotionInput[]
    createMany?: OrderCreateManyPromotionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromotionProductUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput> | PromotionProductCreateWithoutPromotionInput[] | PromotionProductUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutPromotionInput | PromotionProductCreateOrConnectWithoutPromotionInput[]
    upsert?: PromotionProductUpsertWithWhereUniqueWithoutPromotionInput | PromotionProductUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: PromotionProductCreateManyPromotionInputEnvelope
    set?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    disconnect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    delete?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    update?: PromotionProductUpdateWithWhereUniqueWithoutPromotionInput | PromotionProductUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: PromotionProductUpdateManyWithWhereWithoutPromotionInput | PromotionProductUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput> | OrderCreateWithoutPromotionInput[] | OrderUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPromotionInput | OrderCreateOrConnectWithoutPromotionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPromotionInput | OrderUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: OrderCreateManyPromotionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPromotionInput | OrderUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPromotionInput | OrderUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PromotionProductUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput> | PromotionProductCreateWithoutPromotionInput[] | PromotionProductUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: PromotionProductCreateOrConnectWithoutPromotionInput | PromotionProductCreateOrConnectWithoutPromotionInput[]
    upsert?: PromotionProductUpsertWithWhereUniqueWithoutPromotionInput | PromotionProductUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: PromotionProductCreateManyPromotionInputEnvelope
    set?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    disconnect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    delete?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    connect?: PromotionProductWhereUniqueInput | PromotionProductWhereUniqueInput[]
    update?: PromotionProductUpdateWithWhereUniqueWithoutPromotionInput | PromotionProductUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: PromotionProductUpdateManyWithWhereWithoutPromotionInput | PromotionProductUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput> | OrderCreateWithoutPromotionInput[] | OrderUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPromotionInput | OrderCreateOrConnectWithoutPromotionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPromotionInput | OrderUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: OrderCreateManyPromotionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPromotionInput | OrderUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPromotionInput | OrderUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PromotionCreateNestedOneWithoutProductsInput = {
    create?: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutProductsInput
    connect?: PromotionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionsInput
    connect?: ProductWhereUniqueInput
  }

  export type PromotionUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutProductsInput
    upsert?: PromotionUpsertWithoutProductsInput
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutProductsInput, PromotionUpdateWithoutProductsInput>, PromotionUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPromotionsInput
    upsert?: ProductUpsertWithoutPromotionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPromotionsInput, ProductUpdateWithoutPromotionsInput>, ProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductVariantCreateWithoutCartItemsInput, ProductVariantUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutCartItemsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput
    upsert?: ProductUpsertWithoutCartItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutCartItemsInput, ProductVariantUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutCartItemsInput
    upsert?: ProductVariantUpsertWithoutCartItemsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutCartItemsInput, ProductVariantUpdateWithoutCartItemsInput>, ProductVariantUncheckedUpdateWithoutCartItemsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PromotionCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PromotionCreateWithoutOrdersInput, PromotionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutOrdersInput
    connect?: PromotionWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type LoyaltyLedgerCreateNestedManyWithoutOrderInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput> | LoyaltyLedgerCreateWithoutOrderInput[] | LoyaltyLedgerUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutOrderInput | LoyaltyLedgerCreateOrConnectWithoutOrderInput[]
    createMany?: LoyaltyLedgerCreateManyOrderInputEnvelope
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type LoyaltyLedgerUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput> | LoyaltyLedgerCreateWithoutOrderInput[] | LoyaltyLedgerUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutOrderInput | LoyaltyLedgerCreateOrConnectWithoutOrderInput[]
    createMany?: LoyaltyLedgerCreateManyOrderInputEnvelope
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PromotionUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<PromotionCreateWithoutOrdersInput, PromotionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutOrdersInput
    upsert?: PromotionUpsertWithoutOrdersInput
    disconnect?: PromotionWhereInput | boolean
    delete?: PromotionWhereInput | boolean
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutOrdersInput, PromotionUpdateWithoutOrdersInput>, PromotionUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type LoyaltyLedgerUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput> | LoyaltyLedgerCreateWithoutOrderInput[] | LoyaltyLedgerUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutOrderInput | LoyaltyLedgerCreateOrConnectWithoutOrderInput[]
    upsert?: LoyaltyLedgerUpsertWithWhereUniqueWithoutOrderInput | LoyaltyLedgerUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LoyaltyLedgerCreateManyOrderInputEnvelope
    set?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    disconnect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    delete?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    update?: LoyaltyLedgerUpdateWithWhereUniqueWithoutOrderInput | LoyaltyLedgerUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LoyaltyLedgerUpdateManyWithWhereWithoutOrderInput | LoyaltyLedgerUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type LoyaltyLedgerUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput> | LoyaltyLedgerCreateWithoutOrderInput[] | LoyaltyLedgerUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LoyaltyLedgerCreateOrConnectWithoutOrderInput | LoyaltyLedgerCreateOrConnectWithoutOrderInput[]
    upsert?: LoyaltyLedgerUpsertWithWhereUniqueWithoutOrderInput | LoyaltyLedgerUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LoyaltyLedgerCreateManyOrderInputEnvelope
    set?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    disconnect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    delete?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    connect?: LoyaltyLedgerWhereUniqueInput | LoyaltyLedgerWhereUniqueInput[]
    update?: LoyaltyLedgerUpdateWithWhereUniqueWithoutOrderInput | LoyaltyLedgerUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LoyaltyLedgerUpdateManyWithWhereWithoutOrderInput | LoyaltyLedgerUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductVariantCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOrderItemsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductVariantUpsertWithoutOrderItemsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput, ProductVariantUpdateWithoutOrderItemsInput>, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type UserCreateNestedOneWithoutLoyaltyLedgerInput = {
    create?: XOR<UserCreateWithoutLoyaltyLedgerInput, UserUncheckedCreateWithoutLoyaltyLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoyaltyLedgerInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutLoyaltyLedgerInput = {
    create?: XOR<OrderCreateWithoutLoyaltyLedgerInput, OrderUncheckedCreateWithoutLoyaltyLedgerInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLoyaltyLedgerInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoyaltyLedgerNestedInput = {
    create?: XOR<UserCreateWithoutLoyaltyLedgerInput, UserUncheckedCreateWithoutLoyaltyLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoyaltyLedgerInput
    upsert?: UserUpsertWithoutLoyaltyLedgerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoyaltyLedgerInput, UserUpdateWithoutLoyaltyLedgerInput>, UserUncheckedUpdateWithoutLoyaltyLedgerInput>
  }

  export type OrderUpdateOneWithoutLoyaltyLedgerNestedInput = {
    create?: XOR<OrderCreateWithoutLoyaltyLedgerInput, OrderUncheckedCreateWithoutLoyaltyLedgerInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLoyaltyLedgerInput
    upsert?: OrderUpsertWithoutLoyaltyLedgerInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutLoyaltyLedgerInput, OrderUpdateWithoutLoyaltyLedgerInput>, OrderUncheckedUpdateWithoutLoyaltyLedgerInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    promotion?: PromotionCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoyaltyLedgerCreateWithoutUserInput = {
    type: string
    points: number
    description: string
    createdAt?: Date | string
    order?: OrderCreateNestedOneWithoutLoyaltyLedgerInput
  }

  export type LoyaltyLedgerUncheckedCreateWithoutUserInput = {
    id?: number
    orderId?: number | null
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type LoyaltyLedgerCreateOrConnectWithoutUserInput = {
    where: LoyaltyLedgerWhereUniqueInput
    create: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput>
  }

  export type LoyaltyLedgerCreateManyUserInputEnvelope = {
    data: LoyaltyLedgerCreateManyUserInput | LoyaltyLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntNullableFilter<"Order"> | number | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    promotionId?: IntNullableFilter<"Order"> | number | null
    pointsUsed?: IntFilter<"Order"> | number
    pointsEarned?: IntFilter<"Order"> | number
    shippingName?: StringFilter<"Order"> | string
    shippingEmail?: StringFilter<"Order"> | string
    shippingPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    shippingCity?: StringFilter<"Order"> | string
    shippingNotes?: StringNullableFilter<"Order"> | string | null
    confirmToken?: StringNullableFilter<"Order"> | string | null
    confirmedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type LoyaltyLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: LoyaltyLedgerWhereUniqueInput
    update: XOR<LoyaltyLedgerUpdateWithoutUserInput, LoyaltyLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<LoyaltyLedgerCreateWithoutUserInput, LoyaltyLedgerUncheckedCreateWithoutUserInput>
  }

  export type LoyaltyLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: LoyaltyLedgerWhereUniqueInput
    data: XOR<LoyaltyLedgerUpdateWithoutUserInput, LoyaltyLedgerUncheckedUpdateWithoutUserInput>
  }

  export type LoyaltyLedgerUpdateManyWithWhereWithoutUserInput = {
    where: LoyaltyLedgerScalarWhereInput
    data: XOR<LoyaltyLedgerUpdateManyMutationInput, LoyaltyLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type LoyaltyLedgerScalarWhereInput = {
    AND?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
    OR?: LoyaltyLedgerScalarWhereInput[]
    NOT?: LoyaltyLedgerScalarWhereInput | LoyaltyLedgerScalarWhereInput[]
    id?: IntFilter<"LoyaltyLedger"> | number
    userId?: IntFilter<"LoyaltyLedger"> | number
    orderId?: IntNullableFilter<"LoyaltyLedger"> | number | null
    type?: StringFilter<"LoyaltyLedger"> | string
    points?: IntFilter<"LoyaltyLedger"> | number
    description?: StringFilter<"LoyaltyLedger"> | string
    createdAt?: DateTimeFilter<"LoyaltyLedger"> | Date | string
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type ProductVariantCreateWithoutProductInput = {
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemCreateNestedManyWithoutVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PromotionProductCreateWithoutProductInput = {
    promotion: PromotionCreateNestedOneWithoutProductsInput
  }

  export type PromotionProductUncheckedCreateWithoutProductInput = {
    promotionId: number
  }

  export type PromotionProductCreateOrConnectWithoutProductInput = {
    where: PromotionProductWhereUniqueInput
    create: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput>
  }

  export type PromotionProductCreateManyProductInputEnvelope = {
    data: PromotionProductCreateManyProductInput | PromotionProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    variant: ProductVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutItemsInput
    variant: ProductVariantCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number
    cartId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    productId?: IntFilter<"ProductVariant"> | number
    size?: StringFilter<"ProductVariant"> | string
    stock?: IntFilter<"ProductVariant"> | number
    extraPrice?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringNullableFilter<"ProductVariant"> | string | null
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type PromotionProductUpsertWithWhereUniqueWithoutProductInput = {
    where: PromotionProductWhereUniqueInput
    update: XOR<PromotionProductUpdateWithoutProductInput, PromotionProductUncheckedUpdateWithoutProductInput>
    create: XOR<PromotionProductCreateWithoutProductInput, PromotionProductUncheckedCreateWithoutProductInput>
  }

  export type PromotionProductUpdateWithWhereUniqueWithoutProductInput = {
    where: PromotionProductWhereUniqueInput
    data: XOR<PromotionProductUpdateWithoutProductInput, PromotionProductUncheckedUpdateWithoutProductInput>
  }

  export type PromotionProductUpdateManyWithWhereWithoutProductInput = {
    where: PromotionProductScalarWhereInput
    data: XOR<PromotionProductUpdateManyMutationInput, PromotionProductUncheckedUpdateManyWithoutProductInput>
  }

  export type PromotionProductScalarWhereInput = {
    AND?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
    OR?: PromotionProductScalarWhereInput[]
    NOT?: PromotionProductScalarWhereInput | PromotionProductScalarWhereInput[]
    promotionId?: IntFilter<"PromotionProduct"> | number
    productId?: IntFilter<"PromotionProduct"> | number
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    productId?: IntFilter<"OrderItem"> | number
    variantId?: IntFilter<"OrderItem"> | number
    productName?: StringFilter<"OrderItem"> | string
    size?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: IntFilter<"CartItem"> | number
    cartId?: IntFilter<"CartItem"> | number
    productId?: IntFilter<"CartItem"> | number
    variantId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type ProductCreateWithoutVariantsInput = {
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promotions?: PromotionProductCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    promotions?: PromotionProductUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type CartItemCreateWithoutVariantInput = {
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    cart: CartCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutVariantInput = {
    id?: number
    cartId: number
    productId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutVariantInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput>
  }

  export type CartItemCreateManyVariantInputEnvelope = {
    data: CartItemCreateManyVariantInput | CartItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutVariantInput = {
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutVariantInput = {
    id?: number
    orderId: number
    productId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput>
  }

  export type OrderItemCreateManyVariantInputEnvelope = {
    data: OrderItemCreateManyVariantInput | OrderItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionProductUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotions?: PromotionProductUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutVariantInput, CartItemUncheckedUpdateWithoutVariantInput>
    create: XOR<CartItemCreateWithoutVariantInput, CartItemUncheckedCreateWithoutVariantInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutVariantInput, CartItemUncheckedUpdateWithoutVariantInput>
  }

  export type CartItemUpdateManyWithWhereWithoutVariantInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutVariantInput, OrderItemUncheckedUpdateWithoutVariantInput>
    create: XOR<OrderItemCreateWithoutVariantInput, OrderItemUncheckedCreateWithoutVariantInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutVariantInput, OrderItemUncheckedUpdateWithoutVariantInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutVariantInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type PromotionProductCreateWithoutPromotionInput = {
    product: ProductCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionProductUncheckedCreateWithoutPromotionInput = {
    productId: number
  }

  export type PromotionProductCreateOrConnectWithoutPromotionInput = {
    where: PromotionProductWhereUniqueInput
    create: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput>
  }

  export type PromotionProductCreateManyPromotionInputEnvelope = {
    data: PromotionProductCreateManyPromotionInput | PromotionProductCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutPromotionInput = {
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPromotionInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPromotionInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput>
  }

  export type OrderCreateManyPromotionInputEnvelope = {
    data: OrderCreateManyPromotionInput | OrderCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type PromotionProductUpsertWithWhereUniqueWithoutPromotionInput = {
    where: PromotionProductWhereUniqueInput
    update: XOR<PromotionProductUpdateWithoutPromotionInput, PromotionProductUncheckedUpdateWithoutPromotionInput>
    create: XOR<PromotionProductCreateWithoutPromotionInput, PromotionProductUncheckedCreateWithoutPromotionInput>
  }

  export type PromotionProductUpdateWithWhereUniqueWithoutPromotionInput = {
    where: PromotionProductWhereUniqueInput
    data: XOR<PromotionProductUpdateWithoutPromotionInput, PromotionProductUncheckedUpdateWithoutPromotionInput>
  }

  export type PromotionProductUpdateManyWithWhereWithoutPromotionInput = {
    where: PromotionProductScalarWhereInput
    data: XOR<PromotionProductUpdateManyMutationInput, PromotionProductUncheckedUpdateManyWithoutPromotionInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutPromotionInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPromotionInput, OrderUncheckedUpdateWithoutPromotionInput>
    create: XOR<OrderCreateWithoutPromotionInput, OrderUncheckedCreateWithoutPromotionInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPromotionInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPromotionInput, OrderUncheckedUpdateWithoutPromotionInput>
  }

  export type OrderUpdateManyWithWhereWithoutPromotionInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPromotionInput>
  }

  export type PromotionCreateWithoutProductsInput = {
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionCreateOrConnectWithoutProductsInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutPromotionsInput = {
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPromotionsInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPromotionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
  }

  export type PromotionUpsertWithoutProductsInput = {
    update: XOR<PromotionUpdateWithoutProductsInput, PromotionUncheckedUpdateWithoutProductsInput>
    create: XOR<PromotionCreateWithoutProductsInput, PromotionUncheckedCreateWithoutProductsInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutProductsInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutProductsInput, PromotionUncheckedUpdateWithoutProductsInput>
  }

  export type PromotionUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type ProductUpsertWithoutPromotionsInput = {
    update: XOR<ProductUpdateWithoutPromotionsInput, ProductUncheckedUpdateWithoutPromotionsInput>
    create: XOR<ProductCreateWithoutPromotionsInput, ProductUncheckedCreateWithoutPromotionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPromotionsInput, ProductUncheckedUpdateWithoutPromotionsInput>
  }

  export type ProductUpdateWithoutPromotionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPromotionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutCartInput = {
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCartItemsInput
    variant: ProductVariantCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number
    productId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutCartItemsInput = {
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    promotions?: PromotionProductCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    promotions?: PromotionProductUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductVariantCreateWithoutCartItemsInput = {
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    orderItems?: OrderItemCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutCartItemsInput = {
    id?: number
    productId: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutCartItemsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutCartItemsInput, ProductVariantUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantUpsertWithoutCartItemsInput = {
    update: XOR<ProductVariantUpdateWithoutCartItemsInput, ProductVariantUncheckedUpdateWithoutCartItemsInput>
    create: XOR<ProductVariantCreateWithoutCartItemsInput, ProductVariantUncheckedCreateWithoutCartItemsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutCartItemsInput, ProductVariantUncheckedUpdateWithoutCartItemsInput>
  }

  export type ProductVariantUpdateWithoutCartItemsInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    orderItems?: OrderItemUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PromotionCreateWithoutOrdersInput = {
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: PromotionProductCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    code?: string | null
    type: string
    value: Decimal | DecimalJsLike | number | string
    minOrderAmount?: Decimal | DecimalJsLike | number | string
    maxUses?: number | null
    usedCount?: number
    startsAt: Date | string
    endsAt: Date | string
    isActive?: boolean
    appliesTo?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: PromotionProductUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionCreateOrConnectWithoutOrdersInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutOrdersInput, PromotionUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutOrderItemsInput
    variant: ProductVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type LoyaltyLedgerCreateWithoutOrderInput = {
    type: string
    points: number
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLoyaltyLedgerInput
  }

  export type LoyaltyLedgerUncheckedCreateWithoutOrderInput = {
    id?: number
    userId: number
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type LoyaltyLedgerCreateOrConnectWithoutOrderInput = {
    where: LoyaltyLedgerWhereUniqueInput
    create: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput>
  }

  export type LoyaltyLedgerCreateManyOrderInputEnvelope = {
    data: LoyaltyLedgerCreateManyOrderInput | LoyaltyLedgerCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PromotionUpsertWithoutOrdersInput = {
    update: XOR<PromotionUpdateWithoutOrdersInput, PromotionUncheckedUpdateWithoutOrdersInput>
    create: XOR<PromotionCreateWithoutOrdersInput, PromotionUncheckedCreateWithoutOrdersInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutOrdersInput, PromotionUncheckedUpdateWithoutOrdersInput>
  }

  export type PromotionUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: PromotionProductUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOrderAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    appliesTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: PromotionProductUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type LoyaltyLedgerUpsertWithWhereUniqueWithoutOrderInput = {
    where: LoyaltyLedgerWhereUniqueInput
    update: XOR<LoyaltyLedgerUpdateWithoutOrderInput, LoyaltyLedgerUncheckedUpdateWithoutOrderInput>
    create: XOR<LoyaltyLedgerCreateWithoutOrderInput, LoyaltyLedgerUncheckedCreateWithoutOrderInput>
  }

  export type LoyaltyLedgerUpdateWithWhereUniqueWithoutOrderInput = {
    where: LoyaltyLedgerWhereUniqueInput
    data: XOR<LoyaltyLedgerUpdateWithoutOrderInput, LoyaltyLedgerUncheckedUpdateWithoutOrderInput>
  }

  export type LoyaltyLedgerUpdateManyWithWhereWithoutOrderInput = {
    where: LoyaltyLedgerScalarWhereInput
    data: XOR<LoyaltyLedgerUpdateManyMutationInput, LoyaltyLedgerUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    promotion?: PromotionCreateNestedOneWithoutOrdersInput
    loyaltyLedger?: LoyaltyLedgerCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loyaltyLedger?: LoyaltyLedgerUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
    promotions?: PromotionProductCreateNestedManyWithoutProductInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description?: string | null
    category: string
    basePrice: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    images?: string | null
    isFeatured?: boolean
    isActive?: boolean
    slug: string
    totalSold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
    promotions?: PromotionProductUncheckedCreateNestedManyWithoutProductInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductVariantCreateWithoutOrderItemsInput = {
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    cartItems?: CartItemCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    productId: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutOrderItemsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    promotion?: PromotionUpdateOneWithoutOrdersNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    totalSold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
    promotions?: PromotionProductUncheckedUpdateManyWithoutProductNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductVariantUpsertWithoutOrderItemsInput = {
    update: XOR<ProductVariantUpdateWithoutOrderItemsInput, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutOrderItemsInput, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductVariantUpdateWithoutOrderItemsInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    cartItems?: CartItemUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type UserCreateWithoutLoyaltyLedgerInput = {
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoyaltyLedgerInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    phone?: string | null
    city?: string | null
    address?: string | null
    loyaltyPoints?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoyaltyLedgerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoyaltyLedgerInput, UserUncheckedCreateWithoutLoyaltyLedgerInput>
  }

  export type OrderCreateWithoutLoyaltyLedgerInput = {
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    promotion?: PromotionCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutLoyaltyLedgerInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutLoyaltyLedgerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutLoyaltyLedgerInput, OrderUncheckedCreateWithoutLoyaltyLedgerInput>
  }

  export type UserUpsertWithoutLoyaltyLedgerInput = {
    update: XOR<UserUpdateWithoutLoyaltyLedgerInput, UserUncheckedUpdateWithoutLoyaltyLedgerInput>
    create: XOR<UserCreateWithoutLoyaltyLedgerInput, UserUncheckedCreateWithoutLoyaltyLedgerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoyaltyLedgerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoyaltyLedgerInput, UserUncheckedUpdateWithoutLoyaltyLedgerInput>
  }

  export type UserUpdateWithoutLoyaltyLedgerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoyaltyLedgerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderUpsertWithoutLoyaltyLedgerInput = {
    update: XOR<OrderUpdateWithoutLoyaltyLedgerInput, OrderUncheckedUpdateWithoutLoyaltyLedgerInput>
    create: XOR<OrderCreateWithoutLoyaltyLedgerInput, OrderUncheckedCreateWithoutLoyaltyLedgerInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutLoyaltyLedgerInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutLoyaltyLedgerInput, OrderUncheckedUpdateWithoutLoyaltyLedgerInput>
  }

  export type OrderUpdateWithoutLoyaltyLedgerInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    promotion?: PromotionUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutLoyaltyLedgerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: number
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    promotionId?: number | null
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoyaltyLedgerCreateManyUserInput = {
    id?: number
    orderId?: number | null
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: PromotionUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promotionId?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutLoyaltyLedgerNestedInput
  }

  export type LoyaltyLedgerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateManyProductInput = {
    id?: number
    size: string
    stock?: number
    extraPrice?: Decimal | DecimalJsLike | number | string
    sku?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionProductCreateManyProductInput = {
    promotionId: number
  }

  export type OrderItemCreateManyProductInput = {
    id?: number
    orderId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemCreateManyProductInput = {
    id?: number
    cartId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUpdateManyWithoutVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cartItems?: CartItemUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    extraPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionProductUpdateWithoutProductInput = {
    promotion?: PromotionUpdateOneRequiredWithoutProductsNestedInput
  }

  export type PromotionProductUncheckedUpdateWithoutProductInput = {
    promotionId?: IntFieldUpdateOperationsInput | number
  }

  export type PromotionProductUncheckedUpdateManyWithoutProductInput = {
    promotionId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutProductInput = {
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyVariantInput = {
    id?: number
    cartId: number
    productId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateManyVariantInput = {
    id?: number
    orderId: number
    productId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemUpdateWithoutVariantInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutVariantInput = {
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionProductCreateManyPromotionInput = {
    productId: number
  }

  export type OrderCreateManyPromotionInput = {
    id?: number
    userId?: number | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    pointsUsed?: number
    pointsEarned?: number
    shippingName: string
    shippingEmail: string
    shippingPhone: string
    shippingAddress: string
    shippingCity: string
    shippingNotes?: string | null
    confirmToken?: string | null
    confirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionProductUpdateWithoutPromotionInput = {
    product?: ProductUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type PromotionProductUncheckedUpdateWithoutPromotionInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PromotionProductUncheckedUpdateManyWithoutPromotionInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutPromotionInput = {
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPromotionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    loyaltyLedger?: LoyaltyLedgerUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPromotionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    pointsEarned?: IntFieldUpdateOperationsInput | number
    shippingName?: StringFieldUpdateOperationsInput | string
    shippingEmail?: StringFieldUpdateOperationsInput | string
    shippingPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    shippingCity?: StringFieldUpdateOperationsInput | string
    shippingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmToken?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyCartInput = {
    id?: number
    productId: number
    variantId: number
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    productId: number
    variantId: number
    productName: string
    size: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type LoyaltyLedgerCreateManyOrderInput = {
    id?: number
    userId: number
    type: string
    points: number
    description: string
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    variant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    variantId?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerUpdateWithoutOrderInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoyaltyLedgerNestedInput
  }

  export type LoyaltyLedgerUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLedgerUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionCountOutputTypeDefaultArgs instead
     */
    export type PromotionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartCountOutputTypeDefaultArgs instead
     */
    export type CartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantDefaultArgs instead
     */
    export type ProductVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionProductDefaultArgs instead
     */
    export type PromotionProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartDefaultArgs instead
     */
    export type CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartItemDefaultArgs instead
     */
    export type CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoyaltyLedgerDefaultArgs instead
     */
    export type LoyaltyLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoyaltyLedgerDefaultArgs<ExtArgs>

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