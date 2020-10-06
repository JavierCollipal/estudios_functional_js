const R = require('ramda');

const mockPerson = {firstName: 'javier', lastName: 'collipal'}
const mockFilteredLodgings = [{place: {ownerId: 1}},{place: {ownerId: 2}},{place: {ownerId: 3}}]

const createLodgingValidationBeamsNotification = (person)  => {
    const title = 'validacion de lodging';
    const body = `${person.firstName} ${person.lastName || ''} confirmo su estado`;
    return { title, body };
}
//preparacion de user ids para notificaciones beams
const getUniqOwnerIds = (lodgings) => {
    const filteredOwnerIds = lodgings.map(lodging => lodging.place.ownerId.toString());
    return [...new Set(filteredOwnerIds)];
};
//envio de una notificacion push
const sendPushNotification = (options = {}) => console.log(`sendNotificationPush y su valor ${JSON.stringify(options)}`);
//envio de un mensaje a un canal pusher
const pusherTrigger = (person)  => console.log(`envie un mensaje con pusher en base a este person ${JSON.stringify(person)}`)
const generateQueueMessage = (options = {}) => options
//envio de un sms
const sendLodgingConfirmationSms = (message)  => console.log(`este es el mensaje de confirmacion creado ${JSON.stringify(message)}`)

const prepareBeamData = (person,filteredLodgings) => {
    const { title, body } = createLodgingValidationBeamsNotification(person);
    const uniqOwnerIds = getUniqOwnerIds(filteredLodgings);
    return { title, body, uniqOwnerIds, user: 'microservicio de notificaciones' };
};
const logInfo = info => console.log(info)

const pipeExample = (person, filteredLodgings, from) => {
 R.pipe(
     () =>  prepareBeamData(person,filteredLodgings),
      sendPushNotification,
     () => generateQueueMessage({message: 'lodging validado gracias por responder',phone: from}),
      sendLodgingConfirmationSms,
     () => pusherTrigger(person),
     () => logInfo('termino el proceso de confirmacion de lodging')
  )()
}

pipeExample(mockPerson,mockFilteredLodgings,'76021776');

