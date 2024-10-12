/* 
!CREATING PROJECT USING VITE

1. npm create vite@latest ./
2. Then choose a template, select javascript since you still don't know how to use Typescript
3. open vscode by typing code ./ in terminal, then in integrated terminal type npm install && npm run dev

!CONFIGURING ESLINT

1. install these npm packages: eslint, vite-eslint plugin, and for the react-specific eslint rules, 

If there are compatibility issues, just check it in chatgpt
- npm install eslint@^8.0.0 vite-plugin-eslint eslint-config-react-app --save-dev

2. create a file named .eslintrc.json, here we can configure the behavior of eslint, we can extend the default rules of eslint with react rules we installed.

if you need to create your own, add
{ "extends": "react-app" }

if it already exist  add this 
extends: [
    "react-app" // Add this line
],

3. Inside the viteconfig.js configure the vite

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
});

!PROJECT SETUP

- install NPM packages
- setup your tailwind (or your preferred way of styling your components, like styled components, css modules)

!TAILWIND SETUP

1. install Tailwind CSS, Install TailwindCSS and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

2. Configure your template paths, Add the paths to all of your template files in your tailwind.config.js file.

content: [
    "./index.html",
    "./src/(remove this)**(remove this)/*.{js,ts,jsx,tsx}",
],

3. Add the Tailwind directives to your CSS, Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

4.  Download TailwindCSS intellisense in vs-code, this code shows what code is being written for you, as you use each class.
5. Install prettier plugin for tailwind
npm install -D prettier prettier-plugin-tailwindcss

then create a file in the root named .prettierrc.json
{
    "plugins": ["prettier-plugin-tailwindcss"]
}

6. Start your build process
npm run dev

7. Start using Tailwind in your project

export default function App() {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    )
}

- Install packages you can use right away 

✅ check Router - react-router-dom
✅ State Management - zustand, jotai, RTK
✅ Utility - date-fns (for working with dates)
npm i date-fns
✅ Data Fetching: React Query, SWR, RTK Query

!ADDING ICONS

~ React Icons Library - gives access to different icon libraries, it's like a library of icon libraries.

- npm install react-icons --save

Q: how to use icons ?

import { iconName ,MdAdsClick } from "react-icons/md";
Use it similar to how you use a component <MdAdsClick />



Animations: Framer Motion, React Spring
Type Safety: TypeScript, PropTypes
Form Handling - react-hook-form
API Requests - axios, fetch is built in
Testing - jest or @testing-library/react
toast - react hot toast
map - leaflet


- cleanup the files in the src, remove the css inside index.css, remove the assets inside assets folder
- setting up the fonts, go to google fonts and check your desired fonts, get the import and paste it onto index.css, then extend the tailwind config, and add the property you added in the config to the body of index.html
in index.css 
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

in tailwind config
extend: {
    fontFamily: {
        body: ["Roboto"],
    },
},

in index.html
<body class="font-body">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>


- update the title
- import the assets if you have one
- setup your folder structure
- setup the routes for your pages 

*/

