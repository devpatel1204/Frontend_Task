import { useState, React } from 'react';
import JobFormPage1 from './JobFormPage1';
import JobFormPage2 from './JobFormPage2';

const JobPage =({buttonText})=>{
    const[showModal,setShowModal]= useState(false)
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      jobTitle: "",
      companyName: "",
      industry: "",
      location: "",
      remoteType: "",
      experience: "",
      minimumSalary:"",
      maximumSalary:"",
      totalEmployee:"",
      applyType:"",
    });
  
    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <JobFormPage1 formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <JobFormPage2 formData={formData} setFormData={setFormData} />;
        }
    };
      return (
        <>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
           {buttonText}
          </button>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="form">
      <div className="progressbar">
       
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
    }

export default JobPage;