export function formatScore( score ) {
  return new Intl.NumberFormat().format(score ?? 0)
}

export function formatNumberWithCommas(value ) {
if (value === null || value === undefined) {
  return "";
}

const stringValue = String(value);

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 20,
});

const numberValue = parseFloat(stringValue);

if (isNaN(numberValue)) {
  return "";
}

return formatter.format(numberValue);
}
