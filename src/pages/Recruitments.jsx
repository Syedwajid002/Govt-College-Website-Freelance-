import React from 'react'

const Recruitments = () => {
    return (
        <div>
            <h1 className='md:text-3xl text-center text-xl'>Recruitments</h1>
            <div class="relative overflow-x-auto mt-10">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                            No. of Job fairs Organized
                            </th>
                            <th scope="col" class="px-6 py-3">
                            No. of Students attended
                            </th>
                            <th scope="col" class="px-6 py-3">
                            No. of Students Placed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border bg-gray-200 dark:border-red-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2018-19
                            </th>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                16
                            </td>
                            <td class="px-6 py-4">
                                12
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2019-20
                            </th>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                22
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                        </tr>
                        <tr class="bg-gray-200 dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2020-21
                            </th>
                            <td class="px-6 py-4">
                               2
                            </td>
                            <td class="px-6 py-4">
                              116
                            </td>
                            <td class="px-6 py-4">
                              36
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2021-22
                            </th>
                            <td class="px-6 py-4">
                               4
                            </td>
                            <td class="px-6 py-4">
                              115
                            </td>
                            <td class="px-6 py-4">
                              50
                            </td>
                        </tr>
                        <tr class="bg-gray-200 dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2022-23
                            </th>
                            <td class="px-6 py-4">
                               5
                            </td>
                            <td class="px-6 py-4">
                              297
                            </td>
                            <td class="px-6 py-4">
                              140
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Recruitments