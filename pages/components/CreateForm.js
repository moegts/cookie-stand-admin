import { useState } from 'react';
import ReportTable from './ReportTable';

const CreateForm = (props) => {
    const [data, dataList] = useState([])
    const [location, locationList] = useState(['x']);
    const [minCustomers, minCustomersList] = useState(['x']);
    const [maxCustomers, maxCustomersList] = useState(['x']);
    const [avgCoockies, avgCoockiesList] = useState(['x']);
    const [showTable, setShowTable] = useState(false);
    const formHandler = (e) => {
        e.preventDefault();

        let newData = {
            location: e.target.location.value,
            minCustomers: e.target.minimum.value,
            maxCustomers: e.target.maximum.value,
            avgCoockies: e.target.average.value
        };
        dataList([...data, newData])
        locationList(newData.location)
        minCustomersList(newData.minCustomers)
        maxCustomersList(newData.maxCustomers)
        avgCoockiesList(newData.avgCoockies)
        setShowTable(true)
        console.log(newData)
    }
    return (
        <>
            <div className='w-9/12 bg-teal-400 mx-auto my-5 p-2 rounded'>
                <h2 className='flex justify-center text-1xl font-bold mx-1 my-3'>Create Cookie Stand</h2>
                <form onSubmit={formHandler}>
                    <span className='flex justify-center pb-3'>
                        <label className='mx-6' htmlFor="location">Location:</label>
                        <input name='location' id='location' type="text" className=' justify-center w-4/5 mx-auto my-1/4 h-4' required/>
                    </span>
                    <div className='text-[0.8rem] flex justify-center flex-row space-x-4 space-x-reverse grid gap-4 grid-cols-4'>
                        <span className='bg-emerald-300 rounded'>
                            <label className='text-[0.8rem] flex justify-center text-sm' htmlFor="Minimum">Minimum Customers per Hours</label>
                            <input type="number" name='minimum' id='Minimum' type="text" className='flex inline-flex justify-center mx-8' required/>
                        </span>
                        <span className='bg-emerald-300 rounded'>
                            <label className='text-[0.8rem] flex justify-center text-sm' htmlFor="Maximum"><h5>Maximum Customers per Hours</h5></label>
                            <input type="number" name='maximum' id='Maximum' type="text" className='flex inline-flex justify-center mx-8' required/>
                        </span>
                        <span className='bg-emerald-300 rounded'>
                            <label name='' className='text-[0.8rem] flex justify-center text-sm' htmlFor="Average">Average Cookies Per Sale</label>
                            <input typeof='number' name='average' id='Average' type="text" className='flex inline-flex justify-center mx-8' required/>
                        </span>
                            <button  className=' flex justify-center h-55 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 bg-teal-900 p-3 rounded'>Create</button>

                    </div>
                </form>
            </div>
            <ReportTable showTable={showTable} data={data} />
        </>
    )
}
export default CreateForm
