interface IPrint {
    print();
}


function printClass(a: IPrint) {
    a.print();
}


class ClassA implements IPrint{
    print() {
        console.log("ClassA.print");
    }
}

class ClassB implements IPrint{
    print() {
        console.log(`ClassB.print`);
    }
}

let classa = new ClassA();
let classb = new ClassB();

classa.print();
classb.print();