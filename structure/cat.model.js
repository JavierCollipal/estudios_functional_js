const initModel = () => ({
  find: (query) => console.log(query),
  update: (updateData, id) => console.log(updateData, id),
  deleteOne: (id) => console.log(id),
  createOne: (createData) => console.log(createData),
});
const catModel = initModel();

// eslint-disable-next-line import/prefer-default-export
export { catModel };
