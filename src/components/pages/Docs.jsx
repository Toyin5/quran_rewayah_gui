import { Link } from "react-router-dom";

function Docs() {
  return (
    <div className="flex justify-between px-4 -mt-4 mx-auto w-[100%] lg:w-[1000px] flex-col md:flex-row font-[tajawal]">
      <div className="flex flex-col md:w-[75%] h-[100vh] overflow-auto pt-14 pb-36 lg:pr-10 md:pr-5">
        <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white ">Documentation :</h1>

        <h2 id="started" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Started</h2>

        <h3 className="mb-3">To getting an API you can graph the code below, parsing an <span className="font-bold">"endpoint"</span>, and <Link to="/login" className="text-green-500"><b><i>auth-token</i></b></Link> key in headers.</h3>
        <h3 className="mb-3">Base URL : </h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api
          </div>
        </code></pre>

        <h3 className="mb-3">You can do it with fetch <code className="text-orange-500">fetch</code>() method in javascript,</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript Fetch</h1>
          </div>

          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah/&lt;endpoint&gt;'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-green-300">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with axios <code className="text-orange-500">axios</code>() method in javascript library <a href="https://www.npmjs.com/package/axios" className="text-green-500">axios</a>,</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript Axios</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-keyword text-purple-500">const</span> <span className="text-orange-500">axios</span> = <span className="hljs-built_in text-purple-500">require</span>(<span className="hljs-string text-green-500">'axios'</span>); // node js<br />
            <span className="hljs-keyword text-purple-500">import</span> <span className="text-orange-500">axios</span> <span className="hljs-keyword text-purple-500">from</span> <span className="hljs-string text-green-500">'axios'</span>; // js framework
            <br />
            <br />
            <span className="text-orange-500">axios</span>({'{'} <br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>, <br />
            <span className="ml-5 hljs-attribute text-purple-500">url</span>: <span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah/&lt;endpoint&gt;'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-green-300">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="hljs-function"><span className="hljs-params text-purple-500">res</span> =&gt;</span> <span className="hljs-built_in">console</span>.<span className="text-yellow-500">log</span>(<span className="hljs-params text-purple-500">res</span>.data));
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with <b>PHP, Python, Java, Ruby,</b> etc.</h3>

        <h2 id="token" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Token</h2>

        <h3 className="my-3">To get the <b>Token</b> you can <Link to="/login" className="text-green-500 font-bold">Login</Link> before, if you have no account, you can <Link to="/register" className="text-green-500 font-bold">Sign Up</Link> for free. and then login and generate your token. Paste on your headers.</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className=" hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-5 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span >{'}'}</span><br />
          </div>
        </code></pre>

        <h2 id="juz" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Juz Of Quran</h2>

        <h3 className="my-3">To get <b>One Juz of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran-rewayah/juz/{'<number-of-juz>'}</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/juz/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/juz/2</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="surah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting All Surah Of Quran</h2>

        <h3 className="my-3">To get <b>All Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran-rewayah/surah</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/surah</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/surah</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="onesurah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Surah Of Quran</h2>

        <h3 className="my-3">To get <b>One Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran-rewayah/surah/{'<number-of-surah>'}</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/surah/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/surah/2</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="oneayah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Ayah Of Surah in Quran</h2>

        <h3 className="my-3">To get <b>One Ayah Of Surah in Quran</b> you can parsing a parameter and query on the base url.</h3>

        <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            /quran-rewayah/ayah/{'<number-of-ayah>?surah=<number-of-surah>'}
          </div>
        </code></pre>

        <pre className="my-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/ayah/2?surah=7</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quran-rewayah/ayah/2?surah=7</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>


        <h2 id="quraa" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting Quraa Of Rewayah 7</h2>

        <h3 className="my-3">To get <b>Quraa Of Rewayah 7</b> you can parsing a parameter on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quraa/qari</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quraa/qari</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>


        <h2 id="quraa" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Qari Of Rewayah 7</h2>

        <h3 className="my-3">To get <b>One Qari Of Rewayah 7</b> you can parsing a parameters and specify index of qari on the base url.</h3>

        <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            /quraa/qari/{'<number-of-qari>'}
          </div>
        </code></pre>

        <pre className="my-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quraa/qari/3</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api<b className="text-red-500">/quraa/qari/3</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

      </div>
      <div className="hidden md:flex flex-col md:ml-5 pb-20 -mt-24">
        <h1 className="font-semibold text-2xl mb-2 mt-52 pr-5 py-3 border-y border-slate-400 text-green-500">Navigations :</h1>
        <a href="#started" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Get Started</a>
        <a href="#token" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Get Token</a>
        <a href="#juz" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Juz Of Quran</a>
        <a href="#surah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">All Surah Of Quran</a>
        <a href="#onesurah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Surah Of Quran</a>
        <a href="#oneayah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Ayah Of Surah</a>
        <a href="#quraa" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Quraa Of Rewayah 7</a>
        <a href="#oneqari" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Quraa Of Rewayah 7</a>
      </div>
    </div>
  );
}

export default Docs;