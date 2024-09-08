import React, { lazy, Suspense } from "react";

const AppText1 = lazy(() => import("app1/AppText1"));

export const Container = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid blue",
          height: "30dvh",
        }}
      >
        <h1>Hello World!</h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "30dvh",
          }}
        >
          <div style={{ border: "1px solid red", width: "50%" }}>
            <Suspense fallback={<h6>Loading...</h6>}>
              <AppText1 />
            </Suspense>
          </div>
          <div style={{ border: "1px solid violet", width: "50%" }}>
            <h1>Box 2</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
