# Browser Caching
As you might know, every time your browser loads a website, it downloads all the assets required bythis website.

Each website is different, however, most of them require some JavaScript and some CSS in order towork properly.

Some websites require lots of JavaScript.

Each time the user reloads the page, their browser downloads all those files from the internet

This may become an issue, especially if your customers browse your website using mobile devices with slow internet connection.

Each time they go to a new page, they need to wait several minutes until the page is ready.

Fortunately, there is a solution to this problem and it's called browser caching.

If the file didn't change between the page reloads, your browser can save it in a specific place. This place is called cache.

When you open this page again, browser won't download this file.
It will take this file from cache.
This technique helps to save lots of time and internet traffic.
However, this may lead to another issue.

What if you fix the bug on your website and your JavaScript file has been changed?

If the browser always takes this file from cache, your customers will never get the new version.

Therefore, we need a mechanism for updating the cache.

One of the most popular approaches nowadays is creating a new file with the new name each time you make

a change in your code.

Browsers remember files by name.

Therefore, if the name changes, browsers will download the new file.

Well, it doesn't mean that we need to change the file name manually every time we change our code.
Webpack can do this automatically for us.

---------------------------------------------

One of the best practices is to add MD5 hash to the name of the file.
This MD5 hash depends on the contents of this file.
This way webpack will generate the new file name only if there were some changes inside.

It's easy to explain by example.
Imagine you change something in your CSS code, but you haven't touched your JavaScript code.
In this case, Webpack will generate the new name for your CSS file, but it will use the previous name for the JavaScript file.
During the next page reload, your customers will download the new CSS file, but they will get the JavaScript file from cache.

In order to. For this to work, we just need to add content hash in square brackets to the output file name.
That's it.

Now let's run Webpack in the terminal and check the dist folder.

You see, we have two JavaScript files in the dist folder.

One is called Bundle.js and another one is called bundle dot.

Some strange sequence of characters dot js.

This sequence of characters is MD5 hash and it stays the same if there were no code changes.

Let's run Webpack again and have a look at the dist folder one more time.

I've just run Webpack and we still have this same JavaScript files in the dist folder.

Let's now change something inside our JavaScript code.

Now let's run Webpack again and have a look at the dist folder one more time.

Now we have three JavaScript files in the dist folder.

That's because Webpack generated the new JavaScript file with a different MD5 hash.

Let's remove this line of code.

It was needed just for the demonstration purposes.

By the way, this also works for CSS files.

We just need to add content hash in square brackets to the mini CSS extract plugin.

Let's run Webpack again and have a look at the dist folder.

Now there is another CSS file with MD5 hash as well.
