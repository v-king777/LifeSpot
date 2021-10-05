using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeSpot
{
    public static class EndpointMapper
    {
        /// <summary>
        /// Маппинг HTML-страниц
        /// </summary>
        /// <param name="builder"></param>
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            var sideBarHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sideBar.html"));

            var footerHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));

            var sliderHtml = File.ReadAllText(
                Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "slider.html"));

            builder.MapGet("/", async context =>
            {
                var htmlPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "index.html");

                var html = new StringBuilder(await File.ReadAllTextAsync(htmlPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/about", async context =>
            {
                var htmlPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "about.html");

                var html = new StringBuilder(await File.ReadAllTextAsync(htmlPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .Replace("<!--SLIDER-->", sliderHtml);

                await context.Response.WriteAsync(html.ToString());
            });

            builder.MapGet("/testing", async context =>
            {
                var htmlPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "testing.html");

                var html = new StringBuilder(await File.ReadAllTextAsync(htmlPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml);

                await context.Response.WriteAsync(html.ToString());
            });
        }
    }
}
