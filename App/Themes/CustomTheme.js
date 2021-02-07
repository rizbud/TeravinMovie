import { scaleHeight, scaleWidth } from 'osmicsx'

export default {
  // width & height
  "hw-25": { height: scaleWidth(25) },
  "hw-40": { height: scaleWidth(40) },
  "hw-50": { height: scaleWidth(50) },
  "hw-54": { height: scaleWidth(54) },
  "hw-56": { height: scaleWidth(56) },
  "hw-60": { height: scaleWidth(60) },
  "min-h-93": { minHeight: scaleHeight(93) },
  "max-h-90": { maxHeight: scaleHeight(90) },

  // position
  "bottom-w-7": { bottom: scaleWidth(7) },

  // color
  "white-semi": 'rgba(255, 255, 255, 0.5)',

  // padding
  "px-4": { paddingHorizontal: scaleWidth(4) },
  "pt-w-5": { paddingTop: scaleWidth(5) },
  "pt-5": { paddingTop: scaleHeight(5) },
  "pt-6": { paddingTop: scaleHeight(6) },
  "pb-1.5": { paddingBottom: scaleHeight(1.5) },
  "py-1.5": { paddingVertical: scaleHeight(1.5) },
  "py-2": { paddingVertical: scaleHeight(2) },

  // margin
  "ml-2": { marginLeft: scaleWidth(2) },
  "mt-1": { marginTop: scaleHeight(1) },
  "mb-1": { marginBottom: scaleHeight(1) },
  "mb-1.5": { marginBottom: scaleHeight(1.5) },
  "mb-2": { marginBottom: scaleHeight(2) },
  "mr-2": { marginRight: scaleWidth(2) },
  "mr-4": { marginRight: scaleWidth(4) },
  "my-0.7": { marginVertical: scaleHeight(0.7) },
  "mx-4": { marginHorizontal: scaleWidth(4) },

  // font size
  "text-h1": { fontSize: scaleWidth(5.8) },
  "text-h2": { fontSize: scaleWidth(5.2) },
  "text-h3": { fontSize: scaleWidth(4.5) },
  "text-medium": { fontSize: scaleWidth(4.1) },
  "text-normal": { fontSize: scaleWidth(3.8) },

  // font family
  "light": { fontFamily: 'Ubuntu-Light' },
  "regular": { fontFamily: 'Ubuntu-Regular' },
  "medium": { fontFamily: 'Ubuntu-Medium' },
  "bold": { fontFamily: 'Ubuntu-Bold' },
  "italic": { fontFamily: 'Ubuntu-Italic' },
}