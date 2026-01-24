# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://deluxe-cat-9a74f2.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid with grid-template-areas
- Mobile-first workflow
- Git flow

### What I learned

- I needed to learn how to use git-flow and practice it in a project.

0. git flow init
   I can use a vscode extension to help with the git-flow commands.
   The develop branch is the branch for development.
   The master branch is the branch for production.
   The hotfix branch is used to fix bugs in production.
   The release branch is used to prepare for a new release.

1. git flow feature start feature-name
   This creates a new branch based on the develop branch.
   The feature branch is named `feature/feature-name`.

2. git flow feature finish feature-name
   This merges the feature branch into the develop branch.
   This deletes the feature branch.

3. git flow release start 1.0.0
   This creates a new branch based on the develop branch.
   The release branch is named `release/1.0.0`
   The release branch is used to prepare for a new release.

4. git flow release finish 1.0.0
   This merges the release branch into the master branch.
   This merges the release branch into the develop branch.
   This deletes the release branch.
   This creates a new tag for the release.
   I need to push the tag to the remote repository.

```
git push origin --tags
```

5. git flow hotfix start hotfix-name
   This creates a new branch based on the master branch.
   The hotfix branch is named `hotfix/hotfix-name`.
   The hotfix branch is used to fix bugs in production.

6. git flow hotfix finish hotfix-name
   This merges the hotfix branch into the master branch.
   This merges the hotfix branch into the develop branch.
   This deletes the hotfix branch.
   This creates a new tag for the hotfix.
   I need to push the tag to the remote repository.

```
git push origin --tags
```

The process helped me understand how to use git-flow and how to use it in a project.
It helped in handling the branches and merging them correctly.

**Performance:**  
I also tried to improve performance of the solution by following the lighthouse recommendations.

- I added a preload link for the hero image.
- I converted all images to webp format and used the srcset attribute to serve the appropriate image for the screen size.

This helped reduce content layout shifts and largest contentful paint which are the two main performance issues I had.

I also added several meta tags to improve SEO and social media sharing.

### Continued development

Implement and test other git workflow strategies like [GitHub flow](https://githubflow.github.io/) and [GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html).

### Useful resources

- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.html) - This helped me understand the basics of git-flow

## Author

- Website - [Gwenaël Magnenat](https://gmagnenat.com)
- Frontend Mentor - [@gmagnenat](https://www.frontendmentor.io/profile/yourusername)
- LinkedIn - [@gmagnenat](https://www.linkedin.com/in/gmagnenat)
