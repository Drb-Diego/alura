namespace Revisão_mvc_csharp
{
    public class Livro
    {

        public string Codigo { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        
        public Livro(string codigo, string nome, double preco)
        {
            this.Codigo = codigo;
            this.Nome = nome;
            this.Preco = preco;
        }
    }
}