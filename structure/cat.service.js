// eslint-disable-next-line functional/immutable-data
module.exports = ((catModel) => {
  // IFEE for instant function execution
  // our code is declared inside the function declaration
  const getOne = (id) => {
    catModel.findById(id);
  };
  const getAll = () => {
    catModel.find({});
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
})();
