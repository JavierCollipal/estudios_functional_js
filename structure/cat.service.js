// eslint-disable-next-line functional/immutable-data
module.exports = ((catModel, utils, tasks) => {
  // IFEE for instant function execution
  // our code is declared inside the function declaration
  const cats = [{ name: "lanita", age: 2 }];
  const getOne = (id) => {
    catModel.findById(id);
  };
  const getAll = () => {
    catModel.find({});
    utils.someUtilTask();
    tasks.sendSms();
    return cats;
  };
  const createOne = (createData) => {
    catModel.create(createData);
  };
  const updateOne = (updateData, id) => {
    catModel.update({ _id: id }, updateData);
  };
  const deleteOne = (id) => {
    catModel.deleteOne({ _id: id });
  };

  return {
    getOne,
    getAll,
    createOne,
    updateOne,
    deleteOne,
  };
})(
  {
    find: (query) => console.log(query),
    update: (updateData, id) => {},
    deleteOne: (id) => {},
    createOne: (createData) => {},
  },
  { someUtilTask: () => console.log("tarea util ocupada con exito") },
  { sendSms: () => console.log("sms enviado con exito") }
);
