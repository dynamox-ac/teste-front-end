import * as React from 'react';

// https://stackoverflow.com/questions/63165896/what-is-the-type-of-the-svg-element-in-typescript
type HTMLSVGElement = HTMLElement & SVGElement;

interface Props extends React.HTMLAttributes<HTMLSVGElement> {}

// React TypeScript Cheatsheet doesn't recommend using React.FunctionalComponent.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// declare const ReactTimeAgo: React.FC<Props>;

type FlagComponent = (props: Props) => JSX.Element;

declare const Flag: FlagComponent;

export default Flag;