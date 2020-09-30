/**
 * Type to define optional atributtes in a interface
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;