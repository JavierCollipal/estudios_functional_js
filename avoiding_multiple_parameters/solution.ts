const service1 = { name: 'service1', insert: 1, save: [] };
const service2 = { name: 'service2', insert: 2, save: [] };
const service3 = { name: 'service3', insert: 3, save: [] };


const cats = [{ name: 'cat1' }, { name: 'cat2' }, { name: 'cat3' }];
const adopters = [{ name: 'adopter1' }, { name: 'adopter2' }, { name: 'adopter3' }];
const givers = [{ name: 'giver1' }, { name: 'giver2' }, { name: 'giver3' }];
//make an interface for target data and services    
interface TargetData {
    cats: [];
    adopters: [];
    givers: [];
}
//make interface for services 
interface Services {
    service1: { name: string, insert: number, save: [] };
    service2: { name: string, insert: number, save: [] };
    service3: { name: string, insert: number, save: [] };
}

function workWithThreeDifferentServices(targetData,services) {
    const { cats, adopters, givers} = targetData
    const { service1, service2, service3 } = services
    console.log('old function needing multiple parameters')
    service1.save.push(cats);
    service2.save.push(adopters);
    service3.save.push(givers);
    return true
}
//gather cats, adopters and givers in a single object
const data = { cats, adopters, givers };
//gather services in a single object
const services = { service1, service2, service3 };
//call the function with a single parameter
workWithThreeDifferentServices( data, services);
