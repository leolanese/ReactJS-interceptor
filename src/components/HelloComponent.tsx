import register from 'preact-custom-element';

const HelloComponent = (props: {name?: string}) => (
    <div>Hello, {props.name}!</div>
);

// Register process as web-component
// Now register MyComponent as a custom element so, the HTML tag name is 'my-component'
register(HelloComponent, 'hello-component', ['name']);

export default HelloComponent;