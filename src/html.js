import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N6HVBGD');`,
      }}></script>
      {/* End Google Tag Manager */}

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <title>EcoCart | Calculate your Environmental FOODprint</title>
        <meta name='description' content='How eco-friendly is the beef you eat? Bring your grocery list to life with an in-depth look at the environmental impact of each food item on your list! EcoCart is an educational shopping experience that gives you a personalized grade based on the environmental impact of your most common grocery items.' />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='EcoCart | Calculate your Environmental FOODprint' />
        <meta name='twitter:description' content='How eco-friendly is the beef you eat? Bring your grocery list to life with an in-depth look at the environmental impact of each food item on your list! EcoCart is an educational shopping experience that gives you a personalized grade based on the environmental impact of your most common grocery items.' />
        <meta name='twitter:image:src' content='https://lh3.googleusercontent.com/LiO4QtoXi5U8kvLe9cI3gd2HTF9OnKB_w5ETfYpuSzOCK3TAPg_BzMSZ8fDxLIkwMe8UlUMw7i5L5-CeI-KtI86WBnleauexj9q3AsT8FzFLYvvbE_GTpml9yM-TP6Cz8DaOWbdywQ' />

        <meta property="og:title" content="EcoCart | Calculate your Environmental FOODprint" />
        <meta property="og:url" content="https://ecocart.app/" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/LiO4QtoXi5U8kvLe9cI3gd2HTF9OnKB_w5ETfYpuSzOCK3TAPg_BzMSZ8fDxLIkwMe8UlUMw7i5L5-CeI-KtI86WBnleauexj9q3AsT8FzFLYvvbE_GTpml9yM-TP6Cz8DaOWbdywQ" />
        <meta property="og:description" content="How eco-friendly is the beef you eat? Bring your grocery list to life with an in-depth look at the environmental impact of each food item on your list! EcoCart is an educational shopping experience that gives you a personalized grade based on the environmental impact of your most common grocery items." />
        <meta property="og:site_name" content="EcoCart | Calculate your Environmental FOODprint" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N6HVBGD"
          height="0"
          width="0"
          style="display:none;visibility:hidden">
        </iframe>`,
      }}></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
