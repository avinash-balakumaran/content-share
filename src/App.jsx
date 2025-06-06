import { useState, useEffect } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import { Builder } from "@builder.io/react";
import { registerCustomComponent } from "custom-component-package";

builder.init(import.meta.env.VITE_BUILDER_API_KEY);
registerCustomComponent();

function App() {
  const [pageContents, setPageContents] = useState();

  const el = document.querySelector("div[data-url]");
  const url = el.getAttribute("data-url");

  useEffect(() => {
    builder
      .get("page", {
        userAttributes: {
          urlPath: url,
        },
        cachebust: true,
      })
      .promise()
      .then((res) => {
        setPageContents(res);
      })
      .catch((err) => {
        console.log(err, "errr");
      });
  }, []);

  return (
    <>
      {" "}
      <header className="header">
        <img src="http://mmstaging.tacori.com/tacori_logo.png" />
      </header>
      <div className="builder-component-container">
        <BuilderComponent model="page" content={pageContents} />
      </div>
    </>
  );
}

export default App;
