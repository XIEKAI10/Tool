import { message } from 'antd';
import React from 'react';
import { SketchPicker } from 'react-color';

class ReactColor extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#ffffff',
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    setTimeout(() => {
      window.less
        .modifyVars({
          '@primary-color': color.hex,
          // '@fontColor': color.hex,
        })
        .then(() => {
          this.setState(
            {
              color: color.hex,
            },
            () => {
              console.log(this.state.color);
            },
          );
        })
        .catch((error) => {
          message.error('Failed to update theme');
        });
    }, 200);
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