/*




!DIFFERENCE BETWEEN CSR WITH VANILLA REACT AND SSR WITH REACT FRAMEWORK (NEXT, REMIX)

- CSR Vanilla React

used to build Single-Page Applications (SPAs)

All HTML are rendered on the client, so all the HTML are generated in the user's browser 

All Javascript needs to be downloaded before app starts running, which can be bad for performance, especially when users use a lower end device, or have a bad internet connection

Although the React team pushes towards SSR, there is one perfect use case for CSR is applications that are used internally, as tools inside companies hidden behind a login, which doesn't need search engine optimizations

- SSR React framework

used to build Multi-Page Applications (MPAs)
The advantage of SSR is some HTML are rendered in the server
making it more performant as less Javascript needs to be downloaded to the user's device.
React team is moving more and more in this direction


! Component composition and Reusability 
Q: How should you create a component using its size as a guide?

You can classify components into two sides, you have the small components and the large components. Which is both, not ideal.

Q: What problems would you encounter if the component is too big?

1. There's too much stuff happening in the component. In other words, it has too many responsibilities.
2. It needs too many props to work properly. If you need 10 to 15 props to properly configure a component, then the component may be too big.
3. It's hard to reuse.
4. Large components contains a lot of code, which can be hard to understand and use as it is complex and intertwined.

Q: What problems would you encounter if the component is too small?

1. You would have hundreds or thousands of mini-components. 
2. Will make the codebase confusing and harder to understand 
3. It will be too abstracted 

Q: What is abstraction ?

Creating something new in order to hide the implementation details of that thing.

Q: if too small and too large component is a problem, what should you use?

You need to find the right balance between too broad and too specific. 

The smaller the components are, the more reusable they will be, and as the component gets bigger, it becomes less reusable.

Q: 4 criteria's for splitting a UI into components?

1. Logical separation of content/layout - It should create a logical operation of the content or layout of the page.
2. Reusability - Strive to make components reusable
3. Responsibilities / complexity - ensure component has a single well-defined responsibility
4. Personal Coding Style - Find a way that suits your coding style, since some prefers to work with small or larger components.


Q: When to create a new component?

You can start with relatively large component and split it into smaller components as it becomes necessary. (You can skip this, if you're sure you need to reuse. Otherwise, you don't need to focus on reusability and complexity early on)

Q: How do I know when to split up a large component into smaller ones?

1. Logical separation of content/layout
- Does the component contains pieces of content or layout that doesn't belong together?

2. Reusability
- Can you reuse a part of the component
- do you want to or need to reuse it?

3.Responsibilities / complexity
- Is the component doing too many different things?
- Does it rely on too many props?
- Does the component have too many pieces of state or effects?
- Is the code too complex or confusing?

4. Personal Coding style
- Do you prefer smaller functions or components?

Q: Do you have some general guideline for creating a component?

- Be aware that when you create a new component, it creates a new abstraction. Which has a cost because abstractions requires more mental energy to switch back and forth between components.So, if yo can avoid it, try not to create a new component too early. 
- Name a component according to what it does or display. Don't be afraid of using long component names, as it is normal for react development
- Never declare a new component inside another component.
- Co-locate related component inside the same file. Don't separate components into different files too early.
- It's normal for an app to have varying component size.including, very small and huge ones.

Q: Why some very small and huge components are necessary?

- They're Highly reusable
- Has very Low complexity

- Some large components are necessary like Page component, and they are not meant to be reused.


Q: What happens when you call the component inside itself?

It will go into infinite loop


Q: What are the component categories?

- Stateless/Presentational components
    - Doesn't have state
    - Can receive props and simply present received data or other content.
- Stateful Components
    - Has state
    - Can be reusable
- Structural Components
    - Like pages, layouts, or screens of the app
    - Result of composing small components together
    - Can be huge and non-reusable(but don't have to)


Q: What is prop drilling?

Passing props through several nested child components in order to get that data into some deeply nested component.

Q: What is a component composition?

Is the combination of different components using the children prop or by explicitly defining component as props.

Q: Why use component composition?

1. Create highly reusable and flexible components
2. Fix Prop drilling

Q: What happens when we include a component in another component in JSX?

Let's say you have a modal component, and inside it you have a success component.

```jsx
function Modal(){
    return <div className="modal">
        <success/>
    </div> 
}
    
function Success(){
    return <p>Great Job</p>
}
```

The issue here is since `<Success/>?` is inside `<Modal/>`, it becomes not reusable. For the modal to become reusable it means it can also display other value like error, warning etc. This one is solely for success.

Here is the other approach using component composition, here the `<Modal/>` isn't tied to anything. So anything you pass will be displayed by modal. 
```jsx
function Modal({children}) {
    return <div className="modal">
        {children}
    </div>
}
```

Q: How can you pass elements as props?

This is also called as explicit props, it works just like a regular props, because you're passing it explicitly, unlike children props. This pattern is used in library like React Router.

This works but using children props is still the preferred way.
```jsx
<Box element={<MoviesList />} />

function Box({ element }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <ToggleWindow isOpen={isOpen} setIsOpen={setIsOpen} />
            {element}
        </div>
    );
}
```
Q: What's a good use case for an explicit prop?

If you want to pass multiple elements and you want to give them separate names. 

Q: creating a reusable star component

- Placing styling outside the definition, to avoid declaring it each time the component gets re-rendered
const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

export default function StarRating({ numberOfStars }) {
    return (
        <div style={containerStyle}>
            <div>
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>🌟</span>
                ))}
            </div>
            <p>10</p>
            <button>➕ Add To List</button>
        </div>
    );
}

Q: What's a good mindset to have when creating your own components?

Get into the mindset that any component is always created and consumed by someone. Since we're working on our own, both creator and consumer is us. But teams for example, the consumer may be other developers. 

The creator is the one building the component and defined what props the component accepts. while the consumer uses the component and supplies for the props.

Q: Why bother with the difference between creator and consumer?

Having this mindset, you can think of component's props as the public API of the component. As the creator, as you choose the props that consumer is allowed to pass, you are basically defining the public interface of the component. And you're choosing how much complexity of the component you want to expose to the consumer of API.

Q: How can you find the right balance between what props are allowed in a component?
 
When props are too little, it's not flexible enough and might not be useful. On the other hand, when props are too many, it becomes hard to use, and becomes complex both for consumers and the creator.

So you need to find the right balance between too little and too many, that works for both creator and consumer.

Q: What if I really need to add many props?

Make sure to provide default value.

Q:How can you let the consumers extend the functionality of a component?

You can let them add classes. 

Q: What are prop types?

prop types specifies the type of value we expect the consumer to pass. If you really care about type checking, use Typescript. But you can also use react built in prop types


Q: Creating a reusable star rating component

- When creating reusable component, it's better for the component to not rely on external css

- index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

function Test() {
    const [movieRating, setMovieRating] = useState(0);
    return (
        <div>
            <StarRating
                color="blue"
                maxRating={10}
                onSetRating={setMovieRating}
            />
            <p>This movie was rated {movieRating} rating</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <StarRating
            defaultRating={3}
            maxRating={5}
            color="aqua"
            size={40}
            className="test"
            messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        />
        <Test />
    </React.StrictMode>
);

- StarRating.jsx
import { useState } from "react";

const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const starContainerStyle = {
    display: "flex",
};

//Here the maxRating dictates the number of stars, and it has a default value because it's possible that maxRating prop may not be supplied. So we need to account for that.
export default function StarRating({
    maxRating = 5,
    color = "black",
    size = 48,
    //Letting the user add classes to further extend the component
    className = "",
    // Displaying messages instead of number
    messages = [],
    //Sets the default rating
    defaultRating = 0,
    //Sets outside rating, if needed by outside state
    onSetRating,
}) {
    const [rating, setRating] = useState(defaultRating);
    const [temporaryRating, setTemporaryRating] = useState(0);

    function handleRating(rating) {
        setRating(rating);

        onSetRating(rating);
    }

    const textStyle = {
        lineHeight: "1",
        margin: "0",
        color,
        fontSize: `${size / 1.5}px`,
    };

    return (
        <div style={containerStyle} className={className}>
            <div style={starContainerStyle}>
                //Creating the rating based on the max rating, Since we just need to create an array and not store it, we don't need to map it like how we do it when using it in option
                {Array.from({ length: maxRating }, (_, i) => (
                    <Star
                        additionalStarStyling={{ color, size }}
                        onHoverIn={() => setTemporaryRating(i + 1)}
                        onHoverOut={() => setTemporaryRating(0)}
                        key={i}
                        onRate={() => handleRating(i + 1)}
                        full={
                            temporaryRating
                                ? i < temporaryRating
                                    ? true
                                    : false
                                : i < rating
                                ? true
                                : false
                        }
                    />
                ))}
                //At the top, we're passing event handler, and full prop, which is responsible for how stars are displayed. If the current star is still less than actual rating, then make it true.
            </div>

            // Display the temporary rating if it's set, or the rating if the temporary is not, else put empty string 
            <p style={textStyle}>
                {messages.length === maxRating
                    ? messages[
                          temporaryRating ? temporaryRating - 1 : rating - 1
                      ]
                    : temporaryRating || rating || ""}
            </p>
            <button>➕ Add To List</button>
        </div>
    );
}

function Star({ onRate, full, onHoverIn, onHoverOut, additionalStarStyling }) {
    // Star styling
    const starStyle = {
        display: "block",
        cursor: "pointer",
        height: additionalStarStyling?.size,
        width: additionalStarStyling?.size,
    };

    // we will use that full prop to conditionally render the stars. so if the full prop has value of true, then it will be full star, else it will be empty star
    return (
        <span
            onClick={onRate}
            //Will be triggered when cursor hovers to the element
            onMouseEnter={onHoverIn}
            //Will be triggered when cursor leaves the element
            onMouseLeave={onHoverOut}>
            {full ? (
                <svg
                    style={starStyle}
                    fill={additionalStarStyling?.color}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    stroke={additionalStarStyling?.color}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ) : (
                <svg
                    style={starStyle}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={additionalStarStyling?.color}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            )}
        </span>
    );
}

Q: How can you use prop types?

-Import
import PropTypes from "prop-types";

- Create prop types for the component
StarRating.propTypes = {
    - Will make the number props required and with type number. But its better to use default values
    maxRating: PropTypes.number.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.number,
    messages: PropTypes.array,
    defaultRating: PropTypes.number,
    onSetRating: PropTypes.func
    booleanProp: PropTypes.bool,
    objProp: PropTypes.object
};


! BEHIND THE SCENES OF REACT 

- Component
- Component Instance
- React Element
- DOM Element (HTML)

Q: What should you do when using project from other people?

Make sure to install it first, using `npm install` or `npm i`. To ensure the dependencies the project might need.

Q: What's the difference between, React components, Component instances and React elements?

As we already know, we use component to describe the piece of UI.It's  a function that returns React elements (element tree), using JSX.

We can think of components as blueprint or template, which React use to create a component instance.

Q: When does component instances are created?

Each time a component is used, React creates an component instance. 

If we have a `<Heading />` component and used it three times, three instances of `<Heading />` will be placed in the component tree.

This happens behind the scenes as React calls the `<Heading/>` function three times.

Q: What is a component instance?

Instance is the physical manifestation of a component living in the component tree. While the function itself is just a function we wrote before being called.

Q: Can a component instance have its own state?

Yes, each instance can hold its own state and props.And also has its own life cycle. So a it can be born, live, and die.

Q: What happens after component instance?

As react executes the code for each instances, each will return one or more React Elements.

We know that JSX gets converted to multiple React.createElement function calls. Then as React calls the create element functions, the result will be a React element.

Q: What is a React element?

It's a result of create element function calls, and using component in our code. It's an immutable object that React keeps in memory.

Q: What's inside a React Element?

A React element contains every information necessary in order to create the DOM elements for current component instance.

Q: How is React element related to DOM?

React element are converted to DOM elements and be rendered to the screen by the browser.

So the DOM elements is the final visual representation of the component instance in the browser.

- Q: Which one is actually rendered to the DOM?

It's DOM elements and not React element. React element lives inside React and has nothing to do with the DOM.

- Q: How can I see the component instance in the console?

You can see it by using the component and logging it into the console.
```jsx
console.log(<Heading />)
```

- Q: When I logged the component instance, I saw $$typeof: Symbol(react.element), what does that mean?

It's a security feature React implemented to protect us against cross-site scripting.It uses Symbol, which is a JavaScript primitive, which can't be transmitted via JSON, so it means that it will not come from an API call.

So if hackers try to send a fake react element from that API, react wouldn't see the typeof as a symbol. And so react wouldn't include the fake React element to the DOM.

- Q: Why not call the component directly instead of logging it?

You can, and you will get the same result. But there is a difference, the React element type will change to the content of the component. 

This means that React doesn't see it as component instance, rather it sees it as raw React element.

When using component, we want React to see the component instance and not the raw React element.

- Q: What happens if you invoke a component inside another component?

It looks like it works but if you check the component tree, it shows only one component.Again, this is because when a component is called directly, React no longer sees it as a component instance. 

{TabContent()}

- Q: What happens to the state of a component if it's directly invoked inside another component?

It will be managed by the parent component.

- Q: How does component gets displayed on the screen?

1. The process is started by React each time a new render is triggered. (like state update)
2. In render phase, react calls component functions and figures out how the DOM should be updated to reflect the latest state changes.

Note that in this phase, the DOM is not actually updated, that happens in the next phase.

3. One react figures out how to update the DOM, it does it in commit phase. In this phase new elements might be placed, existing elements might be updated or deleted in order to correctly reflect the current state of the application.

It's the commit phase and not the render phase that is responsible for what we usually think of rendering.

4. Browser paint, here the browser will notice that the DOM has been updated and will repaint the screen. This is the step that actually produces visual changes users see on the screen.

- Q: How does React defines render?

In React, rendering isn't update the DOM or displaying elements on the screen. Rendering happens internally inside React, it doesn't produce visual changes.

- Q: How renders are triggered?

There are two ways in which render can be triggered. First, the first time the app runs or the initial render. Second, when state is updated in on or more component instances or re-render.

- Q: Is render process only applicable for the component?

No, the render process is triggered for the entire application. 

It doesn't mean that the entire DOM is updated, since in React, rendering is about calling component function and figuring out what need to change in the DOM.  

This can be confusing, because in practice, it looks like React only re-renders the component where state update happens. But that's not how it works behind the scenes.

- Q: Is renders triggered immediately?

Renders are not triggered immediately, but are scheduled for when JavaScript engine has some free time. There's also batching of multiple setState calls in event handlers.

- Q: Can you explain how renders are actually performed in render phase?

! Use the diagram for better understanding

At the beginning of render phase, React goes through the entire component tree, take every component instance that triggered a re-render and actually render them (call the component function). This creates updated React elements which makes up the virtual DOM.

Let's say an state update happened on one component. This will trigger a re-render, which means React will call the component function of that component and place the new React element in a new React Element tree (new virtual DOM).

This virtual DOM that was created after state update will get reconciled with the current Fiber Tree (before state update), which exist before state update.

This reconciliation process results to an updated Fiber tree. Which is eventually used to write to the DOM. 

- Q: Does the child components gets affected when a component gets rendered?

Rendering a component causes all of its child components to be rendered as well (It doesn't matter whether the props changed or not). All the way to the component tree. This means that if you update the highest component in the component tree, it will re-render every child component

This is necessary because react doesn't know whether a component update affects the children or not. Again, this doesn't mean that the entire DOM is updated, It's just the virtual DOM that will be recreated which is not a big deal for small to medium sized apps.

- Q: How does virtual DOM works?

on Initial render, React takes the entire component tree and transforms it into one big react element which basically becomes a React Element tree. This is called the virtual DOM.

- Q: So what is virtual DOM?

Virtual DOM is a tree of all React Elements created from all instances in the component tree.

It's cheap and fast to create multiple tree because in the end, It's just an object.

virtual DOM has nothing to do with shadow DOM, the shadow DOM is just a browser technology used for something like web components.

- Q: What does React use for reconciliation?

Reconciliation is done using React's reconciler called Fiber. Which is why we have a Fiber tree.

- Q: Why not just update the entire DOM whenever there's a state changes?

1. Unlike the virtual DOM which is just a javascript object, making it cheap and fast. Writing to the DOM is not cheap and fast. It is inefficient and wasteful to write entire virtual DOM to actual DOM  whenever a render was triggered.
2. When state changes somewhere in the app, only a portion of the DOM needs to be updated.And the rest can be reused.


Imagine you have a large app and you have a button that that shows the modal, in that situation, only the elements for that modal needs to be inserted to the DOM. the rest of the DOM should stay the same. 

Which react tries to do, whenever a render is triggered React tries to be as efficient as possible by reusing as must of the existing DOM tree as possible. 

- Q: How does React know what changed from one render to the next one?

This is where reconciliation comes into play, reconciliation is deciding which DOM elements actually needs to be inserted, deleted, or updated, in order to reflect the latest state changes.

The result of reconciliation process is a list of DOM operations necessary to update the current DOM with a new state.

- Q: How does the Fiber (reconciler) works? 

During initial render, Fiber takes the entire React element tree (virtual DOM), and builds another tree based on it which is called the Fiber tree.

A fiber tree is an internal tree that has fiber for each component instance and DOM element.

- Q: What's the difference between fibers in Fiber tree and React element from virtual DOM?

Unlike React Elements in the virtual DOM, Fibers aren't recreated on every render. It's never destroyed.

Fibers are mutable data structure, once it has been created during the initial render, it will simply be mutated over and over again in future reconciliation steps. Making it perfect place for keeping track of things like current component state, props, side effects, list of used hooks and more.

- Q: Where is state and props of a component instance stored?

The actual state and props of any component instance we see on the screen are internally stored inside its corresponding Fiber in the Fiber tree.

- Q: Why is a Fiber called a unit of work?

FIber also contains a queue of work to do, such as updating state, updating refs, running registered side effects, performing DOM updates and so on.

- Q: How is the arrangement of Fiber tree different from the virtual DOM?

Instead of parent-child relationship, each first child has a link to its parent and all the other children have a link to their previous sibling.

React uses Linked List to make it easier to process the work associated for each Fiber.

For the similarities, both trees include not only components, but also regular DOM elements. Both tree are a complete representation of the DOM structure, not just React components.

- Q: What is the most important characteristic of Fiber reconciler?

Work can be performed asynchronously, which means that the rendering process can be split into chunks, task can be prioritized, and work can be paused, reused, or thrown away. This happens behind the scenes, invisible to the developers.

- Q: What is the practical use of asynchronous rendering?

It enables concurrent features like suspense or transitions starting in React 18.

It also allows rendering process to be paused and resumed later so it won't block the browser's JavaScript engine with long renders, which can be problematic for performance in large applications.

This is only possible because the render phase doesn't produce any visible changes to the DOM yet.

- Q: How does reconciliation process works?

Here is the practical explanation

You have the virtual DOM and the corresponding Fiber tree. Let's say a state is updated, This will trigger a re-render, which will create a new virtual DOM, and in that tree, the component where that state changes happened and all of its components will be re-rendered as well.

This new virtual DOM needs to be reconciled to the current Fiber tree, which will result to updated Fiber tree called work in progress tree.

When reconciliation needs to happens, the Fiber walks through the entire tree step by step and analyzes what needs to change between the current Fiber tree and the updated Fiber tree based on the new virtual DOM. This is called diffing.

If the element needs to be updated the work needed to be done in that Fiber is DOM update.

FOr those elements that are in the current Fiber tree and are no longer in the virtual DOM, they will be marked as DOM deletions.

If a component is re-rendered because it's a child component, but it didn't change, then the DOM won't be updated.

- Q: What happens after the process of reconciliation?

Every DOM mutation will be placed into a list called list of effects.
Which is used in the commit phase to actually mutate the DOM

- Q: What is diffing?

It's process of comparing elements step by step based on their position in the tree.

- Q: How diffing works?

Diffing is based on 2 fundamental assumption.

1. Two elements of different types will produce different trees 
2. Elements with a stable key prop stays the same across renders.

This allows React to go from billion [O(n3)] operations to thousands [O(n)] per 1000 element.

- Q: What are the two consideration in diffing?

1. Having two different elements at the same position

If the type of element has changed, React will assume that the element itself and all of its children are no longer valid.As a result, it will be destroyed and removed from the DOM, including its state.

The tree might be rebuilt if children stayed across renders,but it gets rebuilt with brand new elements. This  means that if there were component with state, it will be reset.

2. Having same element and same position in the tree

If after a render, an element at a certain position in the tree is the same as before, it will be kept in the DOM. including all child elements and component state.

For example, it has same element and same position, but only the className changes, what React is gonna do is to simply mutate the DOM element attributes, and for React Elements, it will pass in the new props.

If you don't want this behavior then you can use the key prop.

- Q: What is key prop?

It's a special prop that we use to tell the diffing algorithm that an element is unique.

It allows React to distinguish between multiple instances of the same component type.

Again, the second assumption of diffing is that when a key stays the same across renders, the element will be kept in the DOM (even if the position in the tree changes).

It works for both DOM elements and React elements.

- Q: What happens when the key of an element changes between renders?

When a key changes between renders, the element will be destroyed and a new one will be created (even if the position is the same in the tree as before)

- Q: Why do we need to put keys when using lists?

- No keys
<ul>
    <Question question={q[1]} />
    <Question question={q[2]} />
</ul>

It's still the same but they will now appear at different positions in the React Element tree. The first two components is now the second and third child. 
<ul>
    - Same elements but different position in the tree, so they will be removed and recreated in the DOM, which is bad for performance.
    <Question question={q[0]} />
    <Question question={q[1]} />
    <Question question={q[2]} />
</ul>

We know that it's bad for performance, but React has no way of knowing that.

That's where keys comes into play, keys allows developers to uniquely identify an element, we can give React that information that it doesn't have on its own. 
<ul>
    - Now when we add a new element in the list, the two original elements will have a different position in the tree, but they will have a stable key, which means these element will be kept in the DOM.
    <Question key="q0" question={q[0]} />
    <Question key="q1" question={q[1]} />
    <Question key="q2" question={q[2]} />
</ul>


- Q: How can we use keys to reset the state?

If the only thing that changed is the props, and the component and it's position stays the same,that DOM element and its state will be kept.

<QuestionBox>
    <Question
    question={{
        title: 'React vs JS'
        body: 'Why should you use React?'
    }}
    key="q1"
    />
</QuestionBox>

First we must give it a key to allow react to uniquely identify that component instance, then if another question appears, give it another key to tell react that it should be a different component instance, and it should create a new DOM element. This results to state being reset.

When you want to reset the state, Make sure to give the element a key and that the key changes across renders.

- If key isn't added, then the state of the tabs will be preserved. But if you put a key, then its state will be reset every re-render.
<TabContent
    item={content.at(activeTab)}
    key={content.at(activeTab).summary}
/>


- Q: What is the commit phase?

Commit phase is where React writes to the DOM. insertion, deletion, and updates (list of DOM updates are flushed to the DOM).

After the commit phase is complete, the work in progress fiber tree becomes the current tree for the next render cycle.

Remember, Fiber trees are not discarded and never recreated from scratch, they're just reused to save rendering time.

After that, the commit phase is closed. And the browser will notice that the DOM has been changed. And as a result, it will repaint the screen whenever it has idle time.

- Q: Who is responsible for Update Render phase, commit phase, and browser paint?

The render phase is performed by the React Library.
The commit phase is performed by ReactDOM library.
The browser paint is performed by browser the user is using.

- Q: why does React library only does the render phase and not the commit phase?

React itself never touches the DOM and has no idea where the result of render phase will actually be committed and painted.

The reasons is that React was designed to be used independently from the platform where elements will actually be shown.

React can be used with different hosts. We only think of React in conjunction with the DOM because it's mostly what we use, to build web application. But react is also used with other host as well, such as: 
- native mobile applications using React Native. 
- Videos using package called Remotion
- You can even create words, pdf, and figma files using different renderers (misleading, because according to React itself, Renderers does not render, they commit the result of the render phase. This renderer name comes from the before React divided the render phase and commit phase, so they chose the term renderer because it fits the common sense definition of rendering).

- Q: Why is committing synchronous?

DOM is updated in one go, and it can't be interrupted. This is necessary so that the DOM never shows partial result, ensuring a consistent UI.

Actually, the whole reason for dividing the render and commit phase is so that rendering can be paused, resumed, and discarded. And the result can be flushed into the DOM in one go.

! RENDER LOGIC

- Q: What are the two types of logic we can write in React components?

1. Render Logic 

- Code that lives at the top level of the component function
- Participates in describing how component view looks.
- Executed every time the component renders

2. Event handler functions

Executed as a consequence of the event, that the handler is listening for.

It has codes that actually does something, like state updates, performing HTTP requests, navigate to other page etc.

This is important because React requires that component are pure when it comes to render logic In order for everything to work as expected.


- Q: What are side effect? 

Side effects are dependency on or modification of any data outside the function scope. 

In React, think of it as the interaction between React component and the world outside the component. Side effects are code that actually does something.

function circleArea(r) {
    areas.circle = 3.14 * r *r;
}

- Q: What are pure functions?

Function that has no side effects. It doesn't try to change any variables outside its scope. And a pure function always return the same output, when given the same input.

- Q: Should you avoid side effects?

Side effects are not bad, because a program can only be useful if it has some interaction with the outside world. But in order to make bug-free applications, you need to know when and how to create side-effects.

- Q: What are the rules of render logic?

- Components must be pure when it comes to render logic: Given the same props (input), a component instance should always return the same JSX(output). 

- This means that render logic is not allowed to produce any side effects. The logic at the top level and is responsible for rendering the component should have no interaction with the outside world.

Don't perform network request (API calls)
Don't start timers
Don't directly use the DOM API
Don't mutate objects or variables outside the function scope.
Don't update state (or refs). this creates an infinite loop

- Q: Where can I create side effects if doing it render logic is not allowed?

Side effects are only forbidden inside render logic. Side effects are allowed and encouraged in event handler functions. You can also use a hook to register side effects called useEffect.

- Q: Can you explain how state updates are batched?

Let's look at this example
const reset = () => {
    setAnswer('');
    console.log(answer);
    setBest(true);
    setSolved(false);
}

We might think that as React sees the setAnswer function call, it would update the state and trigger a re-render and commit phase. Then it would move to the setBest and do the same thing, and same for the setSolved too. We think that if there's three state update, then react wound re-render three times. 

That's not how React update multiple pieces of state in the same event handler function.

What happens is these state update gets batched into just one state update for the entire event handler. Updating multiple pieces of state, won't immediately cause a re-render for each update. Instead, all pieces of state inside the event handler are update in one go. Onl then will React trigger single render and commit.

- Q: What's the need for batching state updates?

if we're updating pieces of state together it means they should just represent a single one new view. If the state updates belong together, it doesn't make sense to update the screen three times.Doing it would just create two wasted renders, because we're only interested in the final render, containing the final state update.

- Q: What should you do to batch state updates?

React automatically batches state update. Adding another performance optimization.

- Q: How can batching give unexpected results?

const reset = () => {
    setAnswer('');
    console.log(answer);
    setBest(true);
    setSolved(false);
}

In this example, what should the console log output?

Remember that component state is stored in fiber tree during render phase. In this phase, re-render hasn't happened yet.React ist still reading the function line by line to figure out what state needs to be updated but it hasn't updated the state yet and it also hasn't re-rendered yet.

It means that at this point, the answer variable still holds the current state (state before the update), even though we already told React to update it. This means that the state is state (no longer fresh and updated).

- Q: Why is updating state in react asynchronous?

Because react doesn't give us the updated state variable immediately, but only after the re-render has happened. It also applies when only one state variable is updated, The updated state is only available after the re-render, and not immediately.

- Q: What if you need the new value immediately after updating the state?

If you need to update the state based on previous update, you just need to use setState wil callback function. Which we already use
(setState(test => ...))

- Q: Is batching only applicable to event handler functions?

We mostly talked about event handlers for about batching, the reason is before React 18, react only did automatic batching in event handlers. but not for situations that happens after a browser event already happened.

But there are situations where we need to update the state long after a browser event like click happened. like timeouts and promises. for example, we might want to run a reset function two seconds after a click event. or we might want to do it after some data has been fetched.

- Q: What would happen if you try to auto batch using promise or timeouts before React 18?

For ex. you used a reset function was called by a timeout or promise, state updates inside the function would'nt be batched. React would actually update the state variables one by one. Another example is using native events such as addEventListener.

- Q: What's an important thing to remember in auto batching for older versions of react?

Batch works differently before version 18. There's also rare situation where batching can be problematic, if you find yourself in that situation, just wrap the problematic state update in a ReactDOM.flushSync(), which excludes that update from batching.

- Q: What would happen if the state values are already at their default?

The component instance won't be re-rendered. As you attempt to update the state, if the new state is equal to the current state, React will not even try to attempt to update the state, and it will also not re-render the component instance.


- Q: Can you explain what happens to this code?

It would only be updated once, so if the current value of like is 0, it will be 1. But for the next updates, the value of like is still 0 because it's asynchronous. and since the new state is equal to the current state, react will not update the state.
function handleTripleInc() {
    setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(likes + 1);
}

- Q: How does event propagation and event delegation works in the DOM?

Let's say you have a DOM tree. and an event happened. What happens in the browser is as soon as the event fires, a new event object will be created.

It will not be created where the event actually happened, Instead the object will be created at the root of the document. From the root, the event will travel down the entire tree during capturing phase, until it reaches the target element (element in which the event was actually triggered).

After the target element has been reached, the event object travels all the way back up the entire tree during bubbling phase.

- Q: What are the two important things to remember during capturing and bubbling phase?

First. During the capturing and bubbling phase, the event goes through every single parent and child element one by one. It's as if the event originated in each of these DOM elements.

Second. by default, event handlers listen to events on the target and during the bubbling phase.It means that every single event handler in parent element will also be executed during bubbling phase, as long as it's also listening for the same type of event.

For example the event object listened to the click for target element, during the bubbling phase, if there's also click event, it will also be executed.

- Q: What if you want to stop the event from bubbling up?

You can simply call the evt.stopPropagation() method on the event object.

- Q: What are event delegation?

It's the handling of events for multiple elements centrally in one single parent element.

Image you have hundreds of buttons, if you want to handle events on all of them, each buttons would need a copy of the event handler function. which could be problematic for performance and memory usage.

- Q: How can you use event delegation?

<div className="options">
    <button className="btn">1</button>
    <button className="btn">2</button>
    <button className="btn">3</button>
</div>

ex.
Add one handler function to the first parent element of the buttons. When a click happens on one of the buttons, the event will bubble up to the options div in this example, where we can use the event's target property to check whether the event originated from one of the buttons or not.If it did, we can then handle the event in this central event handler function.

- Q: Why do you even need to be familiar with event delegation?

First, you might find strange behaviors related to events in your application, which might have to do with event bubbling.You need to understand what's going on in order to fix these problems.

Second, this is what React does behind the scenes with events.

- Q: How does react handle events?

Thinking about how React registers event handlers behind the scenes, we might think that it looks something like this. React select an element and attaches an event handler to that element.

document.querySelector('.btn')
.addEventListener('click', 
() => setLoading(true)
);

But this isn't what react does internally. What React does is register all other event handler function to the root DOM container (div in index.html with ID root). where all events are handled.

You can think of it as React selecting the root element and placing all event handlers to that element.

React also physically registers one event handler function per event type, it does so in the root node of the fiber tree during render phase.

So if you have multiple click handlers in your code, React will bundle them together and just add one big onCLick handler to the root note of the fiber tree.

- Behind the scenes, React performs event delegation for all events in our application.

It's the DOM tree that matters and not the component tree.Just because one component is a child of another component, it doesn't mean that the same is true in the displayed DOM tree. keep it in mind when thinking about bubbling in React application.

- Q: How does event objects, work behind the scenes?

Whenever an event handler is declared, React gives us access to the event object that was created. 

However, In React, the event object is actually different, in Vanilla JavaScript, you simply have an access to the native DOM event object, like pointer, mouse, keyboard event etc.

React, on the other hand gives us synthetic event.which is a wrapper around the DOM's native event object. This simply means that synthetic events are similar to native event objects, with added or modified functionalities.

Synthetic event has same interface as native event objects like stopPropagation() and preventDefault()

The React team also decided that all most important synthetic events actually bubble like focus, blur, and change events. which usually doesn't bubble. except for scroll event.

- Q: Why did React decided to implement synthetic object?

They fix browser inconsistencies, this way event will work the exact same in every browsers.

- Q: Difference between how event handlers work in React and Vanilla JS?

In React, the attributes for event handlers are named using camelCase like onClick, onChange, instead of onclick or click.

In Vanilla JavaScript, when we want to stop default behavior of the browser in response to an event, we can return false from the event handler function. But if you attempt to return false in a React event handler, that would not work. Because the only way to prevent the browser's default behavior is to call preventDefault().

In a rare event where you need to handle an event in the capturing phase, simply attach capture to the event handler name like onClickCapture


- Q: What's the difference between a framework and a library?

- A framework is a complete structure that includes everything you need in order to build a complete large scale applications.

You can say that frameworks like angular are batteries included because they include features like routing, styling, http requests, and many more out of the box.

The downside of this is you're stuck with framework's tools and convention, even if you don't like or agree with them. (not always bad, so it's not real downside)

- A library is basically a piece of code, that developers share for other developers to use. An example would be React, which is a view library (because all React does is draw components onto the user interface).

To build a large scale application, you need to include many external third party libraries for things like routing, styling and so on (functionalities that are not part of react itself).

This gives you freedom as you can choose what libraries you like the most and get multiple 3rd-party libraries, to build a complete application.

This also means that as a React developer, you need to be be able to find and download all the right libraries for your specific application. And of course, you also need to learn how to use these libraries and stay up to date with the over time.

- Q: What is react frameworks and why was it created?

Many react developers feel overwhelmed by having to take many decisions and choosing between so many third party libraries.This fact and other reasons led to the development of opinionated react frameworks like NextJS, Remix, or Gatsby.

React frameworks are frameworks that are built on top of react. They extend React's functionality, they are opinionated because other developers includes their own opinions on how to handle stuff like routing, state management, or styling into these frameworks.


When using React framework, some important decision like choosing what libraries to include are taken way from the developer. Making the project development much easier and faster, leading to better developer experience.

- Q: what are the other features of using React frameworks?

Different framework specializes in different aspects, but all of them offload much of the setup work. They also have other features like server-side rendering, static site generation, better developer experience, etc.


You can even describe these frameworks as fullstack react framework because they include many features that you can build full stack applications with it, while using React as the base layer.


- Q: What is component's life cycle?

The specific life cycle we're talking about here is the life cycle of a component instance. because only an actual physical instance of a component can go through lifecycle.

The lifecycle of a component encompasses the phases that a specific component instance goes through over time.

- mounting or initial render (birth of a component), this is when the component instance is rendered for the first state. Here fresh state and props are created.

- Re-render (optional), once the component has been rendered,it can be re-rendered for unlimited number of times. It will be re-rendered when, state changes, the props it receives changes, when the parent re-renders, or when the context changes.

- Unmounting (death of a component), this is when the component instance is completely destroyed and removed, its state and props are also destroyed.

- Q: How is re-render phase optional?

It doesn't always happen to every component, because some components are mounted and unmounted immediately.

- Q: What's the benefit of learning the component's lifecycle?

It's important to know the component's lifecycle because we can hook into different phases of this lifecycle. Basically, we can define pieces of code to run at these specific points in time, which can be useful.


- Q: What's the reason for adding variables outside of component's scope?

If you placed the variable definition inside the component, each time a component gets re-rendered, the entire function gets executed again, so all the render logic, including variable definitions will be repeated.

If a variable doesn't depend on anything that's inside the component, then place it outside of component's scope. 

const API_KEY = "API_KEY"
function Comp() {...}


- Why you should never set state in render logic?

This is the wrong way because it introduces a side effect into the component's render logic as it interacts with the outside world. If we decide to set the state using this, what happens is it would set the state causing the component to re-render, then it will fetch again, and set the state and trigger re-render. It will cause an infinite loop of setting state and re-rendering of component.

function Comp() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=transformers`)
        .then((res) => res.json())
        .then((data) => console.log(data));
}

! USE EFFECT SECTION

- Q: What is the idea behind the useEffect?

To give us a place where we can safely write side effects. 

- Q: What is the useEffect hook?

Allows us to synchronize from an external data, or perform side effects to components. An example of such side effects are, data fetching, direct DOM updates, event listeners, timers, etc.

useEffect are mostly used to run code in the initial render, or re-render.

- Q: How can I use the useEffect hook?

The useEffect accepts two arguments, the first one is a function that runs on initial render, the second one is a dependency array, which controls if the function gets executed after re-render.

useEffect(function(){
    - code to be executed
}, [])

- Q: How does useEffect works?

- after the initial render, the function argument of useEffect will be invoked, then for the next re-render, it will depend on the dependency if the function argument will be invoked.

- Q: What are the three types of dependency array?

1. Effect will be invoked after the the initial render only.

- Effect synchronizes with no states or props, this means that it will only run on mount 
useEffect(() => { 
    ...code 
}, []);

2. Function argument will be invoked after the initial render, and for every re-render. The difference of this one to the third option is, the function argument will be invoked regardless of what triggered the re-render. Unlike when you pass a variable in the dependency array, the function argument is only invoked when the variable updates.

- Effect synchronizes with everything, making every state or props a dependency
useEffect(() => {
    ...code
})

3. The effect will run on initial render, and also on each re-render triggered by updating one of the dependencies x, y, z. Only x, y, or z. If other piece of state or props is updated, the effect will not be executed.

- Effects synchronizes with X, Y, and Z.
useEffect(() => {
    ...code
}, [x, y, z])

- Q: When exactly effects are executed during render and commit 
process?

These are the timeline of events that happens as component render and re-render.

Mount - starts with mounting of component instance 
Commit - The result of rendering is committed to the DOM.
Browser Paint - DOM changes are painted onto the screen by browser. 

Where does effects plays its part?

- Effects are only executed after the browser has painted the component instance.

Effects run asynchronously after the render has already been painted to the screen. The reason for this is effects may contain long-running processes. So if React would execute the effect before browser paints a new screen, it would block the entire process and user would see an old version of the component for too long.

- Q: What's a consequence of effects not running during render?

If an effect sets state, then an additional render would be required to display the UI correctly.

- Q: what are layout effects?

It's another effects that is rarely necessary, the difference between regular effect and layout effect is that layout effect runs before the browser actually paints a new screen.


~ process of useEffect sa with empty dependency array
- after ng first render, matatawag si useEffect then irereturn yung cleanup function
- Kapag matatanggal na yung component, then invoke yung cleanup function

~ process of useEffect with dependencies
- after ng first render, matatawag si useEffect then irereturn yung cleanup function
- sa second render iinvoke yung previous cleanup, then useEffect, then return cleanUp
- sa third render, invoke si previous cleanup, then useEffect, then return cleanUp and so on.
- kapag naremove, maiinvoke yung previous cleanup

- Q: Can you explain how the useEffect dependency array works?

By default, effects run after every render, but most of the time, that's not what we want. This can be prevented by passing a dependency array.

- Q: Why does react even need an array of dependencies?

Without dependency array, React doesn't know when to actually run the effect.But if you specified the effect dependencies by passing in the dependency array, the effect will be executed each time, one of the dependencies change.

- Q: What exactly are these dependencies?

Effect dependencies are state variables and props used inside the effect. Every state variable and prop used inside the effect must be included in the dependency array.

Example you have title props and userRating piece of state, both must be included in the dependency array, because the effect function depends on these variable to do its work. 

That's why we need to tell react about them, because if title or the user rating changes, React will not know about the changes, making the effect code unable to re-execute. This leads to a bug called stale closure.

- Q: What's a good analogy for a useEffect hook?

You can think of it as an event listener that listens for one dependency to change. Whenever a dependency changes, it will execute the effect again.

- Q: Can you explain how useEffect is a synchronization mechanism?

If you have a title, and userRating dependencies, whenever title or user rating changes, React will execute the effect again, which updates the document title (for this example).

Effects react to updates to state and props used inside the effect. Effects are reactive (Just like state updates re-renders the UI).

Effects are used to keep component synchronized with some external system (system living outside of our React based code).

In this example, the state user rating and props title, are synchronized with external system which is the title of the document.

- Q: Synchronization and its lifecycle

Whenever a dependency changes, the effect is executed again, dependencies are mostly state and props, and when a component's state or props are updated, it gets re-rendered. This makes the effects and component lifecycle deeply connected.

- This means that you can use the dependency array to run effects when the component renders or re-renders, it's about synchronization and the component's lifecycle.


- Q: Two places where you can create side effects?

The first one is inside event handlers, however sometimes, reacting to events is not enough for the application needs.

In some situation, we need to write code that automatically executed as the component renders. 

This is when we can create side-effect by using useEffect hooks.

- Q: What's the benefit of being able to create an effect?

By creating an effect, we can write code that runs on different phases of component's instance lifecycle, So when a component, mounts, re-renders, or unmount.

- Q: What's the difference between effects by event handlers and effects created by useEffect hook?

Event handlers 

- Executed when corresponding event happens
- Used to react to certain events

useEffect
- executed after the component mounts (initial render), and after subsequent re-renders (according to dependency array)
- Used to keep component synchronized with some external system (like API movie data).

- Q: What do you mean by according to dependency array?

The exact moment at which effect is executed depends on its dependency array.

- Q: What are cleanup function?

Function that is called before the component re-renders (or the next effect is executed again) or unmounts.

It runs before the effect is executed again to cleanup the results of previous side effect.

It also runs right after a component instance unmounts, to give an opportunity to reset the side effect that we created.

- Q: What's the purpose of cleanup functions?

Cleanup functions are necessary whenever side effects keep happening after the component has been re-rendered or unmounted.

Example avoiding race condition

useEffect(() => {
    - returning function
    return () => {}

    - removing event listener using cleanup function
    return () => {
        document.removeListener('click', handleClick);
    }
}, [])


useEffect(() => {
    const callBack = (evt) => {
        if (evt.key === "Escape") {
            onCloseMovie();
        }
            
    document.addEventListener("keydown", callBack);

    -remove the event listener, the function for removeEventListener must be the same from the addEventListener

    - if you don't remove the event listener, each time the component mounts a new event listener will be added to the document, so if you opened 10 movies in this example, you will have 10 same event listeners
    return () => {
        document.removeEventListener("keydown", callBack);
    };
}, [onCloseMovie]);

- Q: How can you cleanup http request?

const controller = new AbortController();

const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    {
    signal: controller.signal,
    }
);

return () => {
    controller.abort();
};

- Q: What are the problems you will encounter when you don't cleanup http request?

It creates too many requests, especially if the request fires for every keystrokes.

Having many request at the same time slows each other down.

It also means that we're downloading too much data. when we're only interested to the data of the final request.

if you have 5 request at the same time, and the third one is the slowest one and the last one to be finished, the data of that request will be used to update the state. which is not what we want.


- Q: Can you explain what race condition is ?

When making an HTTP request, if a component is re-rendered as the request is still running, a new second request will be executed, this creates a bug called race condition. because they're basically racing with one another to see which one arrives first.

~ cleanup function ex. timers

Even if a component unmounts, timers will still work, that's why you need to use cleanup function to make sure it is removed.

const Comp = () => {
    useEffect(() => {
        console.log('first log')
        const interval = setInterval(() => {
        console.log('interval added')
        }, 1000);
    
        return () => {
        clearInterval(interval)
        }
    }, [])
    
    return (
        <div>REACT NOTES</div>
    )
}

- Q: What is one important rule when using effects?

Each effect should only do one thing. If you need multiple effects, then use multiple useEffect hooks. This makes the effect easier to cleanup


- Q: Why we should think about synchronization instead of lifecycle?

The reason why effects exist is not to run code at different points of life cycle, but to keep component synchronized with some external system (data).

- Q: which is more preferred way between event handlers and useEffect?

Event handlers are always the preferred way of creating side effects. So if possible, don't overuse the useEffect hook. If it can be handled by event handlers, then do it.

- Q: Can you return promise using useEffect?

you can't return promises in useEffect, like passing an async function, however, you can use an async code inside the callback.

- Wrong
useEffect(async function() {},[])

- Correct

useEffect(function() {
    - async code
})

- Q: How to add a loading state ?

const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    const fetchMovies = async () => {
        setLoading(true);
        const res = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await res.json();
        setMovies(data.Search);
        setLoading(false);
    };
    fetchMovies();
}, []);

<Box>
    {loading ? (
        <Loader/>
    ) : (
        <MoviesList>
            <Movie movies={movies} />
        </MoviesList>
    )}
</Box>

// Loader component may contain loading text, or spinners to indicate something is being fetched
function Loader() {
    return <p className="loader">Loading...</p>;
}

! Error handling 

When dealing with asynchronous data, you need to assume that something can go wrong.

- When user suddenly loses internet connection. You can simulate it using the network tab, where you start in slow 3G, then while it is loading, switch to offline mode.

It will forever load because the app never leaves the state. If you also check the logs, it will show that you failed to fetch.

- Q: how can I add an error message on the screen?

It's important to add an error message to the screen, and avoid keeping the loading state forever because the user might think that the data might eventually arrive.

- create an error state
const [error, setError] = useState("");

- Add the error in try catch
useEffect(() => {
    const fetchMovies = async () => {
        try {
            setLoading(true);

            const res = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s={query}`
            );

            if (!res.ok) {
                throw new Error(
                        "Something wen't wrong, while fetchingmovies"
                    );
            }
            
            const data = await res.json();

            - When there's no result for a search query, example for movies, there's no result regarding the search.
            if(data.Response === 'False') {
                throw new Error("Movie not found!
                ")
            }

            setMovies(data.Search);

        } catch (error) {
            console.error(error.message);
            - adding appropriate error message in the console, instead of just using console.log
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    fetchMovies();
}, []);

function ErrorMessage({ message }) {
    return (
        <p className="error">
            <span>❌</span>
            {message}
        </p>
    );
}

- use it in jsx
<Box>
    - If it's loading, show the loader
    {loading && <Loader />}
    - If it's not loading and it doesn't have an error, show the movies list
    {!loading && !error && (
        <MoviesList>
            <Movie movies={movies} />
        </MoviesList>
    )}
    - if there's an error, show the error message component
    {error && <ErrorMessage message={error} />}
</Box>


~ Tricky Parts of useEffect
- 1. Pag alam kung kailan naiinvoke yung arrow function
- 2. pag alam kung anong return value ng arrow function
- 3. pag intindi sa state variable reference



! HOOKS 

- Q: What are react hooks?

Special built-in functions that allows us to hook into React internal mechanism.

Hooks are basically API's that exposes some internal React functionality like 
- creating and accessing state from the Fiber tree
- registering side effects in the fiber tree.
- Manual DOM selections
- access contexts

Since fiber tree is deep inside react, it's usually not accessible, but using hooks such as useState or useEffect lets us hook into that internal mechanism.

~ General rules ng hooks
- 1. Names starts with use, like useState, useEffect, useReducer. Which helps us and React distinguish hooks from regular functions.
- 2. component must be uppercase
- 3. Only call hooks from React functions, this means that you can only call hooks inside a function component or custom hooks, not regular functions, or class components.
- 4. Only call hooks at the top level, don't call hooks inside conditions, loops, nested functions, or after early return.
- 5. yung set function  ay hindi inaupdate yung state immediately.

The good thing about these rules is it's automatically enforces by React's ESLint rules.


- Q: Why do you need to put hooks at the top level?

Because it's necessary to ensure that hooks are always called in the same order.

Remember, when an application is rendered, React creates an React element tree or virtual DOM, it also build a Fiber tree out of a virtual DOM where each element is a fiber. Each fiber contains stuffs like props, list of work, and linked list of hooks used in the component instance.

- So why does hooks rely on order in which they were called?

This list is based on the call order of the used hooks, so for this example, it would be state a, state b, then the useEffect.

- In this context, what does linked mean?

It means that the first element in the list contains a reference to the second element, which has a link to the next element.


Let's use this example, which violates the rule of hooks 

const [a, setA] = useState(23)

if(a === 23) {
    const [b, setB] = useState("")
}

useEffect(fnz, [])

Let's say state A was updated to 7, which triggered a re-render. This creates a problem because, state b was created because it passed the condition, but after the re-render the condition will be false. which means that useState will not be called, and it would no longer exist in the linked list of hooks, the problem with this is the first hook is still pointing to the original second hook (state b), which is now broken, State a links to a non-existent hook, and nothing is pointing to effect z, this destroys the linked list.

- This happens because fibers are not recreated on every render, it also applies to this list, so if a single hook disappears from the list, the order of the list will be broken.


- Why bother having linked list, if it requires this rule to exist?

The linked list which relies to the hook call order, is the simplest way to associate each hook with its value. The order in which the hook is called uniquely identifies the hook.

ex. React knows that hook 1 has a value of 23, and hook 2 has value of empty string, the value is associated with the call order, which is convenient because by using the call order, developers don't need to manually assign names to each hook, which can create multiple problems.

- Q: What's the use of custom hooks?

It allows us to reuse stateful logic among multiple component, any logic containing one or more react hooks.

It enables us to reuse non-visual logic easily, this means we can compose multiple hooks into our own custom-hooks. It also gave function components to have the ability to own state and run side effects at different lifecycle points. Because before v16.8, it was only available in class components.

- Q: What are the two things you can reuse in react?

You can reuse either a piece of UI or a piece of logic.

Want to reuse a piece of UI? Create a component, but if you want to reuse a piece of logic, ask yourself if the logic you want to use contains a hook? If not, use a regular function which could live inside or outside of a component. But if the logic contains a hook, then you should use a custom hook.

- Q: Should hooks do multiple things?

One hook should only have one purpose, it should only do one specific well-defined thing. The idea is to make the custom hook reusable and portable (even across multiple projects).

- Q: Where is custom hook similar to?

Custom hooks are just a javascript function, it can receive and return any data relevant to the custom hook. Actually, it's common to return an object or array from a custom hook.

- Q: Difference between custom hooks and regular function?

Custom hooks need to use one or more React hooks

- Q: What do you need to do in order for React to know that it's a custom hook?

The name must start with use, example useFetch, otherwise it's just a regular function in the eyes of React.

- A good tip when using custom hooks, before creating a custom hoo, make sure it works first then you can refactor it later.


~ Understand hooks better
- 1. Gumawa ng maliit na demo na may kaunting logic.
- 2. Magaral ng design process at iextract yung logic papuntang custom hook.
- 3. Bumalik sa actual component at ulitin yung design process.

~ Paghanap at paggawa ng custom hooks
- 1. Create a function outside of a component named useSomething as a placeholder.
- 2. Get every non-jsx that is related to one or more piece of state.
- 3. Cut and paste it to useSomething
- 4. Find the undefined errors inside the component.
- 5. Inside the hook, return an array or object that the component needs
- 6. Invoke the hook and destructure the results
- 7. Find the not defined errors and pass in the missing arguments to the hook.
- 8. Give the hook a more useful name.
- 9. Give the returned properties a more useful name.
- 10. Extract the hook and place it in the hooks folder.


- An example of creating hooks
import { useEffect, useState } from "react";

const API_KEY = "f7a35250";

export function useMovies(query, callback) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        //will be called if it actually exist, you can use optional chaining for function calls as well
        callback?.();

        // create a controller
        const controller = new AbortController();

        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError("");
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
                    {
                        signal: controller.signal,
                    }
                );

                if (!res.ok)
                    throw new Error(
                        "Something wen't wrong, while fetching movies"
                    );

                const data = await res.json();

                if (data.Response === "False") {
                    throw new Error("Movie not found!");
                }

                setMovies(data.Search);
                setError("");
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.log(error.message);
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        // Will only do a search query, when it's longer that 3 characters.
        if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
        }

        //close movie when new request is added
        // handleCloseMovie();
        fetchMovies();

        // each time new request come, it will abort the request
        return () => {
            controller.abort();
        };
    }, [query]);

    return { movies, loading, error };
}

- Another example of creating custom hooks, useLocalStorageState

export function useLocalStorageState(initialState, key) {
    // - Notice that value and setValue is a generic term, because we want it to be reusable and not be specific
    // Using callback to initialize a state
    const [value, setValue] = useState(
        //If there's no item yet, then return the passed initial state
        () => JSON.parse(localStorage.getItem(key)) || initialState
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    //- This custom hook was specifically made to act like a state, so we're returning an array instead of an object.
    return [value, setValue];
}

- Using the useKey custom hook
export function useKey(key, action) {
    useEffect(() => {
        const callBack = (evt) => {
            if (evt.key.toLowerCase() === key.toLowerCase()) {
                action();
            }
        };

        document.addEventListener("keydown", callBack);

        // remove the event listener, the function for removeEventListener must be the same from the addEventListener
        return () => {
            document.removeEventListener("keydown", callBack);
        };
    }, [action, key]);
}

useKey("Escape", onCloseMovie);

useKey("Enter", function () {
    if (document.activeElement === inputElement.current return;
    setQuery("");
    inputElement.current.focus();
});


! use state additional info 

- Q: What is one important detail of use state?

Initial values passed into useState only matters on initial render

const [isTop, setIsTop] = useState(imdbRating > 8);

because the imdbRating is still undefined, it will result to false, and since the condition inside will only be executed on initial render, it will stay false.

This can be fixed by using a useEffect and updating each time imdbRating updates

useEffect(() => {
    setIsTop(imdbRating > 8)
}, [imdbRating])

Of course, you don't need to use useState for this. If you really need it, then use a derived state.

const isTop = imdbRating > 8;

- Q: How can you use callbacks to initialize state?

You can also pass a callback function instead of just single values, and the value that callback function returns will be used to initialize the state.

- callback function must be pure and can't receive arguments, react will only consider this callback function in the initial render, and will be ignored in subsequence re-renders.
const [watched, setWatched] = useState(() =>
    JSON.parse(localStorage.getItem("watched"))
);

- Q: What is local storage?

It's a key value pair storage available in browser.There, we can store data for each domain, it means that data stored in local storage are only available to an exact URL like http://localhost:3000/ and not http://localhost:3000/sample. 

- Q: How can you use local storage to persist data in the browser?

In this example, we want to store the list of watched movies.

- first way, inside an event handler
For this example, watched is a stale state, so it needs to be spread and add the latest movie. But if it's not needed, then you can just pass the data.

Convert it into string, because you can only store key value pairs in local storage where the value is string.

localStorage.setItem("watched", JSON.stringify([...watched, movie]));

- second way, using in useEffect

useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
}, [watched]);


- use state summary

The useState hook is used to create a state and the setter function resulting from creating a state, to update the state.

You can create a state by using primitive values, but you can also pass in a callback function, for example you need the initial state depending on some computations. This is called lazy evaluation

const [count, setCount] = useState(0)
const [count, setCount] = useState(() => localStorage.getItem('count'))


To update state you can apply a single value or based on the previous value of the state.

setCount(1000);
setCount(count => count + 100);

Make sure not to mutate arrays or objects, replace them

setAges(ages => [...ages, newAge]);


! USE REF SECTION

- Q: What's the wrong way to select a DOM element?

Wrong way of selecting DOM element, it works but it is an imperative way, and react is about declarative, you're manually selecting the element and giving it styles, classes etc.

useEffect(() => {
    const el = document.querySelector(".search");
    el.focus();
}, []);

- Q: What is useRef?

useRef allows a component to create a reference to a DOM element it made. It is similar to useState but when useRef is updated, it doesn't trigger a re-render.

- Q: What actually is a Ref?

Ref stands for reference, it's like a box in which we can put data that we want to be preserved between renders. 

When using useRef, react gives us an object with mutable .current property that is persisted across renders ("normal" variables are always reset)

With this .current property, we can write and read from the ref.

const ref = useRef(100);
ref.current = 1000;

- Q: What are the two good use cases of refs?

Create variables that stays across renders, like preserving previous state, storing the ID of a setTimeout function.

Select and storing DOM elements

- Q: What do you usually store in refs?

Refs are for data that is NOT rendered, it usually appears in event handlers or effects, but not in JSX. Because if it is, just use state.

- Q: What is something you shouldn't do with both state and refs?

Don't read or write .current in render logic, just like state. because it creates a side effect, so these mutations are usually performed in useEffect hook.

- Q: Difference and similarities of state and refs?

Refs are like state with less powers.

They are both persisted across renders

Updating state causes the component instance to re-render, while updating refs doesn't. So if you want to store a data that should re-render the component, then use state. Else, use refs for that that should be remembered by the component over time.

State are immutable but refs are not.

States are updated asynchronously, while refs can be used immediately after updating it.


- Q: So, how can I actually use useRef?

- 1.Create a ref at the top level.

When working with DOM elements, the initial state is usually null
const inputElement = useRef(null);

- 2. Assign the ref to the jsx element as a prop named ref.

These are now connected in a declarative way, which means you don't need to things manually like query selections. Basically, you're telling react that the ref that will contain an input element should be this ref that you created.

<input ref={inputElement} />

- 3. Access the DOM element using ref.current

We need to use effects in order to use refs that contains DOM elements because the ref only gets added after the DOM has already been loaded. Which means it's only accessible in effect.

useEffect(() => {
    inputElement.current.focus();
}, []);

- Another example

function SearchBar({ query, setQuery }) {
    When working with DOM elements, the initial state is usually null
    const inputElement = useRef(null);

    useEffect(() => {
        const focusOnEnter = (evt) => {
            if (document.activeElement === inputElement.current) return;

            if (evt.key === "Enter") {
                setQuery("");
                inputElement.current.focus();
            }
        };

        document.addEventListener("keydown", focusOnEnter);

        return () => {
            document.removeEventListener("keydown", focusOnEnter);
        };
    }, [setQuery]);

    return (
        <input
            ref={inputElement}
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
}

- Q: How can you use ref to create variables that is persisted across renders without triggering?

Let's say we want to track how many decisions a user usually takes before giving a final rating

const rateChangesRef = useRef(0);

useEffect(() => {
    if (userRating) {
        ++rateChangesRef.current;
        console.log(rateChangesRef.current);
    }
}, [userRating]);

If you used a count instead of ref, what would happen is every time it renders it would be reset to 0. 
let count = 0;

! USE REDUCER SECTION 

- Q: What is useReducer? 
useReducer Hook is an alternative way of setting states, it's a more complex and advanced way of managing states, It is similar to useState as it also defines stat. 

- It also produces a state and is an alternative for useState hook.
- updating the state causes the component to re-render
- useful if you have multiple related pieces of states, because it stores related pieces of state in a state object.
- useful if the value of future state depends on the current state

- Q: Why is the reducer function called reducer?

It follows the same idea as the array reduce method. Just how the array reduce method accumulate all array values into one single value, React reducer accumulates all actions into one single state over time.

- Q: What is a reducer and where it is usually used?

A reducer contains all logic to update the state. It decouples state logic from component. Which means we can move all state updating logic from event handlers into one central place, making the component much cleaner and readable.

A reducer is a pure function that always takes in the current state, and the action as an argument, then it returns the next state.

It's usually used when you have more complex states to manage, usually the state is one single object and not just a single value.

- Q: What is an action in useReducer?

The action is an object that describes how to update the state, it contains an action type and the payload which is input data. 

The reducer will determine how to create the next state based on the action type and payload

- Q: What is a dispatch function in useReducer?

useReducer returns a dispatch function that trigger state updates, by "sending" actions from event handlers to reducers.

- Q: What's the difference between useState and useReducer?

Community convention, when using useState, every piece of state are separate, while in useReducer, every piece of state in the component are group in one object.
For example, valueToAdd and count are separate, but in useReducer it would be placed in the same object.


- Q: Can you use pure useState for managing states?

As state updates become more complex, just using useState to manage every state is not enough, in certain situations
- Some components has a lot of states variables and state updates spread across multiple event handlers all over the component.Which can be overwhelming and hard to manage.
- When multiple state update needs to happen at the same time (as a reaction to the same event). ex. the player started a new game, the score will reset to 0, the gameLoop will be reset, etc.
- When updating one piece of state depends on one or multiple other pieces of state.

In these situations, useReducer can be very helpful.

- Q: Can you explain how useReducer works practically?


const [state, dispatch] = useReducer(reducer, initialState);

- Let's say you want to update the state in useReducer. call the dispatch function that is returned from useReducer.

dispatch({
    - This object isn't fixed, but it's a standard adopted by most developers
    type: 'updateDay',
    payload = 23
})

- The reducer will take the action and current state and form an updated state which is called next state in this context. So this state update will trigger re-render for the component instance.

- In useState, let's say you  updated the state, it will simply return the next state, then trigger the re-render.


- The useReducer function takes in both initial state and the reducer function
const [count, dispatch] = useReducer(reducer, 0);

the useReducer hook returns the state (count) and the dispatch function which is used to update the state.

state refers to the current state and action refers to the the value we passes to the dispatch
function reducer(state, action) {
    - create constant strings to avoid typo's
    const INCREMENT_COUNT = "increment";
    const DECREMENT_COUNT = "decrement";
    const SET_COUNT = "setCount";

    - What we return here will be the updated state
    -We will also use switch here later
    if (action.type === INCREMENT_COUNT) return ++state;
    if (action.type === DECREMENT_COUNT) return --state;
    if (action.type === SET_COUNT) return action.payload;
    
}

- using the dispatch function to update the state, the argument we pass in the dispatch will be used in the action, in the reducer function
const inc = function () {
    dispatch({
        type: "increment",
        -This payload here is for demonstration purpose only, there's no need to pass in this value since the reducer should know by itself how to perform these actions
        // payload: 1,
    });
};

-Q: How can you access the state of a useReducer?

state.property like state.count o state.valueToAdd

- Q: How useReducer becomes useful?

Not only that it groups related pieces of states,it also makes debugging easier, since you can just log the state to see the value of states. 
Also using useReducer, you can dispatch multiple state changes at once

- Q: How can you update the state in useReducer?

Invoke the dispatch function. when it is invoked, React finds the reducer function and invokes it. 
The state parameter refers to the current value of the state
The action parameter (by convention), refers to the argument that is passed in dispatch function, It can either have one argument or none. 

- Q: What are the rules of reducer functions?

- 1. You must return the updated state
- 2. If you don't return something, it will be undefined.
! 3. Don't put async/await, requests, promises and outside variables.
! 4. Similar to useState, you can't directly modify a piece of state. Ex. spread the current state so the values in the state doesn't get discarded. 
{ ...state, count: state.count + 1}
{ ...state, valueToAdd: state.valueToAdd + 1}
{ count: 0, valueToAdd: 0}

- Q: What is the possible problem for reducer function when it comes to action? How can I solve it?

It's hard to figure out, how action can be accessed, since you can use dispatch for multiple handler.

~ Solution
- Kapag kailangang magmodify ng state, iinvoke yung dispatch at magpass ng action object
- Yung action object ay palaging may type property na string. Makakatulong para maidentifyng reducer kung anong state yung iuupdate.
- Para magcommunicate ng data sa reducer, gagamit ng payload property sa action object.

const handleInputChange = (evt) => {
    dispatch({
        type: "change-input",
        payload: Number(evt.target.value) || 0,
    });
};

const handleIncrement = () => {
    dispatch({
        type: "increment-count",
        payload: 1,
    });
};

- Q: What can you do to avoid action type errors?

To avoid action type errors, especially typo's, you can place the action types in a constant variable, we're doing this so even if, there's a typo, an error will be visible, unlike when you directly compare an action type.
- A common convention is to use UPPERCASE and underscore as a separator like INCREMENT_COUNT

-1. declare constant action types ex. CHANGE_INPUT = 'change_input';
-2. gamitin sa useReducer kapag ipagcocompare na yung action type
-3. gamitin yung value ng constant action types sa action object na nirereturn 
- ex. dispatch({ type: CHANGE_INPUT }) 
const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";

- Q: How can you update state in useReducer?

1. Create an action type constant ex. INCREMENT_COUNT = 'increment_count';
2. Invoke the dispatch function in the handler ex. const handler = () => { dispatch({ type: INCREMENT_COUNT }) }
3. Add the statement to the reducer ex. case INCREMENT_COUNT: return {...state, count: state.count + 1} 

~ pag gamit ng action object sa reducer.
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNT:
            return { ...state, count: state.count - 1 };
        case CHANGE_INPUT:
            return { ...state, valueToAdd: action.payload };
        case ADD_COUNT:
            return {
                - Maooverwrite if sa later part ng object ay merong kapareho na property.
                - yung reason kaya naglalagay tayo palagi ng ...state ay para hindi malimutan na mailagay yung ibang property. kahit na alam mo na ilan lang yung iaaccess
                - If hindi mo sspread yung state, then nag aadd ka ng panibagong property, then hindi sya masasama sa object na irereturn. maiignore lang.
                ...state,
                valueToAdd: 0,
                count: state.count + state.valueToAdd,
                - iniiwasang dagdagan ng logic sa payload, since prone sa syntax error at duplicated code, kase pwedeng mainvoke yung dispatch sa ibat-ibang handler
            };
        default:
            -- fallback if ever walang magmatch, either magthrow ka ng error or ignore if walang magmatch na action type
            > throw new Error('Unexpected action type: ' + action.type);
            > or return state;
    }
};

~ Immer library
?Ano ba yung immer? 
* Library para sa pagmutate ng state directly.

- Pwedeng imutate yung state directly
- Hindi kailangang magreturn ng value, pero need magreturn para mabreak yung case. 

~ using immer library
- 1. import { produce } from 'immer';
- 2. iwrap yung reducer function sa produce 
> ex. const [state, dispatch] = useReducer(produce(reducer), {...});
- 3. Pwede mo na baguhin yung state directly.

- A demonstration of useReducer

// Creating an object for states instead of creating a reducer for multiple pieces of states
const initialState = {
    count: 0,
    step: 1,
};

//state refers to the current state and action refers to the the value we passes to the dispatch
function reducer(state, action) {
    console.log(state, action);
    const INCREMENT_COUNT = "increment";
    const DECREMENT_COUNT = "decrement";
    const SET_COUNT = "setCount";
    const SET_STEP = "setStep";
    const RESET = "reset";

    // - Switch implementation
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + state.step };
        case DECREMENT_COUNT:
            return { ...state, count: state.count - state.step };
        case SET_COUNT:
            return { ...state, count: action.payload };
        case SET_STEP:
            return { ...state, step: action.payload };
        case RESET:
            return initialState;
        default:
            throw new Error("Unknown Action");
    }
}

function DateCounter() {
    //The useReducer function takes in both initial state and the reducer function
    const [state, dispatch] = useReducer(reducer, initialState);

    //destructure the properties inside state
    const { count, step } = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + state.count);

    const dec = function () {
        dispatch({
            type: "decrement",
            // payload: 1,
        });
    };

    const inc = function () {
        // using the dispatch function to update the state, the argument we pass in the dispatch will be used in the action, in the reducer function
        dispatch({
            type: "increment",
            // This payload here is for demonstration purpose only, there's no need to pass in this value since the reducer should know by itself how to perform these actions
            // payload: 1,
        });
    };

    const defineCount = function (e) {
        dispatch({
            type: "setCount",
            payload: Number(e.target.value),
        });
    };

    const defineStep = function (e) {
        dispatch({
            type: "setStep",
            payload: Number(e.target.value),
        });
    };

    const reset = function () {
        dispatch({
            type: "reset",
        });
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

- Another demonstration of useReducer, Creating the React Quiz. For missing files, you can find it in the react course files

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./MainComponent";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";

let initialState = {
    questions: [],
    //a string of current status of application that changes over time. Loading, error, ready which indicates that the data has arrived and is ready to start the quiz, active which indicates that the quiz is running, and finished, once the quiz is finished

    //loading, error, ready, active, finished
    status: "loading",
    currentQuestionIndex: 0,
    answer: null,
    score: 0,
    highestScore: 0,
    remainingSeconds: null,
};

const SECONDS_PER_QUESTION = 30;
const DATA_RECEIVED = "dataReceived";
const DATA_FAILED = "dataFailed";
const START_QUIZ = "startQuiz";
const ANSWER_QUESTION = "answerQuestion";
const NEXT_QUESTION = "nextQuestion";
const FINISHED_QUIZ = "finishedQuiz";
const RESTART_QUIZ = "restartQuiz";
const UPDATE_TIME = "updateTime";

function reducer(state, action) {
    switch (action.type) {
        case DATA_RECEIVED:
            return { ...state, questions: action.payload, status: "ready" };
        case DATA_FAILED:
            return { ...state, status: "error" };
        case START_QUIZ:
            return {
                ...state,
                status: "active",
                remainingSeconds: state.questions.length * SECONDS_PER_QUESTION,
            };
        case ANSWER_QUESTION: {
            //Get the current question
            const question = state.questions.at(state.currentQuestionIndex);

            return {
                ...state,
                answer: action.payload,
                score:
                    action.payload === question.correctOption
                        ? state.score + question.points
                        : state.score,
            };
        }

        case NEXT_QUESTION:
            return {
                ...state,
                answer: null,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            };

        case FINISHED_QUIZ:
            return {
                ...state,
                status: "finished",
                highestScore:
                    state.score > state.highestScore
                        ? state.score
                        : state.highestScore,
            };

        case RESTART_QUIZ:
            return {
                ...initialState,
                questions: state.questions,
                status: "ready",
            };

        case UPDATE_TIME:
            return {
                ...state,
                remainingSeconds: state.remainingSeconds - 1,
                status:
                    state.remainingSeconds === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Action Unknown");
    }
}

export default function App() {
    const [
        {
            questions,
            status,
            currentQuestionIndex,
            answer,
            score,
            highestScore,
            remainingSeconds,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchQuestions() {
            const res = await fetch("http://localhost:3001/questions");

            //Creating an action type which sets the status to error
            if (!res.ok) {
                dispatch({
                    type: "dataFailed",
                });
            }

            const data = await res.json();
            //Creates an action type which sets the question in the state with the questions received from API
            dispatch({
                type: "dataReceived",
                payload: data,
            });
        }

        fetchQuestions();
    }, []);

    const totalQuestions = questions.length;
    const totalPoints = questions.reduce(
        (accumulator, question) => accumulator + question.points,
        0
    );

    return (
        <div className="app">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                    <StartScreen
                        totalQuestions={totalQuestions}
                        //Here we can just pass the dispatch, instead of creating a handler
                        dispatch={dispatch}
                    />
                )}
                {status === "active" && (
                    <>
                        <Progress
                            totalQuestions={totalQuestions}
                            totalPoints={totalPoints}
                            currentQuestionIndex={currentQuestionIndex}
                            score={score}
                            answer={answer}
                        />

                        <Question
                            answer={answer}
                            dispatch={dispatch}
                            question={questions[currentQuestionIndex]}
                            score={score}
                        />

                        <Footer>
                            <Timer
                                dispatch={dispatch}
                                remainingSeconds={remainingSeconds}
                            />
                            <NextButton
                                dispatch={dispatch}
                                answer={answer}
                                currentQuestionIndex={currentQuestionIndex}
                                totalQuestions={totalQuestions}
                            />
                        </Footer>
                    </>
                )}

                {status === "finished" && (
                    <FinishedScreen
                        dispatch={dispatch}
                        score={score}
                        totalPoints={totalPoints}
                        highestScore={highestScore}
                    />
                )}
            </Main>
        </div>
    );
}

- Component to show when the quiz is finished
function FinishedScreen({ score, totalPoints, highestScore, dispatch }) {
    const percentage = (score / totalPoints) * 100;

    return (
        <>
            <p className="result">
                You scored <strong>{score}</strong> out of {totalPoints} (
                {Math.ceil(percentage)}%)
            </p>

            <p className="highscore">(High Score: {highestScore} points)</p>

            <button
                onClick={() =>
                    dispatch({
                        type: "restartQuiz",
                    })
                }
                className="btn btn-ui">
                Restart Quiz
            </button>
        </>
    );
}

- Component to go to the next question

function NextButton({
    dispatch,
    answer,
    currentQuestionIndex,
    totalQuestions,
}) {
    if (answer === null) return null;

    //Show next button if the final question hasn't been reached, but if it, show finish quiz button
    if (currentQuestionIndex < totalQuestions - 1)
        return (
            <div>
                <button
                    onClick={() =>
                        dispatch({
                            type: "nextQuestion",
                        })
                    }
                    className="btn btn-ui">
                    Next
                </button>
            </div>
        );

    if (currentQuestionIndex === totalQuestions - 1)
        return (
            <div>
                <button
                    onClick={() =>
                        dispatch({
                            type: "finishedQuiz",
                        })
                    }
                    className="btn btn-ui">
                    Finish Quiz
                </button>
            </div>
        );
}

- Component that shows answer options
function Options({ question, dispatch, answer, score }) {
    //Checks if the user has  answered
    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    onClick={() => {
                        //Defines an action type that changes the answer state
                        dispatch({
                            type: "answerQuestion",
                            payload: index,
                        });
                    }}
                    key={option}
                    className={`btn btn-option ${
                        index === answer ? "answer" : ""
                    }
                    ${
                        hasAnswered
                            ? index === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""
                    }
                    `}
                    disabled={hasAnswered}>
                    {option}
                </button>
            ))}
        </div>
    );
}

- Component for showing current progress like current question and current points

function Progress({
    totalQuestions,
    totalPoints,
    currentQuestionIndex,
    score,
    answer,
}) {
    return (
        <header className="progress">
            - Max value would be the total number of questions and the value is the current index 
            <progress
                max={totalQuestions}
                value={currentQuestionIndex + Number(answer !== null)}
            />
            - Show current question number 
            <p>
                Question <strong>{currentQuestionIndex + 1}</strong> /
                {totalQuestions}
            </p>
            - Your total points 
            <p>
                {score} / {totalPoints} points
            </p>
        </header>
    );
}

- Component for questions
function Question({ question, dispatch, answer, score }) {
    // - Here we're just displaying the question and passing the dispatch function, question, the answer of the user, and the score
    return (
        <div>
            <h3>{question.question}</h3>
            <Options
                dispatch={dispatch}
                question={question}
                answer={answer}
                score={score}
            />
        </div>
    );
}


- Setup the start screen, this will be displayed whenever the status is ready
function StartScreen({ totalQuestions, dispatch }) {
    return (
        <div className="start">
            <h2>Welcome to the React Quiz!</h2>
            <h3>{totalQuestions} question to test your React mastery</h3>
            <button
                onClick={() =>
                    dispatch({
                        type: "startQuiz",
                    })
                }
                className="btn btn-ui">
                Let's Start
            </button>
        </div>
    );
}

- Setting up the timer
function Timer({ dispatch, remainingSeconds }) {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    useEffect(() => {
        //get the id that set interval returns and call the dispatch every 1 seconds
        const id = setInterval(() => {
            dispatch({
                type: "updateTime",
            });
        }, 1000);

        //Cleanup the interval function using the id it return
        return function () {
            clearInterval(id);
        };
    }, [dispatch]);

    return (
        //Display the time, if minutes is less than 10, ex. 9, then add 0. 09, same for the seconds
        <p className="timer">
            {minutes < 10 && "0"}
            {minutes}:{seconds < 10 && "0"}
            {seconds}
        </p>
    );
}


! HTTP SECTION 

?Paano makakapagfetch ng data mula sa isang API?

Kapag nagsearch yung user, gagawa tayo ng request sa Unsplash API
then magbabalik si API ng array of objects na naglalaman ng details ng bawat image as a response.

HTTP Request - process ng paggawa ng network request sa isang API
HTTP Response - yung binabalik na data ng isang API after mareceive yung request

- Walang tools si react sa paggawa ng HTTP request, ang ginagawa nya lang ay ipakita yung content at maghandle ng events. 

? 3 parts ng HTTP request
request line - url na nirerequest ng user
headers - provides authentication to tell who is making the request
body - contains information that we are requesting

?3 parts ng HTTP response
status line - contains request status code, headers, body

? Request method - indicates general goal of request

~ Common HTTP methods 
- GET - get information from the server
- POST - tell server to create some new record
- PUT - Completely update an existing record
- PATCH - Partially update an existing record
- DEL - delete a record

? status code - indicates the status of the request, whether it was successful or not

~ Setting up JSON Server
- 1. Install JSON-server sa terminal gamit NPM
>npm install json-server
- 2. Gumawa ng db.json, dito masstore data.
>db.json then sa loob ay { "books": [] }
- 3. Gumawa ng command sa script para marun yung JSON-Server, sa package.json

- runs the json server, and set the port to 3001 and watch for a certain file named questions.json inside a folder called data
"server": "json-server --port 3001 --watch data/questions.json --host 127.0.0.1 -delay 500"

-delay 500 is an artificial delay where the API will take the time specified before fetching the data.

> "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"
- 4. Irun yung command.
> npm run server


Gagamit ka ng dalawang terminal, isa para sa JSON server at isa para sa React App, kaya ginawang 3001. Kase nasa port 3000 si React so, gamit na yung port.

- Paano nagana yung JSON-Server API

si client ay gagawa ng post request sa route na http://localhost:3001/books
yung /books yung key natin sa db.json. yun yung key na gamit para maidentify na gusto nating gumawa ng operation sa books.
then yung object sa body ng request, ay iistore sa JSON server. then automatically malalagyan yung inserted na data ng id. After nung ibabalik na yung object na may id as a response.

get request sa pag fetch ng data
put request para sa pag edit ng books
delete request para magdelete ng book

~ Introducing Rest Client

?Way para matest yung API kahit hindi muna maglagay ng react code? 
*Gagamit ka ng Standalone API client - purpose ay para makarequest sa API server, para sa testing. Para masure din na yung result ay within sa expected na output
 
?sa VS Code merong Standalone API client
*Install mo lang yung Rest Client

?Paano sya gagamitin?
- gumawa ng file na api.http, dito mo ilalagay yung mga API requst at documentation kung paano maginteract sa API.
- dun isulat yung mga request

- Request example
requestMethod url http version
header name: header value
content

>GET http://localhost:3001/books HTTP/1.1
>Content-Type: application/json

?Seperate different request
# comments
### - separator

- #Display yung data sa database
GET http://localhost:3001/books HTTP/1.1
Content-Type: application/json

- Display yung content ng specific na id
GET http://localhost:3005/albums?userId=23 HTTP/1.1
Content-Type: application/json 

###

- #Inser new book
POST http://localhost:3001/cities HTTP/1.1
Content-Type: application/json

{
    "title": "Harry Potato"
}

### 

- #Update Book Title
PUT http://localhost:3001/books/1 HTTP/1.1
Content-Type: application/json

{
    "title" : "Kick Butowski"
}

### 

- #Delete ng book
DELETE http://localhost:3001/books/6 HTTP/1.1
Content-Type: application/json


~ AXIOS
? Paano iinstall si at iimport axios
> npm install axios
> import axios from "axios";

?Paano nagwowork ang AXIOS? 
!Make sure na maglagay ng async at awati lalo na sa pagstore ng results
> Request method and our url
const searchImages = async (searchStr) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            - Headers na idadagdag natin sa request
            Authorization: "Client-ID zxcaastqwtHkqwe",
        },
        params: {
            - Key value pairs na magiging query at madadagdag sa url
            query: searchStr,
            per_page: 15,
        },
    });
    return response.data.results;
};

> const createRecord = async () => {
>     const response = await axios.post("http://localhost:3001/books", {
>         headers: {
>             Content-Type: application/json
>         }
>     })
> } 

~ fetching using  fetch API
> fetch(url)
>     .then((res) => res.json())
>     .then((res) => console.log(res))
>     .catch((err) => console.log(err));

- fetching data using fetch async await
>const fetchData = async () => {
     ! kapag nag fefetch ng data, gumamit ka ng try catch
>    try {
         ! Remember that in fetch requests in range 4xx to 5xx is not treated as an error, it indicates a successful request.
>        const response = await fetch(url);
>        if(!response.ok) {
>        setIsLoading(false);
>        setIsError(true)
>       }
>        const data = await response.json();
>        setUsers([...data]);
>    } catch (error) {
>        console.log(error);
>    }
>};
> fetchData();

! ROUTING 

- Q: How does routing work in web application?

When routing are used in web application, we're matching different URLS to different UI views, for React, each URL is matched with specific react component. This matching between URL and a component is called route. 

- Q: What happens when a route gets visited?

When one specific URL gets visited, the corresponding React component will be rendered. Example, when visiting this url www.example.com, you could show the landing page, but when you visit www.example.com/login, then you could show the login component

- Q: What's the advantage of routing in terms of navigation?

It enables users to navigate between different application pages using the browser URL, it also keeps the UI in sync with the current browser URL.

- Q: What is React router?

React router is a third part package that handles routing, since react is a library and not a framework. We need to add routing capabilities ourself.

React router is important because routing is fundamental for creating single-page applications (SPA). 

- Additional Information about Single Page Applications

Application executed entirely on the client-side (browser)
It heavily relies on routes, where different URL's corresponds to different views(components)

- Q: How does Single-page Application works?

- When a user clicks on a link provided by the Router, the browser URL changes, in React this is usually done by React router.
- Changing the URL triggers the DOM to be updated as well, in SPA's it's always javascript that is used to update the page (DOM).
- The page is updated by JavaScript, meaning that there's no page reload. Which is the point of Single-page Applications, an entire app in just one page, without hard reloads. Which makes it feel like a native desktop app or a mobile application.

- If the URL changes, React router and React will update the DOM by rendering the component corresponding to the new URL.

- Q: What usually happens when we click a link in normal webpage?

When clicking on a link, the browser loads a new page and the shows it

- Q: What if I want to display external data in my SPA?

The component can just load additional data from a server, usually trough some kind of web API. So While single page app runs entirely on the client, it can always communicate with the server to fect data it needs. 

- Q: Should you separate page components?

Yes, it's bettter to put pages component in a folder named pages

- Q: So, how can I setup react router?

- install react-router-dom para sa navigation
> npm i react-router-dom

- Q: How can I setup routes using react router?

-iwrap yung app sa index.js sa <BrowserRouter>, or you can directly wrap it in the app.
import {BrowserRouter} from 'react-router-dom';

<BrowserRouter> <App /> </BrowserRouter>

- import routes sa App at gumawa ng mga route

<div>
    - This hello world will stay, while the component in the routes changes
    <h1>Hello World</h1>
    <BrowserRouter>
        - Where URL will be defined using the path prop we can define the path and the component that is shown when the path gets visited 
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            - Will be shown if ever there's no match in the URL.
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
</div>


- Q: What happens when you use an anchor link instead of <Link> ?

The page would reload, which is not desirable since we want seamless transition from one page to another, by simply replacting the DOM content of the page.

- Q: What if I want to know what current Link i'm visiting?

Then you can use <NavLink>, it give the current visited link a class of active, so you can use it to style the link

- Q: What's the purpose of storing state in the URL?

Shouldn't you useState for that? Well, URL is also a good place to store UI state and an alternative to useState in some situation. An example of this would be open/closed panels, currently selected list items, list sorting order, applied list filters

Why though?

- Placing state in the URL is an easy way to store state in a global place that is easily accessible to all components in the app. Usually we need to place the state in the parent component and pass it down using props, but if the state is placed in the URL, we can read the value from there when the component is in the component tree.

- It's a good way to pass data from one page to the next page, without having that data stored in some temporary place in the app.

- It makes it possible to bookmark and share the page with the exeact UI state it had at the time.

- Q: So, how can I store the state in the URL?

To store state in the URL, we use Params (Parameters) to pass data to the next page, and Query String to store global state that is accessible everywhere

ex. www.test.com/app/cities/lisbon?lat=38.72&lng=9.141

Here the param is lisbon, which made the page load information about the city of Lisbon.

- By creating a link that points to a URL with param, we're able to pass the name of the city to the next page whenever that link is clicked.

Query string is similar, in the example above, we store the LAT and LNG pieces of state in a query string which corresponds to a specific coordinates on the map.


- 1. Create a new route
<Route path="cities/:id" element={<City />} />
- 2. Link to that route
Here, its placed in the actual place where it will be clicked.
- Just pass the id without slash, because in this format, it will be simply added to the current URL, but if you added a slash, it would go to the root URL and the ID.
<Link to={`${id}`} className={styles.cityItem}>
    <span className={styles.emoji}>{emoji}</span>
    <h3 className={styles.name}>{cityName}</h3>
    <time className={styles.date}>({formatDate(date)})</time>
    <button className={styles.deleteBtn}>&times;</button>
</Link>
- 3. In that route, read the state from the URL
In the <City />, we will use

const params = useParams()
console.log(params) //Will output {id: 12551255}


- Using the query string is very similar to params
<Link
    to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    className={styles.cityItem}>
    <span className={styles.emoji}>{emoji}</span>
    <h3 className={styles.name}>{cityName}</h3>
    <time className={styles.date}>({formatDate(date)})</time>
    <button className={styles.deleteBtn}>&times;</button>
</Link>

- Now you can access both lat and lng globally, for every component
- Similar to useState, it returns an array with the current state, usually called searchParams, and a function to set the searchParams
const [searchParams, setSearchParams] = useSearchParams();
const lat = searchParams.get("lat");
const lng = searchParams.get("lng");

- Q: What is a programmatic navigation? and how can I use it?

Programmatic navigation means moving to new URL without the user having to click any link. Example after submitting a form, we want the user to automatically move to a new page.

-useNavigate hook returns a function called navigate, we can use it to move to a any URL
const navigate = useNavigate();
<div onClick={() => {navigate("form")}}>


<Button
    type="back"
    onClick={(e) => {
        e.preventDefault();
        -will go back 1 step back, you can also move forward by putting +1 or 2 etc.
        navigate(-1);
    }}>
    &larr; Back
</Button>

- Q: How about the Navigate component, how can you do programmatic navigation with that?
You can use this if you can't use the navigate function that comes from useNavigate.

Navigate component is like redirection, as soon as this route is hit, then it will redirect to the specified path
<Route index element={<Navigate replace to="cities" />} />



! React Styling 

- Q: What are the styling options for react applications?

First, we have Inline CSS where we can apply styling to JSX elements using the style prop. In terms of usage, it's more common than in regular HTML because of React's separation of concern. When it comes to scope, an inline css is scoped to the particular JSX element it's applied to (locally scoped). 

We also have external styling using CSS file or SASS, which is applied through the classes using className prop. External styling have global scope, which means that every JSX element in the entire application cany use any of the classes in the external CSS file.

CSS modules, are similar to regular CSS files, with the difference that we write one CSS file for each component, the style of that component will be scoped to that component. Which makes it inaccessible for other component. This makes the component modular and reusable and it better reflects React's separation of concern.

CSS-in-JS libraries like Styled components, here you're writing the CSS in javascript file, so in the same file where you components are defined. What's special about a CSS in JS library is that it allows us to create React components that has styles dirrectly applied to them. Which can be used just like regular components

You can use utility-first CSS framework like Tailwind, in tailwind predefined utility classes are used to define individual styles, without having to leave the JSX markup.

Use a component library like Material UI, Mantine, Chakra UI, or ShadCN ui.


- Q: What issue can you face for having an external styling?

In big projects, because you don't know which components are using which classes, and when one of the classes gets updated, it will affect other components. Or if a dev creates a new class that already exists, it will create clashes between class names. In professional projects CSS is almost never global, CSS should be scoped to an individual component

- Q: Why do we have so many options to style our react application?

This is because React is unopinionated to many aspects of building web application. This includes, styling. React doesn't care how application are styled.

- Q: How can I use CSS modules?

CSS Modules comes out of the box for both creat-react-app and vite. So you don't need to install anything to make it work.

- Create a file and follow this convention. ComponentName.module.css ex. HomePage.module.css
- Create classes inside the CSS file just like regular CSS
- import the css module
import styles from "./PageNav.module.css";
- use it in jsx by accessing the styles
<nav className={styles.nav}>...</nav>

- Q: What happens when you use CSS modules?

If you inspect an element, you will see a random class name, that's what CSS module does, it takes the class name we defined and attact random ID to the end. So if you made another class with the same name, it would get a different id.

This avoid the situation where another dev might accidentaly create an already existing class name, which might affect other components that uses that class name.

- Q: When should you use global CSS?

You can use it for things like CSS reset, creating style guide, setting fonts. Aside from css modules, you can also include global CSS file for that. 

Don't add classes, just use it purely for the purpose mentioned above.

Just like what you've been doing, add the index.css in your files and import it in the main.jsx or index.js (import './index.css')

- Q: How can you add global styling using CSS module?

You need to use global function ex.
:global(.className) {
    background-color: yellow;
}

Access the added active class by react router 
.nav :global(.active) {
    background-color: green;
}

- When adding classNames, make sure it's in javascript styling. don't use test-class, use testClass instead.

- Q: How can you avoid having flat structure and cluttered files in your components and css modules?

You can make a folder for each component. There, you can place anything related with that specific component, including your css module.

- Q: How can you add nested routes?


<Route path="app" element={<AppLayout />}>
- element prop doesn't have to be a component, you can use a regular element as a placeholder
<Route path="cities" element={<p>List of cities</p>} />
<Route
path="countries"
element={<p>List of countries</p>}
/>
<Route path="form" element={<p>Form</p>} />
</Route>

Where is this going to be displayed? That's where the Outlet comes in. You just need to know where you want to display one of these child routes. In this case I want to display it in the Sidebar component

<Outlet/>

- Q: What happens when you add <Outlet/> ?

React router will see the URL made out of two parts, first it saw the app so it displays the corresponding component for that, then it saw the second part which is cities part, so it will go to the nested parts and render the first one to match (because if you have multiple compoonents with the same path, it will render the first one to match)

- Q: What if you want to show a default route?

You can do that using an index route, it's basically a default child route that is matched if no other routes specified matched.
<Route index element={<Homepage />} />


<Route element={<AppLayout />}>
    <Route index element={<p>An example of index element</p>} />
    <Route path="cities" element={<p>List of cities</p>} />
    <Route
        path="countries"
        element={<p>List of countries</p>}
    />
    <Route path="form" element={<p>Form</p>} />
</Route>

! CONTEXT API SECTION 

- Q: What is context API?

Context API is a system to pass data throught the app without manually passing props down the tree.

- It allows us to broadcast global state to the entire application

- Q: What are the two parts of a context API?

- provider is a component that specifies data you want to share, it gives all child components access to value. It can be placed anywhere in the component tree, but it's common to put it in the parent component.

The value is the data we want to make availabel (usually state, and function).

- consumer are component that reads the provided context value. You can create as many consumers as needed for any context provider.

- Q: What problem does Context API solves?

When state are lifted to the nearest parent component, you need to pass it to every child component, which is called prop drilling.

Although good component composition is a good solution, it doesn't always work. context API allows ever component in the tree to read the state or data that a context shares. 

- Q: What happens when context value gets updated?

All consumers will be re-rendered, every components that reads the context value gets re-rendered.

- Q: Should you use Context to replace props?

Context are not replacement for props, both should be used depending on the situation, context are also not replacement for redux.

~ Context 
Context are usually made in the top most of the component hierarchy, wrapping the App component. While context objects are placed inside a folder named context.
<ContextObject> 
    <App />
</ContextObject> 

- Q: How can you use context?

- 1. Create the context
Name the context based on the data that you want to store. For example books
const BookContext = createContext();

- Q: How can you use the Context Object?

<BookContext.Provider></BookContext.Provider>

- 2. Specify the data you want to share

Using the provider, specify the data you want to share using the value prop, the data can be single-value, array or objects. The value of the context will be shared to all child components.

<BookContext.Provider value={5}></BookContext.Provider>

- 3. Use the data in the component

const number = useContext(BookContext)
const { navigate, currentPath } = useContext(NavigationContext);


- Another example of using the Context API, here it is used inside the App component

- Create the context
const PostContext = createContext();

- Provide the context value
<PostContext.Provider
    value={{
        posts: searchedPosts,
        onClearPost: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
    }}>
    <section>
        <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="btn-fake-dark-mode">
            {isFakeDark ? "☀️" : "🌙"}
        </button>

        <Header />
        <Main />
        <Archive />
        <Footer />
    </section>
</PostContext.Provider>

- Consume the context value
const { onClearPost } = useContext(PostContext);
const { searchQuery, setSearchQuery } = useContext(PostContext);

- Q: How does Context API make component reusable?

Not only it makes it reusable, it also makes it standalone. Usually you need to pass in props, but when you use Context API you can avoid that.

- Q: What is a custom provider?

Custom provider is the same as provider, with the difference that it is user defined.

- Q: How can I change the value of a context?

- You need to create a custom provider
const BookContext = createContext();

export const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const getBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks((b) => [...b, ...response.data]);
    };
    const booksData = { books, getBooks };
    return (
        <BookContext.Provider value={booksData}> {children} </BookContext.Provider>
    );
};

- Can you give me another example of creating a custom provider?

import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

- create the context
const PostContext = createContext();

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

- creating the custom provider
function PostProvider({ children }) {
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );

    const [searchQuery, setSearchQuery] = useState("");

    - Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                  `${post.title} ${post.body}`
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
              )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }
    - create the object that will be passed to the context
    const postData = {
        posts: searchedPosts,
        onClearPost: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
        createRandomPost,
    };

    - return the value, and use the children used in the consumer
    return (
        <PostContext.Provider value={postData}>{children}</PostContext.Provider>
    );
}
- Export both the custom provider and the context. It will be used in the App.js
export { PostContext, PostProvider };

- Import the Custom provider and the Context
import { PostProvider, PostContext } from "./PostContext";

function App() {
    // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
    const [isFakeDark, setIsFakeDark] = useState(false);

    useEffect(
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark]
    );

    return (
        <section>
            <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="btn-fake-dark-mode">
            {isFakeDark ? "☀️" : "🌙"}
            </button>
            
            <PostProvider>
                <Header />
                <Main />
                <Archive />
                <Footer />
            </PostProvider>
        </section>
    );
}

- Q: How can I use hooks in custom provider?

- custom hook for posts, this is a common pattern where the context provider and the hook are in the same file.
function usePosts() {
    const context = useContext(PostContext);
    return context;
}

- Now you don't need to expose the Context, you can just use the usePosts hook, it's like creating an API for the context
export {
    PostProvider,
    usePosts,
    // PostContext,
};

- Q: What would happen if you try to use usePosts inside the App component?

It will display undefined, because the context only provides the value to it's children components. So you need to address it in the usePosts hook.

function usePosts() {
    const context = useContext(PostContext);
    - So the developer know that there's something wrong
    if (context === undefined)
        throw new Error("Post Context was used outside of PostProvider");

    return context;
}

const providerValue = usePosts();
console.log(providerValue);


- Q: How do I know which data need to be used in context?

We have terms we used to figure out the best state design, you need to look and classify states if it's an application state or component state.
- Application state - yung data ay ginagamit ng maraming components, so mas magandang ilagay sya sa context o redux.
- Component state -  onting components lang yung gumagamit ng data, example ay input state, isOpen state

!Gagamitin mo paden si props, pagsasamahin mo yung context at props

- Implementing authentication using context API + reducer, for a detailed view, check wordwise application

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const LOGIN = "login";
const LOG_OUT = "logout";

const initialState = {
    user: null,
    isAuthenticated: false,
};

function reducer(state, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload, isAuthenticated: true };
        case LOG_OUT:
            return { ...state, user: null, isAuthenticated: false };
        default:
            throw new Error("Unknown Action type");
    }
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(
        reducer,
        initialState
    );

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({
                type: LOGIN,
                payload: FAKE_USER,
            });
        }
    }
    function logout() {
        dispatch({
            type: LOG_OUT,
        });
    }

    const authData = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error("AuthContext was used outside of AuthProvider");
    return context;
}

- User component
export { AuthProvider, useAuth };

function User() {
    // const user = FAKE_USER;

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleClick() {
        logout();
        navigate("/");
    }

    return (
        <div className={styles.user}>
            <img src={user?.avatar} alt={user?.name} />
            <span>Welcome, {user?.name}</span>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

- actual login form
import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
    // PRE-FILL FOR DEV PURPOSES
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("qwerty");
    const { login, isAuthenticated } = useAuth();

    const navigate = useNavigate();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (email && password) {
            login(email, password);
        }
    }

    useEffect(() => {
        if (isAuthenticated) navigate("/app", { replace: true });
    }, [isAuthenticated, navigate]);

    return (
        <main className={styles.login}>
            <PageNav />

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <Button type="primary" className={styles.loginBtn}>
                        Login
                    </Button>
                </div>
            </form>
        </main>
    );
}

- using the privateRoute for protecting unauthenticated access
<Route
    path="app"
    element={
        <PrivateRoute>
            <AppLayout />
        </PrivateRoute>
    }>
    <Route
        index
        element={<Navigate replace to="cities" />}
    />
    <Route path="cities" element={<CityList />} />
    <Route path="cities/:id" element={<City />} />
    <Route path="countries" element={<CountryList />} />
    <Route path="form" element={<Form />} />
</Route>


- Private route

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useEffect } from "react";

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) navigate("/");
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;
}

export default PrivateRoute;


! ADVANCED STATE MANAGEMENT 

- Q: What are the differnet types of state that exists in web application?

State can be classified in terms of: 
- State accessibility, can be either local or global state. In local state, it's only needed by one or few components, while global states might be needed by many components in different positions of the tree, It's why local state is only accessible by it's component and child components, while global state can be accessible to every component in the application.

- in State domain each piece of state can be classified as either remote or UI state. Remote state are application data loaded from a remote server like API data. Basically, a state that lives in another server and can be loaded in our application. UI state, on the other hand is everything else, state that are not core application data, usually coming from API are UI state.

- When you have state it's important to know, whether you're dealing with remote state or UI state. Because they're managed in different ways

- Q: How would I know whether a state should be global or local?

Ask yourself "If this component was rendered twice, should a state update in one of the reflect in the other one"? If no, it's local state, else it's a global state.

- Q: How is remote state different from UI state?

We usually get remote state in an asynchronous way. and because data might need to be re-fetched and updated frequently, That's why in large application, remote state should be cached, revalidation etc. Specialized tools are needed

UI state are usually synchronous and store in the application, and it doesn't interact with the server at all. It's easier to handle, with the tools we already know such as useState, useReducer etc.

- Q: Where can you place each piece of state in the code?

Whenever you have a new piece of state, you have 6 options on where you can place it.

- Local Component - If all you need is local state, simply place it in the local component, using useState, useReducer or useRef (can be considered state, though it won't re-render).
- Parent Component - If you need a piece of state for multiple related components, then you need to lift the state up by placing it in the parent componet of all components. Tools are useState, useReducer, useRef

- Context - If that's not enough and you really need a global state, then you can put it in a context. Tools are Context API + useState or useReducer. Note that context on its own is not the one managing the state, State  still needs to be managed by useState or useReducer. Context API is best suited to manage UI state and not remote state, especially when building bigger application.

- Third-party Library - If you need to manage remote state in complex apps or just need a more efficient way to manage global state, opt for third party state maanagement libraries like Redux, React Query, SWR, Zustand etc. Some of these are suited for global remote state, and some for both, global UI and remote state.

- URL - it's another place we can store global state that is easily share and bookmark, or if we just want to pass data between pages.
- Browser - Sometimes we need to store data right inside the browser, In that case, we can use local storage, session storage etc. Just like ref, it's a state that doesn't make the component re-render but it's still an application state.

- Q: What tools can you use to  manage all types of state?

If you combined all classification of state according to accessibility and domain, you would get: 

- Local UI state - useState, useReducer, useRef
- Global UI state - You can use Context API along with useState or useReducer, if you need more performant, then use third-party libraries mentioned

- Local remote state - you can fetch inside useEffect to load data from remote API, and store the data as state using useState or useReducer, this is only good idea for small application, in bigger application, all remote state are treated as global state

- Global remote state - You can choose between general solution like Context API + useState or useReducer, or third-party libraries like Redux, Zustand, Recoil etc. Or you can use tools specialized in managing remote state, like React Query, SWR or RTK Query, these tools have built-in mechanism like caching and automatic re-fetching, to deal with the asynchronous nature of remote-state

- Q: How can you add a map using a library?

You can use a 3rd part library called leaflet
- npm i react-leaflet leaflet

react leaflet docs
https://react-leaflet.js.org/docs/start-introduction/


in the index css, include 
@import "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";


- When creating custom hooks it's better to use named export because it's possible to export multiple hooks at the same file

- datepicker package 
npm i react-datepicker

- Q: How can I combine both Context API and useReducer?

import { createContext, useEffect, useReducer } from "react";

const URL = "http://127.0.0.1:3001";

const CitiesContext = createContext();

- ACTION TYPES
const LOADING = "loading";
const CITIES_LOADED = "cities/loaded";
const CITY_LOADED = "city/loaded";
const CITY_CREATED = "city/added";
const CITY_DELETED = "city/deleted";
const REJECTED = "rejected";

function reducer(state, action) {
    - When using reducer in a bigger application, it's important to adopt meaningful naming conventions for action types. It's a good idea to model the actions as events, and not as setters because it makes it easier to see related state transitions. Example, if we just put setCities as action type, then we might assume that all we're doing is setting the cities state.
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case CITIES_LOADED:
            return { ...state, cities: action.payload, isLoading: false };
        case CITY_LOADED:
            return { ...state, currentCity: action.payload, isLoading: false };
        case CITY_CREATED:
            return {
                ...state,
                cities: [...state.cities, action.payload],
                isLoading: false,
                - Makes it easy to update multiple state that are related
                currentCity: action.payload,
            };
        case CITY_DELETED:
            return {
                ...state,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
                isLoading: false,
                currentCity: {},
            };
         - We're basically giving it a name in the past
        case REJECTED:
            return { ...state, error: action.payload, isLoading: false };
        default:
            throw new Error("Unknown Action type");
    }
}

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};

function CitiesProvider({ children }) {
    // const [cities, setCities] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [currentCity, setCurrentCity] = useState({});
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function fetchCities() {
            dispatch({ type: LOADING });
            try {
                // setIsLoading(true);
                const res = await fetch(`${URL}/cities`);

                if (!res.ok) {
                    throw new Error("Error encountered while fetching");
                }

                const data = await res.json();

                // setCities(data);
                dispatch({
                    type: CITIES_LOADED,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: REJECTED,
                    payload: error.message,
                });
            }

            // } finally {
            //     // setIsLoading(false);
            //     dispatch({
            //         type: "setLoading",
            //         payload: false,
            //     });
            // }
        }

        fetchCities();
    }, []);

    async function getCity(id) {
        if (currentCity.id === id) return;

        dispatch({ type: LOADING });
        try {
            const res = await fetch(`${URL}/cities/${id}`);

            if (!res.ok) {
                const errorMessage = `Error fetching data: ${res.statusText}`;
                throw new Error(errorMessage);
            }

            const data = await res.json();

            // setCurrentCity(data);
            dispatch({
                type: CITY_LOADED,
                payload: data,
            });
        } catch (error) {
            dispatch({ type: REJECTED, payload: "Failed to fetch city data" });
        }
    }

    async function addCity(newCity) {
        dispatch({ type: LOADING });
        try {
            // setIsLoading(true);

            const res = await fetch(`${URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                const errorMessage = `Error adding new city: ${res.statusText}`;
                throw new Error(errorMessage);
            }

            const data = await res.json();

            dispatch({
                type: CITY_CREATED,
                payload: data,
            });

            // setCities((cities) => [...cities, data]);
        } catch (error) {
            dispatch({ type: REJECTED, payload: "Failed to add new city" });
        }
    }

    async function deleteCity(id) {
        dispatch({ type: LOADING });

        try {
            // setIsLoading(true);
            const res = await fetch(`${URL}/cities/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorMessage = `Error deleting city: ${res.statusText}`;
                throw new Error(errorMessage);
            }

            dispatch({
                type: CITY_DELETED,
                payload: id,
            });

            // setCities((cities) => cities.filter((city) => city.id !== id));
        } catch (error) {
            dispatch({
                type: REJECTED,
                payload: "Failed to delete city",
            });
        }
    }

    - When working with asynchronous data, we have to options when it comes to dispatch function, either pass the dispatch function and the state, and use the dispatch function inside the components to update the state. But since we're dealing with asynchronous data, we can't have all logic inside the reducer, so if we're passing dispatch function into the context, we would need to put the asynchronous function like fetchCity inside the component that dispatches the action.

    - (the better option in terms of asynchronous data) the second option is to not pass the dispatch function into the context. but use it inside the event handler function. If you're not dealing with asynchronous data, then it's better to just pass the dispatch function and create actions inside the components.
    const citiesData = {
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        addCity,
        deleteCity,
    };

    return (
        <CitiesContext.Provider value={citiesData}>
            {children}
        </CitiesContext.Provider>
    );
}

export { CitiesContext, CitiesProvider };

- Q: How authentication works for typical React application?

It usually works in 3 steps, 
1. You get the user's email and password, from a login form and check with an API endpoint, if the password for giver user is correct.
2. If the credential are correct, redirect the user to main application, and save the user object in our state.
3. Protect the app from unauthorized access (users whose current not logged in)


! PERFORMANCE OPTIMIZATION


- Q: What are the things that you can optimize in React applications?

3 areas we can focus on when optimizing performance of React apps are: 
1. Preventing wasted re-renders
2. Improve App speed or Responsiveness, making sure that the application is fluid and without delays
3. Reduce the bundle size.

- Q: What are some built-in React tools used for each areas?

For preventing wasted renders, you can memoize components with memo, or memoize objects and function with useMemo and useCallback hooks.You can also use a technique where elements are passed into other elements as children or as a normal prop. To prevent them from being re-rendered.

To improve the application's speed, you can also use memo and useCallback hooks, and also the modern useTransition hook

To reduce the bundle size, use fewer 3rd-party packages, you can also implement code splitting and lazy loading, 


These tools and techniques are not exhaustive. 

- Q: When does a component instance gets re-rendered?

A component instance gets re-rendered in 3 different situation.
1. When the compoonent's state changes
2. Context Changes, a component's instance gets re-rendered when there's a change in context that the component is subsribed to.
3. Parent re-renders, When a component re-renders. All its child components will re-render as well.



- Q: It says that updating props re-renders the component?

Technically, that's not the case. It does look as if components re-render when the props changes, but what happens is that props only changes when the parent re-renders. When the parent re-renders, the children receiving the prop will re-render anyway.So, the real reason why component re-renders when the prop changes is that the parent has re-rendered.

- Q: One thing to remember when it comes to render and DOM update?

A render doesn't mean that the DOM actually gets updated, it just means that the component function gets called. (Review react deep dive for more)

- Q: What is a wasted render?

A render that didn't produce any change in the DOM, it's a waste because all the calculations still had to be done, but it didn't result to any new DOM. (calculation were for nothing)

since react is very fast, it's usually not a problem. But it can be a problem when re-renders happen too frequently, or when a component is slow in rendering. This can make application feel laggy and unresponsive.

- Q: What is the Profiler tool?


With the profiler tool, we can analyze renders and re-renders. We can see which components have rendered, why they're rendered and how long each render took.

You use the profiler by clicking the record button and update the state

- Before doing that, activate the settings where it Records why each component rendered while profiling. It will give us one of three reasons of why each component re-rendered.

- You can see the result with both flamegraph (another representation of component tree) and Ranked graph (to see which is the fastest and slowest re-render time).

- Some components are colored and some are gray. Gray components means that it didn't render while the application re-rendered. 

- The more yellow the color, means the longer it took to re-render.

- There are also different commits, or one re-render. 

- Q: How can you use the children prop to prevent some components to re-render?

It isn't the most used technique, but it gives surprising insights on how React works internally.

Lets use this code as an example

function SlowComponent() {
    // If this is too slow on your maching, reduce the `length`
    const words = Array.from({ length: 100_000 }, () => "WORD");

    return (
        <ul>
            {words.map((word, i) => (
                <li key={i}>
                    {i}: {word}
                </li>
            ))}
        </ul>
    );
}

- When the button updates the state, it takes about a second for UI to catch up. The reason is, when the count piece of state updates the component needs to get re-rendered, which means that the SlowComponent also gets re-rendered, even though it doesn't depend on the count piece of state.
export default function Test() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Slow counter?!?</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Increase: {count}
            </button>
            <SlowComponent />
        </div>
    );
}

- Solution

- If you find yourself in a situation where you have a slow component inside another one, which updates without needing it. You can use the optimization technique using children prop.

- Extract the Counter functionality in another component and just pass the SlowComponent as children.Although it looks the same, it will now work in a different way. But why though? Why React doesn't re-rendered the SlowComponent when it is passed as children?
function Counter({ children }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Slow counter?!?</h1>
            <button onClick={() => setCount((c) => c + 1)}>
                Increase: {count}
            </button>

            {children}
        </div>
    );
}

- Answer: The SlowComponent was passed in as a children prop, this means that this component was actually created before the Counter component re-rendered. Therefore, there's no way in which SlowComponent could have been affected by state changes in Counter. As React sees the piece of JSX below, it immediately creates the SlowComponent, and pass it into the Counter, all while rendering.

- So if you clicked on the button, the counter will be re-rendered but the SlowComponent has already been passed as props, it has already been created before, so it can't be affected by that state update.
export default function Test() {
    return (
        <div>
            <h1>Slow counter?!?</h1>

            <Counter>
                <SlowComponent />
            </Counter>
        </div>
    );
}


- Q: What is Memoization?

Memoizaation is an optimization technique that executes a pure function once, and saves the result in memory. If we try to execute the function again, with the same argument as before, the previously saved result will be returned, without executing the function.

- Let's say we have Function A, it would be invoked and stored in cache. If you tried to invoke the function again, with the same inputs, it would return the results that's previously stored in cache. without invoking the function, but if the arguments are different, then it would be executed again. 


Memoize components with memo
Memoize objects with useMemo
Memoize functions with useCallback

Using these can help us prevent wasted renders and improve the overall speed of the application.

- Q: How can you memoize components using the memo function?

- We can use the React memo function to create components that won't re-render when its parent component re-render. As long as props stays the same between renders.

- React.memo, when using memo, it will return a memoized component, it will check if there are some changes in the props or state, if not then it will not re-render.

- Import the memo
import { memo } from "react";

- Wrap the component that you don't want to re-render
const Archive = memo(function Archive({ show }) {
    return (
        <>...</>
        
    );
});

-or exporting a memo function
export default memo(ToggleSounds);
export default memo(Calculator);


- Q: What is the regular behavior if we didn't use memo?

Whenever a component re-renders, the children components gets re-rendered as well. But if you memoized a child component, it will not re-render as long as props stays the same as in the previous render. Of course, if the props do change, memoized child wil re-render to reflect the new data it received.

- Q: Does memoized component affect state?

Memoizing components only affects props, It will still re-render when its own state changes,  or when a context that its subscribed to changes. Because in these situations, the component has new data itneeds to reflect in the UI. so it'll always re-render whether it it's memoized or not.

- Q: So, when should you memoize a component?

It's only useful when dealing with heavy components (slow rendering, creates a visible lag), the component should re-renders often, and it should do so with the same props. This is because, if the props are usually different between re-renders, memo has no effect, so there's no need to use it. Second, wasted renders are only problem if the re-rendering happens too frequently or when the component is slow in rendering, so if the component only renders from time to time, or the component is fast and light, then memoizing it brings no benefit at all.

- It's normal for slow component to take some time, the problem is when it slows down the whole page.


- Q: What are some issues with memo?

Here, we're passing an object to a memoized function Archive.
const archiveOptions = {
    show: false,
    title: "Post Archive in addition to main posts",
};

<Archive archiveOptions={archiveOptions} />

We know that, in React, whenever a component instance re-renders everything is recreated. (Including variables, function, objects defined inside the component). So, a new render gets new objects and functions, even if they're the exact same as before.

We also know that in JavaScript, two object or functions that looks the same are different. So an empty object is different from another empty object. ({} != {})

That's why when we're passing an object to a child component as a prop, the child component will always see it as new props on each re-render. And if props are different betwee re-renders, memo will not work.

- We can solve this by memoizing objects and functions, to make them stable (preserve) between re-renders (memoized {} == memoized {}). We can memoize these by using useMemo and useCallback hook.

- Q: What are useMemo?

useMemo is a hook used to memozie a value, it has two arguments. The first one is the function that returns the value that will be memoized. The second one, is the dependecy array. It returns a memoized value that will only change if the value in the dependency array updates.

const value = useMemo(() => slowFunction(), []);

using useMemo, you can avoid unnecessary calculations, especially if does heavy calculations, it will only change if the dependency array updates.

const archiveOptions = useMemo(() => {
    - This callback refers to the work the should be performed on initial render, and specifies which result should be stored in the cache. In this case, we're just returning an object, but it could be result of an intensive calculation, that's why useMemo takes in a function, instead of just a single value
    return {
        show: false,
        title: "Post Archive in addition to main posts",
    };
    -the dependency array basically determines when the function or the calculation is executed again.

    -If  you specified an empty dependency array, it means that the value will be only computed once in the beginner, so it will never be recomputed.
}, []);

- Q: What if you didn't put the dependency in useMemo?
const archiveOptions = useMemo(() => {
    return {
        show: false,
        title: `Post Archive in addition to ${posts.length} main posts`,
    };

    - make sure to add the dependency, just like useEffect
}, [posts.length]);

If the number of posts is 10, it would use it, even if the posts updates, because React is still using the object that is stored in the cache.

React is still using the state value of posts state (stale state), and stale closure because the function was created initially and from there on, it now remembers all the variables that are referenced inside of if as they were at the time the function was created. It never runs again, so it still remembers the old values


- Q: What are useCallback?

useCallBack is a hook used to memoize a function, it accepts two arguments. The first one is a function that will be memoized, the second one is the dependecy array. It will return a memoized function that will only change if the value in the dependency array updates.

const removePerson = useCallback(
    (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    },
    [people]
);

- store the memoized function, both useMemo and useCallback is similar, with the difference of when using useCallback, it will memoize the function first before executing the function, whereas useMemo immediately executes the callback and memoize the result
const handleAddPost = useCallback((post) => {
    setPosts((posts) => [post, ...posts]);
}, []);


- Q: Should you use wrap every function and value into useMemo or useCallback?

It might do more harm than good, useCallback has its cost as well because React needs to run the function and store that function in memory. so it only makes sense, if we can actually see improvements in our application.

It doesn't make sense to wrap this function in useCallback, because it doesn't cause problem anywher in the app. 
function handleClearPosts() {
    setPosts([]);
}

- Just find some slow components, that has visible bad performance then optimize it with the tools we know.

- Q: What happens when pass something like state setter function?


<Archive
    archiveOptions={archiveOptions}
    onAddPost={handleAddPost}
    - It will not slow down the component, the memoization will still work. This is because React guarantess that setter functions of useState  hook always have stable identity, which means it will not change on renders. You can think of these state setter function as being automatically memoized.
    setIsFakeDark={setIsFakeDark}
/>

- That's why we're able to omit the setPosts in the dependency array of hooks like useEffect, useCallback, and useMemo.
const handleAddPost = useCallback((post) => {
    setPosts((posts) => [post, ...posts]);

    - if you put this here, then you need to include it in the dependency array
    console.log(posts);
}, []);

- Q: are both, useMemo and useCallback stored in the memory?

Both useMemo and useCallback will be stored in memory (cache) and returned in subsequent re-renders as long as dependencies(inputs) stays the same.

- Q: What happens when the dependency of useMemo and useCallback changes?

just like useEffect, useMemo and useCallback have a dependency array, whenever the dependency changes, the value will no longer be returned from the cache. instead, it will be re-created. It's similar to memo function where the component gets recreated whenever the props change. But with different thing being memoized and different way of specifying inputs

- Q: What is the regular behavior when you don't use useMemo?

When a component re-renders, a new value gets created.

When you memoize a value, no new value is created on re-render, instead it returns the value stored in the cache. Making the value stable across renders. However, this is only true if the dependencies we specified in the dependency array, stays the same, if it changes, new value gets created, as if memoization never happened.

- Q: When should you actually use useMemo or useCallback?

We need to make functions or objects stable to make the memo function work, so if props are objects or functions we need to memoize these props to prevent wasted renders. 

1. Memoizzing props to revent wasted renders (together with memo)
2. Memoizing values to avoid expensive re-calculations on every render. for eaxmple you have a derived state that is calculated from an array of 100_000 items, if the component re-renders all the time, React would need to do those expensive calculations over and over each time there's a render. To fix it, you can preserve the result of calculation across renders using useMemo.
3. Memoizing values that are used in dependency array of another hook. For example, to avoid infinite useEffect loops

Don't overuse these hooks. Just use them for one of these three use cases.

- Q: When should you optimize your context?

Optimize your context when these 3 things are true at the same time.
1. State in the context needs to change all the time
2. The context has many consumers
3. Most important, the app is slow and laggy


- Q: How can we prevent wasted renders related to Context API?

- 1. One thing that we're already doing is the children optimization technique. So the children of PostProvider are not automatically re-rendered because they were already created before being passed to the PostProvider.
<PostProvider>
    <Header />
    <Main />
    <Archive />
    <Footer />
</PostProvider>

- 2. If you are not using the children optimization, then you should memo all direct children of that context. So wrap Header, Main, Archive, Footer with memo.
const Main = memo(function Main() {
    return (
        <main>
            <FormAddPost />
            <Posts />
        </main>
    );
});


- 3. even though the state for dark mode isn't related to the context, since this value for the context are object, and the provider is a child of App component. So when the App component re-renders, the PostProvider gets re-rendered as well, thats why the value for provider is recreated, this means that the context value has changed, therefore, every component that consume that context will be re-rendered.


- if for example this function was required to the dependency array, you need to wrap it in useCallback, if not, on each re-render, the function will be recreated again, which will in turn make the object recreated again
function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
}


const postData = useMemo(() => {
    return {
        posts: searchedPosts,
        onClearPost: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
        createRandomPost,
    };
}, [searchedPosts, searchQuery]);


- Q: What happens when you update the state that is part of the context?


If you have many components that are subscribed to a context (reads data from a context), it becomes problematic to have so many different variables inside the context value. Because if you update one of these states, then every components that read at least one of those states will get re-rendered, which is not ideal.


That's why we usually create one context per state. like one context for posts, and one for searchQuery. In this situation, if we update the state in searchQuery, all the components in the posts wouldn't re-render.

Some people take it even further by creating a context only for searchQuery and one for the state update function, or if you're using a reducer, you could create a context for state and a context for dispatch.


- Q: How can you identify bad performing components?

You can check it in Ranked tab in the profiler

- Q: What are the performance optimization you applied to wordwise application?

- This doesn't need to be separated into multiple context because they're closely related, you also don't need to memoize it because there's no component that might re-render this provider.
const citiesData = {
    cities,
    isLoading,
    currentCity,
    error,
    getCity,
    addCity,
    deleteCity,
};

- If you added the getCity, it would create an infinite loop of requests, what happens is the effect will rerun each time the getCity gets updated. So what we can do is stabilize the getCity function, by memoizing it
useEffect(() => {
    getCity(id);
}, [id, getCity]);

const getCity = useCallback(
    async function getCity(id) {
        if (currentCity.id === id) return;
        -code goes here....
    },
    [currentCity.id]
);


- Q: What is bundle ?

Whenever a user navigates to an application, they're visiting a websited hosted on a server. Once the user navigats to the app, the server sends back a huge Javascript file (the bundle) to the client that requests it.

- What bundle is, it is the JavaScript file containing the entire application code, Downloading the bundle will load the entire application at once, turning it into a SPA running entirely on the client.

It's called bundle because module bundler like Vite or Webpack bundles all development files in one huge bundle. 

- Q: Does the server resends the files whenever URL changes in the app?

Whenever the URL changes in the app, the client just renders a new React component. without loading any new files from the server. Because all the JavaScript code is already there.

- Q: What is the bundle size?

Amount of JavaScript users have to download to start using the application (So if you have 5mb bundle, then that needs to be downloaded first, before the app starts working). One of the most important things to be optimized, so that the bundle takes less time to download. because the bigger the bundle, the longer the download.

- Q: How can we optimize the bundle size?

We can optimize the bundle size by using a techniuqe called code splitting, it means splitting the bundle into multiple parts (So instead of one big JavaScript file, you have multiple smaller files) that can be downloaded over time (as it becomes necessary). This is also called lazy loading 

- Q: So, how can I do code splitting?

There are many ways to split the bundle (lazy load the components), but the  most common is to split the bundle at page level, so we're gonna take every components that represents a page and load each of them separately.

- Identify your pages ex. 
<Route index element={<Homepage />} />
<Route path="product" element={<Product />} />
<Route path="pricing" element={<Pricing />} />

- Q: What is Suspense API?
It's a concurrent feature, it is used to manage loading of components state, It provides a way to suspend the rendering of a component and it also displays a fallback UI while the data is not fully fetched. Supense API is useful for smooth transition of loading data and displaying of data.

- iimport both Suspense API at lazy
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));

- Wrap the component with Suspense and provide a fallback UI, usually the whole return is wrapped in suspense.
<Suspense fallback={<SpinnerFullPage />}>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
    </Routes>
</Suspense>


- Q: What is useTransition hook? 

It's  a hook that allows us to update without blocking the UI
const [isPending, startTransition] = useTransition();

startTransition(() => {
  - function definition dito
      const newItems = Array.from({ length: 5000 }, (_, index) => {
          return (
              <div key={index}>
                  <img src="/vite.svg" alt="" />
              </div>
          );
      });
})

- Q: What are the Do's and Dont's when it comes to optimization?

Dont Optimize prematurely, because it can do more harm than good, because memoization has slight hit on performance, so if you have many useless memoization, it will affect your application. It also becomes unreadable if you wrap everything in useMemo or useCallback.

- Don't optimize anything if there's nothing to optimize, 
- if your app is performing just fine, then don't just wrap your components in memo function, all your values or functions in useMemo or useCallback.
- You don't need to optimize your context if it's not slow and if it doesn't have many consumers.


Find performance bottlenecks using the Profiler and visual inspection (laggy UI).

- Doing this, you can focus on those performance issues and fix them by memoizing expensive calculations or expensive renders.

- Optimize Context if it has a lot of consumers, and its state changes often, in this case you can memoize the context value, and direct child components of the provider, or setup two different context, one for the state value and one for state setter

- Always Implement code splitting and lazy loading for all routes in your SPA's or in any React application you're building.


- Q: What are the rules and best practices of useEffect?

This is rules and guidelines for specifying a correct dependency array.

- Every state variable, prop used inside the effect must be included in the dependency array. This rule is not complete because of two things. First, any context value that a component is subscribed to must also be included in the dependency array. Second, all REACTIVE values must be included, that means any function or variable that references any other reactive value.

- Every single reactive value must be included, including any functions or varibles that references a reactive value. The goal of this is to avoid stale closures, that would occur if you didn't put the correct dependencies.

- Don't ignore the exhaustive-deps ESLint rule.

- Don't use objects or array as dependencies, Because objects are recreated on each render, and React sees new objects as different, ({} !== {})

It may seem to work just fine, but in reality, the effect reruns on ever single render. this is because React checks if the dependencies have changed between renders by comparing them using the strict equality operator. But again as stated above, Objects in JavaScript have different reference each time it is created, so even if the content is the same, React sees the old and new objects as different, and will rerun the effect. 

- These rules also works for dependency arrays of other hooks, like useMemo and useCallback

- Q: What is a reactive value?

A reacive value is any value that is either state, props, context value, or any other value that references one of the reactive values.

const [number, setNumber] = useState(5);

function displayCurrentNumber() {
    - references a reactive value
    return `The current number is ${number}`;
}

useEffect(() => {
    displayCurrentNumber();        
}, [displayCurrentNumber])


- Q: What if you really need to put an object or array as dependency?


So we know that we must include all reactive values in the dependecy array, React cost isn't lying about dependencies. 

The solution is not to omit any dependency because that would be lying to React. Instead we can use a strategy where it makes some of the dependencies unnecessary.

!REMOVING FUNCTION DEPENDENCIES

- When dealing with helper functions as dependencies, you can just move the function inside the effect. Because if the function is inside the effect, it's no longer a dependency of the effect. 

- If it's not possible (like needing it in multiple places), then you can memoize it by using useCallback. 

- If the function doesn't reference any reactive values, you can just move it out of the component. By doing this, the function doesn't need to be recreated on every render

!REMOVING OBJECT DEPENDENCIES

- If you want to use an object as dependency, instead of including the entire object, you can include the properties needed (primitive values).

- If it doesn't work, try to use the same stregies when it comes to function 

!OTHER STRATEGIES

- If you have multiple related reactive values as dependencies, try using a reducer
- You don't need to include state setter function (useState) and dispatch (useReducer) in the dependency as React guarantees them to be stable across renders


- Q: What happens when you put every single dependency in the array?

It can cause the effect to run way too often and it can also introduce problems

!WHEN SHOULD YOU USE AN EFFECT?

- Q: So, when should I actually use an effect?

Effects should be used as a last resort, when no other solution makes sense, React calls them an "escape hatch" to step outside of React, the reason for this is that useEffect was overused a lot when it was first introduced.

- Q: What are the three use cases where effects are overused?

- 1. Using an effecto respond to a user event, an event handler function should be used instead
- 2. Fetching data on component mound, It's fine in smaller apps, but in real-word applications, library like React Query should be used.
- 3. Synchronizing state changes with one another (setting state based on another state variable). Try to use derived state and event handlers


- After install the dependency of the project, you can familiarize yourself by analyzing the component tree.
- then check the code, figure out how it works
- Check the files


- Q: How can you set state based on other state?

You can use an effect, the downside of this is when you update states using useEffect hook, the first state update triggers the effects, but the effect only runs after the render already happened so, when the state is set again, we get a second render. React wouldn't be able to batch it, because the effect runs after the render already happened.

useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
}, [number, sets, speed, durationBreak]);

- Whenever you can, avoid using this. But if you have many pieces of state that influences the value of other state, then you can use it.


- Q: using helper function inside an effect?

In this code, what happens is, when you click the handleIncrase, it would set the duration state, which will cause the component to re-render, then the playSound function will be recreated, since the playSound is part of the dependency array, it would run the effect, which set the duration to the stale values, that's why it flashes back

- Since playSound has reactive inside it we can't just put it outside, we can either put it inside the effect, or memoize it. But we're going to use it to multiple so it's better to memoize it.


- Another issue is when you click the allowSound button, it change the allowSound state, which recreates the playSound function, and since playSound is inside the effect, it would execute the effect, which plays a sound. It has the same issue when you change the duration, and change the allowSound, it would set the duration to the current value because of the issue above. 
const playSound = useCallback(
    function () {
        if (!allowSound) return;
        const sound = new Audio(clickSound);
        sound.play();
    },
    [allowSound]
);

function handleIncrease() {
    setDuration((duration) => Math.floor(duration) + 1);
    playSound();
}

function handleDecrease() {
    setDuration((duration) =>
        duration >= 1 ? Math.ceil(duration) - 1 : duration
    );
    playSound();
}

useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
    playSound();
}, [number, sets, speed, durationBreak, playSound]);


- The solution to this is to synchronize the side effect of playing sound to the duration state, so instead of memo, we can create a separate effect which is responsible for playing the sound. this is better because we're having a single side effect for each effect. This effect is just responsible for playing the sound

useEffect(() => {
    function playSound() {
        if (!allowSound) return;
        const sound = new Audio(clickSound);
        sound.play();
    }
    playSound();
}, [duration, allowSound]);


! STALE CLOSURE DEEPDIVE

- Q: What is a closure?

A function captures all the variables from its lexical scope, so from the place it was defined at the time the function was created.

So whenever a function is created, it closes over the effect of that lexical environment at the time. So it will always have access to to the variables from the place where it was defined.

React hooks relies heavily on closures, especially for useEffect (where we will mostly see it happen). 


- What happens here is, by the time the function is created, it closes over the variableenvironment that is present at the time the function was created. So in the initial render.

 - So a closure was created here at the time the first render was created, and it closed overthe props and the state in the case of React. In React, we call this current state and props asnapshot.

- Any function created at initial render, and not recreated still has access to that initialsnapshot of state and props. This function was created at the initial render, and then neveragain, so we now have closure to that initial snapshot

- We have empty dependency array, this means that this function will never recreated again, soit will never get access to the current new snapshot, for example we updated the number state,it will not have an access.

- This is called a stale closure, it's an outdated closure, because the function has capturedthe values from a time where the number was still something else.

- The effect function can't see all the variables inside the function, unless we specify them inthe dependency array. Specifying a dependency array is like telling useEffect something like"hey, I know that you can't see the current values in the current render, but I promise that youonly need to rerun this effect, whenever number state here actually changes". So if you specifythe dependency, React will understand that the dependency is important for that effect. So it'llre-execute it, and by that time the, the function can then capture the new snapshot. basicallywhat the duration, sets, and number are, at the time the function is executed again.
useEffect(() => {
    console.log(duration, sets);
    document.title = `Your ${number}-exercise workout`;
}, [number]);

! EVENT HANDLING SECTION

Events
onClick - when mouse clicked the element
onMouseEnter - when mouse enters the element
onMouseLeave- when mouse cursor leaves the element

! FORM HANDLING

Q: What happens when you submit a form?

1. It will collect information about the fields
2. It will create a network request based on the provided action
3. It will refresh

> index.html?email=adonisyu@gmail.com&password=123123

Q: How can you prevent the default behavior an event?

Pass the event handler object in the function
```jsx
    const handleSubmit = (evt) => { 
        -This is not limited to forms, it will prevent the default behavior of that specific event. 
        evt.preventDefault() 
    };
```

Q: What is controlled elements?

*components na yung state at behavior ay controlled ng parent component

?Bakit ba nagawa ng controlled elements?
by default, form elements maintain their own state inside the DOM. which makes it hard to read their values.Since we want to keep all states in once central place.

In controlled elements, React is the one who controls and owns the state and not the DOM.


~ How to handle form inputs 
```jsx
function Form() {
    1. Create a piece of state  
    const [description, setDescription] = useState("");

    2. create an eventHandler that will watch for onChange event.
    function handleChange(evt) {
        4. Update the state using the value of the input
        setDescription(evt.target.value);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>💼 What do you need for your trip?</h3>

            3. If onChange event is triggered, get the value of the input.
            <input
                onChange={handleChange}
                5. Use the updated state as a value prop.
                value={description}
                type="text"
                placeholder="Items..."
            />
            <button>Add</button>
        </form>
    );
}

- Here's another example but using select
<select
    value={quantity}
    onChange={(evt) => setQuantity(+evt.target.value)}>
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}>
            {num}
        </option>
    ))}
</select>
```

~ multiple inputs
- gagamit ka ng name attribute at evt.target.name 
> const [user, setUser] = useState({
>     name: "",
>     email: "",
>     password: "",
> });

> const handleChange = (evt) => {
>     setUser({ ...user, [evt.target.name]: evt.target.value });
> };

- input part
> <input
>     name="name"
>     value={user.name}
>     onChange={handleChange}
>     type="text"
>     className="form-input"
>     id="name"
> />

~ Checkbox
- Unlike sa typical inputs na value ang gamit, sa checkbox, checked ang gagamitin
> const handleFreeShipping = (evt) => {
>     setIsFreeShipping(evt.target.checked);
> };

> <input
>     type="checkbox"
>     checked={isFreeShipping}
>     onChange={handleFreeShipping}
> />

~ Select
> <select onChange={handleFramework} name="" id="">
>     {frameworksList.map((framework) => (
>         <option value={framework} key={framework}>
>             {framework}
>         </option>
>     ))}
> </select>

> const handleFramework = (evt) => {
>     setFrameworks(evt.target.value);
> };

Q: How can I use the FormData API?

```jsx
const handleSubmit = (e) => {
    e.preventDefault();
    // malalagyan ng arrays ng key value pair
    const formData = new FormData(e.currentTarget);

    // formdata.get para makuha yung value ng given attribute
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Gagawa ng bagong object based sa entries ng formdata
    const formValues = Object.fromEntries(formData);

    // tanggalin yung values ng form
    e.currentTarget.reset();
};
```

! STATE SECTION 

?Pag inupdate yung state, yung component at yung mga children ay mare-rerender. 

~ How to use state
- 1. Magdefine ng piece of state gamit ang useState function
- 2. maglagay ng default value sa useState
- 3. gamitin yung state gamit ang jsx
- 4. Update state based sa action ni user. Para ma-rerender yung component

~ State + events design Process
? Anong mga state at event handler yung gagamitin mo
- 1. List what a user will do and changes they will see while using your app.
- 2. Categorize each step as 'state' or 'event handler'
check if may data na magbabago sa screen o kung magbagago ba based sa action 
- 3. Group common steps. Remove duplicated, Rewrite descriptions
? anong mga name at type - iwasan yung state na object o array.
- 4. Look at mockup. Remove or simplify parts that aren't changing.
- 5. Replace remaining elements with text description
- 6. Repeat 4 and 5 with different variation
- 7. Image you have to write function that returns the text of the 5 and 6, - in addition to your component props, what other arguments would you need? 
?saan mo sya idedefine
- 8. Decide where each event handler + state will be defined.

~ Rerendering in depth
- initial render -  unang beses na marerender sa DOM yung component tree, nangyayari sa unang load ng app, tinatawag din na mounting ng component
- rerender - nangyayari kapag nabago yung state o props ng isang component. Since nagbago yung value, kailangang din na masync yung changes sa browser.

- sa initial render ng component, ireread yung useState at yung initial value ay maassign kay state,
- then yung initial value ay madidisscard, kapag naginteract si user sa component 
- iuupdate yung piece ng state gamit ang setter function, kapag inupdate yung state
- mare-rerender yung mismong component at child, para idisplay yung updated state.

!Wag baguhin yung state directly, hindi maaccess ng eventhandler. gamitin yung setter.
*Hindi pwedeng magcommunicate yung sibling components, so need mo ilagay yung state sa parent component

~ Ano ba talagang nangyayari kapag inuupdate mo yung state directly?
- if nakita ni js na gagawa ka ng array, mag-aallocate sya ng memory at ilalagay yung array.

- si React ay tatandaan yung array for future use, bali gagawa ng reference sa current state.
- Pag push sa array, hahanapin nya yung array sa memory then iaadd yung element

- then si React magkakaron ng panibagong reference sa bagong state. which is yung modified na array, so parehong lang yung reference sa existing at bagong state.

- pag magre-rerender na yung component, mag aapply si react ng maliit na optimization kung saan pinagcocompare nya yung current state (initial array) at "new" state (modified array). pero ang problema nga, yung current array at modified array, pareho lang. so ang condition dun ay kung pareho yung reference sa current at modified state.Magaassume si React na hindi kailangang ng rerender.

~ Tamang pag update ng state na array or object

!Wag mong imumutate yung object at array. yun lang
- Gumaw ng array, kopyahin yung existing elements ng array at idagdag yung panibagong element.
> setBooks((books) => [...b, { title }]);

- paglagay ng elements sa unahan o dulo ng array gamit ang spread operator
> setColors(colors => [colorToAdd, ...colors]);
> setColors(colors => [...colors, colorToAdd]);

- lagay ng elements based sa index
> const [colors, setColors] = useState(['red', 'green']);
> const addColorAtIndex = (colorToAdd, index) => {
>   const updatedColors = [
>     ...colors.slice(0, index),
>     colorToAdd,
>     ...colors.slice(index),
>   ];
>   setColors(updatedColors);
> };

- pagtanggal ng elements by index or value
>const [colors, setColors] = useState(['red', 'green', 'blue']);
>const removeColorAtIndex = (indexToRemove) => {
>  const updatedColors = colors.filter((color, index) => {
>    return index !== indexToRemove;
>  });
>  setColors(updatedColors);
>};

- pagtanggal ng elements by value
> const [colors, setColors] = useState(['red', 'green', 'blue']);
> const removeValue = (colorToRemove) => {
>   const updatedColors = colors.filter((color) => {
>     return color !== colorToRemove;
>   });
>   setColors(updatedColors);
> };

- pagbabago ng objects sa array using map
> const [books, setBooks] = useState([
>   { id: 1, title: 'Sense and Sensibility' },
>   { id: 2, title: 'Oliver Twist' },
> ]);

> const changeTitleById = (id, newTitle) => {
>   const updatedBooks = books.map((book) => {
>     if (book.id === id) {
>       return { ...book, title: newTitle };
>     }
>     return book;
>   });
>   setBooks(updatedBooks);
> };

-Updating an object in an array using map
function handleToggleItem(id) {
    setItems((items) =>
        items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
        )
    );
}

- pagbabago ng properties ng objects sa array gamit spread operator
> const [fruit, setFruit] = useState({
>   color: 'red',
>   name: 'apple',
> });
> const changeColor = (newColor) => {
>   const updatedFruit = {
>     ...fruit,
>     color: newColor,
>   };
>   setFruit(updatedFruit);
> };

- pagbabago ng properties ng objects sa array gamit destructuring
> const [fruit, setFruit] = useState({
>   color: 'red',
>   name: 'apple',
> });
> const removeColor = () => {
>    //`rest` is an object with all the properties
>    //of fruit except for `color`.
>   const { color, ...rest } = fruit;
>   setFruit(rest);
> };

- make sure na pinaka latest na response yung magiging value
>     if (book.id === id) {
>       return { ...book, ...result.data };
>     }

?Correct way ng pag update ng state based sa current state, gumamit ng callback sa loob ng setter.
> setterFunc(s => ++currStep);

~ Communicating from child to parent component
- 1. Treat like a normal event
- 2. Pass an event handler as props
- 3. Call handler when an event happens.

~ Mastering state design process
~ Additional Informations about state

- State mechanics in react  
No direct manipulations of dom 
component view ay nauupdate through state, 
bali nire-rerender ni React yung component na may update na state

?Every component may kanya kanyang minamanage na state, so kahit irender multiple times yung component, 
?may kanya-kanya silang state. Meaning, kung may mabago man sa isang state, yung ibang state ay mananatili, hindi sila affected

?useState - react hook for updating state without blocking UI, kapag gusto mong dynamic, gumamit ka ng state

!State vs Props

Internal data owned by component
components memory
can be updated by component itself
updating state causes component to re-render
used to make components interactive

External data owned by parent component
Similar to parameters
Read-only
Receiving new props causes component to re-render, ex. when parent's state has been updated, the child also gets updated.
used by parent component to configure child component ("settings")


!React Dev tools
?component dev tools - dun makikita yung mga components ng react app, nandon din yung mga properties like props, hooks, renderedBy, at source

! THINKING IN REACT 

Q: What core skills do you need when building react applications?

You need to know hot work with react API.
You also need to be able to think in react or have the react mindset.

Q: What does thinking in react means?

Thinking in react means you have a good mental model of how and when to use react tools, such as components, states, data flow, effects etc. Here you think of state transitions instead of element mutations

Q: Explain thinking in react as a process?

1. Break the desired UI into components and establish how components relates to each other (component tree). You need to also think about reusability and composability of components.
2. Build a static version of the app (without state)
3. think about state like 
    - When to use state
    - Where to place pieces of state
    - types of state you're going to use, either local or global state.
4. Establish the data flow
    - Thinking about one-way data flow
    - Child to parent communication
    - Accessing the global state

Q: Does thinking in react as a process should be followed all the time?

You don't need to follow it every time, but you can use it as a guideline

Q: What's the benefits of knowing how to think in react?

- You'll know how to break UI design into components, make components reusable, assemble UI using reusable components, identify which pieces of state is needed for interactivity, where state should be placed or other words, what component should own each piece of state, you'll also know what types of state you can or you should use, and how to make data flow through the app.

Q: What is state management?

State management is deciding when to create pieces of state, what types of state are necessary, where to place eace piece of state, and how should the data flow throught the app.

You can think of it as giving piece of state a home

Q: When does state management becomes necessary?

When the application grows

Q: What are the two types of state?

Local state is only needed by one or few components, at it can only be accessed by the component that defined at and it's child components (via props).

Global or shared state is a state that multiple components might need. It is accessible for every component in the app.

Q: How can you define global state?

You can use React's context API, or third-party global state management library like redux.

Q: When should you use global state?

An important guideline in state management is to always start with local state, and use global state if you truly need it.


Q: Can you explain how you decide on when you need state and where you palce it?


#When

Does the data change at some point? If yes, use state, else use a constant variable.
Can you compute the state based on an existing state? If yes, then use a derived state.
Does the component need to be re-rendered? if yes, create a new piece of state and place it in the component, if not, use the hook useRef.

#Where

If the state is only gonna be used by the current component, then you can just place it there.
If the state is needed by child component, pass the state as a props.
If the state is used by few or more sibling component, lift the state to the first common parent, if not, use global state.


Q: What does lifting state mean?

It means we're placing the state at the immedieate parent component. To make it accessible to other sibling components, we can pass the state through props.

With this, you can share one piece of state to multiple components in different position in component tree.

Q: How can I pass an event handler as props?

It's the same as regular props. 

```jsx
//Component
<Form onAddItems={handleAddItem} />

//Getting the event handler props
const Form = ({onAddItems}) => {
    //Using the event handler
    onAddItems(newItem);
}
```

Q: What's a good convention when passing an eventHandler as a props?

do `onEventHandlerName` like, onAddItems, onDeleteItems, onEditItems.

Q: What is child to parent communication in react? 

Child to parent communication or inverse data flow happens when child component updates the state of the parent component. 

ex. whent the setter function is passed to child component.  


!Deriving a State 

Q: What is a derived state?

A state that is computed from an existing state or props.

```jsx
const [cart, setCart] = useState([ { name: "js course", price: 15.99 } ]);
const numItems = cart.length;
const totalPrice = cart.reduce((total, curr) => (total += curr.price), 0);

- In this example, we're not using state, we're using the `cart` as a source of truth. If cart gets updated, every derived state will be updated too. 

- When using derived state, regular variables are used, this is to avoid unnecessary re-renders.

- If you can derive a state, you can avoid creating separate pieces of state, keeping them in sync, ex. you have three states, when one state changes, you also need to update the other two, to keep them in sync. Lastly, you can avoid having too many re-renders. Having three state means it will re-render three times.

//Another example of derived state, Instead of creating another state to determine the number of packed items, you derive it from an existing itms
let numberOfPacked = items.reduce((total, currItem) => {
    if (currItem.packed === true) {
        return total + 1;
    } else {
        return total;
    }
}, 0);

//Another way
const numberOfPacked = items.filter((item) => item.packed).length;
```


!Sorting in React

Q: Is sorting similar for both vanilla js and React?

It's almost the same, but with state you need to use slice.

```jsx
if (sortBy === "input") sortedItems = items;

if (sortBy === "description") {
    sortedItems = items .slice()
    .sort((a, b) => a.description.localeCompare(b.description));
}

if (sortBy === "status") {
    sortedItems = items.slice().sort((a, b) => Number(a.packageStatus) - Number(b.packageStatus));
}
```

Q: Why is there an error when I try to sort element in an array?

When you sort array elements, it gets converted to string, which may lead to unexpected results.

Q: What's the point of comparator function?

comparator function is an argument to a sort function, it is used to compare adjacent elements in the array.

Q: What are the rules of a comparator function?

Here `a` refers to the 2nd element while `b` refers to the first element.
1. Return negative if a is placed before b
2. return positive if b is placed before a.
3. return 0 if both.

```jsx
- sorting ng numbers
ages.sort((a, b) => a - b);

- sorting strings
wordArray.sort((a, b) => a.localeCompare(b))

- sorting ng boolean
booleanArray.sort((a, b) => Number(a) - Number(b))

- sorting array of objects
people.sort((a, b) => a.name.localeCompare(b.name));

- sorting array of objects in descending order
people.sort((a, b) => (a.money - b.money) * -1);

- Sorting using two properties.
const sortOrder = "asc";
const reverseOrder = sortOrder === "asc" ? 1 : -1;
console.log(
    files.sort((a, b) => {
        const dividedA = a.cost / b.cost;
        const dividedB = b.cost / a.cost;
        return (dividedA - dividedB) * reverseOrder;
    })
);
```

Q: How to generate ID?

Take note that ID's are usually generated in the server
```jsx
//Using random method
Math.round(Math.random() * 9999);
//Using date
Date.now()
```

! REDUX SECTION 

- Q: What is redux? 

Redux is a third-party library used to manage global states in web application, it uses similar mechanism like useReducer.

Redux is a standalone library which means it could be used with any framework, or even vanilla js. But it is linked more with React, and they are easy to conenct using react-redux library.

- Q: What is the idea behind redux?

All global state is stored in one globally accessible store, which is easy to update using actions (similar to useReducer).

- Q: How is state update for both React and Redux the same?

In the case of Redux, updating the store causes all React components that consumes some data from that store to be re-rendered.

It's conceptually similar to using ContextAPI and useReducer.

- Q: What are the similarities and differences of redux and useReducer?

1. They both have an action object, which is used for dispatch that goes to the reducer.

2. sa useReducer, lahat ng state ay maintained sa loob ng react, pero pagdating sa redux, gumagamit sya ng redux store, na nakahiwalay sa react application o hierarchy ng components. Para maaccess yung state ng component, kailangang makconnect sa store.

3. In useReducer, it only uses a single reducer, but in Redux, it uses multiple reducers, usually in charge of different states.

4. State objects are more complicated when it comes to redux, since it has multiple reducers, the responsibility of managing the state is divided. This way, it's not just one reducer that manages the state.

- Q: What are the two versions of redux?

First one is the classic redux, and the second one is Modern Redux Toolkit (RTK).

- Q: Do you need to learn redux?

Historically, Redux was used in most React apps for all global state. However, that has changes because there are many alternatives. Many apps don't need Redux anymore, unless they need a lot of global UI state.

Here are 3 reasons why you should still learn redux

- Redux can be hard to learn
- You will encounter Redux code in your job especially when working with a team that uses older codebase, so you should definitely understand Redux
- Some apps do require Redux

- Q: When should you use redux??

Use global state management library like Redux, when you lots of global UI states that needs to be updated frequently.

- Q: What is global UI states? 

states that is not fetched from server, that is remote state, so UI sate is simply data about the UI itself or data that doesn't need to be communicated to an API. 

- Q: Why is Redux not used anymore?

For global remote states, there are better options like React Query, SWR, or a tool included in modern Redux Toolkit called RTK Query. (refer to advanced state for better list)

If you need to manage a lot of non-remote state in your app then Redux might be perfect for that. But the truth is, most global state are actually remote, which is the reason why many apps don't use Redux anymore.

!HOW REDUX WORKS

- Revisiting how useReducer works

with useReducer, when we want to update state from an eventHandler, we start by creating an action, which is an object that contains the type and payload which is an information on how the reducer should update the state.

We then dispatch the action to the reducer function, the reducer takes the action type and payload, and together with the current state, calculates the next state (new state value).

Then as the state updates, the component that originated the state transition re-renders.

- Q: When it comes to how it works, what are the difference between useReducer and Redux?

The first difference is, in Redux we dispatch function not to the reducer but to a store. 

Then any component that consumes the state that has been update in the store will be re-rendered by React.


When using Redux, we usually use function called action creators, to automate the process of writing actions, so instead of writing action objects by hand, you create functions that does it automatically. Which is advantageous since it keeps all actions in a central place, which reduces bugs since devs don't have to remember the exact acion type string. This is optional and not a feature of Redux, it's just how real world Redux applications are built.

- Redux Cycle

To update a global UI state in redux, we start by callin an action creator function in a component, and then dispatch the action that resulted from the action creator. This action will reach the store where the right reducer picks it up and updates the state according to the instruction. This triggers a re-render of the UI where the cycle finishes.

- Q: What is a store?

A store is a centralized container where all global state lives. It's the single source of truth of global states in the application.

It's also where one or multiple reducers live.

Each reducer is a pure function that calculates the next state (state transition) based on the action of and the current state. 

Usually one reducer per application feature (e.g one for each: shopping cart, user data, theme) to keep things separated.

react-redux handles the store so that we don't need to interact with it directly. You will only need to interact with the store directly, when using it for debugging purposes

- Q: How to install redux?

npm i redux

- Q: How can I use just classic redux? (For learning purpose only)

- inside store.js
- If you want to see the results, import it in index.js 
import store from './store.js';

import { createStore } from "redux";

const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

 - Calculates the new state based on the current state and received action, reducers are not allowed to modify existing state, and they're also not allowed to do any asynchronous logic and cause side effects.

- One thing that is different is that the initialState is set as default state
function reducer(state = initialStateAccount, action) {
    switch (action.type) {
        case ACCOUNT_DEPOSIT:
            return { ...state, balance: state.balance + action.payload };

        case ACCOUNT_WITHDRAW:
            if (state.balance >= action.payload) {
                return { ...state, balance: state.balance - action.payload };
            }
            return { ...state };

        case ACCOUNT_REQUEST_LOAN:
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };

        case ACCOUNT_PAY_LOAN:
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };

        - Default is different, in useReducer, we usually throw new error, but in Redux it is advised not to do that, Instead just return the state. Basically, if it receives an action type that it doesn't know about, it will simply return the original state
        default:
            return state;
    }
}

- creating the store
const store = createStore(reducer);

- dispatching is the same as useReducer
store.dispatch({ type: ACCOUNT_DEPOSIT, payload: 1000 });
store.dispatch({ type: ACCOUNT_WITHDRAW, payload: 100 });
store.dispatch({
    type: ACCOUNT_REQUEST_LOAN,
    payload: {
        - You can also use an object as a payload, here multiple information are store such as:
        amount: 1000,
        purpose: "Paying Rent",
    },
});
store.dispatch({ type: ACCOUNT_PAY_LOAN });

- returns the current state that exists in the store
console.log(store.getState());

- Q: What are action creators?

It's a set of function that is automatically created. When invoked, it returns an action that can be dispatched. The purpose of action creators is to avoid having developers to create the action objects. Action creators are not a redux feature, so redux would work without it. But it is a useful convention that redux developers used because you avoid having typos, and it's more reusable

function deposit(amount) {
    return { type: ACCOUNT_DEPOSIT, payload: amount };
}

function withdraw(amount) {
    return { type: ACCOUNT_WITHDRAW, payload: amount };
}

function requestLoan(amount, purpose) {
    return {
        type: ACCOUNT_REQUEST_LOAN,
        payload: {
            amount,
            purpose,
        },
    };
}
function payLoan() {
    return { type: ACCOUNT_PAY_LOAN };
}

store.dispatch(deposit(5000));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "Paying rent"));
store.dispatch(payLoan());

console.log(store.getState());

- another convention for action creators is add the domain then the functionName, customer/createCustomer
function createCustomer(fullName, nationalID) {
    return {
        type: CREATE_CUSTOMER,
        payload: { fullName, nationalID, createdAt: new Date().toISOString() },
    };
}

function updateName(fullName) {
    return {
        type: UPDATE_NAME,
        payload: fullName,
    };
}

- Creating root reducer
-  We need to place both reducers inside the store, because we can't dispatch actions directly to the reducer, it goes to store first. The problem is we can't simply pass two reducers in createStore, so what we can do is create a root reducer which is a combination of reducers.

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});
const store = createStore(rootReducer);


! PROFESSIONAL REDUX FILE STRUCTURE

- Q: How is file structured in Redux before?

In the beginning, developers usually creates one reducers folder, then create one file for reducer. Same with action creators where they would create one actions folder and create one file per action creator. 

The problem with this is it requires a lot of jumping around between different files, which is not useful when writing code. So it's no longer the recommended approach.

- Q: How should you orgnaize redux?

Organize the application into features, ex. one for account, and another for customer. 
- Create a features folder, and create a folder for each feature like accounts, and customers. 
- Then put the jsx files associated for each features
- Create the slice for each feature
- export the slice into the store, where the reducer uses default export, and the action creators uses named export 

- Q: What is a slice?

A slice is a part of the total state. The entire states lives in the store, so we're basically taking a piece of that state. The idea is that in each slice, we co-locate as much as the Redux logic as possible in one file, so we don't need to jump around between files. 

Here we're place the reducer, the action creator, and the initial state, then export it into the store. 

- example of  a slice 
const initialStateAccount = {///};
export default function accountReducer(state = initialStateAccount, action) {///}
function deposit(amount) {///}
function withdraw(amount) {///}
export { deposit, withdraw };

! CONNECTING REDUX WITH REACT

- install react-redux
npm i react-redux

- Q: What is react-redux?

Library that helps in communication between React and the redux side of the project

- Q: So how can we provide the store the the app?

It works similar to context API. Import the Provider, and wrap the application with the Provider, and then we can pass the store.
Now the application knows about the redux store, now every component can read data from the store and dispatch actions to it.

~ connecting react to redux | Once per project lang
- 1. Export yung store mula sa file kung saan nagawa - gumamit ng named exports para kahit maraming iexport.
- 2. Import the store in the root, index.js
- 3. Import the Provider coming from react-redux library
- 4. Wrap the App with the Provider, then pass the imported store to the Provider.

import store from "./store";
import { Provider } from "react-redux";

<React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</React.StrictMode>

- Q: How to read data from the store?

~ Accessing state
-1. Find the component that needs to access the state
-2. Import the useSelector hook provided by react-redux
-3. Invoke the useSelector hook, it accepts a callback function
-4. Use the state, everytime the state updates it will re-render.

import { useSelector } from "react-redux";

-Do as much data manipulation in the useSelector, you can do all sorts of manipulation here. 
- Redux actually recommends doing this kind of data manipulation, like caclulaton inside the selectior function, and not in the component
- redux also recommends to take these functions in their respective slices, it's also a standard for the name of the function to start with get
export const getTotalCartQuantity = ({ cart }) =>
  cart.cart.reduce(
    (totalCartQuantity, currentCartItem) =>
      (totalCartQuantity += currentCartItem.quantity),
    0,
  );

export const getTotalCartPrice = ({ cart }) =>
  cart.cart.reduce(
    (totalCartPrice, currentCartItem) =>
      (totalCartPrice += currentCartItem.totalPrice),
    0,
  );

- import the functions and use it
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
const totalCartQuantity = useSelector(getTotalCartQuantity);
const totalCartPrice = useSelector(getTotalCartPrice);

- you can also directly destructure the store
const customer = useSelector(({customer}) =>
    console.log(customer.fullName)
);

- Q: How can you update the state using action creators?

~ Updating state | madalas gamitin
- 1. Maglagay ng reducer sa isa sa mga slices na binabago yung state.
- 2. iexport yung action creator na ginagawa automatically ng slice.
- 3. Hanapin yung component na paggagamitan ng dispatch.
- 4. Import yung action creator function at useDispatch mula sa react-redux
- 5. iinvoke yung useDispatch hok para makaaccess sa dispatch function
- 6. Kapag may ginawa si user, then invoke yung action creator then dispatch.

import { useDispatch } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

const dispatch = useDispatch();

function handleWithdrawal() {
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
}

function handleRequestLoan() {
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
}

- Q: What is the old way of connecting react components to redux store?

the useSelector is the modern way of using Redux in react, so before hooks existed, Connect API was used.

!REDUX MIDDLEWARE

- Q: If we wanted to make an asynchronous operation in Redux, where could we do it?

We can't do it inside reducers because reducers need to be pure functions (no side effects). By itself, Redux store doesn't know anything about  performing asynchronous logic, it only knows how to asynchronously dispatch actions and update the state. So it needs to happen outside a reducer.


Can't we just fetch the data in the component and then dispatch an action to the store with that received data?

That is possible but not ideal, because we want to keep our components clean and free of data fetching. We also want our data fetching logic encapsulated somewhere, in one place and not spread all over the application.

- Q: What is redux middleware?

In redux, middleware is a function that sits between dispatching and the store. It allows us to run code after dispatching, but before reaching the reducer in the store. 

Usually after dispatching, the action immediately reaches the reducer and the state is updated.

- Perferct for asynchronous code
- API calls, timers, logging, etc
- Place for side effects

- Q: Should you write your own middleware?

We can write the middleware function, but usually we use third-party package, and in the case of asynchronous operations, the most popular middleware in Redux is Redux Thunk.

- Q: What when Redux Thunk are used?

After dipatching an action, it will not go immediately to the store, it will get into the Thunk (middleware), then we could now perform asynchronous operation, in this case its fetching the data, as the data arrives, it is placed in the actions payload, and is finally dispatched to the store, where the state gets immediately updated.

Thunk allows Redux to wait before dispatching the fetch data into the store.

- Q: How can you use redux thunk?

- 1. Install the middleware package - npm i redux-thunk
- 2. Apply the middleware to the store
- 3. Use the middleware in action creation functions

- Tells the store that we want to use the thunk middleware in our application
const store = createStore(rootReducer, applyMiddleware(thunk));

function deposit(amount, currency) {
    -if the current is already in USD, then just return normal operation
    if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };

    - the only difference is that in the action creator we're returning a function, Redux will know that this function is the asynchronous action we want to execute before dispatching anything to the store.
    - In order to later dispatch this function that Redux calls internally, it gets access to the dispatch function and current state
    return async function (dispatch, getState) {
        const host = "api.frankfurter.app";
        // API CALL
        const res = await fetch(
            `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
        );

        const data = await res.json();
        const converted = data.rates.USD;

        // RETURN THE ACTION
        dispatch({ type: ACCOUNT_DEPOSIT, payload: converted });
    };
}

function handleDeposit() {
    if (!depositAmount) return;
    - when this is dispatched and calls the deposit action creator, instead of ending up with an event object, we end up with a function. so we're dispatching a function, so when Redux sees it, it knows that that function is theThunk, so it will execute the function and not immediately dispatch the action to the store.
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("");
}

!REDUX DEV TOOLS

How to install redux dev tools?

- 1. Install the google chrome extensio of redux dev tools
- 2. install the npm package - npm i redux-devtools-extension
- 3. In store, import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


!REDUX TOOLKIT (Modern Way)

- Q: What is Redux Toolkit

Redux Toolkit is the modern way of writing Redux code, it is a library that makes it easier to work with redux, It wraps plain redux and simplifies the process of creating action types.

Redux team now advises to use Redux toolkit over classic Redux. But why though?

Redux toolkit is an opinionated approach, that forces us to use Redux best practices the community learned over the years. So Redux team took all these best practices and placed it into this new way of writing Redux.

- Q: How can you install redux toolkit?

npm i @reduxjs/toolkit

- Q: Can you use both classic Redux and Redux toolkit at the same time?

Both ways of writing redux are compatible with each other. So you can use them together, so you can even use classic redux in one part of the app and redux toolkit on the other parts.

- Q: What are the advantages of using Redux Toolkit?

It allows us to write a lot less code to achieve the same results (less boilerplate).

- Q: What are the three things redux toolkit gives?

1. We can write code that mutates state inside reducers (gets converted to immutable logic behind the scenes by immer library), this is an advantage if you have a complex state object.
2. Action creators are automatically created
3. Automatically setup thunk middleware and devtools.

- Q: What is boilerplates?

Code that set things up, but doesn't do anything meaningful.

-import { configureStore, createSlice } from "@reduxjs/toolkit";

- Q: What are the things that create slice does?

1. Define initial state
2. It groups mini reducers into one big reducer.
3. It creates a set of action creator functions.
4. We can now mutate the state directly in the reducer
5. We won't be needing switch statement, and default case is automatically handled.

const songSlice = createSlice({
        - Name of the action type
        name: "song", 
        -initial value ng state, pwedeng ibang data type yung gamitin like objects 
        initialState: [], 
        - acts as mega reducer, so kung inaccess yung songSlice.reducer, eto yung   combination ng  mga mini reducer sa loob.
        reducers: {
        -mini reducers, na parang case statement, kaya nung naglagay ng song/addSong,   naexecute     tong specific mini reducer.
        addSong(state, action) {
            - Yung state lang na hinahandle netong reducer yung maapektuhan, pwedeng magbago depende sa context, if nasa slice then yung state lang ng slice yung apektado. pero pag nasa labas pwedeng buong state ng store
            state.push(action.payload);
        },
            removeSong(state, action) {
            state.pop();
        }
    }
});

- Configure does multiple things automatically for us, combine reducers, add thunk middleware, and setup redux developer tools. 

Would determine the keys once store is created, 
const store = configureStore({
    reducer: { songs: songSlice.reducer }
});


Another example
const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
    },
});

- Q: How to make the state in the store a lot readable?
> const stringState = JSON.stringify(store.getState());

- Q: How can I see existing action creators?
console.log(songSlice.actions)

!Using Redux toolkit in practice
- index.js
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

- Create a filer for the store
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
    },
});

export default store;

- Create the slices
import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        balance: 0,
        loan: 0,
        loanPurpose: "",
        isLoading: false,
    },
    reducers: {
        deposit(state, action) {
            state.balance += action.payload;
            state.isLoading = false;
        },

        withdraw(state, action) {
            if (state.balance >= action.payload) {
                state.balance -= action.payload;
            }
            - we're just returning, not returning the state
            return;
        },

        requestLoan: {
            - if we did it the normal way, it will only receive a single argument, so what we need to is to prepare before it reaches the reducer
            prepare(amount, purpose) {
                return {
                    - this will become the payload in reducer
                    payload: { amount, purpose },
                };
            },

            reducer(state, action) {
                if (state.loan > 0) return;

                state.loan = action.payload.amount;
                state.loanPurpose = action.payload.loanPurpose;
                state.balance = state.balance + action.payload.amount;
            },
        },

        payLoan(state) {
            state.loan = 0;
            state.loanPurpose = "";
            state.balance -= state.loan;
        },

        convertingCurrency(state) {
            state.isLoading = true;
        },
    },
});

export default accountSlice.reducer;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

- using action creators, instead of using async thunks
export function deposit(amount, currency) {
    // if the current is already in USD, then just return normal operation
    if (currency === "USD") return { type: "account/deposit", payload: amount };

    - the only difference is that in the action creator we're returning a function, Redux will know that this function is the asynchronous action we want to execute before dispatching anything to the store.

    - In order to later dispatch this function that Redux calls internally, it gets access to the dispatch function and current state
    return async function (dispatch, getState) {
        dispatch({ type: "account/convertingCurrency" });

        // API CALL
        const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
        );

        const data = await res.json();

        const converted = data.rates.USD;

        // RETURN THE ACTION
        dispatch({ type: "account/deposit", payload: converted });
    };
}

export default accountSlice.reducer;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

!Redux vs Context API

Many devs saw Context API + useReducer, as replacement for Redux.

- Q: What are the pros and cons of both solutions?

Pros of Context API + useReducer

- Context API + useReducer solution are already built into React. 
- Its easy to setup single context using context API + useReducer, 
- Additonal state slice requires new context setup from scratch, this can also lead to provider hell in App.js
- No builtin mechanism for asynchronous operations
- optimizing the performance of context API and useReducer requires more work

Redux

- If you want to use Redux, you need to install packages, which increases the work, and increases the bundle size.
- More work to setup initially
- Once set up, it's easy to create additional state slices. All you need is to create a new slice file and add your reducers, but you don't need to create another provider and another custom hook.
- has support for middleware asynchronous operations, it gives way to handle asynchronous task right inside the state management tool.
- performance is optimized out of the box
- has execllent devtools, which can make a huge difference when it comes to complex application and is updated a lot.

- Q: when should you use context API + useReducer, or redux?

CONTEXT API + useReducer

- use the context API for global state management in small apps
- when you just need to share a value that doesn't change often (color theme, preferred langauge, authenticated user etc.)
- When you need to solve a simple prop drilling problem
- When you need to manage state in a local sub-tree of the app

REDUX

- use redux for global state management in large apps
- when you have lots of global UI state that needs to be updated frequently (Because redux is optimize for it), example are shopping cart, current tabs, complex filters or search etc.
- redux is perfect when you have complex state with nested objects and arrays, because you can mutate with redux toolkit


! APPLICATION PLANNING

Here are the steps to plan a professional React application step by step

From what we learned in the Thinking in React lecture, we know that we can build simple React projects by 
1. breaking the desired UI into components
2. Building a static version of it (no state yet)
3. Think about state management + data flow 

This works well for small apps with one page and few features, but in Real-world apps, we need a amore complete process


- Q: How can you plan and build react applications?

1. Gather application requirements and features
2. Divide application into pages
    AS you divide the application into pages, for each of the pages, we can think about the overall and page-level UI
    Break the desired UI into components
    Design and build a static version (no state yet)
3. Divide the application into feature categories, so we can build the application around it, and organize the code in a logical way.
    Think about state manage + data flow,
4. Decide which libraries you want to use (technology decisions), this is where we'll decide what tech stack we're going to use to implement our application.

- Step 1. Gathering the business requirements (everything that the business expects from the application).

Simple application where users can order pizza from a menu
Requires no user accounts and no login, users just input their names before using the app
The pizza menu can change, so it should be loaded from an API. (since the business has already setup their API, we can start using it to load the pizza menu)
We need some cart where users can place multiple pizzas before ordering.
Ordering just requires user's name, phone number, and address. So the pizza can be correctly delivered and to be able to reach the user if an issues is encountered.
If possible, GPS location should also be provided, to make it easier for the company to deliver
User's can mark their order as priority, for additional 20% of the cart price.
Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
Payments are made on delivery, so no payment processing is necessary in the app.
Once the user has placed a new order, ewach new order gets a unique identification that should be displayed in the UI, so the user can later look up the status of the order based on the ID.
Users should be able to mark their order as priority event after it has been placed.

Of course with these informations, we still don't know how to build our application. But from these requirements, we can understand the features we need to implement.

- Step 2 and 3. Derive the application's main feature categories from the list of requirements

user
menu
cart
orders

We know that the user needs to input their name, phone number, and adress. so one feature category is going to be everything related to the user. 
We also have menu, so all features related to menu, for example loading and displaying the menu is part of this feature category.
We also have cart, this is where the the user will be able to take one or multiple items from the menu and add it to the cart, or to update the quantities of each pizza
Orders, like placing new order, looking up an existing order based on the ID.

- All business requirements from step 1 falls into one of these feature categories. So this is what the app will essentially be about. And based on this, we can also determine the pages that we need to implement. 

1. Home - /
2. Pizza Menu - /menu
3. Cart - /cart
4. Placing a new order - /order/new
5. Looking up an order /order/:orderID

- Step 3 and 4, State management and Tech decisions 

Bring back the feature categories, we can use these feature categories as state slices or state domains, so we have the entire state, and one slice for user, menu etc.

How we manage each state slices depends of what type of state each of them had.

user - Global UI, here we don't need any accounts, so the data will simply stay in the app and be accessible to different components.
menu - Global Remote, because the menu is fetched from an API
cart - Global UI, the cart is global UI state, just like the user, it will be stored in the application and not in some kind of remote database.
orders - Global Remote, because it needs to be submitted to an API and fetched from an API 

- Deciding the tech stack based on these information

For routing, we're going to use the standard for React SPA, which is React router.

For styling, we're going to use tailwindcss

For state management, sice we have 2 different types of state, we also need 2 ways to manage global UI state and Global remote state. For remote state, we will use the new data fetching capabilities of React Router (It allows us to render as you fetch instead of fetch on render). This is not really state management as it doesn't persist the state but it's still worth exploring because it allows us to do many thing with just one library, so for global UI state, we're going to use Redux, the state we're going to manage is a bit complex, so redux it has many advantages for that kind of state.

!SETTING UP A PROFESSIONAL FILE STRUCTURE FOR REACT PROJECTS | FOLDER STRUCTURE

- Q: How can you setup a professional file structure for your project?

There are multiple ways to structure a professional React application, but what works well with bir projects is feature based structure . 

- Instead of creating one big folder containg all the components, you're going to create one features folder inside the src (this is where the feature categories that we identified earlier goes). Each folder will contain, every files needed to make that feature work, components, hooks, stylings etc. This way all files are co-located and we don't need to jump around files  

- There are components that are more reusable and doesn't belong in any features. So create a folder called ui, which will contain reusable UI components like buttons, inputs etc. Most times, they're just representational components and doesn't have any side effects.

- services folder contains reusable code for interacting with an API

- utils folder contains helper function that we can reuse in multiple places of the application. They are reusable, stateless helper functions that don't create side effects. Like for dates or number manipulation

- you can also add folder for context, hooks, pages but it's inside the features 

! NEW WAY OF IMPLEMENTING ROUTES

- Q: What is the new way of implementing routes?

React router 6.4, introduced a whole new way of defining routes and working with React router. we can now use powerful mechanism inside React router for fetching data into pages, and for submitting data using forms.

React router documentation - https://reactrouter.com/en/main

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

- Function that defines our routes, it takes an array of objects where each object is a route
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/order",
        element: <Order />,
    },

]);

function App() {
    return <RouterProvider router={router} />;
}

- Q: What's the difference between the traditional and modern way of setting up routes in react router?

You can't use the traditional way for data fetching, loading data. These data loading, data fetching capabilities are only possible when we create router using createBrowserRouter function.

!BUILDING THE APP LAYOUT

- Q: How can we make a global application layout using React router?

Create a layout that will work for both big and smaller screen. 


- in AppLayout.jsx inside ui folder, Setup the layout first in AppLayout.jsx
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

-  connect it in the router
const router = createBrowserRouter([
    {
        - you don't need to provide path, which makes it a layout route, which purpose is providing layout to the application
        element: <AppLayout />,
         - makes it a nested routes
        children: [
            { path: "/", element: <Home /> },
            { path: "/menu", element: <Menu /> },
            { path: "/order/:orderID", element: <Order /> },
            { path: "/order/new", element: <CreateOrder /> },
            { path: "/cart", element: <Cart /> },
        ],
    },
]);

!FETCHING DATA WITH REACT ROUTER LOADER

- Q: What's the idea behind loaders?

The idea behind it is that somewhere in our code, 
we create a function that fetches some data from an API. 
we then provide that loader function to one of our routes, 
and that route will then fetch that data as soon as the application goes to that route. 
In the end, once the data arrives it will be provided to the page component itself using a custom hook.

Doing this, React router will fetch the data at the same time it starts rendering the correct route. Unlike what we previously did where we fetch on render approach where the component is rendered first and after the component is render then it would fetch the data. 

We're doing it in three steps: 
- 1. Create the loader and export it
export async function loader() {
    - Although you can put the logic of getMenu here, it's better to put it into services, since it may be needed to multiple places
    const menu = await getMenu();
    - we're returning whatever data it needs to provide to the page.
    return menu;
}

- Another example when you need to use the parameters, or you need to pass in arguments
export async function loader({ params }) {
    const order = await getOrder(params.orderID);
    return order;
}


- 2. Provide the loader

const router = createBrowserRouter([
    {
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/menu",
                element: <Menu />,
                // - 2. provide the loader
                loader: menuLoader,
            },
        ],
    },
]);

- 3. Provide the data to the page 

function Menu() {
    -3. get the data, use useLoaderData custom hook, you don't need pass an argument, because React router would automatically know that the data we want is associated to this page. the data that comes from loader
    const menu = useLoaderData();

    return (
        <div>
            {menu.map((menuItem) => (
                <MenuItem key={menuItem.id} pizza={menuItem} />
            ))}
        </div>
    );
}

- Q: Where should you place the loader?

The loader can be placed anywhere in your codebase, but the convention is to place the loader for the data of a certain page inside the file of that page. So example you want to fetch the menu in <Menu /> page component, then you can put the loader inside the <Menu> component.

!ADDING A LOADING INDICATOR USING REACT ROUTER


To be able to add an loading indicator, we need to know first if the data is actually being loaded, so we need to have that information in our app. 
We can access this by using the useNavigation hook, not useNavigate like we're using. with useNavigation we will be able to see whether the application is currently idle, loading, or submitting. This information is not just for one page but for the entie application 

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">
            {isLoading && <Loading />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

! ERROR HANDLING USING REACT ROUTER'S ERROR ELEMENTS

with createBrowserRouter, whenever there's an thrown in a loader, an action, or simply while rendering a component, we can render an error element instead of the actual pages.



const router = createBrowserRouter([
    {
        - specify the error element, and this will be applied to the whole layout, it is put at the top because errors inside children element bubbles up to parent element.
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                - Since the error element we provided at the top covers the entire page, we also need to put error element specific to menu
                errorElement: <Error />,
            },
        ],
    },
]);


function Error() {
    const navigate = useNavigate();
    - access the message for the error that occurred
    const error = useRouteError();

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            - Some errors does not have error messages, so we need to put both data and message
            <p>{error.data || error.message}</p>

            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

!WRITING DATA WITH REACT ROUTER ACTIONS

- Q: What are react-router actions?

actions are used to write data or mutate data stored on the server. It allows us to manage remote server state using action functions and froms that we weire up to routes, similar to loaders.


- Q: So, how can I use actions?
function CreateOrder() {
    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart;

    return (
        <div>
            <h2>Ready to order? Lets go!</h2>
            - Use the Form provided by React router instead of regular form element, add the method like POST, UPDATE, DELETE just like the usual, and the action where the form should be submitted to, it's not necessary because by default react router, matches the closest route, so there's no need to write the path like order/new, although it would work  

            - The beauty of doing this is that it's easy to get all the data inside the form,  you don't need to put javascript for it to work, all you have is the Form and React router handles the rest, we didn't need to make the inputs controlled, we didn't need to create loading states. The idea is to allow us to go back to the way HTML used to work before everyone started to using JavaScript  
            <Form method="POST">
                <div>
                    <label>First Name</label>
                    <input type="text" name="customer" required />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required />
                    </div>
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input type="text" name="address" required />
                    </div>
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button>Order now</button>
                </div>
            </Form>
        </div>
    );
}


- As soon as the form is submitted it will create a request that we're going to intercept by using the action function as soon as we have it connected with React Router.
export async function action({ request }) {
    - formData is just javascript API
    const formData = await request.formData();
    - convert it into object
    const data = Object.fromEntries(formData);

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
    };

    const newOrder = await createOrder(order);

    - we're not using the navigate, because it comes from useNavigate hook, but we can't call hooks inside actions, so we need to use redirect, another function provided by React router, which creates new request. It works well with the web API's standards request and response API's. so if we returned a new response, React router automatically goes to the URL contained in that new response.
    return redirect(`/order/${newOrder.id}`);
}


- Add the action in createBrowserRouter

import CreateOrder, {
    action as createOrderAction,
} from "./features/order/CreateOrder";


const router = createBrowserRouter([
    {
        errorElement: <Error />,
        element: <AppLayout />,
        children: [
            {
                path: "/order/new",
                element: <CreateOrder />,
                - add the action, whenever there's new form submission on this route, the action we specified will be called
                action: createOrderAction,
            },
        ],
    },
]);

!HANDLING ERROR IN FORM ACTIONS

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
    };

    - object that will hold errors
    const errors = {};

    - check if the phone number provided is valid, if not add it into errors
    if (!isValidPhone(order.phone)) {
        errors.phone =
            "Please give us your correct phone number, as we might need it to contact you later";
    }

    - Check if there is error inside the errors object, if there is one, return the errors object, else proceed
    if (Object.keys(errors).length > 0)
        return errors;

    - If everything is okay, create new order
    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.id}`);
}

- in the app
{
    path: "/order/new",
    element: <CreateOrder />,
    // - add the action, whenever there's new form submission on this route, the action we specified will be called
    action: createOrderAction,
},


function CreateOrder() {
    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart;

    - access submit state
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    - since the actions is now wired up to the action, so this component can now access the data returned from that action. We're using another hook for action
    const formErrors = useActionData();

    return (
        <div>
            <h2>Ready to order? Lets go!</h2>

            <Form method="POST">

                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required />
                    </div>
                    {formErrors?.phone && <p>{formErrors.phone}</p>}
                </div>


                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button disabled={isSubmitting}>
                        {isSubmitting ? "Placing Order..." : "Order now"}
                    </button>
                </div>
            </Form>
        </div>
    );
}


!ASYNC THUNKS

~ Behind the scenes ng async thunk kapag pending o fulfilled.

- Start ng request 
- async thunk function - automatic na ididispatch yung action during data loading
- then magkakaron ng action type na pending, to indicate na fetching pa yung data.
- madidispatch at masesend sa reducers
- then icoconfigure natin yung reducer para bantayan yung action type, if nagmatch then iuupdate natin yung state at babaguhin yung isLoading -> false
- After makuha yung request, mag eexecute ule yung async thunk function
- then magkakaron ng action type na fulfilled to indicate na successfully fetched yung data.
- madidispatch at masesend sa reducer 
- then icoconfigure ule yung reducer na magbantay dun sa action type, if nagmatch then iuupdate yung data. at isLoading -> false.

? Paano pag sa error?
- Halos pareho lang, magkakaiba lang sa pangalawang async thunk function, yung action type nya ay rejected, to indicate na may error sa request.
- madidispatch at masesend sa reducer
- icoconfigure yung state at iuupdate yung error

- Q: How do you make an async thunk?

- 1. Gumawa ng file para sa thunk at pangalanan based sa purpose ng request ex. fetchUsers
- 2. Gawin yung thunk at bigyan ng base type na nagdedescribe sa purpose ng request.
- 3. sa thunk, gumawa ng request, ireturn yung data na gusto mong gamitin sa reducer at iexport yung thunk

> import { createAsyncThunk } from "@reduxjs/toolkit";
> import axios from "axios";

* first argument ay magiging base type, yun yung mag gegenerate ng action type gaya ng sa diagram. So yung magiging action type na gagawin ng async thunk ay users/fetch/pending

> const fetchUsers = createAsyncThunk("users/fetch", async () => {
>     const response = await axios.get("http://localhost:3005/users");
>     return response.data;
> });

- 4. sa slice, maglagay ng extraReducer, para magbantay sa action type na gawa ng async thunk function

-Para maiwasang manually itype yung action type, pwede mong gamitin > yung thunk.
-Kapag gumawa ka ng thunk automatic na properties nya ay yung base type + status like fetchUsers.pending === 'users/fetch/pending' o fetchUsers.fulfilled === 'users/fetch/fulfilled' o fetchUsers.rejected === 'users/fetch/rejected' 

>builder.addCase(fetchUsers.pending, (state, action) => {
>       state.isLoading = true;
>   });
    - yung data na nireturn sa thunk ay automatic na mapupunta sa action.payload ng fulfilled na action type.
>   builder.addCase(fetchUsers.fulfilled, (state, action) => {
>       state.isLoading = false;
>       state.data = action.payload;
>   });
    -sa rejected naman automatic na maassign yung error object sa action.error
>   builder.addCase(fetchUsers.rejected, (state, action) => {
>       state.isLoading = false;
>       state.error = action.error;
>   });

- 5. Iexport yung thunk mula sa store/index.js file
> export * from "./thunks/fetchUser";

- 6. Kapag yung may ginawa yung user, then idispatch yung thunk function para marun

!Another example, check fast react pizza co for a detailed view

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    status: "",
    position: {},
    address: "",
    error: "",
  },
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

- createAsyncThunk receives two arguments, first the action name, and an async function that returns the payload for the reducer, this fetchAddress will become the action creator function that will be called later in the code.

- This async thunk will produce 3 additional action type, one for pending promise state, one for fulfilled, and one for rejected state.
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();

    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // - This data that is returned becomes the payload of fulfilled state
    return { position, address };
  },
);

// slice actions
export const getCurrentUser = ({ user }) => user.username;

// export
export const { updateName } = userSlice.actions;
export default userSlice.reducer;

!FETCHING DATA WITHOUT NAVIGATION USING USEFETCHER

Using it, we can fetch and mutate date without navigating or moving to another page.


- sometimes, we need to fetch data from another route, basically a data that is not associated with the current page. sometimes, we want to do it without causing navigation
const fetcher = useFetcher();

useEffect(() => {
    - Just like any navigation, it can have different states
    if (fetcher.state === "idle" && !fetcher.data) {
    - loads the route and stores it into the fetcher object
    fetcher.load("/menu");
    }
}, [fetcher]);


!UPDATING DATA WITHOUT NAVIGATION 





















! Project Organization And Folder Structures 

~ Common Approach in Structuring Project
- Gawan ng folder bawat components, then dun ilagay yung associated resources. like stylings etc. Maganda dahil naa-isolate yung mga componments at hindi nagsasama-sama. Thus mas maliit, lalo na sa styling

- Then maglalagay ng index.jsx as starting point, at magiging central point, dito rin ilalagay yung pag export
> export { default } from "./Navbar";

~ pag gamit ng named exports, mas madali kase pwedeng isang line nalang yung multiple imports

- bali sa entry poing ng pages, ilalagay yung imported components then ieexport mo para pwede syang named import sa app.jsx
> import { About } from "./About";
> import { Home } from "./Home";
> export { About, Home };

>import { Home, About } from "./tutorial/04-project-structure/final/Pages";

~ exporting group of components
- bali sa main component, gagamitin yung exported components. then yung main component ang ieexport at gagamitin sa jsx. 


- Component vs page? Anong pinagkaiba?
* Parehas na component, pero yung page ay intended na ireuse. ex. component ay buttons, searchBar, dropdowns, navigations. Samantalang sa page naman ay mga checkout page, landing page.
*usually ang nangyayari nanenest yung components sa page. example ay App component

- Grouping by feature, sa folder nakapaloob yung related files dun sa feature, Downside ay yung component ay pwedeng gamitin sa multiple location.

> auth/ folder then sa loob ay LoginPage.js, LoginForm.js

- Grouping by type, igogroup based sa type ng component, component ba o page.

- Hybrid - bali Paghihiwalayin mo yung components at page, then ioorganize mo yung mga component based sa features.
> components > forms > Input.js
> page

~ Wag masyadong intindihin yung file organization
- Most of the professional projects, senior engineer yung magdedecide ng file structure
- Sa mga malalaking project, gagamit ka ng search imbes na manual navigation
- Hindi porket marami kang files sa isang folder ay masama na. 

- Organizing by purpose or function 

--- store / 
-   |--- actions /
-   |-------- actions.js
-   |--- slices / - folder para sa salices
-   |-------- movieSlice.js
-   |-------- songSlice.js
-   |--- index.js - para sa pag export ng redux store

- Pwede rin na iorganize by feature, so example merong separate folder para sa movies o songs.

- Bali yung store/index.js yung magiging central access point ng lahat ng related sa redux.














?Anong good at bad ng redux?
- dispatch function
- kapag sobrang dami na ng components, confusing na masyado, mahirap na malaamn kung bakit nag update yung component, at kung sinong responsible sa pag update ng state.
- advantageous ang redux dahil yung state ay nasa isang central point, so kung may iuupdate ka na state, kailangan mo lang tawagin si dispatch.
- Since nasa central point yung mga states, pwede tayong magdagdag ng additional debugging features, gaya ng pag console log every time na may action na ma-dispatched.
- downside naman ng dispatch ay kailangan natin magdagdag ng boilerplate codes, gaya ng action objects, switch statement sa reducer, action types. Para lang masure na gagana.

?structure ng state sa redux
- Merong kang malaking object para sa lahat ng state sa buong app, then sa loob may ibat-ibang state na minamanage ng ibat-iba mong reducers.
- yung name yung magsisilbing keys once magawa yung store.
- mas magandang istore yung lahat ng state sa isang malaking object.
- then yung values naman ay pwedeng produced mula sa reducers.
{
    movies: ['One piece film Z', 'Blood Moon'],
    songs: ['Favela', 'OMG', 'Hurt']
}







~ Action flow
- Kapag gumawa ng slice, then yung slice gumagawa ng combined reducer, yung combined reducer na yun ay function na maiinsert sa redux store. then kapag may action na madispatch, magfoflow sya sa combined reducer,  at kung anong mag match then ayun yung mini-reducer na maeexecute. like song/addSong
- Kapag may action na nadispatch, nasesent sya sa lahat ng reducers. Though, hindi naeexecute kase may pake lang ang dispatched na function sa may kaparehong action type.

> extraReducers(builder) {
    -  downside nito ay possible na magkaerror if example inalis yung resetMovies or nirename, then hindi na gagana, yung action type na specified sa extraReducer.
>   builder.addCase(movieSlice.actions.resetMovies, (state, action) => {
    - ireset yung state ng reducer na nagmamanage ng data
>     return [];
>   });
> }

~ Creating manual actions

-import
> import { createAction } from '@reduxjs/toolkit'

-gumawa ng action creator type
> export const resetActionType = createAction("app/reset");

- gamitin sa extra reducer
> extraReducers(builder) {
>   builder.addCase(resetActionType, (state, action) => {
>     return [];
>   });
> }

-export para magamit sa dispatch 
> export const resetActionType = createAction("app/reset");
- gamitin sa dispatch
> dispatch(resetActionType());


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~ Redux store Design

- 1. i-identify yung mga state na nageexist sa app
- 2. i-identify kung paano nagbabago yung state over time, like anong interaction yung mangyayari para mabago yung state.
> ex. change name, change cost. Then itransform mo sya sa mini reducer like changeName, changeCost
- 3. igroup yung mga common piece of state
- 4. gumawa ng slice sa bawat group

? Pano mag generate ng id gamit redux?
import { nanoid } from '@reduxjs/toolkit';

const id = nanoid();

~ data fetching using async thunk

- package installation
npm install @faker-js/faker @reduxjs/toolkit axios classnames json-server react-icons,  
yung faker na library ay para sa pag create ng random user.



~ Denormalized form example
?advantage? 
- Mas madaling gamitin if yung data ay structured na agad like yung data ay nagmamatch sa kung paano mo sya gagamitin sa ui, at kung yung requirements ng project ay hindi magbabago

> [
>     -Every object Represents a user
>     {
>         id: 50,
>         name: 'Yu',
>         albums: [
>             {id: 1, title: 'album 1'},
>             {id: 2, title: 'album 2'},
>         ]
>     },
>     {
>         id: 60,
>         name: 'Adonis',
>         albums: [
>             {id: 1, title: 'album 3'},
>             {id: 2, title: 'album 4'},
>         ]
>     },
> ]

~ Normalized form example, sa ganto magkahiwalay yung collection ng data
?advantage? 
- mas flexible, at mas madali mafigure yung relationship,  downside lang ay mas maraming isusulat na code.

[   
    -Collection ng albums
    {id: 1, title: 'Album 1', userId: 50},
    {id: 3, title: 'Album 3', userId: 70},
    {id: 5, title: 'Album 5', userId: 89},
]

[
    - Collection ng users
    {id: 50, name: 'Adonis'},
    {id: 70, name: 'Yu '},
]

~ Data fetching techniques inside redux

? ano yung dalawang option sa rtk?
- 1. Async Thunk functions
- 2. Redux Toolkit Query

- search Rules ng Reducer functions sa notes na to.
!Wag kang gagawa ng request sa loob ng reducer. 
!Dapat palaging synchronous ang reudcers
!Magoperate lang sa arguments at hindi sa labas na variables.



?Anong alternative sa pag throttle ng connection sa network?
- Paglagay ng pause para sa testing
- For development only, will pause for 1 sec, ilagay bago magreturn ng data
await pause(1000);

For development only, delete it after, helper function na magbibigay ng pause
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

?Para saan ba yung skeleton loader?
- Nagsisilbi as stand in sa content, para hindi empty yung page mo at may feedback din kay user na nagloload pa yung content.

! Note: Pwede ka padin gumamit ng state sa component kahit na guamgamit ka ng redux.

~ example ng fine-grained loading state
! 1. Imove lahat ng loading at error state sa component
- 2. Itrack yung request sa store, at iaallow yung components na tandaan yung request na ginawa nila. 

?Pwede mong matrack yung request sa dispatch gamit ang requestID

?Paano madedetect if tapos na yung request?
useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers()).unwrap().then().catch();
    setIsLoadingUsers(false);
}, [dispatch]);

~ More information about dispatch function
- Nagrereturn ng promise
- yung returned na promise ng dispatch ay hindi nagwowork kagaya ng usual promise na nilalagyan ng then at catch.
- sa returned promise ng dispatch, maiinvoke yung .then kahit na magfail o magsuccess yung request.
- yung argument sa .then ay yung fulfilled o rejected action object.
- para mapagana yung usual na promise, kailangan mo munang iunwrap yung promise na returned ng dispatch.

> useEffect(() => {
>     setIsLoadingUsers(true);
>     dispatch(fetchUsers())
>         .unwrap()
>         .then(() => { !Dedelete na to dapat since wala namang content yung then })
>         .catch((err) => setloadingUsersError(err))
-         Maiinvoke after ng then at catch.
>         .finally(() => setIsLoadingUsers(false));
> }, [dispatch]);

> async (user) => {
>     await axios.delete(`http://localhost:3005/users/${user.id}> `);
>     ayusin to, kase yung nirereturn na result ni axios ay > empty object. which means na yung magiging payload sa > fulfilled ay empty object.
>     return user;
> });

~~~~~~~~~~~~~~~~~~~~~~~ Redux Toolkit Qeury (RTK Query) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

?Paano madisplay yung specific na content gamit ang id?
> GET http://localhost:3005/albums?userId=23 HTTP/1.1

- Example ng pag gawa ng API gamit ang rtk query
> import { createApi } from "@reduxjs/toolkit/query/react";

~ Paggawa ng RTK Query API
- 1. I-identify yung group ng related request na kailangang gawin ng app. example group ng request na related sa users, then albums, then photos

- 2. Gumawa ng bagong file na gagawa ng API - sa store gumawa ng folder na APIS, then albumsApi.js then iimport na din yung createApi

- 3. dahil yung API ay kailangang mag store ng maraming state related sa data, request, status errors. Maglalagay ka ng reducerPath.
?Ano at para saan yung reducerPath?
* Property sa overall state object kung saan lahat ng state ng api ay dapat imaintain. ang purpose nya ay ispecify kung saan isstore yung mga state sa loob ng overall state.

- 4. kailangang malaman ng api kung paano at saan magsesend ng request, maglagay ng baseQuery
* RTK yung gagawa ng request on your behalf, hindi ka na ba gagamit ng AXIOS, instead yung RTK ay gumagamit ng fetch na built in sa browser. 
* ang kailangan nalang gawin ay magimport ng function na gagawa ng preconfigured version ng fetch which is fetchBaseQuery

- 5. maglagay ng endpoints sa bawat request na gusto mong gawin. Request na nagrered ng data ay queries at request na nagwriwrite ng data ay mutation.
> endpoints(builder) {
>     return {
>         fetchAlbums: builder.query({
>             query: (user) => {
>                 return {
>                     url: "/albums",
>                     params: {
>                         userId: user.id,
>                     },
>                     method: "GET",
>                 };
>             },
>         }),
>     };
> },

- 6. iexport yung mga automatically generated na hooks
> export const { useFetchAlbumsQuery } = albumsApi;
> export { albumsApi };

- 7. Connect yung api sa store, reducer, middlleware at listeners.
> export const store = configureStore({
>     reducer: {
>         users: userReducer,
>         [albumsApi.reducerPath]: albumsApi.reducer,
>     },
     - Adding middleware
>     middleware: (getDefaultMiddleware) => {
>         return getDefaultMiddleware().concat(albumsApi.middleware);
>     },
> });
- using the listener
> setupListeners(store.dispatch);

- 8. Export yung hooks mula sa store/index.js file
> export { useFetchAlbumsQuery } from "./apis/albumsApi";

- 9. gamitin yung generated na hooks sa component
> const { data, error, isLoading } = useFetchAlbumsQuery(user);
> const [addAlbum, results] = useAddAlbumMutation();

~ Endpoints design process
- Ano yung goal?
- Bigyan ng simplified na pangalan
- query ba o mutation
- Ano yung path sa specific na request related sa baseUrl
- ano yung query string sa request na to. Ex. fetch yung specific album -> ?userId=userId
- ano yung method sa request na to
- ano yung body sa request na to

const albumsApi = createApi({
    !This is API para sa client side at hindi pang backend
    endpoints(builder) {
        -Hooks para sa automation ng request.
        > fetchAlbums : instruction for requesting on fetching albums
        > addAlbum : instruction for making a request to add album
        > removeAlbums: instruction for making a request to remove an album
    }   
});

?Paano gamitin yung hooks mula sa API
> const REACT NOTES = () => {
>   const {data, error, loading} = useFetchAlbumsQuery();
>   const {data, error, loading} = useRemoveAlbumMutation();
>   return <h1>hello</h1>
> }

- Magkakaron ng collection ng hooks mula sa API na automatically generated names like useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation
? Bakit merong query then merong mutation sa name?
- Kapag query, ibig sabihin nagreread o fetch ng data. Pero kung Mutation, binabago yung data.


~ Things to be aware of 
Kapag ininvoke sa loob ng component, immediately magfefetch ng data.

- magrereturn ng results object, may lamang isFetching, refetch, endPointName, isSuccess, status atbp,
const { data, error, isLoading } = useFetchAlbumsQuery(user);

?Anong pinagkaiba ng queries at mutation?
- pagdating sa queries,yung default behaviour ay magrurun agad kapag yung component ay na display sa screen, pero pwede ring idelay
- Pag sa mutation naman array yung nirereturn na nagpoprovide ng function na pwede mong iinvoke kapag gusto mong baguhin yung data. 

?Paaano tamang ihandle  yung updated na data?
- 1. Kunin yung bagong album mula sa response at iadd sa list ng albums
- PROS: isang request lang
- CONS: mas nagiging complicated, at tsaka pwedeng wala yung kailangan na data sa response
- 2. Pagkagawa ng albums, gumawa ng panibagong request para kunin yung lahat ng albums
- PROS: mas madali ipicture yung data flow ng app
- CONS: dalawa yung request

?Paano ba mag implement ng automatic na data refetching 
- gagamit ka ng tag system para masolve yung out of sync na data, ginagamit para imark yung certain queries as out of date. after mamutate yung data. 
- mas madali kapag naiintindihan mo yung paano tinatrack ng RTKQ yung request, so paano ba?

~ behind the scenes ng deduplication process
if meron kang multiple o duplicated hooks, dinededuplicate ng RTK
- pag invoke ng useFetchAlbums, ilalagay yung fetchAlbums sa end point, pati yung argument as key sa queries. then yung result. sa pangalawang beses ng useFetchAlbums, ichecheck muna if meron bang existing request dun sa endpoint na may parehong argument. Kapag meron pa ang ginagawa ni rtk query ay irereturn yung result ng first call sa duplicate na call.

~ pag gamit ng tag system
- pag gumawa ka ng endpoint sa API file, maglalagay ka din ng tag dun sa end point config 
fetchAlbums: builder.query({
    providesTags: ["Album"],
    query: (user) => {return {}},
}),

- iupdate din yung configuration ng mutation hook, ex. sa addAlbum, kapag ininvoke mo si AddAlbum, hahanapin lahat ng queries na may tag na Album, at imamark sya as outdated, bali mawiwipe yung data at gagawa ng parehong request, na may parehong end point at argument. para maupdate 
addAlbum: builder.mutation({
    invalidatesTags: ["Album"],
    query: (user) => { return {}},
}),

?Para saan yung fine-grained na tag validation? 
- possible na issue ay gagawa din ng request sa mga users na hindi naman kailangang ng refetch. ex. sa may app meron kang multiple users na naka open. ibig sabihin gagawa sila ng iba't-ibang request. ang issue lahat sila may tag na 'Album', kaya magrerefetch din

- gagamit ka ng object as tags, para mas specific, ex. {type: 'Album', id: 4}, then iuupdate mo din yung sa mutation hook config na magrefetch lang sa specific na id.
providesTags: (result, error, arg) => {
    - yung arg ay yung argument na pinass natin 
    return [{ type: "Album", id: arg.id }];
},

~ Clever tag implementations
Reason kaya sa provideTags or invalidateTags ay nagrereturn ng array of object kase pwede kang magreturn ng multiple na tags sa isang end point.

Gagawa ng tags sa bawat albums na nafetch. ex.
> {type: 'Album', id: album.id -> 50}
> {type: 'Album', id: album.id -> 38}
Then sa dulo gagawa ka ng tags para sa user
> {type: 'UserAlbums': id: user.id}

> providesTags: (result, error, arg) => {
>     const tagged = result.map((album) => {
>         return { type: "Album", id: album.id };
>     });
>     return [...tagged, { type: "UsersAlbums", id: arg.id }];
> },

- anong pinagkaiba ng import  {createApi} from '@redux-js/toolkit/query' sa '@redux-js/toolkit/query/react' ?
- pag walang react sa dulo, bibigyan ka ng version ng createApi na hindi gumagawa ng custom hooks. then yung isa gumagawa.












! CUSTOM NAVIGATION AND ROUTING SYSTEMS SECTION 

~Reusable presentation components
- 1. Gumawa ng component na nagpapakit ng jsx elements 
- 2. siguraduhing nag aaccept at gumagamit ng children props
- 3. allow yung extra classNames na maidagdag at mamerge.
- 4. kumuha ng extra props at ipass sa root element

Magbiga ng consistency sa app mo. Wag kang pabago bago ng itsura ng components.

~ Consitent button example
- Gumawa ng button component
- wag gumawa ng button element
- yung mga buttons ay masstyle based sa purpose ng button
- walang custom css, presets lang.

?Ano ba yung Wrapper 
*component na gumagawa ng plain html element

?Ano naman yung Underlying element
*yung actual html element na nirereturn

?Trick sa props, imbes na ilagay na rounded={true} pwedeng rounded nalang

!Anong magiging issue ng ginawa nating button component?
*issue sa event handler, since yung props na nilagay natin sa wrapper ay hindi nagagamit ng underlying button component
*isa pang issue ay paano ka maglalagay ng multiple na event handler

-1. Gumamit ng rest operator para masolve tong issue, yung children at primary props ay individual, the rest ng props ay masstore bilang isa.

>const Button = ({
>    children,
>    primary,
>    ...rest,
>})  

- 2. sa Button component, meron akong onClick event handler, so mapapass sya sa rest operator. na magagamit ko sa underlying button.
> <button {...rest} className={styling}>
>     {children}
> </button>

!Isa pang issue ay kapag nag add ka ng className as props
- gagana yung code pero yung className sa button at props ay maooverride. ang fix dito ay gamitin yung rest operator at ipass sa className function.
>sa className function -  rest.className, 'flex items-center gap-2'

~ Prop types - Library para icheck yung type ng value na provided sa props
- if naglagay ka ng maling data type sa value ng props, magsesend ng warning.

~ example ng paggamit ng prop types - ichecheck yung mga props ng Card component 

- check nalang yung prop types docs para sa installation

> Card.propTypes = {
>     title: PropTypes.string.isRequired,
>     content: PropTypes.string
>     showImage: PropTypes.bool,
>     primary: PropTypes.exact({
>     });
> }

- example kung gusto na isang variation lang ng button
> Button.propTypes = {
>     checkButtonVariation: ({
>         primary,
>         secondary,
>         success,
>     }) => {
>         const count = Number(!!primary + !!secondary + !!success + !!warning + !!danger);
>         if (count > 1) return new Error("Duplicate Variations");
>     },
> };



~ ClassNames Library - library sa paggawa ng className based sa different values.
- check nalang yung classNames docs para sa installation

- gagamit ng classNames function then yung arguments ay ijojoin at lalagyan ng space.

> classNames('bg-blue-500', 'px-3', 'py-1.5') Result ay 'bg-blue-500 px-3 py-1.5'
> classNames(bgColor, 'px-3', 'py-1.5') if undefined si bgColor ang result ay 'px-3 py-1.5'
> classNames(rest.className, 'base-styling like p-4 m-4 border', {
    - If truthy then malalagay sya sa string else iignore lang
>    'bg-blue-500' : primary,
>    'bg-gray-500' : secondary,
>});


! NAVIGATION SECTION

?Paano ba yung usual navigation sa browser gamit html?

* Kapag nagtype ka ng url sa search bar, gagawa yung browser ng get request sa url na inenter mo, then yung server meron router na nagchecheck sa method at url ng paparating na request at idedetermine kung anong content yung isesend pabalik sa client.

?Anong mangyayari kapag nagload ng pabibagong html file yung browser?
*Mabubura yung existing javascript code, ex. nagdeclare ka ng variable sa index.html, kapag naredirect ka sa about.html, mawawala yung javascript code. 

?Difference ng plain html navigation at react navigation?
- Isang request lang makukuha agad yung response.
- Pag sa react, need munang irequest yung index.html, then bundle.js then yung actual content. 

~ Paano nagana yung navigation sa react?

!Nagana lang if yung state ay hindi defined sa component, kase kapag naremove ang isang component, kasama pati yung state. Bali ilagay sa context o kaya sa Parent component.

? Nagtype yung user ng address
- return index.html
- Kapag nagload yung app, icheck yung address bar at gamitin para magdecice kung content yung ipapakita. 

* Pagvisit ng user sa app, regardless kung ano mang url, ang ibabalik ay index.html, pag nabasa yung index.html, magrerequest uli para sa bundle.js, Kapag naparse na then matgsstart na yung react application. si create-react-app yung maghahandle nito.

-Anong nangyayari during initial loading? habang starting up palang, titignan yung route sa address bar, then mag-aapply ng routing rules. ex. if /post then lagay yung Postlist component if iba then idisplay yung appropriate component 

- Pano titignan at anong part yung importante sa address bar? - address bar yung magdidictate ng content na ipapakita, Ngayon localhost:3000 tayo, pero hindi sure kung anong host at port yung gagamitin once ideploy yung app. Kaya yung importanteng part ay yung route after ng host at port. 

> myapp.com/dropdown -> /dropdown
> localhost:3000/images/preview -> /images/preview
> localhost:3000 -> /, used for landing page
> localhost:3000/ -> /

?Paano malalaman yung current address?
> window.location.pathname or window.pathname

?Paano iupdate yung address?
>window.location = 'myapp.com/dropdown' | Nagrerefresh
>window.history.pushState({}, '', '/components/dropdown'); | Hindi nagrerefresh 


? Nasa loob na ng App at Nagclick yung user sa link

- Ihinto yung default page-switching behaviour ng browser
- Alamin kung saan gustong pumunta ng user
- Iupdate yung content sa screen at adress, para matrick yung user na nagswap ng page. 

*if nagclick si user sa link, yung react app natin yung maghahandle ng navigation, lalagyan ng clickEvent yung anchors, para madetect if nagclick si user sa link, pipigilan natin yung browser na gawin yung usual navigation process, para maiwasang magload ng panibagong HTML document.

*baguhin yung adress bar based sa url na gustong puntahan ng user, para may illusion na nagnanavigate si user, then iaapply ule yung routing rules

?Paano madetect yung click ng user sa link?
- gagawa ng component na link na gagamitin para sa mga links sa loob ng App, pero kung kagaya ng google o labas na ng app. Then normal link tag lang.

> const Link = ({ to }) => {
>     const handleClick = (evt) => {
>         evt.preventDefault();
>         console.log("you are navigating to: ", to);
>     };
>     return ( <a onClick={handleClick} href={to}>Link</a> );
> };

?Paano matatrack yung forward at back button?
gagamit ka ng pushState, habang nasa address ka naadd gamit ang pushState, then walang refresh. Bali hindi na kailangan pang pigilan  yung page-switch.
> history.pushState({}, '', '/local/test/'); | Walang refresh
> history.pushState({}, '', '/'); | magrerefresh if di nakaadd sa state.

>window.addEventListener('popstate', () => console.log('Im at', window.location.pathname))

?Bakit ba advantageous yung gantong setup?
*React yung naghahandle ng navigation, maiiwasan yung usual browser navigation, Bali hindi mawawala yung javascript. if nagnavigate si user sa post, madidisplay yung postList component, pati posts mula sa API, then nagnavigate ule papuntang images route, then ididisplay yung imageList component at yung mga images mula sa API. If magback man si user sa postList, magpepersist padin yung response ng API sa posts. Bali mababawasan yung bilang at pagulit ng request.

?Ano yung user-triggered navigation?
-yung user yung nagdidictate kung saan pupunta, like nagclick sa links or back o forward button.
?Ano yung programmatic navigation? 
- inanavigate yung user mula sa code, example sa mga banking, if inactive ka, pwedeng alisin yung session at iredirect ka sa home page.

?Paano ihandle yung ctrl o command key sa navigation? 
if (evt.ctrlKey || evt.metaKey) return;

~ Creating portals in react

?Paano yung tamang pagdisplay ng modal?

- 1. yung background ng modal dapat macover yung buong screen
- 2. need macover ng modal yung mga existing component

- Hindi sure na walang maglalagay ng position na relative so yung position na absolute ay magbebreak,So gagamit ka ng portal, ang ginagawa ng portal ay nilalabas yung content sa root element. Magwowork sya kase sure ka na walang relative na element so sa body yung magiging relative.

?Paano nagana ang portal?
Bali yung html ay nilalagay sa labas, example 
<div>
-    <h1>Imbes na dito ilagay yung content, sa ilabas</h1>
<div>

<div>
    ~ dito ilagay yung content gamit portal
</div>

?Paano gumamit ng ReactDOM portal?
> const Modal = () => {
>     return ReactDOM.createPortal(
>         <div>
>             <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
>             <div className="absolute inset-40 p-10 bg-white"></div>
>         </div>,
>         document.querySelector(".testPortal")  yung reference sa div na ginawa mo sa index.html
>     );
> };

~ Reusable table
Variable length rows and columns
Hindi kailangang magmatch ng column yung number ng properties
yung ibang column ay pwedeng isort.
yung sortable na columns ay pwedeng magsort ng ibat-ibang values, like sort by numbers, letters
pwedeng icalculate yung cell gamit ang ibat-ibang property, example discount rate then yung actual price
pwedeng magdisplay ng arbitrary data ang cell, like text, numbers, images,

- Para gumawa ng reusable component, dapat hindi nag aassume yung component natin sa data na gagamitin, like 
- kung sa array ng objects, dapat hindi mo iaassume kung ilan yung laman, properties o yung name  


! REDUX SECTION 

~~~~~~~~~~~~~~~~~~~~~~~ HOSTING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- stop mo muna yung server, then type npm run build sa console
- sign up sa netlify, gumawa ng project, setup manually, upload build files


~~~~~~~~~~~~~~~~~~~~~~ React Projects notes ~~~~~~~~~~~~~~~~~~~~~

~ Pagsetup ng smooth scroll
- 1. gumawa ka ng bookmark papunta sa element anchor ex. <a href='#services'> <div id="services">
- 2. maglagay ng smooth scroll sa html. html { scroll-behavior: smooth}

~ Optional chaining - para macheck yung property ng object
- bali checheck kung yung images ay true, then get yung first element, the check ule if true, then check ule, if false then yung default imag=e or avatar
> const img = images?.[0]?.small?.url || avatar


~~~~~~~~~~~~~~~~~~~~ PRACTICAL KNOWLEDGE ~~~~~~~~~~~~~~~~~~~~~~~~~~

~ setting up material ui
- npm install @mui/material @emotion/react @emotion/styled
- npm install @fontsource/roboto
- import fonts in main.jsx

> import '@fontsource/roboto/300.css';
> import '@fontsource/roboto/400.css';
> import '@fontsource/roboto/500.css';
> import '@fontsource/roboto/700.css';

- if gusto mong iinstall yung material icons
npm install @mui/icons-material


*/

