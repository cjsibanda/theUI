import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <main
        style={{
          minHeight: "150vh",
          padding: "4rem",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        }}
      >
        <h1>Welcome to Sibanda Design</h1>

        <p>
          If you want to go fast, go alone.
          If you want to go far, go together.
        </p>

        <p>[Scroll Down]</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;