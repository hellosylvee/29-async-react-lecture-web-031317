+ Facebook
+ Virtual DOM
+ Declarative instead of Imperative
  + We say what we want, not how we want it to be done
+ Components
  + Some piece of a view
  + We can connect any display and behavoir there...
+ Uses JSX
  + Looks like HTML, but is JS...


### Goals

1. I want to be able to make some reusable elements so that I don't have to copy/paste a bunch of stuff

< NavBar title="Eyes on the Prys" />
< NavBar title="Personal Project" />

2. I want to be able to make changes on the fly and have them be easily updated to my components...
I don't want it to be too much work

3. I want to be able to write my code in an organized fashion...without too much work
  + Separate files for different concerns
  + No global variables
  + Every time I make a new file, I don't want to have to add it to my index.html
  + Take code from many files - bundle it up into one file and have that be transpilled into something that older browsers can run
