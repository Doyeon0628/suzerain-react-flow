// src/App.js
import React, { useState, useEffect } from 'react';
import Graph from './Graph';

const App = () => {
  const [fileNumber, setFileNumber] = useState('');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (fileNumber) {
      // 완전한 URL을 사용하여 파일 참조
      const url = `https://Doyeon0628.github.io/suzerain-react-flow/Json/ConversationID-${fileNumber}_react_flow_data.json`;

      fetch(url)
        .then((res) => {
          // 오류 처리를 위한 상태 코드 확인
          if (!res.ok) {
            throw new Error(`서버에서 파일을 찾을 수 없습니다: 상태 코드 ${res.status}`);
          }
          return res.json();
        })
        .then(({ nodes, edges }) => {
          setNodes(nodes);
          setEdges(edges);
        })
        .catch((error) => {
          // 오류가 발생했을 때 콘솔에 오류 메시지 출력
          console.error("데이터를 불러오는 중 오류가 발생했습니다:", error.message);
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
