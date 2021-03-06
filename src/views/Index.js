import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardHeader
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import check from "../assets/img/brand/check.png";

import Comercial from "./Areas/Comercial";
import Implementacion from "./Areas/Implementacion";
import RRHH from "./Areas/RRHH";
import Capacitacion from "./Areas/Capacitacion";
import Comunicacion from "./Areas/Comunicacion";
import Operacion from "./Areas/Operacion";
import TI from "./Areas/TI";
import CommandCenter from "./Areas/CommandCenter";
import Calidad from "./Areas/Calidad";
import Procesos from "./Areas/Procesos";

class Index extends Component {
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          anchors={[
            "Inicio",
            "Indice",
            "Comercial",
            "Implementacion",
            "RRHH",
            "Capacitacion",
            "Comunicacion",
            "Operacion",
            "TI",
            "CommandCenter",
            "Calidad",
            "Procesos"
          ]}
          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                    style={{
                      padding: "3%",
                      textAlign: "center",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      width: "50vw"
                    }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />
                    <ReactFitText compressor={1.5}>
                      <h1 className="transparent">Presentación Anual</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent">2019-2020</h1>
                    </ReactFitText>
                  </div>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col className="fluid">
                        <Card
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          onClick={() => fullpageApi.moveTo("Comercial")}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Comercial y ATC</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Implementacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Implementación</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("RRHH")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>RRHH</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Capacitacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Capacitación</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Comunicacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Comunicación</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Operacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Operación</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("TI")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>TI</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("CommandCenter")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Command Center</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Calidad")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Calidad</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Procesos")}
                          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                          >
                            <h3>Procesos</h3>
                          </CardHeader>
                          <CardBody>
                            <CardImg
                              src={check}
                              alt="Card image cap"
                              style={{ height: 80, width: 80, opacity: 0.8 }}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>

                {/*############################################################# AREAS #############################################################*/}

                <Comercial />
                <Implementacion />
                <RRHH />
                <Capacitacion />
                <Comunicacion />
                <Operacion />
                <TI />
                <CommandCenter />
                <Calidad />
                <Procesos />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
