export const formatINR = (n: number) => new Intl.NumberFormat("en-IN").format(n);

export const formatSize = (s: { min: number; max: number }) =>
  `${formatINR(s.min)}–${formatINR(s.max)} sq m`;
