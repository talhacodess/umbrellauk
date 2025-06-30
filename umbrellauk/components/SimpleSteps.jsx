import React, { useState } from 'react';
import Button from './Button';

function SimpleSteps() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Price Quote",
    "Design Approval",
    "Payment",
    "Production",
    "Shipping",
    "Reorders",
  ];

  const contents = [
    [
      {
        title: "Get Price Quote",
        description:
          "Submit a request for free custom quote first through our website or calling our customer service representative. You will have the prices in 30 minutes.",
      },
      {
        title: "Price Matching",
        description:
          "Match the price with your budget line and ask the representative to beat that. We will try our best to give you the lowest possible prices here at Umbrella Custom Packaging.",
      },
      {
        title: "Price Approval",
        description:
          "Give your approval on the prices to proceed with the order right away. We will be delighted to take you on board with Umbrella Custom Packaging throughout your packaging needs.",
      },
    ],
    [
      {
        title: "Mockup/design Creation",
        description:
          "Share your artwork file to the dedicated representative so that our design department can create a 3D digital mockup for you. You can ask for the template to design it by your own as well.",
      },
      {
        title: "Design Suggestions",
        description:
          "Our Creative design team can provide you some creative design suggestions if you ask for that. It’s a certain value addition to your packaging.",
      },
      {
        title: "Mockup/design Approval",
        description:
          "After you receive a 3D digital Mockup for your packaging, you need to approve that in order to proceed ahead. You can ask for frequent changes until it satisfies you before you approve it.",
      },
    ],
    [
      {
        title: "Credit/Debit Card",
        description:
          "The next step is to make the payment and our payment methods are very secure. You can make it through your debit/card.",
      },
      {
        title: "PayPal",
        description:
          "We accept the payments through PayPal as well. Refund Policy is mentioned on our website.",
      },
      {
        title: "Wire/ACH Bank Transfer",
        description:
          "For bigger amounts we suggest Wire/ACH bank transfers to avoid the payment processor’s taxes.",
      },
    ],
    [
      {
        title: "Final Specification Sheet",
        description:
          "A final specification sheet will be sent to you before we send your order towards production after payment.",
      },
      {
        title: "Prototyping/Sampling",
        description:
          "The sample run will be sent to the customer before the bulk order if it’s required or if the customer goes for it.",
      },
      {
        title: "Order Production",
        description:
          "The order will be produced in the given time span and will be sent toward the Quality Control unit before shipping.",
      },
    ],
    [
      {
        title: "Quality Control",
        description:
          "Our QC department will check the order and approve it after certain tests. Then it will be sent to the shipping department.",
      },
      {
        title: "Shipping",
        description:
          "The order will be shipped right away after it is cleared from the QC department. Tracking ID will be provided and the order delivered.",
      },
      {
        title: "Customer’s Review",
        description:
          "The customer’s thoughts and suggestions on the order will be taken and displayed on our media. Issues will be addressed promptly.",
      },
    ],
    [
      {
        title: "Dedicated Support Person",
        description:
          "A customer service representative will be appointed to keep the customer in loop and make reordering easier.",
      },
      {
        title: "Discounts",
        description:
          "The customer will be regularly informed about the discounts that the company offers every month and year like month-end and Christmas discounts.",
      },
      {
        title: "Long Term Business Partnership",
        description:
          "Umbrella Custom Packaging will ultimately build this route to a successful and profitable business relationship with the customer.",
      },
    ],
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex overflow-x-auto  space-x-5 justify-center gap-5 scrollbar-hide">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-6 whitespace-nowrap border rounded-lg ${
              activeTab === index
                ? 'bg-[#ff931e] text-white'
                : 'bg-white text-black'
            } hover:bg-[#293453] hover:text-white`}
          >
            <h4 className="uppercase text-sm font-bold">{tab}</h4>
          </Button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white p-5 rounded-lg shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {contents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-evenly items-center border border-gray-200 bg-white rounded-lg p-5 shadow hover:shadow-2xl text-center"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-[16px] text-gray-800">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleSteps;
