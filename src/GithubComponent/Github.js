import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "d94d0863de56f613c130",
      clientSecret: "966cb3b7f9023215e508a5838fb25a1fc0d97938",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const username = "bernardomendonca";
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=asc&client_id=d94d0863de56f613c130&client_secret=966cb3b7f9023215e508a5838fb25a1fc0d97938`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-8">
            <h4>
              <a href={repo.html_url}>{repo.name}</a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-4">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div id="centered-div">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

export default ProfileGithub;
