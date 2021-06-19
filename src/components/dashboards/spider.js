import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class SpiderPage extends React.Component {
  state = {
    dataRadar: {
      labels: ["Private Health Care", "Car Funding", "Multisport", "Free Snacks" ],
      datasets: [
        {
          label: "Germany",
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          data: [65, 59, 90, 81 ]
        },
        {
            label: "Poland",
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(35, 26, 136)",
            data: [66, 77, 88, 99 ]
          },
        {
          label: "France",
          backgroundColor:  "rgba(225, 204,230, .3)",
          borderColor: "rgba(255, 218, 128, 1)",
          data: [28, 48, 40, 19 ]
        }
      ]
    }

  }


render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Benefits</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default SpiderPage;