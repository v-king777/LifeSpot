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
        /// Маппинг CSS-файлов
        /// </summary>
        /// <param name="builder"></param>
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css" };

            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/CSS/{fileName}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);

                    var css = await File.ReadAllTextAsync(cssPath);

                    await context.Response.WriteAsync(css);
                });
            }
        }

        /// <summary>
        /// Маппинг JS-файлов
        /// </summary>
        /// <param name="builder"></param>
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var jsFiles = new[] { "index.js", "about.js", "testing.js" };

            foreach (var fileName in jsFiles)
            {
                builder.MapGet($"/Static/JS/{fileName}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);

                    var js = await File.ReadAllTextAsync(jsPath);

                    await context.Response.WriteAsync(js);
                });
            }
        }

        /// <summary>
        /// Маппинг JPEG-файлов
        /// </summary>
        /// <param name="builder"></param>
        public static void MapJpeg(this IEndpointRouteBuilder builder)
        {
            var jpegFiles = new[] { "london.jpg", "ny.jpg", "spb.jpg" };

            foreach (var fileName in jpegFiles)
            {
                builder.MapGet($"/Static/Images/{fileName}", async context =>
                {
                    var jpegPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "Images", fileName);

                    var jpeg = await File.ReadAllTextAsync(jpegPath);

                    await context.Response.WriteAsync(jpeg);
                });
            }
        }

        /// <summary>
        /// Маппинг HTML-страниц
        /// </summary>
        /// <param name="builder"></param>
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            var sideBarHtml = File.ReadAllText(Path.Combine(Directory
                .GetCurrentDirectory(), "Views", "Shared", "sideBar.html"));

            var footerHtml = File.ReadAllText(Path.Combine(Directory
                .GetCurrentDirectory(), "Views", "Shared", "footer.html"));

            var sliderHtml = File.ReadAllText(Path.Combine(Directory
                .GetCurrentDirectory(), "Views", "Shared", "slider.html"));

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
