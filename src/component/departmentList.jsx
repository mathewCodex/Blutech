import React, { useContext, useEffect } from "react";
import { ApiContext } from "../context/Api_Context";
const UserDetail = () => {
  const { apis, fetchApis } = useContext(ApiContext);

  // using use effect
  useEffect(() => {
    fetchApis();
  }, [fetchApis]);
  return (
    <div>
      {/* Table list displaying our items fetch from the Api using hook from react */}
      <table className="min-w-full bg-white border-collapse">
        <thead className="bg-blue-50">
          <tr>
            <th className=" p-2">S/N</th>
            <th className=" p-2">Image</th>
            <th className=" p-2">SKU</th>
            <th className=" p-2">Name</th>
            <th className=" p-2">Title</th>
            <th className=" p-2">Description</th>
            <th className=" p-2">Brand</th>
            <th className=" p-2">Cost Price</th>
            <th className=" p-2">Quantity</th>
            <th className=" p-2">Size</th>
          </tr>
        </thead>

        <tbody>
          {api ? (
            api.map((item, idx) => (
              <tr key={item.id}>
                <td className="border  p-2">{idx + 1}</td>
                <td className="border p-2">
                  <img src={item.image} className="h-10" />
                </td>
                <td className="border p-2">MG234567</td>
                <td className="border p-2">{item.brand}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">{item.brand}</td>
                <td className="border p-2">{item.costPrice.toFixed(2)}</td>
                <td className="border p-2">{item.quamtity}</td>
                <td className="border p-2">{item.size}</td>
              </tr>
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
