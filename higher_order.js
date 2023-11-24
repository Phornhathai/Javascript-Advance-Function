
function callSixTime(func){
    func()
    func()
    func()
    func()
    func()
    func()
    func()

}

function hello(params){
    console.log("Hello World");
}

callSixTime(hello)