const g = async i => [ 1, 2, 3 ]
  .map(x => x * 10 ** i);

const f = async function * () {
  for (let i = 0; i < 10; i++) {
    const xs = await g(i);
    for (const x of xs) {
      yield x;
    }
  }
};

const main = async () => {
  for await (const x of f()) {
    console.log(x);
  }
};

main().catch(e => console.error(e));
