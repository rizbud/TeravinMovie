import { scaleHeight, scaleWidth } from 'osmicsx'

export default {
  // width & height
  "hw-25": { height: scaleWidth(25) },
  "hw-50": { height: scaleWidth(50) },
  "hw-60": { height: scaleWidth(60) },

  // position
  "bottom-w-7": { bottom: scaleWidth(7) },

  // color
  "white-semi": 'rgba(255, 255, 255, 0.5)',

  // padding
  "px-4": { paddingHorizontal: scaleWidth(4) },
  "pt-w-5": { paddingTop: scaleWidth(5) },
  "py-1.5": { paddingVertical: scaleHeight(1.5) },

  // margin
  "ml-2": { marginLeft: scaleWidth(2) },
  "mt-1": { marginTop: scaleHeight(1) },
  "mb-1.5": { marginBottom: scaleHeight(1.5) },
  "mb-2": { marginBottom: scaleHeight(2) },
  "mr-4": { marginRight: scaleWidth(4) },
  "my-0.7": { marginVertical: scaleHeight(0.7) },

  // font size
  "text-h1": { fontSize: scaleWidth(5.8) },
  "text-h2": { fontSize: scaleWidth(5.3) },
  "text-normal": { fontSize: scaleWidth(4) },

  // font family
  "light": { fontFamily: 'Ubuntu-Light' },
  "regular": { fontFamily: 'Ubuntu-Regular' },
  "medium": { fontFamily: 'Ubuntu-Medium' },
  "bold": { fontFamily: 'Ubuntu-Bold' },
  "italic": { fontFamily: 'Ubuntu-Italic' },
}