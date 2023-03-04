import React from "react";
import LeetcodeImg from "../../../Assets/images/Leetcode.png";
import GithubImg from "../../../Assets/images/Github.png";
import CodingNinjasImg from "../../../Assets/images/CNLOGO.svg";
import CodechefImg from "../../../Assets/images/codechef.jpg";
import GfgImg from "../../../Assets/images/gfgicon.png";
import HackkerrankImg from "../../../Assets/images/hackerrank.svg";
import CodestudioImg from "../../../Assets/images/codestudio.png";
import NinjaImg from "../../../Assets/images/ninja.svg";
import LinkedinImg from "../../../Assets/images/linkedin.png";
import Star from "../../../Assets/images/star.png";
export default function Contact() {
  return (
    <>
      <div className="flex flex-col rounded-3xl    w-fit shadow-2xl mx-4 md:mx-auto my-12 shadow-[#002f876a] ">
        <div className="p-2 rounded-3xl">
          <img src={LeetcodeImg} className=" w-full" alt="bgimg" />
          <img src={LeetcodeImg} className=" w-full  " alt="bgimg" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-16  ">
          <img
            src={NinjaImg}
            alt="profilepic"
            className="bg-white object-cover relative rounded-full border-solid border-slate-200 h-28 w-28 md:h-32 md:w-32 border-4 -top-20 -left-24 sm:-left-52  md:-top-24 md:left-8"
          />
          <div className="flex flex-col mx-auto ">
            <div className=" font-extrabold text-2xl font-sans">
              Kunal Kukreja
            </div>
            <p className="py-2 text-lg font-semibold flex  ">
              3&nbsp;
              <img src={Star} alt="star" className="h-5 w-5 mt-0.5" />
              &nbsp;Codechef &nbsp;
              <i className=" font-bold">||</i>
              &nbsp; Intern @
              <img src={CodingNinjasImg} alt="cn" className="w-16 ml-1" />
            </p>
          </div>
          <div className="flex flex-row md:flex-col mr-5 my-4 items-center gap-x-8">
            <div className="flex">
              <a href="https://www.linkedin.com/in/kunal-kukreja-9a16891b6/">
                <img
                  src={LinkedinImg}
                  className="h-10 w-10"
                  alt="linkedinimg"
                />
              </a>
              <a href="https://github.com/kunal091001">
                <img src={GithubImg} className="h-10 w-10 " alt="githubimg" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col  late-50 rounded-b-3xl shadow-inner shadow-slate-200 ">
          <p className="text-center text-xl font-bold my-4   ">
            CODING PROFILES
          </p>
          <div className="flex justify-around items-center p-2 ">
            <a href="https://www.hackerrank.com/kunal9313882818">
              <img
                src={HackkerrankImg}
                alt="hackerrank"
                className="h-10 w-10"
              />
            </a>
            <a href="https://www.codingninjas.com/codestudio/profile/Kunnaall">
              <img src={CodestudioImg} alt="codestudio" className="h-10 w-10" />
            </a>
            <a href="https://www.codechef.com/users/kunal931388281">
              <img src={CodechefImg} alt="codechef" className="h-10 w-10" />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/kunnaall/practice">
              {" "}
              <img src={GfgImg} alt="gfg" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
