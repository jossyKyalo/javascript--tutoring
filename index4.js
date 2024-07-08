//getter= special method that makes a property readable
//setter= specila method that makes a property writable
// validate and modify a value when reading/ writing a property

class Rectangle{
    constructor(width, height){
        this.width= width;
        this.height= height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.error("width must be a positive number ");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}
const rectangle= new Rectangle(3, 4);

rectangle.width=5;
rectangle.height=6;

console.log(rectangle.width);
console.log(rectangle.height);