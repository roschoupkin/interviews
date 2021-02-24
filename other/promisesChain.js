// Data for testing
const urls = new Array(50).fill('Some data');

// Delay function (imitate request)
function delay(v, i) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ v , i }), i % 2 === 0 ? 200 : 400);
  })
}

async function request(urls = [], amount = 5) {
  const array = new Array(amount).fill(Promise.resolve());
  const result = new Array(urls.length);
  urls = urls.map((v, i) => ({ v, i }));

  const chain = (p) => {
    if (urls.length) {
      const { v, i } = urls.shift();
      return p.then(() => {
        const op = delay(v, i).then((r) => {
          result[i] = r;
        });
        return chain(op);
      });
    }
    return p;
  }

  await Promise.all(array.map(chain));
  return result;
}

request(urls, 5).then(console.log);
