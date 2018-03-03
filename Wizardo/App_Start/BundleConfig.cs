using System.Web;
using System.Web.Optimization;

namespace Wizardo
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/react-redux").Include(
                        "~/node_modules/react/umd/react.development.js",
                        "~/node_modules/react-dom/umd/react-dom.development.js",
                        "~/node_modules/redux/dist/redux.js",
                        "~/node_modules/react-redux/dist/react-redux.js"
                ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));
        }
    }
}
