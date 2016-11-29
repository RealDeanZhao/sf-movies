import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import MovieItem from './MovieItem';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  movies:{
      list: [{
          id: 1,
          title: 'Dean Zhao 1'
      }, {
          id: 2,
          title: 'Dean Zhao 2'
      }, {
          id: 3,
          title: 'Dean Zhao 3'
      }]
  },
  search:{page: 1}
};

let store;
let component;
let wrapper;
describe('MovieList', function(){
    beforeEach(() => {
        store = mockStore(storeStateMock);
        component = <MovieList store={store}/>;
        wrapper = shallow(<MovieList store={store}/>).shallow();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
    });

    it('renders <MovieItem /> 3 times', function(){
        expect(wrapper.find(MovieItem).length).toBe(3);
    })
})

