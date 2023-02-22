export default function bind<TContext, TParameters extends unknown[], TReturn>(
  fn: (this: TContext, ...v: TParameters) => TReturn,
  context: TContext
) {
  return (...values: TParameters): TReturn => fn.apply(context, values);
}
