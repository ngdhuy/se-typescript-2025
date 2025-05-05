/**
 * * define static member for class
 */

class MyShape {
    static          #count  : number = 0            // #properties are only access inside class
    private static  _color  : string = 'no-color'
    public static   num     : number = 99
  
    public static print_count = () : void => console.log(MyShape.#count)
    public static print_color() : void { console.log(MyShape._color) }
    public static print_num = () : void => console.log(MyShape.num)
}

console.log(MyShape.num)
MyShape.num = 1000
MyShape.print_count()
MyShape.print_color()
MyShape.print_num()

let shape : MyShape = new MyShape()
// shape.print_count()              // error: static method cannot be access from instance