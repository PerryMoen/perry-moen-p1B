import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'
import styled from 'styled-components'

const H3 = styled.h3 `
  margin: 0px;
  color: yellow;
`

const P = styled.p `
  margin:0px;
  color: yellow;
`

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <H3>{data.name}</H3>
      <P>{data.title}</P>
      <P>{data.shortBio.shortBio}</P>
    </div>
  </div>
)
