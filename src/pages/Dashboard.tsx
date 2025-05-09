import {DotLottieReact} from "@lottiefiles/dotlottie-react";

export default function Dashboard() {
    return (
        <>
            <main
                className={
                    'bg-gradient-to-br from-blue-600 to-slate-950 text-blue-200 h-screen w-full flex flex-col gap-8 justify-center text-center items-center'
                }
            >
                <div
                    className={
                        'flex flex-col gap-8 justify-center text-center items-center container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
                    }
                >
                    <DotLottieReact
                        src="https://lottie.host/23b61c29-466f-438c-a167-123d274ac3bc/vJPYArlOKB.lottie"
                        loop
                        autoplay
                    />

                    <h1
                        className={
                            'logo-font text-5xl md:text-6xl lg:text-7xl'
                        }
                    >
                        Big Things Are Coming!
                    </h1>
                </div>
            </main>
        </>
    )
}