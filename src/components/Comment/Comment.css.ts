import { style } from '@vanilla-extract/css'
import { vars } from '../../App.css'

export const commentBody = style({
  paddingLeft: '1.5rem'
})

export const comment = style({
  padding: '.5rem',
  background: vars.colors.baseColor100
})
