webpackJsonp([0x5e1884b0f396],{460:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/1iJbrts.png">\n<img src="https://i.imgur.com/CjPBMdQ.png"></p>\n<p><code>MultiDropdownRange</code> creates a multiple selection dropdown based numeric range UI component.</p>\n<p>Example uses:</p>\n<ul>\n<li>filtering search results by prices in an e-commerce or food delivery experience.</li>\n<li>browsing movies by a ratings filter.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MultiDropdownRange</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PriceSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span>\n  <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MultiDropdownRange</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PriceSensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span>\n  <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Cheap"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Moderate"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Pricey"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span><span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"First Date"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span></span>\n  <span class="token attr-name">defaultSelected</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"Cheap"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Select price range<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view.</li>\n<li><strong>data</strong> <code>Object Array</code><br>\ncollection of UI <code>labels</code> with associated <code>start</code> and <code>end</code> range values.</li>\n<li><strong>defaultSelected</strong> <code>String Array</code> [optional]<br>\npre-select a label from the <code>data</code> array.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nplaceholder to be displayed in the dropdown searchbox. Defaults to “Select a value”.</li>\n<li><strong>innerProps</strong> <code>Object</code> [optional]<br>\nspecifies additional props for the internal components. Accepts an object with the specified keys. Read more about the usage <a href="/reactive-manual/native/advanced/innerprops.html">here</a></li>\n</ul>\n<br />\n<table>\n<thead>\n<tr>\n<th align="right"><strong>Key</strong></th>\n<th align="center"><strong>Explaination</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="right"><code>icon</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#icon-def-headref">Icon</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>checkbox</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#checkbox-headref">CheckBox</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>button</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#button-def-headref">Button</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>header</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#header-def-headref">Header</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>title</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html">Title</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>text</code></td>\n<td align="center"><a href="http://facebook.github.io/react-native/docs/text.html">Text</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n<tr>\n<td align="right"><code>modal</code></td>\n<td align="center"><a href="https://facebook.github.io/react-native/docs/modal.html#docsNav">Modal</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n<tr>\n<td align="right"><code>listView</code></td>\n<td align="center"><a href="https://facebook.github.io/react-native/docs/listview.html">ListView</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<div data-snack-id="@dhruvdutt/multidropdownrange-example" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>\n<p><a href="https://snack.expo.io/@dhruvdutt/multidropdownrange-example" target="_blank">View on Snack</a></p>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>MultiDropdownRange</code> component supports <code>style</code> prop. Read more about it <a href="/reactive-manual/native/advanced/style.html">here</a>.</p>\n<p>It also supports an <code>innerStyle</code> prop with the following keys:</p>\n<ul>\n<li><code>label</code></li>\n<li><code>left</code></li>\n<li><code>button</code></li>\n<li><code>icon</code></li>\n<li><code>right</code></li>\n<li><code>body</code></li>\n<li><code>title</code></li>\n<li><code>checkbox</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/native/advanced/style.html#innerstyle">here</a></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>MultiDropdownRange</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>onValueChange</code> and <code>onQueryChange</code></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>MultiDropdownRange\n  <span class="token operator">...</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// called before the value is set</span>\n      <span class="token comment" spellcheck="true">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment" spellcheck="true">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment" spellcheck="true">// set the state</span>\n      <span class="token comment" spellcheck="true">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>style</strong> <code>Object</code>\nCSS styles to be applied to the <strong>MultiDropdownRange</strong> component.</li>\n<li><strong>customQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>MultiDropdownRange</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for something in the MultiDropdownRange.</li>\n<li><strong>onQueryChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n</ul>',frontmatter:{title:"MultiDropdownRange",next:"components/datepicker.html",prev:"components/singledropdownrange.html",nextTitle:"DatePicker",prevTitle:"SingleDropdownRange"},fields:{path:"docs/components/MultiDropdownRange.md",slug:"components/multidropdownrange.html"}}},pathContext:{slug:"components/multidropdownrange.html"}}}});
//# sourceMappingURL=path---components-multidropdownrange-html-a9ca8db6cb8a0df9e575.js.map