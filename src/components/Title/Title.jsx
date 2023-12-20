import React, { Component } from 'react';
import css from './Title.module.css'

export default class Filter extends Component {
  render() {
    return (
      <p className={css.title}>
        {this.props.children}
      </p>
    );
  }
}

