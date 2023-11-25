/* eslint-disable @next/next/no-img-element */
'use client'

import { Layout } from "antd";
import { ThemeProvider } from "next-themes";
import HeaderLayout from "../components/Header";
import { Content } from "antd/es/layout/layout";
import FooterLayout from "../components/Footer";

interface Purchase {
  id: number;
  itemName: string;
  price: number;
  quantity: number;
  image: string;
}

const PurchasesPage: React.FC = () => {
  const purchases: Purchase[] = [
    { id: 1, itemName: "Product A", price: 20, quantity: 2, image: "https://pixel-palace.netlify.app/logo.png" },
    { id: 2, itemName: "Product B", price: 30, quantity: 1, image: "https://pixel-palace.netlify.app/logo.png" },
    { id: 3, itemName: "Product C", price: 15, quantity: 3, image: "https://pixel-palace.netlify.app/logo.png" },
  ];

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 w-full mt-20">
          <div>
            <h1 className="text-2xl font-bold mb-4">My Purchases</h1>
            <table className="rounded-md w-full dark:bg-gray-900">
              <thead>
                <tr>
                  <th className="py-2 px-4">Item</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="py-2 px-4 ">
                      <div className="flex items-center">
                        <img src={purchase.image} alt={purchase.itemName} className="w-8 h-8 mr-2" />
                        {purchase.itemName}
                      </div>
                    </td>
                    <td className="py-2 px-4 text-center">{purchase.quantity}</td>
                    <td className="py-2 px-4 text-center">${(purchase.price * purchase.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Content>
        <FooterLayout  />
      </Layout>
    </ThemeProvider>
  );
};

export default PurchasesPage;
