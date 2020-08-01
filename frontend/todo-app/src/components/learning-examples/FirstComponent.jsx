import React, { Component } from 'react';

export default class FirstComponent extends Component{
    render(){
      return (
        <div>
        Fist Component
        </div>
      )
    }
}

export function SecondComponent(){
    return (
      <div>
      Second Component
      </div>
    );
}