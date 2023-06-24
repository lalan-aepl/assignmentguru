import {useState} from 'react';
import {CgCloseR} from 'react-icons/cg'

const Cookies = () => {
    const [showCookies, setShowCookies] = useState(true);
    
    const handleCookies = () => {
        setShowCookies(false)
    }

    return (
        <>
          {showCookies && (
            <div className="bg-yellow-dark text-white px-1 sm:py-0 sm:px-4 fixed top-0 left-0 right-0 z-50 transition-opacity duration-500">
              <div className="flex justify-between">
                <div />
                <p className='capitalize text-blue-text font-Inter font-normal text-[11px] sm:text-xs sm:leading-[19.63px]'>
                are you a university or school looking for an online tutoring partnership? <strong className='underline'>talk to us</strong>
                </p>
                <button onClick={handleCookies} className="text-black hover:text-gray-200">
                  <CgCloseR />
                </button>
              </div>
            </div>
          )}
        </>
      );
}

export default Cookies