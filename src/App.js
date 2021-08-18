import "./App.css";

import Card from "./Card";

export default function App() {
  const main = [
    {
      type: "FREE",
      price: "$0",
      list: [
        { name: "Single User", isEn: true, isBold: false },
        { name: "5 GB Storage", isEn: true, isBold: false },
        { name: "Unlimited Public Projects", isEn: true, isBold: false },
        { name: "Community Access", isEn: true, isBold: false },
        { name: "Unlimited Private Projects", isEn: false, isBold: false },
        { name: "Dedicated Phone Support", isEn: false, isBold: false },
        { name: "Free Subdomain", isEn: false, isBold: false },
        { name: "Monthly Status Reports", isEn: false, isBold: false }
      ]
    },
    {
      type: "PLUS",
      price: "$9",
      list: [
        { name: "5 Users", isEn: true, isBold: true },
        { name: "50 GB Storage", isEn: true, isBold: false },
        { name: "Unlimited Public Projects", isEn: true, isBold: false },
        { name: "Community Access", isEn: true, isBold: false },
        { name: "Unlimited Private Projects", isEn: true, isBold: false },
        { name: "Dedicated Phone Support", isEn: true, isBold: false },
        { name: "Free Subdomain", isEn: true, isBold: false },
        { name: "Monthly Status Reports", isEn: false, isBold: false }
      ]
    },
    {
      type: "PRO",
      price: "$49",
      list: [
        { name: "Unlimited Users", isEn: true, isBold: true },
        { name: "150 GB Storage", isEn: true, isBold: false },
        { name: "Unlimited Public Projects", isEn: true, isBold: false },
        { name: "Community Access", isEn: true, isBold: false },
        { name: "Unlimited Private Projects", isEn: true, isBold: false },
        { name: "Dedicated Phone Support", isEn: true, isBold: false },
        { name: "Unlimited Free Subdomain", isEn: true, isBold: false },
        { name: "Monthly Status Reports", isEn: true, isBold: false }
      ]
    }
  ];
  return (
    <div className="App">
      {main.map((props) => (
        <Card
          type={props.type}
          price={props.price}
          list={props.list}
        ></Card>
      ))}
    </div>
  );
}