/* 


! TAILWIND SECTION

- Q: What is tailwind? 

It's a utility-first CSS framework packed with utility classes (flex, text-center) that can be composed to build any design, directly in your markup.

- Q: What do you mean by utility-first? 

Writing tiny classes with one single purpose, and then combining them to build entire layouts.

- Q: Do you need to write css or classes when using tailwind?

In tailwind, classes are  already written for us, so we don't need to write new CSS, we will leverage tailwind's classes.

- Q: What are the good and bad about tailwind?

- Good

There's no need to worry about naming classes. So you can focus on writing your styles instead of coming up of class names.

You don't need to jump between files, as you write markup and styles. It all happens in the same file, which is convenient.

You immediately understand styling in any project that uses tailwind, making it easy to collaborate, and laso makes it easy to come back to your own projects.

Tailwind can be used as a design system (colors, font sizes, spacing), because many design decisions have been taken for the developer, making UIs look better and more consistent.

Saves a lot of time, because your write less CSS, and implementing responsive design is easy and fast

Docs and VS code integration are great

className soup, it forces you to create smaller and reusable component.

- Bad

Markup looks very unreadable, because sometimes to style one element, you need to add many clases, which makes the markup look cluttered. (Not really a huge proble, because it's easy to get used to)

You have to learn a lot of class names (Again, not a huge problem because you will get used to it)

You need to install and setup tailwind on each new project

It feels like you're giving up vanilla CSS, but for other CSS frameworks. It still feels you're writing your own CSS.

className soup - sobrang dami ng className sa bawat element

- Q: is Tailwind only applicable in JSX? 

No it will work for both JSX files and even index.html, so you can apply tailwind classes in the body if you want its child to inherit it, in index.html you're going to use regular class, and not className.

- You don't need to know every classes, you just need to know to find it in the documentation.


- If you don't put prefix like sm:my-10, it is for mobile

- Jonas tailwind explanation are good, so if you are confused about a topic, check the course

*/

