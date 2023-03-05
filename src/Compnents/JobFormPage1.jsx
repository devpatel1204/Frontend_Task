import { useState } from "react";


const JobFormPage1 = ({ formData, setFormData }) => {
  const [isTitleFilled,setIsTitleFilled]= useState(false)
  const [isCompanyNameFilled,setIsCompanyNAmeFilled]= useState(false)
  const [isIndustryFilled,setIsIndustryFilled]= useState(false)
  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if(formData.jobTitle!==""){
      setIsTitleFilled(false)
    }
    if(formData.companyName!==""){
      setIsCompanyNAmeFilled(false)
    }
    if(formData.industry!==""){
      setIsIndustryFilled(false)
    }
  };
  const nextPage = (event) => {

    if (formData.jobTitle != "" && formData.industry != "" && formData.companyName != "") {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: 2 });
    }
    if(formData.jobTitle===""){
      setIsTitleFilled(true)
    }
    if(formData.companyName===""){
      setIsCompanyNAmeFilled(true)
    }
    if(formData.industry===""){
      setIsIndustryFilled(true)
    }

  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div class="bg-white shadow-md rounded px-8 pt-8 ">
          <div>
            <div>
              <span class="display-block top-3">
                <span class="float-right right-0 h-16 w-16 bold text-base">step 1</span>
              </span>
            </div>
            <div class="text-xl">
              Create a Job
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-6" >Job title<span className="text-red-600">*</span></label>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. UX UI Designer" name="jobTitle" value={formData.jobTitle} onChange={(e) => handleOnChange(e)} required />
                {
                  isTitleFilled&&<p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div>
                <label class="pt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name<span className="text-red-600">*</span></label>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Google" name="companyName" value={formData.companyName} onChange={(e) => handleOnChange(e)} required />
                {
                  isCompanyNameFilled&&<p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div>
                <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry<span className="text-red-600">*</span></label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Information Technology" name="industry" value={formData.industry} onChange={(e) => handleOnChange(e)} required />
                {
                  isIndustryFilled&&<p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Chennai" name="location" value={formData.location} onChange={(e) => handleOnChange(e)} />
                </div>
                <div>
                  <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white">Remote Type</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. in-office" name="remoteType" value={formData.remoteType} onChange={(e) => handleOnChange(e)} />
                </div>
              </div>
            </div>
            <div class="pt-6"></div>
            <div class="pt-6"></div>
            <div class=" float-right pb-6 ">
              <button class="inline-flex justify-center rounded-md bg-sky-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 w-16" name="page" onClick={(e) => nextPage(e)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default JobFormPage1;