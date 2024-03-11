module.exports = {
    // Enlève les parenthèses innutiles sur les arrow functions `(x) => {}` devient `x => {}`
    arrowParens: 'avoid',

    /* Ferme les balises HTML sur une nouvelle ligne si trop longues
    `<mon-component
        ...>
        xyz
    </mon-component>`

    devient

    `<mon-component>
        ...
    >
        xyz
    </mon-component>`
    */
    bracketSameLine: false,

    // Ajoute des espaces aux accolades des objets: `{a:32}` devient `{ a: 32 }`
    bracketSpacing: true,

    // Explication => https://prettier.io/blog/2020/08/24/2.1.0.html
    embeddedLanguageFormatting: 'auto',

    // Nombre de char maximum sur une ligne
    printWidth: 120,

    // Remplace les double-quotes par des single quotes: `let x = "Bonjour";` devient `let x = 'Bonjour';`
    singleQuote: true,

    // Nombre d'espace pour l'indentation
    tabWidth: 4,

    // Utilisation de tabulations au lieu d'espaces pour indenteer
    useTabs: false,
};
