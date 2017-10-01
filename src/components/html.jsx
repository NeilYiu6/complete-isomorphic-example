import React from 'react';
import PropTypes from 'prop-types';

const HTML = (props) => {
  return (
    <html lang="en">
      <head>
        <title>All Things Westies</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
        />
        <link rel="stylesheet" href="/assets/style.css" />
      </head>
      <body>
        <div
          id="react-content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.__SERIALIZED_STATE__ =
              JSON.stringify(${props.serverState})
          `
        }}
        />
        <script type="application/javascript" src="/browser.js" />
      </body>
    </html>
  );
};

HTML.propTypes = {
  html: PropTypes.string,
  serverState: PropTypes.string
};

export default HTML;
