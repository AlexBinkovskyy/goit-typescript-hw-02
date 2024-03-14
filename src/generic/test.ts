// type Mixedtype = {
//     [key: string]: string | number;
// };

// const user: Mixedtype = {
//     name: "Bob",
//     age: 23,
//     country: "Ukraine",
// };

// const book: Mixedtype = {
//     title: "Bible",
//     pageCount: 350,
// };

// function identity<T>(arg: T):T {
//     return arg
// }

// let output1 = identity<string>('something')
// let output2 = identity(321564654)

// const reverse = <Array>(args: Array): Array => {
//     return args.reverse()
// };

// function reverse<A>(args: A[]): A[] {
//     return args.reverse()
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// let strings = reverse<string>(["a", "b", "c", "d", "e", "f", "g"]);

// console.log(numbers);

// function lengthOfObject<T extends { length: number }>(obj: T): number {
//     return obj.length;
// }

// let obj: { name: string; length: number } = {
//     name: "bob",
//     length: NaN,
// };

// let res = lengthOfObject(obj);

// const student = {
//     name: 'John',
//     age: 25,
// }

// function getProperty<T, K extends keyof T >(obj: T, key: K ): T[K] {
//     return obj[key]
// }

// let studentName = getProperty(student, 'name')
// let studentAddress = getProperty(student, 'age')

// type Todo = {
//     title: string;
//     description: string;
//     completed: boolean;
// };

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//     return {
//         ...todo,
//         ...fieldsToUpdate,
//     };
// }

// const todo1 = {
//     title: 'Lear TypeScript',
//     description: 'Study the basics of TyeScript',
//     completed: false,
// }
// const todo2 = updateTodo(todo1, {description: 'Study Generics in TypeScript'})