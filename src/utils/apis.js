import axios from "axios";

const baseURL = "https://backend.delhimetrorail.com/api/v2/en/";

// https://backend.delhimetrorail.com/api/v2/en/station_brief_detail/ATHA
// https://backend.delhimetrorail.com/api/v2/en/new_fare_with_route/BIMR/HCC/minimum-interchange/
// https://backend.delhimetrorail.com/api/v2/en/new_fare_with_route/BIMR/HCC/least-distance/
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

const getResultFair = async (fromCode, toCode) => {
  return new Promise((resolve, reject) => {
    callback
      .get(`/new_fare_with_route/${fromCode}/${toCode}/least-distance/`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getLineDetails, getLineList, getResultFair, getStationList };
