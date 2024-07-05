import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiProvider from "../context/Api_Context";
import UserDetail from "./departmentList";
import Navbar from "./navbar/Navbar";
// import "../index.css";

function App() {
  return (
    <ApiProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto py-24">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl mb-4">Department List</h2>
              <Routes>
                {/* using Route from react to render component as props */}
                <Route exact path="/" element={<UserDetail />} />

              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ApiProvider>
  );
}

export default App;
