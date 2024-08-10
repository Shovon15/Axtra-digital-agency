import banner from "../assets/banner.png"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"

const data = [
    { src: img1, alt: "Brand 1" },
    { src: img2, alt: "Brand 2" },
    { src: img3, alt: "Brand 3" },
    { src: img1, alt: "Brand 4" },
    { src: img2, alt: "Brand 5" },
    { src: img3, alt: "Brand 6" },
    { src: img1, alt: "Brand7" },
];

const HomePage = () => {
    return (
        <div className=" p-5 md:p-10">
            <div className="relative h-[40rem]">
                <div className="">
                    <p className="font-semibold text-xl">DIGITAL</p>
                    <div className="flex h-48">
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >M</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >A</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >R</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >K</p>
                    </div>
                    <div className="flex justify-end p-0 ">
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >E</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >T</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >I</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >N</p>
                        <p className=" font-extrabold text-gray-900 text-[10rem] md:text-[15rem]" >G</p>
                    </div>
                </div>
                <p className="text-gray-700 font-thin text-md absolute left-10 top-[30rem] md:[25rem] lg:top-[20rem] w-72 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla saepe tempore enim adipisci nostrum, impedit placeat maxime quidem asperiores!</p>
            </div>
            <img src={banner} alt="banner" className="w-full" />
            <div className="my-10">
                <p className="text-center p-5 opac">We worked with global largest brands</p>
                <div className="flex flex-wrap justify-center gap-20">
                    {data.map((item, index) => (
                        <img key={index} src={item.src} alt={item.alt} className="w-20 h-auto" />
                    ))}
                </div>
            </div>

        </div >
    )
}

export default HomePage