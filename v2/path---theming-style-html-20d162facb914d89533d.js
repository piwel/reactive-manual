webpackJsonp([62400624188191],{503:function(s,a){s.exports={data:{markdownRemark:{html:'<p>ReactiveSearch components can also be styled using inline-styles. Each component supports a <code>style</code> prop which accepts an object. Find more info on the <a href="https://reactjs.org/docs/dom-elements.html#style">react docs</a>.</p>\n<blockquote>\n<p>Note</p>\n<p>Using the <code>style</code> attribute as the primary means of styling elements is generally <a href="https://reactjs.org/docs/dom-elements.html#style">not recommended</a>. ReactiveSearch components also support <code>className</code> prop allowing you to style them using CSS classes.</p>\n</blockquote>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>You can pass the style object via the <code>style</code> prop like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    backgroundColor<span class="token punctuation">:</span> <span class="token string">\'coral\'</span><span class="token punctuation">,</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'black\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Alternatively, you can also add a <code>className</code> to any component which gets applied to the component at the root level. You may also inject <code>className</code> to the inner levels using the <code>innerClass</code> prop. You can read more about it in the <a href="/theming/class.html">next section</a>.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="using-the-style-prop"><a href="#using-the-style-prop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the style prop</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n    <span class="token attr-name">...</span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">        border<span class="token punctuation">:</span> <span class="token string">\'1px dashed coral\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fefefe\'</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="using-the-classname-prop"><a href="#using-the-classname-prop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the className prop</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n    <span class="token attr-name">...</span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>search-box<span class="token punctuation">"</span></span>\n</span><span class="token punctuation">/></span></span>\n</code></pre>\n      </div>',frontmatter:{title:"Customizing Styles",next:"theming/class.html",prev:"theming/themes.html",nextTitle:"className injection",prevTitle:"Themes"},fields:{path:"docs/theming/style",slug:"theming/style.html"}}},pathContext:{slug:"theming/style.html"}}}});
//# sourceMappingURL=path---theming-style-html-20d162facb914d89533d.js.map