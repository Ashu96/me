import React, { useContext } from "react";
import Image from "./Image";
import { ThemeContext } from "./Layout";

interface CourseCardProps {
    title: string;
    subTitle: string;
    imageName: string;
    link: string;
}

export default function CourseCard(props: CourseCardProps) {
    const { title, subTitle, imageName, link } = props;
    const { isThemeDark } = useContext(ThemeContext);

    return (
        <div
            className={`mb-8 lg:mr-8 xl:mr-12 w-full md:w-64 xl:w-full max-w-xs ${
                isThemeDark ? "bg-gray-800" : "bg-white"
            } cursor-pointer transition duration-200 ease-in transform hover:-translate-y-3 hover:scale-105 shadow-lg rounded-lg`}
            onClick={() => window.open(link)}
        >
            <Image imageName={imageName} isCourseImage={true} />
            <div className="p-6">
                <h2
                    className={`h-12 ${
                        isThemeDark ? "text-purple-400" : "text-purple-600"
                    } text-xl font-display mb-4`}
                >
                    {title}
                </h2>
                <p className="font-body">{subTitle}</p>
                <button
                    className={`flex items-center px-4 py-2 rounded ${
                        isThemeDark ? "bg-purple-600" : "bg-purple-600"
                    } text-white font-display transition duration-200 ease-in`}
                >
                    Join now
                    <svg
                        className="w-4 h-4 ml-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
