import React from 'react';

import data from './data/lieu_de_tournage.csv'

export class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      search: '',
    }
    this.handleSearch = this.handleSearch.bind(this);

    this.data = [];

    for (let i in data)
    {
      let one = {
        titre: data[i].titre.toLowerCase(),
        adresse: data[i].adresse.toLowerCase(),
        xy: data[i].xy,
      }
      this.data.push(one)
    }
  }

  handleOpenStreetView(info)
  {
    let xy = info.xy;
    window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${xy}&heading=-45&pitch=38&fov=80`);
  }

  getMovie()
  {
    let components = this.data.map((info, i) =>
    {
      if (info.titre.includes(this.state.search))
      {
        return (
          <tr key={i}>
            <td>{info.titre}</td>
            <td>{info.adresse}</td>
            <td><button className="button" onClick={() => this.handleOpenStreetView(info)}>StreetView</button></td>
          </tr>
        )
      }
      else
      {
        return (<tr></tr>)
      }
    })
    return components;
  }

  handleSearch(event)
  {
    this.setState({search: event.target.value});
  }

  render()
  {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">Paris Movie</h1>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-body">
            <div className="container">

              <h2 className="title is-3">Les films et séries</h2>

              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" onChange={this.handleSearch} type="email" placeholder="rechercher"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
                </p>
              </div>

              <table className="table" style={{width: '100%', backgroundColor: 'transparent'}}>
                <thead>
                  <tr>
                    <th><abbr title="Film">Film/Série</abbr></th>
                    <th><abbr title="Adresse">Adresse</abbr></th>
                    <th><abbr title="Action">Action</abbr></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getMovie()}
                </tbody>
              </table>

            </div>
          </div>
        </section>

      </div>
    )
  }
}
