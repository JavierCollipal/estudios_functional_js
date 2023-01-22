//create a function with five parameters, three of them are service dependences
//create three functions called service and return an object in each one
export function service1() { return { name: 'service1', insert: 1, save: [] }; }
export function service2() { return { name: 'service2' , insert: 2, save: []}; }
export function service3() { return { name: 'service3' , insert: 3, save: []}; }

//we have  a function that receives five parameters, three of them dependences of services, for example each of them is a service related to some model
//we have to create a function that receives five parameters, three of them are services and two of them values we need to work
export function workWithThreeDifferentServices(cats, adopters, givers, service1, service2, service3) {

    //manipulate cats, odopters and givers data and save it in the services
    service1.save.push(cats);
    service2.save.push(adopters);
    service3.save.push(givers);
    //an real example of  a production function could be something like this, how we can avoid the multiple parameters?
    //do something
    return true
}

