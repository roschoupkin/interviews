/**
 Представьте страшный мир, где нету метода bind для привязки функции, надо написать альтернативное решение
 */

export function bindApply<TContext, TParameters extends unknown[], TReturn>(
  fn: (this: TContext, ...v: TParameters) => TReturn,
  context: TContext
) {
  return (...values: TParameters): TReturn => fn.apply(context, values);
}

export function bindSymbol<TContext, TParameters extends unknown[], TReturn>(
  fn: (this: TContext, ...v: TParameters) => TReturn,
  context: TContext
) {
  const id = Symbol('func');
  return { ...context, [id]: fn }[id] as (...v: TParameters) => TReturn;
}
