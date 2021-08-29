import React from 'react';
import MonokleIncomingRefs from '@assets/MonokleIncomingRefs.svg';
import MonokleOutgoingRefs from '@assets/MonokleOutgoingRefs.svg';
import MonokleWarning from '@assets/MonokleWarning.svg';
import {ExclamationCircleOutlined} from '@ant-design/icons';

export enum MonoIconTypes {
  IncomingRefs,
  OutgoingRefs,
  Warning,
  Error,
}

export type MonoIconProps = {
  type: MonoIconTypes;
  style?: React.CSSProperties;
};

const defaultStyle: React.CSSProperties = {
  display: 'inline-block',
  height: '12px',
};

const getIconSvg = (type: MonoIconTypes) => {
  switch (type) {
    case MonoIconTypes.IncomingRefs:
      return MonokleIncomingRefs;

    case MonoIconTypes.OutgoingRefs:
      return MonokleOutgoingRefs;

    case MonoIconTypes.Warning:
      return MonokleWarning;

    default:
      return undefined;
  }
};

const createImageComponent = (type: MonoIconTypes, style?: React.CSSProperties) => {
  const iconSvg = getIconSvg(type);
  if (!iconSvg) {
    return null;
  }

  return <img src={iconSvg} style={style} />;
};

const getIconComponent = (type: MonoIconTypes, style?: React.CSSProperties) => {
  switch (type) {
    case MonoIconTypes.Error: {
      return <ExclamationCircleOutlined style={style} />;
    }
    default:
      return createImageComponent(type, style);
  }
};

const MonoIcon = (props: MonoIconProps) => {
  const {type, style} = props;

  const fullStyle = {
    ...defaultStyle,
    ...style,
  };

  const IconComponent = getIconComponent(type, fullStyle);
  return IconComponent;
};

export default MonoIcon;
