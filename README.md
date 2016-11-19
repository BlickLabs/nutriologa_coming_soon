# comingsoon_base
## Development requirements
- <a href="https://nodejs.org/es/">NodeJS</a> (you can use <a href="https://github.com/creationix/nvm/blob/master/README.markdown">nvm</a> to avoid common issues while installing node)
- <a href="https://www.npmjs.com/package/grunt-cli">Grunt client</a>
- <a href="https://www.npmjs.com/package/stylus">Stylus</a>

## Implementation
1. Install all node dependencies
<pre>npm install</pre>

2. Run grunt to compile the .styl file
<pre>grunt</pre>

3. Change img/logo.png and img/mainbg.jpg files
4. Set countdown date by editing js/init.js on line 67 (format: MM/DD/AAAA)
5. Change typed text by editing js/init.js on line 123
6. Make all text changes you need in index.html
7. Edit index.html on line 92 to set the proper newsletter url 
8. Choose a theme colour (dark and light) by commenting/uncommenting code portions in styl/style.styl file (lines 20-28)
9. Depending on the theme you chose, edit index.html on line 129/130 to use the proper blick logo image
10. If you need to modify the opacity of the background dark layer, edit styl/style.styl on line 38
11. If you need to modify the padding-top of cover text, edit styl/style.styl on line 252
12. (If necessary) Make any other styles modifications by editing styl/style.styl
