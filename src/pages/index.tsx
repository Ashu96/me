import React from "react";
// import { Link } from "gatsby"
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Project from "../components/Project";
import SEO from "../components/Seo";
import CourseCard from "../components/CourseCard";
import Path from "../components/Path";

const PROJECTS = [
    {
        id: 0,
        name: "Uprise",
        description:
            "Uprise is a proactive and science-based Employee Assistance Program (EAP) provider in Australia.",
        tags: ["Gatsby", "Reactjs", "Storyblok", "Styled-components"],
        imageName: "uprise",
        link: "https://uprise.co"
    },
    {
        id: 1,
        name: "Nykaa TV",
        description:
            "Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands. ✔ free shipping* ✔ Cash on Delivery",
        tags: ["Reactjs", "scss"],
        imageName: "nykaa",
        link: "https://www.nykaa.com/nykaatv/"
    }
];

const COURSES = [
    {
        id: 0,
        title: "React 101 in 60 minutes",
        subTitle: "Getting started with React fundamentals",
        imageName: "react101",
        link:
            "https://www.udemy.com/course/react-101-in-60-minutes/?referralCode=400AF08B8ED27F85F29F"
    },
    {
        id: 1,
        title: "Learn Gatsby and build website",
        subTitle: "Build your own blazing fast blog website with Gatsby",
        imageName: "learnGatsby",
        link:
            "https://www.udemy.com/course/learn-gatsby-and-build-website/?referralCode=8B143CA46C642232250F"
    }
];

const Introduction = () => {
    const list = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };
    const item = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 10,
            opacity: 1
        }
    };
    return (
        <div className="my-12 md:flex font-body">
            <div className="w-full md:w-1/2 py-2 md:px-4">
                <p className=" text-xl font-display">
                    A software engineer based in India who enjoys building websites and
                    applications.
                </p>
            </div>
            <div className="w-full md:w-1/2 py-2 md:px-4">
                <p className="mb-4">
                    See bits and pieces on GitHub, packages on npm, thoughts on Medium, and a full
                    resume on LinkedIn
                </p>
                <motion.ul
                    initial={"hidden"}
                    animate={"visible"}
                    variants={list}
                    transition={{ ease: "easeOut", duration: 1, delay: 1 }}
                    className="mb-0 flex ml-0"
                >
                    <motion.li variants={item} className="pr-4">
                        <motion.a
                            className="hover:text-purple-600 border-b border-white hover:border-purple-600"
                            href="https://github.com/ashu96"
                        >
                            Github
                        </motion.a>
                    </motion.li>
                    <motion.li variants={item} className="px-4">
                        <motion.a
                            className="hover:text-purple-600 border-b border-white hover:border-purple-600"
                            href="https://www.linkedin.com/in/iamashutoshbhardwaj/"
                        >
                            LinkedIn
                        </motion.a>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    );
};

const Divider = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
                delay: 0.5,
                duration: 1
            }}
            className="border-b-2 border-purple-400"
        />
    );
};

const IndexPage = () => {
    return (
        <Layout>
            <SEO
                title="Ashutosh | Full stack developer"
                description={"Hi there! My name is Ashutosh and I'm a Full Stack developer."}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { ease: "easeInOut", duration: 1 } }}
                className="w-full min-h-screen mb-10 p-10 md:px-20 md:pt-16"
            >
                <motion.div className="font-body">
                    <motion.h3
                        initial={{ x: -100 }}
                        animate={{
                            x: 0
                        }}
                        className="mb-12 text-3xl text-green-400 font-display"
                    >
                        Ashutosh
                    </motion.h3>
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{
                            x: 0
                        }}
                        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                        className="relative"
                    >
                        <Path classNames="absolute top-0 left-0 w-full max-w-sm path" />
                        <h1 className="relative z-10 mb-12 text-5xl lg:text-6xl font-display">
                            I build <br /> <span className="text-purple-400">applications</span>{" "}
                            <br /> for web
                        </h1>
                    </motion.div>
                    <Divider />
                </motion.div>
                <Introduction />
                <Divider />
                <section className="my-12">
                    <h2 className="mb-4 text-green-400 text-2xl lg:text-3xl font-display">
                        Projects
                    </h2>
                    <p className="mb-8 text-lg font-body">
                        Take a look at the projects that I worked on
                    </p>
                    {PROJECTS.map(project => (
                        <Project key={project.id} {...project} />
                    ))}
                </section>
                <Divider />
                {/* Courses */}
                <section className="my-12 py-6">
                    <h2 className="mb-4 text-green-400 text-2xl lg:text-3xl font-display">
                        Courses
                    </h2>
                    <p className="mb-8 text-lg font-body">
                        I love to share my knowledge with others.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center">
                        {COURSES.map(course => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </section>
            </motion.div>
        </Layout>
    );
};

export default IndexPage;
