// only used in the compiler step not actually generate any code for this
interface IComplexType {
    id: number;
    name?: string;
};

let complexType: IComplexType = {
    id: 1,
    name: "yolo"
};


function log(val: any): void {
    console.log(val);
}

interface Point {
    readonly x: number;
    y: number;
}

let p1: Point = {
    x: 2,
    y: 2
};

p1.y= 4;
log(p1);