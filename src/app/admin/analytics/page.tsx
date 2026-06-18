"use client";

import {

  BarChart,

  Bar,

  XAxis,

  YAxis

} from "recharts";

const data = [

  {
    month:"Jan",
    sales:12000
  },

  {
    month:"Feb",
    sales:18000
  },

  {
    month:"Mar",
    sales:25000
  }
];

export default function AnalyticsPage() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Analytics

      </h1>

      <BarChart
        width={700}
        height={300}
        data={data}
      >

        <XAxis dataKey="month"/>

        <YAxis/>

        <Bar dataKey="sales"/>

      </BarChart>

    </div>
  );
}
