import react, {useState, useEffect} from "react";

export default function DescComponent() {
    const [gradient, setGradient] = useState("linear-gradient(0deg, rgba(59,184,109,0.5) 0%, rgba(3,7,18,1) 50%, rgba(59,184,109,0.5) 100%)");
    useEffect(() => {
        setInterval(() => {
            if(document.documentElement.classList.contains("dark")) {
                setGradient("linear-gradient(0deg, rgba(59,184,109,0.5) 0%, rgba(3,7,18,1) 50%, rgba(59,184,109,0.5) 100%)")
            } else {
                setGradient("linear-gradient(0deg, rgba(59,184,109,0.5) 0%, white 50%, rgba(59,184,109,0.5) 100%)")
            }
        }, 100)
    })
return <section
               className="rxelative mt-12 md:mt-16 p-[15%] mx-auto flex text-black dark:text-white items-center justify-between bg-contain border-y-[1px] border-0 dark:border-gray-700 "
               style={{ background: gradient }}
               id="desc"
       >
           <div className="font-special text-5xl w-1/3">
               With the <span className="text-[#40bf70]">Right Software,</span> Great Things <span
                   className="text-blue-500">Can Happen</span>
           </div>
           <p className="w-1/2 leading-8">
               Our platform helps you manage your entire workflow with ease and efficiency, giving you more time to focus on
               what really matters: creating amazing content.

               With our advanced analytics tools, you'll be able to see exactly how your content is performing and make
               data-driven decisions to grow your audience. Content creation, collaboration and distribution, our platform
               streamlines every step of the process, saving you time and reducing the risk of error.
           </p>
       </section>
}
