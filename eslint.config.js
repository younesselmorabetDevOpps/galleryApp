export default [
    {
        files: ["assets/js/main.js"], // On ne teste que TON code, pas les bibliothèques
        languageOptions: {
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                jQuery: "readonly",
                $: "readonly",
                breakpoints: "readonly",
                browser: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "off", // On désactive pour le test
            "no-undef": "warn"      // On passe en simple avertissement
        }
    },
    {
        ignores: ["**/jquery.min.js", "**/browser.min.js", "**/breakpoints.min.js", "**/jquery.poptrox.min.js"]
    }
];