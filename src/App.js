// src/App.js
import React, { useState, useEffect } from 'react';
import Graph from './Graph';

const App = () => {
  const [fileNumber, setFileNumber] = useState('');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (fileNumber) {
      fetch(`/json/${fileNumber}_react_flow_data.json`)
        .then((res) => res.json())
        .then(({ nodes, edges }) => {
          setNodes(nodes);
          setEdges(edges);
        });
    }
  }, [fileNumber]);

  return (
    <div>
      <input
        type="number"
        value={fileNumber}
        onChange={(e) => setFileNumber(e.target.value)}
        placeholder="파일 번호 입력"
      />
      <Graph nodes={nodes} edges={edges} />
    </div>
  );
};

export default App;
