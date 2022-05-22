import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../Sheard/Button";
import contactBannar from '../../assect/contactBannar.webp'

function Contact() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [country, setCountry] = useState('')
    const [message, setMessage] = useState('')





    const handelcontact = () => {
        if (name !== '' || email !== '' || companyName !== '' || country !== '' || message !== '') {
            toast.success('Thanks For Message!')
        }
        else (toast.error('Please Fill The Box!'))

    }
    //     style={{ backgroundImage: `url(${contactBannar})`, backgroundSize: 'cover' }
    // }


    return (
        <div className="w-full my-36 px-8" >
            <div className=" max-w-7xl mx-auto py-24 rounded-lg">
                <div className="w-full flex items-center justify-center my-12 ">
                    <div className=" w-full bg-white backdrop-blur-lg bg-opacity-10 shadow-lg rounded py-12 lg:px-28 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-green-400">Cntact Us!</p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-1/2 flex flex-col ">
                                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input onChange={(e) => setName(e.target.value)} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" required />
                            </div>
                            <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                <input onChange={(e) => setEmail(e.target.value)} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" required />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8 w-full">
                            <div className="md:w-1/2 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                                <input onChange={(e) => setCompanyName(e.target.value)} tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" required />
                            </div>
                            <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                                <input onChange={(e) => setCountry(e.target.value)} tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" required />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} required />
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
