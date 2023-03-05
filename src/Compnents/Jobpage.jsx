import { useState, React ,useEffect } from 'react';
import JobFormPage1 from './JobFormPage1';
import JobFormPage2 from './JobFormPage2';

const JobPage =({buttonText})=>{
    const[showModal,setShowModal]= useState(false)
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      page:1,
      jobTitle: "",
      companyName: "",
      industry: "",
      location: "",
      remoteType: "",
      maximumExperience: "",
      mainimumExperience: "",
      minimumSalary:"",
      maximumSalary:"",
      totalEmployee:"",
      applyType:"",
    });
  
    const FormTitles = ["Sign Up", "Personal Info"];

    const PageDisplay = () => {
        if (formData.page === 1) {
          console.log("1st page")
            return <JobFormPage1 formData={formData} setFormData={setFormData} />;
        } else if(formData.page==2) {
          console.log("2nd page")
            return <JobFormPage2 formData={formData} setFormData={setFormData} />;
        }
    };
      return (
        <>
          <button
            class="bg-sky-500 text-white active:bg-sky-600 ml-5 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
           {buttonText}
          </button>
          {showModal ? (
            <>
              
              <div>{PageDisplay()}</div>
          
              <div class="opacity-25  overflow-x-hidden fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
    }

export default JobPage;