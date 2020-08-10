import * as React from "react";

declare interface DropdownAlertProps {
  imageSrc?: string | number;
  infoImageSrc?: string | number | object;
  warnImageSrc?: string | number | object;
  errorImageSrc?: string | number | object;
  successImageSrc?: string | number | object;
  cancelBtnImageSrc?: string | number | object;
  infoColor?: string;
  warnColor?: string;
  errorColor?: string;
  successColor?: string;
  closeInterval?: number;
  startDelta?: number;
  endDelta?: number;
  wrapperStyle?: object | number;
  containerStyle?: object | number;
  contentContainerStyle?: object | number;
  titleStyle?: object | number;
  messageStyle?: object | number;
  imageStyle?: object | number;
  cancelBtnImageStyle?: object | number;
  titleNumOfLines?: number;
  messageNumOfLines?: number;
  onClose?: Function;
  onCancel?: Function;
  showCancel?: boolean;
  tapToCloseEnabled?: boolean;
  panResponderEnabled?: boolean;
  replaceEnabled?: boolean;
  translucent: boolean;
  useNativeDriver?: boolean;
  isInteraction?: boolean;
  activeStatusBarStyle?: string;
  activeStatusBarBackgroundColor?: string;
  inactiveStatusBarStyle?: string;
  inactiveStatusBarBackgroundColor?: string;
  updateStatusBar?: boolean;
  elevation?: number;
  zIndex?: number;
  sensitivity?: number;
  defaultContainer?: object | number;
  defaultTextContainer?: object | number;
  renderImage?: Function;
  renderCancel?: Function;
  renderTitle?: Function;
  renderMessage?: Function;
  testID?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
  titleTextProps?: object;
  messageTextProps?: object;
  useAnimationLock?: boolean;
  onTap?: Function;
  ref?: React.LegacyRef<DropdownAlertProps>;
}

declare const DropdownAlert: React.FunctionComponent<DropdownAlertProps>;

export default DropdownAlert;
