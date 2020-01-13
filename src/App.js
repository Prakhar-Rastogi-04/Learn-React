import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import EventBind from './component/EventBind';
import Parent from './component/Parent';
import LifecycleA from './component/LifecycleA';
import Fragment from './component/Fragment';
import Master from './component/Master';
import RefsDemo from './component/RefsDemo';
import ParentRefs from './component/ParentRefs';
import PortalDemo from './component/PortalDemo';
import ProduceError from './component/ProduceError';
import ErrorBoundary from './component/ErrorBoundary';
import Addition from './component/Addition';
import AdditionHover from './component/AdditionHover';
import ClickCounterTwo from './component/ClickCounterTwo';
import RenderProps from './component/RenderProps';
import HoverCounterTwo from './component/HoverCounterTwo';
import ComponentA from './component/ComponentA';
import { UserProvider } from './component/UserContext';

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <Parent /> */}
      {/* <LifecycleA /> */}
      {/* <Fragment /> */}
      {/* <Master /> */}
      {/* <RefsDemo /> */}
      {/* <ParentRefs /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary >
        <ProduceError name="Prakhar" />
        <ProduceError name="ABCD" />
      </ErrorBoundary> */}
      {/* <Addition /> */}
      {/* <AdditionHover /> */}
      {/* <RenderProps render = {(count , incrementCounter) => {
        return <ClickCounterTwo count = {count}  incrementCounter={incrementCounter} />
      } } />

      <RenderProps render = {(count , incrementCounter) => {
              return <HoverCounterTwo count = {count}  incrementCounter={incrementCounter} />
            } } /> */}
          <UserProvider value="Prakhar">
            <ComponentA />
          </UserProvider>
      
      
    </div>
  );
}

export default App;
