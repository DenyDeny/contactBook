import React, { Component } from 'react';
import Modal from 'react-modal';

class SuccesModal extends Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="SuccesModal">
                    <h2>Контакт добавлен</h2>
                    <button 
                        className="btn waves-effect waves-light green"
                        onClick={this.props.closeSuccesModal}
                    >
                        Ок
                    </button>
                </div>
            </Modal>
        );
    }
  }
  export default SuccesModal;