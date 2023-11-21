import PupilsAddClient from "../../components/Pupils";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import ITPARK from "../../public/Logo_IT_Park_Uzbekistan.svg.png"



const PupilsAddPage = () => {
    return (
        <div>
            <Navbar />
            <div className='container mt-10 bg-gray-100 w-full mx-auto flex justify-center items-center h-[85vh]'>
                <PupilsAddClient />
            </div>
            <div className='flex mt-8 gap-1 justify-center items-center'>
                <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi</h1>
                <Image src={ITPARK} alt='Image' width={50} height={10} />
            </div>
        </div>
    );
};

export default PupilsAddPage;