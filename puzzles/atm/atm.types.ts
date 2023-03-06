export type Nominal = 50 | 100 | 500 | 1000 | 5000;
export type Limits = Record<Nominal, number>;
export type Cash = Partial<Limits>;
