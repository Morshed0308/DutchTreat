#pragma checksum "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a3e058e359d8beec975147980954d992181282ee"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_App_Shop), @"mvc.1.0.view", @"/Views/App/Shop.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/App/Shop.cshtml", typeof(AspNetCore.Views_App_Shop))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/_ViewImports.cshtml"
using DutchTreat.Controllers;

#line default
#line hidden
#line 2 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/_ViewImports.cshtml"
using DutchTreat.Model;

#line default
#line hidden
#line 3 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/_ViewImports.cshtml"
using DutchTreat.Data.Entities;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a3e058e359d8beec975147980954d992181282ee", @"/Views/App/Shop.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"1f2458eceab3c4c47bb07a1edf1893b56f4685b6", @"/Views/_ViewImports.cshtml")]
    public class Views_App_Shop : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Product>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(29, 2, true);
            WriteLiteral("\n\n");
            EndContext();
#line 4 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml"
  
    ViewData["Title"] = "Shop";

#line default
#line hidden
            BeginContext(68, 12, true);
            WriteLiteral("\n\n<p>Count: ");
            EndContext();
            BeginContext(81, 13, false);
#line 9 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml"
     Write(Model.Count());

#line default
#line hidden
            EndContext();
            BeginContext(94, 5, true);
            WriteLiteral("</p>\n");
            EndContext();
#line 10 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml"
 foreach (var x in Model)
{

#line default
#line hidden
            BeginContext(127, 8, true);
            WriteLiteral("    <li>");
            EndContext();
            BeginContext(136, 7, false);
#line 12 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml"
   Write(x.Title);

#line default
#line hidden
            EndContext();
            BeginContext(143, 6, true);
            WriteLiteral("</li>\n");
            EndContext();
#line 13 "/Volumes/Software & Study/Practice/ASPdot/DutchTreat/DutchTreat/DutchTreat/Views/App/Shop.cshtml"
     
}

#line default
#line hidden
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Product>> Html { get; private set; }
    }
}
#pragma warning restore 1591
