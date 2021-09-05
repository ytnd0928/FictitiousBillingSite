import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <h2>架空請求サイトを開いた時の感情になれるサイトです</h2>
      <Link to="/pagetwo">
        <p>黒ギャルレスリング</p>
        <p>黒ギャル相撲</p>
        <p>黒ギャル柔道</p>
        <p>黒ギャル綱引き</p>
      </Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      警告
      <p>あなたはウイルスに感染しています。</p>
      <Link to="/">戻る</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