/*
!REACT STYLEDS COMPONENTS

- Q: What are styled components?

Styles components allows us to write CSS inside our Javascripts component's file.

The way it works is it takes a regular HTML element, and then using the styled function, it creates a brand new React component with CSS styles applied to it. Then we can reuse that new component instead of using regular HTML element.

- Q: How to install styled components library?

npm i styled-components

install the vscode-styled-components extension in vscode.

- Q: How to use styled components?
import styled from "styled-components";

- returns a new component, so we can now store it, it starts with uppercase since it's a React component
const H1 = styled.h1`
    font-size: 30px;
    font-weight: 100;
`;

- Usually the variable that stores the component has the same name of the styled component, you can separate this into it's own file, just make sure to import styled
const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: purple;
    color: white;

    - Accessing hover state
    &:hover {
        background-color: var(--color-brand-700);
    }
`;

- What if you want to style the component itself? like the App, you need to create a styled component for the div, for the naming, if the component is called App, then the convention is to name it StyledApp
const StyledApp = styled.div`
    background-color: green;
    padding: 20px;
`;


function App() {
    return (
        <StyledApp>
            <H1>The Wild Oasis</H1>
            - Just like regular components or elements, you can attach props or handlers in a styled components
            <Button onClick={() => alert("Hello world")}>Hello</Button>
        </StyledApp>
    );
}

export default App;

!Global Styles in styled components

if you already have an index.css, we're not going to directly use it. Instead when using styled-components, we basically create a brand new styled-component which then becomes our global styled-component.

- Create a GlobalStyles.js file in styles folder
import { createGlobalStyle } from "styled-components";

- Create the global styles and store it
const GlobalStyles = createGlobalStyle`
    - add your global styling here like color palettes, fonts, resets
`;

-export the global styles
export default GlobalStyles;

- Use the global styles 
function App() {
    return (
        <>
            - GlobalStyles needs to be added to the component tree, but it can't accept any children, so we're making it sibling 
            <GlobalStyles />
            <StyledApp>
                <H1>The Wild Oasis</H1>
                <Button onClick={() => alert("Hello world")}>Hello</Button>
            </StyledApp>
        </>
    );
}

!Accepting Props and the CSS Function in Styled components

import styled, { css } from "styled-components";

- Remember that this is template literal, so we can put expression here, for example, the only issue here is doing it this way we won't have syntax highlighting, so we need to use the CSS function. If you want to use logic inside, make sure to use css function. because in some situation it may not work
const center = css`
    text-align: center;
`;

const Heading = styled.h1`
    - Accepting the props
    ${(props) =>
        props.as === "h1" &&
        css`
            font-size: 3rem;
            font-weight: 600;
        `}

    ${(props) =>
        props.as === "h2" &&
        css`
            font-size: 2rem;
            font-weight: 600;
        `}

    ${(props) =>
        props.as === "h3" &&
        css`
            font-size: 2rem;
            font-weight: 500;
        `}

    line-height: 1.4;
    color: var(--color-brand-50);
`;

export default Heading;

- When you use type, and put h2, it will still be h1 underneath, this can create accessibility and SEO issues. So you should use "as" prop instead. Whatever value you passed in as prop, will be the element that is rendered in the HTML
<Heading as="h1">The Wild Oasis</Heading>


- setting the default props for a component, we don't use it a lot when we're defining our own component because we can set the default value in the params ex. ({text = "pogi"})
Row.defaultProps = {
    type: "vertical",
};

- Everything together

import styled, { css } from "styled-components";

const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);

        &:hover {
            background-color: var(--color-brand-700);
        }
    `,
    secondary: css`
        color: var(--color-grey-600);
        background: var(--color-grey-0);
        border: 1px solid var(--color-grey-200);

        &:hover {
            background-color: var(--color-grey-50);
        }
    `,
    danger: css`
        color: var(--color-red-100);
        background-color: var(--color-red-700);

        &:hover {
            background-color: var(--color-red-800);
        }
    `,
};

const Button = styled.button`
    ${(props) => sizes[props.size]}
    ${(props) => variations[props.variation]}

    
    border: none;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
`;

Button.defaultProps = {
    variation: "primary",
    size: "medium",
};

export default Button;

- What if you want to style something that comes from a 3rd party library? Instead of specifying regular HTML element, you can pass the component itself you want to style, so instead of `const Link = styled.a`, you will put const StyledNavLink = styled(NavLink)``;

*/

