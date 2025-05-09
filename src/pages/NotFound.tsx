import {Link, useNavigate} from "react-router-dom";
import Button from "../components/Button/Button.tsx";
import {Home} from "lucide-react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

export default function NotFound() {

    const navigate = useNavigate();
    const handleGoHome = () => navigate("/dashboard");

    return (
        <main className="grid min-h-screen place-items-center bg-stone-300 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
                    <DotLottieReact
                        src="https://lottie.host/297ff614-454e-499f-ae06-4b1391209c47/9KFyY0dGGy.lottie"
                        loop
                        autoplay
                    />
                </div>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page
                    not found</h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find
                    the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-2 md:gap-x-4 lg:gap-x-8">
                    <Button
                        label={'Go back home'}
                        icon={Home}
                        iconPosition={'left'}
                        onClick={() => {
                            handleGoHome();
                        }}
                    />
                    <Link
                        to="#"
                        aria-label="Contact support"
                        className="text-sm font-semibold text-gray-900">Contact support
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
