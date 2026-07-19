
# What is this?

Hey! If you see this, you're poking around the docs-as-code repository for my persional website.

## Becoming docs-as-code

After years of dealing with WordPress, I'm in the process of rebuilding my site using docs-as-code by way of [Mintlify](https://www.mintlify.com). Yes, it's messy. It's going to be a gradual work in progress.

# Contributions

Generally, this is a one-person operation. That said, I'm only one person and still human. 

## Bugs & Suggestions
 
See a bug? Have a suggestion? [Open an issue.](https://github.com/KytheraOA/anevern-public/issues)

# Style Guide

## General

I take a lot of liberties, but these are the foundation of how I write:
 * General style: [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)
 * Spelling: [Merriam-Webster](https://www.m-w.com/)

## Fonts
* [Agdasima](https://fonts.google.com/specimen/Agdasima) for body text
* [Amatic SC](https://fonts.google.com/specimen/Amatic+SC) for headings
  * Use _italic_ (`_italic_`) for basic emphasis 
  * Use **bold** (`**bold**`) to highlight key terms, references to UI elements, etc.
    * Combining **_bold and italic_** is only acceptable in very rare instances that require extra emphasis
  * Avoid <u>underline</u> (`<u>underline</u>`) since underlined text looks like a clickable link; reserve it for items that need extreme emphasis

## Colors 

These are the main colors used on the site: 
* Purple: #8576c6
  * Sidebar headings, link hover, link underline
* #a2a2a4 - text-gray-400
  * Body text color
* rgba(0, 0, 0, 0.35)
  * Background color overlay (over backgroud image, behind text)
* #0b0b0f 

These are extra colors I'm recording for reference. 
<details>
<summary>Click here to expand</summary>
* #ffffff1a | rgb(255 255 255 / 10%)
* 00000080 | rgb(0 0 0 / 50%)
* #d1d5dc
* #f6f3f4 
* #99a1af
* #747376 - text-gray-500
* #424244
* #4a5565
* #364153
* #29282b - Border color
</details>

## Images

* Use absolute URLs. All of my images are uploaded to my website. Using absolute URLs means the same images (and subdirectories) aren't regenerated every time I run `mintlify export`.