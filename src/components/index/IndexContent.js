import { Component } from "react";
import NavBar from "../common/navbar";

export default class MainPageContent extends Component {
  constructor() {
    super();
    this.state = {
      loading: 0,
    };
  }

  updateLoading() {
    if (this.state.loading < 3000)
      this.setState({ loading: this.state.loading + 100 });
  }

  render() {
    setTimeout(() => {
      this.updateLoading();
    }, 100);
    const fade1 = this.state.loading < 100 ? "pre-fade" : "fade-in";
    const fade2 = this.state.loading < 1200 ? "pre-fade" : "fade-in";
    const fade3 = this.state.loading < 2300 ? "pre-fade" : "fade-in";
    return (
      <>
        <NavBar border={false} />
        <div className="title-headers-container title-img">
          <h1 className="main-header">
            <span className={fade1}>Forest McKinney</span>
          </h1>
          <br />
          <h2 className="sub-header">
            <span className={fade2}>
              Full stack software developer at Apex Fintech Solutions
            </span>
          </h2>
          <h2 className="sub-header">
            <span className={fade3}>
              Computer science major at Drexel University
            </span>
          </h2>
          <h3 className="sub-sub-header">
            <span className={fade3}>   Expected Graduation: June 2027</span>
          </h3>
        </div>
      </>
    );
  }
}
