import React, {useState} from "react";
import "./GoogleLogo.css";
import SourceDropdownMenu from "./SourceDropdownMenu";
import TargetDropdownMenu from "./TargetDropdownMenu";
import axios from "axios";
import Loader from "./Loader";
// import { HiOutlineSwitchHorizontal } from "react-icons/hi";
const Hero = () => {
  const [sourceCode, setSourceCountryCode] = useState(null);
  const [targetCode, setTargetCountryCode] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false); // New state variable for loading

  const encodedParams = new URLSearchParams();
  encodedParams.set("text", textInput);

  function handleSourceCountryCode(SourcecountryCode) {
    setSourceCountryCode(SourcecountryCode);
  }

  function handleTargetCountryCode(targetCountryCode) {
    setTargetCountryCode(targetCountryCode);
  }

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "f7b94b1a54msh3c3038557e37090p1526ecjsna94e501ae6dc",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const handleTranslate = async () => {
    setLoading(true); // Set loading state to true

    encodedParams.set("source_language", sourceCode);
    encodedParams.set("target_language", targetCode);

    try {
      const response = await axios.request(options);
      const respText = response.data.data.translatedText;
      setTranslatedText(respText);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div>
      <div className="flex flex-col ">
        <h1 className="text-6xl g-blue self-center mt-4 ">Translate</h1>
        <p className="self-center my-3 text-[#333333]">
          Choose a language and press translate, we'll do the rest
        </p>
      </div>

      <div>
        <div className="grid  grid-cols-2 w-full bg-gray-50">
          {/* SOURCE LANGUAGE */}
          <div className="w-full border-t h-12 flex items-center">
            <div className="flex-grow"></div>
            <h1 className="text-[#333333] mx-3">From:</h1>
            <div className="relative">
              <SourceDropdownMenu
                onCountryCodeChange={handleSourceCountryCode}
              />
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* SWITCH ICON
          <div className="flex items-center justify-center border-t">
            <HiOutlineSwitchHorizontal className="text-[#333333]" />
          </div> */}

          {/* TARGET LANGUAGE */}
          <div className="w-full z-10 border-t h-12 flex items-center">
            <div className="flex-grow"></div>
            <h1 className="text-[#333333] mx-3">To:</h1>
            <div className="relative">
              <TargetDropdownMenu
                onCountryCodeChange={handleTargetCountryCode}
              />
            </div>
            <div className="flex-grow"></div>
          </div>
        </div>

        {/* TEXTAREA */}
        <div className="grid grid-cols-2 h-60 w-full">
          <div className="border shadow-lg shadow-slate-200 flex ">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full resize-none outline-none ml-4 mt-4"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>
          </div>
          <div className="border-b border-t shadow-lg shadow-slate-200 text-black ">
            <p className="mx-4 mt-4">{translatedText}</p>
          </div>
        </div>
      </div>

      <div className="self-center flex justify-center">
        {loading ? (
          <Loader />
        ) : (
          <button
            className="bg-[#4285F4] text-white rounded-lg w-[6rem] my-10 py-1"
            onClick={handleTranslate}
          >
            Translate
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
