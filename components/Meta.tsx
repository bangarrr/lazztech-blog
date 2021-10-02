import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
}

const Meta: React.FC<Props> = ({title}) => {
  return (
    <Head>
      <title>{title ? title + ` | Lazztech.dev` : `Lazztech.dev`}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta
        name='description'
        content='Lazztech.devのブログです。'
      />
    </Head>
  )
}

export default Meta;