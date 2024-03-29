import React from "react";
import Image from "./Image";

interface ProjectParams {
    id: number;
    link: string;
    imageName: string;
    name: string;
    description: string;
    tags: string[];
}

const Project: React.FC<ProjectParams> = props => {
    const imageOnLeft = props.id % 2 === 0;
    const className = imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse";
    return (
        <div
            className={`mt-12 lg:mt-16 xl:mt-24 flex flex-col ${className}`}
            onClick={() => window.open(props.link)}
        >
            <div className="w-full lg:w-7/12 transition duration-200 ease-in transform hover:-translate-y-3 hover:scale-105 shadow-lg">
                <Image imageName={props.imageName} isCourseImage={false} />
            </div>
            <div
                className={`w-full lg:w-5/12 mt-8 lg:mt-0 lg:px-8 ${
                    imageOnLeft ? "lg:pr-0" : "lg:pl-0"
                } lg:py-2 xl:px-12 ${imageOnLeft ? "xl:pr-0" : "xl:pl-0"} xl:self-center`}
            >
                <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-display hover:text-purple-600 hover:underline"
                >
                    {props.name}
                </a>
                <p className="mt-2 font-body">{props.description}</p>
                <p className="flex flex-wrap">
                    {props.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="h-8 px-2 py-1 mr-2 mb-2 rounded-full shadow bg-teal-100 text-teal-700 text-xs capitalize tracking-wider"
                        >
                            {tag}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Project;
