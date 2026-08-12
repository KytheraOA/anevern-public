# Anevern Style Guide

To keep the style, tone, and formatting of my site consistent, I use this as my style guide.

## General

I take a lot of liberties, but these are the foundation of how I write:
 * General style: [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)
   * _Always_ use serial commas. I will die on this hill.
   * Em dashes `—` are perfectly acceptable if not used in excess
     * Em dash spacing is closed (no spaces): `just like this—no spaces—get it?`
 * Spelling: [Merriam-Webster](https://www.m-w.com/)
   * For basic English, use M-W. For slang, dialects (including lolspeak), and intentional misspellings, use your best judgment.

## Fonts

* [Agdasima](https://fonts.google.com/specimen/Agdasima) for body text
* [Amatic SC](https://fonts.google.com/specimen/Amatic+SC) for headings
  * Use _italic_ (`_italic_`) for basic emphasis 
  * Use **bold** (`**bold**`) to highlight key terms, references to UI elements, etc.
    * Combining **_bold and italic_** is only acceptable in very rare instances that require extra emphasis
  * Avoid <u>underline</u> (`<u>underline</u>`) since underlined text looks like a clickable link; reserve it for items that need extreme emphasis

## Colors 

These are the main colors used on the site: 
* Purple: #8576c6 - Sidebar headings, link hover, link underline
* Gray-400: #a2a2a4 - Body text color
* Black, 35% transparency: rgba(0, 0, 0, 0.35) - Background color overlay (over backgroud image, behind text)
* Dark Gray - #0b0b0f - Extra background color 

These are extra colors I'm recording for reference: 
<details>
<summary><b>Click here to expand</b></summary>

<ul>
<li> #ffffff1a | rgb(255 255 255 / 10%)<br>
<li> 00000080 | rgb(0 0 0 / 50%)<br>
<li> #d1d5dc<br>
<li> #f6f3f4<br>
<li> #99a1af<br>
<li> #747376 - text-gray-500<br>
<li> #424244<br>
<li> #4a5565<br>
<li> #364153<br>
<li> #29282b<br>
</ul>
</details>

## `GalleryCard` Component
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)  

I used [Rovo](https://www.atlassian.com/software/rovo) to help me build a React component for this: `GalleryCard.tsx`. This creates a responsive grid with 3 columns of gallery "cards" with adjustable thumbnail images. Images open in a lightbox that includes the image metadata, with back, next, and close buttons.

* Import the component on a gallery page (immediately below the frontmatter, before the page content) with `import GalleryCard from '/snippets/GalleryCard.tsx';`
* To start a new gallery grid, use:
```md
<GalleryCard 
  items={[
    ... //Add all the items here
  ]} 
/>
```

* Here's the template to use for gallery items:
```md
{
  title: string;
  image: string;
  alt: string;
  date: string;
  media: string;
  description: string;
  focalPoint: 'top' | 'center' | 'bottom' | 'left' | 'right';
}
```

* `description` and `focalPoint` are optional.
* `focalPoint` accepts `'top'`, `'center'`, `'bottom'`, `'left'`, `'right'` and `'X% y%'`

<details>
<summary>How to use `focalPoint` percentage...</summary>

The `focalPoint` value accepts two percentages: `"X% Y%"` where:
* X% = horizontal position (0% = far left, 50% = center, 100% = far right)
* Y% = vertical position (0% = very top, 50% = center, 100% = very bottom)

**Example:**
* `"50% 20%"` — center horizontally, near the top
* `"30% 50%"` — slightly left of center, halfway down
* `"50% 80%"` — center horizontally, near the bottom

**Sample code:**
```md
{
  title: "Portrait",
  image: "/images/portrait.jpg",
  media: "Ink",
  date: "2024",
  focalPoint: "50% 20%"  // Center horizontally, near the top
}
```

**Cheat sheet:**
| Subject position    | `focalPoint` value |
| ---------------------| --------------------|
| Top center          | "50% 10%"          |
| Top left            | "20% 10%"          |
| Middle center       | "50% 50%"          |
| Bottom center       | "50% 90%"          |
| Face in upper third | "50% 25%"          |
</details>

* To add a link in an image description, use this format within the description text: 
```md
  description: (
    <span>
      Text <a href="URL" target="_blank" onClick={(e) => e.stopPropagation()} className="border-b border-purple-400 hover:[border-bottom-width:2px]">link text</a> text
    </span>
  )
```

A page can have multiple gallery grids (e.g., to break it into sections with headings). The back/next navigation buttons will go through every image on the page, uninterrupted by the breaks. 

> [!NOTE] 
> The gallery grid will _always_ be left-aligned, so a row with 1 or 2 images instead of 3 will be left-aligned.

## Information Architecture

<details>
<summary>View annotated file structure</summary>

`-/`  
`├── etc/`  
`│   ├── about.mdx` - “About Me” page  
`│   ├── bluesky.mdx` - (redirects to Bluesky)  
`│   ├── discord.mdx` - (redirects to Discord)  
`│   ├── shop.mdx` - Index of user’s online shops & storefronts  
`│   ├── support.mdx` - Subscription info (Patreon & Ko-fi)  
`│   ├── tips.mdx` - Links to options for tipping  
`│   └── twitch.mdx` - (redirects to Twitch)  
`├── galleries/` - Artwork is organized into galleries according to topic  
`│   ├── crow-and-gargoyle.mdx`  
`│   ├── fan-art.mdx`  
`│   ├── fantasy-art.mdx`  
`│   ├── miniatures.mdx`  
`│   ├── published-work.mdx`  
`│   ├── sca.mdx`  
`│   └── sketchbook.mdx`  
`├── images/` - Images are stored in the local repo and uploaded to the web host, but NOT stored in the public GitHub repo. Remote folder: `http://www.anevern.com/images/` - (Each dir has an index file that redirects to the homempage)  
`│   ├── anevern/` (Reserved for specific original characters from a specific setting)  
`│   ├── crow-and-gargoyle/`  
`│   ├── fan-art/`  
`│   ├── fantasy-art/`  
`│   ├── published-work/`  
`│   ├── sca/`  
`│   ├── sketchbook/`  
`│   ├── social-icons/`  
`│   ├── ui-elements/` - Exactly what it says on the tin  
`│   │   ├── 404.jpg` - "princess in nother castle" cat  
`│   │   ├── bg-dark.png` - Main background image  
`│   │   ├── featured.png` - Background of header  
`│   │   └── footer-gradient.png` - Background of footer  
`│   └── index.mdx` - Gallery index page (in case the user ever somehow lands here)  
`├── snippets/` - Reusable snippets and React components are stored here  
`│   ├── 404.mdx` - Alternate 404 page (over-engineered)  
`│   ├── construction.mdx` - "Under construction"  
`│   ├── galleries.mdx` - Snippet that inserts a gallery index wherever I put it  
`│   └── GalleryCard.tsx` - Custom React component  
`├── .gitignore` - Standard .gitignore file  
`├── .mintignore` - Mintlify-specific file that tells the compiler what to ignore when generating a static site build  
`├── 404.mdx` - Custom 404 page  
`├── CODE_OF_CONDUCT.md` - CoC for GitHub repo  
`├── CONTRIBUTING.md` - Contributing guidelines for GitHub repo  
`├── docs.json` - Contains site structure, metadata, etc.  
`├── favicon.svg` - Site favicon  
`├── footer.js` - Custom footer that adds copyright declaration and link to public GitHub repo  
`├── index.mdx` - Site landing page  
`├── LICENSE.md` - License info for the GitHub repo  
`├── STYLE_GUIDE.md` - Style guide for the Mintlify site  
`├── style.css` - CSS for customizing Mintlify  
`└── README.md` - Specifically for the GitHub repo, explaining what the repo contains, purpose, etc.  

Plus some assorted scripts, reference docs, and "note-to-self" files that are not shared.
</details>

## Glossary (Word List)

List of characters, places, and other things. Recorded here for consistency (and additional context for the things).

* **Anevern**
  * Proper noun. Imaginary location. Used both as a specific location and general reference for the "world" certain original characters come from.

* **Crow (character)**
  * Proper noun _only_ when referring to the eponymous crow of "[Crow & Gargoyle](https://www.anevern.com/galleries/crow-and-gargoyle/)". They/them pronouns.
  * Examples: "Gary's best friend is a crow." "This is Crow. They are a crow."
  * Characterization: Too smart for their own good. Seems serious and stuffy, but is in fact very silly and cares deeply about their friends.

* **Gary**
  * Proper noun. Gary is a gargoyle. They are agender and use they/then pronouns. Eponymous gargoyle of "[Crow & Gargoyle](https://www.anevern.com/galleries/crow-and-gargoyle/)".
  * Characterization: Not the brightest bulb in the marquee, but not _stupid_, either. High <a href="https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#TheSixAbilities">INT</a>, low <a href="https://www.dndbeyond.com/sources/dnd/br-2024/playing-the-game#TheSixAbilities">WIS</a>. Sometimes has difficulty pronouncing certain words, like "potato" (always "portato").