/*
!SUPABASE SECTION

- Q: What is supabase?

Supabase is a service that allows developers to easily create a back-end with a postgres database.

it automatically creates a database and API so we can easily request and receive data from the server.

Instead of building the backend and setting up database ourselves, supabase takes care of it. So, there's no backend development needed.

Perfect for frontend developers who jus wants to get up and running quickly.

Supabase is not just an API, it also comes with user authentication and file storage (just like firebase).

- Q: How should you model the database?

First, you need to think about the application state
In bigger application, modeling state is a bit different because we think more about state categories or state slices on much higher level. So we're not planning state at a component level, but on application feature level. 

By using the feature categories you can identify the state domains or slices of the database. 

There will be one table for each state slice (data table) in database.

- Q: How states are going to be managed when using supabase?

All state are global remote state, stored within supabase. It will be managed in the frontend using React Query.


!Connecting supabase to React

Go to API docs in supabase, In introduction it shows how to instasll supabase in client


npm install supabase --save-dev


- For more info, check mo nalang yung supabase section, pati narin yung project para sa code.

*/

/*

! REACT QUERY

- Q: What is React query?

It is a powerful library for managing remote state (state stored in the server). Developers even describe react query as the data fetching library that react misses. 

- It's easy to use and has many useful features that allows us to write less code to fetch the data and manage that data, while making the UX a lot better.

- Q: What are the most useful features of react query?

- Remote state (data) is stored in a a cache, which means that the fetched data is stored for it to be reused in different points of the application. For example, if we fetched data about cabins in Component A, react query fetches the data from the APi and stores it in the cache, so that component A can use it, and if at some point component B also wants to fetch the cabin data, then no additional API request will be necessary. React query simply provides the data to component B from the cache.

This provides two advantage:
1. It wastes less data to be downloaded
2. Once the data is in the cache, all other component can receive it instantly, so without showing the user another loading spinner, creating a super responsive and fast experience for the users.


- React query automatically provides loading and error states, so we can focus on what matters. 
- Automatically re-fetches data in certain situations to keep the state in synced with the application.
- Pre-fetch data, which means fetching the data we know that is necessary later, but before it's actually displayed on the screen, an example of this is pagination, we can fetch data not only for the current page  but also for the next page, so when the user decides to go to the next page, the data is already there in the cache.
- Easy to mutate remote state using tools built into React Query.
- Support when the user becomes offline, since the data is already cached, as the user moves around in the app while being offline, components A and B can still be displayed using the cached cabin data.

- Q: Why do we even need React Query?

Because remote state is fundamentally different from regular UI state.  Remote states are asynchronous and usually shared by many users of the app, which makes application running in different browsers can easily get out of sync with the remote data stored on a server. 


!SETUP REACT QUERY

- Q: How to install React query?

npm i @tanstack/react-query@4, change the version to latest.

- Q: How to setup Reacty query?

Integration of react query in our application is similar to how Context API or redux is setup, first create a place where that data lives, then second provide that to the application, 

Go to App.jsx, or you can also do it in main.jsx
- create the client

const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {},
        queries: {
            - amount of time that the data in the cache will stay fresh, If the data becomes stale after 60 seconds, the next time a component attempts to access it, the query client will mark it as stale, triggering a refetch to ensure the data is up-to-date. This helps maintain data accuracy while balancing performance. An example of an action that trigger re-fetching is moving to other browser tab, if the data becomes stale, then you move back to the component, it will automatically re-fetch the data. But while the data is still fresh, it wouldn't refetch automatically. 
            staleTime: 0,
        },
    },
});
 
- Provide the client

<QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <BrowserRouter>
        ......
    </BrowserRouter>
</QueryClientProvider>

- Q: How to install react query devtools?

npm i @tanstack/react-query-devtools@4, again specify the latest version
Add the  <ReactQueryDevtools /> as first child of QueryClientProvider

<QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
<QueryClientProvider/>

!FETCHING

- Q: How to actually use react query?

This way even if we go to other page, the data is still there, we don't need to refetch it. 

    - There are many more states that useQuery returns, you can check it out by storing it, instead of destructuring it, you can also check it in the react query devtools.
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({
        - query key to uniquely identify the data we're querying, it can be an complex array or just an array with strings. the string provided is what identifies each data, so if later we would use useQuery on other page, with the exact key, then the data would be read from the cache.
        queryKey: ["cabins"],
        - a function responsible for the actual querying, so for fetching the data from the API. It's important to know that the function we specify here needs to return a promise. Here we're using the getCabins from the API, because it's an async function, it would always return a promise
        queryFn: getCabins,
    });



!MUTATIONS 

Delete a data and automatically re-render the UI.


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";

function CabinRow({ cabin }) {
    const {
        id: cabinId,
        name,
        maxCapacity,
        regularPrice,
        discount,
        description,
        image,
    } = cabin;

    const queryClient = useQueryClient();

    - returns a mutate function that we can connect to the element
    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: deleteCabin,
        - Specify what you want to do as soon as the mutation was successful
        onSuccess: () => {
            alert("Cabin successfully deleted!");
            - We want to re-fetch the data after deleting a cabin, so we can do that by invalidating the cache. We need to access our queryClient by using a hook called useQueryClient
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        - Will get access to the error you throw in the api
        onError: (error) => console.error(error.message),
    });

    return (
        <TableRow role="row">
            <button disabled={isDeleting} onClick={() => mutate(cabinId)}>
                {isDeleting ? "Deleting..." : "Delete"}
            </button>
        </TableRow>
    );
}

!ADDING TOAST NOTIFICATIONS

- Q: How to install toast library?

You have two options, you have react toastify and react hot toast.

npm i react-hot-toast

- configure the toast, add the <Toaster/> in the top most or bottom of the app.jsx

<Toaster
    position="top-center"
    gutter={12}
    containerStyle={{ margin: "8px" }}
    toastOptions={{
        success: {
            duration: 3000,
        },
        error: {
            duration: 5000,
        },
        style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
        },
    }}
/>

- using the toast 

const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    - Shows a toast when a cabin is successfully deleted.
    onSuccess: () => {
        toast.success("Cabin successfully deleted!");
        queryClient.invalidateQueries({
            queryKey: ["cabins"],
        });
    },
    - Will show toast error
    onError: (error) => toast.error(error.message),
});

*/

