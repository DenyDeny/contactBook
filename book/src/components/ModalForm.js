import React, { Component } from 'react';
import Modal from 'react-modal';

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            phone: "",
            email: ""
        };
    }

    // Парсим данные из localStorage
    getStorage(key, defaultValue) {
        var value = window.localStorage.getItem(key);

        var decoded = JSON.parse(value);

        if (decoded) {
            return decoded;
        }

        return false;
    }

    /*
    * Записываем данные в localStorage.
    * Сначала читаем данные, если они есть,
    * то пушим к ним новый объект
    */
    setStorage(key, value) {
        let arr = this.getStorage(key, value) || [];
        arr.push(value);
        window.localStorage.setItem(
            key, JSON.stringify(arr)
        )
    }

    // Обработчик отправки формы
    handleSubmit(e) {
        e.preventDefault();
        this.props.addPerson(this.state)
        this.setStorage("humans", this.state)
        this.setState({fullname: "", phone: "", email: ""})
        this.props.closeModal();
        this.props.openSuccesModal();
    }
    
    // Обработчик полей формы
    handleChange(data) {
        let state = this.state;
        let name = data.target.name;
        state[name] = data.target.value;
        this.setState(state);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <form className="ModalForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field">
                        <input 
                            id="fullname"
                            name="fullname"
                            type="text" 
                            className="validate" 
                            ref="fullname"
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <label htmlFor="fullname">ФИО*:</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="phone"
                            name="phone"
                            type="text" 
                            className="validate" ref="phone"
                            onChange={this.handleChange.bind(this)}
                            required
                        />
                        <label htmlFor="phone">Телефон*:</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="email"
                            name="email"
                            className="validate" 
                            ref="email"
                            onChange={this.handleChange.bind(this)}
                            type="email" 
                            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
                        />
                        <label htmlFor="email">email:</label>
                    </div>
                    <div className="ModalForm__btns">
                    <button
                        type="submit"
                        className="btn__add btn waves-effect waves-light green accent-3">
                        Добавить<i className="material-icons right">add</i>
                    </button>
                    <button 
                        onClick={this.props.closeModal} 
                        className="btn__close btn waves-effect waves-light deep-orange">
                        Отмена<i className="material-icons right">close</i>
                    </button>
                    </div>
                </form>
            </Modal>
        );
    }
  }
  export default ModalForm;