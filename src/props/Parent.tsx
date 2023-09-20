import { Child } from './Child';

const Parent = () => {
  return <Child color="red" onClick={() => console.log('cliecked')} />;
};

export default Parent;
