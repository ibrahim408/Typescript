function printIngredients(
  quantity: string,
  ingredient: string,
  extra?: string
) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredients("1C", "Flour", "something more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback: () => void) {
  console.log([x, y]);
  callback?.();
  // both equivalent
  if (callback) {
    callback();
  }
}
