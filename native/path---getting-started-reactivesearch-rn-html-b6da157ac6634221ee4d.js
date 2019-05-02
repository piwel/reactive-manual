webpackJsonp([21164826159626],{440:function(n,a){n.exports={data:{markdownRemark:{html:'<p>In this section I’ll use the <code>react-native-cli</code> instead of expo to setup the dev environment. You can follow a similar approach if you wish to use ReactiveSearch outside expo environment. First lets get started by installing <code>react-native-cli</code> by following the instructions from the <a href="https://facebook.github.io/react-native/docs/getting-started.html">react-native docs</a> for your OS. Now we can follow the same steps as we did for expo setup.</p>\n<h3 id="step-0-install-reactivesearch-native"><a href="#step-0-install-reactivesearch-native" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 0: Install ReactiveSearch Native</h3>\n<p>If you have an existing project, you can install <a href="https://www.npmjs.com/package/@appbaseio/reactivesearch-native"><code>reactivesearch-native</code></a> module using yarn or npm.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add @appbaseio/reactivesearch-native\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @appbaseio/reactivesearch-native\n</code></pre>\n      </div>\n<p>If you are starting from scratch, follow the next steps on getting started with reactivesearch-native.</p>\n<h3 id="step-1-create-boilerplate-with-rncli"><a href="#step-1-create-boilerplate-with-rncli" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Create Boilerplate with RNCLI</h3>\n<p>We will create a search UI based on a <em>books dataset</em> with ReactiveSearch components.</p>\n<p><img src="https://imgur.com/zAXd5uQ.png" alt="Image"></p>\n<p><strong>Caption:</strong> Final image of how the app will look.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>react-native init myproject <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myproject\n</code></pre>\n      </div>\n<p>Install the <code>@appbaseio/reactivesearch-native</code> repo.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add @appbaseio/reactivesearch-native\n</code></pre>\n      </div>\n<h3 id="step-2-adding-the-first-component"><a href="#step-2-adding-the-first-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Adding the first component</h3>\n<p>Lets add our first ReactiveSearch component: <a href="/reactive-manual/native/getting-started/reactivebase.html">ReactiveBase</a>, it is a backend connector where we can configure the Elasticsearch index / authorization setup.</p>\n<p>We will demonstrate creating an index using <a href="https://appbase.io">appbase.io</a> service, although you can use any Elasticsearch backend within ReactiveBase.</p>\n<p><img src="https://i.imgur.com/r6hWKAG.gif" alt="create an appbase.io app"></p>\n<p><strong>Caption:</strong> For the example that we will build, the app is called <strong>good-books-ds</strong> and the associated read-only credentials are <strong>nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d</strong>. You can browse and clone the dataset into your own app from  <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAKJAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsyzhBoa6J5YHVVPvvStg3duFL_9lBQxNAUEiS2LxrmQIi48IYsLycilGizdEqIf-Z3FUOIdIqHULMVrBqKtL5qUJx1gsOpt0WbuAhQS8qMoK8IdlqoG0tr-8UHi3sau8zMqY64fzpXCehrrPI4SNk8VTbiMsIZhduWAX4hCATwCBWfvrJqfAoiqKGt9zyTfsxLU7CbxGxE6__je7GeiC7UaPdD8YDeYC7eRxv-8JF1j3ysqY_Lkqc6hZAtUm9dN1Mg7O2uJ1MJxZyZWCmnz3ovLxz81T3C6KJZXI0OFjB5ll22UJm0iEaxN9NgY8yT9XOuK1k_90Fp4A">here</a>.</p>\n<p>Lets update our <code>App.js</code> file to add ReactiveBase component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n        <span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>good-books-ds<span class="token punctuation">"</span></span>\n        <span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Hello ReactiveSearch<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now start the packager by running the <code>yarn start</code> command. In a different terminal start your emulator/device by running either <code>react-native run-ios</code> or <code>react-native run-android</code>. While you wait for the packager to finish, get some coffee :)</p>\n<p><img src="https://imgur.com/yEVncXC.png" alt="Screenshot"></p>\n<h3 id="step-3-adding-filter-and-result-components"><a href="#step-3-adding-filter-and-result-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Adding Filter and Result Components</h3>\n<p>For this app, we will be using <a href="/reactive-manual/native/components/datasearch.html">DataSearch</a> component for filtering the dataset and <a href="/reactive-manual/native/components/reactivelist.html">ReactiveList</a> component for showing the search results.</p>\n<p>Lets add them within the ReactiveBase component. But before we do that, lets look at the important props for each.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>searchbox<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n    <span class="token string">\'original_title\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'original_title.search\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'authors\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'authors.search\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search for books<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>The <a href="/reactive-manual/native/components/datasearch.html"><strong>DataSearch</strong></a> component we describe above creates a searchbox UI component that queries on the specifield <code>dataField</code>(s) in the dataset.</p>\n<p>Next, we need a component to show the matching results. <a href="/reactive-manual/native/components/reactivelist.html"><strong>ReactiveList</strong></a> does exactly this.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>results<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>original_title<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token string">"searchbox"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>View style<span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>result<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token punctuation">:</span> res<span class="token punctuation">.</span>image <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>original_title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>authors<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>The <code>react</code> prop here specifies that it should construct a query based on the current selected values of searchbox and ratingsfilter components. Every time the user changes the input value, a new query is fired — you don’t need to write a manual query for any of the UI components here, although you can override it via <code>customQuery</code> prop.</p>\n<p>ReactiveSearch uses <a href="https://docs.nativebase.io/docs/GetStarted.html">native-base</a> which uses some fonts which can be included by running (check <a href="https://github.com/GeekyAnts/NativeBase/issues/72">this</a> issue if you are running into problems related to fonts):</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>react-native <span class="token function">link</span> react-native-vector-icons\n</code></pre>\n      </div>\n<p>Now, we will put all the things together to create the final view. If you’re running into issues try restarting the packager with <code>--reset-cache</code> flag:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn start --reset-cache\n</code></pre>\n      </div>\n<p>The final app will look like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  StyleSheet<span class="token punctuation">,</span>\n  Text<span class="token punctuation">,</span>\n  View<span class="token punctuation">,</span>\n  ScrollView<span class="token punctuation">,</span>\n  Image\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  ReactiveBase<span class="token punctuation">,</span>\n  DataSearch<span class="token punctuation">,</span>\n  ReactiveList\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n        <span class="token attr-name">app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>good-books-ds<span class="token punctuation">"</span></span>\n        <span class="token attr-name">credentials</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n              <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>searchbox<span class="token punctuation">"</span></span>\n              <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n                <span class="token string">\'original_title\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'original_title.search\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'authors\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'authors.search\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search for books<span class="token punctuation">"</span></span>\n            <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n              <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>results<span class="token punctuation">"</span></span>\n              <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>original_title<span class="token punctuation">"</span></span>\n              <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n                and<span class="token punctuation">:</span> <span class="token string">"searchbox"</span>\n              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n                <span class="token operator">&lt;</span>View style<span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>result<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">source</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token punctuation">:</span> res<span class="token punctuation">.</span>image <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>item<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>original_title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>authors<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  container<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    padding<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    marginTop<span class="token punctuation">:</span> <span class="token number">25</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  image<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">100</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  result<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexDirection<span class="token punctuation">:</span> <span class="token string">\'row\'</span><span class="token punctuation">,</span>\n    width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n    margin<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    alignItems<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  item<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexDirection<span class="token punctuation">:</span> <span class="token string">\'column\'</span><span class="token punctuation">,</span>\n    paddingLeft<span class="token punctuation">:</span> <span class="token number">10</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  title<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fontWeight<span class="token punctuation">:</span> <span class="token string">\'bold\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you have followed along so far, you should be able to see the final app:  </p>\n<p><img src="https://imgur.com/zAXd5uQ.png" alt="Image"></p>\n<p>The above code is available in <a href="https://github.com/appbaseio-apps/reactivesearch-native-starter-rncli">this</a> github repo.</p>\n<p>In the next section we explain about <strong>importing data</strong>.</p>',
frontmatter:{title:"ReactiveSearch with React Native CLI",next:"getting-started/data.html",prev:"getting-started/reactivesearch.html",nextTitle:"Importing Data",prevTitle:"ReactiveSearch Quickstart"},fields:{path:"getting-started/withrncli.md",slug:"getting-started/reactivesearch-rn.html"}}},pathContext:{slug:"getting-started/reactivesearch-rn.html"}}}});
//# sourceMappingURL=path---getting-started-reactivesearch-rn-html-b6da157ac6634221ee4d.js.map