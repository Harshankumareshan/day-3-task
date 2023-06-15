//compare two json have the same properties without order

var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };



if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            console.log("given object is equal");
            break;
        }

        else {
            
            console.log("given object is not equal");
            break;
        }
    }
}



