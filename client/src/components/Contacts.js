import React from 'react';
// import styled from 'styled-components';
import '../css/Contacts.css';
import ContactList from './contacts-components/ContactList';
import ContactGraph from './contacts-components/ContactGraph';

let contactList;

/*
 * props: contacts - firebase contacts obj
*/
class Contacts extends React.Component {
  constructor(props) {
    super(props);

    contactList = JSON.parse(localStorage.getItem('firebaseUser')).contacts;

    this.state = {
      selected: 'list',
    };
  }

  handleTabClick(e) {
    this.setState({ selected: e });
  }

  render() {

    /* conditionally set selected tab */
    const listStyle = { color: '#354578', fontWeight: 'normal', backgroundColor: 'inherit' };
    const graphStyle = { color: '#C93A3C', fontWeight: 'normal', backgroundColor: 'inherit' };
    if (this.state.selected === 'list') {
      listStyle.backgroundColor = '#cad1e8';
      listStyle.fontWeight = 'bold';
    } else {
      graphStyle.backgroundColor = '#F4D8D8';
      graphStyle.fontWeight = 'bold';
    }

    /* conditionally set body */
    const body = this.state.selected === 'list' ? <ContactList list={contactList} /> : <ContactGraph data={contactList} />;

    return (
      <div className="container-fluid">
        <div className="tab-header">
          <button id="listTab" className="tab-link" style={listStyle} onClick={() => this.setState({ selected: 'list' })}>
            List
          </button>
          <button id="graphTab" className="tab-link" style={graphStyle} onClick={() => this.setState({ selected: 'graph' })}>
            Graph
          </button>
        </div>
        <span id="listBorder" /><span id="graphBorder" />
        <div className="tab-body">
          {body}
        </div>
      </div>
    );
  }
}

export default Contacts;
