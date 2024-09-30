import{_ as t,c as n,b as o,o as i}from"./app-BDRoJd17.js";const a={};function r(l,e){return i(),n("div",null,e[0]||(e[0]=[o('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><blockquote><ul><li><a href="https://www.mingw-w64.org/" target="_blank" rel="noopener noreferrer">MinGW-w64</a></li></ul></blockquote><p>MinGW 是一个 Windows 平台上的开发环境，它提供了一套兼容 POSIX 的工具链，可以用来编译和运行 C/C++ 程序。MinGW 是一个缩写，它代表 Minimalist GNU for Windows。MinGW-w64 是 MinGW 的一个分支，它支持 64 位 Windows 系统。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><blockquote><ul><li><a href="https://www.mingw-w64.org/downloads/" target="_blank" rel="noopener noreferrer">Downloads - MinGW-w64</a></li></ul></blockquote><p><code>Mingw-w64</code> 的安装相对简单，并且许多项目提供了 <code>prebuilt</code> 的二进制包，可以直接下载安装。这里我们选择主流的两个项目，你应该选择其中一个进行安装。</p><h3 id="msys2" tabindex="-1"><a class="header-anchor" href="#msys2"><span>MSYS2</span></a></h3><blockquote><ul><li><a href="https://www.msys2.org/" target="_blank" rel="noopener noreferrer">MSYS2</a></li></ul></blockquote><p>MSYS2 是一个类似于 Cygwin 的项目，它提供了一套类 Unix 的环境，可以在 Windows 上运行。MSYS2 项目提供了一个软件包管理器，可以方便地安装 MinGW-w64。安装指南参考<a href="https://www.msys2.org/" target="_blank" rel="noopener noreferrer">MSYS2</a>。<br> MSYS2可以接受CMD传递的参数，如<code>msys2.exe help</code></p><h3 id="w64devkit" tabindex="-1"><a class="header-anchor" href="#w64devkit"><span>w64devkit</span></a></h3><blockquote><ul><li><a href="https://www.mingw-w64.org/downloads/#w64devkit" target="_blank" rel="noopener noreferrer">w64devkit on Mingw-w64</a></li><li><a href="https://github.com/skeeto/w64devkit" target="_blank" rel="noopener noreferrer">skeeto/w64devkit: Portable C and C++ Development Kit for x64 (and x86) Windows</a></li></ul></blockquote><p>w64devkit is a <strong>portable</strong> C and C++ development kit for x64 (and x86) Windows.</p><p>也就是说你可以把它直接丢在你的PE里，然后你在任意一台能启动的机子上都可以编译你的代码。另一方面，使用docker构建的开发环境，也很方便使用。</p><p><strong>安装步骤</strong>：</p><ul><li><p>下载 <code>w64devkit</code> 的二进制包</p></li><li><p>解压到你的目录下，例如 <code>C:\\w64devkit</code></p></li><li><p>将 <code>C:\\w64devkit\\bin</code> 添加到你的<a href="../environment_variable"><code>环境变量</code></a>中</p><p>可以使用CMD命令<code>setx /M path &quot;%path%;C:\\w64devkit\\bin&quot;</code>）</p></li><li><p>打开命令行，输入 <code>gcc --version</code>，如果能看到版本信息，说明安装成功</p></li></ul>',15)]))}const s=t(a,[["render",r],["__file","mingw.html.vue"]]),c=JSON.parse('{"path":"/guide/environment/mingw.html","title":"Mingw-w64","lang":"zh-CN","frontmatter":{"title":"Mingw-w64","author":{"name":"Samuka007","url":"https://github.com/Samuka007"},"categories":["Advance"],"tags":["C++","Modern C++","Program"],"summary":"MinGW 是一个 Windows 平台上的开发环境，它提供了一套兼容 POSIX 的工具链，可以用来编译和运行 C/C++ 程序。MinGW 是一个缩写，它代表 Minimalist GNU for Windows。MinGW-w64 是 MinGW 的一个分支，它支持 64 位 Windows 系统。","description":"介绍 MinGW-w64 MinGW 是一个 Windows 平台上的开发环境，它提供了一套兼容 POSIX 的工具链，可以用来编译和运行 C/C++ 程序。MinGW 是一个缩写，它代表 Minimalist GNU for Windows。MinGW-w64 是 MinGW 的一个分支，它支持 64 位 Windows 系统。 安装 Downloa...","head":[["meta",{"property":"og:url","content":"https://guide.scutosc.cn/guide/environment/mingw.html"}],["meta",{"property":"og:site_name","content":"OSC Guide"}],["meta",{"property":"og:title","content":"Mingw-w64"}],["meta",{"property":"og:description","content":"介绍 MinGW-w64 MinGW 是一个 Windows 平台上的开发环境，它提供了一套兼容 POSIX 的工具链，可以用来编译和运行 C/C++ 程序。MinGW 是一个缩写，它代表 Minimalist GNU for Windows。MinGW-w64 是 MinGW 的一个分支，它支持 64 位 Windows 系统。 安装 Downloa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T09:14:20.000Z"}],["meta",{"property":"article:author","content":"Samuka007"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:tag","content":"Modern C++"}],["meta",{"property":"article:tag","content":"Program"}],["meta",{"property":"article:modified_time","content":"2024-09-30T09:14:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mingw-w64\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T09:14:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Samuka007\\",\\"url\\":\\"https://github.com/Samuka007\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"MSYS2","slug":"msys2","link":"#msys2","children":[]},{"level":3,"title":"w64devkit","slug":"w64devkit","link":"#w64devkit","children":[]}]}],"git":{"createdTime":1726670714000,"updatedTime":1727687660000,"contributors":[{"name":"MikeHuang2000","email":"huangminke@hotmail.com","commits":3},{"name":"Samuka007","email":"samuka007@dragonos.org","commits":1}]},"readingTime":{"minutes":1.61,"words":484},"filePathRelative":"guide/environment/mingw.md","localizedDate":"2024年9月18日","autoDesc":true}');export{s as comp,c as data};
