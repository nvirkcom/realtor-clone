import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    function onChange(e) {
        setEmail(e.target.value);
    }
    return (
        <section>
            <h1 className="font-bold text-3xl text-center mt-6">Forgot Password</h1>
            <div className="flex flex-wrap items-center justify-center max-w-6xl mx-auto px-6 py-12">
                <div className="lg:mb-0 lg:w-[50%] mb-12 md:mb-6 md:w-[67%]">
                    <img alt="Key" className="rounded-2xl w-full" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" />
                </div>
                <div className="lg:ml-20 lg:w-[40%] md:w-[67%] w-full">
                    <form>
                        <input autoComplete="off" className="bg-white border-gray-300 ease-in-out mb-6 px-4 py-2 rounded text-gray-700 text-xl transition w-full" id="email" onChange={onChange} placeholder="Email Address" type="email" value={email} />
                        <div className="flex justify-between mb-6 sm:text-lg text-sm whitespace-nowrap">
                            <p>Dont't have an account?
                                <Link className="duration-200 ease-in-out hover:text-red-700 ml-1 text-red-600 transition" to="/sign-up">Sign Up</Link>
                            </p>
                            <p>
                                <Link className="duration-200 ease-in-out hover:text-blue-800 text-blue-600 transition" to="/sign-in">Sign In Instead</Link>
                            </p>
                        </div>
                        <button className="active:bg-blue-800 bg-blue-600 duration-150 ease-in-out font-medium hover:bg-blue-700 hover:shadow-lg px-7 py-3 rounded shadow-md text-sm text-white transition uppercase w-full" type="submit">Send Reset Email</button>
                        <div className="after:border-gray-300 after:border-t after:flex-1 before:border-gray-300 before:border-t before:flex-1 flex items-center my-4">
                            <p className="font-semibold mx-4 text-center uppercase">Or</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    );
}