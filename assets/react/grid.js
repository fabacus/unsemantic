/*global
module,
require
*/

// Dependencies.
var React = require('react');
var PropTypes = require('prop-types');
var CreateClass = require('create-react-class');


// Define class.
var Grid = CreateClass({
  // Validation
  propTypes: {
    children: PropTypes.node,

    parent: PropTypes.bool,

    desktop: PropTypes.string,
    'desktop-hide': PropTypes.bool,
    'desktop-push': PropTypes.string,
    'desktop-pull': PropTypes.string,
    'desktop-prefix': PropTypes.string,
    'desktop-suffix': PropTypes.string,

    mobile: PropTypes.string,
    'mobile-hide': PropTypes.bool,
    'mobile-push': PropTypes.string,
    'mobile-pull': PropTypes.string,
    'mobile-prefix': PropTypes.string,
    'mobile-suffix': PropTypes.string,

    tablet: PropTypes.string,
    'tablet-hide': PropTypes.bool,
    'tablet-push': PropTypes.string,
    'tablet-pull': PropTypes.string,
    'tablet-prefix': PropTypes.string,
    'tablet-suffix': PropTypes.string,

    /*Custom classes*/
    customClass: PropTypes.string
  },

  // Render method.
  render: function () {
    const parent = this.props.parent;

    const desktop = this.props.desktop;
    const desktopHide = this.props['desktop-hide'];
    const desktopPush = this.props['desktop-push'];
    const desktopPull = this.props['desktop-pull'];
    const desktopPrefix = this.props['desktop-prefix'];
    const desktopSuffix = this.props['desktop-suffix'];

    const mobile = this.props.mobile;
    const mobileHide = this.props['mobile-hide'];
    const mobilePush = this.props['mobile-push'];
    const mobilePull = this.props['mobile-pull'];
    const mobilePrefix = this.props['mobile-prefix'];
    const mobileSuffix = this.props['mobile-suffix'];

    const tablet = this.props.tablet;
    const tabletHide = this.props['tablet-hide'];
    const tabletPush = this.props['tablet-push'];
    const tabletPull = this.props['tablet-pull'];
    const tabletPrefix = this.props['tablet-prefix'];
    const tabletSuffix = this.props['tablet-suffix'];

    const customClass = this.props.customClass;

    // Populated later.
    var className = [];

    /*
      ===================
      PARENT CLASS NAMES.
      ===================
    */

    if (parent) {
      className.push('grid-parent');
    }

    /*
      ====================
      DESKTOP CLASS NAMES.
      ====================
    */

    if (desktop) {
      className.push('grid-' + desktop);
    }

    if (desktopHide) {
      className.push('hide-on-desktop');
    }

    if (desktopPush) {
      className.push('push-' + desktopPush);
    }

    if (desktopPull) {
      className.push('pull-' + desktopPull);
    }

    if (desktopPrefix) {
      className.push('prefix-' + desktopPrefix);
    }

    if (desktopSuffix) {
      className.push('suffix-' + desktopSuffix);
    }

    /*
      ===================
      MOBILE CLASS NAMES.
      ===================
    */

    if (mobile) {
      className.push('mobile-grid-' + mobile);
    }

    if (mobileHide) {
      className.push('hide-on-mobile');
    }

    if (mobilePush) {
      className.push('mobile-push-' + mobilePush);
    }

    if (mobilePull) {
      className.push('mobile-pull-' + mobilePull);
    }

    if (mobilePrefix) {
      className.push('mobile-prefix-' + mobilePrefix);
    }

    if (mobileSuffix) {
      className.push('mobile-suffix-' + mobileSuffix);
    }

    /*
      ===================
      TABLET CLASS NAMES.
      ===================
    */

    if (tablet) {
      className.push('tablet-grid-' + tablet);
    }

    if (tabletHide) {
      className.push('hide-on-tablet');
    }

    if (tabletPush) {
      className.push('tablet-push-' + tabletPush);
    }

    if (tabletPull) {
      className.push('tablet-pull-' + tabletPull);
    }

    if (tabletPrefix) {
      className.push('tablet-prefix-' + tabletPrefix);
    }

    if (tabletSuffix) {
      className.push('tablet-suffix-' + tabletSuffix);
    }


    if(customClass) {
      className.push(' ' + customClass);
    }

    /*
      =================
      BUILD THE MARKUP.
      =================
    */

    className = className.join(' ');

    // Expose UI.
    return React.createElement(
      'div',
      {
        className: className
      },
      this.props.children
    );
  }
});

// Export.
module.exports = Grid;
