import { Layout } from "antd";
import Header from "./container/Header";
import Content from "./container/Content";

const { Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer style={{ textAlign: 'center' }}>Build with 💙 for the HackFS Hackathon ⚛️</Footer>
    </Layout>
  );
}

export default App;
