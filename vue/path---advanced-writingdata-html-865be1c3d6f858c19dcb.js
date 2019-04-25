webpackJsonp([0xd1b54f89ab3c],{460:function(a,e){a.exports={data:{markdownRemark:{html:'<p>Writing and updating data is a common operation that is triggered from app UIs.</p>\n<p><a href="https://opensource.appbase.io/reactivesearch/">ReactiveSearch</a> offers components for creating read based search UIs.</p>\n<p>In this post, we will talk about a few ways to perform Create, Update and Delete operations on the data.</p>\n<h2 id="appbase-js"><a href="#appbase-js" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>appbase-js</h2>\n<p><a href="https://github.com/appbaseio/appbase-js"><code>appbase-js</code></a> is the javascript library from appbase.io that runs on Node.JS, UMD, React and React Native environments.</p>\n<p>We recommend using appbase-js in a <a href="http://expressjs.com/en/guide/using-middleware.html">Node.JS middleware</a> to perform the write operations.</p>\n<blockquote>\n<p>Note</p>\n<p>It is important to perform write operations from a secure environment, as you don’t want to expose the write credentials publicly.</p>\n</blockquote>\n<h2 id="rest-api"><a href="#rest-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>REST API</h2>\n<p>If your middleware is written in a different language, you can easily use the REST API endpoints to write data into appbase.io or Elasticsearch. An example PUT endpoint for indexing a new (or overwriting an existing) document would look like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>curl -XPUT <span class="token variable">$host</span>/<span class="token variable">$app</span>/<span class="token variable">$type</span>/<span class="token variable">$doc_id</span> -d <span class="token string">\'{\n   "msg": "Hello from ReactiveSearch",\n   "from": "A middleware server"\n}\'</span>\n</code></pre>\n      </div>\n<p>Full REST API is available at <a href="https://rest.appbase.io">rest.appbase.io</a>.</p>',frontmatter:{title:"Writing and Editing Data",next:"typescript.html",prev:"analytics.html",nextTitle:"Typescript Support",prevTitle:"Search and Click Analytics"},fields:{path:"docs/advanced/WritingData",slug:"advanced/writingdata.html"}}},pathContext:{slug:"advanced/writingdata.html"}}}});
//# sourceMappingURL=path---advanced-writingdata-html-865be1c3d6f858c19dcb.js.map