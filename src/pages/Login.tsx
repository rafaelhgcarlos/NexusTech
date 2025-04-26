import InputField from "../components/InputField/InputField.tsx";
import Button from "../components/Button/Button.tsx";
import nexustech from "../assets/images/nexustech.png";
import {login, useAuth} from "../services/firebase.ts";
import {FirebaseError} from "firebase/app";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Spinner from "../components/Spinner/Spinner.tsx";
import {LockIcon, LucideMail} from "lucide-react";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {user, handleLogout} = useAuth();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        setIsLoading(true);
        setError("");

        login(email, password)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                if (error instanceof FirebaseError) {
                    switch (error.code) {
                        case 'auth/invalid-credential':
                            setError("Invalid credentials. Check your email and password.");
                            break;
                        case 'auth/too-many-requests':
                            setError("Too many failed attempts. Please try again later.");
                            break;
                        default:
                            setError("Unknown error: " + error.message);
                            break;
                    }
                } else {
                    setError("Unexpected error. Please try again.");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleToggleVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <main className='flex items-center justify-center w-full min-h-screen'>
            <div
                className={"flex flex-col justify-center items-center container max-w-md sm:h-screen sm:max-h-140 lg:max-w-xl m-5 p-5 bg-stone-50 rounded-2xl shadow-xl"}>
                <img src={nexustech} alt='Nexus Tech' className={'size-40'}/>
                <form onSubmit={handleSubmit}
                      className={'w-full flex flex-col justify-center items-center'}>
                    <div className={'w-full flex flex-col gap-5 mb-10'}>
                        <InputField id='email'
                                    icon={LucideMail}
                                    label={'Email'}
                                    type={'email'}
                                    value={email}
                                    state={user ? 'disabled' : 'enabled'}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        if (error) setError("");
                                    }}
                        />
                        <InputField id='password'
                                    icon={LockIcon}
                                    label={'Password'}
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    state={user ? 'disabled' : 'enabled'}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        if (error) setError("");
                                    }}
                        />
                        <label
                            className={'text-sm md:text-md flex items-center gap-3 text-gray-600 cursor-pointer'}>
                            <input
                                onClick={handleToggleVisibility}
                                type='checkbox'
                                className={'size-4 md:size-5 cursor-pointer'}
                                disabled={!!user}
                            /> Show Password
                        </label>
                    </div>
                    {error && <p className="text-red-500 mt-5 text-[13px] text-center">{error}</p>}
                    {!user && (
                            <div className={'flex flex-col w-full mb-10'}>
                            <Button
                                label={isLoading ? <Spinner/> : 'Login'}
                                style={'primary'}
                                state={'enabled'}
                            />
                        </div>
                        )}
                </form>
                {user && (
                    <div className="flex flex-col w-full mb-10">
                        <Button
                            label={'Logout'}
                            style={'primary'}
                            state={'enabled'}
                            onClick={handleLogout}
                        />
                    </div>
                )}
            </div>
        </main>
    )
}
