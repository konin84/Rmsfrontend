import React from "react";



export default function RealtorSignUp() {

  return (
    <div className=" min-h-screen bg-gradient-to-r from-sky-200 hover:bg-gray-400 py-40 " >

      <div className="container mx-auto">
      <div className="w-12/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden  flex flex-col lg:flex-row 12/12">
        <div className="w-full lg:w-1/2 items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url(../images/househ.jpg)'}}>
        
         <div className="pt-0">
         <h1 className="text-4xl text-red-600 text-center pt-10 font-bold">Welcome to the Realtor's partner</h1>
          
          <div className="pt-10">
            <p className="text-3xl text-green-400 text-center pt-5 font-bold">This is the best App to manage your houses, landlords and tenants</p>
          </div>
         </div>
        </div>
        <div className="w-1/2 py-10 px-12 container mx-auto">
          <h1 className="text-3xl mb-4 text-center uppercase font-Montserrat"> Register</h1>
          <p className="mb-4 text-2xl text-center w-full font-Montserrat italic"> Create your account and enjoy our amazing services.</p>
        </div>
      </div>
      </div>


  
              

                
                
              {/* <form className="p-6 flex flex-col justify-center"
                  onSubmit={handleSubmit}   >
                                <div className="grid md:grid-cols-2 md:gap-6">
                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      required
                                      autoComplete="false"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label
                                      htmlFor="email"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Enter your Email
                                    </label>
                                  </div>

                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="text"
                                      name="phone_number"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      onChange={(e) =>
                                        setPhone_number(e.target.value)
                                      }
                                      required
                                    />
                                    <label
                                      htmlFor="phone"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Phone Number
                                    </label>
                                  </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="text"
                                      name="first_name"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      onChange={(e) => setFirst_name(e.target.value)}
                                      required
                                    />
                                    <label
                                      htmlFor="first_name"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      First Name
                                    </label>
                                  </div>

                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="text"
                                      name="last_name"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      onChange={(e) => setLast_name(e.target.value)}
                                      required
                                    />
                                    <label
                                      htmlFor="address"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Last Name{" "}
                                    </label>
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="password"
                                      name="password"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      onChange={(e) => setPassword(e.target.value)}
                                      required
                                    />
                                    <label
                                      htmlFor="password"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Password{" "}
                                    </label>
                                  </div>

                                  <div className="relative z-0 w-full mb-6 group">
                                    <input
                                      type="password"
                                      name="password2"
                                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" "
                                    />
                                    <label
                                      htmlFor="password2"
                                      className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Confirm Password
                                    </label>
                                  </div>
                                </div>

                                <button
                                  onSubmit={handleSubmit}
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear rounded-md transition-all duration-150 md:block"
                                  type="submit"
                                >
                                  Sign up
                                </button>
                </form> */}
                                
         


          
     
    </div>
  );
}
