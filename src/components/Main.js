// @flow 
import * as React from 'react';
import Layout from './Layout';
import logo from '../logo.svg';

const Main = () => {
    return (
        <Layout>
            <main role="main" className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="mt-5">How does "children" prop work?</h1>
                <p className="lead">Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”. We recommend that such components use the special children prop to pass children elements directly into their output:</p>
                <p>This lets other components pass arbitrary children to them by nesting the JSX:</p>
                <p>Anything inside the JSX tag gets passed into the <b>Layout</b> component as a children prop. Since <b>Layout</b> renders <code>props.children</code> inside a div, the passed elements appear in the final output.</p>
            </main>
        </Layout>
    );
};
export default Main;