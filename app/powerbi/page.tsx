import React from 'react';

const PowerBIDashboard: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Power BI Dashboard</title>
        <style>
          {`
            body, html {
              height: 100%;
              margin: 0;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none; /* Remove iframe border */
            }
          `}
        </style>
      </head>
      <body>
        <iframe
          title="Hatchery Performance Dashboard"
          src="https://app.powerbi.com/view?r=eyJrIjoiMjU5MjJjNjQtODJkYS00Y2ZlLWIzMTMtZWU2YmFhZjg5ODAxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
          allowFullScreen={true}
        ></iframe>
      </body>
    </html>
  );
};

export default PowerBIDashboard;