/* 
!REACT HOOK FORMS 
Used to simplify working with forms, it only handles form submission, and errors, but doesn't give prebuilt components.
https://react-hook-form.com/docs/useform/handlesubmit

- Install react hook form
npm install react-hook-form

function CreateCabinForm() {
    const { register, handleSubmit, reset } = useForm();

    const queryClient = useQueryClient();

    const { isLoading: isAdding, mutate } = useMutation({
        mutationFn: addCabin,
        onSuccess: () => {
            toast.success("Cabin successfully added!");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            - call the reset function to reset the form after success, the reason we're doing it in the onSuccess instead of the onSubmit handler is because it would only reset after fact that it is successful, onSubmit on the other hand, immediately resets the form, successful or not.
            reset();
        },
        onError: (error) => toast.error(error.message),
    });

    function onSubmit(formValues) {
        mutate(formValues);
        reset();
    }

    return (
        - create onSubmit handler and pass it in handleSubmit function of reach hook form, when the form is submitted, it would call the submit handler that we passed.
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <Label htmlFor="name">Cabin name</Label>
                <Input type="text" id="name" {...register("name")} />
            </FormRow>

            <FormRow>
                <Label htmlFor="maxCapacity">Maximum capacity</Label>
                <Input
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity")}
                />
            </FormRow>

            <FormRow>
                <Label htmlFor="regularPrice">Regular price</Label>
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice")}
                />
            </FormRow>

            <FormRow>
                - type is an HTML attribute! 
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isAdding}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

!HANDLING FORM ERRORS

function CreateCabinForm() {
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        - getting the errors from the validation
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();
    const { isLoading: isAdding, mutate } = useMutation({
        mutationFn: addCabin,
        onSuccess: () => {
            toast.success("Cabin successfully added!");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },
        onError: (error) => toast.error(error.message),
    });

    function onSubmit(formValues) {
        mutate(formValues);
        reset();
    }

    function onError(errors) {
        - Another way of accessing the errors
        console.log(errors);
    }

    return (
        - onError will be called when there is error when submitting the form
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            - Errors are accessed in formState in the useForm hook, you can also access using the onError function passed in the onSubmit event handler.
            <FormRow label="Cabin Name" error={errors?.name?.message}>
                <Input
                    disabled={isAdding}
                    type="text"
                    id="name"
                    {...register("name", {
                        - You can add a validations object
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input
                    disabled={isAdding}
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount", {
                        required: "This field is required",
                        - here we're writing our custom validation, because we want the discount to not be higher than the regular price, the callback function gets the current value in the input field as an argument. What your return in the validate function becomes the error message
                        - We need to access the value of regularPrice, we can do that by using the getValues in the useForm
                        validate: (value) =>
                            +value < +getValues().regularPrice ||
                            "Discount should be less than regular price",
                    })}
                />
            </FormRow>

            <FormRow>
                <Button disabled={isAdding}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

*/

