# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Main Page
![](./desktop%20Screenshot%202025-01-18%20115559.png)

Active States Page
![](./active%20states%20Screenshot%202025-01-18%20115654.png)

Thank you Page 
![](./thank%20you%20Screenshot%202025-01-18%20115707.png)




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

class from tailwind to remove the radio button from UI
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```


```css
[type="radio"]:checked + .label  /*get the sibling of the radio element*/
 {
    background-color:white;
}
```


using template tag
```html
    <template>
            <div class="card__thank-you">
                <img src="/images/illustration-thank-you.svg" alt="" />
                <p class="card__answer">
                    You selected <span class="answer"></span>
                    <!-- Add rating here -->
                    out of 5
                </p>

                <div class="card__thank-you-message">
                    <h1>Thank You!</h1>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need
                        more support, don’t hesitate to get in touch!
                    </p>
                </div>
            </div>
        </template>
```

explanation for :
```js
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
```
`temp.content:`
The.content property of the < template > element gives access to its "document fragment," which contains the HTML defined inside the < template >.
The content is not part of the live DOM and is used as a reusable blueprint.

`.cloneNode(true):`
The cloneNode(true) method creates a deep clone of the template.content.
A "deep clone" means it copies all child nodes, including text, elements, and their attributes, recursively.
If false were passed instead of true, it would perform a shallow clone, copying only the container node without its children.

using offsetHeight so that the height of the card will still be the same for the thank you page
```js
 const cardHeight=card.offsetHeight + 'px';
 card.style.height = cardHeight; 
 ```



### Useful resources

- [Andreas Remdt](www.youtube.com/watch?v=j12yejW6v1M) - Applied Andreas Remdt's certain solution like the radio input and template tag. 



## Acknowledgments
Andreas Remdt

