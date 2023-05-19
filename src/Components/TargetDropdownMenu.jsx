import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TargetDropdownMenu(props) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  let [countryCode, setCountryCode] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    switch (language) {
      case "Mandarin Chinese":
        countryCode = "zh";
        break;
      case "Spanish":
        countryCode = "es";
        break;
      case "English":
        countryCode = "en";
        break;
      case "Hindi":
        countryCode = "hi";
        break;
      case "Bengali":
        countryCode = "bn";
        break;
      case "Portuguese":
        countryCode = "pt";
        break;
      case "Russian":
        countryCode = "ru";
        break;
      case "Japanese":
        countryCode = "ja";
        break;
      case "Punjabi":
        countryCode = "pa";
        break;
      case "German":
        countryCode = "de";
        break;
      case "Javanese":
        countryCode = "jv";
        break;
      case "Wu Chinese":
        countryCode = "wuu";
        break;
      case "Korean":
        countryCode = "ko";
        break;
      case "French":
        countryCode = "fr";
        break;
      case "Telugu":
        countryCode = "te";
        break;
      case "Marathi":
        countryCode = "mr";
        break;
      case "Tamil":
        countryCode = "ta";
        break;
      case "Urdu":
        countryCode = "ur";
        break;
      case "Turkish":
        countryCode = "tr";
        break;
      case "Italian":
        countryCode = "it";
        break;
      default:
        countryCode = null;
        break;
    }
    setCountryCode(countryCode);
    props.onCountryCodeChange(countryCode);

  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedLanguage || "Choose"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="absolute origin-top left-1/2 transform -translate-x-1/2 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Mandarin Chinese")}
          >
            Mandarin Chinese
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Spanish")}
          >
            Spanish
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("English")}
          >
            English
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Hindi")}
          >
            Hindi
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Bengali")}
          >
            Bengali
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Portuguese")}
          >
            Portuguese
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Russian")}
          >
            Russian
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Japanese")}
          >
            Japanese
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Punjabi")}
          >
            Punjabi
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("German")}
          >
            German
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Javanese")}
          >
            Javanese
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Wu Chinese")}
          >
            Wu Chinese
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Korean")}
          >
            Korean
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("French")}
          >
            French
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Telugu")}
          >
            Telugu
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Marathi")}
          >
            Marathi
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Tamil")}
          >
            Tamil
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Urdu")}
          >
            Urdu
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Turkish")}
          >
            Turkish
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
            onClick={() => handleLanguageSelect("Italian")}
          >
            Italian
          </a>
        )}
      </Menu.Item>
    </div>
  </Menu.Items>
</Transition>

    </Menu>
  );
}

export default TargetDropdownMenu