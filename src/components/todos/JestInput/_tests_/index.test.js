import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../index.js';
import { Provider } from 'react-redux';
import { shallow,mount } from 'enzyme';
import guessedwordreducer from '../../../../reducers/guessedword';
import { createStore, applyMiddleware, compose } from 'redux';

Enzyme.configure({ adapter: new Adapter() });

describe('A', () => {
 
 test('render without error',()=>{
    let props={
       success:true
    }
    const store = createStore(guessedwordreducer,{...props});
     const wrapper=shallow(<Input {...props} store={store}/>).dive().dive();
     console.log(wrapper.debug())
   expect(wrapper.exists()).toBe(true)
 })

 test('render without error',()=>{
    let props={
       success:false
    }
    const store = createStore(guessedwordreducer,{...props});
     const wrapper=shallow(<Input {...props} store={store}/>).dive().dive();
     console.log(wrapper.debug())
   expect(wrapper.exists()).toBe(true)
 })
})
