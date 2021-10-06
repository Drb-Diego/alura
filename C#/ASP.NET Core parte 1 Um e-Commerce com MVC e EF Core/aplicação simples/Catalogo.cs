using System.Collections.Generic;
using Revisão_mvc_csharp;

namespace ASP.NET_Core_parte_1_Um_e_Commerce_com_MVC_e_EF_Core
{
    public class Catalogo 
    {
        public List<Livro> GetLivros()
        {

            var livros = new List<Livro>();
            livros.Add(new Livro("001", "quem mecheu na minha query ?", 12.99));
            livros.Add(new Livro("002", "fique rico com c#", 30.99));
            livros.Add(new Livro("003", "java para baixinhos", 25.99));
            return livros;
        }
    }
}