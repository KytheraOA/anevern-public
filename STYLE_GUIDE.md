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

## Images

* Use absolute URLs. All of my images are uploaded to my website. Using absolute URLs means the same images (and subdirectories) aren't regenerated every time I run `mintlify export`.
* Use `<CardGroup cols={3}>` to organize galleries into rows with 3 columns (remember to include `</CardGroup>` after the last image in the gallery)
  * There are exceptions. If it would work well to have wider images, break the gallery into sections by closing one `<CardGroup>` block and starting another.

### Gallery images

Use the Mintlify `<Frame>` [component](https://www.mintlify.com/docs/components/frames) for gallery entries:

```CSS
  <Frame caption="**Title** (YYYY)">
    <img src="http://absolute.url" alt="..." />
  </Frame>
```

* Use the `caption` property for the title of the image, followed by a line break `<br>`, then the creation year in parentheses. 
  * Example: `<Frame caption="**Make Good Trouble**<br>(2025)">`
  * Add bold formatting to the title. 
  * Leave the year unbolded (e.g., ) _unless_ the year is part of the title (e.g., `<Frame caption="**Pride 2026**">`)
  * Optional: If there is additional commentary, add a line break after the year and italicize the commentary (`<Frame caption="**To Whom it's About to Concern**<br>(2024)<br>_This was inspired by the meme to the right_... ☞" >`)

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