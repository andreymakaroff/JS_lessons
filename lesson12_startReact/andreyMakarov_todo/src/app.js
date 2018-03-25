import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from './Navigation';

const Time = () => <time style={{color:'brown'}}>{new Date().toLocaleTimeString()}</time>;

const Error = ({text, color}) => {
  return <mark style={{color}}>{text}</mark>
};

const List = ({list, field, ordered}) => {
  const items = (list || [])             //  массив по умолчанию
    .sort((prev, next) => prev.name > next.name ? 1 : -1)
    .map(el => <li key={el.id}>{el[field || 'name']}</li>);

  return ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
};


const nums = [1,2,3,4,5,6,7];
const users = [
  {id:'123',name:'Petro'},
  {id:'84',name:'Alena'},
  {id:'5',name:'Bob'},
];

const Comps = {
  List() { return <ul><li>1</li><li>2</li></ul>; },
  Message(props) { return <mark>{props.text}</mark>; }
};

const Main = () => (<div>
  <Comps.List />
  <Comps.Message text="Test me" />
</div>);

const paint = () => {
  const component = (
    <React.Fragment>
      <h1>
        Text inside
        <Time />
      </h1>
      <Error
        text="Red Error Text"
        color="red"
      />
      <List
        list={users}
        field={name}
      />
      <List
        list={users}
        field={name}
        ordered
      />
      <ul>
        {nums
          .filter(num => num % 2)
          .map((item, index) => <li key={index}>{item}</li>)
        }
        {users
          .sort((prev,next) => prev.name > next.name ? 1 : -1)
          .map(({ id, name }) => <li key={id}>{name}</li>)
        }
      </ul>

      <Main/>

      <Navigation />
      <Navigation isLogin/>
    </React.Fragment>
  );

  ReactDom.render( component, document.getElementById('app'));
};

setInterval(paint, 1000);