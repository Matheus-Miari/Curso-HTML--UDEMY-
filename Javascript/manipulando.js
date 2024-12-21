// Manipulação de Strings no JavaScript

// 1. Criando Strings let ou var
let textoSimples = "Aprendendo manipulação de strings no JavaScript.";
let textoComAspas = 'Aspas simples também funcionam.';
let textoInterpolado = `Texto com interpolação: ${textoSimples}`;

// 2. Métodos de Manipulação de Strings
// Tamanho da string
console.log("Tamanho da string:", textoSimples.length);

// Convertendo para maiúsculas e minúsculas
console.log("Maiúsculas:", textoSimples.toUpperCase());
console.log("Minúsculas:", textoSimples.toLowerCase());

// Extraindo partes da string
console.log("Substring (0, 10):", textoSimples.substring(0, 10));
console.log("Slice (-10):", textoSimples.slice(-10));

// Substituindo texto
let textoModificado = textoSimples.replace("JavaScript", "JS");
console.log("Texto Modificado:", textoModificado);

// Removendo espaços extras
let textoComEspacos = "   Espaços extras no início e fim   ";
console.log("Trim:", textoComEspacos.trim());

// Dividindo strings
let listaPalavras = textoSimples.split(" ");
console.log("Lista de Palavras:", listaPalavras);

// Verificando conteúdo
console.log("Inclui 'JavaScript':", textoSimples.includes("JavaScript"));
console.log("Começa com 'Aprendendo':", textoSimples.startsWith("Aprendendo"));
console.log("Termina com '.':", textoSimples.endsWith("."));

// Concatenando Strings
let saudacao = "Olá";
let nome = "Matheus";
console.log("Concatenação:", saudacao + ", " + nome + "!");
console.log("Concatenação com template string:", `${saudacao}, ${nome}!`);

// Repetindo strings
let repeticao = "JS ".repeat(3);
console.log("Repetição:", repeticao);
