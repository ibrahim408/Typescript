function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;

  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [st1Getter, st1Setter] = simpleState(10);

console.log(st1Getter());
st1Setter(62);
console.log(st1Getter());

// OVERRIDE T
const [st2Getter, st2Setter] = simpleState<string | null>(null);
console.log(st2Getter());
st2Setter("max");
console.log(st2Getter());

interface Rank<T> {
  item: T;
  rank: number;
}

function ranker<T>(items: T[], rank: (v: T) => number): T[] {
  const ranks: Rank<T>[] = items.map(item => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map(rank => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bubasaur",
    hp: 20,
  },
  {
    name: "Magaasaur",
    hp: 10,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
