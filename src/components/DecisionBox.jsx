
import { lightBlue } from '../utils/constants'

const DecisionBox = ({ setOpen, type, onYesClick,title="" }) => {
    return (
        <div className='fixed top-0 right-0 flex items-center justify-center h-screen w-screen bg-black/70'>
            <div className=' w-[90vw] md:w-fit bg-white rounded-xl px-4 py-2'>
                <h1 className='font-bold text-gray-700 text-xl'>{type}</h1>
            <h2 className='my-2'>{title}</h2>
            <div className='flex items-center gap-4 mt-4 justify-end'>
            <button
                onClick={() => setOpen(false)}
                style={{ backgroundColor: lightBlue }}
                className="cursor-pointer text-white px-4 py-2 rounded"
            >
                No
            </button>
            <button
                onClick={onYesClick}
                style={{ backgroundColor: lightBlue }}
                className="cursor-pointer text-white px-4 py-2 rounded"
            >
                Yes
            </button>
            </div>
            </div>
        </div>
    )
}

export default DecisionBox