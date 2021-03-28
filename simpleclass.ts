class SimpleClass {
    id: number;
    print(): void {
        console.log(`SimpleClass has id ${this.id}`);
    }
}

let c = new SimpleClass();
c.id = 5;
c.print();
