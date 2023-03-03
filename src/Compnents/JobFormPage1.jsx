

const JobFormPage1 =({formData,setFormData})=>{
  const handleOnChange = event => {
    console.log("i am dev")
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };
  console.log(formData)
    return(
        <>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
       <div>
       <span class="display-block top-3">
  <span class="float-right right-0 h-16 w-16 bold">step 1</span>
</span>
 </div>
    <div>
      Create a Job
        <div>
          
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4" >Job title<span className="text-red-600">*</span></label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. UX UI Designer" name="jobTitle" value={formData.jobTitle} onChange={(e)=>handleOnChange(e)}required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name<span className="text-red-600">*</span></label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Google" name="companyName" value={formData.companyName} onChange={(e)=>handleOnChange(e)} required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry<span className="text-red-600">*</span></label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Information Technology" name="industry" value={formData.industry} onChange={(e)=>handleOnChange(e)} required/>
        </div>  
        <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Chennai" name="location" value={formData.location} onChange={(e)=>handleOnChange(e)}/>
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remote Type</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. in-office" name="remoteType" value={formData.remoteType} onChange={(e)=>handleOnChange(e)}/>
        </div>
        </div>
       </div>
       <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"  name="page" value={2} onClick={(e)=>handleOnChange(e)}>Next</button>
          </div>
          </div>
       </>
    )
}
export default JobFormPage1;