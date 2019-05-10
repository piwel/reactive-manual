webpackJsonp([54216836609322],{417:function(s,a){s.exports={data:{markdownRemark:{html:'<p>ReactiveSearch components can be styled using inline-styles or via the <code class="gatsby-code-text">innerStyle</code> prop. Each component supports a <code class="gatsby-code-text">style</code> prop which accepts an object. Find more info on the <a href="https://facebook.github.io/react-native/docs/style.html">react native docs</a>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>You can pass the style object via the <code class="gatsby-code-text">style</code> prop like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'coral\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'black\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n    <span class="token attr-name">...</span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fefefe\'</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="innerstyle"><a href="#innerstyle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>innerStyle</h2>\n<p>The components support an additional <code class="gatsby-code-text">innerStyle</code> prop which accepts an object with keys specified in the <strong>style</strong> section of each component. It can be used for more granular styling of components. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n    <span class="token attr-name">...</span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">innerStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        icon<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">            backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fefefe\'</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span></code></pre>\n      </div>',frontmatter:{title:"Customizing styles",next:"advanced/innerprops.html",prev:"advanced/theming.html",nextTitle:"innerProps",prevTitle:"Theming"},fields:{path:"docs/advanced/Style.md",slug:"advanced/style.html"}}},pathContext:{slug:"advanced/style.html"}}}});
//# sourceMappingURL=path---advanced-style-html-379c6d4afa51fd164683.js.map