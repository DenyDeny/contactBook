import React from 'react';

export default ({openModal}) => {
  return (
    <div className="form-group">
        <button onClick={openModal} className="btn waves-effect waves-light form-group__btn amber darken-3">Добавить
          <i className="material-icons right">add</i>
        </button>
    </div>
  );
};