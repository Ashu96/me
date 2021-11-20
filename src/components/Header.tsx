import { Link } from "gatsby";

import React from "react";

interface HeaderProps {
    siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
    <header className="bg-teal-700 py-4 px-8">
        <div className="container max-w-md">
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
);

export default Header;
