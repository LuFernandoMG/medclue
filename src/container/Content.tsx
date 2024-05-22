import { Button, Layout, Row, Col } from "antd";
import styled from "styled-components";
import heroImage from "../assets/medical-records.jpeg";

const { Content: AntContent } = Layout;

type Props = {};

const Content = (props: Props) => {
  return (
    <AntContent>
      <Hero>
        <img src={heroImage} alt="hero" />
        <div>
          <h1>MedClue</h1>
          <p>
            MedClue is a platform that helps you to keep track of your medical
            records in a descentralized storage and boost your deductions with
            AI.
          </p>
          <Button type="primary">Sign up</Button>
        </div>
      </Hero>
      <HowItWorks>
        <Col span={24}>
          <h2>How it works</h2>
        </Col>
        <Col span={8}>
          <h3>Sign up with your wallet</h3>
          <p>
            Sign up with your wallet and define your user type, once you've
            completed this, you can take all the advantages of our platform,
            having the power of countless doctors and the valuable data where
            can take insights.
          </p>
        </Col>
        <Col span={8}>
          <h3>Upload your medical records</h3>
          <p>
            Upload your medical records to our platform, we will store them in a
            decentralized storage, so you and your patient can access them from
            anywhere and anytime. Privately. Also, researchers can access them
            anonymized, to boost the medical science.
          </p>
        </Col>
        <Col span={8}>
          <h3>Get insights from your data</h3>
          <p>
            Our AI will analyze your medical records and give you insights about
            your patients' health, so you can take better decisions and boost
            your deductions.
          </p>
        </Col>
      </HowItWorks>
      <BuildOn>
        <Col span={24}>
          <h2>This project is build with the following technologies</h2>
        </Col>
      </BuildOn>
    </AntContent>
  );
};

const BuildOn = styled(Row)`
  background: white;
  padding: 30px;

  h2 {
    margin: 0;
    text-align: center;
  }
`;

const HowItWorks = styled(Row)`
  background: #f0f2f5;
  padding: 30px;

  div {
    padding: 20px;

    h2 {
      margin: 0;
      text-align: center;
    }
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  padding: 30px;

  div {
    margin: 30px;
  }

  img {
    max-width: 50vw;
  }
`;

export default Content;
