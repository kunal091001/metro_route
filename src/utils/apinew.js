import axios from "axios";

const baseURL =
  "https://api-metro-project-eyygs2u9z-kunal091001.vercel.app/api";
const callback = axios.create({
  baseURL: baseURL,
});

const getResultStations = async (fromStationName, toStationName) => {
  return new Promise((resolve, reject) => {
    callback
      .get(`/shortestDist?from=${fromStationName}&to=${toStationName}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getResultStations };
