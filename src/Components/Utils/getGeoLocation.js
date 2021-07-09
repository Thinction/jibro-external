// google geocoding
// 네이티브와 통신하는 방법
export const getGeoLocation = async (latitude, longitude) => {
  const positionStr = `${latitude},${longitude}`;
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${positionStr}&language=ko&key=${process.env.REACT_APP_GOOGLE_API_KEY}&result_type=sublocality_level_1`;
  const res = await fetch(endpoint);
  const parsedJson = await res.json();
  return parsedJson.results[0].formatted_address.replace("대한민국 ", "") ?? "";
};

// 기존 방법
export const getGeoLocationPc = (setGeoLocation) => {
  window.navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const positionStr = `${latitude},${longitude}`;
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${positionStr}&language=ko&key=${process.env.REACT_APP_GOOGLE_API_KEY}&result_type=sublocality_level_1`;

    const res = await fetch(endpoint);
    const parsedJson = await res.json();
    setGeoLocation(
      parsedJson.results[0].formatted_address.replace("대한민국 ", "") ?? ""
    );
  });
};

// 국토교통부 geocoding
// const getGeoLocation = (setGeoLocation) => {
//   window.navigator.geolocation.getCurrentPosition(async (position) => {
//     const { latitude, longitude } = position.coords;
//     const point = `${longitude},${latitude}`;
//     const endpoint = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${point}&type=PARCEL&zipcode=false&simple=true&key=${process.env.REACT_APP_GEOCODING_API_KEY}`;
//     const res = await fetch(endpoint);
//     const parsedJson = await res.json();
//     console.log(parsedJson);
//     if (parsedJson.response.status === "OK") {
//       const { level1, level2 } = parsedJson.response.result[0].structure;
//       setGeoLocation(level1 + " " + level2 ?? "");
//     }
//   });
// };
export default getGeoLocation;
