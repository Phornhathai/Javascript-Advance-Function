// Challenge: Methods Exercise
// ประกาศ object ชื่อว่า square โดยที่ object นี้จะต้องมี methods 2 อันด้วยกัน ซึ่ง methods เหล่านั้นจะทำหน้าที่เกี่ยวกับการคำนวณเรขาคณิตสี่เหลี่ยมจัตุรัส methods ทั้ง 2 อันประกอบไปด้วย method ชื่อว่า area และ perimeter (พื้นที่ และเส้นรอบรูป)

// area จะต้องทำการรับค่าของความยาวแต่ละด้าน หรือ side (ความยาวทุกด้านมีค่าเท่ากัน) และ method นี้จะต้อง return ค่าของพื้นที่ของสี่เหลี่ยมจัตุรัสนี้

// perimeter จะต้องทำการรับค่าของความยาวแต่ละด้าน และ return ค่าของความยาวรอบรูปของสี่เหลี่ยมจัตุรัสนั้น หรือ ความยาวของแต่ละด้าน side คูณด้วย 4

const square = {
    area (x){
        return console.log(`ค่าพื้นที่สี่เหลี่ยมจัตุรัส = ${Math.pow(x,2)}`);
    },
    perimeter (x){
        return console.log(`ค่าของความยาวรอบรูปของสี่เหลี่ยมจัตุรัส = ${x * 4}`);
    }
}

console.log(square.area(2));
console.log(square.perimeter(4));