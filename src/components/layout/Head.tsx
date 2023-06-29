import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_DESCRIPTION, SITE_NAME } from '../../configuration/Config'
interface Props {
  title?: string
  description?: string
}

export function Head(props: Props) {
  return (
    <NextHead>

    </NextHead>
    )
}
