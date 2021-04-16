const doLog = true;
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Logger {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  export function log(c: any): void {
    if (doLog) {
      // eslint-disable-next-line no-console
      console.log(`crda-stack-analysis: ${c}`);
    }
  }
}
