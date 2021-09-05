import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      架空請求サイトです
      <Link to="/pagetwo">
        <p>黒ギャルレスリング</p>
        <p>黒ギャル相撲</p>
        <p>黒ギャル柔道着パーティー</p>
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
