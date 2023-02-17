import axios from "axios";

const baseURL = "https://backend.delhimetrorail.com/api/v2/en/";
// https://backend.delhimetrorail.com/api/v2/en/line_list

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

export { getLineList, getStationList };
