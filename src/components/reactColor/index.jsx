import { message } from 'antd';
import React from 'react';
import { SketchPicker } from 'react-color';
import bg from '../../assets/yay.jpg';

class ReactColor extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#ffffff',
  };

  componentDidMount() {
    const themeColor = localStorage.getItem('theme');
    if (themeColor) {
      let color = {};
      color.hex = themeColor;
      // this.handleChange(color);
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    window.less
      .modifyVars({
        '@primary-color': color.hex,
        '@btn-primary-bg': color.hex,
        '@text-color': color.hex,
      })
      .then(() => {
        this.setState(
          {
            color: color.hex,
          },
          () => {
            document.body.style.setProperty('--show', color.hex);
            document.body.style.setProperty('--url', `url(${bg})`);
            localStorage.setItem('theme', color.hex);
          },
        );
      })
      .catch((error) => {
        message.error('Failed to update theme');
      });
  };

  render() {
    const { color } = this.state;

    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `${color}`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    };

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ReactColor;
