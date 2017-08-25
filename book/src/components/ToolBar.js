import React, { Component } from 'react';
export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { fullname: true, phone: true, email: true };
  }

  sort(type) {
    const { update, data } = this.props;
    // получаем порядок сортировки
    const isSorted = this.sorted[type];
    // устанавливаем направление
    let direction = isSorted ? 1 : -1;
  
    // создаём новый массив из данных, чтобы не перезаписывать 
    // состояние и сортируем его
    const sorted = [].slice.call(data).sort((a, b) => {
      // чтобы сортировка всегда была одинаковой учтём все условия
      // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
      // значения метод массивов sort сделает свой выбор
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });
  
    // меняем порядок сортировки
    this.sorted[type] = !isSorted;
  
    // обновляем состояние
    update({
      people: sorted
    });
  }

  render() {
    return (
      <th className="toolbar">
        <button className="btn waves-effect white" onClick={() => this.sort('fullname')}>
            <i className="material-icons right">sort</i>ФИО
        </button>
        <button className="btn waves-effect white" onClick={() => this.sort('phone')}>
            <i className="material-icons right">sort</i>Телефон
        </button>

        <button className="btn waves-effect white" onClick={() => this.sort('email')}>
            <i className="material-icons right">sort</i>email
        </button>
      </th>
    );
  }
}