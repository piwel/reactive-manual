webpackJsonp([0x831c0b6278f7],{493:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/iY2csRm.png" alt="Image to be displayed"></p>\n<p><code>ResultList</code> creates a result list UI component to display results in a list layout, suited for data that needs a compact display.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing e-commerce search listings.</li>\n<li>showing filtered hotel booking results.</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>An alternative layout to ResultList is a <a href="/reactive-manual/search-components/resultcard.html"><strong>ResultCard</strong></a>, which displays result data in a card layout.</p>\n</blockquote>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList</span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PriceFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="pagination-usage-with-all-props"><a href="#pagination-usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pagination Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ResultList01<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings<span class="token punctuation">"</span></span>\n  <span class="token attr-name">stream</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>  \n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">paginationAt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">pages</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">loader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading Results..<span class="token punctuation">"</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PriceFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="infinite-scroll-usage-with-all-props"><a href="#infinite-scroll-usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Infinite Scroll Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ResultList01<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings<span class="token punctuation">"</span></span>\n  <span class="token attr-name">stream</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>  \n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">loader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading Results..<span class="token punctuation">"</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PriceFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be mapped with <code>ResultList</code>’s UI view, used for providing a sorting context.</li>\n<li><strong>excludeFields</strong> <code>String Array</code> [optional]<br>\nfields to be excluded in search results.</li>\n<li><strong>includeFields</strong> <code>String Array</code> [optional]<br>\nfields to be included in search results.</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code>false</code>.</li>\n<li><strong>pagination</strong> <code>Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code>false</code>, i.e. an infinite scroll based view. When set to <code>true</code>, a pagination based list view with page numbers will appear.</li>\n<li><strong>paginationAt</strong> <code>String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code>true</code>. Accepts one of <code>top</code>, <code>bottom</code> or <code>both</code> as valid values. Defaults to <code>bottom</code>.</li>\n<li><strong>pages</strong> <code>Number</code> [optional]<br>\nnumber of pages to show at at time, defaults to 5.</li>\n<li><strong>onPageChange</strong> <code>Function</code> [optional]<br>\nexecutes when the current page is changed. If not defined, <code>window</code> will be scrolled to the top of the page.</li>\n<li><strong>onPageClick</strong> <code>Function</code> [optional]<br>\naccepts a function which is invoked with the updated page value when a pagination button is clicked. For example if ‘Next’ is clicked with the current page number as ‘1’, you would receive the value ‘2’ as the function parameter.</li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>The fundamental difference between <code>onPageChange</code> and <code>onPageClick</code> is that <code>onPageClick</code> is only called on a manual interaction with the pagination buttons, whereas, <code>onPageChange</code> would also be invoked if some other side effects caused the results to update which includes updating filters, queries or changing pages. The behaviour of these two may change in the future versions as we come up with a better API.</p>\n</blockquote>\n<ul>\n<li><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the results by either <code>asc</code> or <code>desc</code> order. It is an alternative to <code>sortOptions</code>, both can’t be used together.</li>\n<li>\n<p><strong>sortOptions</strong> <code>Object Array</code> [optional]<br>\nan alternative to the <code>sortBy</code> prop, <code>sortOptions</code> creates a sorting view in the ResultList component’s UI. Each array element is an object that takes three keys:</p>\n<ul>\n<li><code>label</code> - label to be displayed in the UI.</li>\n<li><code>dataField</code> - data field to use for applying the sorting criteria on.</li>\n<li><code>sortBy</code> - specified as either <code>asc</code> or <code>desc</code>.</li>\n</ul>\n</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 20.</li>\n<li><strong>loader</strong> <code>String or JSX</code> [optional]<br>\ndisplay to show the user while the data is loading, accepts <code>String</code> or <code>JSX</code> markup.</li>\n<li><strong>showResultStats</strong> <code>Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code>true</code>.</li>\n<li><strong>onResultStats</strong> <code>Function</code> [optional]<br>\nreturns <code>total_results</code> and <code>time_taken</code>.This callback function prop is called for each new results.</li>\n<li><strong>renderResultStats</strong> <code>Function</code> [optional]<br>\nrenders custom result stats using a function that takes two parameters for <code>total_results</code> and <code>time_taken</code> and expects it to return a string or JSX.</li>\n<li><strong>react</strong> <code>Object</code><br>\na dependency object defining how this component should react based on the state changes in the sensor components. You can read more about how to specify this prop over <a href="/reactive-manual/advanced/react.html">here</a>.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nwhen set adds the current page number to the url. Only works when <code>pagination</code> is enabled.</li>\n<li>\n<p><strong>onData</strong> <code>Function</code> [optional]<br>\nreturns a card element object to be rendered based on the <code>res</code> data object. This callback function prop is called for each data item rendered in the <strong>ResultList</strong> component’s view.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>onData<span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      image<span class="token punctuation">:</span> res<span class="token punctuation">.</span>image<span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> res<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n      description<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>$<span class="token punctuation">{</span>res<span class="token punctuation">.</span>price<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>room_type<span class="token punctuation">}</span> · <span class="token punctuation">{</span>res<span class="token punctuation">.</span>accommodates<span class="token punctuation">}</span> guests<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n      url<span class="token punctuation">:</span> res<span class="token punctuation">.</span>listing_url<span class="token punctuation">,</span>\n      containerProps<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        onMouseEnter<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'😁\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        onMouseLeave<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'🙀\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The return format for the callback function is an object with <code>image</code>, <code>image_size</code>, <code>title</code>, <code>description</code> and <code>url</code> fields.</p>\n</li>\n<li><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\napplies a default query to the result component. This query will be run when no other components are being watched (via React prop), as well as in conjunction with the query generated from the React prop. The function should return a query.</li>\n<li><strong>onNoResults</strong> <code>String or JSX</code> [optional]<br>\nshow custom message or component when no results founds.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/ResultList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ResultList</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>resultsInfo</code></li>\n<li><code>sortOptions</code></li>\n<li><code>resultStats</code></li>\n<li><code>noResults</code></li>\n<li><code>button</code></li>\n<li><code>pagination</code></li>\n<li><code>list</code></li>\n<li><code>listItem</code></li>\n<li><code>image</code></li>\n<li><code>title</code></li>\n<li><code>poweredBy</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>ResultList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>render individual result data items using <code>onData</code>,</li>\n<li>specify how results should be filtered using <code>react</code>.</li>\n<li>connect with external interfaces using <code>onQueryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ResultList\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token comment">// specify any number of custom styles.</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  <span class="token comment">// register a callback function with the `onData` prop.</span>\n  onData<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        image<span class="token punctuation">:</span> res<span class="token punctuation">.</span>image<span class="token punctuation">,</span>\n        title<span class="token punctuation">:</span> res<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n        url<span class="token punctuation">:</span> res<span class="token punctuation">.</span>listing_url\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// specify how and which results are filtered using `react` prop.</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"pricingFilter"</span><span class="token punctuation">,</span> <span class="token string">"dateFilter"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">"or"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"searchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS Styles to be applied to the <strong>ResultList</strong> component.</li>\n<li><strong>onData</strong> <code>Function</code> [optional]<br>\na callback function where user can define how to render the view based on the data changes. In <code>ResultList</code>’s case, the expected return format is an object with <code>image</code>, <code>image_size</code>, <code>title</code>, <code>url</code> and <code>description</code> keys.</li>\n<li><strong>target</strong> <code>string</code> [optional]<br>\nThis prop is equivalent to the <code>target</code> attribute of html <code>a</code> tags. It is only valid when <code>url</code> key is present in <code>onData()</code>’s returned object structure. It defaults to <code>_blank</code>.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>ResultList’s</strong> data view.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">onAllData</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> loadMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// return the list to render</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>The <strong>callback</strong> function (<code>loadMoreData</code> here) will only be executed in case of infinite loading.</p>\n</blockquote>\n<ul>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See more stories for ResultList on playground.</p>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Result%20components%2FResultList" target="_blank">ResultList with default props</a></p>',frontmatter:{title:"ResultList",next:"result-components/resultcard.html",prev:"search-components/categorysearch.html",nextTitle:"ResultCard",prevTitle:"Search Components: CategorySearch"},fields:{path:"docs/result-components/ResultList.md",slug:"result-components/resultlist.html"}}},pathContext:{slug:"result-components/resultlist.html"}}}});
//# sourceMappingURL=path---result-components-resultlist-html-6c30ce6838889b9da3f0.js.map