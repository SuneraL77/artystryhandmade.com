import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import noProfile from "../../../assets/noProfile.png";
import { useSelector } from "react-redux";
import { currentUser } from "../../../functions/auth";
import { getUserAdress, updateUseraddress } from "../../../functions/oreder";
import { Country, State } from "country-state-city";
import { Select, Input } from "antd";
import toast from "react-hot-toast";
const { Option } = Select;

const AccountDetails = () => {
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser();
    getOldAddress();
  }, []);

  const getCurrentUser = async () => {
    setLoading(true);
    const response = await currentUser(user.token);
    setFirstName(response.data.fname);
    setLastName(response.data.lname);
    setEmail(response.data.email);
    setLoading(false);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cname, setCname] = useState("");
  const [stanme, setSname] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [state, setState] = useState("");
  const phoneNumber1Handler = (e) => {
    setPhoneNumber1(e);
    setUpdateTrigger(true);
  };

  const phoneNumber2Handler = (e) => {
    setPhoneNumber2(e);
    setUpdateTrigger(true);
  };
  const getOldAddress = async () => {
    setLoading(true);
    const response = await getUserAdress(user.token);
    console.log("address =>", response);
    setCity(response.city);
    setLine1(response.line1);
    setLine2(response.line2);
    setPhoneNumber1(response.mobile);
    setPhoneNumber2(response.mobile1);
    getContry(response.country);
    getState(response.state, response.country);
  };

  console.log(line1);
  const submitHnadler = async () => {
    const address = {
      firstname: user.fname,
      lastname: user.lname,
      mobile: phoneNumber1,
      mobile1: phoneNumber2,
      country: country,
      state: state,
      line1: line1,
      line2: line2,
    };
    console.log(address);

    setLoading(true);
    const response = await updateUseraddress(user.token, address);
    setLoading(false);
    window.location.reload();
    setUpdateTrigger(false);

    getOldAddress();
    toast.success(response.message);
  };
  const getContry = (countryCode) => {
    const selectedCountry = Country.getCountryByCode(countryCode);
    setCname(selectedCountry.name);
  };

  const getState = (stateCode, countryCode) => {
    const state = State.getStateByCodeAndCountry(stateCode, countryCode);
    setSname(state.name);
  };

  return (
    <div className="">
      {/* header */}

      <div className="sticky top-0 w-full z-[100000]">
        <div className=" w-full">
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="mt-[50px] md:px-[150px] px-[20px] mb-[100px]">
        <div className="flex md:flex-row flex-col w-full md:h-[80vh] ">
          {/* side bar */}
          <div className="flex-[1] w-full h-full bg-black p-[25px] text-white">
            <Sidebar />
          </div>

          {/* user details */}
          <div className="flex-[3] bg-gray-100 p-[25px] pt-[50px] Nu flex flex-col gap-[25px] overflow-y-scroll myAc">
            {/* profile image change */}

            <div>
              {/* title */}
              <div className=" mb-[30px] flex items-center gap-[10px]">
                <div className="w-[6px] h-[25px] bg-black"></div>
                <h1 className="md:text-[20px] text-[15px]  font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[2px]">
                  Personal Informations
                </h1>
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-[30px]">
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">First Name</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Last Name</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-[30px]">
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Email Address</span>
                <input
                  type="email"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className=" flex  items-center gap-[10px] mt-[20px]">
              <div className="w-[6px] h-[25px] bg-black"></div>
              <h1 className="md:text-[20px] text-[15px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[2px]">
                Address
              </h1>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-[30px]">
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                {/* Country Select */}
                {cname ? (
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder={cname}
                    optionFilterProp="children"
                    onChange={(value) => setCountry(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Country.getAllCountries().map((country) => (
                      <Option key={country.isoCode} value={country.code}>
                        {country.name}
                      </Option>
                    ))}
                  </Select>
                ) : (
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select Country"
                    optionFilterProp="children"
                    onChange={(value) => setCountry(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {Country.getAllCountries().map((country) => (
                      <Option key={country.isoCode} value={country.code}>
                        {country.name}
                      </Option>
                    ))}
                  </Select>
                )}
              </div>
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                {stanme ? (
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder={stanme}
                    optionFilterProp="children"
                    onChange={(value) => setState(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {State.getStatesOfCountry(country).map((state) => (
                      <Option key={state.isoCode} value={state.name}>
                        {state.name}
                      </Option>
                    ))}
                  </Select>
                ) : (
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select State"
                    optionFilterProp="children"
                    onChange={(value) => setState(value)}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {State.getStatesOfCountry(country).map((state) => (
                      <Option key={state.isoCode} value={state.name}>
                        {state.name}
                      </Option>
                    ))}
                  </Select>
                )}
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-[30px]">
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Address Line 1</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                />
              </div>
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Address Line 2</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col items-center gap-[30px]">
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Phone Number 1</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={phoneNumber1}
                  onChange={(e) => phoneNumber1Handler(e.target.value)}
                />
              </div>
              <div className="flex flex-col font-[600] w-full gap-[5px]">
                <span className="text-[18px]">Phone Number 2</span>
                <input
                  type="text"
                  className="outline-none border-none bg-gray-200 py-[10px] px-[10px]"
                  value={phoneNumber2}
                  onChange={(e) => phoneNumber2Handler(e.target.value)}
                />
              </div>
            </div>

            {/* update button */}
            {updateTrigger === true && (
              <div className="flex md:flex-row flex-col items-center md:gap-[25px] gap-[20px] mt-[25px] md:justify-end justify-center">
                <button
                  className="button Nu"
                  onClick={() => setUpdateTrigger(false)}
                >
                  Cancel
                </button>
                <button className="button Nu" onClick={() => submitHnadler()}>
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AccountDetails;
