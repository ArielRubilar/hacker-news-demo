import { style } from '@vanilla-extract/css'
import { vars } from '../../App.css'

export const story = style({
  padding: '.5rem'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  marginBottom: '.25rem',
  lineHeight: '1.5'
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  lineHeight: '1.5'
})

export const smallLink = style({
  textDecoration: 'none',
  color: vars.colors.baseColor200,
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storySpan = style({
  textDecoration: 'none',
  color: vars.colors.baseColor200
})

export const storyLink = style({
  textDecoration: 'none',
  color: vars.colors.baseColor200,
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storyTitle = style({
  textDecoration: 'none',
  color: vars.colors.baseColor400,
  fontSize: '1.2rem',
  fontWeight: '500'
})
