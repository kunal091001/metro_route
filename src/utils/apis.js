import axios from "axios";

const baseURL = "https://backend.delhimetrorail.com/api/v2/en/";
// https://backend.delhimetrorail.com/api/v2/en/line_list

// https://backend.delhimetrorail.com/api/v2/en/station_route/HDNR/JGPI/least-distance/2023-02-22T13:34:27.056

const callback = axios.create({
  baseURL: baseURL,
});

const getLineList = async () => {
  return new Promise((resolve, reject) => {
    callback
      .get("line_list")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getStationList = async (lineName) => {
  return new Promise((resolve, reject) => {
    callback
      .get(`station_by_line/${lineName}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getLineDetails = async (lineCode) => {
  return new Promise((resolve, reject) => {
    callback
      .get(`/metro_line/${lineCode}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getResultStations = async (
  fromStationCode,
  toStationCode,
  currDateTime
) => {
  return new Promise((resolve, reject) => {
    callback
      .get(
        `/station_route/${fromStationCode}/${toStationCode}/least-distance/${currDateTime}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getLineList, getStationList, getLineDetails, getResultStations };
