export function useGetColor(collectionField) {
  return {
    loading: false,
    getFontColor: (value) => '#fff',
    getBackgroundColor: (value) => value,
  };
}
