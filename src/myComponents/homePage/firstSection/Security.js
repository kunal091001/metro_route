import React from "react";

export default function Security() {
  return (
    <>
      {/* <a href="https://haryanapolice.gov.in/Citizen_services">Haryana Police</a>
      <a href="https://propertytheft.delhipolice.gov.in/">Delhi Police</a> */}
      <div className="text-7xl text-center my-32">Page under Modification</div>

      {/* <div
        className="p-10"
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Red Line</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className="hidden"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <table className="table w-full text-center">
                <tbody>
                  <tr className="border-collapse border">
                    <th className="border-collapse border">Metro Station</th>
                    <th className="border-collapse border">Police Station</th>
                    <th className="border-collapse border">
                      Location of Police Station
                    </th>
                    <th className="border-collapse border">Contact Number</th>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Shaheed Sthal New Bus Adda
                    </td>
                    <td className="border-collapse border">
                      Kotwali GZB &amp; Sihani Gate
                    </td>
                    <td className="border-collapse border">
                      Near Ghantaghar, Ghaziabad &amp; Near old Bus Adda,
                      Ghaziabab
                    </td>
                    <td className="border-collapse border">
                      8929513871 &amp; 8929513873
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Hindon River</td>
                    <td className="border-collapse border">Nandgram</td>
                    <td className="border-collapse border">
                      B-Block Near Double Tanki, Nandgram, Ghaziabad
                    </td>
                    <td className="border-collapse border">8929436688</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Arthala</td>
                    <td className="border-collapse border">Sihani Gate</td>
                    <td className="border-collapse border">
                      Near Old Bus Adda, Ghaziabab
                    </td>
                    <td className="border-collapse border">8929513873</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Mohan Nagar</td>
                    <td className="border-collapse border" rowspan="5">
                      Sahibabad
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      Near Shyam Park Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      8929513878
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shyam Park</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Major Mohit Sharma Rajendra Nagar
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rajbagh</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shahid Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Dilshad Garden</td>
                    <td className="border-collapse border" rowspan="7">
                      Shastri Park Metro
                    </td>
                    <td className="border-collapse border" rowspan="7">
                      At Shastri Park Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="7">
                      011-22173623
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Jhilmil</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Mansarovar Park</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shahdara</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Welcome</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Seelampur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shastri Park</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Kashmere Gate</td>
                    <td className="border-collapse border">
                      Kashmere Gate Metro
                    </td>
                    <td className="border-collapse border">
                      Adjacent to Kashmere Gate Metro Station Parking
                    </td>
                    <td className="border-collapse border">011-23923015,16</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Tis Hazari</td>
                    <td className="border-collapse border" rowspan="8">
                      Netaji Subhash Place Metro
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      At Netaji Subhash Place Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      011-27312826,27
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Pul Bangash</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Pratap Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shastri Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Inder Lok</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Kanhaiya Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Keshav Puram</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Netaji Subhash Place
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Kohat Enclave</td>
                    <td className="border-collapse border" rowspan="5">
                      Rithala Metro
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      At Rithala Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      011-27058384
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Pitampura</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rohini East</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rohini West</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rithala</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Yellow Line</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <table className="table w-full text-center">
                <tbody>
                  <tr className="border-collapse border">
                    <th className="border-collapse border">Metro Station</th>
                    <th className="border-collapse border">Police Station</th>
                    <th className="border-collapse border">
                      Location of Police Station
                    </th>
                    <th className="border-collapse border">Contact Number</th>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Samaypur Badli</td>
                    <td className="border-collapse border" rowspan="8">
                      Azadpur Metro
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      At Azadpur Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      011-27428025
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Rohini Sec -18, 19
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Haidarpur Badli</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Jahangir Puri</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Adarsh Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Azadpur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Model Town</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">GTB Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Vishwa Vidyalaya</td>
                    <td className="border-collapse border" rowspan="7">
                      Kashmere Gate Metro
                    </td>
                    <td className="border-collapse border" rowspan="7">
                      Adjacent to Kashmere Gate Metro Station Parking
                    </td>
                    <td className="border-collapse border" rowspan="7">
                      011-23923015,16
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Vidhan Sabha</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Civil lines</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Kashmere Gate</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Chandni Chowk</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Chawari Bazar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">New Delhi</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rajiv Chowk</td>
                    <td className="border-collapse border" rowspan="5">
                      Rajiv Chowk Metro
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      At Chawri Bazar Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      011-23279036
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Patel Chowk</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Central Secretariat
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Udyog Bhawan</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Lok Kalyan Marg</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Jor Bagh</td>
                    <td className="border-collapse border" rowspan="4">
                      Dilli Haat-INA Metro
                    </td>
                    <td className="border-collapse border" rowspan="4">
                      At Dilli Haat-INA Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="4">
                      011-26880100,200
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Dilli Haat-INA</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">AIIMS</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Green Park</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Hauz Khas</td>
                    <td className="border-collapse border" rowspan="8">
                      Ghitorni Metro
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      At Ghitorni Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      011-26501325
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Malviya Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Saket</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Qutub Minar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Chattarpur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sultanpur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Ghitorni</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Arjangarh</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Gurudrona Charya</td>
                    <td className="border-collapse border" rowspan="5">
                      IFFCO Chowk Metro
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      At IFFCO Chowk Metro Station (Gurugram)
                    </td>
                    <td className="border-collapse border" rowspan="5">
                      0124-2570800
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sikander Pur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">MG Road</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">IFFCO Chowk</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">HUDA City Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>Blue Line</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          className="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <table className="table w-full text-center">
                <tbody>
                  <tr className="border-collapse border">
                    <th className="border-collapse border">Metro Station</th>
                    <th className="border-collapse border">Police Station</th>
                    <th className="border-collapse border">
                      Location of Police Station
                    </th>
                    <th className="border-collapse border">Contact Number</th>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 21
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      IGI Airport Metro
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      Dwarka Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      8675900763
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 8
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 9
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 10
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 11
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 12
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 13
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Dwarka Sector - 14
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Dwarka</td>
                    <td className="border-collapse border" rowspan="8">
                      Janakpuri Metro
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      Dwarka Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="8">
                      8800294693
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Dwarka Mor</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Nawada</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Uttam Nagar West</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Uttam Nagar East</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Janakpuri West</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Janakpuri East</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Tilak Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Subhash Nagar</td>
                    <td className="border-collapse border" rowspan="12">
                      Rajouri Garden Metro
                    </td>
                    <td className="border-collapse border" rowspan="12">
                      Rajouri Garden Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="12">
                      011-25150008
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Tagore Garden</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rajouri Garden</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Ramesh Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Moti Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Kirti Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Shadipur</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Patel Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rajender Place</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Karol Bagh</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Jhandewalan</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Ramkrishna Ashram Marg
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Rajiv Chowk</td>
                    <td className="border-collapse border">
                      Rajiv Chowk Metro
                    </td>
                    <td className="border-collapse border">
                      Chawri Bazar Metro Station
                    </td>
                    <td className="border-collapse border">011-23279036</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Barakhambha Road</td>
                    <td className="border-collapse border" rowspan="4">
                      Supreme Court Metro
                    </td>
                    <td className="border-collapse border" rowspan="9">
                      Yamuna Bank Metro Station
                    </td>
                    <td className="border-collapse border" rowspan="9">
                      011-22486281
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Mandi House</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Supreme Court</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Indraprastha</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Yamauna Bank</td>
                    <td className="border-collapse border" rowspan="5">
                      Yamuna Bank Metro
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Akshardhaam</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Mayur Vihar Ph-I</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Mayur Vihar Extn.
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">New Ashok Nagar</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Noida Sector-15</td>
                    <td className="border-collapse border" rowspan="3">
                      Sec-20 Noida
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      Near BSNL Chowk, Sec-20
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      &nbsp;0120-2473395
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Noida Sector-16</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Noida Sector-18</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Botanical Garden</td>
                    <td className="border-collapse border" rowspan="3">
                      Sec-39 Noida
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      Police chowki outside Botanical Garden
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      0120-2577100
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Golf Course</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Noida City Centre
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sec-34 Noida</td>
                    <td className="border-collapse border">
                      North Side Sec-24 &amp; South Side Sec-49 Noida
                    </td>
                    <td className="border-collapse border">
                      Village-Nithari beneath elivated road &amp; Village
                      Barolla, DND Road Chowk
                    </td>
                    <td className="border-collapse border">
                      9870395062 &amp; 9870395065
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sec- -52 Noida</td>
                    <td className="border-collapse border">Sec-49 Noida</td>
                    <td className="border-collapse border">
                      Village Barolla, DND Road Chowk
                    </td>
                    <td className="border-collapse border">9870395065</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sec-61 Noida</td>
                    <td className="border-collapse border">
                      Phase-3 Noida (Sec-71)
                    </td>
                    <td className="border-collapse border">
                      Near Kailash Neuro Hospital / Near Firebrigde Station
                    </td>
                    <td className="border-collapse border">9870395064</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sec-59 Noida</td>
                    <td className="border-collapse border" rowspan="3">
                      Noida Ph-3 (Sec-71) &amp; Sec-58
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      Near Neuro Kailash Hospital
                    </td>
                    <td className="border-collapse border" rowspan="3">
                      9870395064 &amp; 9870395063
                    </td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">Sec-62 Noida</td>
                  </tr>
                  <tr className="border-collapse border">
                    <td className="border-collapse border">
                      Noida Electronic City
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-4"
            aria-expanded="false"
            aria-controls="accordion-flush-body-4"
          >
            <span>Blue Line</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-4"
          className="hidden"
          aria-labelledby="accordion-flush-heading-4"
        >
          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <table className="table text-center w-full">
                <tbody>
                  <tr className="border border-collapse">
                    <th className="border border-collapse">Metro Station</th>
                    <th className="border border-collapse">Police Station</th>
                    <th className="border border-collapse">
                      Location of Police Station
                    </th>
                    <th className="border border-collapse">Contact Number</th>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Laxmi Nagar</td>
                    <td className="border border-collapse" rowspan="5">
                      Yamuna Bank Metro
                    </td>
                    <td className="border border-collapse" rowspan="5">
                      At Yamuna Bank Metro Station
                    </td>
                    <td className="border border-collapse" rowspan="5">
                      011-22486281
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Nirman Vihar</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Preet Vihar</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Karkardooma</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Anand Vihar ISBT</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Kaushambi</td>
                    <td className="border border-collapse" rowspan="2">
                      Kaushambi, Ghaziabad
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      Opposite PAC Camp, Ghaziabad
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      0120-2881000
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Vaisahali</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h2 id="accordion-flush-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-5"
            aria-expanded="false"
            aria-controls="accordion-flush-body-5"
          >
            <span>Green Line</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-5"
          className="hidden"
          aria-labelledby="accordion-flush-heading-5"
        >
          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <table className="table w-full  text-center  ">
                <tbody>
                  <tr className="border border-collapse">
                    <th className="border border-collapse">Metro Station</th>
                    <th className="border border-collapse">Police Station</th>
                    <th className="border border-collapse">
                      Location of Police Station
                    </th>
                    <th className="border border-collapse">Contact Number</th>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Kirti Nagar</td>
                    <td className="border border-collapse" rowspan="2">
                      Rajouri Garden Metro
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      At Rajouri Garden Metro Station
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      011-25150008
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Satguru Ram Singh Marg
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Inderlok</td>
                    <td className="border border-collapse">
                      Netaji Subhash Place Metro
                    </td>
                    <td className="border border-collapse">
                      At Netaji Subhash Place Metro Station
                    </td>
                    <td className="border border-collapse">011-27312827</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Ashok Park Main</td>
                    <td className="border border-collapse" rowspan="17">
                      Nangloi Metro
                    </td>
                    <td className="border border-collapse" rowspan="17">
                      At Nangloi Metro Station
                    </td>
                    <td className="border border-collapse" rowspan="17">
                      011-25962200
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Punjabi Bagh</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Shivaji Park</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Madipur</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Paschim Vihar East
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Paschim Vihar West
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Peeragarhi</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Udyog Nagar</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Surajmal Stadium</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Nangloi</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Nangloi Railway Station
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Rajdhani Park</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Mundka</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Mundka Industrial Area
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">GHEWARA</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">TIKRI KALAN</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">TIKRI BORDER</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Pandit Shri Ram Sharma
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      Bahadurgarh City
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      Bahadurgarh City
                    </td>
                    <td className="border border-collapse" rowspan="2">
                      01276-230802
                    </td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Bahadurgarh City</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">
                      Brigagadier Hoshiyar Singh
                    </td>
                    <td className="border border-collapse">
                      Bahadurgarh Sec-6
                    </td>
                    <td className="border border-collapse">
                      Bahadurgarh Sec-6
                    </td>
                    <td className="border border-collapse">01276-242604</td>
                  </tr>
                  <tr className="border border-collapse">
                    <td className="border border-collapse">Mundka Depot</td>
                    <td className="border border-collapse">Nangloi Metro</td>
                    <td className="border border-collapse">
                      At Nangloi Metro Station
                    </td>
                    <td className="border border-collapse">011-25962200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
