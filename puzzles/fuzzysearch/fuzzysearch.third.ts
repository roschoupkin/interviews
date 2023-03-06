export default function fuzzysearch(sub: string, str: string): boolean {
  const context = {
    index: 0,
    get isFinish() {
      return this.index === sub.length;
    },
  };

  for (let i = 0; i < str.length; i++) {
    if (sub[context.index] === str[i]) {
      context.index++;
    }

    if (context.isFinish) {
      break;
    }
  }

  return context.isFinish;
}
