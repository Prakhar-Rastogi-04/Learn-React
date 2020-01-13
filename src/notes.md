Tutorial referenece: 
######SetState: --------------------------------------------------------------------------------------
1. Never modify the state directly but use setState function as setState also fires the render function in background.
1. setState is async function. if you want to synchronse use callbacks.
2. if a function calls setState multiple times in a single user action the react compiler clubs all those setState calls as one call in order to improve the performance.
3. Whenever there are multiple setState calls and each call needs to change the same state variable, use the prevState object(refers to the previously changed state variable) in setState method instead of this.state(which refers to current obj) ---> refer to Counter.js

##Event Handllers: -----------------------------------------------------------------------------------------
1. The events must me the function assignment not the function call. EX:
    onClick = {EventHandler()} --------- WRONG WAY
    onClick = {EventHandler}  -----------RIGHT WAY
2. Ways of binding the eventHandler: (Refer the EventBind.js)
                <div><button onClick={this.clickHandler1}>Click-1</button></div>
                <div><button onClick={this.clickHandler2.bind(this)}>Click-2</button></div>
                <div><button onClick={() => this.clickHandler3()}>Click-3</button></div>
                <!-- {Below 2 are the most recommended approaches by React community } -->
                <div><button onClick={this.clickHandler4}>Click-4</button></div>
                <div><button onClick={this.clickHandler5}>Click-5</button></div>
3. Passing the events from child to parent - Refer Parent.js & Child.js

#CSS Styling: -----------------------------------------------------------------------------------------
1. Inline
2. import css file. (Will be imported like : --- import './style.css')
3. USe style.module.css -> Will be importedlike :-- import Style from './style.module.css' --[IMP CONCEPT--Recommended]

##Life Cycle Methods:-----------------------------------------------------------------------------------
1. Life cycle methods are only available for class components and are not availble for functional components.
2. Lifecycle hooks-
    a. Mounting: When the instance of component is created and inserted into DOM
    b. Updating: Whenever render function is called as a result of statechange.
    c. Unmounting: Whe th component is removed from DOM
    d. Error Handling: Whenever there is an error in rendering the component OR in the constructor of any child element.
3. List of some lifecycle hooks:
    Use LifecycleA.ja and LifecycleB.js
    ------------------Mounting methods---------------------------
    constructor()
    componentWillMount()
    render()
    componentDidMount()
    ------------------Updating methods----------------------------
    componentWillReceiveProps
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
    -----------------Unmounting method----------------------------
    componentWillUnmount

##Pure Component:---------------------------------------------------------------------------------------
1. A pure  component is a component which everytime checks the previous state with current state and previous props with current props and bsed on the change re-renders the components. If there is no change observed then the component does not rerender. Thus improves the performance f the system.
Contrary to that in case of normal component does not check for any change it basically runs every time setState or similar method is fired.
2. Pure function always runs shouldComponentUpdate in background and thus does not re renders the component unnecessarily. The shouldComponentUpdate does a shallow comparison of props and states.
3. Please Check Master.js, PureComp.js and RegularComponent.js. In master.js the state.name changes every 2 seconds but both the new and old values are the same therefore Pure function does not render in every 2 seconds whereas the regular components re-render every 2 seconds. 
4. It is always recommended to make the parent component as Pure componenet so that it does not re-renders unnecessarily and inturn the children components will also not re-render. In ou case Master.js should have been implemented as Pure component.
5. Pure component only works with class components not with the functioal components.

##React Memo:----------------------------------------------------------------------------------------

1. Since pure components are only applicable on class based components therefore in order to achieve a similar functionality of pure components, Memo is used.
2. At the time of exporting the function based component we can export --
    export default React.memo(componentName) 
    Now this component will not re-render unnecessarily and thus the performance will be improved.
3. Please refer memoComp.js for the same.

##ReactRefs:-------------------------------------------------------------------------------------------------

1. Please refer Refs.Demo.js
2. Refs forwarding: Refer to InputFRRefs.js and ParentRefs.js

##Portals :----------------------------------------------------------------------------------------------

In react, all the components are grouped within a parent folder which is root (pls check public/index.html).
Now, if there is some specific requirement to have the component outside of the root element, the Portals come into play. There can be chances that the css of root element might have to be overidden therefore a need may arise to have a component outside the scope of root element.

React uses ReactDOM.createPortal (jsx, DOM-Element) which takes-in 2 parameters 1st is the JSX to be rendered and second is the element where the DOM will be wrapped within.
Please refer PortalDemo.js. 
URL: https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31

##Error Boundaries: -----------------------------------------------------------------------------------
Please refer ProduceError.js and ErrorBoundaries.js
ref URL: https://youtu.be/DNYXgtZBRPE

##Higher Order Component: -------------------------------------------------------------------------------
Higher  Order comp is  the one which takes a component as a parameter and returns a new component. It basically contains those functionalities which are used in multiple components. 
Please refer Addition.js, AdditionHover.js, withCounter.js
URL: https://youtu.be/rsBQj6X7UK8

##Render Props: --------------------------------------------------------------------------------------
The term render prps referes to technique of sharing code among react components using the props whose value is a function.
 - Please refer App.js, RenderProps.js, ClickCounterTwo.js, HoverCounterTwo.js
 - Tutorial Link: https://youtu.be/EZil2OTyB4w

##React Context :-------------------------------------------------------------------------------------
Context provides a way to pass data through component tree without having to pass it to every level of the tree.
1. First create the context using React.CreateContext()
2. Create and export provider and consumer using .provider, .consumer functions.
3. Use the provider component on the parent component whose children/child are upposed to use the shared data.
4. Use the consumer component on that component where the shared data needs to be used. 

Please refer, App.js , Component A, ComponentB, ComponentC and UserContext.js.
Here the component tree is like App.js -> ComponentA -> ComponentB -> ComponentC
The context is attached on App.js and used directly in ComponentC.js  without passing it in ComponentA and ComponentB.

- Tutorial Link:https://youtu.be/lTjQjWemKgE













Pure Function: A pure function is a function which akes an argument and returns the value that solely depends on that argument. A pure function does not make use of anything which is outside the scope of thet function.
EX: function pure(arg){
    let sqr = arg* arg
    return sqr
}
// here arg is the function argument and sql is the variable within the scope of a function. And it is returning the sqaure which is dependent on passed argument.




