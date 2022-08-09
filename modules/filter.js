const filtering = (array, filterBy = {}) => {
  if (Object.keys(filterBy).length > 0) {
    if ("name" in filterBy) {
      return array.filter(
        (item) =>
          item.name.toLowerCase().indexOf(filterBy.name.toLowerCase()) > -1
      );
    }
    if ("position" in filterBy) {
      return array.filter(
        (item) =>
          item.position.toLowerCase().indexOf(filterBy.position.toLowerCase()) >
          -1
      );
    }
    return [];
  }
  return [];
};

export default filtering;
