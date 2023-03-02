const JobFormPage1 =({formData,setFormData})=>{
    return(
        <>
       <div class="w-full max-w-xs">

  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="jobtitle">
        Job title 
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jobtitle" type="text" placeholder="ex. UX UI Designer"
       value={formData.jobTitle}
        onChange={(event) =>
          setFormData({ ...formData, jobTitle: event.target.value })
        }/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="jobtitle">
        Job title 
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jobtitle" type="text" placeholder="ex. UX UI Designer"
       value={formData.jobTitle}
        onChange={(event) =>
          setFormData({ ...formData, jobTitle: event.target.value })
        }/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="jobtitle">
        Job title 
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jobtitle" type="text" placeholder="ex. UX UI Designer"
       value={formData.jobTitle}
        onChange={(event) =>
          setFormData({ ...formData, jobTitle: event.target.value })
        }/>
    </div>
    
   
  </form>
</div>
    </>
    )
}
export default JobFormPage1;