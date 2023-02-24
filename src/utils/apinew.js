import axios from "axios";

const baseURL = "https://us-central1-delhimetroapi.cloudfunctions.net";

const callback = axios.create({
  baseURL: baseURL,
});

const getResultStations = async (fromStationName, toStationName) => {
  return new Promise((resolve, reject) => {
    callback
      .get(`/route-get?from=${fromStationName}&to=${toStationName}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getResultStations };
