import React from 'react';

import data from './data/lieu_de_tournage.csv'

export class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      selected: [],
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(i)
  {
    let selected = this.state.selected;
    selected.push(i);
    this.setState({selected: selected});
  }

  handleDelete(index)
  {
    let selected = this.state.selected;
    selected.splice(index, 1);
    this.setState({selected: selected});
  }

  handleOpenStreetView(info)
  {
    let xy = info.xy;
    window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${xy}&heading=-45&pitch=38&fov=80`);
  }

  getMovie()
  {
    let components = data.map((info, i) =>
    {
      return (
        <tr key={i}>
          <td>{info.titre}</td>
          <td>{info.adresse}</td>
          <td><button className="button" onClick={() => this.handleOpenStreetView(info)}>StreetView</button></td>
        </tr>
      )
    })
    return components;
  }

  getMovieSelected()
  {
    let components = [];
    for (let i in this.state.selected)
    {
      let index = this.state.selected[i];
      components.push(
        <tr key={i}>
          <td>{data[index].titre}</td>
          <td>{data[index].adresse}</td>
          <td><button className="button is-light" onClick={() => this.handleDelete(i)}>Enlever</button></td>
        </tr>
      )
    }
    return components;
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
