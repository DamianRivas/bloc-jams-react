import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../styles/library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library-container">
        {
          this.state.albums.map((album, index) =>
            <div className="album-info" key={index}>
              <Link to={`/album/${album.slug}`}>
                <img src={album.albumCover} alt={album.title} className="album-cover" />
              </Link>
              <div className="album-name">
                <div className="album-title"><Link to={`/album/${album.slug}`}><span>{album.title}</span></Link></div>
                <div className="album-artist"><Link to={`/album/${album.slug}`}><span>By: {album.artist}</span></Link></div>
                <div><Link to={`/album/${album.slug}`}><span>{album.songs.length} songs</span></Link></div>
              </div>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;