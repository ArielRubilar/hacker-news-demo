
import { globalStyle, style, createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    neutralColor: '#fff',
    baseColor100: '#F6F6EF',
    baseColor400: '#374131',
    baseColor200: '#828282',
    primaryColor400: 'rgb(255, 102, 0)'
  }
})

globalStyle('html', {
  fontFamily: " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
})

globalStyle('body', {
  minHeight: '100vh'
})

globalStyle('*', {
  margin: '0',
  padding: '0',
  font: 'inherit',
  boxSizing: 'border-box'
})

export const contentContainer = style({
  width: 'min(100% , 1200px)',
  marginInline: 'auto',
  paddingInline: 'clamp(1rem , 2vw , 2rem)'
})

export const mainContainer = style({
  paddingBlock: '1.5rem  1rem'

})
