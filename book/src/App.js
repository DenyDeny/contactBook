import React, { Component } from 'react';
import UserList from './components/UserList';
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import ModalForm from './components/ModalForm';
import SuccesModal from './components/SuccesModal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      modalIsOpen: false,
      search: '',
      succesModalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openSuccesModal = this.openSuccesModal.bind(this);
    this.closeSuccesModal = this.closeSuccesModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openSuccesModal() {
    this.setState({succesModalIsOpen: true});
  }

  closeSuccesModal() {
    this.setState({succesModalIsOpen: false});
  }

  addPerson(person) {
    let people = this.state.people;

    people.push(person);
    
    this.setState({people: people})
    }

    updateData(config) {
      this.setState(config);
    }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  getStorage(key) {
    var value = window.localStorage.getItem(key);
    var decoded = JSON.parse(value);

    if (decoded) {
        return decoded;
    }

    return false;
  }

  addPersonFromStorage(person) {
    let people = this.state.people;
    
    people.push(person);
    
    this.setState({people: people[0]})
  }

  componentWillMount() {
    let result = this.getStorage("humans");
    if (result) {
      this.addPersonFromStorage(result)
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Книга контактов</h2>
        </div>
        <div className="App-body">
          <div className="table-inputs">
            <SearchBar update={this.updateSearch.bind(this)}/>
            <AddButton openModal={this.openModal.bind(this)}/>
          </div>
          <UserList 
            people={this.state.people}
            search={this.state.search}
            data={this.state.people}
            update={this.updateData.bind(this)}
          />
          <ModalForm 
            isOpen={this.state.modalIsOpen} 
            onRequestClose={this.closeModal} 
            closeModal={this.closeModal}
            people={this.state.people[0]} 
            addPerson={this.addPerson.bind(this)}
            openSuccesModal={this.openSuccesModal}
          />
          <SuccesModal 
            isOpen={this.state.succesModalIsOpen}
            onRequestClose={this.closeSuccesModal}
            closeModal={this.closeSuccesModal}
            closeSuccesModal={this.closeSuccesModal}
          />
        </div>
      </div>
    );
  }
}

export default App;
