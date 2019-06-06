import React, { Component } from "react";
import styled from "styled-components";

import { Header, NewsItem, Container } from "../../ui";
import { rootURL } from "../../api";

export class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      lastItemID: 0,
      numPage: 1
    };
  }

  componentDidMount() {
    fetch(`${rootURL}/${this.props.page}?page=${this.state.numPage}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          content: data,
          lastItemID: data[data.length - 1].id
        });
      });
  }

  handlePagination = dir => {
    // // dir can be 'less' or 'more'
    if (dir === "more") {
      fetch(`${rootURL}/${this.props.page}?page=${this.state.numPage + 1}`)
        .then(res => res.json())
        .then(data => {
          const dataLastItemID = data[data.length - 1].id;
          if (this.state.lastItemID !== dataLastItemID) {
            this.setState(state => ({
              content: data,
              lastItemID: dataLastItemID,
              numPage: state.numPage + 1
            }));
          }
        });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <PageContainer>
          <div>
            {this.state.content.map(e => (
              <NewsItem
                {...e}
                key={e.id}
                i={
                  this.state.content.indexOf(e) +
                  (this.state.numPage - 1) * 30 +
                  1
                }
              />
            ))}
          </div>

          <div>
            <button onClick={() => this.handlePagination("less")}>{"<"}</button>
            <span>{this.state.numPage}</span>
            <button onClick={() => this.handlePagination("more")}>{">"}</button>
          </div>
        </PageContainer>
      </div>
    );
  }
}

const PageContainer = styled(Container)`
  flex-direction: column;
  padding-top: 70px;
`;
