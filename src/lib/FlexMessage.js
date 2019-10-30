class FlexMessage {
  renderSizeStr(size) {
    size = size.toLowerCase();
    switch (size) {
      case 'none':
        return 'None';
      case 'full':
        return 'Full';
      default:
        return (
          size.substr(0, size.length - 1).toUpperCase() +
          size.substr(size.length - 1).toLowerCase()
        );
    }
  }

  getClassMargin(margin, parentLayout, direction) {
    if (margin && parentLayout) {
      let preText = '';
      if (parentLayout.toLowerCase() === 'vertical') {
        preText = 'ExMgnT';
      } else {
        if (direction === 'rtl') {
          preText = 'ExMgnR';
        } else {
          preText = 'ExMgnL';
        }
      }
      return `${preText}${this.renderSizeStr(margin)}`;
    } else {
      return '';
    }
  }

  getStyle(template) {
    let style = {};

    let keys = [
      'width',
      'height',
      'color',
      'backgroundColor',
      'borderColor',
      'borderWidth',
      'position'
    ];
    keys.forEach(key => {
      if (key in template) {
        style[key] = template[key];
      }
    });

    // flex
    if ('flex' in template) {
      if (template.flex > 0) {
        style['-webkit-box-flex'] = template.flex;
        style['flex'] = `${template.flex} ${template.flex} auto`;
      }
    }

    if ('cornerRadius' in template) {
      style['borderRadius'] = template.cornerRadius;
    }
    if ('paddingAll' in template) {
      style['padding'] = template.paddingAll;
    }
    if ('paddingTop' in template) {
      style['paddingTop'] = template.paddingTop;
    }
    if ('paddingBottom' in template) {
      style['paddingBottom'] = template.paddingBottom;
    }
    if ('paddingStart' in template) {
      style['paddingLeft'] = template.paddingStart;
    }
    if ('paddingEnd' in template) {
      style['paddingRight'] = template.paddingEnd;
    }
    if ('offsetTop' in template) {
      style['top'] = template.offsetTop;
    }
    if ('offsetBottom' in template) {
      style['bottom'] = template.offsetBottom;
    }
    if ('offsetStart' in template) {
      style['left'] = template.offsetStart;
    }
    if ('offsetEnd' in template) {
      style['right'] = template.offsetEnd;
    }

    return style;
  }
}
export default FlexMessage;
