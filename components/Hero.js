import heroImg from "../public/images/hero.png"
import Image from "next/image"
export default function  Home(){
    return(
        <div className="xl:container mx-auto px-6 md:px-9 lg:flex justify-between py-12 gap-x-20 items-center lg:text-left  text-center mt-12 md:mt-0">
            <div className="max-w-2xl  mx-auto lg:mx-0 lg:1/2 mb-14 lg:mb-2">
                <h1 className="text-4xl font-bold">Free Landing Page Template for startups</h1>
                <p className="mt-">Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.</p>
                <div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 lg:flex-row mt-5 items-center ">
                    <a
                        href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md mb-4">
                        Download for Free
                    </a>
                    <a
                        href="https://github.com/web3templates/nextly-template/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-center space-x-2 text-gray-500 dark:text-gray-400">
                        <svg
                        role="img"
                        width="24"
                        height="24"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        <span> View on Github</span>
                    </a>
                </div>
            </div>

            <div className="lg:1/2 text-center">
                <Image
                src={heroImg}
                width="616"
                height="617"
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                placeholder="blur"
                />
            </div>
        </div>
    )

}