webpackJsonp([72971155298543],{449:function(s,n){s.exports={data:{markdownRemark:{html:'<p>Recipe for rendering custom suggestions with <code>DataSearch</code> and <code>CategorySearch</code> components using the <code>renderSuggestions</code> prop.</p>\n<p>ReactiveSearch uses the wonderful <a href="https://github.com/paypal/downshift">downshift</a> for rendering dropdowns and <code>renderSuggestions</code> prop provides great extensibility for custom suggestions rendering. <code>renderSuggestions</code> is a <a href="https://reactjs.org/docs/render-props.html">render function</a> which receives some parameters which you may use to build your own custom suggestions rendering</p>\n<h2 id="custom-suggestions-for-datasearch"><a href="#custom-suggestions-for-datasearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Suggestions for DataSearch</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>DataSearch\n    <span class="token operator">...</span>\n    renderSuggestions<span class="token operator">=</span><span class="token punctuation">{</span>\n        <span class="token punctuation">(</span><span class="token punctuation">{</span>\n            currentValue<span class="token punctuation">,</span>       <span class="token comment">// the current value in the search</span>\n            isOpen<span class="token punctuation">,</span>             <span class="token comment">// isOpen from downshift</span>\n            getItemProps<span class="token punctuation">,</span>       <span class="token comment">// item props to be passed to suggestions</span>\n            highlightedIndex<span class="token punctuation">,</span>   <span class="token comment">// index value which should be highlighted</span>\n            suggestions<span class="token punctuation">,</span>        <span class="token comment">// unmodified suggestions from Elasticsearch</span>\n            parsedSuggestions<span class="token punctuation">,</span>  <span class="token comment">// suggestions parsed by ReactiveSearch</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> JSX\n    <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Check out the <a href="https://opensource.appbase.io/playground">example</a> on playground.</p>\n<p>The <code>getItemProps</code> provides some props that you should pass to your suggestions for them to work properly with downshift. The paramter should be an object with key <code>item</code> which should have a <code>value</code> field. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getItemProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> item<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> suggestion <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The <code>suggestions</code> parameter receives all the unparsed suggestions from elasticsearch, however <code>parsedSuggestions</code> are also passed which can also be used for suggestions rendering.</p>\n<h2 id="custom-suggestions-for-categorysearch"><a href="#custom-suggestions-for-categorysearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Suggestions for CategorySearch</h2>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>CategorySearch\n    <span class="token operator">...</span>\n    renderSuggestions<span class="token operator">=</span><span class="token punctuation">{</span>\n        <span class="token punctuation">(</span><span class="token punctuation">{</span>\n            currentValue<span class="token punctuation">,</span>       <span class="token comment">// the current value in the search</span>\n            isOpen<span class="token punctuation">,</span>             <span class="token comment">// isOpen from downshift</span>\n            getItemProps<span class="token punctuation">,</span>       <span class="token comment">// item props to be passed to suggestions</span>\n            highlightedIndex<span class="token punctuation">,</span>   <span class="token comment">// index value which should be highlighted</span>\n            suggestions<span class="token punctuation">,</span>        <span class="token comment">// unmodified suggestions from Elasticsearch</span>\n            parsedSuggestions<span class="token punctuation">,</span>  <span class="token comment">// suggestions parsed by ReactiveSearch</span>\n            categories<span class="token punctuation">,</span>         <span class="token comment">// all categories for the suggestions</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> JSX\n    <span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Check out the <a href="https://opensource.appbase.io/playground">example</a> on playground.</p>\n<p>All the parameters received are very similar to the <code>DataSearch</code> besides <code>categories</code> which receives all the categories for the current query as an array of objects having the <code>key</code> attribute and the <code>doc_count</code> so you can compose a custom UI accordingly.</p>',frontmatter:{title:"Custom Suggestions",next:"advanced/customquery.html",prev:"theming/class.html",nextTitle:"Custom Query",prevTitle:"Theming: ClassName Injection"},fields:{path:"docs/advanced/CustomSuggestions.md",slug:"advanced/customsuggestions.html"}}},pathContext:{slug:"advanced/customsuggestions.html"}}}});
//# sourceMappingURL=path---advanced-customsuggestions-html-89deca219e72d9e17c89.js.map