console.log ("Trabalhando com Variáveis")

const idade = 20;
const primeiroNome = "Diego";
const sobrenome = "Brito";

// Saida de dados concatenando 
console.log("Meu nome é "+ primeiroNome + " " + sobrenome);


// Saida de dados usando a interpolação 
console.log(`meu nome é ${primeiroNome} ${sobrenome}\nMinha idade é ${idade} anos`); // Precisa adicionar a crase ao inves de aspas simples ou aspas duplas 

// Atribuição para sobrescrever a memoria 
const nomeCompleto = primeiroNome + sobrenome;
console.log (nomeCompleto);
