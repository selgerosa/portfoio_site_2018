# AR589 Starter Project

This starter project is made to get you up and running quickly. It includes [Tachyons](http://tachyons.io), and a custom made `toggleClass` JavaScript function that you can learn how to use in the comments of the `/javascript/toggleClass.js` file.

## Getting Started

To use this starter, simply [download it](https://github.com/AR589/starter/archive/master.zip). Be sure to rename the folder and make it a Git repository before you start working.

## Starting a Server

When working you should always start a local server so you can be sure that all of your links and image paths will work correctly when put you put your site on a web server. The local server only needs to be running while you're working — it is specific to your computer.

If you're using the [Atom](http://atom.io) code editor, install the [atom-live-server package](https://atom.io/packages/atom-live-server). If you're not sure how to install packages in Atom, you can [learn how in the documentation](https://flight-manual.atom.io/using-atom/sections/atom-packages/).

## Where to Code

### HTML

Your "home page" is `index.html`. You can as many `.html` documents to your project as you like.

### CSS

Write your CSS styles in `/css/main.css`. All styles written there will override the included Tachyons styles.

### JavaScript

Write your JavaScript in `/javascript/main.js`.

## Using Git

You should use the [Git](https://git-scm.com) version control system to keep track of changes to your project. Using Git also gives you the freedom to test out design ideas with Git's [branch](https://www.atlassian.com/git/tutorials/using-branches) feature, share our code with [GitHub](https://github.com), and easily publish our work on the internet with services like [Netlify](https://www.netlify.com).

To create a Git repository, open Terminal.app and navigate to your project folder. Then type the following command into Terminal:

``` shell
git init
```

Committing is akin to "saving" a file, but commits refer to a group of changes that may occur across multiple files.

You should commit as frequently as you can, but typically when you're at a stopping point on a small piece of work on your project. The process is three steps:

### Step 1: Stage your changes

Tell Git to "stage" all the files that have changed. When a file is "staged" it will be included in the next commit you make. In Terminal, run the following command: 

```shell
git add --all
```

### Step 2: Commit your changes

"Committing" in Git is like taking a snapshot of your project. You can view past commits and roll back to them if necessary. We attach messages to commits so we can keep track of what we've done, like so:

```shell
git commit --message "Added index.html"
```

### Step 3: Push to GitHub

The final step is to "push" your changes to GitHub. But before we can do that we need to tell GitHub how to receive our pushes. To do that we need to sign in to GitHub and create a [new repository](https://github.com/new). Your GitHub repo should have the same name as your project folder on your computer.

Then follow the directions to "push an existing repository from the command line." There are two commands that you need to run individually. You only need to follow these steps once:

```shell
# First: Be sure to replace YOUR_USERNAME and YOUR_REPO_NAME
# with the correct information from GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Second
git push -u origin master
```

Once your repo is set up, you can push your changes to git hub with the following command:

```shell
# If you've already connected your repo to GitHub
git push
```


