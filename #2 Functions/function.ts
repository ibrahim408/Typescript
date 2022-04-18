function addNumber(a: number, b: number) {
  return a + b;
}

export default addNumber;

export const addString = (str1: string, str2: string = "c"): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `S{title} ${param}`;

export const printFormat = (title: string, param: string | number): void =>
  console.log(`S{title} ${param}`);

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// useful to check when ts code used with js
export function getName(user: { firstName: string; lastName: string }): string {
  return `${user?.firstName ?? "first"} ${user?.lastName ?? "last"}`;
}
