export const formatSelect = <T extends { _id: any; name: any }>(
  array: Array<T> = []
) => {
  return array.map((item) => ({
    _id: item._id,
    name: item.name,
  }));
};
