# react-native-dropdown-alert

[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![npm version](http://img.shields.io/npm/v/@fiovex/react-native-dropdown-alert.svg)](https://www.npmjs.com/package/@fiovex/react-native-dropdown-alert)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/LICENSE)

![screenshot](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/screenshots/info.png)
![screenshot](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/screenshots/warning.png)
![screenshot](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/screenshots/error.png)
![screenshot](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/screenshots/success.png)

### Table of contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [Usage](#usage)
4. [Props](docs/PROPS.md)

A simple alert to notify users about new chat messages, something went wrong or everything is ok. It can be closed by tap, cancel button, automatically with `closeInterval`, pan responder up gesture or programmatically (`this.dropDownAlertRef.closeAction()`).

### Installation

`npm i @fiovex/react-native-dropdown-alert --save`

### Demo

![screenshot](https://github.com/Fiovex/react-native-dropdown-alert/blob/master/demo/demo.gif)

### Usage

```javascript
import DropdownAlert from "@fiovex/react-native-dropdown-alert";
export default class App extends Component {
  componentDidMount() {
    this._fetchData();
  }
  _fetchData = async () => {
    try {
      await fetch("https://mywebsite.com/endpoint/");
      // alertWithType parameters: type, title, message, payload, interval.
      // There are 4 pre-defined types: info, warn, success, error.
      // payload object with source property overrides image source prop. (optional)
      // interval overrides closeInterval prop. (optional)
      this.dropDownAlertRef.alertWithType(
        "success",
        "Success",
        "Fetch data is complete."
      );
    } catch (error) {
      this.dropDownAlertRef.alertWithType("error", "Error", error.message);
    }
  };
  render() {
    // Make sure DropdownAlert is the last component in the document tree.
    return (
      <View>
        <DropdownAlert ref={(ref) => (this.dropDownAlertRef = ref)} />
      </View>
    );
  }
}
```

> Inspired by: [RKDropdownAlert](https://github.com/cwRichardKim/RKDropdownAlert)
