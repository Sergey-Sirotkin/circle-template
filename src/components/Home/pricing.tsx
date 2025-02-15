import React from "react"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const PricingMain = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 h-screen xxs:hidden xs:hidden sm:hidden lg:block">
      <Fade bottom>
        <div
          style={{
            background:
              "linear-gradient(to right, rgb(28, 181, 224), rgb(0, 0, 70)",
          }}
          className="w-full flex items-center justify-center h-screen rounded-xl"
        >
          <div className="flex w-9/12 bg-white h-auto rounded-xl">
            <div className="p-8 w-3/5">
              <h1 className="text-3xl font-bold">
                Unlimited access to all<br></br>products.
              </h1>
              <p className="mt-5 text-sm opacity-50 font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="mt-5">
                <h2 className="font-bold text-xl">What's Included</h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <h3>Feature One</h3>
                  <h3>Feature Two</h3>
                  <h3>Feature Three</h3>
                  <h3>Feature Four</h3>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#1881b3" }}
              className="flex flex-col items-center justify-center w-2/5 p-8 rounded-r-lg"
            >
              <h2 className="text-xl text-white text-bold">
                All updates for one year
              </h2>
              <h1 className="text-7xl text-white font-bold mt-2">$149</h1>
              <div className="mt-5">
                <Button
                  colorClass="bg-white"
                  textColor="text-black"
                  marginClass="m-2"
                  title="Request Access"
                  onClick={() => {}}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default PricingMain
