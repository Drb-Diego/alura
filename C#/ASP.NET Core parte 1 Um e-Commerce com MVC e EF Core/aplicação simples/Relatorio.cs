using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ASP.NET_Core_parte_1_Um_e_Commerce_com_MVC_e_EF_Core
{
    public class Relatorio
    {
        private readonly Catalogo catalogo;

        public Relatorio(Catalogo catalogo)
        {
            this.catalogo = catalogo;
        }

        public async Task Imprimir(HttpContext context)
        {
              foreach (var livros in catalogo.GetLivros())
                    {
                        await context.Response.WriteAsync($"{livros.Codigo,-10} {livros.Nome,-40}  {livros.Preco.ToString("c"),10}\r\n");
                    }
        }

    }
}