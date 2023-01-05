import React, { Component } from "react";

export default class ProjectCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        ProjectName: "RetencryptoApp",
        image:
          "https://user-images.githubusercontent.com/90987920/202919780-bb081f78-911a-4dda-84d8-b72711089f7a.PNG",
        GithupUrl: "https://github.com/xaliiakkus/RetencrptoApp",
      },
      {
        ProjectName: "Netflix-Clone-React-redux-firebase",
        image:
          "https://user-images.githubusercontent.com/90987920/202921025-48c2c084-0f82-4d10-aa14-fa3c926577c2.PNG",
        GithupUrl:
          "https://github.com/xaliiakkus/Netflix-Clone-React-redux-firebase",
      },
      {
        ProjectName: "Rest-Api-s-Node-Js-Express-Js-Or-MongoDb",
        image: "https://media4.giphy.com/media/VPN0wYbR5i6doEmizT/giphy.gif",
        GithupUrl:
          "https://github.com/xaliiakkus/Rest-Api-s-Node-Js-Express-Js-Or-MongoDb",
      },
    ];
    this.setState({ CartList: data });
  };
  render() {
    return (
      <div className="eth-card">
        {this.state.CartList.map((item) => (
          <div
            className="bg-[#181918] float-left  m-3 mr-6 flex flex-1
            2xl:min-w-[350px]
            2xl:max-w-[400px]
            sm:min-w-[170px]
            sm:max-w-[200px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl eth-card"
            id="My Project"
          >
            <div className="flex flex-col items-center w-full mt-3">
              <div className=" display-flex  justify-center w-full mb-1 mr-5 ">
                <a href="#" target="_blank" rel="noreferrer">
                  <p className="text-white text-base">
                    ProjectName: {item.ProjectName}
                  </p>
                </a>
                <>
                  <br />
                  <p className="text-white text-base">
                    Message: {item.Message}
                  </p>
                </>
              </div>
              <img
                src={item.image}
                alt="nature"
                className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
              />
              <div className="bg-black p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl">
                <p className="text-[#37c7da] font-bold">
                  <a href={item.GithupUrl}>Go Repostory</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
