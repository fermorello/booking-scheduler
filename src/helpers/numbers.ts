export const range = (start: number, end: number, interval: number) => {
    const arr = [];
    for (let i = start + 1; i <= end; i += interval) {
        arr.push(i);
    }
    return arr;
};
