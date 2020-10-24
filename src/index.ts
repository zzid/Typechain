const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}!!`);
}

const sayHiString = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}
sayHi("zzid", 28, 'male')
export {};