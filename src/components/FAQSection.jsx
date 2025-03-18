import React from 'react';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '../App';

const FAQSection = ({ faqs }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <span className="text-red-600">Questions</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Find answers to common questions about TEDxIITRAM 2024.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general" className="data-[state=active]:bg-red-600">General</TabsTrigger>
              <TabsTrigger value="registration" className="data-[state=active]:bg-red-600">Registration</TabsTrigger>
              <TabsTrigger value="venue" className="data-[state=active]:bg-red-600">Venue & Logistics</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4">{faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}</TabsContent>
            <TabsContent value="registration" className="space-y-4">{faqs.slice(1, 4).map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}</TabsContent>
            <TabsContent value="venue" className="space-y-4">{faqs.slice(2, 5).map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}</TabsContent>
          </Tabs>
          <div className="text-center mt-12"><p className="text-gray-400 mb-4">Still have questions?</p><Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm">Contact Us</Button></div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;