// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepPartial<T extends Record<string, any>> = keyof T extends infer K
	? K extends string
		? Pick<T, K & keyof T> & Partial<T>
		: never
	: never;
