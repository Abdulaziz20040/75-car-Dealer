import React, { useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" container mt-10">
      Home <br />
      <h1> Vaqtinchalik malumotlar yo'q</h1>
    </div>
  );
}

export default Home;
