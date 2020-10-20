const R = require("ramda");

const mockPerson = { firstName: "javier", lastName: "collipal" };
const mockFilteredLodgings = [
  { place: { ownerId: 1 } },
  { place: { ownerId: 2 } },
  { place: { ownerId: 3 } },
];

const createLodgingValidationBeamsNotification = (person) => {
  const title = "validacion de lodging";
  const body = `${person.firstName} ${
    person.lastName || ""
  } confirmo su estado`;
  return { title, body };
};
// preparacion de user ids para notificaciones beams
const getUniqOwnerIds = (lodgings) => {
  const filteredOwnerIds = lodgings.map((lodging) =>
    lodging.place.ownerId.toString()
  );
  return [...new Set(filteredOwnerIds)];
};
// envio de una notificacion push
const sendPushNotification = ({ title, body, users, user }) =>
  Promise.resolve(console.log(`${title} ${body} ${users} ${user}`));
// envio de un mensaje a un canal pusher
const pusherTrigger = (person) =>
  Promise.resolve(
    console.log(`mensaje pusher enviado ${JSON.stringify(person)}`)
  );
const pusherTriggerError = () => {
  throw new Error("se murio pusher");
};
const generateQueueMessage = (options = {}) => options;
// envio de un sms
const sendLodgingConfirmationSms = (message) =>
  Promise.resolve(
    console.log(`mensaje de confirmacion enviado ${JSON.stringify(message)}`)
  );

const prepareBeamData = (person, filteredLodgings) => {
  const { title, body } = createLodgingValidationBeamsNotification(person);
  const uniqOwnerIds = getUniqOwnerIds(filteredLodgings);
  return {
    title,
    body,
    users: uniqOwnerIds,
    user: "microservicio de notificaciones",
  };
};
const logInfo = (info) => console.log(info);

const pipeExample = async (person, filteredLodgings, from) => {
  try {
    R.pipe(
      () => prepareBeamData(person, filteredLodgings),
      await sendPushNotification,
      () =>
        generateQueueMessage({
          message: "lodging validado gracias por responder",
          phone: from,
        }),
      await sendLodgingConfirmationSms,
      () => pusherTrigger(person),
      () => logInfo("termino el proceso de confirmacion de lodging")
    )();
  } catch (e) {
    console.error(
      `error encontrado en una de las funciones de pipe ${e.message}`
    );
  }
};
const pipeErrorExample = async (person, filteredLodgings, from) => {
  try {
    R.pipe(
      () => prepareBeamData(person, filteredLodgings),
      await sendPushNotification,
      () =>
        generateQueueMessage({
          message: "lodging validado gracias por responder",
          phone: from,
        }),
      await sendLodgingConfirmationSms,
      pusherTriggerError,
      () => logInfo("termino el proceso de confirmacion de lodging")
    )();
  } catch (e) {
    console.error(
      `error encontrado en una de las funciones de pipe ${e.message}`
    );
  }
};
(async function () {
  await pipeExample(mockPerson, mockFilteredLodgings, "76021776");
  await pipeErrorExample(mockPerson, mockFilteredLodgings, "23458219");
})();
