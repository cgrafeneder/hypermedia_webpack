
import '../style/styles.scss';

console.log('Hey guys and ladies!!');

export const sqrt = Math.sqrt;
export function square(x){
    return x * x;
}

class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}

let test = new TestClass();