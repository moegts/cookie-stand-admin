import { useState } from 'react';


const ReportTable = (props) => {

    let hoursTotalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let roundNum = 0
    let totalRound = 0
    let totalRows = 0
    let roundData = []
    function randoms(min, max) {
        let arrr = []

        let randomz = Math.floor(Math.random() * (max - min) + min);
        arrr.push(randomz);

        roundData.push([...arrr])
        console.log(roundData)
        totalRound += randomz
        hoursTotalArray[roundNum] = hoursTotalArray[roundNum] + randomz
        roundNum++
        hoursTotalArray[14] += randomz
        console.log(hoursTotalArray)
        return randomz
    }

    function updateSubTotal() {
        var table = document.getElementById("tableid");
        let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
            return total + parseFloat(row.cells[1].innerHTML);
        }, 0);
        document.getElementById("val").innerHTML = "SubTotal = $" + subTotal.toFixed(2);
    }

    return (
        <div className='flex justify-center'>
            {
                props.showTable &&
                <table id='tableid' className='m-4 table-auto border-collapse border border-gray-500'>
                    <thead>
                        <th>Location</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>8am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11am</th>
                        <th>12pm</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
                        <th>Totals</th>
                    </thead>


                    <tbody>
                        {
                            props.data.map(i => {
                                { totalRound = 0 }
                                { roundNum = 0 }

                                return (
                                    <tr>
                                        <td className='border border-blue-600'>{i.location}</td>

                                        {

                                            Array(14).fill(0).map(ele => {

                                                return (
                                                    <td className='border border-blue-600'>{randoms(24, 48)}</td>
                                                )
                                            })
                                        }
                                        <td className='border border-blue-600'>{totalRound}</td>
                                    </tr>

                                )

                            })

                        }
                    </tbody>
                    <thead>
                        <tr>
                            <th className="border bg-green-500">Total</th>
                            {
                                hoursTotalArray.map(i => {
                                    return (
                                        <th className="border bg-green-400">{i}</th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                </table>
            }
        </div>
    )
}
export default ReportTable