import React, { Component } from 'react';
import css from './Section.module.css'

export default class Section extends Component {
  render() {
    return (
      <div className={css.section}>
        {this.props.children}
      </div>
    );
  }
}