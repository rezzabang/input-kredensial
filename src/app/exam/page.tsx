'use client';
import React from 'react';
const examUrl = process.env.NEXT_PUBLIC_EXAM_URL;

const Exam = () => (
    <div className="App" style={{ padding: '0', margin: '0', height: '100vh'}}>
    <iframe
      src={examUrl}
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
      }}
      title="Exam"
      ></iframe>
    </div>
);

export default Exam;