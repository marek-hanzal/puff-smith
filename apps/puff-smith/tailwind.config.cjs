/** @type {import("tailwindcss").Config} */
module.exports = {
    mode:     "jit",
    darkMode: "class",
    content:  [
        "./public/**/*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins:  [
        require("flowbite/plugin"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
