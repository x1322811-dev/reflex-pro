import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface StatsChartProps {
  data: number[];
}

export const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  const chartData = data.map((time, index) => ({
    attempt: index + 1,
    ms: time
  }));

  return (
    <div className="h-48 md:h-64 w-full mt-4 md:mt-6 bg-white/5 rounded-xl p-3 md:p-4 border border-white/5">
      <h3 className="text-white/60 text-xs md:text-sm mb-2 md:mb-4 uppercase tracking-wider font-semibold">反应历史</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey="attempt" 
            stroke="#64748b" 
            tick={{fontSize: 12}} 
            tickLine={false}
            axisLine={false}
            dy={5}
          />
          <YAxis 
            stroke="#64748b" 
            tick={{fontSize: 12}} 
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 50', 'dataMax + 50']}
            width={30}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#4ade80' }}
            formatter={(value: number) => [`${value} ms`, '反应时间']}
            cursor={{ stroke: '#475569', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="ms" 
            stroke="#4ade80" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#4ade80', strokeWidth: 0 }} 
            activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} 
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};