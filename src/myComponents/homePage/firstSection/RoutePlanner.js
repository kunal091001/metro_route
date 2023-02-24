import React, { useContext, useState } from "react";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";
import RouteIcon from "../../../Assets/images/route.png";
import ChangeIcon from "../../../Assets/images/arrows.png";
import { getResultStations } from "../../../utils/apinew";
import { useNavigate } from "react-router-dom";
import SearchList from "./SearchList";
import RouteContext from "../../Contexts/RouteContext";

export default function RoutePlanner() {
  const [showSearchList, setShowSearchList] = useState(false);
  const navigate = useNavigate();
  // 0 -> from, 1 -> to
  const [dataState, setDataState] = useState(null);
  // const [color, setColor] = useState(null);

  const { finalStationList, setFinalStationList } = useContext(RouteContext);

  const [stationData, setStationData] = useState({
    stationStatus: "",
    from: null,
    to: null,
  });

  const {
    changedFinalStationFrom,
    setChangedFinalStationFrom,
    changedFinalStationTo,
    setChangedFinalStationTo,
  } = useContext(RouteContext);

  const changeAccordinglyFrom = (str1) => {
    switch (str1) {
      case "AIIMS":
        setChangedFinalStationFrom("AIIMS");
        break;
      case "ADARSH NAGAR":
        setChangedFinalStationFrom("Adarsh Nagar");
        break;
      case "AIRPORT (T-3)":
        setChangedFinalStationFrom("Airport");
        break;
      case "AKSHARDHAM":
        setChangedFinalStationFrom("Akshardham");
        break;
      case "ANAND VIHAR ISBT":
        setChangedFinalStationFrom("Anand Vihar");
        break;
      case "ARJAN GARH":
        setChangedFinalStationFrom("Arjan Garh");
        break;
      case "ARTHALA":
        setChangedFinalStationFrom("Arthala");
        break;
      case "ASHOK PARK MAIN":
        setChangedFinalStationFrom("Ashok Park Main");
        break;
      case "ASHRAM":
        setChangedFinalStationFrom("Ashram");
        break;
      case "AZADPUR":
        setChangedFinalStationFrom("Azadpur");
        break;
      case "BADARPUR BORDER":
        setChangedFinalStationFrom("Badarpur");
        break;
      case "BADKAL MOR":
        setChangedFinalStationFrom("Badkhal Mor");
        break;
      case "BAHADURGARH CITY":
        setChangedFinalStationFrom("Bahadurgarh City");
        break;
      case "BARAKHAMBA ROAD":
        setChangedFinalStationFrom("Barakhambha Road");
        break;
      case "BATA CHOWK":
        setChangedFinalStationFrom("Bata Chowk");
        break;
      case "BHIKAJI CAMA PLACE":
        setChangedFinalStationFrom("Bhikaji Cama Place");
        break;
      case "BOTANICAL GARDEN":
        setChangedFinalStationFrom("Botanical Garden");
        break;
      case "BRIG. HOSHIAR SINGH":
        setChangedFinalStationFrom("Brigadier Hoshiyar Singh");
        break;
      case "CENTRAL SECRETARIAT":
        setChangedFinalStationFrom("Central Secretariat");
        break;
      case "CHANDNI CHOWK":
        setChangedFinalStationFrom("Chandni Chowk");
        break;
      case "CHAWRI BAZAR":
        setChangedFinalStationFrom("Chawri Bazar");
        break;
      case "CHHATARPUR":
        setChangedFinalStationFrom("Chhatarpur");
        break;
      case "CHIRAG DELHI":
        setChangedFinalStationFrom("Chirag Delhi");
        break;
      case "CIVIL LINES":
        setChangedFinalStationFrom("Civil Lines");
        break;
      case "DABRI MOR - JANAKPURI SOUTH":
        setChangedFinalStationFrom("Dabri Mor-Janakpuri South");
        break;
      case "DASHRATHPURI":
        setChangedFinalStationFrom("Dashrath Puri");
        break;
      case "DELHI AEROCITY":
        setChangedFinalStationFrom("Delhi Aerocity");
        break;
      case "DELHI CANTT.":
        setChangedFinalStationFrom("Delhi Cantonment");
        break;
      case "DELHI GATE":
        setChangedFinalStationFrom("Delhi Gate");
        break;
      case "DHAULA KUAN":
        setChangedFinalStationFrom("Dhaula Kuan");
        break;
      case "DILSHAD GARDEN":
        setChangedFinalStationFrom("Dilshad Garden");
        break;
      case "DURGABAI DESHMUKH SOUTH CAMPUS":
        setChangedFinalStationFrom("Durgabai Deshmukh South Campus");
        break;
      case "DWARKA":
        setChangedFinalStationFrom("Dwarka");
        break;
      case "DWARKA MOR":
        setChangedFinalStationFrom("Dwarka Mor");
        break;
      case "DWARKA SECTOR - 10":
        setChangedFinalStationFrom("Dwarka Sector 10");
        break;
      case "DWARKA SECTOR - 11":
        setChangedFinalStationFrom("Dwarka Sector 11");
        break;
      case "DWARKA SECTOR - 12":
        setChangedFinalStationFrom("Dwarka Sector 12");
        break;
      case "DWARKA SECTOR - 13":
        setChangedFinalStationFrom("Dwarka Sector 13");
        break;
      case "DWARKA SECTOR - 14":
        setChangedFinalStationFrom("Dwarka Sector 14");
        break;
      case "DWARKA SECTOR - 21":
        setChangedFinalStationFrom("Dwarka Sector 21");
        break;
      case "DWARKA SECTOR - 8":
        setChangedFinalStationFrom("Dwarka Sector 8");
        break;
      case "DWARKA SECTOR - 9":
        setChangedFinalStationFrom("Dwarka Sector 9");
        break;
      case "ESI HOSPITAL":
        setChangedFinalStationFrom("ESI Hospital");
        break;
      case "EAST AZAD NAGAR":
        setChangedFinalStationFrom("East Azad Nagar");
        break;
      case "EAST VINOD NAGAR-MAYUR VIHAR -II":
        setChangedFinalStationFrom("East Vinod Nagar - Mayur Vihar-II");
        break;
      case "ESCORTS MUJESAR":
        setChangedFinalStationFrom("Escorts Mujesar");
        break;
      case "OLD FARIDABAD":
        setChangedFinalStationFrom("Faridabad Old");
        break;
      case "GHEVRA METRO STATION":
        setChangedFinalStationFrom("Ghevra Metro station");
        break;
      case "GHITORNI":
        setChangedFinalStationFrom("Ghitorni");
        break;
      case "GOKULPURI":
        setChangedFinalStationFrom("Gokulpuri");
        break;
      case "GOLF COURSE":
        setChangedFinalStationFrom("Golf Course");
        break;
      case "GOVINDPURI":
        setChangedFinalStationFrom("Govind Puri");
        break;
      case "GREATER KAILASH":
        setChangedFinalStationFrom("Greater Kailash");
        break;
      case "GREEN PARK":
        setChangedFinalStationFrom("Green Park");
        break;
      case "GURU DRONACHARYA":
        setChangedFinalStationFrom("Guru Dronacharya");
        break;
      case "HUDA CITY CENTRE":
        setChangedFinalStationFrom("HUDA City Centre");
        break;
      case "HAIDERPUR BADLI MOR":
        setChangedFinalStationFrom("Haiderpur");
        break;
      case "HARKESH NAGAR OKHLA":
        setChangedFinalStationFrom("Harkesh Nagar");
        break;
      case "HAUZ KHAS":
        setChangedFinalStationFrom("Hauz Khas");
        break;
      case "SARAI KALE KHAN - NIZAMUDDIN":
        setChangedFinalStationFrom("Hazrat Nizamuddin");
        break;
      case "HINDON RIVER":
        setChangedFinalStationFrom("Hindon");
        break;
      case "IFFCO CHOWK":
        setChangedFinalStationFrom("IFFCO Chowk");
        break;
      case "IIT":
        setChangedFinalStationFrom("IIT Delhi");
        break;
      case "DILLI HAAT - INA":
        setChangedFinalStationFrom("INA");
        break;
      case "I.P. EXTENSION":
        setChangedFinalStationFrom("IP Extension");
        break;
      case "ITO":
        setChangedFinalStationFrom("ITO");
        break;
      case "INDERLOK":
        setChangedFinalStationFrom("Inderlok");
        break;
      case "INDRAPRASTHA":
        setChangedFinalStationFrom("Indraprastha");
        break;
      case "CYBER CITY":
        setChangedFinalStationFrom("IndusInd Bank Cyber City");
        break;
      case "JAFRABAD":
        setChangedFinalStationFrom("Jaffrabad");
        break;
      case "JAHANGIRPURI":
        setChangedFinalStationFrom("Jahangirpuri");
        break;
      case "JAMA MASJID":
        setChangedFinalStationFrom("Jama Masjid");
        break;
      case "JAMIA MILIA ISLAMIYA":
        setChangedFinalStationFrom("Jamia Millia Islamia");
        break;
      case "JANAK PURI EAST":
        setChangedFinalStationFrom("Janakpuri East");
        break;
      case "JANAK PURI WEST":
        setChangedFinalStationFrom("Janakpuri West");
        break;
      case "JANGPURA":
        setChangedFinalStationFrom("Jangpura");
        break;
      case "JANPATH":
        setChangedFinalStationFrom("Janpath");
        break;
      case "JASOLA-APOLLO":
        setChangedFinalStationFrom("Jasola Apollo");
        break;
      case "JASOLA VIHAR SHAHEEN BAGH":
        setChangedFinalStationFrom("Jasola Vihar Shaheen Bagh");
        break;
      case "JLN STADIUM":
        setChangedFinalStationFrom("Jawaharlal Nehru Stadium");
        break;
      case "JHANDEWALAN":
        setChangedFinalStationFrom("Jhandewalan");
        break;
      case "JHILMIL":
        setChangedFinalStationFrom("Jhilmil");
        break;
      case "JOHRI ENCLAVE":
        setChangedFinalStationFrom("Johri Enclave");
        break;
      case "JOR BAGH":
        setChangedFinalStationFrom("Jor Bagh");
        break;
      case "KAILASH COLONY":
        setChangedFinalStationFrom("Kailash Colony");
        break;
      case "KALINDI KUNJ":
        setChangedFinalStationFrom("Kalindi Kunj");
        break;
      case "KALKAJI MANDIR":
        setChangedFinalStationFrom("Kalkaji Mandir");
        break;
      case "KANHAIYA NAGAR":
        setChangedFinalStationFrom("Kanhiya Nagar");
        break;
      case "KARKARDUMA":
        setChangedFinalStationFrom("Karkarduma");
        break;
      case "KARKARDUMA COURT":
        setChangedFinalStationFrom("Karkarduma Court");
        break;
      case "KAROL BAGH":
        setChangedFinalStationFrom("Karol Bagh");
        break;
      case "KASHMERE GATE":
        setChangedFinalStationFrom("Kashmere Gate");
        break;
      case "KAUSHAMBI":
        setChangedFinalStationFrom("Kaushambi");
        break;
      case "KESHAV PURAM":
        setChangedFinalStationFrom("Keshav Puram");
        break;
      case "KHAN MARKET":
        setChangedFinalStationFrom("Khan Market");
        break;
      case "KIRTI NAGAR":
        setChangedFinalStationFrom("Kirti Nagar");
        break;
      case "KOHAT ENCLAVE":
        setChangedFinalStationFrom("Kohat Enclave");
        break;
      case "KRISHNA NAGAR":
        setChangedFinalStationFrom("Krishna Nagar");
        break;
      case "LAJPAT NAGAR":
        setChangedFinalStationFrom("Lajpat Nagar");
        break;
      case "LAL QUILA":
        setChangedFinalStationFrom("Lal Qila");
        break;
      case "LAXMI NAGAR":
        setChangedFinalStationFrom("Laxmi Nagar");
        break;
      case "LOK KALYAN MARG":
        setChangedFinalStationFrom("Lok Kalyan Marg");
        break;
      case "M.G. ROAD":
        setChangedFinalStationFrom("MG Road");
        break;
      case "MADIPUR":
        setChangedFinalStationFrom("Madipur");
        break;
      case "MAJLIS PARK":
        setChangedFinalStationFrom("Majlis Park");
        break;
      case "MAJOR MOHIT SHARMA RAJENDRA NAGAR":
        setChangedFinalStationFrom("Major Mohit Sharma");
        break;
      case "MALVIYA NAGAR":
        setChangedFinalStationFrom("Malviya Nagar");
        break;
      case "MANDAWALI - WEST VINOD NAGAR":
        setChangedFinalStationFrom("Mandawali - West Vinod Nagar");
        break;
      case "MANDI HOUSE":
        setChangedFinalStationFrom("Mandi House");
        break;
      case "MANSAROVAR PARK":
        setChangedFinalStationFrom("Mansarovar Park");
        break;
      case "MAUJPUR-BABARPUR":
        setChangedFinalStationFrom("Maujpur-Babarpur");
        break;
      case "MAYAPURI":
        setChangedFinalStationFrom("Mayapuri");
        break;
      case "MAYUR VIHAR -I":
        setChangedFinalStationFrom("Mayur Vihar - I");
        break;
      case "MAYUR VIHAR EXTENSION":
        setChangedFinalStationFrom("Mayur Vihar Extension");
        break;
      case "MAYUR VIHAR POCKET-1":
        setChangedFinalStationFrom("Mayur Vihar Pocket I");
        break;
      case "MEWALA MAHARAJPUR":
        setChangedFinalStationFrom("Mewala Maharajpur");
        break;
      case "MOULSARI AVENUE":
        setChangedFinalStationFrom("Micromax Moulsari Avenue");
        break;
      case "MOHAN ESTATE":
        setChangedFinalStationFrom("Mohan Estate");
        break;
      case "MOHAN NAGAR":
        setChangedFinalStationFrom("Mohan Nagar");
        break;
      case "MOOLCHAND":
        setChangedFinalStationFrom("Moolchand");
        break;
      case "MOTI NAGAR":
        setChangedFinalStationFrom("Moti Nagar");
        break;
      case "MUNDKA":
        setChangedFinalStationFrom("Mundka");
        break;
      case "MUNDKA INDUSTRIAL AREA (MIA)":
        setChangedFinalStationFrom("Mundka Industrial Area");
        break;
      case "MUNIRKA":
        setChangedFinalStationFrom("Munirka");
        break;
      case "NHPC CHOWK":
        setChangedFinalStationFrom("NHPC Chowk");
        break;
      case "NAJAFGARH":
        setChangedFinalStationFrom("Najafgrah");
        break;
      case "NANGLI":
        setChangedFinalStationFrom("Nangli");
        break;
      case "NANGLOI":
        setChangedFinalStationFrom("Nangloi");
        break;
      case "NANGLOI RAILWAY STATION":
        setChangedFinalStationFrom("Nangloi Railway station");
        break;
      case "NARAINA VIHAR":
        setChangedFinalStationFrom("Naraina Vihar");
        break;
      case "NAWADA":
        setChangedFinalStationFrom("Nawada");
        break;
      case "NEELAM CHOWK AJRONDA":
        setChangedFinalStationFrom("Neelam Chowk Ajronda");
        break;
      case "NEHRU ENCLAVE":
        setChangedFinalStationFrom("Nehru Enclave");
        break;
      case "NEHRU PLACE":
        setChangedFinalStationFrom("Nehru Place");
        break;
      case "NETAJI SUBHASH PLACE":
        setChangedFinalStationFrom("Netaji Subhash Place");
        break;
      case "NEW ASHOK NAGAR":
        setChangedFinalStationFrom("New Ashok Nagar");
        break;
      case "NEW DELHI (Yellow & Airport Line)":
        setChangedFinalStationFrom("New Delhi");
        break;
      case "NIRMAN VIHAR":
        setChangedFinalStationFrom("Nirman Vihar");
        break;
      case "NOIDA CITY CENTRE":
        setChangedFinalStationFrom("Noida City Centre");
        break;
      case "NOIDA ELECTRONIC CITY":
        setChangedFinalStationFrom("Noida Electronic City");
        break;
      case "NOIDA SECTOR-15":
        setChangedFinalStationFrom("Noida Sector 15");
        break;
      case "NOIDA SECTOR-16":
        setChangedFinalStationFrom("Noida Sector 16");
        break;
      case "SECTOR - 52 NOIDA":
        setChangedFinalStationFrom("Noida Sector 52");
        break;
      case "NOIDA SECTOR-18":
        setChangedFinalStationFrom("Noida Sector 18");
        break;
      case "SECTOR - 34 NOIDA":
        setChangedFinalStationFrom("Noida Sector 34");
        break;
      case "SECTOR - 61 NOIDA":
        setChangedFinalStationFrom("Noida Sector 61");
        break;
      case "SECTOR - 62 NOIDA":
        setChangedFinalStationFrom("Noida Sector 62");
        break;
      case "OKHLA BIRD SANCTUARY":
        setChangedFinalStationFrom("Okhla Bird Sanctuary");
        break;
      case "OKHLA NSIC":
        setChangedFinalStationFrom("Okhla NSIC");
        break;
      case "OKHLA VIHAR":
        setChangedFinalStationFrom("Okhla Vihar");
        break;
      case "PALAM":
        setChangedFinalStationFrom("Palam");
        break;
      case "PANCHSHEEL PARK":
        setChangedFinalStationFrom("Panchsheel Park");
        break;
      case "PANDIT SHREE RAM SHARMA":
        setChangedFinalStationFrom("Pandit Shree Ram Sharma");
        break;
      case "PASCHIM VIHAR EAST":
        setChangedFinalStationFrom("Paschim Vihar East");
        break;
      case "PASCHIM VIHAR WEST":
        setChangedFinalStationFrom("Paschim Vihar West");
        break;
      case "PATEL CHOWK":
        setChangedFinalStationFrom("Patel Chowk");
        break;
      case "PATEL NAGAR":
        setChangedFinalStationFrom("Patel Nagar");
        break;
      case "PEERAGARHI":
        setChangedFinalStationFrom("Peera Garhi");
        break;
      case "PHASE-1":
        setChangedFinalStationFrom("Phase 1");
        break;
      case "PHASE-2":
        setChangedFinalStationFrom("Phase 2");
        break;
      case "PHASE-3":
        setChangedFinalStationFrom("Phase 3");
        break;
      case "PITAMPURA":
        setChangedFinalStationFrom("Pitam Pura");
        break;
      case "PREET VIHAR":
        setChangedFinalStationFrom("Preet Vihar");
        break;
      case "PUNJABI BAGH":
        setChangedFinalStationFrom("Punjabi Bagh");
        break;
      case "PUNJABI BAGH WEST":
        setChangedFinalStationFrom("Punjabi Bagh West");
        break;
      case "QUTAB MINAR":
        setChangedFinalStationFrom("Qutub Minar");
        break;
      case "R.K.PURAM":
        setChangedFinalStationFrom("R.K.Puram");
        break;
      case "RAJ BAGH":
        setChangedFinalStationFrom("Raj Bagh");
        break;
      case "RAJA NAHAR SINGH (BALLABHGARH)":
        setChangedFinalStationFrom("Raja Nahar Singh");
        break;
      case "RAJDHANI PARK":
        setChangedFinalStationFrom("Rajdhani Park");
        break;
      case "RAJENDRA PLACE":
        setChangedFinalStationFrom("Rajendra Place");
        break;
      case "RAJIV CHOWK":
        setChangedFinalStationFrom("Rajiv Chowk");
        break;
      case "RAJOURI GARDEN":
        setChangedFinalStationFrom("Rajouri Garden");
        break;
      case "RAMAKRISHNA ASHRAM MARG":
        setChangedFinalStationFrom("Ramakrishna Ashram Marg");
        break;
      case "RAMESH NAGAR":
        setChangedFinalStationFrom("Ramesh Nagar");
        break;
      case "RITHALA":
        setChangedFinalStationFrom("Rithala");
        break;
      case "ROHINI EAST":
        setChangedFinalStationFrom("Rohini East");
        break;
      case "ROHINI SECTOR - 18, 19":
        setChangedFinalStationFrom("Rohini Sector 18");
        break;
      case "SADAR BAZAR CANTONMENT":
        setChangedFinalStationFrom("Sadar Bazaar Cantonment");
        break;
      case "SAKET":
        setChangedFinalStationFrom("Saket");
        break;
      case "SAMAYPUR BADLI":
        setChangedFinalStationFrom("Samaypur Badli");
        break;
      case "SANT SURDAS (SIHI)":
        setChangedFinalStationFrom("Sant Surdas");
        break;
      case "SARAI":
        setChangedFinalStationFrom("Sarai");
        break;
      case "SARITA VIHAR":
        setChangedFinalStationFrom("Sarita Vihar");
        break;
      case "SAROJINI NAGAR":
        setChangedFinalStationFrom("Sarojini Nagar");
        break;
      case "SATGURU RAM SINGH MARG":
        setChangedFinalStationFrom("Satguru Ram Singh Marg");
        break;
      case "SECTOR-28":
        setChangedFinalStationFrom("Sector 28");
        break;
      case "SECTOR-42-43":
        setChangedFinalStationFrom("Sector 42-43");
        break;
      case "SECTOR-53-54":
        setChangedFinalStationFrom("Sector 53-54");
        break;
      case "SECTOR-54 CHOWK":
        setChangedFinalStationFrom("Sector 54 Chowk");
        break;
      case "SECTOR 55-56":
        setChangedFinalStationFrom("Sector 55–56");
        break;
      case "SEELAMPUR":
        setChangedFinalStationFrom("Seelampur");
        break;
      case "SHADIPUR":
        setChangedFinalStationFrom("Shadipur");
        break;
      case "SHAHDARA":
        setChangedFinalStationFrom("Shahdara");
        break;
      case "SHAHEED NAGAR":
        setChangedFinalStationFrom("Shaheed Nagar");
        break;
      case "SHAHEED STHAL ( NEW BUS ADDA)":
        setChangedFinalStationFrom("Shaheed Sthal");
        break;
      case "SHAKURPUR":
        setChangedFinalStationFrom("Shakurpur");
        break;
      case "SHALIMAR BAGH":
        setChangedFinalStationFrom("Shalimar Bagh");
        break;
      case "SHANKAR VIHAR":
        setChangedFinalStationFrom("Shankar Vihar");
        break;
      case "SHASTRI NAGAR":
        setChangedFinalStationFrom("Shastri Nagar");
        break;
      case "SHASTRI PARK":
        setChangedFinalStationFrom("Shastri Park");
        break;
      case "SHIV VIHAR":
        setChangedFinalStationFrom("Shiv Vihar");
        break;
      case "SHIVAJI PARK":
        setChangedFinalStationFrom("Shivaji Park");
        break;
      case "SHIVAJI STADIUM":
        setChangedFinalStationFrom("Shivaji Stadium");
        break;
      case "SHYAM PARK":
        setChangedFinalStationFrom("Shyam park");
        break;
      case "SIKANDERPUR":
        setChangedFinalStationFrom("Sikandarpur");
        break;
      case "SIR M. VISHWESHWARAIAH MOTI BAGH":
        setChangedFinalStationFrom("Sir Vishweshwaraiah Moti Bagh");
        break;
      case "SOUTH EXTENSION":
        setChangedFinalStationFrom("South Extension");
        break;
      case "SUBHASH NAGAR":
        setChangedFinalStationFrom("Subhash Nagar");
        break;
      case "SUKHDEV VIHAR":
        setChangedFinalStationFrom("Sukhdev Vihar");
        break;
      case "SULTANPUR":
        setChangedFinalStationFrom("Sultanpur");
        break;
      case "MAHARAJA SURAJMAL STADIUM":
        setChangedFinalStationFrom("Surajmal Stadium");
        break;
      case "TAGORE GARDEN":
        setChangedFinalStationFrom("Tagore Garden");
        break;
      case "TERMINAL 1-IGI AIRPORT":
        setChangedFinalStationFrom("Terminal 1-IGI Airport");
        break;
      case "TIKRI BORDER":
        setChangedFinalStationFrom("Tikri Border");
        break;
      case "TIKRI KALAN":
        setChangedFinalStationFrom("Tikri Kalan");
        break;
      case "TILAK NAGAR":
        setChangedFinalStationFrom("Tilak Nagar");
        break;
      case "TRILOKPURI-SANJAY LAKE":
        setChangedFinalStationFrom("Trilokpuri Sanjay Lake");
        break;
      case "TUGHLAKABAD STATION":
        setChangedFinalStationFrom("Tughlakabad");
        break;
      case "UDYOG BHAWAN":
        setChangedFinalStationFrom("Udyog Bhawan");
        break;
      case "UDYOG NAGAR":
        setChangedFinalStationFrom("Udyog Nagar");
        break;
      case "UTTAM NAGAR EAST":
        setChangedFinalStationFrom("Uttam Nagar East");
        break;
      case "UTTAM NAGAR WEST":
        setChangedFinalStationFrom("Uttam Nagar West");
        break;
      case "VAISHALI":
        setChangedFinalStationFrom("Vaishali");
        break;
      case "VIDHAN SABHA":
        setChangedFinalStationFrom("Vidhan Sabha");
        break;
      case "VINOBAPURI":
        setChangedFinalStationFrom("Vinobapuri");
        break;
      case "VISWAVIDYALAYA":
        setChangedFinalStationFrom("Vishwa Vidyalaya");
        break;
      case "BELVEDERE TOWERS":
        setChangedFinalStationFrom("Vodafone Belvedere Towers");
        break;
      case "WELCOME":
        setChangedFinalStationFrom("Welcome");
        break;
      case "YAMUNA BANK":
        setChangedFinalStationFrom("Yamuna Bank");
        break;

      default:
        setChangedFinalStationFrom("");
        break;
    }
  };

  const changeAccordinglyTo = (str2) => {
    switch (str2) {
      case "AIIMS":
        setChangedFinalStationTo("AIIMS");
        break;
      case "ADARSH NAGAR":
        setChangedFinalStationTo("Adarsh Nagar");
        break;
      case "AIRPORT (T-3)":
        setChangedFinalStationTo("Airport");
        break;
      case "AKSHARDHAM":
        setChangedFinalStationTo("Akshardham");
        break;
      case "ANAND VIHAR ISBT":
        setChangedFinalStationTo("Anand Vihar");
        break;
      case "ARJAN GARH":
        setChangedFinalStationTo("Arjan Garh");
        break;
      case "ARTHALA":
        setChangedFinalStationTo("Arthala");
        break;
      case "ASHOK PARK MAIN":
        setChangedFinalStationTo("Ashok Park Main");
        break;
      case "ASHRAM":
        setChangedFinalStationTo("Ashram");
        break;
      case "AZADPUR":
        setChangedFinalStationTo("Azadpur");
        break;
      case "BADARPUR BORDER":
        setChangedFinalStationTo("Badarpur");
        break;
      case "BADKAL MOR":
        setChangedFinalStationTo("Badkhal Mor");
        break;
      case "BAHADURGARH CITY":
        setChangedFinalStationTo("Bahadurgarh City");
        break;
      case "BARAKHAMBA ROAD":
        setChangedFinalStationTo("Barakhambha Road");
        break;
      case "BATA CHOWK":
        setChangedFinalStationTo("Bata Chowk");
        break;
      case "BHIKAJI CAMA PLACE":
        setChangedFinalStationTo("Bhikaji Cama Place");
        break;
      case "BOTANICAL GARDEN":
        setChangedFinalStationTo("Botanical Garden");
        break;
      case "BRIG. HOSHIAR SINGH":
        setChangedFinalStationTo("Brigadier Hoshiyar Singh");
        break;
      case "CENTRAL SECRETARIAT":
        setChangedFinalStationTo("Central Secretariat");
        break;
      case "CHANDNI CHOWK":
        setChangedFinalStationTo("Chandni Chowk");
        break;
      case "CHAWRI BAZAR":
        setChangedFinalStationTo("Chawri Bazar");
        break;
      case "CHHATARPUR":
        setChangedFinalStationTo("Chhatarpur");
        break;
      case "CHIRAG DELHI":
        setChangedFinalStationTo("Chirag Delhi");
        break;
      case "CIVIL LINES":
        setChangedFinalStationTo("Civil Lines");
        break;
      case "DABRI MOR - JANAKPURI SOUTH":
        setChangedFinalStationTo("Dabri Mor-Janakpuri South");
        break;
      case "DASHRATHPURI":
        setChangedFinalStationTo("Dashrath Puri");
        break;
      case "DELHI AEROCITY":
        setChangedFinalStationTo("Delhi Aerocity");
        break;
      case "DELHI CANTT.":
        setChangedFinalStationTo("Delhi Cantonment");
        break;
      case "DELHI GATE":
        setChangedFinalStationTo("Delhi Gate");
        break;
      case "DHAULA KUAN":
        setChangedFinalStationTo("Dhaula Kuan");
        break;
      case "DILSHAD GARDEN":
        setChangedFinalStationTo("Dilshad Garden");
        break;
      case "DURGABAI DESHMUKH SOUTH CAMPUS":
        setChangedFinalStationTo("Durgabai Deshmukh South Campus");
        break;
      case "DWARKA":
        setChangedFinalStationTo("Dwarka");
        break;
      case "DWARKA MOR":
        setChangedFinalStationTo("Dwarka Mor");
        break;
      case "DWARKA SECTOR - 10":
        setChangedFinalStationTo("Dwarka Sector 10");
        break;
      case "DWARKA SECTOR - 11":
        setChangedFinalStationTo("Dwarka Sector 11");
        break;
      case "DWARKA SECTOR - 12":
        setChangedFinalStationTo("Dwarka Sector 12");
        break;
      case "DWARKA SECTOR - 13":
        setChangedFinalStationTo("Dwarka Sector 13");
        break;
      case "DWARKA SECTOR - 14":
        setChangedFinalStationTo("Dwarka Sector 14");
        break;
      case "DWARKA SECTOR - 21":
        setChangedFinalStationTo("Dwarka Sector 21");
        break;
      case "DWARKA SECTOR - 8":
        setChangedFinalStationTo("Dwarka Sector 8");
        break;
      case "DWARKA SECTOR - 9":
        setChangedFinalStationTo("Dwarka Sector 9");
        break;
      case "ESI HOSPITAL":
        setChangedFinalStationTo("ESI Hospital");
        break;
      case "EAST AZAD NAGAR":
        setChangedFinalStationTo("East Azad Nagar");
        break;
      case "EAST VINOD NAGAR-MAYUR VIHAR -II":
        setChangedFinalStationTo("East Vinod Nagar - Mayur Vihar-II");
        break;
      case "ESCORTS MUJESAR":
        setChangedFinalStationTo("Escorts Mujesar");
        break;
      case "OLD FARIDABAD":
        setChangedFinalStationTo("Faridabad Old");
        break;
      case "GHEVRA METRO STATION":
        setChangedFinalStationTo("Ghevra Metro station");
        break;
      case "GHITORNI":
        setChangedFinalStationTo("Ghitorni");
        break;
      case "GOKULPURI":
        setChangedFinalStationTo("Gokulpuri");
        break;
      case "GOLF COURSE":
        setChangedFinalStationTo("Golf Course");
        break;
      case "GOVINDPURI":
        setChangedFinalStationTo("Govind Puri");
        break;
      case "GREATER KAILASH":
        setChangedFinalStationTo("Greater Kailash");
        break;
      case "GREEN PARK":
        setChangedFinalStationTo("Green Park");
        break;
      case "GURU DRONACHARYA":
        setChangedFinalStationTo("Guru Dronacharya");
        break;
      case "HUDA CITY CENTRE":
        setChangedFinalStationTo("HUDA City Centre");
        break;
      case "HAIDERPUR BADLI MOR":
        setChangedFinalStationTo("Haiderpur");
        break;
      case "HARKESH NAGAR OKHLA":
        setChangedFinalStationTo("Harkesh Nagar");
        break;
      case "HAUZ KHAS":
        setChangedFinalStationTo("Hauz Khas");
        break;
      case "SARAI KALE KHAN - NIZAMUDDIN":
        setChangedFinalStationTo("Hazrat Nizamuddin");
        break;
      case "HINDON RIVER":
        setChangedFinalStationTo("Hindon");
        break;
      case "IFFCO CHOWK":
        setChangedFinalStationTo("IFFCO Chowk");
        break;
      case "IIT":
        setChangedFinalStationTo("IIT Delhi");
        break;
      case "DILLI HAAT - INA":
        setChangedFinalStationTo("INA");
        break;
      case "I.P. EXTENSION":
        setChangedFinalStationTo("IP Extension");
        break;
      case "ITO":
        setChangedFinalStationTo("ITO");
        break;
      case "INDERLOK":
        setChangedFinalStationTo("Inderlok");
        break;
      case "INDRAPRASTHA":
        setChangedFinalStationTo("Indraprastha");
        break;
      case "CYBER CITY":
        setChangedFinalStationTo("IndusInd Bank Cyber City");
        break;
      case "JAFRABAD":
        setChangedFinalStationTo("Jaffrabad");
        break;
      case "JAHANGIRPURI":
        setChangedFinalStationTo("Jahangirpuri");
        break;
      case "JAMA MASJID":
        setChangedFinalStationTo("Jama Masjid");
        break;
      case "JAMIA MILIA ISLAMIYA":
        setChangedFinalStationTo("Jamia Millia Islamia");
        break;
      case "JANAK PURI EAST":
        setChangedFinalStationTo("Janakpuri East");
        break;
      case "JANAK PURI WEST":
        setChangedFinalStationTo("Janakpuri West");
        break;
      case "JANGPURA":
        setChangedFinalStationTo("Jangpura");
        break;
      case "JANPATH":
        setChangedFinalStationTo("Janpath");
        break;
      case "JASOLA-APOLLO":
        setChangedFinalStationTo("Jasola Apollo");
        break;
      case "JASOLA VIHAR SHAHEEN BAGH":
        setChangedFinalStationTo("Jasola Vihar Shaheen Bagh");
        break;
      case "JLN STADIUM":
        setChangedFinalStationTo("Jawaharlal Nehru Stadium");
        break;
      case "JHANDEWALAN":
        setChangedFinalStationTo("Jhandewalan");
        break;
      case "JHILMIL":
        setChangedFinalStationTo("Jhilmil");
        break;
      case "JOHRI ENCLAVE":
        setChangedFinalStationTo("Johri Enclave");
        break;
      case "JOR BAGH":
        setChangedFinalStationTo("Jor Bagh");
        break;
      case "KAILASH COLONY":
        setChangedFinalStationTo("Kailash Colony");
        break;
      case "KALINDI KUNJ":
        setChangedFinalStationTo("Kalindi Kunj");
        break;
      case "KALKAJI MANDIR":
        setChangedFinalStationTo("Kalkaji Mandir");
        break;
      case "KANHAIYA NAGAR":
        setChangedFinalStationTo("Kanhiya Nagar");
        break;
      case "KARKARDUMA":
        setChangedFinalStationTo("Karkarduma");
        break;
      case "KARKARDUMA COURT":
        setChangedFinalStationTo("Karkarduma Court");
        break;
      case "KAROL BAGH":
        setChangedFinalStationTo("Karol Bagh");
        break;
      case "KASHMERE GATE":
        setChangedFinalStationTo("Kashmere Gate");
        break;
      case "KAUSHAMBI":
        setChangedFinalStationTo("Kaushambi");
        break;
      case "KESHAV PURAM":
        setChangedFinalStationTo("Keshav Puram");
        break;
      case "KHAN MARKET":
        setChangedFinalStationTo("Khan Market");
        break;
      case "KIRTI NAGAR":
        setChangedFinalStationTo("Kirti Nagar");
        break;
      case "KOHAT ENCLAVE":
        setChangedFinalStationTo("Kohat Enclave");
        break;
      case "KRISHNA NAGAR":
        setChangedFinalStationTo("Krishna Nagar");
        break;
      case "LAJPAT NAGAR":
        setChangedFinalStationTo("Lajpat Nagar");
        break;
      case "LAL QUILA":
        setChangedFinalStationTo("Lal Qila");
        break;
      case "LAXMI NAGAR":
        setChangedFinalStationTo("Laxmi Nagar");
        break;
      case "LOK KALYAN MARG":
        setChangedFinalStationTo("Lok Kalyan Marg");
        break;
      case "M.G. ROAD":
        setChangedFinalStationTo("MG Road");
        break;
      case "MADIPUR":
        setChangedFinalStationTo("Madipur");
        break;
      case "MAJLIS PARK":
        setChangedFinalStationTo("Majlis Park");
        break;
      case "MAJOR MOHIT SHARMA RAJENDRA NAGAR":
        setChangedFinalStationTo("Major Mohit Sharma");
        break;
      case "MALVIYA NAGAR":
        setChangedFinalStationTo("Malviya Nagar");
        break;
      case "MANDAWALI - WEST VINOD NAGAR":
        setChangedFinalStationTo("Mandawali - West Vinod Nagar");
        break;
      case "MANDI HOUSE":
        setChangedFinalStationTo("Mandi House");
        break;
      case "MANSAROVAR PARK":
        setChangedFinalStationTo("Mansarovar Park");
        break;
      case "MAUJPUR-BABARPUR":
        setChangedFinalStationTo("Maujpur-Babarpur");
        break;
      case "MAYAPURI":
        setChangedFinalStationTo("Mayapuri");
        break;
      case "MAYUR VIHAR -I":
        setChangedFinalStationTo("Mayur Vihar - I");
        break;
      case "MAYUR VIHAR EXTENSION":
        setChangedFinalStationTo("Mayur Vihar Extension");
        break;
      case "MAYUR VIHAR POCKET-1":
        setChangedFinalStationTo("Mayur Vihar Pocket I");
        break;
      case "MEWALA MAHARAJPUR":
        setChangedFinalStationTo("Mewala Maharajpur");
        break;
      case "MOULSARI AVENUE":
        setChangedFinalStationTo("Micromax Moulsari Avenue");
        break;
      case "MOHAN ESTATE":
        setChangedFinalStationTo("Mohan Estate");
        break;
      case "MOHAN NAGAR":
        setChangedFinalStationTo("Mohan Nagar");
        break;
      case "MOOLCHAND":
        setChangedFinalStationTo("Moolchand");
        break;
      case "MOTI NAGAR":
        setChangedFinalStationTo("Moti Nagar");
        break;
      case "MUNDKA":
        setChangedFinalStationTo("Mundka");
        break;
      case "MUNDKA INDUSTRIAL AREA (MIA)":
        setChangedFinalStationTo("Mundka Industrial Area");
        break;
      case "MUNIRKA":
        setChangedFinalStationTo("Munirka");
        break;
      case "NHPC CHOWK":
        setChangedFinalStationTo("NHPC Chowk");
        break;
      case "NAJAFGARH":
        setChangedFinalStationTo("Najafgrah");
        break;
      case "NANGLI":
        setChangedFinalStationTo("Nangli");
        break;
      case "NANGLOI":
        setChangedFinalStationTo("Nangloi");
        break;
      case "NANGLOI RAILWAY STATION":
        setChangedFinalStationTo("Nangloi Railway station");
        break;
      case "NARAINA VIHAR":
        setChangedFinalStationTo("Naraina Vihar");
        break;
      case "NAWADA":
        setChangedFinalStationTo("Nawada");
        break;
      case "NEELAM CHOWK AJRONDA":
        setChangedFinalStationTo("Neelam Chowk Ajronda");
        break;
      case "NEHRU ENCLAVE":
        setChangedFinalStationTo("Nehru Enclave");
        break;
      case "NEHRU PLACE":
        setChangedFinalStationTo("Nehru Place");
        break;
      case "NETAJI SUBHASH PLACE":
        setChangedFinalStationTo("Netaji Subhash Place");
        break;
      case "NEW ASHOK NAGAR":
        setChangedFinalStationTo("New Ashok Nagar");
        break;
      case "NEW DELHI (Yellow & Airport Line)":
        setChangedFinalStationTo("New Delhi");
        break;
      case "NIRMAN VIHAR":
        setChangedFinalStationTo("Nirman Vihar");
        break;
      case "NOIDA CITY CENTRE":
        setChangedFinalStationTo("Noida City Centre");
        break;
      case "NOIDA ELECTRONIC CITY":
        setChangedFinalStationTo("Noida Electronic City");
        break;
      case "NOIDA SECTOR-15":
        setChangedFinalStationTo("Noida Sector 15");
        break;
      case "NOIDA SECTOR-16":
        setChangedFinalStationTo("Noida Sector 16");
        break;
      case "SECTOR - 52 NOIDA":
        setChangedFinalStationTo("Noida Sector 52");
        break;
      case "NOIDA SECTOR-18":
        setChangedFinalStationTo("Noida Sector 18");
        break;
      case "SECTOR - 34 NOIDA":
        setChangedFinalStationTo("Noida Sector 34");
        break;
      case "SECTOR - 61 NOIDA":
        setChangedFinalStationTo("Noida Sector 61");
        break;
      case "SECTOR - 62 NOIDA":
        setChangedFinalStationTo("Noida Sector 62");
        break;
      case "OKHLA BIRD SANCTUARY":
        setChangedFinalStationTo("Okhla Bird Sanctuary");
        break;
      case "OKHLA NSIC":
        setChangedFinalStationTo("Okhla NSIC");
        break;
      case "OKHLA VIHAR":
        setChangedFinalStationTo("Okhla Vihar");
        break;
      case "PALAM":
        setChangedFinalStationTo("Palam");
        break;
      case "PANCHSHEEL PARK":
        setChangedFinalStationTo("Panchsheel Park");
        break;
      case "PANDIT SHREE RAM SHARMA":
        setChangedFinalStationTo("Pandit Shree Ram Sharma");
        break;
      case "PASCHIM VIHAR EAST":
        setChangedFinalStationTo("Paschim Vihar East");
        break;
      case "PASCHIM VIHAR WEST":
        setChangedFinalStationTo("Paschim Vihar West");
        break;
      case "PATEL CHOWK":
        setChangedFinalStationTo("Patel Chowk");
        break;
      case "PATEL NAGAR":
        setChangedFinalStationTo("Patel Nagar");
        break;
      case "PEERAGARHI":
        setChangedFinalStationTo("Peera Garhi");
        break;
      case "PHASE-1":
        setChangedFinalStationTo("Phase 1");
        break;
      case "PHASE-2":
        setChangedFinalStationTo("Phase 2");
        break;
      case "PHASE-3":
        setChangedFinalStationTo("Phase 3");
        break;
      case "PITAMPURA":
        setChangedFinalStationTo("Pitam Pura");
        break;
      case "PREET VIHAR":
        setChangedFinalStationTo("Preet Vihar");
        break;
      case "PUNJABI BAGH":
        setChangedFinalStationTo("Punjabi Bagh");
        break;
      case "PUNJABI BAGH WEST":
        setChangedFinalStationTo("Punjabi Bagh West");
        break;
      case "QUTAB MINAR":
        setChangedFinalStationTo("Qutub Minar");
        break;
      case "R.K.PURAM":
        setChangedFinalStationTo("R.K.Puram");
        break;
      case "RAJ BAGH":
        setChangedFinalStationTo("Raj Bagh");
        break;
      case "RAJA NAHAR SINGH (BALLABHGARH)":
        setChangedFinalStationTo("Raja Nahar Singh");
        break;
      case "RAJDHANI PARK":
        setChangedFinalStationTo("Rajdhani Park");
        break;
      case "RAJENDRA PLACE":
        setChangedFinalStationTo("Rajendra Place");
        break;
      case "RAJIV CHOWK":
        setChangedFinalStationTo("Rajiv Chowk");
        break;
      case "RAJOURI GARDEN":
        setChangedFinalStationTo("Rajouri Garden");
        break;
      case "RAMAKRISHNA ASHRAM MARG":
        setChangedFinalStationTo("Ramakrishna Ashram Marg");
        break;
      case "RAMESH NAGAR":
        setChangedFinalStationTo("Ramesh Nagar");
        break;
      case "RITHALA":
        setChangedFinalStationTo("Rithala");
        break;
      case "ROHINI EAST":
        setChangedFinalStationTo("Rohini East");
        break;
      case "ROHINI SECTOR - 18, 19":
        setChangedFinalStationTo("Rohini Sector 18");
        break;
      case "SADAR BAZAR CANTONMENT":
        setChangedFinalStationTo("Sadar Bazaar Cantonment");
        break;
      case "SAKET":
        setChangedFinalStationTo("Saket");
        break;
      case "SAMAYPUR BADLI":
        setChangedFinalStationTo("Samaypur Badli");
        break;
      case "SANT SURDAS (SIHI)":
        setChangedFinalStationTo("Sant Surdas");
        break;
      case "SARAI":
        setChangedFinalStationTo("Sarai");
        break;
      case "SARITA VIHAR":
        setChangedFinalStationTo("Sarita Vihar");
        break;
      case "SAROJINI NAGAR":
        setChangedFinalStationTo("Sarojini Nagar");
        break;
      case "SATGURU RAM SINGH MARG":
        setChangedFinalStationTo("Satguru Ram Singh Marg");
        break;
      case "SECTOR-28":
        setChangedFinalStationTo("Sector 28");
        break;
      case "SECTOR-42-43":
        setChangedFinalStationTo("Sector 42-43");
        break;
      case "SECTOR-53-54":
        setChangedFinalStationTo("Sector 53-54");
        break;
      case "SECTOR-54 CHOWK":
        setChangedFinalStationTo("Sector 54 Chowk");
        break;
      case "SECTOR 55-56":
        setChangedFinalStationTo("Sector 55-56");
        break;
      case "SEELAMPUR":
        setChangedFinalStationTo("Seelampur");
        break;
      case "SHADIPUR":
        setChangedFinalStationTo("Shadipur");
        break;
      case "SHAHDARA":
        setChangedFinalStationTo("Shahdara");
        break;
      case "SHAHEED NAGAR":
        setChangedFinalStationTo("Shaheed Nagar");
        break;
      case "SHAHEED STHAL ( NEW BUS ADDA)":
        setChangedFinalStationTo("Shaheed Sthal");
        break;
      case "SHAKURPUR":
        setChangedFinalStationTo("Shakurpur");
        break;
      case "SHALIMAR BAGH":
        setChangedFinalStationTo("Shalimar Bagh");
        break;
      case "SHANKAR VIHAR":
        setChangedFinalStationTo("Shankar Vihar");
        break;
      case "SHASTRI NAGAR":
        setChangedFinalStationTo("Shastri Nagar");
        break;
      case "SHASTRI PARK":
        setChangedFinalStationTo("Shastri Park");
        break;
      case "SHIV VIHAR":
        setChangedFinalStationTo("Shiv Vihar");
        break;
      case "SHIVAJI PARK":
        setChangedFinalStationTo("Shivaji Park");
        break;
      case "SHIVAJI STADIUM":
        setChangedFinalStationTo("Shivaji Stadium");
        break;
      case "SHYAM PARK":
        setChangedFinalStationTo("Shyam park");
        break;
      case "SIKANDERPUR":
        setChangedFinalStationTo("Sikandarpur");
        break;
      case "SIR M. VISHWESHWARAIAH MOTI BAGH":
        setChangedFinalStationTo("Sir Vishweshwaraiah Moti Bagh");
        break;
      case "SOUTH EXTENSION":
        setChangedFinalStationTo("South Extension");
        break;
      case "SUBHASH NAGAR":
        setChangedFinalStationTo("Subhash Nagar");
        break;
      case "SUKHDEV VIHAR":
        setChangedFinalStationTo("Sukhdev Vihar");
        break;
      case "SULTANPUR":
        setChangedFinalStationTo("Sultanpur");
        break;
      case "MAHARAJA SURAJMAL STADIUM":
        setChangedFinalStationTo("Surajmal Stadium");
        break;
      case "TAGORE GARDEN":
        setChangedFinalStationTo("Tagore Garden");
        break;
      case "TERMINAL 1-IGI AIRPORT":
        setChangedFinalStationTo("Terminal 1-IGI Airport");
        break;
      case "TIKRI BORDER":
        setChangedFinalStationTo("Tikri Border");
        break;
      case "TIKRI KALAN":
        setChangedFinalStationTo("Tikri Kalan");
        break;
      case "TILAK NAGAR":
        setChangedFinalStationTo("Tilak Nagar");
        break;
      case "TRILOKPURI-SANJAY LAKE":
        setChangedFinalStationTo("Trilokpuri Sanjay Lake");
        break;
      case "TUGHLAKABAD STATION":
        setChangedFinalStationTo("Tughlakabad");
        break;
      case "UDYOG BHAWAN":
        setChangedFinalStationTo("Udyog Bhawan");
        break;
      case "UDYOG NAGAR":
        setChangedFinalStationTo("Udyog Nagar");
        break;
      case "UTTAM NAGAR EAST":
        setChangedFinalStationTo("Uttam Nagar East");
        break;
      case "UTTAM NAGAR WEST":
        setChangedFinalStationTo("Uttam Nagar West");
        break;
      case "VAISHALI":
        setChangedFinalStationTo("Vaishali");
        break;
      case "VIDHAN SABHA":
        setChangedFinalStationTo("Vidhan Sabha");
        break;
      case "VINOBAPURI":
        setChangedFinalStationTo("Vinobapuri");
        break;
      case "VISWAVIDYALAYA":
        setChangedFinalStationTo("Vishwa Vidyalaya");
        break;
      case "BELVEDERE TOWERS":
        setChangedFinalStationTo("Vodafone Belvedere Towers");
        break;
      case "WELCOME":
        setChangedFinalStationTo("Welcome");
        break;
      case "YAMUNA BANK":
        setChangedFinalStationTo("Yamuna Bank");
        break;

      default:
        setChangedFinalStationTo("");
        break;
    }
  };

  const getFinalResults = () => {
    changeAccordinglyFrom(stationData.from);
    changeAccordinglyTo(stationData.to);
    // console.log(changedFinalStationFrom);
    // console.log(changedFinalStationTo);
    if (changeAccordinglyFrom !== "" && changedFinalStationTo !== "") {
      navigate(
        `/resultroute/${changedFinalStationFrom}/to/${changedFinalStationTo}`
      );
    } else {
      alert("Please Click Again The Same Button");
    }
  };

  return (
    <>
      {showSearchList ? (
        <SearchList
          stationData={stationData}
          setShowSearchList={setShowSearchList}
          dataState={dataState}
          setDataState={setDataState}
          setStationData={setStationData}
        />
      ) : (
        <div className="bg-[#fff] text-black shadow-2xl h-max rounded-2xl p-8 mx-4">
          <div className="flex justify-center items-center mb-2">
            <img
              src={MetroLogo}
              alt="dmrc icon"
              className="rounded-full w-10"
              loading="lazy"
            />
            <h1 className="ml-4 sm:text-3xl text-2xl font-bold text-black ">
              Plan Your Journey
            </h1>
          </div>

          <form>
            <div className="mb-3">
              <label
                htmlFor="fromLines"
                className="md:text-xl text-lg block  font-medium text-gray-900 dark:text-black"
              >
                From:
              </label>
              <input
                type="text"
                id="fromLines "
                name="fromLines"
                className="bg-white border-2 border-[#003087] text-black font-semibold text-sm rounded-lg  block w-full p-2.5"
                placeholder="Choose Line & Station"
                required
                defaultValue={stationData.from}
                onFocus={() => {
                  setShowSearchList((prev) => !prev);
                  setStationData((prev) => {
                    return {
                      ...prev,
                      stationStatus: "fromLines",
                    };
                  });
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="toLines"
                className="md:text-xl text-lg block mb-1 font-medium text-gray-900 dark:text-black"
              >
                To:
              </label>
              <input
                type="text"
                id="toLines "
                name="toLines"
                className="bg-white border-2 border-[#003087] text-black font-semibold text-sm rounded-lg  block w-full p-2.5"
                placeholder="Choose Line & Station"
                required
                defaultValue={stationData.to}
                onFocus={() => {
                  setShowSearchList((prev) => !prev);
                  setStationData((prev) => {
                    return {
                      ...prev,
                      stationStatus: "toLines",
                    };
                  });
                }}
              />
            </div>

            <p className="md:text-xl font-semibold text-lg text-black mb-1  ">
              Advanced Filter:
            </p>

            <div className="flex flex-col justify-between md:flex-row ">
              <button
                className="flex focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-6 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38] my-2
             "
              >
                <img
                  src={RouteIcon}
                  alt="routeicon"
                  width={25}
                  height={25}
                  className="mr-2"
                />
                Shortest Route
              </button>
              <button className="flex focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-6 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 ">
                <img
                  src={ChangeIcon}
                  alt="changeicon"
                  width={22}
                  height={22}
                  className="mr-2 "
                />
                Minimum Interchange
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-col md:flex-row">
            <button
              className=" focus:outline-none cursor-pointer text-white bg-[#03008f]  rounded-md  outline-none   shadow-md dark:shadow-lg border-2 border-[#03008f]  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  mr-2  my-2 w-full md:w-1/2"
              onClick={getFinalResults}
            >
              Show Route &amp; Fare
            </button>
            <button
              type="reset"
              className="focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 w-full md:w-1/2"
              onClick={() => setStationData({ from: null, to: null })}
            >
              Reset
            </button>
          </div>
          {/* </form> */}
        </div>
      )}
    </>
  );
}
