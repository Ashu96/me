module.exports = {
    theme: {
        extend: {
            fontFamily: {
                display: ["Raleway-SemiBold", "sans-serif"],
                body: ["Raleway-Regular", "sans-serif"]
            },
            container: {
                center: true
            }
        }
    },
    variants: {},
    plugins: [],
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "media"
};
