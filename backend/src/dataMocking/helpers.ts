export function runFunctionNTimes<T>(n: number, func: () => T): T[] {
    let results: T[] = [];
    for (let i = 0; i < n; i++) {
        results.push(func());
    }
    return results;
}