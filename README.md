# How to Scrape a website with Node.js?

After publishing [this Gist](https://gist.github.com/diogojorgebasso/011fd4c3df2af764826b59205fbdda67); contacting some friends, they said that it would be nice to have public access, with LICENSE and a more detailed README on how to actually scrape a website, thus, here is the repo.

## Gaining access to this software and installing packages

First of all, **fork** this repo and clone it in you local machine.

As I utilized yarn, you have to navigate to this folder and type in the terminal `yarn install`, witch take some time because it is installing chromium -if you don't already have it.

After the install process, go to `index.js` and change the **urls array** with the site(s) that you want to clone; then, change the **"output"** string with the desire folder name that you want the HTML, CSS and JS files to go.

Finally, type `yarn install` in the terminal to run the program.

That's it, all the process is done in the backend; just wait a little time.

## LICENSE

The software is licensed under [MIT](LICENSE)
