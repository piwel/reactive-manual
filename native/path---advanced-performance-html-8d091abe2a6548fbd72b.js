webpackJsonp([82108409316817],{451:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Good performace is very critical to mobile apps and websites. With emerging technologies, it is of paramount importance to ship highly performant applications. Users don’t care what technologies are used to build the products they use, they just want things to work smoothly.</p>\n<p>Often while building apps with React Native, you will run into performance issues here and there. The key thing to note here is that React Native is not the solution of every problem. While it works\nout of the box for a range of use-cases, you should know that if your mobile app requires too much hardware interaction, you’d be better off writing native solutions (i.e. Java, Objective C or Swift) for the intensive parts of your application. For most cases, you will readily find open-source solutions. </p>\n<p>A good starting guide to understand and improving performance in your app is the <a href="https://facebook.github.io/react-native/docs/performance.html">official react native docs</a>, which goes in details about profiling, measuring and improving performance in React Native apps.</p>\n<p>For starters, let’s go over the architecture briefly:</p>\n<p>We have three things: </p>\n<ul>\n<li>JavaScript core - where your react native (js) code runs</li>\n<li>Bridge</li>\n<li>Native - where native modules and APIs reside</li>\n</ul>\n<p>Bridge, as the name suggests, helps in the data (message) transactions between JavaScript core and Native. It enables your JavaScript code to talk to the native modules and interact with the device API. Since JavaScript is single-threaded, it is recommended to move the heavy computational tasks to native, and ultimately reducing the transactions at the bridge. This is the whole fundamental logic to improve performance in your React Native apps.</p>\n<p>In this guide, we will discuss some tips that you can follow to improve the performance of your app:</p>\n<h3 id="1-the-ultimate-goal"><a href="#1-the-ultimate-goal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. The ultimate goal</h3>\n<p>For everything to work smoothly, you need to make sure that your application display is being rendered at 60 frames per second, i.e. you have 16.67ms to do all of the work needed to generate the static image (frame) that the user will see on the screen at any particular interval. </p>\n<h3 id="2-profile-everything"><a href="#2-profile-everything" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Profile everything</h3>\n<p>You can use the built-in profiler to get detailed information about work done in the JavaScript thread and main thread side-by-side. Read more about it <a href="https://facebook.github.io/react-native/docs/performance.html#profiling">here</a>.</p>\n<h3 id="3-spy-messagequeue"><a href="#3-spy-messagequeue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Spy MessageQueue</h3>\n<p>Get logs from the JS bridge by enabling SPY mode from MessageQueue module: <code>MessageQueue.spy(true)</code>. Refer <a href="https://medium.com/@rotemmiz/react-native-internals-a-wider-picture-part-1-messagequeue-js-thread-7894a7cba868">this article</a> for details.</p>\n<h3 id="4-find-the-culprit-and-move-it-to-native"><a href="#4-find-the-culprit-and-move-it-to-native" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Find the culprit and move it to native</h3>\n<p>Use remote debugger and chrome profiler to find the tasks that are taking too long and hindering performance in your app, and see if they can be fixed. If not, offload them to native and compute via Native modules.</p>\n<h3 id="5-production-builds"><a href="#5-production-builds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Production builds</h3>\n<p>Always test on real devices befor you publish to production. Sometimes, toggling the <code>development</code> mode also helps.</p>',frontmatter:{title:"Performance Tips",next:"advanced/innerprops.html",prev:"advanced/reactivecomponent.html",nextTitle:"innerProps",prevTitle:"ReactiveComponent"},fields:{path:"docs/advanced/Performance.md",slug:"advanced/performance.html"}}},pathContext:{slug:"advanced/performance.html"}}}});
//# sourceMappingURL=path---advanced-performance-html-8d091abe2a6548fbd72b.js.map