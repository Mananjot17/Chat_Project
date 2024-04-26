import React, { useState } from 'react'
import GenderCheckBox from "../Signup/GenderCheckBox"
import { Link } from 'react-router-dom';
import UseSignup from '../../hooks/UseSignup';

function Signup() {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = UseSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-gray-400'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='John Doe'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={ev => setInputs({
                                ...inputs,
                                fullName: ev.target.value
                            })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='John Doe'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={ev => setInputs({
                                ...inputs,
                                username: ev.target.value
                            })}
                        />
                    </div>


                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={ev => setInputs({ ...inputs, password: ev.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={ev => setInputs({
                                ...inputs,
                                confirmPassword: ev.target.value
                            })}
                        />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <div>
                        Already have an account? <Link to="/login" className='hover:underline hover:text-blue-600 mt-2 inline-block'>Login</Link>
                    </div>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign up"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup;


// STARTER CODE FOR SIGNUP
// import React from 'react'
// import GenderCheckBox from "../Signup/GenderCheckBox"

// function Signup() {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up <span className='text-gray-400'> ChatApp</span>
//                 </h1>

//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder='John Doe'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder='John Doe'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>


//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder='password'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder='Confirm Password'
//                             className='w-full input input-bordered h-10'
//                         />
//                     </div>

//                     <GenderCheckBox />

//                     <div>
//                         Already have an account? <a href="#" className='hover:underline hover:text-blue-600 mt-2 inline-block'>Login</a>
//                     </div>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Signup;