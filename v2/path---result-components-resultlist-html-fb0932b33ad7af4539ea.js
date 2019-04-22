webpackJsonp([0x831c0b6278f7],{497:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/iY2csRm.png" alt="Image to be displayed"></p>\n<p><code>ResultList</code> creates a list UI component for a particular result item, it can be used with <code>ReactiveList</code> to display results in a list layout, suited for data that needs a compact display.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing e-commerce search listings.</li>\n<li>showing filtered hotel booking results.</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>An alternative layout to ResultList is a <a href="/reactive-manual/search-components/resultcard.html"><strong>ResultCard</strong></a>, which displays result data in a card layout.</p>\n</blockquote>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ReactiveList<span class="token punctuation">,</span>\n    ResultList\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ResultListWrapper <span class="token punctuation">}</span> <span class="token operator">=</span> ReactiveList<span class="token punctuation">;</span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n    <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PriceFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultListWrapper</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n                data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">(</span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList.Image</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>image<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList.Content</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList.Title</span>\n                                <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                                    __html<span class="token punctuation">:</span> item<span class="token punctuation">.</span>original_title\n                                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n                            <span class="token punctuation">/></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList.Description</span><span class="token punctuation">></span></span>\n                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>by <span class="token punctuation">{</span>item<span class="token punctuation">.</span>authors<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                                        <span class="token punctuation">(</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>average_rating<span class="token punctuation">}</span> avg<span class="token punctuation">)</span>\n                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n                                    Pub <span class="token punctuation">{</span>item<span class="token punctuation">.</span>original_publication_year<span class="token punctuation">}</span>\n                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ResultList.Description</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ResultList.Content</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ResultList</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ResultListWrapper</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveList</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>target</strong> <code>string</code> [optional]\nThis prop is equivalent to the <code>target</code> attribute of html <code>a</code> tags. It defaults to <code>_blank</code>.</li>\n<li><strong>href</strong> <code>string</code> [optional]\ncan be used to specify the URL of the page the link goes to</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>ResultList component accepts all the properties of html <code>a</code> tag.</p>\n</blockquote>\n<h2 id="sub-components"><a href="#sub-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sub Components</h2>\n<ul>\n<li>\n<p><strong>Image</strong>\nuse it to render the result list image.\n<br/>\nThe <code>ResultList.Image</code> accepts the following properties:</p>\n<ul>\n<li><strong><code>src</code></strong>: <code>string</code>\nsource url of the image</li>\n<li><strong><code>small</code></strong>: <code>boolean</code>\ndefaults to <code>false</code>, if <code>true</code> then renders an image of small size.</li>\n</ul>\n</li>\n<li><strong>Content</strong>\nuse it to wrap the result list content other than image.</li>\n<li><strong>Title</strong>\nrenders the title of the result list.</li>\n<li><strong>Description</strong>\ncan be used to render the result list description UI.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/ResultList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See more stories for ResultList on playground.</p>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Result%20components%2FResultList" target="_blank">ResultList stories</a></p>',frontmatter:{title:"ResultList",next:"result-components/resultcard.html",prev:"search-components/categorysearch.html",nextTitle:"ResultCard",prevTitle:"Search Components: CategorySearch"},fields:{path:"docs/result-components/ResultList",slug:"result-components/resultlist.html"}}},pathContext:{slug:"result-components/resultlist.html"}}}});
//# sourceMappingURL=path---result-components-resultlist-html-fb0932b33ad7af4539ea.js.map