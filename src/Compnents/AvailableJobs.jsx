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
            <div class="grid grid-cols-2 relative  left-10 top-10 pb-24 z-50 w-11/12 justify-center items-center pl-20 focus:outline-none justify-center items-center ">
                {jobs.map((items, key) => (
                    <div>
                        <div className="justify-center items-center rounded-sm shadow-md bg-white w-98 mr-10 mb-5" key={key}>
                            <div class="flex flex-wrap">
                                <div class="w-1/6 left-15 ">
                                    <img
                                        class="w-10 h-10 left-15 top-10 ml-8 mt-6"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
                                        alt="image"
                                    />
                                </div>

                                <div className="p-4 w-4/6">
                                    <h4 className="text-xl font-semibold tracking-tight">
                                        {items.companyName}
                                    </h4>
                                    <p className="mb-2 leading-normal">
                                        {items.industry}
                                    </p>
                                    <p>
                                        {items.location}
                                    </p>
                                    <p>
                                        {items.remoteType}
                                    </p>
                                    <p class="pt-2">
                                        Experience: ({items.mainimumExperience} - {items.maximumExperience} years)
                                    </p>
                                    <p>
                                        INR: (R) {items.minimumSalary} - {items.maximumSalary} / Month
                                    </p>
                                    <p>
                                        {items.totalEmployee}
                                    </p>
                                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                        Read more
                                    </button>

                                </div>
                            </div>
                        </div>
                        </div>
                ))}

            </div>
        </>
    )
}
export default AvailableJobs;