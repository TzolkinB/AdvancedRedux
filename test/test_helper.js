import _$               from 'jquery'; 
import React            from 'react';
import ReactDOM         from 'react-dom';
import TestUtils        from 'react-dom/test-utils';
import jsdom            from 'jsdom'; // A JS implementation of the WHATWG DOM and HTML standards, for use with node.js
import chai, { expect } from 'chai';
import chaiJquery       from 'chai-jquery';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';
import reducers         from '../src/reducers';

// set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $); //sets up chai-jquery

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML, uses jQuery to be able to use chai-jquery
}

// helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
