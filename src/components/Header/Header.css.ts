import { style } from '@vanilla-extract/css'
import { vars } from '../../App.css'

export const header = style({
  borderBottom: `1px solid ${vars.colors.baseColor400}`,
  paddingBlock: '.75rem '

})

export const headerContent = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'start',
  alignItems: 'center'

})

export const link = style({
  color: vars.colors.baseColor400,
  margin: '0',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: '700'
})

export const logo = style({
  background: vars.colors.primaryColor400,
  color: vars.colors.neutralColor,
  aspectRatio: '1',
  display: 'grid',
  placeItems: 'center',
  height: '2.4rem',
  padding: '.5rem',
  lineHeight: '1',
  fontSize: '1.2rem',
  fontWeight: '700'
})
