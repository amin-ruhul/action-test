import React, { Component } from "react";

export default class TextFormatter extends Component {
  convertToSlug(text) {
    return text.replaceAll(" ", "_");
  }

  render() {
    return <div>TextFormatter</div>;
  }
}
