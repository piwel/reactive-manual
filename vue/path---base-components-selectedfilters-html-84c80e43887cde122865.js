webpackJsonp([82146561664391],{428:function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/6GqSVW2.png" alt="Image to be displayed"></p>\n<p><code>SelectedFilters</code> creates a selectable filter UI view displaying the current selected values from other components. This component is useful for improving selection accessibility of other components.</p>\n<p>Example uses:</p>\n<ul>\n<li>displaying all the user selected facet filters together in the main view area for better accessibility.</li>\n<li>building mobile responsive views where it is not practical to show all the UI components in the main view.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selected-filters</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage with All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selected-filters</span> \n    <span class="token attr-name">clearAllLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Clear filters<span class="token punctuation">"</span></span>\n    <span class="token attr-name">:showClearAll</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li><strong>showClearAll</strong> <code>boolean</code> [optional] (defaults to <code>true</code>)<br>\nWhen set to <code>true</code>, displays an additional button to clear all the filters</li>\n<li><strong>clearAllLabel</strong> <code>string</code> [optional] (defaults to <code>\'Clear All\'</code>)<br>\nSets the label for the clear all button. </li>\n<li><strong>title</strong> <code>string</code> [optional]\nCan be used to set a title</li>\n</ul>\n<p>Most ReactiveSearch filter components have a prop <code>showFilter</code> (defaults to <code>true</code>) which can be used to control whether the component’s selected state appears in the SelectedFilters component. There is also a <code>filterLabel</code> prop which controls how that component is displayed.</p>\n<blockquote>\n<p>Note</p>\n<p>The <code>showFilter</code> and <code>filterLabel</code> prop updates are only reflected if the underlying query of the associated component has changed.</p>\n</blockquote>\n<p>As an example, check <a href="/reactive-manual/vue/basic-components/multilist.html#usage">MultiList usage</a> to see how <code>showFilter</code> and <code>filterLabel</code> can be used.</p>\n<h3 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h3>\n<p><code>SelectedFilters</code> component supports <code>innerClass</code> prop with the following keys:  </p>\n<ul>\n<li><code>button</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>SelectedFilters</code> component can be extended to customize the look and feel with <code>className</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selected-filters</span>\n  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-class<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>slot-scope</strong> ( Default Slot )\nEnables custom rendering for <strong>SelectedFilters</strong> component. It provides an object as a param which contains all the props needed to render the custom selected-filters, including the functions to clear and update the component values.</li>\n</ul>',frontmatter:{title:"SelectedFilters",next:"/list-components/singlelist.html",prev:null,nextTitle:"List Components: SingleList",prevTitle:null},fields:{path:"docs/base-components/SelectedFilters.md",slug:"base-components/selectedfilters.html"}}},pathContext:{slug:"base-components/selectedfilters.html"}}}});
//# sourceMappingURL=path---base-components-selectedfilters-html-84c80e43887cde122865.js.map