import axios from "axios"
import { useState, useEffect } from "react"
const AvailableJobs = (props) => {
    console.log("///////////////////")
    console.log(props)
    const [jobs, setJobs] = useState();
    const getJobs = async () => {
        try {
            const fetchData = await axios.get("https://640235adf61d96ac486619fa.mockapi.io/jobs", { params: { applyType: props.applyType } })
            setJobs(fetchData.data)
            console.log(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getJobs()
    }, [])
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },

        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];

    // jobTitle: "",
    //   companyName: "",
    //   industry: "",
    //   location: "",
    //   remoteType: "",
    //   maximumExperience: Number,
    //   mainimumExperience: Number,
    //   minimumSalary:Number,
    //   maximumSalary:Number,
    //   totalEmployee:Number,
    //   applyType:"",
    return (
        <>
        {
            jobs?
            <div class="grid grid-cols-2 relative  left-10 top-10 pb-24 z-50 w-11/12 justify-center items-center pl-20 focus:outline-none justify-center items-center ">
                {jobs.map((items, key) => (
                    <div>
                        <div className="justify-center items-center rounded-md shadow-md bg-white w-98 mr-10 mb-5" key={key}>
                            <div class="flex flex-wrap">
                                <div class="w-1/6 left-15 ">
                                    <img
                                        class="w-10 h-10 left-15 top-10 ml-8 mt-6"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
                                        alt="image"
                                    />
                                </div>

                                <div className=" pt-4 w-4/6 float-left">
                                    <p className="text-2xl font-semibold tracking-tight">
                                        {items.companyName}
                                    </p>
                                    <p className=" text-base mb-2 leading-normal">
                                        {items.industry}
                                    </p>
                                    <p className="text-slate-300  text-base">
                                        {items.location}
                                    </p>
                                    <p className=" text-base">
                                        {items.remoteType}
                                    </p>
                                    <p className="pt-2  text-base">
                                        Experience: ({items.mainimumExperience} - {items.maximumExperience} years)
                                    </p>
                                    <p className=" text-base">
                                        INR: (&#8377;) {items.minimumSalary} - {items.maximumSalary} / Month
                                    </p>
                                    <p className=" text-base">
                                        {items.totalEmployee} employees
                                    </p>
                                    <button className="w-28 h-10 mb-1 text-sm text-blue-100 bg-blue-500 hover:bg-white hover:text-blue-500 rounded shadow border">
                                        Read more
                                    </button>
                                    
                                    <button class="w-36 h-10 ml-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
                                        {items.applyType}
                                    </button>
    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div> : <></>
        }
            
        </>
    )
}
export default AvailableJobs;