/*
!UPLOADING IMAGES TO SUPABASE
function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
}

<FormRow label="Cabin Photo">
    <FileInput
        disabled={isAdding}
        id="image"
        accept="image/*"
        {...register("image")}
    />
</FormRow>

export async function addCabin(newCabin) {
    - When supabase reads the image name and there are slash, it would create a folder, so we need to remove the slashes
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    - image path
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    console.log(imagePath);

    - 1. create the cabin
    const { data, error } = await supabase
        .from("cabins")
        .insert([{ ...newCabin, image: imagePath }])
        .select();
    if (error) {
        console.error(error);
        throw new Error("Cabin could not be added!");
    }
    - 2. Upload the image if the cabin is successfully created, make sure you add policy for storage
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);
    - 3. If there was an error in storage, then delete the cabin that was created
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Cabin image couldn't be uploaded, and the cabin was not created"
        );
    }
    return data;
}

*/

/*
!EDITING CABINS

- Since both adding and editing is similar, we're just going to reuse it
export async function addEditCabin(newCabin, id) {
    - check if the newCabin information has the imagePath of supabase or a new image, if the image already exist, then just use that url, else create a new image path
    const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    - image path
    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    - reusing
    let query = supabase.from("cabins");

    - creating
    if (!id) {
        query = query.insert([{ ...newCabin, image: imagePath }]);
    }

    - editing
    if (id) {
        query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
    }

    const { data, error } = await query.select().single();

    - if imagePath exist, just return the data, else upload the new image
    if (hasImagePath) return data;

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be added!");
    }

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error(
            "Cabin image couldn't be uploaded, and the cabin was not created"
        );
    }
    return data;
}


function CreateCabinForm({ cabinToEdit = {} }) {
    const { id: editId, ...editValues } = cabinToEdit;

    - check if you are editing by converting the editId to boolean
    const isEditSession = Boolean(editId);

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        - getting the errors from the validation
        formState: { errors },
    } = useForm({
        - setting default value of the form based on the value of isEditSession, if its true, then use the values provided in the cabinToEdit, if it's false just add empty object
        defaultValues: isEditSession ? editValues : {},
    });

    - Extract these logics into custom hooks
    const queryClient = useQueryClient();
    
    const { isLoading: isAdding, mutate: addCabin } = useMutation({
        mutationFn: addEditCabin,
        onSuccess: () => {
            toast.success("Cabin successfully added!");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
                });
                reset();
                },
                onError: (error) => toast.error(error.message),
                });
                
    - Extract these logics into custom hooks
    const { isLoading: isEditing, mutate: editCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => addEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin successfully edited!");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },
        onError: (error) => toast.error(error.message),
    });

    function onSubmit(data) {
        const image =
            typeof data.image === "string" ? data.image : data.image[0];

        if (isEditSession) {
            editCabin({
                newCabinData: {
                    ...data,
                    image,
                },
                id: editId,
            });
        } else {
            addCabin({ ...data, image: image });
        }
    }

    function onError(errors) {
        // - Another way of accessing the errors
        // console.log(errors);
    }

    // - create a variable combing both editing and adding
    const isWorking = isAdding || isEditing;

    return (
        // - onError will be called when there is error when submitting the form
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label="Cabin Name" error={errors?.name?.message}>
                <Input
                    disabled={isWorking}
                    type="text"
                    id="name"
                    {...register("name", {
                        // - You can add a validations object
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow
                label="Maximum Capacity"
                error={errors?.maxCapacity?.message}>
                <Input
                    disabled={isWorking}
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "Minimum capacity is 1",
                        },
                    })}
                />
            </FormRow>

            <FormRow
                label="Regular Price"
                error={errors?.regularPrice?.message}>
                <Input
                    disabled={isWorking}
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice", {
                        required: "This field is required",
                    })}
                />
            </FormRow>

            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input
                    disabled={isWorking}
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) =>
                            +value < +getValues().regularPrice ||
                            "Discount should be less than regular price",
                    })}
                />
            </FormRow>

            <FormRow
                label="Description for website"
                error={errors?.description?.message}>
                <Textarea
                    disabled={isWorking}
                    type="number"
                    id="description"
                    defaultValue=""
                    {...register("description", {
                        required: "This field is required",
                    })}
                />
            </FormRow>

            - Even with default values, it will still be empty, so it's not possible, so when editing the data, we usually want the image to stay the same, so it shouldn't be required 
            <FormRow label="Cabin Photo">
                <FileInput
                    disabled={isWorking}
                    id="image"
                    accept="image/*"
                    {...register("image", {
                        required: isEditSession
                            ? false
                            : "This field is required",
                    })}
                />
            </FormRow>

            <FormRow>
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isWorking}>
                    {isEditSession ? "Edit Cabin" : "Add cabin"}
                </Button>
            </FormRow>
        </Form>
    );
}
*/

