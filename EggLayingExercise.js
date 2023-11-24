// Challenge: Egg Laying Exercise
// ประกาศ object ของไก่ ชื่อว่า hen และ object ตัวนั้นจะต้องมี 3 properties ได้แก่:

// name จะต้องได้ค่าชื่อของไก่ คือ 'Helen'
// eggCount จะต้องได้ค่าจำนวนล่าสุดของไข่ไก่ตัวนั้น โดยจะต้องเริ่มต้นที่ 0
// layAnEgg จะเป็น method ที่ทำการเพิ่มจำนวนของไข่ไก่ตัวนั้น หรือค่าของ eggCount ขึ้น 1 และ returns ค่า string "EGG" คุณจะต้องใช้ this ในข้อนี้

const hen = {
    name : "Helen",
    eggCount : 0,
    layAnEngg(){
        console.log("EGG");
        return this.eggCount += 1
    }
}

console.log(hen.name);
hen.layAnEngg()
console.log(hen.eggCount);
hen.layAnEngg()
hen.layAnEngg()
console.log(hen.eggCount);