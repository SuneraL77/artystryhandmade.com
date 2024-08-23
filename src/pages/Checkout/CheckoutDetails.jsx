import React, { useEffect, useState } from "react";
import { getUserAdress } from "../../functions/oreder";
import { Country, State } from "country-state-city";
import { Select, Input } from 'antd';
import { useSelector } from "react-redux";
const CheckoutDetails = ({firstName,setFirstName,lastName,setLastName,phoneNumber1,setPhoneNumber1,phoneNumber2,setPhoneNumber2,city,setCity,line1,setLine1,line2,setLine2,cname,setCname,pcode,setPcode,setCountry,country,state, setState}) => {





  return (
    <div>
      <div>
        {/* title */}
        <div>
          <span className="Nu text-[20px] font-[700]">
            Your shipping details
          </span>
        </div>

        {/* input fields */}
        <div className="mt-[30px]">
          <form className="flex flex-col w-full gap-[20px]">
            <div className="w-full">
            {cname ?<Select
  showSearch
  style={{ width: '100%' }}
  placeholder={cname}
  optionFilterProp="children"
  onChange={(value) =>setCountry(value)
  }
  filterOption={(input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
>
  {Country.getAllCountries().map((country) => (
    <Option key={country.isoCode} value={country.code}>
      {country.name}
    </Option>
  ))}
</Select> : <Select
  showSearch
  style={{ width: '100%' }}
  placeholder="Select Country"
  optionFilterProp="children"
  onChange={(value) =>setCountry(value)
  }
  filterOption={(input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
>
  {Country.getAllCountries().map((country) => (
    <Option key={country.isoCode} value={country.code}>
      {country.name}
    </Option>
  ))}
</Select> }  

            </div>
            <div className="flex md:flex-row flex-col w-full gap-[20px]">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  value={line1}
                  onChange={(e) =>setLine1(e.target.value)}
                  className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full">
                <input
                  type="text"
                  value={line2}
                  onChange={(e) =>setLine2(e.target.value)}
                  placeholder="Address Line 2"
                  className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col w-full gap-[20px]">
              <div className="w-full">
              {state ?   <Select
  showSearch
  style={{ width: '100%' }}
  placeholder={state}
  
  optionFilterProp="children"
  onChange={(value) => setState(value)}
  filterOption={(input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
>
  {State.getStatesOfCountry(country).map((state) => (
    <Option key={state.isoCode} value={state.name}>
      {state.name}
    </Option>
  ))}
</Select>
:  <Select
showSearch
style={{ width: '100%' }}
placeholder="Select State"
optionFilterProp="children"
onChange={(value) => setState(value)}
filterOption={(input, option) =>
  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}
>
{State.getStatesOfCountry(country).map((state) => (
  <Option key={state.isoCode} value={state.name}>
    {state.name}
  </Option>
))}
</Select>
}
              </div>
          
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Postcode"
                  value={pcode}
                  onChange={(e) =>setPcode(e.target.value)}  
                  className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber1}
                onChange={(e) => setPhoneNumber1(e.target.value)}
                className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="flex w-full">
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber2}
                onChange={(e) => setPhoneNumber2(e.target.value)}
                className="px-[10px] py-[10px] bg-transparent outline-none border-solid border-[1px] border-gray-300 rounded-lg w-full"
              />
            </div>
          </form>
        </div>
      </div>

      {/* card details */}
      <div className="mt-[50px]">
        {/* title */}
        <div>
          <span className="Nu text-[20px] font-[700]">Your card details</span>
        </div>

        {/* inputs */}

      </div>
    </div>
  );
};

export default CheckoutDetails;