/*
!REACT REUSABILITY

Here's an overview of how we can reuse different types of code in React.

In React we want to reuse two types of code, we either want to reuse a piece of UI or some stateful logic (logic that contains at least one react hook). 

There's also a third category which is for reusing some non-stateful logic, which can be done by using javascript functions.

As we know, to reuse a piece of UI, we use components and props and the idea is we use props to serve as an API to enable custom behavior. It can be stateless, stateful, or structural components. Taking it further, we can even pass in content or other component by using the children prop. 

For reusing stateful logic, we can use custom hooks (allows us to write our own React hooks which are composed of other hooks). 

- Q: What if we need to reuse a visual and stateful logic at the same time?

That's where advanced patterns comes into play. These are patterns, which means they are not React features, they're just clever ways of using React that emerged over time to solve certain problems. 

- render props pattern,  the user of a component has complete control over what the component renders, by passing in a function as prop. So this function tells the component what and how to render. With this pattern, we can reuse logic that has some JSX, while giving the componet the ability to receive even more JSX. This was more common before hooks, but it is still useful.

- Compound component pattern, compound in this context means that we will have multiple component that play together, to create one big component which is the compound component. This pattern allows us build extremly self-contained components that needs/wants to manage their own state. Compound components are like fancy super-components  

!USING THE RENDER PROPS PATTERN

The render prop pattern is all about passing a prop called render, which is a function that a component uses to know what it should render and how to do it. 

- Whenever you can't directly pass in JSX with the children prop because you need to give the component a description on how to render something, then you can use render props pattern.

An example of render props pattern

- When using the render props pattern, were basically inverting the flow of how it should render the component. In this example, the list no longer know what its rendering, It has no idea what happens in the map function, for each display item, all it knows is that it receives a function and it will invoke it for each items in the array

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase()
  };
});

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  };
});

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)} >

      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

 - Take in the render props,
function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

    return (
    <div className="list-container">
        <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
        {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      - Use the render prop 
      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          - This render function is instruction on how to render something
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
          title="Products"
          items={products}
        />

        <List
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
          title="companies"
          items={companies}
        />
      </div>
    </div>
  );
}

!HIGHER ORDER COMPONENT PATTERN

Almost no one write higher order components by hand, but some libraries exposes higher order components so it's useful to know what they are, how it works, and why it is used.

- A higher order component is simply a component that takes in another component and then returns a new component that is better. 

- Make a file for higher order component
import { useState } from "react";

export default function withToggles(WrappedComponent) {
  - returns a component, WrappedComponent refers to the component we can pass in it is a convention that higher order components starts with "with"
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${props.items.length}` : "Show less"}
        </button>
      </div>
    );
  };
}


- Use it
const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

const ProductListWithToggles = withToggles(ProductList);

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div>
      <div className="col-2">
        <ProductListWithToggles title="Product HOC" items={products} />
      </div>
    </div>
  );
}

!COMPOUND COMPONENT PATTERN

The idea of compound component pattern is that we can create a set of related components that together achieves a commong and useful task, This pattern can be used in all kind of components such as modal windows, pagination, tables etc.

- How it is implemented is first you create a parent component then a few different child components that really belongs to the parent, so it only makes sense when used together. an example would be HTML select and option.

This pattern allows us to implement highly flexible and highly reusable components with very expressive API. 



- Create a file for the compound component
import { useState } from "react";
import { createContext, useContext } from "react";

- 1. Create a context
const CounterContext = createContext();

- 2. Create the parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }

  function decrease() {
    setCount((count) => count - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

- 3. Create the child components to help implement the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

- 4. Add child components a properties to parent component, this is possible because Counter is simply a function, In JS we can add properties to almost everything, including function

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;


- Using the compound component

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      The good thing about this is it's highly flexible, you can add new html
      omit some parts, duplicate it. etc
      <Counter>
        <Counter.Label>Test lang tangina</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
    </div>
  );
}

*/

/*
!BUILDING A REUSABLE MODAL WINDOW + REACT PORTAL
- Create the modal component

const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: all 0.5s;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-500);
    }
`;

- React portal is a feature that allows us to render an element outside of the parent component's DOM structure. While still keeping the element in the original position of the component tree. Basically we can render a component in any place inside the DOM tree, and still leave the component at the same place in the React component tree

- React portal is usually used for things that we ewant to stay on top of other elements, like modals, tooltips, menus, etc.

function Modal({ children, onClose }) {
    - CreatePortal receives two arguments, first the JSX you want to render, second the DOM node, where you want the JSX to be rendered
    return createPortal(
        <Overlay>
            <StyledModal>
                <Button onClick={onClose}>
                    <HiXMark />
                </Button>
                <div>{children}</div>
            </StyledModal>
        </Overlay>,
        - You can use other ways to select the second argument, like document.querySelector()
        document.body
    );
}

- Use the Modal

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
                Add new Cabin
            </Button>

            {isOpenModal && (
                <Modal onClose={() => setIsOpenModal(false)}>
                    <CreateCabinForm
                        onCloseModal={() => setIsOpenModal(false)}
                    />
                </Modal>
            )}
        </div>
    );
}

- For detailed version, check the Form.jsx and CreateCabinForm.jsx


- Q: Why is it called a portal?

It's called a portal because it allows us to create an invisible tunnel from the place where the component is in the component tree to another place in the DOM tree.

- Q: Why do we need to use react portal if it already works with regular CSS positioning?

Portal becomes necessary in order to avoid conflicts, with CSS property overflwo set to hidden, most of the time when building a component like modal, it works just fine, but other developer might  reuses it somewhere else, and in that place the modal might get cut off by overflow hidden set on the parent. So it's all about reusability and making sure that the component is never cut off.


!CONVERTING THE MODAL COMPONENT INTO A COMPOUND COMPONENT AND DETECTING CLICK OUTSIDE
const ModalContext = createContext();

function Modal({ children }) {
    - state that tracks whether modal should be open or not
    const [openName, setIsOpenName] = useState("");

    - closing the modal is just setting the openName to empty string
    const close = () => {
        console.log("Closing modal");
        setIsOpenName("");
    };

    const open = (name) => {
        console.log(`Opening modal: ${name}`);
        setIsOpenName(name);
    };

    return (
        <ModalContext.Provider
            value={{
                openName,
                close,
                open,
            }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName }) {
    - get the open function in the context
    const { open } = useContext(ModalContext);

    - how do we open the modal window? we can't use it at the button using the compound component because it has no access to internal states, so what we need is away of adding the open event handler to the button, we can do that by using cloneElement, it lets you to create a new React element by using another element as a starting point
    return cloneElement(children, {
        - contains the props
        onClick: (e) => {
            open(opensWindowName);
        },
    });
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);

    const { ref } = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <Overlay>
            <StyledModal ref={ref}>
                <Button onClick={close}>
                    <HiXMark />
                </Button>

                <div>
                    {cloneElement(children, {
                        onCloseModal: close,
                    })}
                </div>
            </StyledModal>
        </Overlay>,
        - You can use other ways to select the second argument, like document.querySelector()
        document.body
    );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;

- creating the useOutsideClick custom hook

function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(() => {
        function handleClick(evt) {
            if (ref.current && !ref.current.contains(evt.target)) {
                handler();
            }
        }

        - Events bubble up, so we need to prevent the event in executing in capturing phase. if you didn't add the true, the modal window would immediately close
        document.addEventListener("click", handleClick, listenCapturing);
        return () =>
            document.removeEventListener("click", handleClick, listenCapturing);
    }, [handler, listenCapturing]);

    return { ref };
}

- Using the modal
function AddCabin() {
    return (
        <Modal>
            - Button for opening the modal
            <Modal.Open opens="cabin-form">
                <Button>Add New Cabin</Button>
            </Modal.Open>

            - The actual content*
            <Modal.Window name="cabin-form">
                <CreateCabinForm />
            </Modal.Window>

            - Allowing multiple modal windows, but only one should be open at the same time, so for each buttons, it needs to know which window it should actually open 
            <Modal.Open opens="table">
                <Button>Show Table</Button>
            </Modal.Open>

            <Modal.Window name="table">
                <CabinTable />
            </Modal.Window>
        </Modal>
    );
}

!CONFIRMING DELETION

- just check the code in the wild-oasis project

!ADDITONAL FEATURES LIKE DARK MODE, AUTHENTICATION, DASHBOARD, check the additional features section in react

*/

/*
!OVERVIEW OF SERVER-SIDE-RENDERING (SSR)

We learned that in the old days of PHP and wordpress, websites were always rendered on the server, then sent to the client. But as web applications needed to become more and more dynamic and interactive, we moved into a more modern way, where rendering of the application shifted from the server to the client.

This modern era birthed frontend frameworks like React, Vuee, Angular, and Svelte.

Now, we're seeing another shift back to server-side rendering. This trend is fueled by full-stack frontend frameworks like Next, Remix, Nuxt, SvelteKit, or SolidStart.

These full-stack frameworks are very different from an old PHP or wordpress website, because they combine different aspects of both server-side and client-side rendering. These frameworks takes everything we've learned over the years from server-side and client-side rendering and are blending the best of both worlds to give us, the developers amazing tools to build modern apps and websites.

- CSR 

👉 Page that the user requested is rendered on the client using JS, so its generated on the client (user's computer). 

👎 It has slower initial page loads, because the javascrip bundle, required to render the app might be large, and it needs to be downloaded before the app starts running. Another one is most app require some kind of data, but it can only be fetched after the component have already mounted (after they've been rendered on the client). So there's request waterfall happenning which slows down experience and is one of the main critisim of client-side rendering and SPA. 

👍 Highly interactive user experience, because after the initial page is loaded, the entire app has already been downloaded (except for new data), this leads to the single-page application feel. 

👎 SEO can be problematic - The content is not renders until after the Javascript is executed and data is fetched. Therefore, search engines might find blank page, when trying to index the site, which is problematic if SEO is a concern.

Perfect for when we want to build highly-interactive single-page applications. 

👉 Ideal for apps that doesn't need SEO like, apps that are used internally as tools inside companies, apps that are entirely hidden behind a login. 

- SSR

👉 HTML is generated on web server, then the server sends the already generated website to the client whenever it's requested.

👍 Faster initial page loads for two reasons: first, a lot less javascript needs to be downloaded for the app to work because the client doesn't need any Javascript in order to render the HTML. Second, the data necessary for each page, is downloaded on the server, before the HTML is even generated, and this data is then incorporated into the page that gets sent to the browser. 

👎 Less interactive, because nagivatgion from page to page may require the server to render a new page each time, which leas to full-page reloads in the browser. But modern frameworks such as Nextjs are blurring these lines, because they allow us, developers to build server-side rendered page, that can also hydrate on the client in order to become interactive later. 

👍 SEO-friendly, pre-generated content is much easier for search engines like Google to index. 

In projects where SEO is important, server-side rendering should definitely be chosen. 

👉 Content-driven websites or apps where SEO is essential: e-commerce, blogs, news, marketing websites, etc. SEO playes crucial role in getting users onto the site.  


- Q: What are the two types of SSR?

Static, in static rendering or static site generation (SSG), the html is generated at build time. So once the developer is finished developing the site, they export it into static HTML, CSS, and Javascript files, which is deployed onto a web server. But this web server does not regenerate the markup all the time. It will simply send what was generated once by the dev in the beginning.  

Dynamic, in Dynamic rendering, the server generates new HTML each time a new request hits the server, so it will generate new pages for each user, which is greate when the underlying data changes often. 

- Q: How webpage is generated for CSR and SSR?

CSR: In client-side rendering, once the user requests a page, all the server has to offer is essentially just an empty page. That empty page might have some CSS attached to it, and the javascript bundle. The server then sends it to the client, After the javascript bundle is finally downloede and executed, the app notices that it needs to fetch some data. So just render a quick spinner and the user waits for the data to be fetched from the server (might not be the same server as the one where our page is hosted). At some point, the data will arrive and it's at that point that the application will re-render itself with that new data. and it's only at this point in time that we can say that we have our initial page load (Another term for the very important metric of Largest Contentful Paint). 

SSR: Once a request comes in, the server starts by fetching all relavent data for the page, the server then takes the data, generate the page, and sends the whole finished product to the client. So this time, when the page first reaches the client, it alreay has all the content the user is interested in. This is where content paint happens, and it's much earlier than CSR. That's why in SSR, the initial page load is much faster.

The website that is sent to the client in server-side rendering still inclues a javascript bundle, this bundle gets downloaded and executed just like before, and then a process called hydration happens. 

!TAKEWAYS
1. In server-side rendering, it's the server who initiates the data fetching, so before the page or apps is even rendred. 
2. As the name server-side rendering says, the render part moves from client to server. 
3. The largest contentful paint happens much faster than in CSR, which is why SSR is more useful in content-heavy sites.  


- Q: What is Largest contenful paint or content paint?

Content paint is the time it takes for the page to show all relevant content to the user

- Q: What is first paint metric? 

Means that just something has been painted to the screen, no matter what it is. 


!HYDRATION 

- Q: What is hydration? 

Hydration is a process where static HTML becomes interactive by adding Javascript to it.  




!USING YOUTUDE DATA API
- search youtube data api key then click google developers console, or search google cloud services
- create a project
- once a project is created, enable apis and services
- search for the service you want, in our case it's youtube data api v3
- open the result and enable it 
- create credentials, and check public data then click next.
- store the api key and select done
- export const API_KEY='AIzaSyBt0QrVQHrjBa4hro8dJeA0Fr7wvA724Es'
- Search youtube data api in google then click references, here you can check what data you can access 
*/

/*

!GIT AND GITHUB TUTORIAL

- Q: What is git?

Git is a distribitued version control system
distributed - means that every devs computer  has a complete copy of the codebase, including history changes, information about who changed what and when
Version control - helps us track and mange code changes over time.

- Q: Do you really need git and can you code without one?

You can but, git helps us solve problems such as manually comparing code changes, collaboration, because 

it tracks every change automaticall
it allows multiple people to work on the same project seamlessly
easily navigate to your project's history.

- Q: Where can you download git?

get the 64-bit version and install it.
https://git-scm.com/downloads/win

- Q: Check version of git?
In terminal type
git --version

- Q: How to configure git to work with our name and email?

This it to track who made the changes in the project.
git config --global user.name 'Adonis'
git config --global user.email 'Adonis'


!REPOSITORIES

- Q: What is a repo?

Where git tracks everything in your project. It's like a folder that stores all versions of the code. If a folder is tracked by git, then it's a repository.

- Q: How to create a repository?

This will initialize an empty repository.
git init

- Q: What is usually the name of primary branch?

Before it is master, now it's main.

You can show the name of the current bracnh branch by typing
git branch --show-current or git status

- Q: How to configure the name of initial branch?

git config --global init.defaultBranch main

- Q: Do you need to initialize git for frameworks?

Most of the time, it comes pre-initialized.

- Q: What's the point of having main branch?

Main is the default branch name of your repo created by git, every time you initialize git, the branch is automatically created for you

- Q: How can you check the status and untracked filed in your project?

git status

- Q: How can you make a file be tracked by git?

git add fileName.extension, example git add readme.md

!COMMIT

- Q: What is committing?

Commiting is like taking a snapshot of your project at a certain point, It's like creating a whole new copy of your folder and telling git to remember when you did it at what time, so if anything happens in the future, you can go back to that folder with the commit name you specified to git and see what you had in there.

- Q: How often should you commit?

Commit your changes regularly, because regular commits helps us keep track of our progress and make it easier to rever to previous versions if you break something.

- Q: How to commit?

`-m` refers to message
git commit -m "Added readme.md file"


- Q: How can you commit multiple files?

Since it's cumbersome to manually commit every single file, thankfully we have a that commits all files we've created or modified that git doesn't track yet.

git add ./

- Q: Remove an added file?

git reset fileName
git reset to remove every added file.

- Q: How to check the history of all your commits?

Here you will see the commitID, the author and the date and time of the commit.
git log

- Q: How can we go back to an older commit and restore it?

git checkout then the commit id from the git logs

git checkout 8cf16bdf53f61b7618fe8fa0360801b85ba1be55

- Q: What does You are in 'detached HEAD' state mean?

In git there's a HEAD which refers to the pointer pointing to the latest commit you created, 
so when you created a new commit, it shifts to the latest commit, but when we ran git checkout, 
we moved the head to the previous older commit. 

It's a state where the head pointer no longer points to the latest branch commit. 

- Q: What heppens when you use git checkout?

You're simply viewing the repository state as it was at the time of a specific commit, so you're viewing a snapshot of your codebase
at a previous moment in time.  

- Q: What if you want to discard changes after a commit?

If you want to rollback to a stable state, tidy up messy commits to look more professional, undo a bad push, refactor that didn't pan out, or recover from a messy git merge  

- Q: What If you made changes while in detached head state, and wants to discard them? 

git checkout -f main

- Q: How can you go back to the current state

git checkout main
Switched to branch 'main'

!BRANCHES

- Q: What is a branch?

It's a parallel version of your project.

- Q: How to switch back to default master branch?

git branch -M main

!GITHUB

- Q: Difference between Git and Github?

Git is used to track changes whereas Github, is a cloud platform that allows us to store git repositories online and collaborate with others.

- Q: How can I push my local project to github?

You need to link your repository to a remote

- Q: What are the two types of repository?

Local Repository - version of a project that exists on your own device. So when you initialize a repo using git init, you're creating a local repo in your folder, changes made are private until pushed in a remote repo.

Remote Repository - version of a project stores on a server like github, gitlab, or bitbucket. It is used to share code between collaborators, and keep project versions in sync across different user's computer.

- Q: How repos are set up when collaborating with a team?

When you're collaborating with a team, you'll have two kinds of repo.

You have local repo for each collaborators machine, and one centralized remote repo in which everyone syncs their local repository versions.

- Q: How to create a repository in github? 

Click the + icon then select new repository. Provide the name of repo, select if you want it to be a public or private repo, leave the add readme unticked. the create repository. 

copy the repositories origin
when you clone a repository from github, git automatically names a remote repository as origin by default. It's basically an alias for the remote repository

- Q: How to link the local repository to remote origin?

git remote add origin https://github.com/anurexia/learning_git.git

You can have multiple repositories, you just need to rerun the same command with different name for origin, and update the origin URL. But in most instance, just one remote repo is enough

- Q: How to push local commits into github?

Here we're referring to origin, instead of the origin URL.

git push -u origin main

! CREATING NEW REPOSITORY ON COMMAND LINE

echo "# learning_git" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/anurexia/learning_git.git
git push -u origin main

*/
