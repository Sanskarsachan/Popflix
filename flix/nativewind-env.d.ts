import { NativeWindType } from 'nativewind/types';

declare module 'react-native' {
  interface ViewProps extends NativeWindType {}
  interface TextProps extends NativeWindType {}
  interface ScrollViewProps extends NativeWindType {}
  interface ImageProps extends NativeWindType {}
}
