declare interface ObjectConstructor {
  keysTyped<T extends {}>(obj: T): Array<keyof T>;
  entriesTyped<T extends {}>(obj: T): Array<[keyof T, T[keyof T]]>;
}

declare type Properties<T extends {}> = Pick<T, PropertyKeys<T>>;
declare type Functions<T extends {}> = Pick<T, FunctionKeys<T>>;
declare type PropertyKeys<T extends {}> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
declare type FunctionKeys<T extends {}> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// eslint-disable-next-line @typescript-eslint/ban-types
declare type UnknownObject = Object;
// eslint-disable-next-line @typescript-eslint/ban-types
declare type UnknownFunction = Function;

declare type Constructor<T> = new (...args) => T;
declare type AbstractConstructor<T> = abstract new (...args) => T;
declare type AnyConstructor<T> = Constructor<T> | AbstractConstructor<T>;

declare type Primitive = boolean | number | string | null | undefined;

declare type AsyncCallback<T> = () => Promise<T>;
declare type AsyncVoidFunction = () => Promise<void>;
